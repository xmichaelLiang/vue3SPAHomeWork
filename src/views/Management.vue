<template>
  <div class="container mt-5">
    <h1>會議室管理</h1>
    <div v-if="isAdmin">
      <button class="btn btn-primary" @click="fetchRooms">載入會議室</button>
      <table class="table mt-3">
        <thead>
          <tr>
            <th>會議室名稱</th>
            <th>狀態</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="room in rooms" :key="room.id">
            <td>{{ room.name }}</td>
            <td>{{ room.status }}</td>
            <td>
              <button class="btn btn-warning" @click="editRoom(room.id)">編輯</button>
              <button class="btn btn-danger" @click="deleteRoom(room.id)">刪除</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <p>您沒有權限訪問此頁面。</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      rooms: [],
    };
  },
  computed: {
    ...mapState(['isAdmin']),
  },
  methods: {
    fetchRooms() {
      // API 呼叫以獲取會議室資料
      // 這裡應該有實際的 API 請求
      this.rooms = [
        { id: 1, name: '會議室 A', status: '可用' },
        { id: 2, name: '會議室 B', status: '已預約' },
      ];
    },
    editRoom(id) {
      // 編輯會議室的邏輯
      console.log(`編輯會議室 ID: ${id}`);
    },
    deleteRoom(id) {
      // 刪除會議室的邏輯
      console.log(`刪除會議室 ID: ${id}`);
    },
  },
  mounted() {
    if (this.isAdmin) {
      this.fetchRooms();
    }
  },
};
</script>

<style scoped>
.table {
  margin-top: 20px;
}
</style>