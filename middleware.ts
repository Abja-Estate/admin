// middleware.ts
import { NextResponse, type NextRequest } from 'next/server';
import { cookies } from 'next/headers'

export default function authMiddleware(request: NextRequest) {

    if (!cookies().get("access_token")?.value) {
        return NextResponse.rewrite(new URL('/login', request.url))
    }
    // Your Middleware logic here
    return NextResponse.next(); // Pass control to the next Middleware or route handler
}

export const config = {
    matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - api (API routes)
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       */
      {
        source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
        missing: [
          { type: 'header', key: 'next-router-prefetch' },
          { type: 'header', key: 'purpose', value: 'prefetch' },
        ],
      },
    ],
  }