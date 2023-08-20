<template>
  <div class="center-container">
    <table class="data-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Car</th>
          <th>In Stock</th>
          <th>HP</th>
          <th>Price</th>
          <th>Color</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in mockData" :key="item.ID">
          <td>{{ item.ID }}</td>
          <td>{{ item.CAR }}</td>
          <td>{{ item.INSTOCK }}</td>
          <td>{{ item.HP }}</td>
          <td>{{ item.PRICE }}</td>
          <td
            style="display: flex; justify-content: center; align-items: center"
          >
            {{ item.COLOR }}:<span
              class="color-pallete-display"
              :style="`background-color:${item.COLOR}`"
            ></span>
          </td>
          <td>
            <router-link class="edit-button" :to="`/details/${item.ID}`"
              >Edit</router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useMockDataStore } from "@/store/store";

const mockDataStore = useMockDataStore();
const mockData = mockDataStore.data;
</script>

<style>
.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.data-table {
  border-collapse: collapse;
  width: 80%;
  margin: 0 auto;
}

.data-table th,
.data-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

.data-table th {
  background-color: #f2f2f2;
}

.data-table tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}

.color-pallete-display {
  width: 25px;
  height: 15px;
  margin-left: 5px;
}

.edit-button {
  background: #5b9bd5;
  display: block;
  border-radius: 15px;
}
</style>
