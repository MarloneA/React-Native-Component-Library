import { StyleSheet, TextInput } from "react-native";

const Input = ({
  placeholder,
  name,
  value,
  type,
  handleChange,
  handleBlur,
  ...props
}) => {
  return (
    <TextInput
      {...props}
      style={styles.input}
      placeholder={placeholder}
      onChangeText={handleChange(name)}
      onBlur={handleBlur(name)}
      value={value}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 10,
    backgroundColor: "#FFF",
    padding: 16,
    borderWidth: 1,
    borderColor: "#D3DAEE",
    width: "100%",
    marginBottom: 20,
  },
});

export default Input;
