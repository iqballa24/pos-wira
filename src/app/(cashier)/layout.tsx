import { CashierLayout } from '@/components/layouts';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <CashierLayout>{children}</CashierLayout>;
}
