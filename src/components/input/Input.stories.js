import React from 'react'
import Input from './Input'

export default {
    title: 'Input',
    component: Input,
}

export const Default = () => (
    <Input />
)

export const ToggleButton = () => (
    <Input isToggle={true} toggle={() => {}} />
)

export const ToggleButtonStyles = () => (
    <Input isToggle={true} toggle={() => {}} toggleStyle={{color: '#eee'}} />
)