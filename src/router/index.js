import MainPageBeforeLogin from '@/views/MainPage/MainPageBeforeLogin/MainPageBeforeLogin.vue'
import WriteStudyGroupArticle from '@/views/WriteArticle/WriteStudyGroupArticle/WriteStudyGroupArticle.vue'
import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/mainpagebeforelogin',
            component: MainPageBeforeLogin
        },
        {
            path: '/writeStudyGroupArticle',
            component: WriteStudyGroupArticle
        }
    ]
})
export default router;