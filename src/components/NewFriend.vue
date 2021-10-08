<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name</label>
      <input type="text" v-model="enteredName" />
    </div>
    <div>
      <label>Phone</label>
      <input type="tel" v-model="enteredPhone" />
    </div>
    <div>
      <label>E-Mail</label>
      <input type="email" v-model="enteredEmail" />
    </div>
    <div>
      <button>Add Contact</button>
    </div>
  </form>
  <ul v-if="!isLoading && error">
    <li>{{ error }}</li>
  </ul>
</template>

<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
      isLoading: false,
      error: null,
      enteredName: "",
      enteredPhone: "",
      enteredEmail: "",
    };
  },
  methods: {
    submitData() {
      this.isLoading = true;
      this.error = null;
      fetch(
        "https://fir-vue-a0eb5-default-rtdb.asia-southeast1.firebasedatabase.app/friend.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: this.enteredName,
            phone: this.enteredPhone,
            email: this.enteredEmail,
            isFavorite: false,
          }),
        }
      )
        .then((response) => {
          if (response.ok) {
            this.isLoading = false;
            this.enteredName = "";
            this.enteredPhone = "";
            this.enteredEmail = "";
          } else {
            throw new Error("Could not save data!");
          }
        })
        .catch((error) => {
          console.log("error", error);
          this.isLoading = false;
          this.error = error.message;
        });
    },
  },
};
</script>

<style scoped>
#app button {
  border: 1px solid #0091ff;
  border-radius: 10px;
  background-color: #0091ff;
  padding: 0.5rem 1rem;
}
</style>
