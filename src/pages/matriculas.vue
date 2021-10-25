<template>
  <div class="pg">
<form>
    <label>Curso</label>
    <input type="text" name="curso" v-model="cadastro.titulo">
    <label>Aluno</label>
    <input type="text" name="aluno" v-model="cadastro.aluno">
    <button  type="submit" @click.prevent="Pesquisar">Pesquisar</button>
    <button type="submit" @click.prevent="Salvar">Cadastrar</button>
</form>
<table>
     <tr>
         <th>cursos</th>
         <th>alunos</th>
     </tr >
     <tr v-for="(cadastro, index) in listar" :key="index" >
    <td >
   {{cadastro.titulo}}
   </td>
   <td >
   {{cadastro.aluno}}
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
      aluno:'',
      titulo:'',
      id:"",
      
        }
    }
},
methods:{

  Salvar(){

    if(!this.cadastro.id){
      api.post('matricula',this.cadastro)
    }else{
      api.put('matricula/'+this.cadastro.id,this.cadastro)}
    }
    ,
    
  Pesquisar(){
    api.get('matricula/'+this.cadastro.titulo).then( (response)=> {
    this.listar=response.data
    console.log(response)
    return this.listar})},
  Editar(cadastro){
    this.cadastro=cadastro
  },
  Deletar(cadastro){
  api.delete('matricula/'+cadastro.id)}
}
}

</script>

<style>

</style>