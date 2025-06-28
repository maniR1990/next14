export const GA_MEASUREMENT_ID = "G-QTG7KF18GL"; // Replace with your GA ID

export const pageview = (url: string) => {
  (window as any).gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

interface GAEventParams {
  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: string | number | undefined;
}

export const event = (action: string, params: GAEventParams) => {
  (window as any).gtag("event", action, params);
};
