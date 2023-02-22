const images = [
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
        name: 'node',
        tag: '8.14.0',
        size: '123MB',
        created: '2021-03-01 12:00:00',
        vulnerabilities: 0,
    }
];

export const findAll = () => {
    return images;
}

export const findById = (id) => {
    return images.find(image => image.id === id);
}
