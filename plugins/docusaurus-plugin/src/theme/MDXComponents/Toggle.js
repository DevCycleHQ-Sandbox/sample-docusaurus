import { useBooleanFlagValue } from "@openfeature/react-sdk"
import useIsBrowser from "@docusaurus/useIsBrowser"

export default function (props) {
  const isBrowser = useIsBrowser()
  const value = useBooleanFlagValue(props.variableKey, props.defaultValue)

  // Early return with placeholder for SSR to prevent hydration issues
  if (!isBrowser) {
    return <div></div>
  }

  return value === props.comparison ? props.children : null
}
