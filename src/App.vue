<template>
<div class="pg">

    <nav class="nav">
    <p>
    CURSO ONLINE XPTO
    </p>
    <p class="links">
    <router-link to="/alunos">alunos</router-link>
    <router-link to="/matriculas">matriculas</router-link>
    <router-link to="/cursos">cursos</router-link>
    </p>
    </nav>

   <router-view />
   <div class="rodape">
    <p>
    © 2021 CURSO ONLINE XPTO TODOS OS DIREITOS RESERVADOS 
    </p>
   </div>
   </div>
</template>

<script>


</script>

<style>
#app {
  margin:0;
    padding:0;
    
    width: 100%;
    height: 100%;
  margin:0;
    padding:0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
.pg{
     margin:0;
    padding:0;
    
    width: 100%;
    height: 100%;

}
.nav{
  margin:0px;
  padding:25px;
  width: 100%;
  height: 50px;
  background-color: LavenderBlush;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;


}
.rodape{
  margin:0;
  padding:0;
  background-color:Gray;
  display:flex;
  box-sizing: border-box;
  align-items: flex-end;
}
.links{
  margin:25px;
  padding:0px;
  width: 250px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  
}

</style>
