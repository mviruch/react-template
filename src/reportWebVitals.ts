import type { Metric } from 'web-vitals';

type ReportHandler = (metric: Metric) => void;

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    import('web-vitals').then(
      ({ onCLS, onFCP, onINP, onLCP, onTTFB }) => {
        onCLS(onPerfEntry);
        onFCP(onPerfEntry);
        onINP(onPerfEntry);
        onLCP(onPerfEntry);
        onTTFB(onPerfEntry);
      }
    ).catch((error: unknown) => {
      console.error('Error loading web-vitals:', error);
    });
  }
};

export default reportWebVitals;
