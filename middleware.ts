import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from "@/auth";

export default async function middleware(request: NextRequest) {
  // Skip auth for imagekit endpoint
  if (request.nextUrl.pathname.startsWith('/api/auth/imagekit')) {
    return NextResponse.next();
  }
  
  // Apply auth middleware for other routes
  return auth(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except static files
     */
    '/((?!_next/static|_next/image|favicon.ico|public).*)',
  ],
};
