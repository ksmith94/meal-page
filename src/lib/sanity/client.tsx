import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: process.env.REACT_APP_SANITY_API_KEY,
  dataset: process.env.REACT_APP_SANITY_DATASET,
  useCdn: true,
  apiVersion: '2023-05-31',
  token: process.env.REACT_APP_SANITY_TOKEN
})