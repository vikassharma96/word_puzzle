import {showAlert} from '../alertUtils';
import {Alert} from 'react-native';

jest.unmock('../alertUtils');

describe('alertUtils', () => {
  it('should display an alert with single button', () => {
    let mockAlert = jest.fn();
    Alert.alert = mockAlert;

    showAlert({title: 'Alert', message: 'Alert message'});

    expect(mockAlert).toHaveBeenCalled();
  });

  it('should display an alert with more than 1 button', () => {
    let mockAlert = jest.fn();
    Alert.alert = mockAlert;

    showAlert({
      title: 'Alert',
      message: 'Alert message',
      singleButton: false,
      negativeText: 'Close',
      negativeAction: () => {},
      negativeActionStyle: {},
    });

    expect(mockAlert).toHaveBeenCalled();
  });
});
