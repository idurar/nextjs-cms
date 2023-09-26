import '@/styles/globals.css';
import '@/styles/app.css';
import type { AppProps } from 'next/app';

import { ApolloProvider } from '@apollo/client';
import { useApollo } from '@/apollo';
import { DefaultLayout } from '@/layout';

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ApolloProvider>
  );
}
