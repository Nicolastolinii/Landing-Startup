
export const Navbar = () => {
    return (
        <header className=' text-zinc-800 container flex justify-between items-center h-16 pt-6 transition-all '>
            <div className=' p-4 font-bold rounded-lg bg-[#7ca546]'>
                <h1>LOGO</h1>
            </div>
            <nav role="navigation" className='  text-lg font-semibold'>
                <ul className="flex gap-5 cursor-pointer  text-lg ">
                    <li className="hover:translate-y-[-3px] scale-100 hover:scale-105 duration-200">
                        <a href="#">Inicio</a>
                    </li>
                    <li className="hover:translate-y-[-3px] scale-100 hover:scale-105 duration-200">
                        <a href="#">Servicios</a>
                    </li>
                    <li className="hover:translate-y-[-3px] scale-100 hover:scale-105 duration-200">
                        <a href="#">Sobre Nosotros</a>
                    </li>
                    <li className="hover:translate-y-[-3px] scale-100 hover:scale-105 duration-200">
                        <a href="#">Contacto</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
