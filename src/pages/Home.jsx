import { Helmet } from 'react-helmet-async';
import Hero from '../components/sections/Hero';
import PopularDestinations from '../components/sections/PopularDestinations';
import ServiceTiles from '../components/sections/ServiceTiles';
import LuxuryVillas from '../components/sections/LuxuryVillas';
import VacationGrid from '../components/sections/VacationGrid';
import TestimonialsStrip from '../components/sections/TestimonialsStrip';
import PlanCta from '../components/sections/PlanCta';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>YOLO Trips — Plan your next hassle-free holiday</title>
        <meta
          name="description"
          content="Customised holiday packages, flights, visas and luxury villas. 4.6 Google rated, 95% visa success, 24×7 concierge."
        />
      </Helmet>
      <Hero />
      <PopularDestinations />
      <ServiceTiles />
      <LuxuryVillas />
      <VacationGrid />
      <TestimonialsStrip />
      <PlanCta />
    </>
  );
}
