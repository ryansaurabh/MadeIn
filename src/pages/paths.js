import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Links from "./links";
import TaskFive from "./taskFive";
import TaskFour from "./taskfour";
import TaskOne from "./taskOne";
import TaskThree from "./taskthree";
import TaskTwo from "./taskTwo";

export default function Paths() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={ <Links/>}/>
        <Route path='/taskone' exact element={ <TaskOne/>}/>
        <Route path='/tasktwo' exact element={ <TaskTwo/>}/>
        <Route path='/taskthree' exact element={ <TaskThree/>}/>
        <Route path='/taskfour' exact element={ <TaskFour/>}/>
      </Routes>
    </BrowserRouter>
  );
}
