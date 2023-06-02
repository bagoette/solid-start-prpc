// @refresh reload
import './root.css';
import {
  Link,
  Meta,
  FileRoutes,
  Scripts,
  Html,
  Head,
  Body,
  Routes,
  Route,
} from 'solid-start';
import { ErrorBoundary } from 'solid-start/error-boundary';
import { Suspense } from 'solid-js';
import { QueryProvider } from '@prpc/solid';

import { Navbar } from '~/components/Navbar';

export default function Root() {
  return (
    <Html lang='en'>
      <Head>
        <Meta charset='utf-8' />
        <Meta name='viewport' content='width=device-width, initial-scale=1' />
        <Link rel='preconnect' href='https://fonts.googleapis.com' />
        <Link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossorigin=''
        />
        <Link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap'
        />
      </Head>
      <Body>
        <ErrorBoundary
          fallback={(e, reset) => (
            <>
              <div>Error: {e}</div>
              <button onClick={reset}>Reset</button>
            </>
          )}
        >
          <QueryProvider>
            <Suspense>
              <Routes>
                <Route path='*' element={<Navbar />}>
                  <FileRoutes />
                </Route>
              </Routes>
            </Suspense>
          </QueryProvider>
        </ErrorBoundary>
        <Scripts />
      </Body>
    </Html>
  );
}
