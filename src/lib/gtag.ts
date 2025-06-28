// src/lib/gtag.ts
export const GA_MEASUREMENT_ID = 'G-QTG7KF18GL'; // Replace with your GA ID

export const pageview = (url: string) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

export const event = (action: string, params: Record<string, any>) => {
  window.gtag('event', action, params);
};
