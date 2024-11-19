"use client";
import { useState } from "react";
import {
  Clipboard,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  Code,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function TwitterBotDocs() {
  const [openSection, setOpenSection] = useState<string | null>(
    "prerequisites"
  );

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const Section = ({
    title,
    id,
    children,
  }: {
    title: string;
    id: string;
    children: React.ReactNode;
  }) => (
    <Card className="mb-4">
      <CardHeader className="cursor-pointer" onClick={() => toggleSection(id)}>
        <CardTitle className="flex justify-between items-center">
          {title}
          {openSection === id ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </CardTitle>
      </CardHeader>
      {openSection === id && <CardContent>{children}</CardContent>}
    </Card>
  );

  const CodeBlock = ({ code }: { code: string }) => (
    <div className="relative">
      <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
        <code>{code}</code>
      </pre>
      <Button
        variant="outline"
        size="icon"
        className="absolute top-2 right-2"
        onClick={() => copyToClipboard(code)}
      >
        <Clipboard className="h-4 w-4" />
      </Button>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8 font-[family-name:var(--font-geist-mono)]">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold mb-8">XBotter Documentation</h1>
        <Link href="/">
          <Button variant="outline" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Return to Home
          </Button>
        </Link>
      </div>

      <div
        className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-8"
        role="alert"
      >
        <p className="font-bold">Thanks and References</p>
        <p className="mt-2">
          Strong reference to <strong>Ryan Carmody</strong> for the video and
          tutorial, and special thanks to
          <strong> Gabe</strong> for the constant support.
        </p>
      </div>
      <div
        className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-8"
        role="alert"
      >
        <p className="font-bold">⚠️ CAUTION</p>
        <p>
          {`This bot is designed to generate and post controversial and
          provocative content. Using such a bot might violate Twitter's terms of
          service and could lead to account suspension. Proceed at your own
          risk.`}
        </p>
      </div>
      <Section title="Prerequisites" id="prerequisites">
        <p>{`Before setting up the bot, ensure you have the following:`}</p>
        <ul className="list-disc pl-5 mt-2">
          <li>{`Node.js installed on your system`}</li>
          <li>{`A Twitter Developer account with API keys`}</li>
          <li>
            {`An OpenAI API key (paid) || Claude API key (free) || Mistral (Heavy on CPU) || Any other text completion API
            key`}
          </li>
        </ul>
      </Section>

      <Section title="Installation" id="installation">
        <ol className="list-decimal pl-5">
          <li className="mb-2">{`Clone the repository or download the script.`}</li>
          <CodeBlock code={`https://github.com/illyangz/xbotter.git`} />
          <li className="mb-2">
            {`Install the required dependencies:`}
            <CodeBlock code="npm install" />
          </li>
          <li className="mb-2">
            {`Create a .env file in the root of your directory with the following values. Note the model used here
            is openai, but can be swapped.`}{" "}
            <CodeBlock
              code={`TWITTER_API_KEY=your_twitter_api_key
TWITTER_API_SECRET=your_twitter_api_secret
TWITTER_ACCESS_TOKEN=your_twitter_access_token
TWITTER_ACCESS_SECRET=your_twitter_access_secret
OPENAI_API_KEY=your_openai_api_key`}
            />
          </li>
          <li>
            {`Use curl method to authenticate your & test your connection with the Twitter API using your Bearer Token`}
            <CodeBlock
              code={`"curl -X GET "https://api.twitter.com/2/users/me" \ -H "Authorization: Bearer YOUR_BEARER_TOKEN"`}
            />
          </li>
        </ol>
      </Section>

      <Section title="Configuration" id="configuration">
        <ol className="list-decimal pl-5">
          <li className="mb-2">
            {`Modify the tweetTopics array in the script to include your desired
              topics.`}
          </li>
          <li className="mb-2">
            {`Adjust the cron schedule in the cronTweet variable if you want to
            change the tweet frequency.`}
          </li>
          <li>
            {`If needed, modify the generateTweetContent function to adjust the
            prompt or OpenAI model settings.`}
          </li>
        </ol>
      </Section>

      <Section title="Usage" id="usage">
        <p>{`To start the bot, run:`}</p>
        <CodeBlock code="node your_script_name.js" />
        <p className="mt-4">The bot will:</p>
        <ol className="list-decimal pl-5">
          <li>{`Generate three tweet options every hour`}</li>
          <li>{`Prompt you to choose one or regenerate`}</li>
          <li>{`Post the selected tweet to Twitter`}</li>
          <li>{`Log the posted tweet`}</li>
        </ol>
        <p className="mt-4">{`To stop the bot, press Ctrl+C in the terminal.`}</p>
      </Section>

      <Section title="p2 Commands" id="p2-commands">
        <p>
          {`Here are some useful p2 commands for managing your bot in the
          terminal:`}
        </p>
        <h3 className="font-semibold mt-4 mb-2">{`Logs`}</h3>
        <CodeBlock code="p2 logs" />
        <p className="mt-2 mb-4">{`View the most recent logs for your bot.`}</p>

        <CodeBlock code="p2 logs --lines 100" />
        <p className="mt-2 mb-4">{`View the last 100 lines of logs.`}</p>

        <CodeBlock code="p2 logs --follow" />
        <p className="mt-2 mb-4">
          {`Follow the logs in real-time (similar to 'tail -f')`}.
        </p>

        <h3 className="font-semibold mt-4 mb-2">{`Other Useful Commands`}</h3>
        <CodeBlock code="p2 list" />
        <p className="mt-2 mb-4">{`List all running p2 processes.`}</p>

        <CodeBlock code="p2 stop twitter-bot" />
        <p className="mt-2 mb-4">
          {`Stop the Twitter bot process (replace 'twitter-bot' with your actual
          process name).`}
        </p>

        <CodeBlock code="p2 restart twitter-bot" />
        <p className="mt-2 mb-4">{`Restart the Twitter bot process.`}</p>

        <CodeBlock code="p2 delete twitter-bot" />
        <p className="mt-2 mb-4">{`Delete the Twitter bot process from p2.`}</p>

        <CodeBlock code="p2 monit" />
        <p className="mt-2 mb-4">
          {`Open the p2 monitoring interface to view CPU and memory usage.`}
        </p>
      </Section>

      <Section title="Customization" id="customization">
        <ul className="list-disc pl-5">
          <li>
            {`To change the tweet generation style, modify the tweetStyles array
            in the generateTweetContent function.`}
          </li>
          <li>
            {`To adjust the similarity threshold for avoiding duplicate tweets,
            modify the value in the isSimilarTweet function.`}
          </li>
        </ul>
      </Section>
      <Section title="Customization" id="customization">
        <ul className="list-disc pl-5">
          <li>
            {`To change the tweet generation style, modify the tweetStyles array
            in the generateTweetContent function.`}
          </li>
          <li>
            {`To adjust the similarity threshold for avoiding duplicate tweets,
            modify the value in the isSimilarTweet function.`}
          </li>
        </ul>
      </Section>

      <Section title="Troubleshooting" id="troubleshooting">
        <p>{`If you encounter issues:`}</p>
        <ol className="list-decimal pl-5">
          <li>{`Check your API keys in the .env file`}</li>
          <li>{`Ensure all dependencies are correctly installed`}</li>
          <li>{`Check the console for error messages`}</li>
        </ol>
        <p className="mt-4">
          {`For persistent problems, refer to the documentation of the used
          libraries or seek help in the project&apos;s support channels.`}
        </p>
      </Section>

      <Section title="Disclaimer" id="disclaimer">
        <p>
          {`This bot is for educational purposes only. The authors are not
          responsible for any misuse or violations of Twitter&apos;s terms of
          service. Use responsibly and at your own risk.`}
        </p>
      </Section>
    </div>
  );
}
