import { gql } from 'graphql-request';

export const getAllBrands = gql`
  query getAllBrands($preview: Boolean!) {
    pages: brandCollection(preview: $preview) {
      total
      items {
        heading
        body
      }
    }
  }
`;