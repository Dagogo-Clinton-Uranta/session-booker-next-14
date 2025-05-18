"use client"
import { signIn, signOut,/* useSession*/ } from "next-auth/react"

export default function SignInWithGoogleButton(){


return(
    <button onClick={async() =>  await signIn()}>Sign In</button>
)
}