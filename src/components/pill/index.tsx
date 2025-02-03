import React from 'react'
import './styles.scss'
import { PillProps } from "./types";

const Pill: React.FC<PillProps> = ({ text, color, rounded }) => {
    return (
        <div className="pill" style={{ backgroundColor: color, borderRadius: rounded ? '100%' : '6px' }}>
            <span>{text}</span>
        </div>
    )
}

export default Pill