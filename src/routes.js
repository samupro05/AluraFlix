import Error from "./pages/Error";
import NewVideo from "./pages/NewVideo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function AppRouter(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<NewVideo />} />
            <Route path="*" element={<Error />} />
        </Routes>
        </BrowserRouter>
    )
}

export default AppRouter