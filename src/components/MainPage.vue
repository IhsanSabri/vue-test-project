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
  height: 100vh; /* Set height to fill the viewport */
}

.data-table {
  border-collapse: collapse; /* Collapse borders between cells */
  width: 80%; /* Set table width as needed */
  margin: 0 auto; /* Center the table */
}

.data-table th,
.data-table td {
  border: 1px solid #ddd; /* Add borders to cells */
  padding: 8px; /* Add padding to cells */
  text-align: center; /* Center-align cell content */
}

.data-table th {
  background-color: #f2f2f2; /* Add background color to header cells */
}

.data-table tbody tr:nth-child(even) {
  background-color: #f2f2f2; /* Alternate background color for rows */
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
