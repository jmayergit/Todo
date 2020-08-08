import React from 'react'
import PropTypes from 'prop-types'
import './Footer.css'

export default function Footer(props) {
    return (
        <div className="Footer">
            <footer>
                <p>{props.active} item{props.active !== 1 && 's'} left</p>
                <div className="filter">
                    <button onClick={() => props.handleFilter('All')} className={props.filter === 'All' ? 'selected' : ''}>All</button>
                    <button onClick={() => props.handleFilter('Active')} className={props.filter === 'Active' ? 'selected' : ''}>Active</button>
                    <button onClick={() => props.handleFilter('Completed')} className={props.filter === 'Completed' ? 'selected' : ''}>Completed</button>
                </div>
                <div className="right">
                    <button className={`clear ${props.isClear ? '' : 'hide'}`} onClick={props.handleClear}>Clear Completed</button>
                </div>
            </footer>
        </div>
    )
}

Footer.propTypes = {
    active: PropTypes.number,
    filter: PropTypes.string,
    handleFilter: PropTypes.func,
    isClear: PropTypes.bool,
    handleClear: PropTypes.func,
}