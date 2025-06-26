import { SessionProvider } from "next-auth/react";

export default function Home({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <div>Home</div>
      <Component {...pageProps}/>
    </SessionProvider>
  );
}
