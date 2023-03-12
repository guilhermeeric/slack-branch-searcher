import { Octokit } from "octokit";

const octokit = new Octokit({ auth: `TOKEN` });

export async function searchPullRequest(branch: string) {
  try {
    console.log(`searching ${branch}`)
    const pullRequest = await octokit.rest.pulls.list({
      owner: 'ResultadosDigitais',
      repo: 'backstage',
      head: `ResultadosDigitais:${branch}`
    })

    return pullRequest.data[0].html_url
  } catch(e) {
    throw Error(`Failed to find PR. ${e}`)
  }
}
