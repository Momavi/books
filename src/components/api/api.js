import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/',
});

export const booksAPI = {
  getBooks(sortText = 'javascript', startIndex = 0, maxResults = 30) {
    return instance.get(`volumes?q=${sortText}&startIndex=${startIndex}&maxResults=${maxResults}`)
  }
}