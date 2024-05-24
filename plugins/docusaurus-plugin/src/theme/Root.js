import React from "react";
// import { withDevCycleProvider } from "@devcycle/react-client-sdk";

import { OpenFeatureProvider, OpenFeature } from "@openfeature/react-sdk";
import DevCycleProvider from "@devcycle/openfeature-web-provider";

await OpenFeature.setContext({ user_id: "user_id" });
await OpenFeature.setProviderAndWait(
  new DevCycleProvider(process.env.DEVCYCLE_CLIENT_SDK_TOKEN),
);

// Default implementation, that you can customize
function Root({ children }) {
  return <OpenFeatureProvider>{children}</OpenFeatureProvider>;
}

export default Root;
