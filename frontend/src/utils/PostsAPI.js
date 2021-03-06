const api = process.env.NODE_ENV === 'production' ?
  window.origin :
  'http://localhost:5000';

// let token = localStorage.token;

// if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);

const token = 'secret';

const headers = {
  'Accept': 'application/json',
  'Authorization': token
};

export const getCategories = () =>
  fetch(`${api}/api/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)

export const getPostsByCategory = (category) =>
  fetch(`${api}/api/${category}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)

export const getPosts = () =>
  fetch(`${api}/api/posts`, { headers })
    .then(res => res.json())
    .then(data => data)

export const addPost = (post) =>
  fetch(`${api}/api/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ...post })
  })
    .then(res => res.json())
    .then(data => data)

export const getPostDetails = (id) =>
  fetch(`${api}/api/posts/${id}`, { headers })
    .then(res => res.json())
    .then(data => data)

export const votePost = (id, option) =>
  fetch(`${api}/api/posts/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option })
  })
    .then(res => res.json())
    .then(data => data)

export const editPost = (id, title, body) =>
  fetch(`${api}/api/posts/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, body })
  })
    .then(res => res.json())
    .then(data => data)

export const deletePost = (id) =>
  fetch(`${api}/api/posts/${id}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data => data)

export const getPostComments = (id) =>
  fetch(`${api}/api/posts/${id}/comments`, { headers })
    .then(res => res.json())
    .then(data => data)

export const addComment = (comment) =>
  fetch(`${api}/api/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ...comment })
  })
    .then(res => res.json())
    .then(data => data)

export const getComment = (id) =>
  fetch(`${api}/api/comments/${id}`, { headers })
    .then(res => res.json())
    .then(data => data)

export const voteComment = (id, option) =>
  fetch(`${api}/api/comments/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option })
  })
    .then(res => res.json())
    .then(data => data)

export const editComment = (id, timestamp, body) =>
  fetch(`${api}/api/comments/${id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ timestamp, body })
  })
    .then(res => res.json())
    .then(data => data)

export const deleteComment = (id) =>
  fetch(`${api}/api/comments/${id}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data => data)
