import Link from 'next/link'
import Head from 'next/head'
import { Client,CryptoTransferTransaction } from "@hashgraph/sdk";
import {OPERATOR_ID,OPERATOR_KEY} from "../keys";

export default function Donate() {

return (
  <>
  <Head>
    <title>Donate</title>
  </Head>
    <h1>Make a donation now</h1>
    <h2>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </h2>
  </>
)
}