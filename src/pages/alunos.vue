<template>
<div class="pg">
<form>
    <label> Nome </label>
    <input type="text" name="nome" v-model="cadastro.nome">
    <label>Email</label>
    <input type="text" name="email" v-model="cadastro.email">
    <label>Data De Nacimento</label>
    <input type="num" name="data_de_nacimento" v-model="cadastro.data_de_nacimento">
    <label> Curso</label>
    <input type="text" name="titulo" v-model="cadastro.titulo">
    <button  type="submit" @click.prevent="Pesquisar">Pesquisar</button>
    <button type="submit" @click.prevent="Salvar">Cadastrar</button>
</form>
<table>
     <tr>
         <th>nome</th>
         <th>email</th>
         <th>data de nacimento</th>
         <th>curso</th>
         <th>id</th>
         <th>editar</th>
         <th>deletar</th>
     </tr >
     <tr v-for="(cadastro, index) in listar" :key="index" >
    <td >
   {{cadastro.nome}}
   </td>
   <td >
   {{cadastro.email}}
   </td>
   <td >
   {{cadastro.data_de_nacimento}}
    </td>
     <td >
   {{cadastro.titulo}}
    </td>
    <td >
   {{ cadastro.id }}
    </td>
    <td >
   <button @click.prevent="Editar(cadastro)">editar</button>
    </td>
     <td >
   <button @click.prevent="Deletar(cadastro)">deletar</button>
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
      nome:'',
      email:'',
      data_de_nacimento: '',
      id:"",
      titulo:'',
      response_erro:""
      
      
        }
    }
},
methods:{

  Salvar(){
     
     if(!this.cadastro.id){
      api.post('aluno',this.cadastro).then(response =>{console.log(response)})
     .catch(error =>{console.log(error.response)});
    }else{
      api.put('aluno/'+this.cadastro.id,this.cadastro).then(response =>{console.log(response)})
      .catch(error => {console.log(error.response)});}},
  Pesquisar(){
    if(!this.cadastro.nome){
    api.get('email/'+this.cadastro.email,).then( (response)=> {
    this.listar=response.data
    console.log(response)
    console.log(this.listar)
    return this.listar})}else{
    api.get('aluno/'+this.cadastro.nome,).then( (response)=> {
    this.listar=response.data
    console.log(response)
    console.log(this.listar)
    return this.listar})
    }},
  Editar(cadastro){
    this.cadastro=cadastro
  },
  Deletar(cadastro){
  api.delete('aluno/'+cadastro.id)}
}
}
</script>

<style>

</style>