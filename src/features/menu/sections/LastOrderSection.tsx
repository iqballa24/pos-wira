import { DUMMY_ORDER } from '@/utils/constant';

import { Container } from '@/components/elements';
import { CardOrder } from '@/components/shared';

const LastOrderSection = () => {
  return (
    <Container className="flex w-full flex-col gap-4 py-5">
      <h1 className="text-lg font-bold">Last Order</h1>
      <div className="hide-scrollbar flex flex-row gap-4 overflow-x-scroll">
        {DUMMY_ORDER.map((item) => (
          <CardOrder
            key={item.id}
            id={item.id}
            customerName={item.customerName}
            total={item.total}
            price={item.price}
          />
        ))}
      </div>
    </Container>
  );
};

export default LastOrderSection;
