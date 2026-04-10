import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="page-shell flex min-h-screen items-center">
      <div className="container mx-auto">
        <div className="surface-card max-w-2xl p-8 md:p-10">
          <p className="eyebrow">404</p>
          <h1 className="section-title mt-4">Page not found.</h1>
          <p className="section-copy mt-5">
            The requested page does not exist or the locale in the URL is not supported.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/nl">Back to home</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
