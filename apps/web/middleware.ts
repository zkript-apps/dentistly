import { NextResponse } from "next/server";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import type { NextRequest } from "next/server";

const publicPaths = ["/", "/create-account", "/forgot-password"];
const protectedPaths = [
  "/dashboard",
  "/members",
  "/settings",
];

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabaseUrl = process.env.NEXT_PUBLIC_DENTISTLY_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_DENTISTLY_SUPABASE_KEY;

  const supabase = createMiddlewareClient(
    { req, res },
    {
      supabaseUrl,
      supabaseKey,
    }
  );

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const path = req.nextUrl.pathname;

  if (path.startsWith("/_next") || path.startsWith("/api")) {
    return res;
  }

  if (protectedPaths.some((protectedPath) => path.startsWith(protectedPath))) {
    if (!session) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    return res;
  }

  if (publicPaths.some((publicPath) => path.startsWith(publicPath))) {
    if (session) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    return res;
  }

  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
