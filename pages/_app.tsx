import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ethers } from 'ethers'
import { AccountContext } from '../components/context'
import { ownerAddress } from '../config'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
