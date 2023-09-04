import { Box, Divider, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";

const FormAuth = dynamic(() => import("@/components/Auth/FormAuth"));

interface Props {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

// eslint-disable-next-line
const Page: React.FC<Props> = (props: Props) => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FormAuth type="register" />
      <Divider sx={{ minWidth: "500px", my: 3 }} />
      <Typography variant="subtitle2">
        Sudah punya akun?&nbsp;
        <Typography
          variant="subtitle2"
          color="Highlight"
          component={Link}
          href="/auth/login"
        >
          Masuk
        </Typography>
      </Typography>
    </Box>
  );
};

export default Page;
