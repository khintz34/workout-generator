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

import { capAll } from "../../assets/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faRotate,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";

const Options = () => {
  return (
    <div className="options-container">
      <Header />
      <div className="options-main">
        <h3>Options</h3>
        <div>
          You may one or more from the following muscle groups:
          <ul>
            {MuscleGroup.map((value) => {
              return <li className="optionList-li">{capAll(value.value)}</li>;
            })}
          </ul>
        </div>
        <div>
          You may pick one from the following workout types:
          <ul>
            {WorkoutType.map((value) => {
              return <li className="optionList-li">{capAll(value.value)}</li>;
            })}
          </ul>
        </div>
        <div className="option-info">
          You may choose how many workouts per muscle group/type you would like
          to have in your workout (1 - 10). If less than your desired number
          show up, then that means you reached the max amount from the database.
        </div>
        <div className="option-info">
          Tap the
          <span>
            {" "}
            <FontAwesomeIcon
              icon={faCircleInfo}
              className="optionPurple"
            />{" "}
          </span>
          icon for a detailed explanation of the exercise, including difficulty,
          needed eqipment, and instructions.
        </div>
        <div className="option-info">
          Tap the
          <span>
            {" "}
            <FontAwesomeIcon icon={faRotate} className="optionPurple" />{" "}
          </span>
          icon to replace that excerise with a different one.
        </div>
        <div className="option-info">
          Tap the
          <span>
            {" "}
            <FontAwesomeIcon icon={faTrash} className="optionPurple" />{" "}
          </span>
          to remove that exercise have one less exercise in your workout.
        </div>
      </div>
    </div>
  );
};

export default Options;
