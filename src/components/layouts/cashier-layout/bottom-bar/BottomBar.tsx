'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/utils';
import { MENUS } from '@/utils/constant';

const BottomBar = () => {
  const pathname = usePathname();

  return (
    <section
      role="navigation"
      aria-label="navigation"
      className="fixed inset-x-0 bottom-0 h-[56px] w-full bg-white md:hidden"
    >
      <ul className="relative flex size-full flex-row items-center shadow-md">
        {MENUS.map((menu) => (
          <li
            key={menu.id}
            title={menu.menu}
            className="size-full flex-1 items-center justify-center"
          >
            <Link
              href={menu.path}
              className={cn(
                'flex size-full flex-col items-center justify-center gap-1 text-xs text-gray hover:text-primary',
                pathname === menu.path ? 'border-t border-primary text-primary' : '',
              )}
            >
              <menu.icon size={16} />
              {menu.menu}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BottomBar;
