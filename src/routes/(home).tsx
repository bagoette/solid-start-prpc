import { createEffect } from 'solid-js';
import { getData } from '~/server/api';

export default function Home() {
  const data = getData(undefined);

  createEffect(() => {
    console.log('data', data.data);
  });

  return (
    <div class='flex flex-col w-full h-full justify-center items-center'>
      <div>Home</div>
    </div>
  );
}
