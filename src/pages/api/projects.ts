import { Octokit } from "@octokit/core";
import { NextApiResponse, NextApiRequest } from "next";

const gh = new Octokit({
    auth: "c4c3700842112c5a87aa620d6c2047f6b082ec5b",
});

export default async function getProjects(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { data: repositories } = await gh.request(
        "GET /users/{username}/repos",
        {
            username: "danielkv",
        }
    );
    console.log(repositories);

    res.json(repositories);
}
