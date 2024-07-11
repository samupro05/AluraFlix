import Image from '../Image';
import banner from './dev1.jpeg';
import Title from '../Title';
import './Banner.modules.css';

function Banner(){
    return(
    <>
        <div className="banner">
            <Title styles="title" content="Crea y descubre los mejores videos en Alura Flix" type="h3" />
            <Image styles="img" img={banner} type="img" alt="Imagen de dos perros juntos" />
        </div>
    </>
    );
}

export default Banner