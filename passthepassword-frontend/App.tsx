import { ThemeProvider } from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { EntryCard } from './src/components/Entry';
import Entry from './src/components/entry.type';
import { EntryList } from './src/components/EntryList';

export default function App() {
  const entries: Entry[] = [
    { 
      nameOfWebsite: "Google",
      password: "TestPWD2323",
      url: "www.google.ch",
      username: "Benni"
    },
    {
      nameOfWebsite: "Yahoot",
      password: "DASJjjk23",
      url: "www.yahoot.ch",
      username: "benniLol"
    }
  ]

  return (
    <ThemeProvider>
      <EntryList entries={entries} ></EntryList>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
