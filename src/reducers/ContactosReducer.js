/**
 * Reducer de Contactos como función que recibe dos parámetros que son:
 * un state y un action.
 */

export const ContactosReducer = (state, action) => {
    switch(action.type){
        case "add":
            return[...state, action.payload];
        case "delete":
            return state.filter((actual) => actual.id !== action.payload);
        default:
            return state;
    }
}