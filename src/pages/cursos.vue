<template>
  <div class="pg">
<form>
    <label>Titulo</label>
    <input type="text" name="titulo" v-model="cadastro.titulo">
    <label>Descrição</label>
    <input type="text" name="descrição" v-model="cadastro.descrição">
    <button  type="submit" @click.prevent="Pesquisar">Pesquisar</button>
    <button type="submit" @click.prevent="Salvar">Cadastrar</button>
</form>
<table>
     <tr>
         <th>titulo</th>
         <th>descrição</th>
         <th>editar</th>
         <th>deletar</th>
     </tr >
     <tr v-for="(cadastro, index) in listar" :key="index" >
    <td >
   {{cadastro.titulo}}
   </td>
   <td >
   {{cadastro.descrição}}
   </td>
    <td >
   <button @click="Editar(cadastro)">editar</button>
    </td>
     <td >
   <button @click="Deletar(cadastro)">deletar</button>
    </td>
    </tr>
 </table>




</div>
</template>

<script>
import api from '@/services/api'
export default {
data(){
    return{
       listar : " " ,
      cadastro:{
      titulo:"",
      descrição:"",
      id:"",
      
      
        }
    }
},
methods:{

  Salvar(){
    
      if(!this.cadastro.id){
      api.post('curso',this.cadastro)
     .then(response =>{ console.log(response)})
     .catch(error =>{
     console.log(error.response)
      });
      }else{
      api.put('curso/'+this.cadastro.id,this.cadastro).then(response =>{ console.log(response)
      })
      .catch(error => {
    console.log(error.response)
      });}},
  Pesquisar(){
    api.get('curso/'+this.cadastro.titulo).then( (response)=> {
    this.listar=response.data
    console.log(response)
    return this.listar})},
  Editar(cadastro){
    this.cadastro=cadastro
  },
  Deletar(cadastro){
  api.delete('curso/'+cadastro.id)}
}
}



</script>

<style>

</style>