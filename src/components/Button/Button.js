import './Button.style.css';

export default function Button({classList, text, iconClass, handleClick}) {
    return (
        <button onClick={handleClick} type='button' className={`btn ${classList}`}>
            <i className={iconClass}></i>
            {text}
        </button>
    )
}
