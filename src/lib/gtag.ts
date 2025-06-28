export const GA_MEASUREMENT_ID = "G-QTG7KF18GL"; // Replace with your GA ID

type GTagFunction = (...args: unknown[]) => void;

export const pageview = (url: string) => {
  const gtag = (window as Window & { gtag?: GTagFunction }).gtag;
  gtag?.("config", GA_MEASUREMENT_ID, {
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
  const gtag = (window as Window & { gtag?: GTagFunction }).gtag;
  gtag?.("event", action, params);
};
