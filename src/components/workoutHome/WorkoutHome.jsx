import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ApiFlag,
  CurrentWorkoutContext,
  WorkoutListContext,
} from "../../contexts/workoutList";
import Header from "../header/Header";
import "./WorkoutHome.css";
import WorkoutDetail from "../workoutDetail/WorkoutDetail";

const WorkoutHome = () => {
  const { workoutList, setWorkoutList } = useContext(WorkoutListContext);
  const { apiFlag, setApiFlag } = useContext(ApiFlag);
  const { currentWorkout, setCurrentWorkout } = useContext(
    CurrentWorkoutContext
  );

  useEffect(() => {
    console.log("workoutList", workoutList);
  }, [workoutList]);

  return (
    <div>
      <Header />
      <div className="workoutList-main">
        <h2>Your Workout</h2>
        {workoutList.map((array, index) => {
          return (
            <ul className="workout-list" key={`ul-workout-home-${index}`}>
              <h2>
                {apiFlag === "muscle" ? (
                  <h3>{workoutList[index].json1[index].muscle}</h3>
                ) : apiFlag === "type" ? (
                  <h3>{workoutList[index].json1[index].type}</h3>
                ) : (
                  <h3>{`${workoutList[index].json1[index].type}: ${workoutList[index].json1[index].muscle}`}</h3>
                )}
              </h2>
              {array.json1.map((value) => {
                return (
                  <Link
                    to={`/workoutDetail/${value.name}`}
                    state={{ value: value }}
                    onClick={() => {
                      setCurrentWorkout(value);
                    }}
                  >
                    <li
                      className="workoutList-li"
                      key={`${value.name}-${index}`}
                    >
                      {value.name}
                    </li>
                  </Link>
                );
              })}
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default WorkoutHome;

//! This works for two workout array at a time only
// {workoutList.map((array) => {
//     return (
//       <div>
//         {/* {apiFlag === "muscle" ? (
//           <h2>{workoutList[0].muscle}</h2>
//         ) : apiFlag === "type" ? (
//           <h2>{workoutList[0].type}</h2>
//         ) : (
//           <h2>{`${workoutList[0].type}: ${workoutList[0].muscle}`}</h2>
//         )} */}
//         ----Header
//         {array.json1.map((value) => {
//           return <p>{value.name}</p>;
//         })}
//       </div>
//     );
//   })}
// </div>
// ) : (
// <div>bad</div>
// )}
