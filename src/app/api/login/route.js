import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export const POST = async (request) => {
  const body = await request.json();
  const res = await fetch(`${process.env.baseURL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*'
    },
    credentials: 'include',
    body: JSON.stringify(body),
  });

  if (res.ok) {
    const requestHeaders = new Headers(res.headers)
    requestHeaders['Content-Type'] = 'application/json';

    const responseJson = await res.json();

    cookies().set({
      name: "refreshToken",
      value: responseJson?.refreshToken,
      path: '/',
      maxAge: 30 * 24 * 60 * 60,
    });
    return NextResponse.json(
      { data: { message: responseJson, success: true } },
      {
        status: 200,
        headers: requestHeaders,
      }
    );
  } 
  else {
    const responseJson = await res.json();
    return NextResponse.json({ data: { message: responseJson?.message, success: false } }, { status: res.status });
  }
};
