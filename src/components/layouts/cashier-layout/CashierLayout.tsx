import { Fragment } from 'react';

import BottomBar from '@/components/layouts/cashier-layout/bottom-bar';
import TopBar from '@/components/layouts/cashier-layout/top-bar';

const CashierLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Fragment>
      <TopBar />
      <main className="pt-[56px] md:pt-[70px]">{children}</main>
      <BottomBar />
    </Fragment>
  );
};

export default CashierLayout;
