import './Buttons.css'

export function PrimaryButton(props) {
    const { type, icon: icon, text, onClick } = props;

    return (
        <button type={type} className="button-primary" onClick={onClick}>
            <i className='icon-button'>{icon}</i>
            {text}
        </button >
    )
}

export function SecondaryButton(props) {
    const { icon: icon, text, onClick } = props;
    
    return (
        <button className="button-secondary" onClick={onClick} type='button'>
            <i className='icon-button'>{icon}</i>
            {text}
        </button>
    )
}

export function IconButton({ icon: icon, onClick }) {
    return (
        <button className='i-button' onClick={onClick}>
            {icon}
        </button>
    )
}