import vector1 from "../assets/vector1.png"
import vector2 from "../assets/vector2.png"
import vector3 from "../assets/vector3.png"
import { HeaderSections } from "../utils/HeaderSections"
import { Sections } from "../utils/Sections"
import { Card } from './Card'
import { TitleSection } from "./TitleSection"

export const Services = () => {
    return (
        <Sections bg={false}>
            <div className="container flex flex-col justify-center">
                <div className="w-full flex justify-center mb-16">
                    <HeaderSections
                        title={"nuestros servicios"}
                        text={"Ofrecemos servicios especializados en zoología aplicada, adaptados a las necesidades específicas de cada proyecto"}
                    />
                </div>

                <div className=' grid md:grid-cols-3 gap-8 '>
                    <Card
                        img={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search h-6 w-6 text-primary"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>}
                        title={"Estudios de Fauna"}
                        text={"Inventarios y monitoreo de especies, análisis de biodiversidad y estudios poblacionales."}
                    />
                    <Card
                        img={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-file-text h-6 w-6 text-primary"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>}
                        title={"Evaluación de Impacto"}
                        text={"Análisis del impacto ambiental en ecosistemas y especies, con recomendaciones para mitigación."}
                    />
                    <Card
                        img={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shield h-6 w-6 text-primary"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>}
                        title={"Conservación de Especies"}
                        text={"Desarrollo e implementación de programas de conservación para especies amenazadas."}
                    />
                </div>
            </div>
        </Sections>
    )
}
