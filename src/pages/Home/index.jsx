import './Home.modules.css';
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Main from "../../components/Main";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";

function Home(){

    const [videos, setVideos] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://668e923dbf9912d4c92eda78.mockapi.io/apialura/videos")
        .then((res) => res.json())
        .then((data) => setVideos(data));

        fetch("https://668e923dbf9912d4c92eda78.mockapi.io/apialura/categories")
        .then((res) => res.json())
        .then((data) => setCategories(data));
    }, []);

    const showVideosByCategory = (category) => {
        const videoFilter = videos.filter(video => video.category === category);
        if(videoFilter.length === 0) return null;
    
        const cards = () => {
            return videoFilter.map((video) => <Card video={video} key={video.id} />)
        }

        const style = `card__container ${category}`;

        return(
            <Main key={category}
            styles={style}
            type="h3" content={category} 
            mainContent={cards()} />
        )
    }

    return(
        <>
            <Header />
            <Banner />
            <Main
                styles="card__container"
                type="h3"
                content="Videos"
                mainContent={
                    categories.map(category => showVideosByCategory(category.name))
                }
                />
            <Footer />
        </>
    )
}

export default Home