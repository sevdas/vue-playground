import { GraphQLClient } from 'graphql-request';

interface Variables {
  preview?: boolean;
  [key: string]: string | number | boolean | undefined;
}

const contentfulClient = (preview?: boolean) =>
  new GraphQLClient(
    `https://graphql.contentful.com/content/v1/spaces/${import.meta.env.VITE_CONTENTFUL_SPACE_ID}/environments/${import.meta.env.VITE_CONTENTFUL_ENVIRONMENT}`,
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_CONTENTFUL_DELIVERY_API_ACCESS_TOKEN}`,
      },
    }
  );

export const gqlClient = (query: string, variables?: Variables) =>
  contentfulClient(variables?.preview).request(query, variables);


  