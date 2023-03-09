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
      {workoutList !== [] ? (
        <div className="workoutList-main">
          {/* {apiFlag === "muscle" ? (
            <h2>{workoutList[0].muscle}</h2>
          ) : apiFlag === "type" ? (
            <h2>{workoutList[0].type}</h2>
          ) : (
            <h2>{`${workoutList[0].type}: ${workoutList[0].muscle}`}</h2>
          )}
          <ul className="workout-list">
            {workoutList.map((value, index) => {
              return (
                <li className="workoutList-li" key={`${value.name}-${index}`}>
                  {value.name}
                </li>
              );
            })}
          </ul> */}
          {workoutList.map((array) => {
            return (
              <div>
                {/* {apiFlag === "muscle" ? (
                  <h2>{workoutList[0].muscle}</h2>
                ) : apiFlag === "type" ? (
                  <h2>{workoutList[0].type}</h2>
                ) : (
                  <h2>{`${workoutList[0].type}: ${workoutList[0].muscle}`}</h2>
                )} */}
                ----Header----
                {array.json1.map((value) => {
                  return <p>{value.name}</p>;
                })}
              </div>
            );
          })}
        </div>
      ) : (
        <div>bad</div>
      )}
    </div>
  );
};

export default WorkoutHome;

//! This works for one array at a time only
{
  /* <div>
      <Header />
      {workoutList ? (
        <div className="workoutList-main">
          {apiFlag === "muscle" ? (
            <h2>{workoutList[0].muscle}</h2>
          ) : apiFlag === "type" ? (
            <h2>{workoutList[0].type}</h2>
          ) : (
            <h2>{`${workoutList[0].type}: ${workoutList[0].muscle}`}</h2>
          )}
          <ul className="workout-list">
            {workoutList.map((value, index) => {
              return (
                <li className="workoutList-li" key={`${value.name}-${index}`}>
                  {value.name}
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div>bad</div>
      )}
    </div> */
}
