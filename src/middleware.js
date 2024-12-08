import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get("host");

  // Define paths that should not be rewritten
  const excludedPaths = [
    /^\/_next\//, // Next.js internal files
    /^\/api\//, // API routes
    /^\/static\//, // Static assets
    /^\/favicon\.ico$/, // Favicon
    /^\/manifest\.json$/, // Manifest
  ];

  // Check if the request path matches any excluded paths
  const isExcluded = excludedPaths.some((regex) => regex.test(url.pathname));

  if (isExcluded) {
    return NextResponse.next(); // Do not rewrite
  }

  // Handle subdomain routing
  if (
    hostname === "app.fieldstats.pro" ||
    hostname === "app.localhost:3000" ||
    hostname === "localhost:4000"
  ) {
    url.pathname = `/app${url.pathname}`; // Serve content from app/app folder
  } else if (hostname === "fieldstats.pro" || hostname === "localhost:3000") {
    url.pathname = `/home${url.pathname}`; // Serve content from app/home folder
  }

  return NextResponse.rewrite(url);
}
