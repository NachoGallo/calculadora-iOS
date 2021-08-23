import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#161616',
  },

  calcContainer: {
    flex: 1,
    paddingRight: 0,
    justifyContent: 'flex-end',
  },

  result: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
    marginRight: 30,
    paddingBottom: 30,
  },

  prevResult: {
    color: 'rgba(255,255,255, 0.5)',
    fontSize: 30,
    textAlign: 'right',
    paddingRight: 20,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
});
