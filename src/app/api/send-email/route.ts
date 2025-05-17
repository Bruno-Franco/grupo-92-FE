import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const dataBody = await req.json();

  const response = await fetch(`http://localhost:3002/api`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataBody),
  });
  const data = await response.json();
  console.log('>>>>>>>>>>>reponse from post backend route', data);
  return NextResponse.json({ doservidor: data });
}
