import { useState } from 'react'
import Head from 'next/head'

async function fetcher() {
  const res = await fetch('/api/prices', {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
  })
  return await res.text()
}

export default function Home() {

  const [prices, setPrices] = useState([]);

  async function getPrices(e) {
    e.preventDefault() // prevent page from submitting form
    const result = await fetcher()
    setPrices(prices.concat(result))
  }

  return (
    <div className="container">
      <Head>
        <title>Crypto Prices</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h3 className="title"> Crypto Prices </h3>

        <div className="grid">
          <div className="form card">
            <form lang="en">
              <div>
                <div>
                  <label htmlFor="symbol">Symbol:</label>
                  <input type="text" id="symbol" name="symbol" data-default="BTC" placeholder="BTC" />
                </div>
                <div>
                  <label htmlFor="currency">Currency:</label>
                  <input type="text" id="currency" name="currency" data-default="USD" placeholder="USD" />
                </div>
                <div>
                  <label htmlFor="exchange">Exchange:</label>
                  <input type="text" id="exchange" name="exchange" data-default="Kraken" placeholder="Kraken" />
                </div>
              </div>
              <div className="submit">
                <button className="submit" onClick={getPrices}>Get Prices</button> &rarr;
              </div>
            </form>
          </div>

          <div className="code card">
            <ul>
              {prices.map((price, i) => <li key={i}><code>{price}</code></li>)}
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
