import Head from "next/head";
import {useRouter} from "next/router";
import {Grid, Typography} from "@mui/material";

export default function Image(props) {
    const router = useRouter();
    const {id} = router.query;

    return (
        <>
            <Head>
                <title>{'Container Inspection - Specific Image'}</title>
            </Head>
            <Grid item>
                <Typography>
                    {'Image ID: ' + id}
                </Typography>
            </Grid>
        </>
    );
}
