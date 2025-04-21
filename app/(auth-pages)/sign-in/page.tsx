import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Mail, Lock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;
  return (
    <div className="w-full max-w-md mx-auto flex flex-col">

      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Welcome Back</h1>
        <p className="text-sm text-muted-foreground mt-2">
          Enter your credentials to access your account
        </p>
      </div>
      
      <div className="bg-card rounded-lg border shadow-sm p-6">
        <form className="flex flex-col space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                name="email" 
                id="email"
                placeholder="you@example.com" 
                className="pl-10" 
                required 
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="password" className="text-sm font-medium">Password</Label>
              <Link
                className="text-xs font-medium text-primary hover:underline"
                href="/forgot-password"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="pl-10"
                required
              />
            </div>
          </div>
          
          <SubmitButton 
            pendingText="Signing In..." 
            formAction={signInAction}
            className="w-full mt-2"
          >
            Sign in
          </SubmitButton>
          
          <FormMessage message={searchParams} />
        </form>
      </div>
      
      <div className="text-center mt-6">
        <p className="text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link className="font-medium text-primary hover:underline" href="/sign-up">
            Sign up
          </Link>
        </p>
      </div>
      <div className="text-center mt-6">
        <Button variant="ghost" size="sm" className="flex items-center gap-1 text-muted-foreground hover:text-foreground" asChild>
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}