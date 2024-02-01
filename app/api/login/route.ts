// @ts-nocheck

import { NextResponse } from "next/server";
import fetch from "node-fetch";
import { cookies } from "next/headers";
import { BASE_URL } from "@/config";

export async function POST(request: Request) {
  const data = await request.json();

  const fetchResponse = await fetch(`${BASE_URL}/auth/admin/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "4f1fe63a-5f8b-4e7f-ad38-e68445079351",
    },
    body: JSON.stringify({
      email: data.email,
      password: data.password,
    }),
  });

  const authResponse = await fetchResponse.json();

  // cookies().set("access_token", authResponse.data.accessToken);

  return NextResponse.json({
    ...authResponse,
  });
}
