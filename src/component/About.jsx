import { HeaderSections } from "../utils/HeaderSections"
import { Sections } from "../utils/Sections"
import { TitleSection } from "./TitleSection"

export const About = () => {
  return (
    <Sections>
      <div className="container flex flex-col justify-center">
        <div className="w-full flex justify-center">
          <HeaderSections
            title={"Sobre Nosotros"}
            text={"Combinamos la experiencia científica con soluciones prácticas para abordar los desafíos de la conservación y gestión de la fauna."}
          />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6">
            <div className="h-16 w-16 rounded-full bg-primary-green/10 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-leaf h-8 w-8 text-primary"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Sostenibilidad</h3>
            <p className="text-muted">Desarrollamos soluciones que equilibran las necesidades humanas con la conservación de los ecosistemas.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <div className="h-16 w-16 rounded-full bg-primary-green/10 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search h-8 w-8 text-primary"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Investigación</h3>
            <p className="text-muted">Basamos nuestras recomendaciones en evidencia científica y metodologías de vanguardia.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <div className="h-16 w-16 rounded-full bg-primary-green/10 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shield h-8 w-8 text-primary"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
            </div>
            <h3 className="text-xl font-medium mb-2">Conservación</h3>
            <p className="text-muted">Protegemos la biodiversidad mediante estrategias efectivas y adaptadas a cada contexto.</p>
          </div>
        </div>
      </div>
    </Sections>
  )
}
