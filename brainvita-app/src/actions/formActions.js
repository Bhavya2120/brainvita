import { SUBMIT_FORM } from '../const/actionTypes';
import axios from 'axios';

/**
 * @description action for submit user with left marbles
 */
export const submitForm = (userForm) => {
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
    };

    return {
        type: SUBMIT_FORM,
        payload: axios.post('http://127.0.0.1:8000/form/', userForm, { headers })
            .then(response => {
                alert('Form data submitted successfully!');
                return response.data;
            })
            .catch(error => {
                alert('Error submitting form data');
                throw error;
            })
    };
}
