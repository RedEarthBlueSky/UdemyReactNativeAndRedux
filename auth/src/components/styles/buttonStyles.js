import { StyleSheet } from 'react-native';

const buttonStyles = StyleSheet.create({
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aaf',
    marginLeft: 2,
    marginRight: 2,
    padding: 4,
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '600',
    paddingTop: 6,
    paddingBottom: 6,
  }
});

export { buttonStyles };
