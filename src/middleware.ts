// // 📁 SERVER: middleware.ts
// import { NextRequest, NextResponse } from 'next/server';

// export function middleware(request: NextRequest) {
//   console.log('🧠 MIDDLEWARE EXECUTED:', request.nextUrl.pathname);
//   const token = request.cookies.get('auth_token')?.value;
//   const url = request.nextUrl.pathname;

//   const protectedRoutes = ['/dashboard', '/about'];
//   const isProtected = protectedRoutes.some(path => url.startsWith(path));
//   console.log('---------------------------------------------------------------------------')

//   if (isProtected && !token) {
//     return NextResponse.redirect(new URL('/login', request.url));
//   }

//   return NextResponse.next();

  
// }

// export const config = {
//   matcher: ['/:path*'],
// };

// 📁 SERVER: src/middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth_token')?.value;
  const pathname = request.nextUrl.pathname;

  console.log('🧠 MIDDLEWARE EXECUTED:', pathname);

  const isLoginPage = pathname === '/login';

  // 🔐 Case 1: Guest trying to access protected page
  if (!token && !isLoginPage) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // 🙅‍♂️ Case 2: Logged-in user trying to access /login
  if (token && isLoginPage) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // ✅ All other cases: allow
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'], // all frontend routes except static, api
};
