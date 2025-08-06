import { NextResponse } from 'next/server'

export function middleware(req) {
  const token =
    req.cookies.get('authjs.session-token')?.value || // For default provider
    req.cookies.get('__Secure-authjs.session-token')?.value // For secure prod

  const url = req.nextUrl

  const protectedPaths = [
    '/admin',
    '/admin/addBlog',
    '/admin/blogList',
    '/admin/subscriptions'
  ]

  const isProtected = protectedPaths.some((path) =>
    url.pathname.startsWith(path)
  )

  // Redirect to login if unauthenticated user hits protected path
  if (isProtected && !token) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  // Prevent authenticated users from visiting login/signup
  const publicAuthPages = ['/signup', '/login']
  const isAuthPage = publicAuthPages.includes(url.pathname)

  if (isAuthPage && token) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/signup',
    '/login'
  ]
}
