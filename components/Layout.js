import Head from "next/head";

export default function Layout({ title, children }) {
  return (
    <section>
      <Head>
        <title>{title}</title>
      </Head>
      {/* TODO Navbar */}
      <div>
        <main className="container mx-auto">{children}</main>
      </div>
      {/* TODO Footer */}
    </section>
  );
}
