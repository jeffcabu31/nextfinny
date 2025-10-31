import { AuthLayout } from "@/app/components/tailwindui/auth-layout";
import { Button } from "@/app/components/tailwindui/button";
import { Checkbox, CheckboxField } from "@/app/components/tailwindui/checkbox";
import { Field, Label } from "@/app/components/tailwindui/fieldset";
import { Heading } from "@/app/components/tailwindui/heading";
import { Input } from "@/app/components/tailwindui/input";
import { Strong, Text, TextLink } from "@/app/components/tailwindui/text";

export default function Page() {
  return (
    <>
      <AuthLayout>
        <form
          action="#"
          method="POST"
          className="grid w-full max-w-sm grid-cols-1 gap-8"
        >
          <Text>LOGO HERE</Text>
          <Heading>Sign in to your account</Heading>
          <Field>
            <div>
              <Label>Email</Label>
              <Input name="fullname" />
            </div>
          </Field>

          <Field>
            <Label>Password</Label>
            <Input name="password" />
          </Field>
          <div className="flex items-center justify-between">
            <CheckboxField>
              <Checkbox name="remember" />
              <Label>Remember me</Label>
            </CheckboxField>
            <Text>
              <TextLink href="#">
                <Strong>Forgot password?</Strong>
              </TextLink>
            </Text>
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
          <Text>
            Don’t have an account?{" "}
            <TextLink href="/auth/signup">
              <Strong>Sign up</Strong>
            </TextLink>
          </Text>
        </form>
      </AuthLayout>
    </>
  );
}
