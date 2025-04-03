interface Window {
  gtag: (
    type: string,
    trackingId: string,
    config: { page_path: string }
  ) => void;
} 