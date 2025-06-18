// utils middleware
import { adminValidation } from "./middlewares/auth.middleware";

export function middleware(request: import("next/server").NextRequest) {
  return adminValidation(request);
}

export const config = {
  matcher: ["/admin/:path*", "/login"],
};
