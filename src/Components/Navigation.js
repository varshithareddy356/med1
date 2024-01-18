import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Homepage } from "./Home";
import { Hotels } from "./Hotels";
import { Cars } from "./Cars";
import { Gettheapp } from "./Gettheapp";
// import { Routing } from "./Routing";
import { Hoteldetailed } from "./Hoteldetailed";




export function Navigation(){




    return(
        <>
        
        <BrowserRouter>
        
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/Hotels" element={<Hotels/>}/>
            <Route path="/Cars" element={<Cars/>}/>
            <Route path="/Gettheapp" element={<Gettheapp/>}/>
            <Route path="/Hoteldetailed" element={<Hoteldetailed/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}