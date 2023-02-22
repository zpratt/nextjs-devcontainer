import Head from "next/head";
import {useRouter} from "next/router";
import {Grid} from "@mui/material";
import {useEffect, useState} from "react";
import {DockerImage} from "@/docker-images/docker-image";

function findImageById(id) {
    return fetch(`http://localhost:3000/api/images/${id}`)
        .then((res) => res.json())

}

export const getServerSideProps = async (context) => {
    const {id} = context.params;

    const image = await findImageById(id);

    return {
        props: {
            image,
        },
    };
}

export default function Image() {
    const router = useRouter();
    const [image, setImage] = useState(null);

    useEffect(() => {
        if (router.isReady) {
            const {id} = router.query;

            findImageById(id).then((image) => {
                setImage(image);
            });
        }
    }, [router.isReady, router.query]);

    return (
        <>
            <Head>
                <title>{'Container Inspection - Specific Image'}</title>
            </Head>
            <Grid item>
                <DockerImage image={image}/>
            </Grid>
        </>
    );
}
