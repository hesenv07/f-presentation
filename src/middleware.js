import { NextResponse } from 'next/server'

export async function middleware(request) {
    const requestHeaders = new Headers(request.headers)
    const { url, nextUrl, cookies } = request
    const { value: token } = cookies.get('authCookie') || { value: null }
    const { pathname } = nextUrl;
    if (
        pathname.startsWith("/login") || 
        pathname.startsWith("/register")) {
        if (token) {
            return NextResponse.redirect(new URL('/', url))
        }
    }
    if (!token && pathname.startsWith('/dashboard')) {
        {
            return NextResponse.redirect(new URL('/login', url))
        }
    }
    const response = NextResponse.next({
        headers: requestHeaders,
        request: {
            headers: requestHeaders,
        },
    });
    return response;

}

