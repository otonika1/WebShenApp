
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://otonika1.github.io/WebShenApp/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/WebShenApp/home",
    "route": "/WebShenApp"
  },
  {
    "renderMode": 2,
    "route": "/WebShenApp/home"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6003, hash: 'd0abe567de9e98927393a8bb70985852a29ee3e140e3e8ecadc76356f1b31e59', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1100, hash: 'bc54d9b121cfa30fc60882237f48a369aed938b84653a11d2d9cac3abe642e6d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 22496, hash: '088d46ccd4a19804f17910eccc77484bc0d17c40418470d0332dddaa68013c6c', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-WNQYQLQH.css': {size: 305376, hash: '9maJMoAxukE', text: () => import('./assets-chunks/styles-WNQYQLQH_css.mjs').then(m => m.default)}
  },
};
