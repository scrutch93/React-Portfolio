import React from 'react'

const Input = (props) => {
    return (
        <div>
            <input type="Text" placeholder="type away" onChange={props.change}></input>
        </div>
    )
}

export default Input

