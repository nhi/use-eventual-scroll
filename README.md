<div align="center">
<h1>use-eventual-scroll</h1>

<p>Hook that scrolls to an element after that element is added to the DOM</p>

</div>

---


[![version][version-badge]][package] [![downloads][downloads-badge]][npmtrends] [![Total downloads][total-downloads]][total-downloads] [![MIT License][license-badge]][license] [![PRs Welcome][prs-badge]][prs] [![Code of Conduct][coc-badge]][coc]

[![Watch on GitHub][github-watch-badge]][github-watch] [![Star on GitHub][github-star-badge]][github-star]

---

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Documentation](#documentation)
  - [useEventualScroll](#useeventualscroll)
- [LICENSE](#license)


## Installation
This should be installed as one of your project `dependencies`:

```
yarn add use-eventual-scroll
```
or
```
npm install --save use-eventual-scroll
```

> NOTE: `use-eventual-scroll` only works with [**react >=16.8**][react-hooks], since it is a hook.

## Usage

If you have to render some content in React that takes some time, but it holds an element you want to scroll to, you can use this hook to wait for the element to appear in the DOM, and initiate the scroll afterwards.

Example:
```jsx
import useEventualScroll from "use-eventual-scroll"
// url: http://example.com#foo
const App = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const someAsyncOperation = async () => {
      //...
      setLoading(true)
    }
    someAsyncOperation()
  }, [])

  /**
   * By only adding this one line,
   * the scroll to #foo will happen, even
   * if it takes several 100 ms.
   * (In which case navigating to this page for the first time
   * would result in no scroll)
   */
  useEventualScroll()

  return (
    <div>
      {loading
        ? "Loading..."
        : <p id="foo">Some text</p>
      }
    </div>

  )
}
```

---


## Documentation

### useEventualScroll

```ts
  useEventualScroll(ref?: HTMLElement | null): void
```
`useEventualScroll` uses [MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) under the hood. By default, it listens to every change on `document`. Optionally, you can pass an `HTMLElement` reference to `useEventualScroll`, to only care about changes inside that DOM element. It can increase performance.
  

---

## LICENSE

MIT

[version-badge]:
  https://img.shields.io/npm/v/use-eventual-scroll.svg?style=flat-square
[package]: https://www.npmjs.com/package/use-eventual-scroll
[downloads-badge]:
  https://img.shields.io/npm/dm/use-eventual-scroll.svg?style=flat-square

[npm]: https://www.npmjs.com/
[node]: https://nodejs.org

[npmtrends]: http://www.npmtrends.com/use-eventual-scroll
[license-badge]:
  https://img.shields.io/npm/l/use-eventual-scroll.svg?style=flat-square
[license]:
  https://github.com/nhi/use-eventual-scroll/blob/master/LICENSE
[prs-badge]:
  https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[donate-badge]:
  https://img.shields.io/badge/$-support-green.svg?style=flat-square
[coc-badge]:
  https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]:
  https://github.com/nhi/use-eventual-scroll/blob/master/CODE_OF_CONDUCT.md
[github-watch-badge]:
  https://img.shields.io/github/watchers/nhi/use-eventual-scroll.svg?style=social
[github-watch]: https://github.com/nhi/use-eventual-scroll/watchers
[github-star-badge]:
  https://img.shields.io/github/stars/nhi/use-eventual-scroll.svg?style=social
[github-star]: https://github.com/nhi/use-eventual-scroll/stargazers
[react-hooks]: https://reactjs.org/blog/2019/02/06/react-v16.8.0.html
[input-types-mdn]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
[codesandbox-example]: https://codesandbox.io/s/use-eventual-scroll-2mler
[input-prop-generator-test-file]: https://github.com/nhi/use-eventual-scroll/blob/master/src/__tests__/useForm-with-input-prop-generator.test.js
[total-downloads]: https://img.shields.io/npm/dt/use-eventual-scroll.svg?label=total%20downloads&style=flat-square
