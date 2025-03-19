import { ButtonDarkMode } from "./ButtonDarkMode"

export const Navbar = () => {
    return (
        <header className='  transition-all sticky top-0 z-40 w-full border-b  backdrop-blur '>
            <div className="container flex h-16 items-center justify-between ">
                <div className='  flex items-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-leaf h-5 w-5 text-primary"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
                    <span className="text-lg font-medium tracking-tight">NaturaConsult</span>
                </div>
                <nav role="navigation" className='   font-medium'>
                    <ul className="flex gap-6 cursor-pointer transition-colors  text-sm text-muted  ">
                        <li className="hover:translate-y-[-1px] scale-100 hover:scale-105 duration-200 hover:text-hover">
                            <a href="#">Inicio</a>
                        </li>
                        <li className="hover:translate-y-[-1px] scale-100 hover:scale-105 duration-200 hover:text-hover">
                            <a href="#">Nosotros</a>
                        </li>
                        <li className="hover:translate-y-[-1px] scale-100 hover:scale-105 duration-200 hover:text-hover">
                            <a href="#">Servicios</a>
                        </li>
                        <li className="hover:translate-y-[-1px] scale-100 hover:scale-105 duration-200 hover:text-hover">
                            <a href="#">Contacto</a>
                        </li>
                    </ul>
                </nav>
                <div className="flex items-center gap-4">
                    <ButtonDarkMode />
                    <button className="items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium  transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-white hover:bg-[#f1f5f9] hover:text-[#18181b] h-10 px-4 py-2 hidden md:inline-flex">Solicitar Consulta</button>
                </div>
            </div>
        </header>
    )
}
