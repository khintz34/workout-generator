import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ApiFlag,
  CurrentWorkoutContext,
  ExerciseNumberContext,
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
  const { exerciseNumber, setExerciseNumber } = useContext(
    ExerciseNumberContext
  );

  useEffect(() => {
    console.log("workoutList", workoutList);
  }, [workoutList]);

  const capAll = (string) => {
    return string
      .split("_")
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join("_")
      .replace(/_/g, " ");
  };

  return (
    <div>
      <Header />
      <div className="workoutList-main">
        <h2>Your Workout</h2>
        {workoutList.map((array, index) => {
          console.log(array);
          let num = 0;
          return (
            <ul className="workout-list" key={`ul-workout-home-${index}`}>
              <div>
                {apiFlag === "muscle" ? (
                  <h3>{capAll(workoutList[index].json1[index].muscle)}</h3>
                ) : apiFlag === "type" ? (
                  <h3>{capAll(workoutList[index][0].type)}</h3>
                ) : (
                  <h3>{`${workoutList[index].json1[0].type}: ${workoutList[index].json1[0].muscle}`}</h3>
                  //   <h3>Test</h3>
                )}
              </div>
              {/* {apiFlag === "muscle" || apiFlag === "both" */}
              {apiFlag === "muscle" || apiFlag === "both"
                ? array.json1.map((value) => {
                    num++;
                    if (num > exerciseNumber) {
                      return;
                    }
                    return (
                      <Link
                        key={`${value.name}-${index}-Link`}
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
                  })
                : array.map((value) => {
                    num++;
                    if (num > exerciseNumber) {
                      return;
                    }
                    return (
                      <Link
                        key={`${value.name}-${index}-Link`}
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
