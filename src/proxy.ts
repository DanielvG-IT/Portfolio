import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LOCALES = ["nl", "en"] as const;

export function proxy(request: NextRequest) {
  const segments = request.nextUrl.pathname.split("/");
  const locale = LOCALES.includes(segments[1] as (typeof LOCALES)[number])
    ? segments[1]
    : "nl";

  const response = NextResponse.next();
  response.headers.set("x-locale", locale);
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|images).*)"],
};
