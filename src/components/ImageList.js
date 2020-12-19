import React from 'react';
import ImageCard from './ImageCard.js'
import './image.css'
const ImageList = props =>{
    const images = props.images.map(image=>{
        return <ImageCard image={image}></ImageCard>
    })
return <div className="image-list">{images}</div>
}

export default ImageList