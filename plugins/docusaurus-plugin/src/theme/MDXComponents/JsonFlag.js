import { useObjectFlagValue } from "@openfeature/react-sdk"
import useIsBrowser from "@docusaurus/useIsBrowser"

export default function (props) {
  const isBrowser = useIsBrowser()
  const ffValue = useObjectFlagValue(
    props.variableKey,
    JSON.parse(props.defaultValue)
  )

  // For SSR, return a placeholder value
  if (!isBrowser) {
    return <span>{props.defaultValue}</span>
  }

  return <span>{JSON.stringify(ffValue)}</span>
}
