import React from 'react';
import { TextInput, View, Text } from 'react-native';

import { inputStyles } from '../styles';

const Input = (props) => {
  const { inputStyle, containerStyle, labelStyle } = inputStyles;
  const { autoCorrect, label, value, onChangeText,
          placeholder, secureTextEntry } = props;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>
        {label}
      </Text>
      <TextInput
        autoCorrect={autoCorrect}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={inputStyle}
        value={value}
      />
    </View>
  );
};

export { Input };
