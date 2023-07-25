import { useState } from "react"

function RangeInput({ text, min, max, step }) {
    const [value, setValue] = useState(100);

    return (
        <div className="row-spaced col-s-12 col-12">
            <input className="col-s-11 col-11" type="range"  min={0} max={100} step={1} />
            <label>{value}</label>
        </div>
    )
}

export default RangeInput