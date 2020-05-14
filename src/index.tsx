import * as React from "react"

/** Scrolls to an element after that element is added to the DOM */
const useEventualScroll = (
  /**
   * Holds the element to scroll to.
   * The closer it is to that element, the less Mutations are observed
   * by MutationObserver. If not defined, document will be used.
   */
  container?: null | HTMLElement
) => {
  React.useEffect(() => {
    if (!location.hash || container === null) {
      return
    }

    const _container = container || document

    const observer = new MutationObserver(() => {
      const element = _container.querySelector(location.hash)
      if (element) {
        element.scrollIntoView()
        observer.disconnect()
      }
    })

    observer.observe(_container, { childList: true, subtree: true })

    return observer.disconnect

  }, [container])
}

export default useEventualScroll