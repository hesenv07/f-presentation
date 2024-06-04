import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export const POST = async (request) => {
  const body = await request?.json();
  const res = await fetch(`${process.env.baseURL}/auth/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
    credentials: 'include',
    body: JSON.stringify(body),
  });
  if (res.ok) {
    const requestHeaders = new Headers(res.headers)
    requestHeaders['Content-Type'] = 'application/json';

    const { body } = await res.json();
    cookies().set({
      name: "refreshToken",
      value: body?.refreshToken,
      path: '/',
      maxAge: 30 * 24 * 60 * 60,
    });
    return NextResponse.json(
      { data: { message: body, success: true } },
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
