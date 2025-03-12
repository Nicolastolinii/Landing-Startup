import vector1 from "../assets/vector1.png"
import vector2 from "../assets/vector2.png"
import vector3 from "../assets/vector3.png"
import { Card } from './Card'
import { TitleSection } from "./TitleSection"

export const Services = () => {
    return (
        <section className='container text-zinc-800 mt-20  h-[50rem] pl-14 items-center'>
            <TitleSection text={"servicios"} />
            <div className=' flex justify-between mt-[10rem]'>
                <Card img={vector1} title={"prueba"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae magnam, nihil eveniet voluptate fugiat laborum rerum dignissimos doloribus eius atque maxime nobis cum minima porro ratione sapiente quidem suscipit beatae!Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
                <Card img={vector2} title={"prueba"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae magnam, nihil eveniet voluptate fugiat laborum rerum dignissimos doloribus eius atque maxime nobis cum minima porro ratione sapiente quidem suscipit beatae!Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
                <Card img={vector3} title={"prueba"} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae magnam, nihil eveniet voluptate fugiat laborum rerum dignissimos doloribus eius atque maxime nobis cum minima porro ratione sapiente quidem suscipit beatae!Lorem ipsum dolor sit amet consectetur adipisicing elit."}/>
            </div>
        </section>
    )
}
