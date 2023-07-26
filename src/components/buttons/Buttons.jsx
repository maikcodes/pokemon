import './Buttons.css'
import PropTypes from 'prop-types';


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

PrimaryButton.propTypes = {
    icon: PropTypes.node.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

SecondaryButton.propTypes = {
    icon: PropTypes.node.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

IconButton.propTypes = {
    icon: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
}