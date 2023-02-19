import {useEffect, useState} from "react";
import {DockerImage} from "./docker-image";
import Grid from '@mui/material/Grid';

export const DockerImageList = () => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        fetch("/api/images")
            .then((res) => res.json())
            .then((data) => {
                setImages(data.images);
            });
    }, []);

    return (
        <Grid container spacing={2}>
            {images.map((image) => {
                return (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={image.id}>
                        <DockerImage image={image}/>
                    </Grid>
                )
            })}
        </Grid>
    )
}
