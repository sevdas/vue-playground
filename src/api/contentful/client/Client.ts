import { GraphQLClient } from 'graphql-request';

interface Variables {
  preview?: boolean;
  [key: string]: string | number | boolean | undefined;
}

const contentfulClient = (preview?: boolean) =>
  new GraphQLClient(
    `https://graphql.contentful.com/content/v1/spaces/7tgeqqaaa99u/environments/master`,
    {
      headers: {
        Authorization: `Bearer MhbgYwgSUh_e7HxNPvaiL4wWZTBxkWxUVGYvbWx4Bdk`,
      },
    }
  );

export const gqlClient = (query: string, variables?: Variables) =>
  contentfulClient(variables?.preview).request(query, variables);


  // TODO: Integrate env variables contentful access token = Content Delivery API - access token
  