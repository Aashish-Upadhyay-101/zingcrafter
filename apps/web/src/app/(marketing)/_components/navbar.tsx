import { Button } from "@zingcrafter/ui/components/ui/button";

export default function Navbar() {
  return (
    <div className="fixed top-4 flex h-14 w-full items-center px-4">
      <div className="mx-auto flex w-full items-center justify-between md:max-w-screen-xl">
        <h2 className="text-2xl font-semibold">ZingCrafter</h2>
        <Button className="bg-blue-600 duration-150 hover:bg-blue-700">Go to Dashboard</Button>
      </div>
    </div>
  );
}
