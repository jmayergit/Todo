import React from 'react'
import Item from './Item'

export default {
    title: 'Item',
    component: Item,
}

export const Active = () => (
    <Item completed={false} value="Todo Item" />
)

export const Completed = () => (
    <Item completed={true} value="Todo Item" />
)