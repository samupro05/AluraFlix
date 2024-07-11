import './Image.modules.css';

function Image({img, alt, styles}){
        return(
        <>
            <img styles={styles} src={img} alt={alt} />
        </>
        )
    }
export default Image