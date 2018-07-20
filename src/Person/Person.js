import React from 'react';

const index = (props) => {
    return (
        <div>
            <p onClick={props.click}>I'm a {props.name} and I am a {props.age} years old.</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value = {props.name}/>
        </div>
    )
}
export default index;