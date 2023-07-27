function RangeInput(props) {
    const { value, valueFor, onChange, min, max, step } = props
    
    return (
        <div className="row-spaced col-s-12 col-12">
            <input
                className="col-s-11 col-11" type="range"
                id={valueFor} name={valueFor}
                value={value} onChange={onChange} min={min} max={max} step={step}
            />
            <label>{value}</label>
        </div>
    )
}

export default RangeInput