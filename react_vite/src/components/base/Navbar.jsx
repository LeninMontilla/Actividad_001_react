import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.jpg";
import Foto from "../../assets/foto1.jpg";
//Para poder usar rutas en react instalamos la libreria react-router.dom
//Con el siguiente comando de npm (npm i react-router-dom)
//Usamo la funcion NavLink para poder navegar entre las diferentes paginas de nuestra app

const NavBar = () => {
  return (
    <nav className="flex justify-evenly items-center font-medium p-4 fixed z-10 top-0 w-full py-10 px-8 h-40 text-sm  bg-green-950 text-white">
    

        <li className="flex items-center text-lg gap-3 w-40 h-40" >
          <div>
            <img src={Logo} alt="Logo" className=" object-cover rounded-lg"/>
          </div>
        </li>
        <ul className="flex space-x-4">

          <li>
            <NavLink to="/dashboard" className="text-white hover:text-green-300 text-xl">
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink to="/productos" className="text-white hover:text-green-300 text-xl">
              Productos
            </NavLink>
          </li>

          <li>
            <NavLink to="/categorias" className="text-white hover:text-green-300 text-xl">
              Categorías
            </NavLink>
          </li>

          <li>
            <NavLink to="/usuarios" className="text-white hover:text-green-300 text-xl">
              Usuarios
            </NavLink>
          </li>

          <li>
            <NavLink to="/perfil" className="text-white hover:text-green-300 text-xl">
              Perfil
            </NavLink>
          </li>
        </ul>

      <div className="">
                    <div className="flex items-center justify-center">
                    <img src={Foto} alt="foto1" className="w-20 h-20 object-cover rounded-full"/>
                    </div>
                    <h1 className="text-3xl font-bold flex items-center justify-center">Dr. David Montilla</h1>
                    <p>Master en suplementacion nutricional integrativa</p>
            </div>
    </nav>
  );
};

export default NavBar;