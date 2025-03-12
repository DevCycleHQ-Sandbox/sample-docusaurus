import { useNumberFlagValue } from "@openfeature/react-sdk"
import useIsBrowser from "@docusaurus/useIsBrowser"

export default function (props) {
  const isBrowser = useIsBrowser()
  const ffValue = useNumberFlagValue(
    props.variableKey,
    parseFloat(props.defaultValue)
  )

  // For SSR, return a placeholder value
  if (!isBrowser) {
    return <span>{props.defaultValue}</span>
  }

  return <span>{ffValue}</span>
}
