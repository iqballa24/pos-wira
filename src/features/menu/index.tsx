'use client';

import { Container } from '@/components/elements';

import { LastOrderSection, ListMenuSection } from '@/features/menu/sections';

export default function FeatureMenu() {
  return (
    <>
      <LastOrderSection />
      <Container className="flex w-full flex-col justify-between gap-5 divide-x-8 divide-background xl:flex-row">
        <ListMenuSection />
        <h1 className="w-3/12">hello world</h1>
      </Container>
    </>
  );
}
