import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const Input = (props) => {
  const { inputStyle, containerStyle, labelStyle } = styles;
  const { label, value, onChangeText,
          placeholder, secureTextEntry } = props;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>
        {label}
      </Text>
      <TextInput
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={inputStyle}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: '#DCDCDC',
    color: '#000',
    paddingRight: 0,
    paddingLeft: 5,
    lineHeight: 23,
    height: 40,
    width: 200,
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelStyle: {
    fontSize: 20,
    paddingLeft: 10,
    flex: 0.8,
  },
});

export { Input };
