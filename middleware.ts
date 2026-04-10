import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { defaultLocale, isLocale } from "@/lib/site";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const [, maybeLocale] = pathname.split("/");

  const locale = isLocale(maybeLocale) ? maybeLocale : defaultLocale;
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", locale);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|assets|resume).*)"],
};
