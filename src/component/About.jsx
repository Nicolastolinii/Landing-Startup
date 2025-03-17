import { TitleSection } from "./TitleSection"

export const About = () => {
  return (
    <section className="py-20 md:py-32 bg-muted/80">
      <div className="container ">
        <div className=" flex justify-center w-[100%] text-center items-center mb-16">

          <TitleSection text={"sobre nosotros"} />
        </div>
      </div>
    </section>
  )
}
