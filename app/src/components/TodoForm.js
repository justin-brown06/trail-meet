import React from "react";
import { connect } from "react-redux";

function TodoForm(props){
  console.log(props);

  return (
    <div>
      <p>{props.count}</p>
      <button onClick={props.burrito}> Increment </button>
      <hr/>
    </div>
  );
}

const mapStateToProps = ({count}) => ({count});
const mapDispatchToProps = (dispatch) => ({
    burrito(){ 
      dispatch({type: "INCREASE_COUNT"})
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
