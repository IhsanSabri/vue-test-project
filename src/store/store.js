import { defineStore } from 'pinia';
import generateMockData from '../mock/mockData'; // Import the generated mock data

export const useMockDataStore = defineStore('mockData', {
  state: () => ({
    data: generateMockData(10),
  }),
  actions: {
    updateItem(itemId, updatedValues) {
      const itemIndex = this.data.findIndex(item => item.ID === itemId);
      if (itemIndex !== -1) {
        this.data[itemIndex] = { ...this.data[itemIndex], ...updatedValues };
      }
    },
  },
});
