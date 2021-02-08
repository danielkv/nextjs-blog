import utils from "../../styles/utils.module.scss";

type iProps = {
    children: string;
};

export default function PageTitle({ children }: iProps) {
    return (
        <div className={utils.pageTitleContainer}>
            <h1 className={utils.title}>{children}</h1>
            <div className={utils.arrows}>
                <div className={utils.arrowDown}></div>
                <div className={utils.arrowDown}></div>
                <div className={utils.arrowDown}></div>
            </div>
        </div>
    );
}
