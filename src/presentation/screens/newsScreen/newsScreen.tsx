import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import NewsList from "../../components/NewsList";
import { RootStackParamList } from "../../../navigation/Navigation";
import { useNewsViewModel } from "./newsViewModel";

interface NewsScreenProps {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    keyof RootStackParamList,
    undefined
  >;
}

export default function NewsScreen({ navigation }: NewsScreenProps) {
  const { news, loadNews, loading, deleteNew, goToDetail } = useNewsViewModel({
    navigation: navigation,
  });

  return (
    <SafeAreaView>
      <NewsList
        navigation={navigation}
        newsItems={news}
        onRefreshList={loadNews}
        isRefreshing={loading}
        onSwipeRightAction={deleteNew}
        onPressItem={goToDetail}
      />
    </SafeAreaView>
  );
}
