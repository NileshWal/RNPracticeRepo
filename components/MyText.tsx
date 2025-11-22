import { Component, useState, useEffect, useContext } from 'react';
import { Text } from 'react-native';
import CustomLogs from '../components/CustomLogs';
import { ThemeContext } from '../context/ThemeContext';
import { globalStyles } from '../styles/GlobalStyles';

// Define your prop types
interface MyTextProps {
  name: string;
}

// Define your state types
interface MyTextState {
  fullName: string;
}

const MyText = (props: MyTextProps) => {
  const TAG = 'MyText';

  const [fullName, setFullName] = useState('');
  const isDarkTheme = useContext(ThemeContext);
  const uiElements = globalStyles(isDarkTheme);

  useEffect(() => {
    CustomLogs.debug(TAG, 'Our component has been mounted');
    return () => {
      CustomLogs.debug(TAG, 'Our component is now being destroyed');
    };
  }, []);

  useEffect(() => {
    CustomLogs.debug(TAG, 'Value of fullName changed');
  }, [fullName]);

  return (
    <Text
      style={uiElements.myTextComponent}
      onPress={() => setFullName('Nilesh Here')}
    >
      Hello! {props.name} React native world from {fullName}.
    </Text>
  );
};

export default MyText;

// class MyText extends Component<MyTextProps, MyTextState> {
//   TAG = 'MyText';

//   constructor(props: MyTextProps) {
//     super(props);
//     this.state = {
//       fullName: this.props.name + ' Walavalkar',
//     };
//   }

//   componentDidMount() {
//     CustomLogs.debug(this.TAG, 'componentDidMount called');
//   }

//   shouldComponentUpdate(
//     nextProps: Readonly<MyTextProps>,
//     nextState: Readonly<MyTextState>,
//     nextContext: any,
//   ): boolean {
//     CustomLogs.debug(this.TAG, 'shouldComponentUpdate called');
//     return true;
//   }

//   getSnapshotBeforeUpdate(
//     prevProps: Readonly<MyTextProps>,
//     prevState: Readonly<MyTextState>,
//   ): any {
//     CustomLogs.debug(this.TAG, 'getSnapshotBeforeUpdate called');
//     return null;
//   }

//   componentDidUpdate(
//     prevProps: Readonly<MyTextProps>,
//     prevState: Readonly<MyTextState>,
//     snapshot?: any,
//   ): void {
//     CustomLogs.debug(
//       this.TAG,
//       `componentDidUpdate called. prevFullName=${prevState.fullName}, newFullName=${this.state.fullName}`,
//     );
//   }

//   componentWillUnmount(): void {
//     CustomLogs.debug(this.TAG, 'componentWillUnmount called');
//   }

//   handleTextClick = (): void => {
//     this.setState({ ...this.state, ...{ fullName: 'John Doe' } });
//   };

//   render() {
//     return (
//       <Text
//         style={{ color: 'green', backgroundColor: '#ffffff' }}
//         onPress={this.handleTextClick}
//       >
//         Hello! {this.props.name} React native world from {this.state.fullName}.
//       </Text>
//     );
//   }
// }

// export default MyText;
