import Layout from "@/components/Layout";
import SearchProvider from "@/provider/SearchProvider";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <SearchProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SearchProvider>
  );
}
