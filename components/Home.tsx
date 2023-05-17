"use client"
import React from 'react'
import { Button, Input } from "john-ui-lib";

const Home = () => {
  return (
    <>
      <div className="p-4">
        <Button variant="warning" dim="md" onClick={() => alert("test")}>Ghost</Button>
      </div>
      <div className="p-4 grid grid-cols-2 gap-3">
        <Input type="text" dim="lg" />
        <Input type="number" dim="lg" className="border-none" />
      </div>
    </>
  )
}

export default Home