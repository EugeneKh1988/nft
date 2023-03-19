import Head from "next/head";
import React from "react"
import Header from "./Header";

interface ILayout {
    title: string,
    description: string,
    children: React.ReactNode
}

const Layout: React.FC<ILayout> = ({title, description, children}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            </Head>
            <main className="bg-white">
                <Header></Header>
                <div className="container mx-auto">
                    {children}
                </div>
            </main>
        </>
    );
}

export default Layout;