import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
const isPublicRoute = createRouteMatcher(['/','/products(.*)','/about'])
export default clerkMiddleware( async(auth,req)=>{
    if (!isPublicRoute(req)) {
      return ;
    }
    const session = await auth()
    return session.redirectToSignIn({returnBackUrl:req.url})
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // // Always run for API routes
    // '/(api|trpc)(.*)',
    '/((?!_next|.*\\..*|api).*)'

  ],
};