import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import TrailsPage from "./pages/TrailsPage";
import DonatePage from "./pages/DonatePage";
import ContactUsPage from "./pages/ContactUsPage";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="about" element={<AboutUsPage />} />
                <Route path="trails" element={<TrailsPage />} />
                <Route path="donate" element={<DonatePage />} />
                <Route path="contact" element={<ContactUsPage />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
