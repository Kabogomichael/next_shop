
"use server";
import { prisma as db } from "@/utils/db";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";

import { imageSchema, productSchema, validatedWithZodSchema } from "./schemas";
import { ZodError ,z} from "zod";
import { deleteImage, uploadImage } from "./supabase";
import { revalidatePath } from "next/cache";
export const fetchFeaturedProducts = async () => {
  //   const dev = await db.product.create('')
  const products = await db.product.findMany({
    where: {
      featured: true,
    },
  });

  return products;
};
export const fetchAllProducts = async ({ search = "" }: { search: string }) => {
  return await db.product.findMany({
    where: {
      OR: [
        { name: { contains: search, mode: "insensitive" } },
        { company: { contains: search, mode: "insensitive" } },
      ],
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const fetchSingleProduct = async (productId: string) => {
  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  });
  if (!product) {
    redirect("/products");
  }
  return product;
};

type ProductType = z.infer<typeof productSchema>

const getAuthUser = async()=>{
    const user = await currentUser();
  if (!user) {
    redirect("/");
  }
  return user
}



const getAdminUser = async()=>{
    const user = await getAuthUser()
    if(user.id !== process.env.ADMIN_USER_ID){
          return redirect('/')
    }
  

return user;
}
export const fetchAdminProducts = async()=>{
    await getAdminUser();
    const products = await db.product.findMany({
        orderBy:{
            createdAt:'desc'
        },
    });
    return products

}

const renderError =(error:unknown):{message:string} =>{
    return { message: error instanceof Error? error.message :'an error occurred'};

  }



export const createProductAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await currentUser();
  if (!user) {
    redirect("/");
  }
  
  try {
    // const name = formData.get("name") as string;

    // const company = formData.get("company") as string;
    // const price = Number(formData.get("price") as string);
    // // temp
    // const image = formData.get("image") as File;
    // const description = formData.get("description") as string;
    // const featured = Boolean(formData.get("featured") as string);

    const rawData = Object.fromEntries(formData);
    const file = formData.get('image') as File;
    const validatedFields = validatedWithZodSchema(productSchema,rawData)
    const validatedFile = validatedWithZodSchema(imageSchema,{image:file})

    const fullPath = await uploadImage(validatedFile.image)


   await db.product.create({
    data:{
        ...validatedFields,image:fullPath,clerkId:user.id,
    }
    
   })
    
    // await db.product.create({
    //   data: {
    //     name,
    //     company,
    //     price,
    //     image:"/public/hero1.jpg",
    //     description,
    //     featured,
    //     clerkId: user.id,
    //   },
    // });

    
  } catch (error) {

    return  renderError(error)
  }
  redirect('/admin/products')
};

export const deleteProductAction = async(prevState:{productId:string})=>{
    const {productId} = prevState;
    await getAdminUser();
    try {
       const product =  await db.product.delete({
            where:{
                id:productId,
            }
        })
        await deleteImage(product.image)
        revalidatePath('/admin/products')
        return{message:'product removed'}
    } catch (error) {
        return renderError(error)
        
    }
}