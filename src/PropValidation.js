import React from 'react';
import PropTypes from 'prop-types';


function Sum(props) {
    return <div><div>{props.a} + {props.b} = {props.a + props.b} </div><div>c = {props.c}</div></div>;
}

Sum.propTypes = {
    a: PropTypes.number.isRequired,
    b: PropTypes.number.isRequired,
}



export default Sum