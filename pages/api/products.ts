import { NextApiRequest, NextApiResponse } from "next";
import products from "../../utils/data/products";

export default (req: NextApiRequest, res: NextApiResponse) => {
    console.log(req);

    // fake loading time
    setTimeout(() => {
        res.status(200).json(products)
    }, 500)
}