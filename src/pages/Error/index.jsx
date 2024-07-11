import './Error.modules.css';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Main from '../../components/Main'
import NotFound from '../../components/NotFound';

function Error(){
    return(
    <>
        <Header />
        <Main
            mainContent={<NotFound />}
        />
        <Footer />
    </>
    )
}

export default Error