import { query$ } from '@prpc/solid';

export const getData = query$({
  key: 'getData',
  queryFn: async () => {
    const data = await new Promise<string>((res) => {
      console.log('getting data');

      setTimeout(() => {
        console.log('resolving');
        res('The Data!');
      }, 2000);
    });

    console.log('returning data');
    return data;
  },
});
