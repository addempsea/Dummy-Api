<template>
  <tr>
    <th scope="row">{{tableDetails.id}}</th>
    <td>{{tableDetails.employee_name}}</td>
    <td>{{tableDetails.employee_salary}}</td>
    <td>{{tableDetails.employee_age}}</td>
    <button @click="deleteData" class="btn btn-outline-danger mt-1">Delete</button>
    <button @click="editItem" class="btn btn-outline-secondary mx-4 mt-1">Edit data</button>
  </tr>
</template>

<script>
export default {
  name: "TableView",
  props: {
    tableDetails: Object
  },

  methods: {
    deleteData() {
      this.$http
        .delete(
          `http://dummy.restapiexample.com/api/v1/delete/${this.tableDetails.id}`
        )
        .then(response => {
          alert("Data Deleted Successfully");
          alert(response.data.id);
          this.$emit("reload");
        });
    },

    editItem() {
      this.$router.push({
        name: "edit-data",
        params: { id: this.tableDetails.id }
      });
    }
  }
};
</script>