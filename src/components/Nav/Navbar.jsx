import React, { useState } from 'react'
import Button from '../button/Button';
import { Link } from 'react-router-dom';


const Nav = () => {
    let Links =[
      {name:"Home",link:"/"},
      {name:"Productos",link:"/productos"},
      {name:"Usuarios",link:"/usuarios"},
      {name:"Ventas",link:"/ventas"},
    ];

    let [open,setOpen]= useState(false);
  return (
    <div className='shadow-md w-full'>
      <div className='md:flex items-center justify-between bg-slate-900 text-slate-50 py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-italic text-slate-50'>
        <span className='text-3xl text-white mr-1 pt-2'>
        <ion-icon name="person-circle-outline" ></ion-icon>
        </span>
        Administrador
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-slate-900  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <Link to={link.link} className='text-slate-50 hover:text-gray-400 duration-500'>{link.name}</Link>
            </li>
          ))
        }
        <Button>
          Cerrar sesion
        </Button>
      </ul>
      </div>
    </div>
  )
}

export default Nav