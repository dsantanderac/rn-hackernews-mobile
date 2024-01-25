import React from "react";
import DetailScreen, {
  DetailScreenProps,
} from "../presentation/screens/detailScreen/detailScreen";
import NewsScreen from "../presentation/screens/newsScreen/newsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type RootStackParamList = {
  NewsScreen: undefined;
  DetailScreen: DetailScreenProps;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigation() {
  return (
    <Stack.Navigator
      initialRouteName="NewsScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="NewsScreen"
        component={NewsScreen}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{ title: "", headerShown: true, headerBackTitle: "Back" }}
      />
    </Stack.Navigator>
  );
}
