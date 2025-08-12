import { Label } from "../ui/label";
import { Input } from "../ui/input";

import React from 'react'

const ImageInput = () => {
    const name = 'image'
  return (
    <div className="mt-2">
        <Label htmlFor={name} className="capitalize mb-2">Image</Label>
        <Input id={name} name={name} type="file" required accept="image/*" />
    </div>
  )
}

export default ImageInput