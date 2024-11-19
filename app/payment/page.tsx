"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Toast } from "@/components/ui/use-toast";
import { Loader2, CreditCard, Wallet } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState<"stripe" | "sol">(
    "stripe"
  );
  const [amount, setAmount] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      if (paymentMethod === "stripe") {
        // Placeholder for Stripe payment processing
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating API call
        toast({
          title: "Payment Successful",
          description: `You have paid $${amount} via Stripe.`,
        });
      } else {
        // Placeholder for SOL transaction
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating blockchain transaction
        toast({
          title: "Transaction Successful",
          description: `You have sent ${amount} SOL.`,
        });
      }
      router.push("/thank-you");
    } catch (error) {
      toast({
        title: "Payment Failed",
        description:
          "There was an error processing your payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Payment</CardTitle>
          <CardDescription>
            Choose your payment method and enter the amount.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handlePayment}>
          <CardContent className="space-y-4">
            <RadioGroup
              defaultValue="stripe"
              onValueChange={(value) =>
                setPaymentMethod(value as "stripe" | "sol")
              }
              className="flex flex-col space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="stripe" id="stripe" />
                <Label
                  htmlFor="stripe"
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <CreditCard className="h-4 w-4" />
                  <span>Pay with Stripe</span>
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="sol" id="sol" />
                <Label
                  htmlFor="sol"
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <Wallet className="h-4 w-4" />
                  <span>Pay with SOL</span>
                </Label>
              </div>
            </RadioGroup>
            <div className="space-y-2">
              <Label htmlFor="amount">
                Amount ({paymentMethod === "stripe" ? "USD" : "SOL"})
              </Label>
              <Input
                id="amount"
                type="number"
                placeholder={
                  paymentMethod === "stripe"
                    ? "Enter amount in USD"
                    : "Enter amount in SOL"
                }
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" type="submit" disabled={isProcessing}>
              {isProcessing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing
                </>
              ) : (
                `Pay ${amount} ${paymentMethod === "stripe" ? "USD" : "SOL"}`
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
