import { Show, createEffect } from 'solid-js';
import { getData } from '~/server/api';

export default function Home() {
  const data = getData(undefined);

  createEffect(() => {
    console.log('data', data.data);
  });

  return (
    <div class='flex h-full w-full flex-col items-center justify-center'>
      <div>Home</div>

      {/* <Show when={data.isSuccess} fallback={<div>...Loading Data...</div>}>
        <div>Data: {data.data}</div>
      </Show>* */}
    </div>
  );
}
