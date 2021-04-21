import { Avatar, Button, Container, Grid, TextField, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import LockOutLineIcon from '@material-ui/icons/LockOutlined';
import { compose } from 'recompose';
import { consumerFirebase } from '../../server';


const style ={
    paper:{
        marginTop : 8,
        display : "flex",
        flexDirection : "column",
        alignItems: "center"

    },

    avatar:{
        margin: 8,
        backgroundColor: "#e53935"
    },

    form:{
        width:"100%",
        marginTop:10
    },
    submit:{
        marginTop: 15,
        marginBotton:20
    }
}

const userInit = {
    nameUser: '',
    lastNameUser: '',
    emailUser: '',
    passwordUser: ''
}

class RegisterUser extends Component {

    state = {
        firebase:null,
        user:{
            nameUser: '',
            lastNameUser: '',
            emailUser: '',
            passwordUser: ''
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){
        console.log('entro aca');
        if(nextProps.firebase === prevState.firebase){
            return null;
        }

        
        return{
            firebase:nextProps.firebase
        }
    }

    onChange = e =>{
        let user = Object.assign({}, this.state.user);
        user[e.target.name] = e.target.value;
        this.setState({
            user:user
        })
    }

    registerUser =e =>{
        e.preventDefault()
        const{user,firebase} = this.state;

        firebase.auth.createUserWithEmailAndPassword(user.emailUser, user.passwordUser).then(auth=>{
            
            const userDB={
                userId : auth.user.uid,
                email: user.emailUser,
                name: user.nameUser,
                lastName: user.lastNameUser
            }

            firebase.db.collection("Users")
            .add(userDB)
            .then(useAfer=>{
                console.log('Exito en insersion');
                this.props.history.push("/");
            })
        .catch(error=>{
            console.log('Error',error);
        });

    }).catch(error=>{
        console.log('Error:',error);
    });

        
}

    render() {
        return (
                <Container maxWidth = "md">
                    <div style ={ style.paper}>
                        <Avatar style = {style.avatar}>
                            <LockOutLineIcon/>
                        </Avatar>
                        <Typography component ="h1" variant ="h5">
                            Registre su cuenta 
                        </Typography>
                        <form style = {style.form}>
                            <Grid Container spacing={2}>
                                <Grid item  md={6} xs ={12}>
                                    <TextField name = "nameUser" onChange={this.onChange}  value = {this.state.user.name} fullWidth label= "ingrese su nombre"/>
                                </Grid>
                                <Grid item md = {6} xs = {12}>
                                    <TextField name = "lastNameUser" onChange={this.onChange} value = {this.state.user.lastName} fullWidth label= "ingrese apelliddos"/>
                                </Grid>
                                <Grid item md = {6} xs = {12}>
                                    <TextField name = "emailUser" onChange={this.onChange} value = {this.state.user.email} fullWidth label= "ingrese Correo"/>
                                </Grid>
                                <Grid item md = {6} xs = {12}>
                                    <TextField type = "password" onChange={this.onChange} name = "passwordUser" value = {this.state.user.password}  fullWidth label= "ingrese Contraseña"/>
                                </Grid>
                            </Grid>
                            <Grid container justify = "center">
                                <Grid item md = {6} xs ={12}>
                                    <Button type = "submit"  onClick = {this.registerUser} variant = "contained" fullWidth size = "large" color = "primary" style = {style.submit} >
                                        Registrar
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Container>
        );
    }
}

export default compose(consumerFirebase) (RegisterUser);