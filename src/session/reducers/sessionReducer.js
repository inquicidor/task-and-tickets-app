export const initialState ={
    user:{
        name:"",
        lastName:"",
        email:"",
        id:"",
        photo:"",
    },
    authentication:false
}


const sessionReducer = (state = initialState, action)=>{
    switch (action.type) {
        case "INICIAR_SESION":
            return {
                ...state,
                user:action.session,
                authenticationUser: action.authenticationUser
            };
            
        case "CAMBIAR_SESION":
            return{
                ...state,
                user:action.newUser,
                authenticationUser:action.authenticationUser
            };

        case "SALIR_SESION":
            return{
                ...state,
                user:action.newUser,
                authenticationUser:action.authenticationUser
            };

        default:
            return state;
    }
};

export default sessionReducer;