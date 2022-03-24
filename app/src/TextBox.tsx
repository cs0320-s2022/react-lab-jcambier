import React from "react";

function TextBox(props: {label: any; change: any}) {
    const {
        label,
        change
    } = props
    const newVal = (e: any) => {
        change(e.target.value)
    }
    return (
        <div className="TextBox">
            <label>{props.label}: </label>
            <input type = "text" placeholder={label} onChange={newVal} />
        </div>
    );
}

export default TextBox;