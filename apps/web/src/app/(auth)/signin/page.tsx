import SignInForm from "~/components/sign-in/sign-in-form";
import SignInHeader from "~/components/sign-in/sign-in-header";
import SignInSeparator from "~/components/sign-in/sign-in-separator";
import SignInWithGoogle from "~/components/sign-in/sign-in-with-google";

export default function SigninPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex max-w-lg flex-col items-center justify-center overflow-hidden p-1">
        <SignInHeader />
        <SignInForm />
        <SignInSeparator />
        <SignInWithGoogle />
      </div>
    </div>
  );
}
