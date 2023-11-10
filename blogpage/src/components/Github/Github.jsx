import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/vishal7313')
    //     .then(response => response.json())
    //     .then(data => {
    //         setData(data)  
    //     })
    // }, [])
  return (
    <div
        className='text-center m-5 bg-gray-600 text-white p-4 text-3xl'
    >Github followers: {data.followers}

    <img src={data.avatar_url} alt="Git Image" width={300} />

    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const reponse = await fetch('https://api.github.com/users/vishal7313')
    return reponse.json();
}