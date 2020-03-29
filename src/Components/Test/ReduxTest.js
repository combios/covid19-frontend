import React from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "Redux/actions";
import ReduxTest2 from "./ReduxTest2";

export default function ReduxTest() {
  const dispatch = useDispatch();
  const getPatients = () => {
    dispatch(actions.userActions.getPatients());
  };
  const patients = useSelector(state => state.users.patients);
  const renderedPatients = patients.map((patient, index) => (
    <div key={patient.id}>{patient.employee_name}</div>
  ));

  return (
    <div>
      <button onClick={getPatients}>
        GET USERS (useSelector and useDispatch)
      </button>
      <ReduxTest2></ReduxTest2>
      <div>{renderedPatients}</div>
    </div>
  );
}
