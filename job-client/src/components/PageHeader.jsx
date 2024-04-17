import React from 'react'

const PageHeader = ({title,path}) => {
  return (
    <div className='py-24 mt-3 flex-col bg-[#FAFAFA] flex rounded items-center justify-center'>
        <h2 className='text-3xl text-blue font-medium mb-1 text-center'>{title}</h2>
        <p className='text-sm text-center'><a href="/">Home</a>/{path}</p>
        </div>
    
  )
}

export default PageHeader