import { Dimensions, FlatList, ScrollView, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { getAllBooks } from '../services/fullstackBooksApi';
import { Book } from '../types/book';
import parse from 'html-react-parser';
import { getSortedListByAlphabeticalCategories } from '../helpers/sectionListData';

function BookDescription(props: { description: string }) {
  const formatListInsideDescription = props.description.replaceAll(
    / - /g,
    '</li><li>',
  );

  return parse(formatListInsideDescription);
}

function BookLine(props: { book: Book }) {
  const book = props.book;

  const authors = book.authors.map(author => <li>{author.name}</li>);

  return (
    <div style={styles.line}>
      <div>
        <img style={styles.bookCover} src={book.cover} alt="" />
      </div>
      <h1 style={styles.bookTitle}>{book.title}</h1>
      <ul style={styles.bookAuthors}>{authors}</ul>
      <p style={styles.bookDescription}>
        <BookDescription description={book.descriptionHtml}></BookDescription>
      </p>
    </div>
  );
}
export default function Books() {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    const getBooks = async () => {
      setIsloading(true);
      setBooks(await getAllBooks());
      const booksList = await getAllBooks();

      const listByAlphabeticalCategory =
        getSortedListByAlphabeticalCategories<Book>(booksList, '');
      setIsloading(false);
    };
    getBooks();
  }, []);

  const screenHeight = Dimensions.get('window').height;

  return (
    <ScrollView style={{ height: screenHeight }} accessible>
      <FlatList
        style={styles.list}
        refreshing={isLoading}
        data={books}
        renderItem={({ item }) => {
          console.log(item.slug);
          return <BookLine book={item}></BookLine>;
        }}
        keyExtractor={(item, index) => String(item.slug + index)}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  list: {
    width: '100%',
    padding: 10,
  },
  line: {
    paddingTop: 5,
    paddingBottom: 5,
    borderStyle: 'solid',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
  },
  bookTitle: {
    fontSize: 20,
  },
  bookAuthors: {
    fontSize: 14,
  },
  bookDescription: {
    fontSize: 10,
    textAlign: 'left',
    marginLeft: 20,
    marginRight: 20,
  },
  bookCover: {
    maxWidth: Dimensions.get('window').width <= 798 ? '100%' : 200,
    margin: 'auto',
  },
});
