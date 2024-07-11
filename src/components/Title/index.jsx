import './Title.modules.css';

function Title({content, type, styles}){

    switch(type) {
        case "h1":
            return <h1 className={styles}>{content}</h1>
        case "h2":
            return <h2 className={styles}>{content}</h2>
        case "h3":
            return <h3 className={styles}>{content}</h3>
        default:
            return <h4 className={styles}>{content}</h4>
    }
}

export default Title