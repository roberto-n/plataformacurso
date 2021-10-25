import Vue from "vue";
import VueRouter from "vue-router";
import alunos from '../pages/alunos';
import cursos from '../pages/cursos';
import matriculas from '../pages/matriculas';




Vue.use(VueRouter);



const routes = [{
    name:'alunos',
    path:'/alunos',
    component:alunos,},


{name:'cursos',
    path:'/cursos/',
    component:cursos},

{name:'matriculas',
path:'/matriculas',
component:matriculas},
]


 
const router = new VueRouter({
    mode:'history',
    routes,
   
});

export default router