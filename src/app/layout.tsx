import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import { APP_NAME, FAVICON } from "@/constants/general";
import "@/scss/styles.scss";
import type { Metadata } from "next";
import { Suspense } from "react";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: APP_NAME,
  description: "Generated by create next app",
  icons: FAVICON,
};

const Loading = dynamic(() => import("@/app/loading"));

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </ThemeRegistry>
      </body>
    </html>
  );
}
