import { AuthLayout } from "../../components/tailwindui/auth-layout";
import { Button } from "../../components/tailwindui/button";
import { Checkbox, CheckboxField } from "../../components/tailwindui/checkbox";
import { Field, Fieldset, Label } from "../../components/tailwindui/fieldset";
import { Heading } from "../../components/tailwindui/heading";
import { Input } from "../../components/tailwindui/input";
import { Strong, Text, TextLink } from "../../components/tailwindui/text";

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
          <Heading>Create a new account</Heading>
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
            Already have an account?{" "}
            <TextLink href="/auth/login">
              <Strong>Sign In</Strong>
            </TextLink>
          </Text>
        </form>
      </AuthLayout>
    </>
  );
}
