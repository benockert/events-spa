import { createStore, combineReducers } from 'redux';

//-------------------------SESSION---------------------------
//user session (initially null)
function session(state=null, action) {
  switch (action.type) {
    case 'session/set':
      return action.data
    default:
      return state;
  }
}

//--------------------------USERS---------------------------
//list of users
function users(state = [], action) {
    switch (action.type) {
    case 'users/set':
        return action.data;
    default:
        return state;
    }
}

//data of current user being edited
function user_form(state = {}, action) {
    switch (action.type) {
    case 'user_form/set':
        return action.data;
    default:
        return state
    }
}

//--------------------------POSTS---------------------------
//list of posts
function posts(state = [], action) {
    switch (action.type) {
    case 'posts/set':
        return action.data;
    default:
        return state;
    }
}

//----------------------------------------------------------
function root_reducer(state, action) {
    console.log("root_reducer", state, action);
    let reducer = combineReducers({
        session, users, user_form, posts
    });

    console.log("state", reducer(state, action))
    return reducer(state, action);
}

let store = createStore(root_reducer);
export default store;
