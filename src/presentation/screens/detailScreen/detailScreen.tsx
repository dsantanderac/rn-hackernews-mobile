import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import WebView from "react-native-webview";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigation/Navigation";

export interface DetailScreenProps {
  url: string;
}

type DetailScreenRouteProps = NativeStackScreenProps<
  RootStackParamList,
  "DetailScreen"
>;

export default function DetailScreen({ route }: DetailScreenRouteProps) {
  const { url } = route.params;

  const spinnerLoading = () => {
    return (
      <ActivityIndicator color="#000" size="large" style={styles.spinner} />
    );
  };

  return url ? (
    <WebView
      renderLoading={spinnerLoading}
      startInLoadingState={true}
      source={{ uri: url }}
    />
  ) : (
    <View>
      <Text style={styles.unavailableText}>
        Sorry this post is not available 😞
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  unavailableText: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
    padding: 40,
  },
  spinner: {
    zIndex: 999,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
