import React, { useContext, useEffect, useState } from "react";
import { ApiFlag, WorkoutListContext } from "../../contexts/workoutList";
import Header from "../header/Header";
import "./WorkoutDetail.css";
import { Link, useLocation } from "react-router-dom";
import { capAll } from "../../assets/utils";

const WorkoutDetail = (props) => {
  const location = useLocation();
  const { value } = location.state;

  return (
    <div>
      <div className="workoutList-detail">
        <h2>
          <span className="detail-span">Exercise: </span>
          {capAll(value.name)}
        </h2>
        <p className="detail-p">
          <span className="detail-span">Difficulty: </span>
          {capAll(value.difficulty)}
        </p>
        <p className="detail-p">
          <span className="detail-span">Type: </span>
          {capAll(value.type)}
        </p>
        <p className="detail-p">
          <span className="detail-span">Muscle: </span>
          {capAll(value.muscle)}
        </p>
        <p className="detail-p">
          <span className="detail-span">Equipment Needed: </span>{" "}
          {capAll(value.equipment)}
        </p>
        <p className="detail-p">
          <span className="detail-span">Instructions: </span>
          {capAll(value.instructions)}
        </p>
        <Link to="/workout" className="backBtn">
          <button className="backBtn">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default WorkoutDetail;
