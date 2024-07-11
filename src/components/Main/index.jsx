import Title from '../Title';
import './Main.modules.css';

function Main({type, content, mainContent, styles}){

    if(styles){ styles += " container"; }else{ styles = "container"; }
    

    return(
    <>
        <Title styles="main__title" type={type} content={content} />
        <div className={styles}>
            {mainContent}
        </div>
    </>
    )
}

export default Main