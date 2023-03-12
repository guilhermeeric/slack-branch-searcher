import express, { Express, Request, Response } from 'express';
import { searchPullRequest } from './git/providers/github';
import { sendEphemeralMessage } from './slack/slackClient';

const app: Express = express();
const port = 7777;

app.use(express.urlencoded());

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.post('/slack', async (req: Request, res: Response) => {
  console.log(req.body)
  const branchToSearch = req.body.text;
  const userRequesting = req.body.user_id;
  const pullRequest = await searchPullRequest(branchToSearch);
  console.log(pullRequest);
  await sendEphemeralMessage(
    `Achei! Tá aqui o link do pull request: ${pullRequest}`,
    userRequesting
  );
  res.send(branchToSearch);
});

app.listen(port, () => {
  console.log(
    `⚡️[server]: Server is running at http://localhost:${port}\n` +
    '⚡️[ngrok]: ngrok is running at http://localhost:4551'
  );
});