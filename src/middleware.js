import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get("host");

  const excludedPaths = [
    /^\/_next\//, // Next.js internal files
    /^\/api\//, // API routes
    /^\/static\//, // Static assets
    /^\/favicon\.ico$/, // Favicon
    /^\/manifest\.json$/, // Manifest
    /^\/[a-zA-Z0-9-_]+\.(svg)$/,
  ];
  // Check if the request path matches any excluded paths
  const isExcluded = excludedPaths.some((regex) => regex.test(url.pathname));

  console.log("Requested Path:", url.pathname);
  console.log("Is Excluded:", isExcluded);

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
