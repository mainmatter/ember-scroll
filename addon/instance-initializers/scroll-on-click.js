export function initialize(appInstance) {
  const router = appInstance.lookup('service:router');
  const scroll = appInstance.lookup('service:scroll');

  router.on('routeWillChange', scroll.routeWillChange);
  router.on('routeDidChange', scroll.routeDidChange);
}

export default {
  initialize
};
