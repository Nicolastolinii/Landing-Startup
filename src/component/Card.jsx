export const Card = ({img, title, text }) => {
    return (
      <div className="group relative overflow-hidden rounded-xl border p-6 shadow-sm transition-all hover:shadow-md">
        <div className="mb-4">
          {img}
        </div>
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-muted mb-4">{text}</p>
        <a className="inline-flex items-center text-sm font-medium text-primary group-hover:underline" href="#">
          Saber más
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right ml-1 h-4 w-4"><path d="m9 18 6-6-6-6"></path></svg>
          </a>
      </div>
    );
  };
