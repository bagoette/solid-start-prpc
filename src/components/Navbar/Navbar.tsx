import { For } from 'solid-js';
import { A, Outlet } from 'solid-start';

const height = 64;

const routes = [
  { label: 'Home', href: '/' },
  { label: 'Page 1', href: '/page1' },
];

const Navbar = () => {
  return (
    <>
      <nav
        class={`fixed top-0 z-50 flex w-full h-[var(--nav-height)] items-center gap-4 bg-[#272727] p-2 shadow-lg`}
      >
        <img
          src='https://www.solidjs.com/assets/logo-123b04bc.svg'
          alt='Logo'
          class='h-[calc(var(--nav-height)-16px)]'
        />

        <ul class='flex gap-1'>
          <For each={routes}>
            {({ label, href }) => (
              <A href={href}>
                <li class='rounded-md px-2 py-1 text-lg font-medium transition-[background] ease-in hover:bg-slate-400/20 hover:ease-out'>
                  {label}
                </li>
              </A>
            )}
          </For>
        </ul>
      </nav>

      <main class='flex flex-col w-full h-full'>
        <NavSpacer />

        <Outlet />
      </main>
    </>
  );
};

export default Navbar;

export const NavSpacer = () => {
  return <div style={{ height: `var(--nav-height)` }} />;
};
