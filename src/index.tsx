import * as React from 'react';

/** Scrolls to an element after that element is added to the DOM */
const useEventualScroll = (
  /**
   * Holds the element to scroll to.
   * The closer it is to that element, the less Mutations are observed
   * by MutationObserver. If not defined, document will be used.
   */
  container?: null | HTMLElement,
  /**
   * Defaults to `true`.
   * If set to `false`, the MutationObserver
   * will stop listening for DOM changes
   * after the first scroll has been executed.
   *
   * Usually, you can skip this.
   * Although, if the element you are scrolling to
   * moves in subsequent renders, you have to ensure
   * that it stays in view, by constantly scrolling to it.
   */
  disconnectAfterScroll: boolean = true
) => {
  React.useEffect(() => {
    if (!window.location.hash || container === null) {
      return;
    }

    const _container = container || document;

    const observer = new MutationObserver(() => {
      const hash = window.location.hash.replace(/\?.*/, '');
      const element = _container.querySelector(hash);
      if (element) {
        element.scrollIntoView();
        if (disconnectAfterScroll) {
          observer?.disconnect();
        }
      }
    });

    observer.observe(_container, { childList: true, subtree: true });

    return () => {
      observer?.disconnect();
    };
  }, [container, disconnectAfterScroll]);
};

export default useEventualScroll;
