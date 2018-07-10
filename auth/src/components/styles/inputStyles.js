import { StyleSheet } from 'react-native';

const inputStyles = StyleSheet.create({
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

export { inputStyles };
