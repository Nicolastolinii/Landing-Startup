import { HeaderSections } from "../utils/HeaderSections"
import { Sections } from "../utils/Sections"
import { Form } from "./Form"

export const Contact = () => {
    return (
        <Sections bg>
            <div className="w-full flex justify-center">
                <HeaderSections
                    title={"Trabajemos juntos por la fauna y el medio ambiente"}
                    text={"Contáctanos para discutir cómo podemos ayudarte con tus necesidades en consultoría zoológica."}
                />
            </div>
            <div className=" w-full flex justify-center ">
                <Form />
            </div>
        </Sections>
    )
}
