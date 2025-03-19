import { TitleSection } from "../component/TitleSection"

export const HeaderSections = ({title,text}) => {
    return (
        <div className="font-serif flex flex-col justify-center max-w-lg text-center items-center mb-16">
            <TitleSection text={title} />
            <p className="text-muted mt-6 text-center">{text}</p>
        </div>
    )
}
