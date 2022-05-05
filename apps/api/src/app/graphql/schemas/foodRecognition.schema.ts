import { gql } from 'apollo-server-express';

export default gql`
  type TNutrient {
    protein: Int
    fat: Int
    carb: Int
  }
  type TClassificationResult {
    accuracy: String
    foodName: String
    nutrients: TNutrient
    referenceWeight: String
  }

  type Query {
    predictImage(image: Upload!): TClassificationResult
  }
`;
