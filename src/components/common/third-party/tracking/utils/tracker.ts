import gtagTracker from '../gtag/tracker';
import segmentTracker from '../segment/tracker';
import {ITrackEventParams} from '../types';

export const page = (url: string) => {
  gtagTracker.page(url);
  segmentTracker.page(url);
};

export const event = (params: ITrackEventParams) => {
  gtagTracker.event(params);
  segmentTracker.event(params);
};

const tracker = {page, event};

export default tracker;
