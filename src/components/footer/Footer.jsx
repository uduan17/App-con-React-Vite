import React from 'react';
import Logo from '../../assets/Logo.png'

export const Footer = () => {
  return (
    <>
    <div className='bg-slate-900 text-slate-50 p-4 md:flex justify-around '>
     <div><img src={Logo} alt="" className='w-20 mt-3' /></div> 
      <div className=' p-5'>Aprendiendo a crear <br /> una app con React + Vite</div>
      <div className='text-4xl p-7 z-1'>
      <i class="bi bi-youtube"></i> 
        <ion-icon name="logo-github"></ion-icon>
        <ion-icon name="logo-discord"></ion-icon>
      </div>
      </div>
      <div className='p-3 bg-slate-900 text-slate-50 md:flex justify-center'>Autor: Uduan Hurtado</div>
      </>
  )
}
