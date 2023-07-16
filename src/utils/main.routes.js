import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Object from "../pages/Objects/Object";
const MainRoutes = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={< Dashboard />}/>
            </Routes>
            <Routes>
                <Route path="/object" element={< Object />}/>
            </Routes>
        </BrowserRouter>
    )
}
export default MainRoutes;