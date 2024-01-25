import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

interface DeleteItemProps {
  id: string;
  dragAnimatedValue: Animated.AnimatedInterpolation<number>;
  onSwipeRightAction: (id: string) => void;
}

export default function DeleteItem({
  id,
  dragAnimatedValue,
  onSwipeRightAction,
}: DeleteItemProps) {
  const opacity = dragAnimatedValue.interpolate({
    inputRange: [-150, 0],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  return (
    <View>
      <Animated.View style={[styles.rightAction, { opacity }]}>
        <TouchableOpacity onPress={() => onSwipeRightAction(id)}>
          <Text style={styles.actionText}>Delete</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  rightAction: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: "100%",
  },
  actionText: { color: "#fff", fontWeight: "600", padding: 20 },
});
