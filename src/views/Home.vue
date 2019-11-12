<template>
  <span>
    <h1>Employees Data Displayed</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Salary</th>
          <th scope="col">Age</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        <TableView
          v-for="item in tableData"
          :key="item.id"
          :tableDetails="item"
          @reload="fetchData"
        />
      </tbody>
    </table>
  </span>
</template>

<script>
import TableView from "../components/TableView.vue";
export default {
  name: "Home",
  components: {
    TableView
  },

  data() {
    return {
      tableData: []
    };
  },

  mounted() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      this.$http
        .get("http://dummy.restapiexample.com/api/v1/employees")
        .then(response => {
          this.tableData = response.data;
        })
        .catch(error => {
          console.log(error.response);
        });
    }
  }
};
</script>