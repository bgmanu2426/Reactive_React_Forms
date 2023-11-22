/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import { useState } from 'react'
import './style.css'

const Input = ({ label, onChange, errorMessage, ...otherProps }) => {
    const [focused, setFocused] = useState(false)
    return (
        <div className='inputField'>
            <label>{label}</label>
            <input {...otherProps}
                onChange={onChange}
                onBlur={() => { setFocused(true) }}
                onFocus={() => { otherProps.name === 'confirmPassword' && setFocused(true) }}
                focused={focused.toString()}
            />
            <span>{errorMessage}</span>
        </div>
    )
}

export default Input