import api from "../defaultApi/DefaultApi";



export function getDeckAmount(amount: number) {
  return api.get(`/new/shuffle/?deck_count=${amount}`);
}
