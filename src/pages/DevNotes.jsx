import React, { useEffect } from 'react'
import Title from '../components/Title'

const DevNotes = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='w-full flex flex-1 items-center justify-center text-sm'>
      <div className="flex flex-col gap-2 items-center justify-center p-2">

        <div className="text-2xl mb-3">
          <Title text1={'DEVELOPER'} text2={'NOTES'} />
        </div>

        <div className='flex justify-center items-center gap-2 '>
          <img src="ev_icon_pic.jpg" alt="" className='w-10 h-10 rounded-full shadow-lg' />
          <span className="font-semibold">Erik Varga</span>
        </div>

        <div classname="text-sm">
          <br />
          <div classname="text-sm">
            <p className='mt-4'>This simple React World Clock App displays current local time in a varity of time zones. </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default DevNotes