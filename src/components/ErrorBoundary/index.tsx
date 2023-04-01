import React, {Component, ErrorInfo, ReactNode} from 'react';
import {View} from 'react-native';
import AppText from '../AppText';
import Button from '../Button';
import {EXIT, SOMETHING_WENT_WRONG} from '../../utils/constants';
import styles from './styles';

type Props = {
  children?: ReactNode;
};

type State = {
  hasError: boolean;
};

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return {hasError: true};
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // call analytics service to capture error log
    console.error(
      '🚀 ~ file: ~ ErrorBoundary ~ componentDidCatch ~ error:',
      error,
      errorInfo,
    );
  }

  exitApp = () => {
    // it will crash app in production to simulate app exit behaviour
    throw {};
  };

  public render() {
    const {hasError} = this.state;
    if (hasError) {
      return (
        <View style={styles.container}>
          <AppText style={styles.textStyle}>{SOMETHING_WENT_WRONG}</AppText>
          <Button title={EXIT} onPress={this.exitApp} />
        </View>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
