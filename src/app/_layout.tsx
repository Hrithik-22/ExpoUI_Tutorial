import { DefaultTheme, Stack, ThemeProvider } from "expo-router";
import { useColorScheme } from "react-native";

import { AnimatedSplashOverlay } from "@/components/animated-icon";

export default function TabLayout() {
  const dark = useColorScheme() === "dark";
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={DefaultTheme}>
      <AnimatedSplashOverlay />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
    </ThemeProvider>
  );
}
