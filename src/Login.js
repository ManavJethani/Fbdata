import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import { connect } from 'react-redux';

import { saveFB, clearFB } from './actions/fbData_Action';


class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: "",
    photos : "",
  };

  responseFacebook = response => {
    console.log(response);
    this.props.saveFB(response);

    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });
  };

  componentClicked = () => console.log("clicked");

  LogoutHandle = () => {

    this.setState(prevState => ({
      isLoggedIn: false
    }));
    this.props.clearFB();
    //window.FB.logout();
  }  
  

  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = (
        <div
          style={{
            width: "400px",
            margin: "auto",
            background: "blue",
            padding: "20px"
          }}
        >
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome {this.state.name}</h2>
          Email: {this.state.email}
        </div>
      );
    } 
    else {
      fbContent = (
        <FacebookLogin
          appId="604903993296302"
          autoLoad={false}
          scope = "user_photos"
          fields="name,email,picture,albums.fields(id,name,cover_photo{picture},photos.fields(name,picture,source))"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />

        
      );
    }

    return <div>{fbContent}
            <input type = "button" value = "logout" onClick = {this.LogoutHandle.bind(this)} />
          </div>;
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveFB: (fbData) => dispatch(saveFB(fbData)),
        clearFB: () => dispatch(clearFB()),

    };
};

export default connect(()=>{},
    mapDispatchToProps
)(Facebook);