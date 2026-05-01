import axios, { AxiosInstance } from 'axios';
import axiosRetry from 'axios-retry';

/**
 * Creates a pre-configured Axios instance with retry logic
 * and standardized error handling.
 */
export const createHttpClient = (config: any = {}): AxiosInstance => {
  const client = axios.create(config);

  // Configure retry logic
  axiosRetry(client, {
    retries: 3,
    retryDelay: (retryCount: number) => {
      console.log(`Retry attempt #${retryCount}`);
      return retryCount * 1000; // time interval between retries
    },
    retryCondition: (error: any) => {
      // Retry on network errors or 5xx status codes
      return (
        axiosRetry.isNetworkOrIdempotentRequestError(error) ||
        (error.response ? error.response.status >= 500 : false)
      );
    },
  });

  return client;
};

// Standard instance for general use
export const httpClient = createHttpClient();
