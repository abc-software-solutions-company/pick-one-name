//https://segment.com/docs/connections/
import {ITrackEventParams} from '../types';

declare global {
  interface Window {
    analytics: any;
  }
}

export const ID = process.env.NEXT_PUBLIC_SEGMENT_ANALYTICS;

export const page = (url: string) => {
  if (!ID && typeof window === undefined) return;
  return window.analytics.page(url);
};

export const event = ({name, properties}: ITrackEventParams) => {
  if (ID && typeof window === undefined) return;
  return window.analytics.track(name, properties);
};

const tracker = {ID, page, event};

export default tracker;
