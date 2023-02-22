import {findAll} from '@/lib/images-service';
export default function handler(req, res) {
    res.status(200).json({
            images: findAll()
        }
    )
}
