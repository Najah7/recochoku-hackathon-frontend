import { Header } from "../components/header";
import { Footer } from "../components/footer";

const Layouts = ({ children }) => {
    return (
        <main className="flex justify-center items-center h-screen">
            <Header className="flex justify-center items-center h-screen" />
            <div className="flex justify-center items-center h-screen flex-grow">
            {children}
            </div>
            <Footer className="flex justify-center items-center h-screen" />
        </main>
    )
}


