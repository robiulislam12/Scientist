import './Button.style.css';

export default function Button({classname, text, iconClass}) {
    return (
        <button type='button' className={`btn ${classname}`}>
            <i class={iconClass}></i>
            {text}
        </button>
    )
}
