"use client"
import { useFormState } from "react-dom"
import { useEffect } from "react"
import { toast } from "sonner"
import { actionFunction } from "@/utils/types"

import React from 'react'
const initialState ={
    message:''
}

const FormContainer = ({action,children}:{action:actionFunction,children:React.ReactNode}) => {
    // const [state,formAction ] = useFormState(action,initialState)
    const [state,formAction ] = useFormState(action,initialState)
    useEffect(()=>{
        if (state.message) {
            toast('',{ description:state.message})
            
        }


    },[state])
  return (
    <form action={formAction} >
        {children}

    </form>
  )
}

export default FormContainer