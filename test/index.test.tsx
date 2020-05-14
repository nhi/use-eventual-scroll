import * as React from 'react';
import useEventualScroll from '../src';
import { render } from '@testing-library/react';

const App = () => {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const someAsyncOperation = async () => {
      //...
      setLoading(true);
    };
    someAsyncOperation();
  }, []);

  /**
   * By only adding this one line,
   * the scroll to #foo will happen, even
   * if it takes several 100 ms.
   * (In which case navigating to this page for the first time
   * would result in no scroll)
   */
  useEventualScroll();

  return <div>{loading ? 'Loading...' : <p id="foo">Some text</p>}</div>;
};

test.skip('Scrolls after delay', () => {
  render(<App />);
});
