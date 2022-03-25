import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import One from "./components/LayoutAnimation";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <One />
      <StatusBar style="auto" />
    </View>
  );
}
