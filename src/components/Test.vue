<template>

  <div class="row mt-5">
    <form class="row gy-2 gx-3 align-items-center">
      <div class="col-auto">
        <label class="visually-hidden" for="autoSizingInputGroup">Summary</label>
        <div class="input-group">
          <div class="input-group-text">₽</div>
          <input type="text" class="form-control" id="autoSizingInputGroup" placeholder="сумма">
        </div>
      </div>
      <div class="col-auto">
        <label class="visually-hidden" for="year">Year</label>
        <select class="form-select" id="year">
          <option selected>Year...</option>
          <option value="1">2022</option>
          <option value="2">2021</option>
          <option value="3">2020</option>
        </select>
      </div>
      <div class="col-auto">
        <label class="visually-hidden" for="month">Month</label>
        <select class="form-select" id="month">
          <option selected>Month...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class="col-auto">
        <label class="visually-hidden" for="division">Division</label>
        <select class="form-select" id="division">
          <option selected>Division...</option>
          <option value="1">Интеграция</option>
          <option value="2">Франчайзи</option>
          <option value="3">Дистрибьюторы</option>
          <option value="4">Другое</option>
        </select>
      </div>
      <div class="col-auto last-column">
        <button type="submit" class="btn btn-primary">Сохранить</button>
      </div>
      <!--    <div class="col-auto">

          </div>-->
    </form>
  </div>

  <div class="row mt-5 mb-5">
    <div class="table-responsive">
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
  </div>

  <div class="row mb-5">
    <div>
      <button class="btn btn-primary"
              data-bs-target="#collapseTarget"
              data-bs-toggle="collapse"
      >Выпадающий текст
      </button>
      <div class="collapse py-2" id="collapseTarget">This is the toggle-able content!</div>
    </div>
  </div>

  <div class="row mt-5">
    <div>
      <button type="button" class="btn btn-success btn-sm">Просто кнопка</button>
    </div>
  </div>

  <div class="row mt-5">
    <div class="table-responsive">
      <table class="table table-dark table-sm">
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
  </div>

  <div class="row mt-5">
    <div class="table-responsive">
      <table class="table table-striped table-sm">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Header</th>
          <th scope="col">Header</th>
          <th scope="col">Header</th>
          <th scope="col">Header</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1,001</td>
          <td>random</td>
          <td>data</td>
          <td>placeholder</td>
          <td>text</td>
        </tr>
        <tr>
          <td>1,002</td>
          <td>placeholder</td>
          <td>irrelevant</td>
          <td>visual</td>
          <td>layout</td>
        </tr>
        <tr>
          <td>1,003</td>
          <td>data</td>
          <td>rich</td>
          <td>dashboard</td>
          <td>tabular</td>
        </tr>
        <tr>
          <td>1,003</td>
          <td>information</td>
          <td>placeholder</td>
          <td>illustrative</td>
          <td>data</td>
        </tr>
        <tr>
          <td>1,004</td>
          <td>text</td>
          <td>random</td>
          <td>layout</td>
          <td>dashboard</td>
        </tr>
        <tr>
          <td>1,005</td>
          <td>dashboard</td>
          <td>irrelevant</td>
          <td>text</td>
          <td>placeholder</td>
        </tr>
        <tr>
          <td>1,006</td>
          <td>dashboard</td>
          <td>illustrative</td>
          <td>rich</td>
          <td>data</td>
        </tr>
        <tr>
          <td>1,007</td>
          <td>placeholder</td>
          <td>tabular</td>
          <td>information</td>
          <td>irrelevant</td>
        </tr>
        <tr>
          <td>1,008</td>
          <td>random</td>
          <td>data</td>
          <td>placeholder</td>
          <td>text</td>
        </tr>
        <tr>
          <td>1,009</td>
          <td>placeholder</td>
          <td>irrelevant</td>
          <td>visual</td>
          <td>layout</td>
        </tr>
        <tr>
          <td>1,010</td>
          <td>data</td>
          <td>rich</td>
          <td>dashboard</td>
          <td>tabular</td>
        </tr>
        <tr>
          <td>1,011</td>
          <td>information</td>
          <td>placeholder</td>
          <td>illustrative</td>
          <td>data</td>
        </tr>
        <tr>
          <td>1,012</td>
          <td>text</td>
          <td>placeholder</td>
          <td>layout</td>
          <td>dashboard</td>
        </tr>
        <tr>
          <td>1,013</td>
          <td>dashboard</td>
          <td>irrelevant</td>
          <td>text</td>
          <td>visual</td>
        </tr>
        <tr>
          <td>1,014</td>
          <td>dashboard</td>
          <td>illustrative</td>
          <td>rich</td>
          <td>data</td>
        </tr>
        <tr>
          <td>1,015</td>
          <td>random</td>
          <td>tabular</td>
          <td>information</td>
          <td>text</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>

<script>
export default {
  name: "Test",
};
</script>

<style scoped>

.last-column {
  margin-left: auto;
}

.btn-success {
  background-color: #42b983;
  border-color: #42b983;
}
</style>
