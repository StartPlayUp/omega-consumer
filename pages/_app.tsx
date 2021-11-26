import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { FC } from 'react';
import Layout from '../components/layout'
import wrapper from "../store/configureStore"
const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Layout >
        <Component {...pageProps} />
      </Layout>

    </>
  )
}
export default wrapper.withRedux(MyApp);


// Router.events.on("routeChangeStart", (url) => {
//   console.log(`Loading: ${url}`);
//   document.body.classList.add("body-page-transition");
//   ReactDOM.render(
//     <PageChange path={url} />,
//     document.getElementById("page-transition")
//   );
// });
// Router.events.on("routeChangeComplete", () => {
//   ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
//   document.body.classList.remove("body-page-transition");
// });
// Router.events.on("routeChangeError", () => {
//   ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
//   document.body.classList.remove("body-page-transition");
// });

// export default class MyApp extends App {
//   componentDidMount() {

//   }
//   static async getInitialProps({ Component, router, ctx }) {
//     let pageProps = {};

//     if (Component.getInitialProps) {
//       pageProps = await Component.getInitialProps(ctx);
//     }

//     return { pageProps };
//   }
//   render() {
//     const { Component, pageProps } = this.props;

//     return (
//       <React.Fragment>
//         <Head>
//           <meta
//             name="viewport"
//             content="width=device-width, initial-scale=1, shrink-to-fit=no"
//           />
//           <title>NextJS Material Kit by Creative Tim</title>
//         </Head>
//         <Component {...pageProps} />
//       </React.Fragment>
//     );
//   }
// }