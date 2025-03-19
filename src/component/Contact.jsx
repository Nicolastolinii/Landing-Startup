import { HeaderSections } from "../utils/HeaderSections"
import { Sections } from "../utils/Sections"

export const Contact = () => {
    return (
        <Sections bg>
            <div className="w-full flex justify-center">
                <HeaderSections
                    title={"trabajemos juntos por la fauna y el medio ambiente"}
                    text={"Contáctanos para discutir cómo podemos ayudarte con tus necesidades en consultoría zoológica."}
                />
            </div>
            <div className=" w-full flex justify-center p-8 shadow-sm">
                <div className={`bg-white rounded-xl  p-8 shadow-sm  `}>
                    <form className="space-y-6 bg-white" >
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium">
                                    Nombre
                                </label>
                                <input
                                    id="name"
                                    placeholder="Tu nombre"
                                    className="flex h-10 w-full border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-gray-900 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-green focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-md"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="tu@email.com"
                                    className="flex h-10 w-full border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-gray-900 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-green focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-md"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium">
                                Asunto
                            </label>
                            <input
                                id="subject"
                                placeholder="¿En qué podemos ayudarte?"
                                className="flex h-10 w-full border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-gray-900 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-green focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-md"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium">
                                Mensaje
                            </label>
                            <textarea
                                id="message"
                                placeholder="Cuéntanos sobre tu proyecto o consulta"
                                rows={4}
                                className="flex h-10 w-full border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-gray-900 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-green focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-md"
                            />
                        </div>
                        <button
                            type="submit"
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2  focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary-green text-[#fff1f2] hover:bg-primary-green/90 h-10 px-4 py-2 w-full rounded-md"
                        >
                            Enviar Mensaje
                        </button>
                    </form>
                </div>
            </div>
        </Sections>
    )
}
