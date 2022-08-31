import axios, { AxiosInstance } from 'axios';
import { FOOD_CLASSIFIER_API } from '@env';

class FoodClassifierService {
  private apiClient: AxiosInstance;

  constructor() {
    this.apiClient = axios.create({
      baseURL: FOOD_CLASSIFIER_API,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  getFood = () => this.apiClient.get('foods');
  predict = (base64) => this.apiClient.post('predict', { base64 });
}

export default new FoodClassifierService();
