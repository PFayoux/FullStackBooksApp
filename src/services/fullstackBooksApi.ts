import { fetchJSON } from '../helpers/http';
import {
  Author,
  AuthorId,
  AuthorStat,
  Book,
  BookId,
  BookStat,
} from '../types/book';

const baseUrl = 'https://fullStackbulletin.github.io/fullstack-books/';

export function getAllAuthorsIds() {
  const allAuthorsIdsUrl = baseUrl + '/authors/ids.json';
  const author = fetchJSON<AuthorId[]>(allAuthorsIdsUrl);
  return author;
}

export function getAllAuthors() {
  const allAuthorsUrl = baseUrl + '/authors/all.json';
  const author = fetchJSON<Author[]>(allAuthorsUrl);
  return author;
}

export function getAuthorsStatsUrl() {
  const authorsStatsUrl = baseUrl + '/authors/stats.json';
  const authorStats = fetchJSON<AuthorStat[]>(authorsStatsUrl);
  return authorStats;
}

export function getAuthor(authorId: string) {
  const authorUrl = baseUrl + `/authors/${authorId}.json`;
  const author = fetchJSON<Author>(authorUrl);
  return author;
}

export function getAllBooksIds() {
  const allBooksIdsUrl = baseUrl + `/books/ids.json`;
  const allBooksIds = fetchJSON<BookId[]>(allBooksIdsUrl);
  return allBooksIds;
}

export function getAllBooks() {
  const allBooksUrl = baseUrl + `/books/all.json`;
  const allBooks = fetchJSON<Book[]>(allBooksUrl);
  return allBooks;
}

export function getBooksStats() {
  const booksStatsUrl = baseUrl + `/books/stats.json`;
  const booksStats = fetchJSON<BookStat[]>(booksStatsUrl);
  return booksStats;
}

export function getBook(bookId: string) {
  const bookUrl = baseUrl + `/books/${bookId}.json`;
  const book = fetchJSON<Book>(bookUrl);
  return book;
}
