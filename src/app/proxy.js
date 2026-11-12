import { NextResponse } from 'next/server';

export function proxy(request) {
  console.log(`[${new Date().toISOString()}] ${request.method} ${request.nextUrl.pathname}`);
  return NextResponse.next(); // ปล่อยให้คำขอไปต่อที่ Route Handler
}

export const config = {
  matcher: '/api/:path*', // ทำงานเฉพาะเส้นทาง /api
};