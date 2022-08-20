import { FormEvent } from "react"

const useBrewerSignupForm = () => {

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    console.log("submitting brewer registration form...")
  }

  return {
    handleSubmit
  }
}

export default useBrewerSignupForm
