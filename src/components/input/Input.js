import React from 'react'
import PropTypes from 'prop-types'
import './Input.css'

export default function Input(props) {
    const [value, setValue] = React.useState('')

    const handleKeyUp = ({ keyCode }) => {
        if (13 === keyCode) {
            props.handleSubmit(value)
            setValue('')
        }
    }

    return (
        <div className="Input">
            {props.isToggle && (
                <button style={props.toggleStyle} onClick={props.toggle}>❯</button>
            )}
            <input onKeyUp={handleKeyUp} placeholder="What needs to be done?" value={value} onChange={({target: { value }}) => setValue(value)}></input>
        </div>
    )
}

Input.propTypes = {
    handleSubmit: PropTypes.func,
    isToggle: PropTypes.bool,
    toggleStyle: PropTypes.object,
    toggle: PropTypes.func,
}