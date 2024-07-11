import './Modal.modules.css';
import Form from '../Form';
import Title from '../Title';
import React, { useEffect, useState } from 'react';
import Input from '../Input';
import Select from '../Select';
import Button from '../Card/Button';

function Modal({video, onClose}){

    // const [video, setVideo] = useState(video);
    const id = video.id;
    const [title, setTitle] = useState(video.title);
    const [description, setDescription] = useState(video.description);
    const [category, setCategory] = useState(video.category);
    const [url, setUrl] = useState(video.url);
    const [image, setImage] = useState(video.image);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://668e923dbf9912d4c92eda78.mockapi.io/apialura/categories")
        .then(response => response.json())
        .then(data => setCategories(data));
    }, []);

    const handleSave = () => {
        const updateVideo = {
            id: id,
            title: title,
            description: description,
            category: category,
            url: url,
            image: image
        };


        // https://668e923dbf9912d4c92eda78.mockapi.io/apialura/videos

        fetch(`https://668e923dbf9912d4c92eda78.mockapi.io/apialura/videos/${video.id}`,{
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updateVideo)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            onClose();
        })
    }

    return(
        <>
        <div className="modal">
            <div className="modal__content">
                <Form event={handleSave} className="form"
                    content={
                        <>
                        <Title type="h4" content="Editar Video" />

                        <Input type="number" label="Id:" id="id" placeholder="Ingrese el Id del video" value={id} readonly />

                        <Input type="text" label="Título:" id="title" placeholder="Ingrese el título del video" value={title} event={(e)=> setTitle(e.target.value)} />

                        <Select label="Categorías:" selectID="category" options={categories}
                        value={category} event={(e)=> setCategory(e.target.value)} />

                        <Input type="text" label="Descripción:" id="description" placeholder="Ingrese la
                        descripción del video" value={description} event={(e)=> setDescription(e.target.value)} />

                        <Input type="text" label="Dirección:" id="direction" placeholder="Ingrese la url del video" value={url} event={(e)=> setUrl(e.target.value)} />

                        <Input type="text" label="Imagen:" id="videoimg" placeholder="Ingrese la imagen del video" value={image} event={(e)=> setImage(e.target.value)} />

                        <div className="modal__btn__container">
                            <Button content="Guardar" styles="add" type="submit" />
                            <Button content="Cancelar" styles="delete" event={onClose} type="button" />
                        </div>
                        </>
                    }
                    />
            </div>
        </div>
        </>
    )
}

export default Modal