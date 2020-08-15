import Service, { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { scheduleOnce, next } from '@ember/runloop';

export default class ScrollService extends Service {
  @service router;

  doScroll = true;
  @tracked isLoading = false;

  constructor() {
    super(...arguments);

    if (window.addEventListener) {
      window.addEventListener('popstate', () => {
        // we want the popstate event to be handled in between routeWillChange and routeDidChange
        next(() => {
          this.doScroll = false;
        });
      });
    }
  }

  @action
  routeWillChange() {
    this.doScroll = true;
    this.isLoading = true;
  }

  @action
  routeDidChange(transition) {
    // don't mess with the scroll there is no from in the route transition (meaning its the initial load)
    if (!transition.from) {
      this.doScroll = true;
      this.isLoading = false;
      return;
    }

    // we want this to happen after the popstate event is handled
    next(() => {
      scheduleOnce('afterRender', this.scrollUp);
    });
  }

  @action
  scrollUp() {
    if (this.doScroll) {
      // TODO: replace with ember-a11y-pushstate kind of implementation
      if (window.scrollTo) {
        window.scrollTo(0, 0);
      }
    }

    this.doScroll = true;
    this.isLoading = false;
  }
}
