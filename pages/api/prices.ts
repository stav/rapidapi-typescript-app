
async function get(req, res): Promise<any> {
  return 'Helpful information'
}

async function post(req, res): Promise<any> {
  return req.body
}

export default async function (req, res): Promise<any> {
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
