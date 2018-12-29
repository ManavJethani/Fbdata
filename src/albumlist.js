import React, { Component } from "react";
import { connect } from "react-redux";
import AlbumPhotos from "./albumphotos"

class Albumlist extends Component{

    
    renderPhotos = (photos) =>{
        let pics1 = [];
    
        if(photos.length>0) {

             pics1 = photos.map( (pic)=> {
                 if(pic.cover_photo){
                    
                     console.log(pic.photos.data.length);
                   
                return (
                   <div key = {pic.id}>
                   {
                       pic.photos.data.map((pic1)=>{
                   //        console.log(pic1.picture);
                           return(
                               <div key = {pic1.id}>
                                    <AlbumPhotos picture = {pic1.picture} />
                               </div>
                       )
                       })
                    
                   }
                  </div>
                )
                    
            
            }
                   
             })

        }
        
          return pics1;
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

export default connect(mapStateToProps)(Albumlist);