import '../styles/Buttons.css'

export function PrimaryButton(props) {
    const { icon: icon, text, onClick } = props;
    return (
        < button className="button-primary" onClick={onClick} type='button'>
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