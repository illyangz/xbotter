"use client";
import { useState } from "react";
import {
  Clipboard,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Navbar from "@/components/ui/navbar";

export default function TwitterBotDocs() {
  const [openSection, setOpenSection] = useState<string | null>(
    "prerequisites"
  );

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
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
    <Card className="mb-4 border-2 border-indigo-100 dark:border-indigo-800 rounded-xl hover:shadow-sm dark:hover:shadow-indigo-800/50 transition-shadow">
      <CardHeader
        className="cursor-pointer rounded-t-xl"
        onClick={() => toggleSection(id)}
      >
        <CardTitle className="flex justify-between items-center text-indigo-800 dark:text-indigo-200 text-base sm:text-lg md:text-xl">
          {title}
          {openSection === id ? (
            <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-600" />
          ) : (
            <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-600" />
          )}
        </CardTitle>
      </CardHeader>
      {openSection === id && (
        <CardContent className="bg-white dark:bg-gray-900 rounded-b-xl">
          {children}
        </CardContent>
      )}
    </Card>
  );

  const CodeBlock = ({ code }: { code: string }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = (e: React.MouseEvent) => {
      e.stopPropagation(); // Prevent event from bubbling up to the card
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    };

    return (
      <pre className="bg-indigo-50 dark:bg-gray-800 p-2 rounded-md overflow-x-auto border-l-4 border-indigo-500 text-xs sm:text-sm relative flex items-center">
        <code className="text-indigo-900 dark:text-indigo-200 flex-grow">
          {code}
        </code>
        <button
          onClick={handleCopy}
          className="ml-2 bg-white/30 dark:bg-gray-700/30 hover:bg-white/50 dark:hover:bg-gray-700/50 p-1 h-6 w-6 rounded flex items-center justify-center transition-colors"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-600" />
          ) : (
            <Clipboard className="h-4 w-4 text-indigo-600" />
          )}
        </button>
      </pre>
    );
  };

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-6 sm:py-12 font-sans">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="gradient-text text-transparent text-3xl sm:text-4xl md:text-5xl font-bold animate-gradient mb-2 sm:mb-4 mt-6 sm:mt-10">
            XBotter Docs
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Automate your X growth with AI-powered posting
          </p>
        </div>

        <div className="bg-green-50 dark:bg-green-900/30 border-l-4 border-green-500 text-green-800 dark:text-green-200 p-3 sm:p-4 mb-6 sm:mb-8 rounded-r-lg text-sm sm:text-base">
          <p className="font-bold">Thanks and References</p>
          <p className="mt-2">
            Inspired by <strong>Ryan Carmody</strong>'s tutorial and{" "}
            <strong>Gabe</strong>'s support
          </p>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-500 text-yellow-800 dark:text-yellow-200 p-3 sm:p-4 mb-6 sm:mb-8 rounded-r-lg text-sm sm:text-base">
          <p className="font-bold">⚠️ CAUTION</p>
          <p>
            This bot generates provocative content. Potential Twitter ToS
            violations may result in account suspension.
          </p>
        </div>

        <Section title="Prerequisites" id="prerequisites">
          <p className="mb-4 text-sm sm:text-base">
            Before setting up the bot, ensure you have:
          </p>
          <ul className="space-y-2 pl-5 list-disc text-indigo-900 dark:text-indigo-200 text-sm sm:text-base">
            <li>Node.js installed</li>
            <li>Twitter Developer API keys</li>
            <li>AI API key (OpenAI, Claude, Mistral, etc.)</li>
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
                code={`curl -X GET "https://api.twitter.com/2/users/me" -H "Authorization: Bearer YOUR_BEARER_TOKEN"`}
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

        <Section title="Troubleshooting" id="troubleshooting">
          <p>{`If you encounter issues:`}</p>
          <ol className="list-decimal pl-5">
            <li>{`Check your API keys in the .env file`}</li>
            <li>{`Ensure all dependencies are correctly installed`}</li>
            <li>{`Check the console for error messages`}</li>
          </ol>
          <p className="mt-4">
            {`For persistent problems, refer to the documentation of the used
          libraries or seek help in the project's support channels.`}
          </p>
        </Section>

        <Section title="Disclaimer" id="disclaimer">
          <p>
            {`This bot is for educational purposes only. The authors are not
          responsible for any misuse or violations of Twitter's terms of
          service. Use responsibly and at your own risk.`}
          </p>
        </Section>

        <Link href="/">
          <Button
            variant="outline"
            className="flex-grow w-full items-center justify-center rounded-lg mb-4 border-2 border-indigo-100 dark:border-indigo-800 hover:shadow-sm dark:hover:shadow-indigo-800/50 transition-shadow"
          >
            <ArrowLeft className="mr-2 text-xl text-indigo-900" />
            <p className="text-indigo-900">Return</p>
          </Button>
        </Link>
      </div>
    </>
  );
}
