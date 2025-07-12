const isProd = import.meta.env.VITE_MODE === "production";
const domainName = isProd
  ? import.meta.env.VITE_FRONTEGG_DOMAIN_NAME_PROD
  : import.meta.env.VITE_FRONTEGG_DOMAIN_NAME_DEV;

const config = {
  domainName,
  isProd,
  baseUrl: `https://${domainName}.frontegg.com`,
  apiUrl: import.meta.env.VITE_API_URL,
  clientId: import.meta.env.VITE_FRONTEGG_CLIENT_ID,
  apiKey: import.meta.env.VITE_FRONTEGG_API_KEY,
  appId: import.meta.env.VITE_FRONTEGG_APP_ID,
};

export default config;
