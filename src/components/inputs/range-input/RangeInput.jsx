import { useState } from "react"
import PropTypes from 'prop-types'

function RangeInput({ min, max, step }) {
    const [value, setValue] = useState(100);

    return (
        <div className="row-spaced col-s-12 col-12">
            <input className="col-s-11 col-11" type="range" min={min} max={max} step={step} />
            <label>{value}</label>
        </div>
    )
}

RangeInput.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    step: PropTypes.number.isRequired,
}

export default RangeInput