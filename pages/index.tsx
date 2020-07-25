import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Crypto Prices</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h3 className="title"> Crypto Prices </h3>

        <div className="grid">
          <div className="card">
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
                <button className="submit">Get Prices</button> &rarr;
              </div>
            </form>
          </div>

          <div className="card code">
            <ul>
              <li>Prices</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
