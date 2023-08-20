<template>
  <div class="detail-container">
    <h2>Details Page</h2>
    <table class="detail-table">
      <tr>
        <td><strong>ID:</strong></td>
        <td>{{ selectedItem.ID }}</td>
      </tr>
      <tr>
        <td><strong>Car:</strong></td>
        <td>{{ selectedItem.CAR }}</td>
      </tr>
        <tr>
          <td>In Stock:</td>
          <td>
            <input v-model="instock" />
          </td>
        </tr>
        <tr>
          <td>HP:</td>
          <td>
            <input v-model="hp" />
          </td>
        </tr>
        <tr>
          <td>Price:</td>
          <td>
            <input v-model="price" />
          </td>
        </tr>
        <tr>
          <td>Color:</td>
          <td>
            <input v-model="color"/>
          </td>
        </tr>
    </table>
    <div class="footer">
      <button class="save-button" @click="saveChanges">Save</button>
      <router-link class="cancel-button" :to="`/`">Back to List</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useMockDataStore } from "@/store/store";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const mockDataStore = useMockDataStore();
const itemId = Number(route.params.id);
const selectedItem = mockDataStore.data.find(
  (item) => item.ID === Number(route.params.id)
);
const instock = ref(selectedItem.INSTOCK);
const hp = ref(selectedItem.HP);
const price = ref(selectedItem.PRICE);
const color = ref(selectedItem.COLOR);

const saveChanges = () => {
  mockDataStore.updateItem(itemId, {
    INSTOCK: instock.value,
    HP: hp.value,
    PRICE: price.value,
    COLOR: color.value,
  });

  router.push("/");
};

onMounted(() => {
  instock.value = selectedItem.INSTOCK;
  hp.value = selectedItem.HP;
  price.value = selectedItem.PRICE;
  color.value = selectedItem.COLOR;
});
</script>

<style>
.detail-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.detail-table {
  border-collapse: collapse;
  width: 80%;
  margin-top: 20px;
}

.detail-table td {
  border: 1px solid #ddd;
  padding: 8px;
}

.detail-table td:first-child {
  font-weight: bold;
}

.footer {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin: 25px;
}

.save-button {
  background-color: green;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 8px;
}

.save-button:hover {
  background-color: darkgreen;
}

.cancel-button {
  background-color: red;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 8px;
  text-decoration: none;
}

.cancel-button:hover {
  background-color: darkred;
}
</style>
