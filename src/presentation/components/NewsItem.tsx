import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NewsHitsModel } from "../../data/models/newsModel";
import { RootStackParamList } from "../../navigation/Navigation";
import DeleteItem from "./DeleteItem";
import { dateFormat } from "../../utils/globalFunctions";

interface NewsItemProps {
  newsModel: NewsHitsModel;
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    keyof RootStackParamList,
    undefined
  >;
  onPress: (url: string) => void;
  onSwipeRightAction: (id: string) => void;
}

export default function NewsItem({
  newsModel,
  navigation,
  onSwipeRightAction,
  onPress,
}: NewsItemProps) {
  const renderRightActions = (
    progress: Animated.AnimatedInterpolation<number>,
    dragAnimatedValue: Animated.AnimatedInterpolation<number>
  ) => {
    return (
      <DeleteItem
        id={newsModel.objectID.toString()}
        dragAnimatedValue={dragAnimatedValue}
        onSwipeRightAction={onSwipeRightAction}
      />
    );
  };
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions} overshootRight={false}>
        <TouchableWithoutFeedback onPress={() => onPress(newsModel.story_url)}>
          <View style={styles.item}>
            <Text
              style={
                newsModel.story_title
                  ? styles.itemTitle
                  : styles.itemTitleNotAvailable
              }
            >
              {newsModel.story_title ?? "Story title is not available"}
            </Text>
            <Text style={styles.itemSubtitle}>
              {newsModel.author} - {dateFormat(newsModel.created_at)}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 15,
    borderTopColor: "#000",
    borderTopWidth: 1,
  },
  itemTitle: {
    fontSize: 16,
    color: "#000",
  },
  itemTitleNotAvailable: {
    fontSize: 16,
    color: "#FF0000",
    fontWeight: "bold",
  },
  itemSubtitle: {
    fontSize: 14,
    color: "gray",
    marginTop: 10,
  },
});
