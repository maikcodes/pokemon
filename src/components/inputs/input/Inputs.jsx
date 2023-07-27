import './Inputs.css'

export function Input(props) {
  const { value, valueFor, onChange, placeholder } = props
  
  return (
    <div className="input-container">
      <input id={valueFor} name={valueFor} className="input-field" type="text" value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  )
}

export function InputIcon({ icon: Icon, placeholder, onChange }) {
  return (
    <div className="input-container">
      <i className="icon"><Icon size={20} /></i>
      <input className="input-field" type="text" placeholder={placeholder} onChange={onChange} />
    </div>
  )
}