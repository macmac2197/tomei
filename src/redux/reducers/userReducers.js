import { USER_ACTIONS_TYPE } from '../../constant/userActionsType';

const IUserState = {
    user: []
}

export const userReducers = (state = IUserState, action) => {
    switch (action.type) {
        case USER_ACTIONS_TYPE:
            return {
                ...state,
                user: [...state.user, action.payload],
            }
    
        default:
            return state;
    }
}