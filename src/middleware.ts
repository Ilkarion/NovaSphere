import { type NextRequest } from 'next/server';
import { updateSession } from '../utils/supabase/middleware';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export async function middleware(request: NextRequest) {
  // 1. Обнови сессию
  await updateSession(request);

  // 2. Верни результат от next-intl
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    '/((?!api|trpc|_next|_vercel|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)).*)',
  ]
};

