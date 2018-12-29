import React from "react";


const AlbumPhotos = props => {
    const { picture } = props;
    console.log(picture);
    return (
        <div className="picStyle">
         <img  src={picture} alt="some text"/>
       </div>
    );
};

export default AlbumPhotos;
