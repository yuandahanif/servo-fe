import Head from "next/head";
import Navbar from "./navbar";

interface Props {
  children: React.ReactNode;
}

function layout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Servo</title>
        <meta name="description" content="Servo App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className="w-full bg-red-400 min-h-screen">{children}</main>
      <footer className="">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <span className="">AAA</span>
        </a>
      </footer>
    </>
  );
}

export default layout;
