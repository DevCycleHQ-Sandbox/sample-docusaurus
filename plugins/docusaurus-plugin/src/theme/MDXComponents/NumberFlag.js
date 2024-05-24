import { useNumberFlagValue } from "@openfeature/react-sdk";
import { usePluginData } from "@docusaurus/useGlobalData";
import useIsBrowser from "@docusaurus/useIsBrowser";

export default function (props) {
  const { allVariables } = usePluginData("@devcycle/docusaurus-theme-devcycle");
  const isBrowser = useIsBrowser();
  const value = isBrowser
    ? useNumberFlagValue(props.variableKey, parseFloat(props.defaultValue))
    : allVariables?.[props.variableKey]?.value ||
      parseFloat(props.defaultValue);
  return value;
}
