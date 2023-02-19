export default function handler(req, res) {
    res.status(200).json({
            images: [
                {
                    id: 1,
                    name: 'nginx',
                    tag: '1.19.2',
                    size: '123MB',
                    created: '2021-03-01 12:00:00',
                    vulnerabilities: 0,
                },
                {
                    id: 2,
                    name: 'nginx',
                    tag: '1.19.3',
                    size: '123MB',
                    created: '2021-03-01 12:00:00',
                    vulnerabilities: 0,
                }]
        }
    )
}
