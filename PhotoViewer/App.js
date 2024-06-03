import React from "react";
import { AppRegistry } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { name as appName } from "./app.json";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Profile from "./components/Profile";
import GalleryStack from "./components/GalleryStack";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Gallery"
            component={GalleryStack}
            options={{ headerShown: false, tabBarIcon: "view-grid" }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{ headerShown: false, tabBarIcon: "account-box-outline" }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

AppRegistry.registerComponent(appName, () => App);
