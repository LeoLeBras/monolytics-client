// Import vue router
import Router from 'vue-router';
import Vue from 'vue';
Vue.use(Router);

// Create routes
const router = new Router();
router.map({
  '/': {
    component: require('web_modules/home')
  },
  '/tops/:category/:rank': {
    component: require('web_modules/tops')
  },
  '/about': {
    component: require('web_modules/about')
  },
  '/whatis': {
    component: require('web_modules/whatis')
  },
  '/rank': {
    component: require('web_modules/rank')
  },
  '/monthly': {
    component: require('web_modules/monthly')
  },
  '/stats': {
    component: require('web_modules/stats')
  }
});
router.redirect({
  '*': '/'
});

export default router;
