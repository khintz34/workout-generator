import React, { useContext, useEffect, useState } from "react";
import { ApiFlag, WorkoutListContext } from "../../contexts/workoutList";
import Header from "../header/Header";
import "./WorkoutDetail.css";
import { useLocation } from "react-router-dom";

const WorkoutDetail = (props) => {
  const { workoutList, setWorkoutList } = useContext(WorkoutListContext);
  const { apiFlag, setApiFlag } = useContext(ApiFlag);
  const location = useLocation();
  const { value } = location.state;

  console.log(value);

  return (
    <div>
      <Header />
      <div className="workoutList-detail">
        <h2>Exercise: {value.name}</h2>
        <h2>Difficulty: {value.difficulty}</h2>
        <h2>Type: {value.type}</h2>
        <h2>Muscle: {value.muscle}</h2>
        <h2>Equipment Needed: {value.equipment}</h2>
        <h2>Instructions: {value.instructions}</h2>
      </div>
    </div>
  );
};

export default WorkoutDetail;
