import React from 'react'
import Footer from './Footer'

export default {
    title: 'Footer',
    component: Footer,
}

export const ZeroActiveSomeCompleted = () => (
    <Footer active={0} filter="All" handleFilter={() => {}} isClear={true} handleClear={() => {}} />
)

export const OneActiveZeroCompleted = () => (
    <Footer active={1} filter="Active" handleFilter={() => {}} isClear={false} handleClear={() => {}} />
)

export const TwoActiveZeroCompleted = () => (
    <Footer active={2} filter="Active" handleFilter={() => {}} isClear={false} handleClear={() => {}} />
)

export const TwoActiveSomeCompleted = () => (
    <Footer active={2} filter="Completed" handleFilter={() => {}} isClear={true} handleClear={() => {}} />
)