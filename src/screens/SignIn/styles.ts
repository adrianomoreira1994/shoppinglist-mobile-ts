import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#435C59"
  },
  header: {
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3C5350"
  },
  logoLabel: {
    fontSize: 40,
    fontFamily: "AllanBold",
    color: "#FFCEA3",
    marginTop: 20
  },
  form: {
    flex: 1,
    paddingHorizontal: 60,
    paddingVertical: 60
  },
  formGroup: {
    marginBottom: 25,
    flexDirection: "row",
  },
  containerIcon: {
    borderBottomColor: "#96ADAB",
    borderBottomWidth: 1,
    padding: 15
  },
  containerIconActiveEmail: {
    borderBottomColor: "#FFCEA3",
    borderBottomWidth: 1,
    padding: 15
  },
  containerIconActivePassword: {
    borderBottomColor: "#FFCEA3",
    borderBottomWidth: 1,
    padding: 15
  },
  containerInput: {
    flex: 1,
    borderLeftColor: "#96ADAB",
    borderLeftWidth: 1,
    borderBottomColor: "#96ADAB",
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    height: 50
  },
  containerInputActiveEmail: {
    flex: 1,
    borderBottomColor: "#FFCEA3",
    borderLeftColor: "#96ADAB",
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    height: 50
  },
  containerInputActivePassword: {
    flex: 1,
    borderBottomColor: "#FFCEA3",
    borderLeftColor: "#96ADAB",
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    height: 50
  },
  input: {
    flex: 1,
    color: "#FFF",
    fontSize: 16,
    height: 60,
    fontFamily: "OpenSansRegular"
  },
  label: {
    color: "#96ADAB",
    fontSize: 14,
    fontFamily: "OpenSansSemiBold"
  },
  containerButton: {
    marginTop: 20
  },
  button: {
    backgroundColor: "#FFCEA3",
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelButton: {
    color: "#435C59",
    fontSize: 16,
    fontFamily: "OpenSansBold"
  },
  containerNotMember: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  notMember: {
    marginRight: 5,
    color: "#96ADAB",
    alignItems: 'center',
    fontFamily: "OpenSansRegular"
  },
  notMemberButton: {},
  notMemberButtonLabel: {
    color: "#FFCEA3",
    fontFamily: "OpenSansRegular"
  },
});

export default styles;