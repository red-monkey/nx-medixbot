import { gql } from 'apollo-server-express';

export default gql`
  type TNutrient {
    protein: String
    fat: String
    carb: String
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
