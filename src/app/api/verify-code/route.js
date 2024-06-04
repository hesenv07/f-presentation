import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export const POST = async (request) => {
  const body = await request?.json();
  const res = await fetch(`${process.env.baseURL}/auth/verifyUser`, {
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
  const responseJson = await res.json();
  if (responseJson.status==200) {
    const requestHeaders = new Headers(res.headers)
    requestHeaders['Content-Type'] = 'application/json';
    cookies().set({
      name: "refreshToken",
      value: responseJson?.body?.refreshToken,
      path: '/',
      maxAge: 30 * 24 * 60 * 60,
    });
    return NextResponse.json(
      { data: { message:responseJson?.body?.user, success: true } },
      {
        status: 200,
        headers: requestHeaders,
      }
    );
  } 
  else {
    return NextResponse.json({ data: { message:'Token has expired or is invalid' , success: false } }, { status: 400 });
  }
};
