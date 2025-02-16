<template>
  <div class="container mt-5">
    <h1>會議室管理</h1>
    <div v-if="isAdmin">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">會議室名稱</th>
            <th scope="col">狀態</th>
            <th scope="col">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="room in meetingRooms" :key="room.id">
            <td>{{ room.name }}</td>
            <td>{{ room.status }}</td>
            <td>
              <button class="btn btn-warning" @click="editRoom(room.id)">編輯</button>
              <button class="btn btn-danger" @click="deleteRoom(room.id)">刪除</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button class="btn btn-primary" @click="addRoom">新增會議室</button>
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
      meetingRooms: [],
    };
  },
  computed: {
    ...mapState(['isAdmin']),
  },
  methods: {
    fetchMeetingRooms() {
      // API call to fetch meeting rooms
      // this.meetingRooms = response.data;
    },
    editRoom(id) {
      // Logic to edit the meeting room
    },
    deleteRoom(id) {
      // Logic to delete the meeting room
    },
    addRoom() {
      // Logic to add a new meeting room
    },
  },
  mounted() {
    this.fetchMeetingRooms();
  },
};
</script>

<style scoped>
.table {
  margin-top: 20px;
}
</style>