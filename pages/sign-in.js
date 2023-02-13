import { useRouter } from "next/router";
import { useState } from "react";
import Page from "../components/Page";
import Input from "../components/Input";
import Field from "../components/Field";
import Button from "../components/Button";
import { useSignIn } from "../hooks/user";
function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, signInError, signInLoading } = useSignIn();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const valid = await signIn(email, password);
    console.log("valid", valid);
    if (valid) {
      router.push("/");
    }
  };
  return (
    <Page title="Sign In">
      <form onSubmit={handleSubmit}>
        <Field label="Email">
          <Input
            type="email"
            value={email}
            required
            onChange={(event) => setEmail(event.target.value)}
          />
        </Field>

        <Field label="Password">
          <Input
            type="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </Field>
        {signInError && <p className="text-red-700">Invalid credentials</p>}
        {signInLoading ? (
          <p>Loading...</p>
        ) : (
          <Button type="submit">Sign in </Button>
        )}
      </form>
    </Page>
  );
}
export default SignInPage;
