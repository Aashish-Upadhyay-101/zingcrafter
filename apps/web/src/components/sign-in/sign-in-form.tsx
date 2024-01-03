import { Label } from "@zingcrafter/ui/components/ui/label";
import { Input } from "@zingcrafter/ui/components/ui/input";
import { Button } from "@zingcrafter/ui/components/ui/button";

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
