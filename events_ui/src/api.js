import store from './store';

const URL = "http://events-spa.benockert.site/api/v1";
//const URL = "http://localhost:4000/api/v1";

async function api_get(path) {
    let text = await fetch( URL + path, {});
    let resp = await text.json();
    return resp.data;
}

async function api_post(path, data) {
  let req = {method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)};
  let text = await fetch( URL + path, req);
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

export function new_post(post) {
  return api_post("/posts", {post});
}

export function get_responses() {
    api_get("/responses").then((data) => store.dispatch({
        type: 'responses/set',
        data: data,
    }));
}

export function new_response(response) {
  return api_post("/responses", {response});
}

export function get_comments() {
    api_get("/comments").then((data) => store.dispatch({
        type: 'comments/set',
        data: data,
    }));
}

export function new_comment(comment) {
  return api_post("/comments", {comment});
}

export function api_login(email, password) {
  api_post("/session", {email, password}).then((data) => {
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
    get_responses();
    get_comments();
}
