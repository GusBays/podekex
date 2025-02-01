import React from 'react'
import './styles.scss'
import { PillProps } from "./types";

const Pill: React.FC<PillProps> = ({ text, color }) => {
    return (
        <div className="pill" style={{ backgroundColor: color }}>
            <span>{text}</span>
        </div>
    )
}

export default Pill