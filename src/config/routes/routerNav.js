import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import QuizApp from "../../component/quiz/quiz";
import Welcome from "../../component/quiz/welcome";
function RouteNavigation(){
    return(<main>
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/Quiz" element={<QuizApp/>} />
       </Routes>
       </BrowserRouter>
    </main>)
}
export default RouteNavigation;