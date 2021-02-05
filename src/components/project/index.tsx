import { ProjectModel } from "../../models/project.model";
import portfolioStyles from "../../styles/portfolio.module.scss";
import dayjs from "dayjs";

type IProps = {
    project: ProjectModel;
};

export default function Project({ project }: IProps) {
    return (
        <article
            itemScope
            itemType="https://schema.org/CreativeWork"
            className={portfolioStyles.projectItem}
        >
            <time itemProp="dateCreated" className={portfolioStyles.date}>
                {dayjs(project.created_at).format("MM/YYYY")}
            </time>
            <h3 itemProp="name" className={portfolioStyles.title}>
                {project.name}
            </h3>
            <div itemProp="url" className={portfolioStyles.url}>
                {project.url}
            </div>
            <div itemProp="keywords" className={portfolioStyles.url}></div>
        </article>
    );
}
