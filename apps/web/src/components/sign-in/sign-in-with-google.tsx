import { Button } from "@zingcrafter/ui/components/ui/button";
import { GoogleIcon } from "@zingcrafter/ui/components/icons/google";

export default function SignInWithGoogle() {
  return (
    <Button variant={"outline"} size={"lg"} className="mt-5 w-full">
      <GoogleIcon />
      Sigin with Google
    </Button>
  );
}
