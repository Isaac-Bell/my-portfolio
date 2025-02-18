import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // Define protected routes
  const protectedRoutes = ["/admin", "/admin/user-access", "/admin/messages", "/admin/analytics", "/admin/system-logs"];

  if (protectedRoutes.includes(req.nextUrl.pathname)) {
    if (!token) {
      // Redirect to login if not authenticated
      return NextResponse.redirect(new URL("/api/auth/signin", req.url));
    }

    // Optional: Restrict access to specific emails
    const allowedEmails = ["admin@example.com", "your-email@example.com"]; // Add approved emails
    if (!allowedEmails.includes(token.email)) {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }
  }

  return NextResponse.next();
}

// Apply middleware to only `admin` routes
export const config = {
  matcher: ["/admin/:path*"],
};
