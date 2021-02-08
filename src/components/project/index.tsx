import { ProjectModel } from "../../models/project.model";
import portfolioStyles from "../../styles/portfolio.module.scss";
import dayjs from "dayjs";

type IProps = {
    project: ProjectModel;
};

export default function Project({ project }: IProps) {
    const keywords = project?.topics || [project.language];

    const url = project.html_url;

    return (
        <article
            itemScope
            itemType="https://schema.org/CreativeWork"
            className={portfolioStyles.projectItem}
        >
            <time itemProp="dateCreated" className={portfolioStyles.date}>
                {dayjs(project.created_at).format("MM/YYYY")}
            </time>
            <a href={url} target="_blank" className={portfolioStyles.titleLink}>
                <h3 itemProp="name" className={portfolioStyles.title}>
                    {project.name}
                </h3>
            </a>
            <div itemProp="url" className={portfolioStyles.url}>
                {url}
            </div>
            <div itemProp="keywords" className={portfolioStyles.topics}>
                {keywords.map((topic) => (
                    <div className={portfolioStyles.topic}>{topic}</div>
                ))}
            </div>
        </article>
    );
}
