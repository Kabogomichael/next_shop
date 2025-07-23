import LoadingContainer from "@/components/global/LoadingContainer";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";
import { Suspense } from "react";
export default function Home() {
  // console.log(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY)
  return (
    <>
    <Hero />
  
    <Suspense fallback={<LoadingContainer />}>
       <FeaturedProducts />
    </Suspense>
   
    </>

  );
}
