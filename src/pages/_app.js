import {Grid} from "@mui/material";
import {MainBar} from "@/components/main-bar";
import {useState} from "react";

export default function App({ Component, pageProps }) {
    const [searchText, setSearchText] = useState('');

    return (
        <main>
            <Grid container spacing={2}>
                <MainBar search={(element) => {setSearchText(element.target.value)}}></MainBar>
                <Component {...pageProps} search={searchText} />
            </Grid>
        </main>
    );
}
