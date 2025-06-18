import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("auth_token")?.value;
  const pathname = request.nextUrl.pathname;

  console.log("🧠 MIDDLEWARE EXECUTED:", pathname);

  const isLoginPage = pathname === "/login";

  // 🔐 Case 1: Guest trying to access protected page:
  if (!token && !isLoginPage) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // ✅ All other cases: allow
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"], // all frontend routes except static, api
};
