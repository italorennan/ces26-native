import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    padding: 5,
    backgroundColor: "#767676"
  },

  header_h1: {
    textAlign: "center",
    fontSize: 25,
    color: "white"
  },

  container: {
    padding: 10,
    backgroundColor: "#efefef",
    marginBottom: 50,
    fontFamily: 'Montserrat'
  },

  container_h1: {
    textAlign: "center",
    fontSize: 20,
    color: "#aa9f36",
    marginBottom: 20,
    fontFamily: 'Montserrat'
  },

  container_h2: {
    marginRight: 0,
    fontSize: 16,
    color: "#121212",
    display: "inline-block",
    marginBottom: 10,
    fontFamily: 'Montserrat'
  },

  container_h3: {
    fontSize: 16,
    color: "#565656",
    display: "inline-block",
    fontFamily: 'Montserrat'
  },

  container_h4: {
    fontSize: 16,
    fontWeight: 900,
    color: "#10277f",
    display: "inline-block",
    fontFamily: 'Montserrat'
  },

  container_h5_green: {
    marginLeft: 25,
    fontSize: 16,
    color: "green",
    display: "inline-block",
    fontFamily: 'Montserrat'
  },

  container_h5_red: {
    marginLeft: 25,
    fontSize: 16,
    color: "red",
    display: "inline-block",
    fontFamily: 'Montserrat'
  },

  container_h6: {
    fontSize: 10,
    color: "red",
    fontFamily: 'Montserrat'
  },

  container_select: {
    marginLeft: 5,
    fontSize: 14,
    fontFamily: 'Montserrat'
  },

  centerSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginStart: 0,
    marginEnd: 0,
    alignItems: "center",
    fontFamily: 'Montserrat'
  },

  button: {
    backgroundColor: '#f0f0f0',
    height: 35,
    borderColor: '#d0d0d0',
    borderWidth: 1,
    elevation: 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    fontFamily: 'Montserrat'
  },

  line: {
    flexDirection: "row",
    alignSelf: "flex-start",
    fontFamily: 'Montserrat'
  },

  input: {
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'white',
    fontFamily: 'Montserrat'
  }
});