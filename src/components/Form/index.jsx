import './Form.modules.css'

function Form({event, content}){
    return(
    <>
    <form onSubmit={event} className="form">
        {content}
    </form>
    </>
    )
}

export default Form