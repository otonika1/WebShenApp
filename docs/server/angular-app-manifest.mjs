
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/WebShenApp/',
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
    'index.csr.html': {size: 5977, hash: '390112185853ac3b72bb9728ef9e2d0b724353fb1158afa1f77410e0fbe1c7b2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1074, hash: '6a05e089a8de2044d588af7c4937ce91be75e53d4ec4e8e3a3e36eacddc1dcee', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 22470, hash: 'eef7bb3d477b860711bb9f5be1f974ed1d10a61b6a014404858efe0ff7ec35f5', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-WNQYQLQH.css': {size: 305376, hash: '9maJMoAxukE', text: () => import('./assets-chunks/styles-WNQYQLQH_css.mjs').then(m => m.default)}
  },
};
