import React from 'react'
import PropTypes from 'prop-types'
import './Item.css'

export default function Item(props) {
    const [editing, setEditing] = React.useState(false)

    const textInput = React.useRef(null)

    const handleDblClick = () => {
        setEditing(true)
        textInput.current.focus()
    }

    const handleBlur = () => {
        setEditing(false)
    }

    const handleKeyUp = ({ keyCode }) => {
        if (13 === keyCode) {
            setEditing(false)
        }
    }

    return (
        <div className="Item">
            <input onChange={props.toggle} type="checkbox" checked={props.completed} />
            <label  className={props.completed ? 'completed' : ''}></label>
            <input 
                onChange={(e) => props.handleEdit(e.target.value)}
                ref={textInput}
                onBlur={handleBlur}
                onKeyUp={handleKeyUp}
                value={props.value} 
                type="text" 
                className={`real ${editing ? 'editing' : ''}`} 
            />
            <input 
                className={`placeholder ${props.completed ? 'completed' : ''}`}
                type="text" 
                value={props.value} 
                onDoubleClick={handleDblClick}
                readOnly
            />
            <button onClick={props.destroy} style={{fontSize: '35px'}}>×</button>
        </div>
    )
}

Item.propTyps = {
    value: PropTypes.string,
    completed: PropTypes.bool,
    toggle: PropTypes.func,
    destroy: PropTypes.func,
    handleEdit: PropTypes.func,
}