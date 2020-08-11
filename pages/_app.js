import '../styles/globals.css';
import { PageTransition } from 'next-page-transitions';

function MyApp({ Component, pageProps, router }) {
  return (
    <div>
      <PageTransition timeout={75} classNames="page-transition">
        <Component {...pageProps} key={router.route} />
      </PageTransition>
      <style jsx global>{`
        .page-transition-enter .fade-on-transition {
          opacity: 0;
        }
        .page-transition-enter-active .fade-on-transition {
          opacity: 1;
          transition: opacity 75ms;
        }
        .page-transition-exit .fade-on-transition {
          opacity: 1;
        }
        .page-transition-exit-active .fade-on-transition {
          opacity: 0;
          transition: opacity 75ms;
        }
      `}</style>
    </div>
  );
}

export default MyApp;
