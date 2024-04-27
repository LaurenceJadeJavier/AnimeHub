import React from 'react'

const CustomizedGrid = ({children, className}:any) => {
  return (
    <div className={`p-5 grid grid-cols-5 bg-slate-500 ${className}`}>
        {children}
    </div>
  )
}

export default CustomizedGrid