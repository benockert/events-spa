import { createStore, combineReducers } from 'redux';

//-------------------------SESSION---------------------------
function save_session(sess) {
  let session = Object.assign({}, sess, {time: Date.now()});
  localStorage.setItem("session", JSON.stringify(session));
}

//clears the session when a user logs out
function clear_session() {
  localStorage.removeItem("session");
}

//user session restore on page refresh (if still exists)
function restore_session() {
  let session = localStorage.getItem("session");
  if (!session) {
    return null;
  }
  session = JSON.parse(session);
  let age = Date.now() - session.time;
  let hour = 3600000; // one hour session expiration (in milliseconds)
  if (age < hour) {
    return session;
  }
  else {
    return null;
  }
}

// user session; initial state = current session (if active)
function session(state = restore_session(), action) {
  switch (action.type) {
    case 'session/set':
      save_session(action.data);
      return action.data;
    case 'session/clear':
      clear_session();
      return null;
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

//--------------------------ERROR---------------------------
function error(state = null, action) {
  switch (action.type) {
    case 'session/set':
      return null;
    case 'error/set':
      return action.data;
    default:
      return state;
  }
}

//----------------------------------------------------------
function root_reducer(state, action) {
    console.log("root_reducer", state, action);
    let reducer = combineReducers({
        session, users, posts, error
    });

    console.log("state", reducer(state, action))
    return reducer(state, action);
}

let store = createStore(root_reducer);
export default store;
