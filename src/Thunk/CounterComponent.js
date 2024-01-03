import { connect } from "react-redux";
import { incrementAsync } from "./Action";
import React from "react";
const CounterComponent=({counter,incrementAsync})=>
{
    return(
        <div>
            
            <p>Counter:{counter}</p>
            <button onClick={incrementAsync}>increment incrementAsync</button>
        </div>
    );
};
const mapStateToProps=(state)=>
{
    return{
        counter:state.counter
    };
};
export default connect(mapStateToProps,{incrementAsync})(CounterComponent);