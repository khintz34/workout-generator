import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WorkoutHome from "./components/workoutHome/WorkoutHome";
import { useState } from "react";
import { ApiFlag, WorkoutListContext } from "./contexts/workoutList";

function App() {
  const [workoutList, setWorkoutList] = useState([]);
  const [apiFlag, setApiFlag] = useState(null);

  return (
    <div className="App">
      <BrowserRouter>
        <WorkoutListContext.Provider value={{ workoutList, setWorkoutList }}>
          <ApiFlag.Provider value={{ apiFlag, setApiFlag }}>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/workout" element={<WorkoutHome />}></Route>
            </Routes>
          </ApiFlag.Provider>
        </WorkoutListContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
