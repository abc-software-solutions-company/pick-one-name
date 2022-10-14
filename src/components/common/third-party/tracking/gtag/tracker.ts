// https://developers.google.com/analytics/devguides/collection/gtagjs/pages

import {ITrackEventParams} from '../types';

declare global {
  interface Window {
    gtag: any;
  }
}

export const ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

export const page = (url: string) => {
  if (ID && typeof window === undefined) return;
  window.gtag('config', ID, {page_path: url});
};

export const event = ({name, properties}: ITrackEventParams) => {
  if (ID && typeof window === undefined) return;
  window.gtag('event', name, properties);
};

const tracker = {ID, page, event};

export default tracker;
