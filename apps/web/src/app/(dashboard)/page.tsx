"use client";

import { useSession } from "next-auth/react";

export default function DashboardPage() {
  const { data: session, status } = useSession();

  return (
    <div>
      {status === "loading" ? "loading..." : session?.user?.email + " " + session?.user?.name}
    </div>
  );
}
