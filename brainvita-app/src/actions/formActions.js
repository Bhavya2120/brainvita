import { SUBMIT_FORM } from '../const/actionTypes';

/**
 * @description action for submit user with left marbles
 */
export const submitForm = (userForm) => {
    return {
        type: SUBMIT_FORM,
        payload: new Promise((resolve, reject) => {
            setTimeout(() => {
                alert('Storing score is a work in progress :)')
                resolve();
            }, 1000);
        })
    };
}
