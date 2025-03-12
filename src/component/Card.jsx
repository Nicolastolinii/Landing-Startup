export const Card = ({img, title, text }) => {
    return (
      <div className="text-[#333333] max-w-sm h-[25rem] rounded-lg flex flex-col justify-between items-center overflow-hidden shadow-lg p-4 bg-[#fdfdfd]">
        <img className="object-cover h-[30%]" src={img} alt="img cards" />
        <div className="px-6 py-4">
          <h2 className="font-bold text-xl mb-2">{title}</h2>
          <p className="text-gray-700 text-base">{text}</p>
        </div>
      </div>
    );
  };
