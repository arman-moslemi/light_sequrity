import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Object from "../pages/Objects/Object";
import EditObject from "../pages/EditObject/EditObject";
import AddObject from "../pages/AddObject/AddObject";
const MainRoutes = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={< Dashboard />}/>
            </Routes>
            <Routes>
                <Route path="/object" element={< Object />}/>
            </Routes>
            <Routes>
                <Route path="/editObject" element={<EditObject/>}/>
            </Routes>
            <Routes>
                <Route path="/addObject" element={<AddObject/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default MainRoutes;