import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const formData = JSON.stringify(req);
  console.log(formData);

  const response = await fetch(`http://localhost:3002/api`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: formData,
  });
  const data = await response.json();
  console.log('get route', req, data);
  return NextResponse.json({ 'params message': data });
}
