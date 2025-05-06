import { SearchIcon } from 'lucide-react';

import { DUMMY_CATEGORY, DUMMY_MENU } from '@/utils/constant';

import { Input, Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/elements';

import { CardMenu } from '@/features/menu/components';

const ListMenuSection = () => {
  return (
    <div className="mx-auto w-full rounded-lg pb-20 xl:w-3/4">
      <Tabs defaultValue="All Category">
        <div className="sticky top-0 z-10 flex w-full flex-col gap-5 bg-white pt-5">
          <div className="flex w-full flex-row flex-wrap items-center justify-between gap-5">
            <h2 className="text-lg font-bold">Categories</h2>
            <Input
              placeholder="Search"
              className="w-[214px]"
              leftIcon={<SearchIcon size={18} className="text-gray" />}
            />
          </div>

          <div className="hide-scrollbar z-10 h-fit w-full overflow-x-scroll py-2">
            <TabsList>
              {DUMMY_CATEGORY.map((item) => (
                <TabsTrigger key={item.id} value={item.category}>
                  {item.category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </div>

        <TabsContent
          value="All Category"
          className="grid w-full place-items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {DUMMY_MENU.map((item, index) => (
            <CardMenu
              key={index}
              image={item.image}
              name={item.name}
              category={item.category}
              price={item.price}
            />
          ))}
        </TabsContent>
        <TabsContent value="Drinks">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
};
export default ListMenuSection;
