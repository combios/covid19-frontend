import React from "react";
import { connect } from "react-redux";
import actions from "Redux/actions";

function ReduxTest2(props) {
  const { patients, getPatients } = props;
  const renderedPatients = patients.map((patient, index) => (
    <div key={patient.id}>{patient.employee_name}</div>
  ));
  return (
    <div>
      <button onClick={getPatients}>
        GET USERS (mapStateToProps and mapDispatchToProps
      </button>
      <div>{renderedPatients}</div>
    </div>
  );
}

const mapStateToProps = state => {
  const patients = state.users.patients;
  return { patients };
};
const mapDispatchToProps = dispatch => ({
  getPatients: () => dispatch(actions.userActions.getPatients())
});
export default connect(mapStateToProps, mapDispatchToProps)(ReduxTest2);
