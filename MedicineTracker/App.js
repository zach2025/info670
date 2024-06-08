import React from "react";
import { AppRegistry } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { name as appName } from "./app.json";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AddMedicine from "./components/AddMedicine";
import MedicineLog from "./components/MedicineLog";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen 
            name="Add Medicine"
            component={AddMedicine}
            options={{ headerShown: false, tabBarIcon: "pill" }}
          />
          <Tab.Screen
            name="View History"
            component={MedicineLog}
            options={{ headerShown: false, tabBarIcon: "history" }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

AppRegistry.registerComponent(appName, () => App);
