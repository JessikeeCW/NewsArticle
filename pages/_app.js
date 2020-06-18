import 'bootstrap/dist/css/bootstrap.min.css';

//contains the styling, so that the application can utilize bootstrap globally
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
