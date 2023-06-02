import { Match, Switch, createEffect } from 'solid-js';
import { getData } from '~/server/api';

export default function Home() {
  const data = getData(undefined);

  createEffect(() => {
    console.log('data', data.data);
  });

  return (
    <div class='flex h-full w-full flex-col items-center justify-center'>
      <div>Home</div>
      {/* <Switch fallback={<div>...Loading Data...</div>}>
        <Match when={data.isSuccess}>
          <div>Data: {data.data}</div>
        </Match>
      </Switch> */}
    </div>
  );
}
