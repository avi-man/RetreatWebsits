import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async ({ url, redirect }, next) => {
  const pathname = url.pathname;
  
  // Skip middleware for static files and API routes
  if (pathname.startsWith('/_astro') || pathname.startsWith('/api')) {
    return next();
  }

  // If the path is just '/', redirect to '/en'
  if (pathname === '/') {
    return redirect('/en');
  }

  return next();
}); 