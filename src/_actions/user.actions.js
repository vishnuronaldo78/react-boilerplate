import { userConstants } from '../_constants';
import { store } from '../_helpers';
export const userActions = {
    userName
};

function userName(payload) {
    return { type: userConstants.USER_NAME, payload };
}
