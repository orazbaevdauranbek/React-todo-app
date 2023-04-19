export const initialState = {
    user: {},
    token: localStorage.getItem('token') || null,
    isLogged: false, //true
}
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN' :{
            return{
                ...state ,
                user: action.payload.user,
                token: action.payload.token,
                isLogged:true,
            }
        }
        default: {
            return state
        }
    }
}