import { PropsWithChildren } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = (
  props: PropsWithChildren<{
    style: ReturnType<typeof StyleSheet.create>;
    onPress: (args: any) => void;
    disabled?: Boolean;
  }>,
) => {
  const { buttonStyle, textStyle } = props.style;
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={buttonStyle}
      disabled={Boolean(props.disabled)}>
      <Text style={textStyle}>{props.children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
