import { useStringFlagValue } from "@openfeature/react-sdk"
import useIsBrowser from "@docusaurus/useIsBrowser"

export default function (props) {
  const isBrowser = useIsBrowser()
  const ffValue = useStringFlagValue(props.variableKey, props.defaultValue)

  // Early return with empty placeholder for SSR
  if (!isBrowser) {
    return <span>{props.defaultValue}</span>
  }

  return <span>{ffValue}</span>
}
