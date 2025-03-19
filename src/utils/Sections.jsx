
export const Sections = ({ children, bg = true, className }) => {
  return (
    <section className={`py-20 md:py-32 ${bg ? "bg-muted/30" : ""} ${className || ""}`}>
      {children}
    </section>  
  )
}
