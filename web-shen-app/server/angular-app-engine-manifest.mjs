
export default {
  basePath: 'https://otonika1.github.io/WebShenApp',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
