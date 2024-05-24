import { useObjectFlagValue } from "@openfeature/react-sdk";
import { usePluginData } from "@docusaurus/useGlobalData";
import useIsBrowser from "@docusaurus/useIsBrowser";

export default function (props) {
  const { allVariables } = usePluginData("@devcycle/docusaurus-theme-devcycle");
  const isBrowser = useIsBrowser();
  const value = isBrowser
    ? useObjectFlagValue(props.variableKey, JSON.parse(props.defaultValue))
    : allVariables?.[props.variableKey]?.value ||
      JSON.parse(props.defaultValue);
  return JSON.stringify(value);
}
