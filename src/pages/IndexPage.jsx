import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import WorldClock from '../components/WorldClock'

const IndexPage = () => {

  return (
    <div className='w-full md:w-1/2 text-center text-sm border border-gray-500 p-5 rounded z-10 bg-gray-100 dark:bg-gray-800'>

      <div className="flex justify-center items-center text-2xl mb-3">
        <Title text1={'Time'} text2={'Zones'} />
      </div>

      <WorldClock />
    </div>
  )
}

export default IndexPage