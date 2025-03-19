
export const TitleSection = ({ text }) => {
    return (
        <h3 className="relative w-fit cursor-default text-[#333333] capitalize font-medium text-3xl tracking-tight mb-4 font-serif
            after:content-[''] after:block after:absolute after:left-1/3 after:-bottom-3 after:w-[30%] after:h-1 after:bg-primary-green 
            after:transform after:transition-all hover:after:w-full hover:after:left-0 hover:after:translate-x-0 after:rounded-full"
        >
            {text}
        </h3>
    );
};

