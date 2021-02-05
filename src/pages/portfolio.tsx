import { GetStaticProps } from "next";
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Project from "../components/project";
import { ProjectModel } from "../models/project.model";
import { fetcher } from "../services/fetcher";
import portfolioStyles from "../styles/portfolio.module.scss";

type IProps = {
    projects: ProjectModel[];
};

export default function Portfolio({ projects }: IProps) {
    return (
        <Layout>
            <Head>
                <title>{`${siteTitle} - Portfolio`}</title>
            </Head>
            <section className={portfolioStyles.main}>
                {projects.map((project) => (
                    <Project key={String(project.id)} project={project} />
                ))}
            </section>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps<IProps> = async () => {
    const projects = await fetcher("/projects");

    return {
        props: { projects },
        revalidate: 60 * 60, // revalidate every 1h
    };
};
