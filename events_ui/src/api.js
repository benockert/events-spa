import store from './store';

const url = "http://localhost:4000/api/v1";

async function api_get(path) {
    let text = await fetch(url + path, {});
    let resp = await text.json();
    return resp.data;
}

async function api_post(path, data) {
  let req = {method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)};
  let text = await fetch(url + path, req);
  let resp = await text.json();
  return resp;
}

export function get_users() {
    api_get("/users").then((data) => store.dispatch({
        type: 'users/set',
        data: data,
    }));
}

export function new_user(user) {
  return api_post("/users", {user});
}

export function get_posts() {
    api_get("/posts").then((data) => store.dispatch({
        type: 'posts/set',
        data: data,
    }));
}

export function get_invitees() {
    api_get("/invitees").then((data) => store.dispatch({
        type: 'invitees/set',
        data: data,
    }));
}

export function get_comments() {
    api_get("/comments").then((data) => store.dispatch({
        type: 'comments/set',
        data: data,
    }));
}

export function api_login(email, password) {
  api_post("/session", {email, password}).then((data) => {
    console.log("login response", data);
    if (data.session) {
      let action = {
        type: 'session/set',
        data: data.session,
      }
      store.dispatch(action);
    }
    else if (data.error) {
      let action = {
        type: 'error/set',
        data: data.error,
      };
      store.dispatch(action);
    }
  });
}

export function load_defaults() {
    get_users();
    get_posts();
    get_invitees();
    get_comments();
}
