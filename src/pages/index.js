import Head from "next/head";
import { DockerImageList } from "@/docker-images/docker-image-list";

export default function Home(props) {
    return (
        <>
            <Head>
                <title>Container Inspection</title>
                <meta name="description" content="" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <DockerImageList search={props.search}></DockerImageList>
        </>
    );
}
