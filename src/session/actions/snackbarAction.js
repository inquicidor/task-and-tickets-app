export const openMessageSnackbar=(dispatch, openMessage )=>{
    dispatch({
        type:"OPEN_SNACKBAR",
        openMessage:openMessage
    })
} 