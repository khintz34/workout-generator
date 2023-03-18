import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ApiFlag,
  CurrentWorkoutContext,
  WorkoutListContext,
} from "../../contexts/workoutList";
import "./WorkoutHome.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faRotate,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { capAll } from "../../assets/utils";

const WorkoutHome = () => {
  const { workoutList, setWorkoutList } = useContext(WorkoutListContext);
  const { apiFlag, setApiFlag } = useContext(ApiFlag);
  const { currentWorkout, setCurrentWorkout } = useContext(
    CurrentWorkoutContext
  );

  useEffect(() => {}, [workoutList]);

  const removeExercise = (name, change, num) => {
    let newArray = workoutList;

    newArray[num].json1.map((value, index) => {
      if (value.name === name) {
        newArray[num].json1.splice(index, 1);
        if (!change) {
          newArray[num].number = newArray[num].number - 1;
          if (newArray[num].number === 0) {
            newArray.splice(num, 1);
          }
        } else {
          newArray[num].json1.push(value);
        }
      }
      setWorkoutList([...newArray]);
    });
  };

  return (
    <div>
      <div className="workoutList-main">
        <h2>Your Workout</h2>
        {workoutList.length == 0 ? (
          <h3>No Exercises added</h3>
        ) : (
          workoutList.map((array, index) => {
            let num = 0;
            let exerciseMap = array.json1;

            return (
              <ul className="workout-list" key={`ul-workout-home-${index}`}>
                <div className="exerciseHeader">
                  {exerciseMap.length === 0 ||
                  workoutList[index].number === 0 ? (
                    workoutList.length > 1 ? (
                      <></>
                    ) : (
                      <h3>No Exercises added</h3>
                    )
                  ) : apiFlag === "muscle" ? (
                    <h3>{capAll(workoutList[index].json1[index].muscle)}</h3>
                  ) : apiFlag === "type" ? (
                    <h3>{capAll(workoutList[index].json1[0].type)}</h3>
                  ) : (
                    <h3>{`${capAll(workoutList[index].json1[0].type)}: ${capAll(
                      workoutList[index].json1[0].muscle
                    )}`}</h3>
                  )}
                </div>
                <div className="exercise-list-container">
                  {exerciseMap.map((value, index2) => {
                    num++;
                    if (num > workoutList[index].number) {
                      return;
                    }
                    return (
                      <div
                        className="exercise-list-main"
                        key={`${value.name}-${index2}-div`}
                      >
                        <li
                          className="workoutList-li"
                          key={`${value.name}-${index}`}
                        >
                          {value.name}
                        </li>
                        <div className="exerciseButtonContainer">
                          <button>
                            <Link
                              to={`/workoutDetail/${value.name}`}
                              state={{ value: value }}
                              onClick={() => {
                                setCurrentWorkout(value);
                              }}
                              className="infoBtn"
                            >
                              <FontAwesomeIcon icon={faCircleInfo} />
                            </Link>
                          </button>
                          <button
                            onClick={() =>
                              removeExercise(value.name, true, index)
                            }
                            className="infoBtn"
                          >
                            <FontAwesomeIcon icon={faRotate} />
                          </button>
                          <button
                            onClick={() =>
                              removeExercise(value.name, false, index)
                            }
                            className="infoBtn"
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </ul>
            );
          })
        )}
      </div>
    </div>
  );
};

export default WorkoutHome;
