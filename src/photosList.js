import React, { Component } from "react";
import { connect } from "react-redux";
import Photos from "./photos"


class PhotosList extends Component {
   
    renderPhotos = (photos) =>{
        let pics = [];
    
        if(photos.length>0) {

             pics = photos.map((pic)=>{
     //            console.log(pic.cover_photo.picture);
                 if(pic.cover_photo){
                return (
                   <div key = {pic.id}>
                    <Photos picture = {pic.cover_photo.picture} album_id = {pic.id} />
                  </div>
                )
            }
                   
             })

        }
        
          return pics;
    }

    render() {
        const { albums } = this.props.fbData;
        return (
            <div className="photo">
                {  this.renderPhotos(albums)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {fbData: state.fbData}
};

export default connect(mapStateToProps)(PhotosList);