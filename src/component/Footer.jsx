
export const Footer = () => {
    return (
        <footer className="py-12 border-t">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-leaf h-5 w-5 text-primary">
                            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                        </svg>
                        <span className="text-lg font-medium tracking-tight">NaturaConsult</span>
                    </div>
                    <div className="flex gap-6">
                        <a className="text-muted hover:text-hover transition-colors" href="#">Linkedin</a>
                        <a className="text-muted hover:text-hover transition-colors" href="#">Instagram</a>
                        <a className="text-muted hover:text-hover transition-colors" href="#">Twitter</a>
                    </div>
                    <div className="text-sm text-muted">
                        © 2025 NaturaConsult. Todos los derechos reservados.
                    </div>
                </div>
            </div>
        </footer>
    )
}
