import { Separator } from "@zingcrafter/ui/components/primitives/separator";

export default function SignInSeparator() {
  return (
    <div className=" mt-5 flex w-full items-center justify-center">
      <Separator />
      <span className="px-4 text-sm text-neutral-400">OR</span>
      <Separator />
    </div>
  );
}
