import type {NextRequest} from "next/server";

import {NextResponse} from "next/server";

export const config = {
  runtime: "edge",
  regions: "iad1", // optional
};

export function GET(request: NextRequest) {
  return NextResponse.json(
    {
      body: "request.body",
      query: request.nextUrl.search,
      cookies: request.cookies.getAll(),
    },
    {
      status: 200,
    },
  );
}
