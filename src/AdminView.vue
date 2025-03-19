<template>
    <div class="container-fluid pageBody d-flex justify-content-center align-items-center">
      <div class="pageContents col-lg-8 col-md-10 col-12 mx-auto p-4 shadow">
        
        <!-- Breadcrumbs -->
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#" @click="resetState">Início</a></li>
            <li v-if="NewClient" class="breadcrumb-item active" aria-current="page">
              <a href="#" @click="resetState">Novo Cliente</a>
            </li>
            <li v-if="ExistingClient" class="breadcrumb-item active" aria-current="page">
              <a href="#" @click="resetState">Cliente Existente</a>
            </li>
            <li v-if="AddingPoints" class="breadcrumb-item active" aria-current="page">
              <a href="#" @click="resetState">Adicionando Pontos</a>
            </li>
            <li v-if="RemovingPoints" class="breadcrumb-item active" aria-current="page">
              <a href="#" @click="resetState">Removendo Pontos</a>
            </li>
          </ol>
        </nav>
        
        <div class="row">    
        
          <div class="col-6 text-center">
            <div v-if="!NewClient && !ExistingClient" class="row mb-2">
              <button @click="showNewClient" class="btn btn-primary">Novo Cliente</button>
            </div>
            <div v-if="!NewClient && !ExistingClient" class="row">
              <button @click="showExistingClient" class="btn btn-primary">Cliente já cadastrado</button>
            </div>
            
          <div v-if="ExistingClient" class="row">
            <div v-if="!RemovingPoints" class="row mb-2">
              <button @click="showAddingPoints" class="btn btn-primary">Adicionar Pontos</button>
            </div>
            <div v-if="!AddingPoints" class="row mb-2">
              <button @click="showRemovingPoints" class="btn btn-primary">Remover Pontos</button>
            </div>
          </div>

          </div>
          
          <div v-if="NewClient" class="col-6">
            <div class="newClientForms">
              
              


              <table class="tablegit">
                    <tbody>
                    <tr>
                        <th>
                            <label for="newClientName">Nome: </label>
                        </th>
                        <td>
                            <input type="text" name="newClientName" /><br>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label for="newClientEmail">E-mail: </label>
                        </th>
                        <td>
                            <input type="email" name="newClientEmail" />
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label for="newClientCPF">CPF: </label>
                        </th>
                        <td>
                            <input type="text" name="newClientCPF" />
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label for="newClientSale">Valor da Venda:</label>
                        </th>
                        <td>
                            <input type="text" name="newClientSale" /><br>
                        </td>
                    </tr>
                    </tbody>
              </table>
              <button type="submit" class="btn btn-primary">Enviar</button>
            
            </div>
          </div>

          <div v-if="AddingPoints" class="col-6">
            <div class="addingPointsForms">

                <table class="table">
                    <tbody>
                        <tr>
                            <th>
                                <label for="clientCPF">CPF do Cliente</label>
                            </th>
                            <td>
                                <input type="text" name="clientCPF" /><br>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label for="expentValue">Valor da Compra</label>
                            </th>
                            <td>
                                <input type="text" name="expentValue" /><br>
                            </td>
                        </tr>
                    </tbody>

                </table>
                <button type="submit" class="btn btn-primary">Enviar</button>
            </div>
          </div>
          
          <div v-if="RemovingPoints" class="col-6">
            <div class="removingPointsForms">

                <table class="table">
                    <tbody>    
                        <tr>
                            <th>
                                <label for="clientCPF">CPF do Cliente</label>
                            </th>
                            <td>
                                <input type="text" name="clientCPF" /><br>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label for="expentValue">Pontos Gastos Pelo Cliente:</label>
                            </th>
                            <td>
                                <input type="text" name="expentValue" /><br>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit" class="btn btn-primary">Enviar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
  
<script>
export default {
  name: 'AdminView',
  data() {
    return {
      NewClient: false,
      ExistingClient: false,
      AddingPoints: false,
      RemovingPoints: false
    };
  },
  methods: {
    resetState() {
      this.NewClient = false;
      this.ExistingClient = false;
      this.AddingPoints = false;
      this.RemovingPoints = false;
    },
    showNewClient() {
      this.resetState();
      this.NewClient = true;
    },
    showExistingClient() {
      this.resetState();
      this.ExistingClient = true;
    },
    showAddingPoints() {
      this.resetState();
      this.ExistingClient = true;
      this.AddingPoints = true;
    },
    showRemovingPoints() {
      this.resetState();
      this.ExistingClient = true;
      this.RemovingPoints = true;
    }
  }
}
</script>
  
<style scoped>
.pageBody {
  background-color: #708090;
}

.pageContents {
  background-color: #f0f0ff;
  border: 2px solid #304050;
  height: 100vh;
}

tr{
    margin-bottom: 1%;
}
</style>