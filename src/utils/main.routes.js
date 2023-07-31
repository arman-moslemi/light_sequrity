import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Object from "../pages/Objects/Object";
import EditObject from "../pages/EditObject/EditObject";
import AddObject from "../pages/AddObject/AddObject";
import EachObject from "../pages/EachObject/EachObject";
import Login from "../pages/Login/Login";
import Questions from "../pages/Questions/Questions";
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
                <Route path="/editObject/:id" element={<EditObject/>}/>
            </Routes>
            <Routes>
                <Route path="/addObject" element={<AddObject/>}/>
            </Routes>
            <Routes>
                <Route path="/eachObject/:id" element={<EachObject/>}/>
            </Routes>
            <Routes>
                <Route path="/login" element={<Login/>}/>
            </Routes>
            <Routes>
                <Route path="/questions" element={<Questions/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default MainRoutes;