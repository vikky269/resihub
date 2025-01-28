"use client";

import { GoogleAnalytics } from "nextjs-google-analytics";

const AnalyticsWrapper = () => {
  return <GoogleAnalytics trackPageViews />;
};

export default AnalyticsWrapper;
