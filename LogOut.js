import React from 'react';
import { Button } from 'rebass';
import firebase from 'firebase';


const logOutarticle = () => {

 firebase.auth().signOut();

};


const LogOut = () => {

 return <Button className="logout" onClick={logOutarticle} children="Log Out" />;

};

export default LogOut;