import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const dataBody = await req.json();

  const API_URL =
    process.env.NODE_ENV === 'production'
      ? 'https://grupo-92-be.onrender.com/api'
      : 'http://localhost:3002/api';

  // console.log('url>>>>>>>>>>>>>>>>>>>', API_URL);
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataBody),
  });
  const data = await response.json();
  // console.log('>>>>>>>>>>>reponse from post backend route', data);
  return NextResponse.json({ doservidor: data });
}
