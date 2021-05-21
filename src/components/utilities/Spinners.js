import React from 'react'

export const BlackSpinner = () => {
    return (
        <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    )
}

export const CyanSpinner = () => {
    return (
        <div className="spinner-border text-info" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    )
}

