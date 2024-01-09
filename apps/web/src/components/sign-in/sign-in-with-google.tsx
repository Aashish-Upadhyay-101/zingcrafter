"use client";

import { Button } from "@zingcrafter/ui/components/primitives/button";
import { GoogleIcon } from "@zingcrafter/ui/components/icons/google";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignInWithGoogle() {
  const [loading, isLoading] = useState<boolean>(false);

  return (
    <Button
      onClick={() => {
        isLoading(true);
        signIn("google", {
          callbackUrl: window.location.origin,
        });
      }}
      disabled={loading}
      variant={"outline"}
      size={"lg"}
      className="mt-5 w-full"
    >
      <GoogleIcon />
      Sigin with Google
    </Button>
  );
}
