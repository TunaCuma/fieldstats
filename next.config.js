/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "/app/:path*",
        has: [
          {
            type: "host",
            value: "app\\.fieldstats\\.pro$",
          },
        ],
      },
      {
        source: "/:path*",
        destination: "/home/:path*",
        has: [
          {
            type: "host",
            value: "fieldstats\\.pro$",
          },
        ],
      },
      {
        source: "/api/python/:path*",
        destination: "http://127.0.0.1:5328/:path*",
      },
      {
        source: "/api/trpc/:path*",
        destination: "/api/trpc/:path*", // Keep tRPC routes as-is
      },
      {
        source: "/api/auth/:path*",
        destination: "/api/auth/:path*", // Keep tRPC routes as-is
      },
      process.env.PORT === "4000"
        ? {
          source: "/:path*",
          destination: "/app/:path*",
          has: [{ type: "host", value: "localhost" }],
        }
        : {
          source: "/:path*",
          destination: "/home/:path*",
          has: [{ type: "host", value: "localhost" }],
        },
    ];
  },
};

export default withNextIntl(nextConfig);
