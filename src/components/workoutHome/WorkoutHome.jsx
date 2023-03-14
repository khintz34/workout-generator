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
  const [emptyList, setEmptyList] = useState(false);

  useEffect(() => {
    console.log("workoutList", workoutList);
    console.log(workoutList[0].json1);
    console.log(exerciseNumber);
  }, [workoutList]);

  const capAll = (string) => {
    return string
      .split("_")
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join("_")
      .replace(/_/g, " ");
  };

  const removeExercise = (name, change) => {
    let newArray = workoutList;

    if (apiFlag === "muscle" || apiFlag === "both") {
      newArray[0].json1.map((value, index) => {
        console.log(value);
        if (value.name === name) {
          newArray[0].json1.splice(index, 1);
          console.log(newArray[0].json1);
          if (!change) {
            setExerciseNumber(exerciseNumber - 1);
          } else {
            newArray[0].json1.push(value);
          }
        }
        setWorkoutList([...newArray]);
      });
    } else {
      newArray[0].map((value, index) => {
        console.log(value);
        if (value.name === name) {
          newArray[0].splice(index, 1);
          if (!change) {
            setExerciseNumber(exerciseNumber - 1);
          } else {
            newArray[0].push(value);
          }
        }
        setWorkoutList([...newArray]);
      });
    }
  };

  return (
    <div>
      <Header />
      <div className="workoutList-main">
        <h2>Your Workout</h2>
        {workoutList.map((array, index) => {
          let num = 0;
          return (
            <ul className="workout-list" key={`ul-workout-home-${index}`}>
              <div>
                {/* //! this is not working. only load header if there is data in
                the array or //! if exerciseNumber > 0 */}
                {apiFlag === "muscle" ? (
                  exerciseNumber !== 1 ? (
                    workoutList[index].json1.length !== 0 ? (
                      <h3>{capAll(workoutList[index].json1[index].muscle)}</h3>
                    ) : (
                      <h3>No Exercises added</h3>
                    )
                  ) : (
                    <h3>{capAll(workoutList[index].json1[index].muscle)}</h3>
                  )
                ) : apiFlag === "type" ? (
                  <h3>{capAll(workoutList[index][0].type)}</h3>
                ) : workoutList[index].json1.length !== 0 ? (
                  <h3>{`${workoutList[index].json1[0].type}: ${workoutList[index].json1[0].muscle}`}</h3>
                ) : (
                  <h3>No Exercises added</h3>
                )}
              </div>
              <div className="exercise-list-container">
                {apiFlag === "muscle" || apiFlag === "both"
                  ? array.json1.map((value) => {
                      num++;
                      if (num > exerciseNumber) {
                        return;
                      }
                      return (
                        <div
                          className="exercise-list-main"
                          key={`${value.name}-${index}-div`}
                        >
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
                          <button>
                            <Link
                              to={`/workoutDetail/${value.name}`}
                              state={{ value: value }}
                              onClick={() => {
                                setCurrentWorkout(value);
                              }}
                            >
                              Info
                            </Link>
                          </button>
                          <button
                            onClick={() => removeExercise(value.name, true)}
                          >
                            Change
                          </button>
                          <button
                            onClick={() => removeExercise(value.name, false)}
                          >
                            Remove
                          </button>
                        </div>
                      );
                    })
                  : array.map((value, index) => {
                      num++;
                      if (num > exerciseNumber) {
                        return;
                      }
                      return (
                        <div
                          className="exercise-list-main"
                          key={`${value.name}-${index}-div`}
                        >
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
                          <button>
                            <Link
                              to={`/workoutDetail/${value.name}`}
                              state={{ value: value }}
                              onClick={() => {
                                setCurrentWorkout(value);
                              }}
                            >
                              Info
                            </Link>
                          </button>
                          <button
                            onClick={() => removeExercise(value.name, true)}
                          >
                            Change
                          </button>
                          <button
                            onClick={() => removeExercise(value.name, false)}
                          >
                            Remove
                          </button>
                        </div>
                      );
                    })}
              </div>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default WorkoutHome;
