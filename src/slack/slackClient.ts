import { WebClient } from '@slack/web-api';
// Create a new instance of the WebClient class with the token read from your environment variable
const web = new WebClient('TOKEN');

export async function sendEphemeralMessage(message: string, user: string) {
  try {
    // await web.chat.postMessage({
    //   channel: '#searcher',
    //   text: `vai corinthians`,
    // });
    console.log(message)
    await web.chat.postEphemeral({
      channel: '#searcher',
      text: message,
      user: user
    });
  } catch(e) {
    throw Error(`erro: ${e}`);
  }
};
// The current date
// const currentTime = new Date().toTimeString();

// (async () => {

//   try {
//     // Use the `chat.postMessage` method to send a message from this app
//     await web.chat.postMessage({
//       channel: '#searcher',
//       text: `vai corinthians`,
//     });
//     console.log('Message posted!');
//   } catch (error) {
//     console.log(error);
//   }

// })();
