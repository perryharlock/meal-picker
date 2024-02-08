import type { NextApiResponse } from "next";

export default function handler (
    response: NextApiResponse
) {
    response.status(200).json({ res: 'ok'});
}