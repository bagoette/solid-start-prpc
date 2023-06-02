import { query$ } from '@prpc/solid';

const sleep = async (ms: number) =>
  new Promise<void>((resolve) => setTimeout(() => resolve(), ms));

export const getData = query$({
  key: 'getData',
  queryFn: async () => {
    console.log('sleeping');
    await sleep(1000);

    console.log('returning data');
    return 'The Data!';
  },
});
