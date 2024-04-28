import { HTMLSource } from 'react-native-render-html';

export type BookId = string;

export type AuthorId = string;

export type Book = {
  id: string;
  title: string;
  slug: string;
  description: string;
  authors: Author[];
  cover: string;
  url: string;
  descriptionHtml: HTMLSource;
};

export type Author = {
  id: string;
  name: string;
  slug: string;
  url: string;
};

export type AuthorStat = {
  total: number;
  all: string;
  ids: AuthorId[];
  urlPrefix: string;
};

export type BookStat = {
  total: number;
  all: string;
  ids: BookId[];
  urlPrefix: string;
};
