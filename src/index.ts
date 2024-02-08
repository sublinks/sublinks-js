import { SublinksClient } from './client.js';

export * from './client.js';

const client = new SublinksClient({
  instance: 'programming.dev',
});

main();

async function main() {
  console.log(client);
  console.log(await client.getSite());
}
