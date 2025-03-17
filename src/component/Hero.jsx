import hero from "../assets/hero2.png"
import { ServiceTag } from "./ServiceTag"
export const Hero = () => {
    return (
        <section className=" container h-[95vh] flex flex-col justify-center py-20 md:py-32 ">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className=" flex flex-col justify-between  space-y-8">
                    <ServiceTag />
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight w-[80%]">Consultoría en Zoología para un Futuro Sostenible</h1>
                    <p className="text-lg text-muted max-w-md">Soluciones científicas para la conservación y gestión de la fauna con un enfoque sostenible y basado en evidencia.</p>
                    <div className="group  flex items-center text-primary-green w-[15rem]  mt-4 ">
                        <button className=" font-semibold relative after:content-[''] after:block after:w-full after:h-[2px] after:bg-primary-green after:absolute after:bottom-0 after:left-0 after:scale-x-0 after:transition-transform hover:after:scale-x-100 pr-4">
                            Conócenos un poco más
                        </button>
                        <span className="text-xl  scale-100 duration-200 transform group-hover:opacity-100 group-hover:scale-125 group-hover:translate-x-[2px] group-hover:translate-y-[2px]">↓</span>
                    </div>
                </div>
                <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
                    <img className="w-[100%] h-[100%] object-cover" src={hero} alt="Imagen representativa de consultoría" />
                </div>
            </div>

        </section>
    )
}
