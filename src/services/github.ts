import { Octokit } from "@octokit/core";

export const GitHub = new Octokit({
    auth: process.env.GITHUB_TOKEN,
});
