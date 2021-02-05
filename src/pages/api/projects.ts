import { NextApiResponse, NextApiRequest } from "next";
import { GitHub } from "../../services/github";

export default async function getProjects(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { data: repositories } = await GitHub.request(
        "GET /users/{username}/repos",
        {
            username: "danielkv",
            sort: "created",
            direction: "desc",
        }
    );

    res.json(repositories);
}
