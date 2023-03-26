import {Alert} from 'react-native';
import {BUTTON_TEXT_CANCEL, BUTTON_TEXT_OK} from './constants';

type AlertFunction = {
  title: string;
  message: string;
  singleButton?: boolean;
  positiveText?: string;
  negativeText?: string;
  cancelable?: boolean;
  positiveAction?: () => void;
  negativeAction?: () => void;
  positiveActionStyle?: any;
  negativeActionStyle?: any;
};

export const showAlert = ({
  title,
  message,
  singleButton = true,
  positiveText = BUTTON_TEXT_OK,
  negativeText = BUTTON_TEXT_CANCEL,
  cancelable = false,
  positiveAction,
  negativeAction,
  positiveActionStyle,
  negativeActionStyle,
}: AlertFunction) => {
  const actionButtons = [
    {text: positiveText, onPress: positiveAction, style: positiveActionStyle},
  ];
  if (!singleButton) {
    actionButtons.unshift({
      text: negativeText,
      onPress: negativeAction,
      style: negativeActionStyle,
    });
  }
  Alert.alert(title, message, actionButtons, {
    cancelable: cancelable,
  });
};
