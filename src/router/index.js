import {createRouter, createWebHistory} from 'vue-router';
import MainPageBeforeLogin from '@/views/MainPage/MainPageBeforeLogin/MainPageBeforeLogin.vue';
import ViewUserProfile from '@/views/UserProfile/ViewUserProfile/VIewUserProfile.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: MainPageBeforeLogin
        },
        {
            path: '/viewuserprofile',
            component: ViewUserProfile
        }
    ]
})

export default router;