import React, { useContext, useEffect, useState } from "react";
import { ApiFlag, WorkoutListContext } from "../../contexts/workoutList";
import Header from "../header/Header";
import "./WorkoutHome.css";

const WorkoutHome = () => {
  const { workoutList, setWorkoutList } = useContext(WorkoutListContext);
  const { apiFlag, setApiFlag } = useContext(ApiFlag);

  useEffect(() => {
    console.log("workoutList", workoutList);
  }, [workoutList]);

  return (
    <div>
      <Header />
      <div className="workoutList-main">
        {apiFlag === "muscle" ? (
          <h2>{workoutList[0].json1[0].muscle}</h2>
        ) : apiFlag === "type" ? (
          <h2>{workoutList[0].json1[0].type}</h2>
        ) : (
          <h2>{`${workoutList[0].json1[0].type}: ${workoutList[0].json1[0].muscle}`}</h2>
        )}
        {workoutList.map((array, index) => {
          return (
            <ul className="workout-list" key={`ul-workout-home-${index}`}>
              {array.json1.map((value) => {
                return (
                  <li className="workoutList-li" key={`${value.name}-${index}`}>
                    {value.name}
                  </li>
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
