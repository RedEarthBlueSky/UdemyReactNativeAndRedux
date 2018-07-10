import React from 'react';
import { TextInput, View, Text } from 'react-native';
import { inputStyles } from '../styles';

const Input = (props) => {
  const { label, value, onChangeText, placeholder, secureTextEntry } = props;
  const { inputStyle, containerStyle, labelStyle } = inputStyles;

  console.log(value);

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>
        {label}
      </Text>
      <TextInput
        autoCorrect={false}
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
