import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-slate-50 py-2 px-6 rounded md:ml-8 hover:bg-slate-600 duration-500 text-slate-900'>
      {props.children}
    </button>
  )
}

export default Button