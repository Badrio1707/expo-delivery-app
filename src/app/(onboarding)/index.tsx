import { Link } from "expo-router";
import { View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Link href={"/(auth)/login"} className="text-xl font-bold text-blue-500">
        Onboarding
      </Link>
    </View>
  );
}
