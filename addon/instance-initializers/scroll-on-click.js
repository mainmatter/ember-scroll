export function initialize(appInstance) {
  if (document) {
    const router = appInstance.lookup('service:router');
    const scroll = appInstance.lookup('service:scroll');

    router.on('routeWillChange', scroll.routeWillChange);
    router.on('routeDidChange', scroll.routeDidChange);

    const element = document.createElement('div');
    const text = document.createTextNode('The page navigation is complete. You may now navigate the page content as you wish.');
    element.append(text);
    element.setAttribute('id', scroll.guid);
    element.setAttribute('class', 'ember-scroll-on-click-navigation-message');
    element.setAttribute('tabindex', -1);
    document.body.prepend(element);
  }
}

export default {
  initialize
};
