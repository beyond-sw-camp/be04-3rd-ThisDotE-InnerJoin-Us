import {createRouter, createWebHistory} from 'vue-router';
import MainPageBeforeLogin from '@/views/MainPage/MainPageBeforeLogin/MainPageBeforeLogin.vue';
import LoginView from '@/views/MainPage/MainPageLogin/MainPageLogin.vue';
import WriteStudyGroupArticle from '@/views/WriteArticle/WriteStudyGroupArticle/WriteStudyGroupArticle.vue'
import ViewStudyGroupArticle from '@/views/ViewArticle/ViewStudyGroupArticle/ViewStudyGroupArticle.vue'
import ModifyStudyGroupArticle from '@/views/ModifyArticle/ModifyStudyGroupArticle/ModifyStudyGroupArticle.vue'
import ViewUserProfile from '@/views/UserProfile/VIewUserProfile/VIewUserProfile.vue';
import ViewUserAllActivationLogReply from '@/views/UserProfile/ViewUserAllActivationLog/Reply/Reply.vue';
import ViewUserAllActivationLogArticle from '@/views/UserProfile/ViewUserAllActivationLog/Article/Article.vue';
import ViewOtherUserProfile from '@/views/UserProfile/ViewOtherUserProfile/ViewOtherUserProfile.vue';
import ViewAllHotStudyGroupArticle from '@/views/ViewAllArticleHot/ViewAllHotStudyGroupArticle/ViewAllHotStudyGroupArticle.vue';
import ViewAllStudyGroupArticle from '@/views/ViewAllArticleRecently/ViewAllStudyGroupArticle/ViewAllStudyGroupArticle.vue';
import ViewAllStudyGroupArticleToggle from '@/views/ViewAllArticleToggle/ViewAllStudyGroupArticleToggle/ViewAllStudyGroupArticleToggle.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [

        /* Main */
        {
            path: '/',
            component: MainPageBeforeLogin
        },
        {
            path: '/login',
            component: LoginView
        },

        /* Article */
        {
            path: '/writeStudyGroupArticle',
            component: WriteStudyGroupArticle
        },
        {
            path: '/viewStudyGroupArticle/:id',
            component: ViewStudyGroupArticle
        },
        {
            path: '/modifyStudyGroupArticle',
            component: ModifyStudyGroupArticle
        },

        /* Profile */
        {
            path: '/viewuserprofile/:id',
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
        },
        {
            path: '/viewallhotstudygrouparticle',
            component: ViewAllHotStudyGroupArticle
        },
        {
            path: '/viewallstudygrouparticle',
            component: ViewAllStudyGroupArticle
        },
        {
            path: '/viewallstudygrouparticletoggle',
            component: ViewAllStudyGroupArticleToggle
        }
    ]
})

export default router;