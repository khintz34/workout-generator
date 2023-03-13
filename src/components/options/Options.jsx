import React, { useContext, useEffect, useState } from "react";
import { MuscleGroup, WorkoutType } from "../../assets/choices";
import Choice from "../choices/Choice";
import Dropdown from "../dropdown/Dropdown";
import Header from "../header/Header";
import "./Options.css";
import { Link } from "react-router-dom";
import {
  ApiFlag,
  ExerciseNumberContext,
  WorkoutListContext,
} from "../../contexts/workoutList";

const Options = () => {
  const [muscleStatus, setMuscleStatus] = useState(false);
  const [typeStatus, setTypeStatus] = useState(false);
  const [selectedMuscles, setSelectedMuscles] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [urlEnding, setUrlEnding] = useState(null);
  const { workoutList, setWorkoutList } = useContext(WorkoutListContext);
  const { apiFlag, setApiFlag } = useContext(ApiFlag);
  const [array, setArray] = useState([]);
  const { exerciseNumber, setExerciseNumber } = useContext(
    ExerciseNumberContext
  );

  return (
    <div className="options-container">
      <Header />
      <div className="options-main">Options</div>
    </div>
  );
};

export default Options;
