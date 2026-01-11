import type { ReactNode } from 'react';

export type Feature = {
  icon: ReactNode;
  title: string;
  description: string;
};

export type TimelineItem = {
  day: string;
  title: string;
  description: string;
  icon: ReactNode;
};

export type IncludedItem = {
  icon: ReactNode;
  text: string;
};

export type RouteStop = {
  name: string;
  isMain?: boolean;
};

export type TourDate = {
  start: string;
  end: string;
};

export type BookingFormData = {
  name: string;
  email: string;
  phone: string;
  comment: string;
  agreed: boolean;
};

export type SocialLink = {
  name: string;
  icon: ReactNode;
  url: string;
};
