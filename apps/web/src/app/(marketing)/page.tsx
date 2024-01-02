import { Button } from "@zingcrafter/ui/components/ui/button";

export default function MarketingPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex max-w-xl flex-col items-center justify-center p-4 md:max-w-5xl">
        <h1 className="text-center text-3xl font-semibold text-neutral-700 md:text-6xl">
          <strong className="text-green-500">Craft.</strong>{" "}
          <strong className="text-blue-500">Connect.</strong>{" "}
          <strong className="text-purple-500">Conquer.</strong> Build Your World, Where Control
          Meets Simplicity.
        </h1>
      </div>

      <div className="mx-auto max-w-xl p-4 text-center text-sm text-neutral-500 md:max-w-4xl md:text-xl">
        Redesign your workflow landscape with our versatile platform. Craft personalized CMS, CRM,
        and management systems effortlessly. Connect seamlessly and conquer tasks with unparalleled
        ease and efficiency.
      </div>

      <Button className="mt-6 bg-blue-600 duration-150 hover:bg-blue-700" size={"lg"}>
        Get Started For Free
      </Button>
    </div>
  );
}
