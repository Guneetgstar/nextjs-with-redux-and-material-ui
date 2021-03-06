import React from 'react'
import App  from 'next/app'
import Head from 'next/head'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import wrapper from '../src/store'
import theme from '../src/utils/theme'
import {ConnectedRouter} from "connected-next-router";

class _App extends App {
// static async getInitialProps ({ Component, ctx }) {
//     return {
//         pageProps: {
//             ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
//             pathname: ctx.pathname,
//         }
//     }
// }

componentDidMount () {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles)
    }
}

render () {
    const {
        Component,
        pageProps,
    } = this.props
    console.log(this.props)
    return (
        <MuiThemeProvider theme={theme}>
            <Head>
                <title>Home</title>
            </Head>
            <CssBaseline />
            <ConnectedRouter>
                <Component {...pageProps} />
            </ConnectedRouter>
        </MuiThemeProvider>
    )
}
}


export default wrapper.withRedux(_App)
