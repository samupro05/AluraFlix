import { useState } from 'react';
import Image from '../Image';
import Title from '../Title';
import Button from './Button';
import Modal from '../Modal';
import './Card.modules.css';

function Card({video}){
    const [modalOpen, setModalOpen] = useState(false);

    const handleEdit = () => setModalOpen(true);

    const handleDelete = () => {
        console.log("Video eliminado:" + video.id);
        fetch(`http://localhost:3000/videos/${video.id}`,{
            method: 'DELETE',
        })
        .then(response => {
            if(response.ok) {
                window.location.reload();
            }
        })
    }

    return (
    <>
        <div className="card">
            <a href={video.url} target="_blank" rel='noreferrer'>
                <div className="card__img__container">
                    <Image alt={video.desc} img={video.image} styles="card__img" />
                </div>
                <div className="card__body">
                    <p className="card__category">{video.category}</p>
                    <Title type="h4" content={video.title} styles="card__title" />
                    <p className="card__desc">{video.description}</p>
                </div>
            </a>
            <div className="card__btn__container">
                <Button event={handleEdit} content="Edit" styles="edit" />
                <Button event={handleDelete} content="Delete" styles="delete" />
            </div>
            {modalOpen && <Modal video={video} onClose={()=> setModalOpen(false)} />}
        </div>
    </>
    )
}

export default Card