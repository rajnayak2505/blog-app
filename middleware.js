import { NextResponse } from 'next/server'

export function middleware(req) {
  const token = req.cookies.get('authjs.session-token')?.value
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

  // Redirect to login if trying to access protected routes without auth
  if (isProtected && !token) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  // Redirect to home if trying to access signup while already logged in
  const publicAuthPages = ['/signup','/login']
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
    '/auth/signup',
    '/signin',
    '/auth/signin'
  ]
}
