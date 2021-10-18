<template>

  <div class="row align-items-start mb-4">
    <div>
      <button class="btn btn-primary"
              data-bs-target="#collapseTarget"
              data-bs-toggle="collapse"
      >Выпадающий текст
      </button>
      <div class="collapse py-2" id="collapseTarget">This is the toggle-able content!</div>
    </div>
  </div>

  <div class="row align-items-start mt-5 mb-5">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="row align-items-start mt-4">
    <div>
      <button type="button" class="btn btn-success btn-sm">Просто кнопка</button>
    </div>
  </div>

</template>

<script>
export default {
  name: "Test",
};
</script>

<style scoped>
.btn-success {
  background-color: #42b983;
  border-color: #42b983;
}
</style>
