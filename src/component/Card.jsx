export const Card = ({img, title, text }) => {
    return (
      <div className="group relative overflow-hidden rounded-xl border p-6 shadow-sm transition-all hover:shadow-md">
        <div className="mb-4"></div>
        <h3 className="text-xl font-medium mb-2"></h3>
        <p className="text-muted mb-4"></p>
        <a className="inline-flex items-center text-sm font-medium text-primary group-hover:underline" href="#"></a>
      </div>
    );
  };
