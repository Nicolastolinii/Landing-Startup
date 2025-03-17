import { Hero } from "../component/Hero"
import { Navbar } from "../component/Navbar"


export const Home = () => {
    return (
        <div className="bg-gradient-to-bl from-[#e8f9e3]  to-transparent">
            <Navbar />
            <main>
                <Hero />
            </main>
        </div>
    )
}
