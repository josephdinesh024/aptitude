import React from 'react'

const layout = ({children}) => {
  return (
    <div>
        <div className='flex justify-center mt-32 h-screen'>
        <div className="artboard artboard-horizontal phone-4">
            {children}
        </div>
        </div>
    </div>
  )
}

export default layout