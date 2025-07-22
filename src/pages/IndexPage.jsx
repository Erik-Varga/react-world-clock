import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import WorldClock from '../components/WorldClock'

const IndexPage = () => {

  return (
    <div className='text-center text-sm border border-gray-400 dark:border-gray-600 p-2 rounded'>

      <div className="flex justify-center items-center text-2xl mb-3">
        <Title text1={'World Clock'} text2={'APP'} />
      </div>

      <WorldClock />
    </div>
  )
}

export default IndexPage