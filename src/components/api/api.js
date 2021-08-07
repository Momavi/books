import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/',
});

export const booksAPI = {
  getBooks() {
    return instance.get(`volumes?q=javascript&key=AIzaSyCtNydhUF3PxH_n7KSa5WimBl_qLIwQyHg`)
  }
}