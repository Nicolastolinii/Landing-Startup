import React from 'react'
import { Input } from '../utils/Input'

export const Form = ({ onSubmit, className }) => {
    return (
        <div className={`bg-white rounded-xl w-full max-w-xl  p-8 shadow-sm ${className || ""} `}>
            <form className="space-y-6 bg-white" onSubmit={onSubmit} >
                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <Input
                            type={"text"}
                            label={"Nombre"}
                            id={"name"}
                            placeholder={"Tu nombre"}
                        />
                    </div>
                    <div className="space-y-2">
                        <Input
                            type={"email"}
                            label={"Email"}
                            id={"email"}
                            placeholder={"tu@email.com"}
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <Input
                        type={"text"}
                        label={"Asunto"}
                        id={"subject"}
                        placeholder={"¿En qué podemos ayudarte?"}
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
                        className="flex h-20 w-full border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-gray-900 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-green focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-md"
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
    )
}
