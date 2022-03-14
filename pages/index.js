import React from 'react'
import { Typography } from '@mui/material'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sanity Ecommerce</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Typography component="h1" variant="h1">
        Sanity Eccomerce
      </Typography>
    </div>
  )
}
