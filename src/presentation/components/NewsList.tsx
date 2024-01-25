import { FlatList, StyleSheet, Text } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NewsHitsModel } from "../../data/models/newsModel";
import { RootStackParamList } from "../../navigation/Navigation";
import NewsItem from "./NewsItem";

export interface NewsListProps {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    keyof RootStackParamList,
    undefined
  >;
  newsItems: NewsHitsModel[];
  onRefreshList: () => void;
  isRefreshing: boolean;
  onSwipeRightAction: (id: string) => void;
  onPressItem: (url: string) => void;
}
export default function NewsList({
  navigation,
  newsItems,
  onRefreshList,
  isRefreshing,
  onSwipeRightAction,
  onPressItem,
}: NewsListProps) {
  return (
    <FlatList
      data={newsItems}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => String(item.objectID)}
      renderItem={({ item }) => (
        <NewsItem
          newsModel={item}
          navigation={navigation}
          onSwipeRightAction={onSwipeRightAction}
          onPress={onPressItem}
        />
      )}
      onRefresh={onRefreshList}
      refreshing={isRefreshing}
    />
  );
}
