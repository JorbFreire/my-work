import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse<void>,
) {
  const { name, email, phone, message } = request.body

  console.log(name, email, phone, message)

  return response.status(200).send()
}
