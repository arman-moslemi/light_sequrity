import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Object from "../pages/Objects/Object";
import EditObject from "../pages/EditObject/EditObject";
import AddObject from "../pages/AddObject/AddObject";
import EachObject from "../pages/EachObject/EachObject";
import Login from "../pages/Login/Login";
import Questions from "../pages/Questions/Questions";
import AgencyList from "../pages/AgencyList/AgencyList";
import EditAgency from "../pages/EditAgency/EditAgency";
import AddAgency from "../pages/AddAgency/AddAgency";
import AgencyCapability from "../pages/AgencyCapability/AgencyCapability";
import AgencyInstruction from "../pages/AgencyInstruction/AgencyInstruction";
import AgencyEquipment from "../pages/AgencyEquipment/AgencyEquipment"
import UserList from "../pages/UserList/UserList";
import ViewUserDetail from "../pages/ViewUserDetail/ViewUserDetail";
import AgencyShiftType from "../pages/AgencyShiftType/AgencyShiftType";
import TicketList from "../pages/Ticket/TicketList";
import ViewMission from "../pages/ViewMission/ViewMission";
import ViewTicket from "../pages/ViewTicket/ViewTicket";
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
            <Routes>
                <Route path="/agencyList" element={<AgencyList/>}/>
            </Routes>
            <Routes>
                <Route path="/editAgency/:id" element={<EditAgency/>}/>
            </Routes>
            <Routes>
                <Route path="/addAgency" element={<AddAgency/>}/>
            </Routes>
            <Routes>
                <Route path="/agencyCapability" element={<AgencyCapability/>}/>
            </Routes>
            <Routes>
                <Route path="/agencyInstruction" element={<AgencyInstruction/>}/>
            </Routes>
            <Routes>
                <Route path="/agencyEquipment" element={<AgencyEquipment/>}/>
            </Routes>
            <Routes>
                <Route path="/userList" element={<UserList/>}/>
            </Routes>
            <Routes>
                <Route path="/viewUserDetail" element={<ViewUserDetail/>}/>
            </Routes>
            <Routes>
                <Route path="/agencyShiftType" element={<AgencyShiftType/>}/>
            </Routes>
            <Routes>
                <Route path="/ticketList" element={<TicketList/>}/>
            </Routes>
            <Routes>
                <Route path="/viewTicket" element={<ViewTicket/>}/>
            </Routes>
            <Routes>
                <Route path="/viewMission" element={<ViewMission/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default MainRoutes;