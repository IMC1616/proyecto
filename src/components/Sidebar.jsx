import React from 'react'
import { Link } from 'react-router-dom';
//IMPORTAMOS LOS ICONOS
import { RiDropFill, RiArchiveDrawerLine, RiScan2Fill } from "react-icons/ri";

const Sidebar = () => {
  return <div className='bg-secondary-500 xl:h-[100vh] overflow-y-auto fixed xl:static w-full he-full -left-full top-0 p-8 flex flex-col justify-between'>
    <div>
      <h1 className='text-center text-2xl font-bold text-white mb-10'>
        Admin <span className='text'></span>
      </h1>
      <nav>
        <Link 
          to="/" 
            className='flex items-center gap-5 py-2 px-4 rounded-lg hover:bg-primary transition-colors'>
          <RiDropFill className='text-secondary-200'/>Pagos 
        </Link>
        <Link 
          to="/RegistroSocios" 
          className='flex items-center gap-5 py-2 px-4 rounded-lg hover:bg-primary transition-colors'>
          <RiArchiveDrawerLine className='text-secondary-200'/>Socios
        </Link>
        <Link 
          to="/" 
          className='flex items-center gap-5 py-2 px-4 rounded-lg hover:bg-primary transition-colors'>
            <RiArchiveDrawerLine className='text-secondary-200'/>Tarifas
        </Link>
        <Link to="/" 
          className='flex items-center gap-5 py-2 px-4 rounded-lg hover:bg-primary transition-colors'>
            <RiArchiveDrawerLine className='text-secondary-200'/>Suministros 
        </Link>
        <Link to="/" 
          className='flex items-center gap-5 py-2 px-4 rounded-lg hover:bg-primary transition-colors'>
          <RiArchiveDrawerLine className='text-secondary-200'/>Medidor
        </Link>
      </nav>
    </div>
    <nav>
        <Link to="/" 
          className='flex items-center gap-5 py-2 px-4 rounded-lg hover:bg-primary transition-colors'>
          <RiScan2Fill className='text-secondary-200'/>Cerrar Sesión
        </Link>
        </nav>
  </div>;
};

export default Sidebar;