import { gql } from 'apollo-server-express';

export default gql`
  type TNutrient {
    protein: Int
    fat: Int
    vitamins: Int
  }
  type TClassificationResult {
    accuracy: String
    foodName: String
    nutrients: TNutrient
  }

  type Query {
    predictImage(image: Upload!): TClassificationResult
  }
`;
