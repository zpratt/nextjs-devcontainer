import {findById} from "@/lib/images-service";

export default function handler(req, res) {
    const imageId = Number(req.query.id);
    const image = findById(imageId);

    res.status(200).json(image);
}
