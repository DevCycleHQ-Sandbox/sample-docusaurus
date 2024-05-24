module.exports = function (context, options) {
  return {
    name: "@devcycle/docusaurus-theme-devcycle",
    getThemePath() {
      return path.resolve(__dirname, "./theme");
    },
    async loadContent() {
      if (options.sdkKey) {
        const user = {};
        const dvcOptions = {};
        const dvcClient = initialize(options.sdkKey, user, dvcOptions);
        await dvcClient.onClientInitialized();
        return dvcClient.allVariables();
      } else {
        return {};
      }
    },
    async contentLoaded({ content, actions }) {
      const { setGlobalData } = actions;
      setGlobalData({ allVariables: content });
    },
    configureWebpack(config, isServer, utils, content) {
      return {
        plugins: [
          new webpack.DefinePlugin({
            // github.com/rohit-gohri/redocusaurus/issues/236
            "process.env.DEBUG": "process.env.DEBUG",
            "process.env.DEVCYCLE_CLIENT_SDK_TOKEN": JSON.stringify(
              options.sdkKey,
            ),
          }),
        ],
      };
    },
  };
};
