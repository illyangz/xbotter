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
import { Loader2, CreditCard, Wallet } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState<"stripe" | "sol">(
    "stripe"
  );
  const [amount, setAmount] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();

  const validateAmount = () => {
    const numAmount = parseFloat(amount);

    // Stripe minimum
    if (paymentMethod === "stripe" && numAmount < 5) {
      toast({
        title: "Invalid Amount",
        description: "Minimum Stripe payment is $5",
        variant: "destructive",
      });
      return false;
    }

    // SOL minimum and validation
    if (paymentMethod === "sol" && numAmount < 0.1) {
      toast({
        title: "Invalid SOL Amount",
        description: "Minimum SOL transaction is 0.1 SOL",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateAmount()) return;

    setIsProcessing(true);

    try {
      if (paymentMethod === "stripe") {
        // Real Stripe integration would go here
        await stripePaymentIntegration(amount);
        toast({
          title: "Payment Successful",
          description: `You have paid $${amount} via Stripe`,
        });
      } else {
        // Solana wallet integration
        await solanaPaymentIntegration(amount);
        toast({
          title: "Transaction Successful",
          description: `You have sent ${amount} SOL`,
        });
      }
      router.push("/thank-you");
    } catch (error) {
      toast({
        title: "Payment Failed",
        description: "Error processing payment. Check details and try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  // Mock payment integration functions
  const stripePaymentIntegration = async (amount: string) => {
    // Placeholder for actual Stripe API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  const solanaPaymentIntegration = async (amount: string) => {
    // Placeholder for Solana wallet transaction
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return (
    <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-screen">
      <Card className="max-w-md mx-auto shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Secure Payment</CardTitle>
          <CardDescription>
            Choose payment method and complete your transaction
          </CardDescription>
        </CardHeader>
        <form onSubmit={handlePayment}>
          <CardContent className="space-y-6">
            <RadioGroup
              defaultValue="stripe"
              onValueChange={(value) =>
                setPaymentMethod(value as "stripe" | "sol")
              }
              className="grid grid-cols-2 gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="stripe" id="stripe" />
                <Label
                  htmlFor="stripe"
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <CreditCard className="h-5 w-5" />
                  <span>Stripe</span>
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="sol" id="sol" />
                <Label
                  htmlFor="sol"
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <Wallet className="h-5 w-5" />
                  <span>Solana</span>
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
                step={paymentMethod === "stripe" ? "0.01" : "0.001"}
                min={paymentMethod === "stripe" ? "5" : "0.1"}
                placeholder={`Min: ${
                  paymentMethod === "stripe" ? "$5" : "0.1 SOL"
                }`}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                className="w-full"
              />
              <p className="text-xs text-muted-foreground">
                {paymentMethod === "stripe"
                  ? "Minimum $5 USD via Stripe"
                  : "Minimum 0.1 SOL via Solana Wallet"}
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" type="submit" disabled={isProcessing}>
              {isProcessing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing Payment
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
