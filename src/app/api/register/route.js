import { NextResponse } from 'next/server';
export const POST = async (request) => {
  const body = await request.json();
  const res = await fetch(`${process.env.baseURL}/auth/register`, {
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
  const data = await res.json()
  if (data.status == 200) {
    return NextResponse.json({ data }, { status: 200, });
  }
  else {
    return NextResponse.json({ data }, { status: 400, });
  }

};