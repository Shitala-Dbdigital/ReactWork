import { data } from 'autoprefixer'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data =useLoaderData()
    // const [data, setData]= useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Shitala-Dbdigital')
    //     .then(response => response.json())
    //     .then(data=>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])
  return (
    <div className='text-center m-4 bg-gray-700 text-white p-4'>Github followers: {data.followers}
    <img src={data.avatar_url} alt='Git Picture' width={300}/></div>
  )
}

export default Github
export const gitInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/Shitala-Dbdigital')
    return response.json();
}