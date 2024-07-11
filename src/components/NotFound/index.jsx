import Title from '../Title';
import './NotFound.modules.css';

function NotFound(){
    return(
    <>
        <div className="notFound">
            <Title styles="error__title" type="h3" content="Error en la carga de datos" />
            <p className="number">404</p>
        </div>
    </>
    )
}

export default NotFound