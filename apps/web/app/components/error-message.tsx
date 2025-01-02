"use client"
import { useEffect } from 'react'
import { toast } from "sonner"

const ErrorMessage = ({ message }: { message: string }) => {
  useEffect(() => {
    toast(message, {
      description: "Sunday, December 03, 2023 at 9:00 AM",
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    })
  }, [])
  return null
}

export default ErrorMessage