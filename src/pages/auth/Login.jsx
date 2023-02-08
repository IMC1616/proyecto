import React from "react"
// import { Link } from "react-router-dom";
//import iconos React iconos
import { RiMailFill,RiLockFill } from "react-icons/ri";

const Login =()=>{
    return (
        <div className="min-h-screen flex items-center justify-center ">
             <div className="bg-secondary-300 p-8 rounded-xl shadow-2xl  w-auto lg:w-[450px]">
            <h1 className="text-3xl uppercase font-bold tracking-[5px] mb-8">Iniciar sesión</h1>
        
            <form >
                <div className="relative mb-4">
                    <RiMailFill className="absolute top-1/3 -trasate-y-1/2 left-2"/>
                        <input 
                            type="Email" 
                            className="py-2 pl-8 pr-4 bg-white w-full outline-none rounded-lg"
                            placeholder="Correo electronico"
                        />
                </div>
                <div className="relative mb-4">
                    <RiLockFill className="absolute top-1/3 -trasate-y-1/2 left-2"/>
                        <input 
                            type="password"  
                            className="py-2 pl-8 pr-4 bg-white w-full outline-none rounded-lg"
                            placeholder="Password"
                        />
                </div>
                <div >
                    <button type="submit"className="bg-white w-full py-3 px-4 rounded-lg hover:text-secondary-300 transition-colors">Ingresar</button>
                </div>
            </form>
        </div>   
        </div>
        
    )
};

export default Login