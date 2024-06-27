import { TopSection, Navbar, IconsSection, CardTravel, Collaborations, TextSection, ContactSection } from '@/components';
import React from "react";

export default function Home() {
  return (
    <main>
      <TopSection/>
      <IconsSection/>
      <CardTravel/>
      <Collaborations/>
      <TextSection/>
      <ContactSection/>
    </main>
  );
}
