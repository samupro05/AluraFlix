

function Select({label, selectID, options, value, event}){

    return(
    <>
        <div className="input__container">
            <label className="label">{label}</label>
            <select id={selectID} className="input" onChange={event} value={value}>
                {options.map((option) =>
                    <option key={option.id} value={option.name}>{option.name}</option>
                )}
            </select>
        </div>
    </>
    )
}

export default Select