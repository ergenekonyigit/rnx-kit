import type { Package, Profile } from "../../../types";
import { profile as profile_0_72 } from "./profile-0.72";

const reactNative: Package = {
  name: "react-native",
  version: "^0.73.0",
  capabilities: ["react", "core/metro-config"],
};

export const profile: Profile = {
  ...profile_0_72,
  react: {
    name: "react",
    version: "18.2.0",
  },
  "react-dom": {
    name: "react-dom",
    version: "^18.2.0",
    capabilities: ["react"],
  },
  "react-test-renderer": {
    name: "react-test-renderer",
    version: "18.2.0",
    capabilities: ["react"],
    devOnly: true,
  },

  core: reactNative,
  "core-android": reactNative,
  "core-ios": reactNative,
  "core-macos": {
    name: "react-native-macos",
    version: "^0.73.0",
    capabilities: ["react"],
  },
  "core-windows": {
    name: "react-native-windows",
    version: "^0.73.0",
    capabilities: ["core"],
  },
  "core/metro-config": {
    name: "@react-native/metro-config",
    version: "^0.73.0",
    devOnly: true,
  },

  "babel-preset-react-native": {
    name: "@react-native/babel-preset",
    version: "^0.73.0",
    devOnly: true,
  },
  "community/cli": {
    name: "@react-native-community/cli",
    version: "^12.0.0",
    capabilities: ["community/cli-android", "community/cli-ios"],
    devOnly: true,
  },
  "community/cli-android": {
    name: "@react-native-community/cli-platform-android",
    version: "^12.0.0",
    devOnly: true,
  },
  "community/cli-ios": {
    name: "@react-native-community/cli-platform-ios",
    version: "^12.0.0",
    devOnly: true,
  },
  metro: {
    name: "metro",
    version: "^0.80.0",
    devOnly: true,
  },
  "metro-config": {
    name: "metro-config",
    version: "^0.80.0",
    devOnly: true,
  },
  "metro-core": {
    name: "metro-core",
    version: "^0.80.0",
    devOnly: true,
  },
  "metro-react-native-babel-transformer": {
    name: "metro-react-native-babel-transformer",
    version: "^0.80.0",
    devOnly: true,
  },
  "metro-resolver": {
    name: "metro-resolver",
    version: "^0.80.0",
    devOnly: true,
  },
  "metro-runtime": {
    name: "metro-runtime",
    version: "^0.80.0",
    devOnly: true,
  },

  "masked-view": {
    name: "@react-native-masked-view/masked-view",
    version: "^0.3.0",
  },
  netinfo: {
    name: "@react-native-community/netinfo",
    version: "^11.0.1",
  },
  storage: {
    name: "@react-native-async-storage/async-storage",
    version: "^1.19.6",
  },
  "test-app": {
    name: "react-native-test-app",
    version: "^2.5.32",
    devOnly: true,
  },
  webview: {
    name: "react-native-webview",
    version: "^13.6.1",
  },
};
