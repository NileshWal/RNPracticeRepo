/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeContext } from './context/ThemeContext';
import ToolBar from './components/ToolBar';
import { globalStyles } from './styles/GlobalStyles';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './navigation/MainNavigation';

function App() {
  // const TAG = 'App';
  const scheme = useColorScheme(); // 'dark' or 'light'
  const isDarkMode = scheme === 'dark';
  const globalStyle = globalStyles(isDarkMode);
  const isDarkTheme = isDarkMode;

  return (
    <ThemeContext.Provider value={isDarkTheme}>
      <NavigationContainer>
        <SafeAreaProvider style={globalStyle.appSafeAreaStyle}>
          <ToolBar title="My App" isDarkMode={isDarkTheme} />
          <MainNavigation />
        </SafeAreaProvider>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}

export default App;

//Class component example
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   componentDidMount() {
//     console.log('componentDidMount called');
//   }

//   shouldComponentUpdate(
//     nextProps: Readonly<{}>,
//     nextState: Readonly<{}>,
//     nextContext: any,
//   ): boolean {
//     console.log('shouldComponentUpdate called');
//     return true;
//   }

//   getSnapshotBeforeUpdate(
//     prevProps: Readonly<{}>,
//     prevState: Readonly<{}>,
//   ): any {
//     console.log('getSnapshotBeforeUpdate called');
//     return null;
//   }

//   componentDidUpdate(
//     prevProps: Readonly<{}>,
//     prevState: Readonly<{}>,
//     snapshot?: any,
//   ): void {
//     console.log('componentDidUpdate called');
//   }

//   componentWillUnmount(): void {
//     console.log('componentWillUnmount called');
//   }

//   render() {
//     return (
//       <SafeAreaProvider>
//         <ToolBar title="My App" isDarkMode={false} />
//         <Text
//           style={{ color: '#000000' }}
//           onPress={() => {
//             this.setState({ name: 'Nilesh' });
//           }}
//         >
//           'ON' : 'OFF' {this.state.name}
//         </Text>
//       </SafeAreaProvider>
//     );
//   }
// }

// export default App;
