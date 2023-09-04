import { APP_NAME } from "@/constants/general";
import { AppBar, Toolbar, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ReactElement } from "react";

const AvatarMenu = dynamic(() => import("@/components/Avatar/AvatarMenu"));

export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}): ReactElement {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1 }}
            component={Link}
            href="/"
          >
            {APP_NAME}
          </Typography>
          <AvatarMenu />
        </Toolbar>
      </AppBar>
      {children}
    </section>
  );
}
