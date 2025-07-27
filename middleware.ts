export { auth as middleware } from "@/auth";

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api/auth/imagekit (ImageKit endpoint - exclude from auth)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!api/auth/imagekit|_next/static|_next/image|favicon.ico|public).*)',
  ],
};
