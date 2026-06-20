import { Form, Host, Section, TextField, Toggle } from "@expo/ui/swift-ui";
import { frame } from "@expo/ui/swift-ui/modifiers";
import { useState } from "react";
import { StyleSheet, useColorScheme } from "react-native";
const SwiftExpoUi = () => {
  const colorScheme = useColorScheme();
  const [date, setDate] = useState(new Date());
  const [value, setValue] = useState(0.5);

  return (
    <Host style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
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

        <Toggle isOn={true} label="Toggle" />
      </Form>
    </Host>
  );
};

export default SwiftExpoUi;

const styles = StyleSheet.create({});
