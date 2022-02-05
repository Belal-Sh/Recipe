import React from "react";


const ImageCopmonet = ({ imgSrc, altImage, styles }) => {
    return (
        <div className={styles}>
            <img src={imgSrc} alt={altImage} title={altImage} />
        </div>
    )
}

export default ImageCopmonet