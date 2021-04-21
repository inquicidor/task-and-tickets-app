export const initSession = (dispatch,firebase,email, password)=>{

    return new Promise((resolver,eject)=>{
        firebase.auth.signInWithEmailandPassword(email,password)
        .then(auth=>{
            firebase.db.colletion("User")
            .doc(auth.user.uid)
            .get()
            .then(doc=>{
                const userDB = doc.data();
                dispatch({
                    type:"INICIAR_SESION",
                    sssion:userDB,
                    authentication:true
                });
                resolver();
            });
        })
        .catch(error=>{
            console.log('Error: ', error);
        })
    });
};


export const createUser = (dispatch,firebase,user)=>{
    return new Promise((resolver,eject)=>{
        firebase.auth
        .createUserWithEmailAndPassword(user.email, user.password)
        .then(auth=>{
            firebase.db.colletion("Users")
            .doc(auth.user.uid)
            .set({
                id:auth.user.uid,
                email:user.email,
                name:user.name,
                lastName: user.lastName
            },{merge:true}
            )
            .then(doc=>{
                user.id = auth.user.uid;
                dispatch({
                    type:"INICIAR_SESION",
                    sssion:userDB,
                    authentication:true
                })
            })
            resolver();
        })
    })
    
}

export const exitSession = (dispatch,firebase)=>{
    return new Promise((resolver,eject)=>{
        firebase.auth.signOut().then(exit=>{
            dispatch({
                type : "SALIR_SESION",
                newUser : {
                    email:"",
                    name:"",
                    lastName:"",
                    id:""

                },
                authentication:false
            });
            resolver();
        });
    });
};