<template>
  <div class="container">
    <h1>Edit {{ item.employee_name }}</h1>
    <form class="form-group" @submit.prevent="editData">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">employee_name</span>
        </div>
        <input
          type="text"
          class="form-control"
          aria-label="Username"
          aria-describedby="basic-addon1"
          v-model="item.employee_name"
        />
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">profile_image</span>
        </div>
        <input
          type="text"
          class="form-control"
          aria-label="Username"
          aria-describedby="basic-addon1"
          v-model="item.profile_image"
        />
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1"
            >employee_salary</span
          >
        </div>
        <input
          type="text"
          class="form-control"
          aria-label="Username"
          aria-describedby="basic-addon1"
          v-model="item.employee_salary"
        />
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">employee_age</span>
        </div>
        <input
          type="text"
          class="form-control"
          aria-label="Username"
          aria-describedby="basic-addon1"
          v-model="item.employee_age"
        />
      </div>

      <button class="btn btn-info">Edit Data</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "edit",
  data() {
    return {
      item: {
        employee_name: "",
        employee_salary: "",
        employee_age: "",
        profile_image: "",
        id: ""
      }
    };
  },

  mounted() {
    this.$http
      .get(
        `http://dummy.restapiexample.com/api/v1/employee/${this.$route.params.id}`
      )
      .then(response => {
        this.item = response.data;
      })
      .catch(error => {
       alert(error.response);
      });
  },

  methods: {
    editData() {
      this.$http
        .put(
          `http://dummy.restapiexample.com/api/v1/update/${this.$route.params.id}`,
          this.item
        )
        .then(response => {
          alert(response.data.id);
          alert("edited");
        })
        .catch(error => {
          alert(error.response);
        });
    }
  }
};
</script>
