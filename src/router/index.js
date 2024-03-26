import {createRouter, createWebHistory} from 'vue-router';
import MainPageBeforeLogin from '@/views/MainPage/MainPageBeforeLogin/MainPageBeforeLogin.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/mainpagebeforelogin',
            component: MainPageBeforeLogin
        }
    ]
})

export default router;