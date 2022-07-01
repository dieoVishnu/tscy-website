import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Loader from '../components/Loader'
import Home from './Home'

function Main() {

  const [loader, setLoader] = useState(true)

useEffect(()=>{
  window.addEventListener("load", function(){
    //everything is fully loaded, don't use me if you can use DOMContentLoaded
    setTimeout(() => {
      setLoader(false)
  }, 1000)
});
},[])

  return (
    <>
    {loader === true ? (
      <Loader />
    ) : (
      <>

      <Header />
      <Home />
    </>
    )}

    </>
  )
}

export default Main