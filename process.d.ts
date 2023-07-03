declare namespace NodeJS {
  export interface ProcessEnv {
    NEXT_PUBLIC_SITE_URL: string;
    NEXT_PUBLIC_MESSENGER_PAGE_ID: string;
    NEXT_PUBLIC_GOOGLE_TRACKING: string;
    NEXT_PUBLIC_SEGMENT_TRACKING: string;
    NEXT_SHARP_PATH: string;
  }
}
