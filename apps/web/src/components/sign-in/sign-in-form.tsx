import { Label } from "@zingcrafter/ui/components/primitives/label";
import { Input } from "@zingcrafter/ui/components/primitives/input";
import { Button } from "@zingcrafter/ui/components/primitives/button";

export default function SignInForm() {
  return (
    <form className="mt-6 flex w-full flex-col gap-5">
      <div className="flex flex-col gap-2">
        <Label className="text-base">Email</Label>
        <Input />
      </div>
      <Button className="w-full">Login with Email</Button>
    </form>
  );
}
