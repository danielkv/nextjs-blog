import Head from "next/head";
import styles from "./layout.module.scss";
import Link from "next/link";
import classNames from "classnames";
import { useRouter } from "next/router";

export const siteTitle = "Daniel K. Guolo";

export default function Layout({ children }: { children: React.ReactNode }) {
    const { pathname } = useRouter();

    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                {/* <meta
                    property="og:image"
                    content={`https://og-image.now.sh/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" /> */}
            </Head>
            <header className={styles.header}>
                <nav>
                    <ul>
                        <li>
                            <Link href="/sobre">
                                <a
                                    className={classNames({
                                        [styles.selected]:
                                            pathname === "/sobre",
                                    })}
                                >
                                    Sobre
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/portfolio">
                                <a
                                    className={classNames({
                                        [styles.selected]:
                                            pathname === "/portfolio",
                                    })}
                                >
                                    Portfolio
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contato">
                                <a
                                    className={classNames({
                                        [styles.selected]:
                                            pathname === "/contato",
                                    })}
                                >
                                    Contato
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>{children}</main>
        </div>
    );
}
