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
    body: JSON.stringify({
      ...body
    }),
  });

  const response = await res.json()
  const {  status, message } = response || {}
  const statusCode = status==200 ? 200 : 404
  const success=status==200 ? true : false
  return NextResponse.json({ data: {  message, success } }, { status: statusCode, });

};