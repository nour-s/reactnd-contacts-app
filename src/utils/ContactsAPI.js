const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:5001'

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

let contacts = [
  {
    id: 'tyler',
    name: 'Tyler McGinnis',
    handle: '@tylermcginnis',
    avatarURL: 'http://localhost:5001/tyler.jpg'
  },
  {
    id: 'karen',
    name: 'Karen Isgrigg',
    handle: '@karen_isgrigg',
    avatarURL: 'http://localhost:5001/karen.jpg'
  },
  {
    id: 'richard',
    name: 'Richard Kalehoff',
    handle: '@richardkalehoff',
    avatarURL: 'http://localhost:5001/richard.jpg'
  },
];

export const getAll = () => Promise.resolve( contacts);
  // fetch(`${api}/contacts`, { headers })
  //   .then(res => res.json())
  //   .then(data => data.contacts)

export const remove = (contact) => {
  contacts = contacts.filter(c=>c.id === contact.id);
}
  // fetch(`${api}/contacts/${contact.id}`, { method: 'DELETE', headers })
  //   .then(res => res.json())
  //   .then(data => data.contact)

export const create = (body) =>
  fetch(`${api}/contacts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(res => res.json())