import { USER_ACTIONS_TYPE } from '../../constant/userActionsType';
import { createUser } from '../services/userServices';

export const createNewUser = (user, onSuccess) => async dispatch => {
    try {
        const { data } = await createUser(user);
        
        dispatch({
            type: USER_ACTIONS_TYPE.CREATE_USER,
            payload: data
        });
        onSuccess();
    } catch (error) {
        console.log(error);
    }
}