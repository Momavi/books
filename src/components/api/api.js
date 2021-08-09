import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/',
});

export const booksAPI = {
  getBooks(sortText = 'javascript', startIndex = 0, maxResults = 30) {
    let subject = sortText.categori === 'all' ?
      '' :
      `+subject:${sortText.categori}`
    return instance.get(`volumes?q=${sortText.text}${subject}&orderBy=${sortText.sort}&startIndex=${startIndex}&maxResults=${maxResults}`)
  }
}