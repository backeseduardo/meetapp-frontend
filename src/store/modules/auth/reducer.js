import produce from 'immer';

const INITIAL_STATE = {
  signed: false,
  token: null,
  user: null,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.signed = true;
        draft.token = action.payload.token;
        draft.user = action.payload.user;
        break;
      }

      case '@auth/SIGN_FAILURE': {
        draft.signed = false;
        break;
      }

      default:
    }
  });
}
