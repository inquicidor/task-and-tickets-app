import { Avatar, Button, Container, TextField, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import LockOutlineIcon from "@material-ui/icons/LockOutlined";
import { compose } from 'recompose';
import {consumerFirebase} from '../../server';
const style= {
    paper:{
        marginTop:9,
        display:"flex",
        flexDirection:"column",
        alingItems: "center"
    },
    avatar:{
        margin:5,
        backgroundColor:"red"
    },
    form:{
        width:"100%",
        marginTop: 8

    }


}

class Login extends Component {
    state = {
        firebase: null,
        user:{
            email:'',
            password:''
        }

    }

    static getDerivedStateFromProps(nextProp, prevState){
        if(nextProp.firebase === prevState.firebase){
            return null;
        }
        return {
            firebase: nextProp.firebase
        };
    }


    onChange  = e =>{
       let user = Object.assign({},this.state.user);
       user[e.target.name]= e.target.value;
       this.setState({
           user:user
       });
    }
    
    Login = e=>{
        e.preventDefault();

        const {firebase, user}= this.state;

        firebase.auth.signInWithEmailAndPassword(user.email, user.password)
        .then(auth =>{
            this.props.history.push('/');
        }).catch(error => {
            console.log("Error: ",error);
        })
    
    }

    render() {
        return (
            <Container maxWidth ="xs">
                <div style = {style.paper}>
                    <Avatar style ={style.avatar}>
                        <LockOutlineIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Ingrese Usuario
                    </Typography>
                    <form style={style.form}>
                        <TextField onChange = {this.onChange} value = {this.state.user.email} name ="email" variant ="outlined" label="Email" fullWidth margin = "normal"/>
                        <TextField onChange = {this.onChange} value = {this.state.user.password} name ="password" type = "password" variant ="outlined" label="Password" fullWidth margin = "normal"/>
                        <Button onClick ={this.Login} type= "submit" variant="contained" fullWidth color="primary">
                            Enviar
                        </Button>
                    </form>
                </div>
            </Container>
        );
    }
}

export default compose(consumerFirebase)(Login);

