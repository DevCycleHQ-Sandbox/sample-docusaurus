const webpack = require("webpack")
const path = require("path")

module.exports = function (context, options) {
  return {
    name: "@openfeature/docusaurus-openfeature-provider",
    getThemePath() {
      return path.resolve(__dirname, "./theme")
    },
    async loadContent() {
      return {}
    },
    async contentLoaded({ content, actions }) {
      const { setGlobalData } = actions
      setGlobalData({ allVariables: content })
    },
    configureWebpack(config, isServer, utils, content) {
      https: return {
        plugins: [
          new webpack.DefinePlugin({
            "process.env.DEBUG": "process.env.DEBUG",
            "process.env.PROVIDER_SDK_TOKEN": JSON.stringify(
              options.providerSdkToken
            ),
          }),
        ],
      }
    },
  }
}
