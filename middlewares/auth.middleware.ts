import { NextRequest, NextResponse } from "next/server";

export function adminValidation(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  const isAuthPage = request.nextUrl.pathname.startsWith("/login");
  const isProtectedPage = request.nextUrl.pathname.startsWith("/admin");

  // Jika user belum login dan mau akses halaman admin
  if (!token && isProtectedPage) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Jika user sudah login dan mencoba akses halaman login
  if (token && isAuthPage) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  return NextResponse.next();
}
