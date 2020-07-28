import { NextApiRequest, NextApiResponse } from 'next'

async function external(url: string, config?: object): Promise<my.CryptocompareResult> {
  const res = await fetch(url, config)
  const data = await res.json()
  return data
}

async function get(req: NextApiRequest, res: NextApiResponse<string>): Promise<string> {
  return 'Helpful information'
}

async function post(req: NextApiRequest, res: NextApiResponse<my.PriceResult>): Promise<my.PriceResult> {
  const params = {
    denominator: req.body.currency,
    exchange: req.body.exchange,
    asset: req.body.symbol,
  };
  const priceUrl = new URL('https://crypto-asset-market-data-unified-apis-for-professionals.p.rapidapi.com/api/v1/exchanges/trades');
  priceUrl.search = (new URLSearchParams(params)).toString();

  const remoteResponse: my.CryptocompareResult = await external(
    priceUrl.toString(),
    {
      headers: {
        'x-rapidapi-host': 'crypto-asset-market-data-unified-apis-for-professionals.p.rapidapi.com',
        'x-rapidapi-key': '[YOUR X-RAPIDAPI-KEY]',
      }
    }
  )
  const response = Object.assign({
    currency: req.body.currency,
    exchange: req.body.exchange,
    symbol: req.body.symbol,
  }, remoteResponse)

  return response
}

export default async function (req: NextApiRequest, res: NextApiResponse<string | my.PriceResult>): Promise<any> {
  switch (req.method) {
    case 'GET':
      res.status(200).send(await get(req, res))
      break
    case 'POST':
      res.status(200).json(await post(req, res))
      break
    default:
      res.status(405).end() //Method Not Allowed
  }
}
