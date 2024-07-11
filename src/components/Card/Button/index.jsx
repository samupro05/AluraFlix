import './Button.modules.css';

function Button({url, event, content, styles, type}){

    styles = "btn " + styles;

    return (
    <>
        <button type={type} onClick={event} className={styles}>{content}</button>
    </>
    )
}

export default Button