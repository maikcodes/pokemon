import '../styles/Buttons.css'

export function PrimaryButton(props) {
    const { icon: icon, text, onClick } = props;
    return (
        < button className="primary-button" onClick={onClick} >
            <i className='button-icon'>{icon}</i>
            {text}
        </button >
    )
}
export function SecondaryButton(props) {
    const { icon: icon, text, onClick } = props;
    return (
        <button className="primary-button" onClick={onClick}>
            <i className='button-icon'>{icon}</i>
            {text}
        </button>
    )
}