import React from 'react'

const CustomizedGrid = ({children, classname}:any) => {
  return (
    <div className={`p-5 grid grid-cols-5 bg-slate-500 `}>
        {children}
    </div>
  )
}

export default CustomizedGrid