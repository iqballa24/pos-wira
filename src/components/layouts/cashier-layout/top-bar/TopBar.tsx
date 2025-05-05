'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/utils/cn';
import { MENUS } from '@/utils/constant';
import { WiraSvg } from '@/utils/svg';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/elements';

const TopBar = () => {
  const pathname = usePathname();

  return (
    <header className="flex h-[56px] w-full items-center justify-center bg-white px-5 py-4 md:h-[80px]">
      <nav className="mx-auto flex w-full max-w-screen-xl items-center justify-between">
        {/* icon logo section */}
        <WiraSvg />

        {/* navigation section */}
        <ul className="hidden flex-row gap-3 md:flex">
          {MENUS.map((menu) => (
            <li key={menu.id}>
              <Link
                href={menu.path}
                className={cn(
                  'flex flex-row items-center gap-2 p-3 text-sm text-gray hover:cursor-pointer hover:text-primary',
                  pathname === menu.path
                    ? 'border-b border-primary text-primary'
                    : 'relative !no-underline after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100',
                )}
              >
                <menu.icon size="16" />
                {menu.menu}
              </Link>
            </li>
          ))}
        </ul>

        {/* profile section */}
        <Popover>
          <PopoverTrigger>
            <div className="flex flex-row items-center justify-center gap-3">
              <div className="relative size-9 rounded-full bg-border md:size-[50px]">
                <Image
                  width={50}
                  height={50}
                  src="https://avatar.iran.liara.run/public/38"
                  className="rounded-full"
                  alt=""
                />

                <div className="absolute right-0 top-0.5 size-2 rounded-full bg-green-500 md:size-3" />
              </div>

              <div className="hidden flex-col gap-0.5 text-left md:flex">
                <p className="text-xs font-bold md:text-sm">Iqbal Nugraha</p>
                <p className="text-[9px] font-light md:text-xs">Cashier 1</p>
              </div>
            </div>
          </PopoverTrigger>

          <PopoverContent className="mr-2 w-44 md:mr-0">
            <div className="flex flex-col gap-2 text-sm">
              <p>Profile</p>
              <p>Log out</p>
            </div>
          </PopoverContent>
        </Popover>
      </nav>
    </header>
  );
};

export default TopBar;
