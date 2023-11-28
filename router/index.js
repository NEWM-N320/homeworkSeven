//router 

//import files for router
import {createRouter, createWebHistory } from "vue-router";

//importing the views needed

//default + member view
import MemberView from '../views/MemberView.vue';

//teams view
import TeamsView from '../views/TeamsView.vue';

//create the routes needed 

const routs = [
        //home path, which is the default 
        {
                path: '/',
                name: 'home',
                component: MemberView
        },

        //member path, same as the default

        {
                path: '/members',
                name: 'members',
                component: MemberView
        },

        //teams path, displaying the teams + team members
        {
                path: '/teams',
                name: 'teams',
                component: TeamsView
        }
]

//create and export the router

//create router
const router = createRouter({
        history: createWebHistory(),
        routes
});

//export the router
export default router;