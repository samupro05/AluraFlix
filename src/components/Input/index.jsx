import './Input.modules.css';

function Input({event, placeholder, label, id, type, value, readonly}){

    placeholder += "...";

    return(
    <>
        <div className="input__container">
            <label className="label" htmlFor="id">{label}</label>
            {!readonly ? <input onChange={event} id={id} className="input" type={type} placeholder={placeholder} value={value}></input>
            : <input onChange={event} id={id} className="input" type={type} placeholder={placeholder} value={value} readOnly></input>}
        </div>
    </>
    )
}

export default Input