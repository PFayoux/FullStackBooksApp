import { Dimensions, ScrollView, SectionList, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { getAllAuthors } from '../services/fullstackBooksApi';
import { Author } from '../types/book';
import {
  AlphaChar,
  getSortedListByAlphabeticalCategories,
} from '../helpers/sectionListData';

function AuthorLine(props: { author: Author }) {
  const author = props.author;

  return (
    <div style={styles.line}>
      {'>'} {author.name}
    </div>
  );
}
export default function Authors() {
  const [authorsByAlpha, setAuthorsByAlpha] = useState<
    { title: AlphaChar; data: Author[] }[]
  >([]);

  useEffect(() => {
    const getAuthors = async () => {
      const authorsList = await getAllAuthors();

      const listByAlphabeticalCategory = getSortedListByAlphabeticalCategories(
        authorsList,
        'name',
      );

      setAuthorsByAlpha(listByAlphabeticalCategory);
    };
    getAuthors();
  }, []);

  const screenHeight = Dimensions.get('window').height;

  return (
    <ScrollView style={{ height: screenHeight }} accessible>
      <SectionList
        sections={authorsByAlpha}
        style={styles.list}
        scrollEnabled
        renderItem={({ item, index }) => {
          return <AuthorLine author={item} key={index}></AuthorLine>;
        }}
        renderSectionHeader={({ section: { title } }) => {
          return <h1>{title.toUpperCase()}</h1>;
        }}
        keyExtractor={(item, index) => String(item.slug + index)}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  list: {
    margin: 'auto',
  },
  line: {
    padding: 5,
  },
  link: {
    textDecorationLine: 'none',
  },
});
