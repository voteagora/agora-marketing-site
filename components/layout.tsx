import Footer from "./footer";
import Meta from "./meta";
import { Analytics } from "@vercel/analytics/react";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />

      <main>{children}</main>
      <Footer />
      <Analytics />
    </>
  );
};

export default Layout;
