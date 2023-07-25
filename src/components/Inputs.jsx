import '../styles/Inputs.css'

export function Input({placeholder}) {
  return (
    <div className="input-container">
      <input className="input-field" type="text" placeholder={placeholder} />
    </div>
  )
}

export function InputIcon(props) {
  const { placeholder, icon: Icon } = props
  return (
    <div className="input-container">
      <i className="icon"><Icon size={20} /></i>
      <input className="input-field" type="text" placeholder={placeholder} />
    </div>
  )
}

