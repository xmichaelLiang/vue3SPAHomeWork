<template>
  <div class="container mt-5">
    <h2>會議室預約</h2>
    <form @submit.prevent="bookRoom">
      <div class="form-group">
        <label for="room">選擇會議室</label>
        <select v-model="selectedRoom" class="form-control" id="room" required>
          <option v-for="room in rooms" :key="room.id" :value="room.id">{{ room.name }}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="date">預約日期</label>
        <input type="date" v-model="reservationDate" class="form-control" id="date" required />
      </div>
      <div class="form-group">
        <label for="time">預約時間</label>
        <input type="time" v-model="reservationTime" class="form-control" id="time" required />
      </div>
      <button type="submit" class="btn btn-primary">預約</button>
    </form>
    <div v-if="message" class="alert alert-info mt-3">{{ message }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      rooms: [],
      selectedRoom: '',
      reservationDate: '',
      reservationTime: '',
      message: ''
    };
  },
  computed: {
    ...mapState(['isAuthenticated'])
  },
  methods: {
    async fetchRooms() {
      // Fetch available rooms from the API
      const response = await fetch('/api/rooms');
      this.rooms = await response.json();
    },
    async bookRoom() {
      const response = await fetch('/api/reserve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.$store.state.token}`
        },
        body: JSON.stringify({
          roomId: this.selectedRoom,
          date: this.reservationDate,
          time: this.reservationTime
        })
      });
      if (response.ok) {
        this.message = '預約成功！';
      } else {
        this.message = '預約失敗，請稍後再試。';
      }
    }
  },
  created() {
    if (this.isAuthenticated) {
      this.fetchRooms();
    } else {
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 600px;
}
</style>