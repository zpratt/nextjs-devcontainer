import {alpha, AppBar, Grid, InputBase, styled, Toolbar, Typography} from "@mui/material";

const SearchInput = styled('div')(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15)
}));

export const MainBar = (props) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container spacing={2}>
                    <Grid item xs={8}><Typography variant={'h6'}>Containers</Typography></Grid>
                    <Grid item xs={4}>
                        <SearchInput>
                            <InputBase placeholder={'Search'} onInput={props.search} name={'search'}/>
                        </SearchInput>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};
