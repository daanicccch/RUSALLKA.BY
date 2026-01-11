import { Hero } from '../../components/sections/Hero';
import { Features } from '../../components/sections/Features';
import { Timeline } from '../../components/sections/Timeline';
import { Pricing } from '../../components/sections/Pricing';
import { Routes } from '../../components/sections/Routes';
import { Gallery } from '../../components/sections/Gallery';
import { Booking } from '../../components/sections/Booking';

export const SkiPage = () => {
  return (
    <div className="pt-16">
      <Hero />
      <Features />
      <Timeline />
      <Pricing />
      <Routes />
      <Gallery />
      <Booking />
    </div>
  );
};
