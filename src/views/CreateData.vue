<template>
  <div>
    <template>
      <div>
        <div class="container">
          <form class="form-group" @submit.prevent="submitData">
            <input type="text" placeholder="Name" class="form-control" v-model="newData.employee_name" />
            <input type="text" placeholder="Profile_Image" class="form-control my-3" v-model="newData.profile_image" />
            <input type="text" placeholder="Salary" class="form-control" v-model="newData.employee_salary" />
            <input type="text" placeholder="Age" class="form-control my-3" v-model="newData.employee_age" />
            <button class="btn btn-success">Add Data</button>
          </form>
        </div>
      </div>
    </template>
  </div>
</template>
    
<script>
export default {
  name: "create",
  data() {
    return {
      newData: {
        employee_name: "",
        employee_salary: "",
        employee_age: "",
        profile_image: ""
      }
    };
  },

  methods: {
    submitData() {
      this.$http
        .post("http://dummy.restapiexample.com/api/v1/create", this.newData)
        .then(response => {
          console.log(response)
          this.newData = {
            employee_name: "",
            employee_salary: "",
            employee_age: "",
            profile_image: "",
          };
          alert(`Added!`);
        })
        .catch(error => {
          alert(error.response);
        });
    }
  }
};
</script>