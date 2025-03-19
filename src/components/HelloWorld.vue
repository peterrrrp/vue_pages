<template>

  <div class="container-fluid pageBody d-flex justify-content-center align-items-center">

    <div class="pageContents col-lg-8 col-md-10 col-12 mx-auto p-4 shadow">
      
      <div class="row justify-content-center text-center">

        <div class="col-lg-6 col-md-8 col-12">

          <p>Por favor, informe seu CPF para verificar seus Pontos:</p>
          <input type="text" name="cpfInforme" class="form-control mb-2"/>
          <button for="cpfInforme" @click="showTable" class="btn btn-primary">Enviar</button>

        </div>

      </div>


      <div v-if="tableShow" class="row justify-content-center mt-4">

        <div class="col-lg-10 col-md-12 col-12">
        
          <table class="table table-bordered text-center">
            <thead class="thead-dark">
              <tr>
                <th class="tableTitles">Nome</th>
                <th class="tableTitles">E-mail</th>
                <th class="tableTitles">Pontos Atuais</th>
                <th class="tableTitles">Desconto Máximo</th>
                <th class="tableTitles">Pontos Totais</th>
              </tr>
            </thead>
        
            <tbody>
              <tr>
                <td class="tableContent" id="custumerName">Example</td>
                <td class="tableContent" id="custumerEmail">Example</td>
                <td class="tableContent" id="custumerPointsNow">Example</td>
                <td class="tableContent" id="custumerMaxDiscount">Example</td>
                <td class="tableContent" id="custumerPointsTotal">Example</td>
              </tr>
            </tbody>
        
          </table>
        
        </div>
      
      </div>

    
    </div>
  
  </div>

</template>

<script>

  export default {
    name: 'HelloWorld',
    data() {
      return {
        tableShow: false
      };
    },
    methods: {
      showTable() {
        this.tableShow = true;
      }
    }
  };
</script>

<style scoped>

.pageBody {
  background-color: #708090;
}

.pageContents {
  background-color: #f0f0ff;
  border-radius: 10px;
  border: 2px solid #304050;
}

.tableTitles{
  font-weight: bold;
  text-transform: uppercase;
}

</style>