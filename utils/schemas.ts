import {z, ZodSchema} from 'zod';

export const productSchema = z.object({
    name:z.string().min(2,{
        message:'name must be at least 2 characters.'
    }).max(100,{
        message:'name must be at less than 100 characters'
    }),
    company:z.string(),
    price:z.coerce.number().int().min(0,{
        message:'price must be a positive number'
    }),
    description:z.string().refine((description)=>{
        const wordCount = description.split(' ').length;
        return wordCount >= 10 && wordCount <= 1000;
    },{
        message:'description must be between 10 and 1000 words'
    }),
    featured:z.coerce.boolean(),
})
export const imageSchema = z.object({
    image:validateImageFile()
})
export function validatedWithZodSchema<T>(schema:ZodSchema<T>,data:unknown):T{
    const result = schema.safeParse(data);
    if (!result.success) {
        const errors = result.error.issues.map((error)=> error.message).join(' , ')
        throw new Error(errors)
      }
      return result.data
}
function validateImageFile(): any {
    const maxUploadSize = 1024 * 1024
    const acceptedFileTypes = ['image']
    return z.instanceof(File).refine((file)=>{
        return !file || file.size <= maxUploadSize
    },'file size must be less than 1MB').refine((file)=>{
        return !file || acceptedFileTypes.some((type) => file.type.startsWith(type))
    },'File must be an image')
    throw new Error('Function not implemented.');
}

