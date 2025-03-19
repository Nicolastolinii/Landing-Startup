import vector1 from "../assets/vector1.png"
import vector2 from "../assets/vector2.png"
import vector3 from "../assets/vector3.png"
import { Card } from './Card'
import { TitleSection } from "./TitleSection"

export const Services = () => {
    return (
        <section className='py-20 md:py-32'>
            <div className="container flex flex-col justify-center">
                <div className="w-full flex justify-center mb-16">
                    <div className="font-serif flex flex-col justify-center max-w-md text-center items-center mb-16">
                        <TitleSection text={"nuestros servicios"} />
                        <p className="text-muted mt-6 text-center">Ofrecemos servicios especializados en zoología aplicada, adaptados a las necesidades específicas de cada proyecto.</p>
                    </div>
                </div>

                <div className=' grid md:grid-cols-3 gap-8 '>
                    <Card img={vector1} title={"prueba"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae magnam, nihil eveniet voluptate fugiat laborum rerum dignissimos doloribus eius atque maxime nobis cum minima porro ratione sapiente quidem suscipit beatae!Lorem ipsum dolor sit amet consectetur adipisicing elit."} />
                    <Card img={vector2} title={"prueba"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae magnam, nihil eveniet voluptate fugiat laborum rerum dignissimos doloribus eius atque maxime nobis cum minima porro ratione sapiente quidem suscipit beatae!Lorem ipsum dolor sit amet consectetur adipisicing elit."} />
                    <Card img={vector3} title={"prueba"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae magnam, nihil eveniet voluptate fugiat laborum rerum dignissimos doloribus eius atque maxime nobis cum minima porro ratione sapiente quidem suscipit beatae!Lorem ipsum dolor sit amet consectetur adipisicing elit."} />
                </div>
            </div>
        </section>
    )
}
