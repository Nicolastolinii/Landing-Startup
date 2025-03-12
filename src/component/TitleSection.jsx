
export const TitleSection = ({ text }) => {
    return (
        <h3 className="relative w-fit cursor-default text-[#333333] capitalize font-bold text-2xl 
    before:content-[''] before:block before:absolute before:left-[-40px] before:top-[17px] before:w-[20px] before:h-[3px] before:bg-[#333333]
    after:content-[''] after:block after:absolute after:left-0 after:bottom-0 after:w-[100%] after:h-[2px] after:bg-primary-green after:scale-x-0 after:transition-transform hover:after:scale-x-100"
        >
            {text}
        </h3>

    )
}
