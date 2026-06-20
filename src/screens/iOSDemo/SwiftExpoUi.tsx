import { DatePicker, Form, Host, Section, TextField } from "@expo/ui/swift-ui";
import { frame } from "@expo/ui/swift-ui/modifiers";
import { StyleSheet, useColorScheme } from "react-native";
const SwiftExpoUi = () => {
  const colorScheme = useColorScheme();
  console.log(colorScheme, "colorScheme");

  return (
    <Host style={{ flex: 1 }}>
      <Form>
        <Section title="First Task">
          {/* <Text>Hello World</Text> */}
          <TextField placeholder="Title" autoFocus />
          <TextField
            placeholder="Description"
            autoFocus
            modifiers={[
              frame({
                height: 80,
                alignment: "top",
              }),
            ]}
          />
        </Section>
        <DatePicker title="Date" />
      </Form>
    </Host>
  );
};

export default SwiftExpoUi;

const styles = StyleSheet.create({});
