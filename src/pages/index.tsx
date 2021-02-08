import Head from "next/head";
import Image from "next/image";
import Layout, { siteTitle } from "../components/layout";
import homeStyles from "../styles/home.module.scss";

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={homeStyles.main}>
                <div className={homeStyles.profileImage}>
                    <Image
                        src="/images/profile_picture.png"
                        width={240}
                        height={240}
                    />
                </div>
                <Image
                    className={homeStyles.profileBG}
                    src="/images/profile1.png"
                    width={500}
                    height={294}
                />
            </section>
            <section className={homeStyles.details}>
                <h1>Daniel K. Guolo</h1>
                <h4>Desenvolvedor • Administrador • Empreendedor</h4>
            </section>
        </Layout>
    );
}
