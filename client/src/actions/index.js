import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3000/'
})

export const postUser = (data) => {
  // console.log('ACTION',data);
  http.post('/users', data)
  .then(({data}) => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  })
}
