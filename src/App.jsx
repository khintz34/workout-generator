import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import WorkoutHome from "./components/workoutHome/WorkoutHome";
import { useState } from "react";
import {
  ApiFlag,
  CurrentWorkoutContext,
  ExerciseNumberContext,
  WorkoutListContext,
} from "./contexts/workoutList";
import WorkoutDetail from "./components/workoutDetail/WorkoutDetail";
import Options from "./components/options/Options";
import Header from "./components/header/Header";

function App() {
  const [workoutList, setWorkoutList] = useState([]);
  const [apiFlag, setApiFlag] = useState(null);
  const [currentWorkout, setCurrentWorkout] = useState("");
  const [exerciseNumber, setExerciseNumber] = useState(3);

  return (
    <div className="App">
      <BrowserRouter>
        <WorkoutListContext.Provider value={{ workoutList, setWorkoutList }}>
          <ApiFlag.Provider value={{ apiFlag, setApiFlag }}>
            <CurrentWorkoutContext.Provider
              value={{ currentWorkout, setCurrentWorkout }}
            >
              <ExerciseNumberContext.Provider
                value={{ exerciseNumber, setExerciseNumber }}
              >
                <Routes>
                  <Route path="/workout-generator/" element={<Home />}></Route>
                  <Route
                    path="workout-generator/options"
                    element={<Options />}
                  ></Route>
                  <Route
                    path="workout-generator/workout"
                    element={<WorkoutHome />}
                    name={currentWorkout}
                  ></Route>
                  <Route
                    path="workout-generator/workoutDetail/:workout"
                    element={<WorkoutDetail />}
                  ></Route>
                </Routes>
              </ExerciseNumberContext.Provider>
            </CurrentWorkoutContext.Provider>
          </ApiFlag.Provider>
        </WorkoutListContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
