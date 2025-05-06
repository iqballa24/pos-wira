import BottomBar from '@/components/layouts/cashier-layout/bottom-bar';
import TopBar from '@/components/layouts/cashier-layout/top-bar';

const CashierLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <TopBar />

      <main className="pt-[70px]">{children}</main>

      <BottomBar />
    </>
  );
};

export default CashierLayout;
