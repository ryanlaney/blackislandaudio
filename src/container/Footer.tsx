import * as React from "react";

// import Image from "next/image";

import {
    Box,
    Grid,
    Link,
    Typography,
} from "@material-ui/core";

const Footer: React.FC = () => (
    <Box style={{ color: "white" }}>
        <Grid container>
            {/* @ts-expect-error: no overload matches this call */}
            <Box component={Grid} container item p={4} style={{ background: "#222" }} xs={12}>
                <Grid component={Link} container href="https://blackisland.io" item spacing={2} style={{ color: "white", textDecoration: "unset" }} xs={6}>
                    <Grid item>
                        <img
                            alt="Black Island Studio"
                            height={100}
                            src="/logo-white.png"
                            width={100}
                        />
                    </Grid>
                    <Grid item style={{ marginTop: "auto", marginBottom: "auto" }}>
                        <Typography variant="body2">A division of</Typography>
                        <Typography variant="h5">Black Island Studios</Typography>
                    </Grid>
                </Grid>
                <Grid container item md={6} spacing={4} style={{ alignItems: "center", alignContent: "center" }} xs={6}>
                    <Grid container item xs={12}>
                        <Grid item xs={12}>
                            <Typography>23 Vixen Rd</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>Trumbull, CT 06611</Typography>
                        </Grid>
                    </Grid>
                    <Grid container item spacing={1} xs={12}>
                        <Grid item xs={12}>
                            <Typography>‪info@blackisland.io</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            {/* @ts-expect-error: no overload matches this call */}
            <Box component={Grid} item p={2} style={{ textAlign: "center", background: "#111" }} xs={12}>
                <p>
                    © Copyright
                    {" "}
                    {new Date().getFullYear()}
                    {" "}
                    <b><a href="https://blackisland.io" style={{ textDecoration: "unset", color: "#3EC1D5" }}>Black Island Studios.</a></b>
                    {" "}
                    All Rights Reserved.
                </p>
            </Box>
        </Grid>
    </Box>
);

export default Footer;
