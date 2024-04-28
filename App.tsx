import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import Books from './src/views/Books';
import { Tab, Tabs } from './src/components/Tabs';
import Authors from './src/views/Authors';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Tabs style={styles.tabs}>
        <Tab tabKey="authors" tabName="Authors">
          <Authors></Authors>
        </Tab>
        <Tab tabKey="books" tabName="Books">
          <Books></Books>
        </Tab>
      </Tabs>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    overflow: 'scroll',
    width: '100%',
    margin: 'auto',
    fontFamily: 'arial',
  },
  tabs: {
    paddingTop: StatusBar.currentHeight,
  },
});
