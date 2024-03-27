import {createRouter, createWebHistory} from 'vue-router';
import MainPageBeforeLogin from '@/views/MainPage/MainPageBeforeLogin/MainPageBeforeLogin.vue';
import WriteStudyGroupArticle from '@/views/WriteArticle/WriteStudyGroupArticle/WriteStudyGroupArticle.vue'
import ViewStudyGroupArticle from '@/views/ViewArticle/ViewStudyGroupArticle/ViewStudyGroupArticle.vue'
import ModifyStudyGroupArticle from '@/views/ModifyArticle/ModifyStudyGroupArticle/ModifyStudyGroupArticle.vue'
import ViewUserProfile from '@/views/UserProfile/VIewUserProfile/VIewUserProfile.vue';
import ViewUserAllActivationLogReply from '@/views/UserProfile/ViewUserAllActivationLog/Reply/Reply.vue';
import ViewUserAllActivationLogArticle from '@/views/UserProfile/ViewUserAllActivationLog/Article/Article.vue';
import ViewOtherUserProfile from '@/views/UserProfile/ViewOtherUserProfile/ViewOtherUserProfile.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: MainPageBeforeLogin
        },
        {
            path: '/writeStudyGroupArticle',
            component: WriteStudyGroupArticle
        },
        {
            path: '/viewStudyGroupArticle',
            component: ViewStudyGroupArticle
        },
        {
            path: '/modifyStudyGroupArticle',
            component: ModifyStudyGroupArticle
        },
        {
            path: '/viewuserprofile',
            component: ViewUserProfile
        },
        {
            path: '/viewuserallactivationlogreply',
            component: ViewUserAllActivationLogReply
        },
        {
            path: '/viewuserallactivationlogarticle',
            component: ViewUserAllActivationLogArticle
        },
        {
            path: '/viewotheruserprofile',
            component: ViewOtherUserProfile
        }
    ]
})

export default router;