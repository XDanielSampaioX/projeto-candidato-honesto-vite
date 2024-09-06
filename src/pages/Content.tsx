import { Routes, Route } from "react-router-dom";
import Admin from "./Admin";
import Home from "./Home";

export default function Content() {
    return (
        <Routes>
            <Route path='/admin' element={<Admin />} />
            <Route path='/' element={<Home />} />
        </Routes>
    );
}
