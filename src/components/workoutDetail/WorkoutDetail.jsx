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
        <h2>
          <span className="detail-span">Exercise: </span>
          {value.name}
        </h2>
        <p className="detail-p">
          <span className="detail-span">Difficulty: </span>
          {value.difficulty}
        </p>
        <p className="detail-p">
          <span className="detail-span">Type: </span>
          {value.type}
        </p>
        <p className="detail-p">
          <span className="detail-span">Muscle: </span>
          {value.muscle}
        </p>
        <p className="detail-p">
          <span className="detail-span">Equipment Needed: </span>{" "}
          {value.equipment}
        </p>
        <p className="detail-p">
          <span className="detail-span">Instructions: </span>
          {value.instructions}
        </p>
      </div>
    </div>
  );
};

export default WorkoutDetail;
