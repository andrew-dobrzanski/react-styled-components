import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import Services from '../pages/Services';
import About from '../components/About';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "", element: <Home />},
            {path: "portfolio", element: <Portfolio />},
            {path: "services", element: <Services />},
            {path: "about", element: <About />},
            {path: "contact", element: <Contact />},
        ],
    },
]);