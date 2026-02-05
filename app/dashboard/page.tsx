import React from 'react'
import { auth, currentUser } from '@clerk/nextjs/server'

export default async function dashboardpage() {
    const authobj = await auth()
    const userobj = await currentUser()
    console.log(authobj,userobj)
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}
