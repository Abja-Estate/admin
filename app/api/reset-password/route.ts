// @ts-nocheck

import { NextResponse } from "next/server";
import fetch from "node-fetch";
import { BASE_URL } from "@/config";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const fetchResponse = await fetch(`${BASE_URL}/auth/admin/forgot_password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "4f1fe63a-5f8b-4e7f-ad38-e68445079351",
      },
      body: JSON.stringify({
        email: data.email,
      }),
    });

    if (!fetchResponse.ok) {
      // Handle non-OK responses (e.g., 4xx or 5xx status codes)
      const errorText = await fetchResponse.text();
      throw new Error(`Server responded with error: ${errorText}`);
    }

    const authResponse = await fetchResponse.json();

    return NextResponse.json({
      ...authResponse,
    });
  } catch (error) {
    console.error("Error in POST request:", error);

    // Return an informative error response
    return NextResponse.json({
      error: "An error occurred while processing the request.",
    });
  }
}
