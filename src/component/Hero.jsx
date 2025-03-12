import hero from "../assets/hero2.png"
export const Hero = () => {
    return (
        <section className=" container h-[95vh] flex flex-col justify-center text-zinc-800  ">
            <div className="flex justify-between items-center h-full  gap-8">
                <div className=" flex flex-col justify-between  gap-6">
                    <h1 className="text-6xl mb-10 font-extrabold capitalize">consultoria</h1>
                    <p className="w-[31rem] font-medium text-base tracking-wide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae magnam, nihil eveniet voluptate fugiat laborum rerum dignissimos doloribus eius atque maxime nobis cum minima porro ratione sapiente quidem suscipit beatae!Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae magnam, nihil eveniet voluptate fugiat laborum rerum dignissimos doloribus eius atque maxime nobis cum minima porro ratione sapiente quidem suscipit beatae!</p>
                    <div className="group  flex items-center text-primary-green w-[15rem]  mt-4 ">
                        <button className=" font-semibold relative after:content-[''] after:block after:w-full after:h-[2px] after:bg-primary-green after:absolute after:bottom-0 after:left-0 after:scale-x-0 after:transition-transform hover:after:scale-x-100 pr-4">
                            Conócenos un poco más
                        </button>
                        <span className="text-xl  scale-100 duration-200 transform group-hover:opacity-100 group-hover:scale-125 group-hover:translate-x-[2px] group-hover:translate-y-[2px]">↓</span>
                    </div>
                </div>
                <div>
                    <img className="w-[40rem] object-cover" src={hero} alt="Imagen representativa de consultoría" />
                </div>
            </div>

        </section>
    )
}
