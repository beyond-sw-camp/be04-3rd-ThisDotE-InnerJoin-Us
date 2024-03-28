<template>
  <body>
    <div class="screen">
      <div class="div">
        <div class="group">
          <div class="overlap-group"><div v-show="article != null" class="text-wrapper">{{ article.articleTitle }}</div></div>
        </div>
        <div class="overlap-wrapper">
          <div class="overlap">
            <div v-if="article != null" class="text-wrapper-2">{{ article.articleContent }}</div>
            <div class="rectangle"></div>
          </div>
        </div>
        <div class="group-2">
          <div class="group-3">
            <img class="carbon-view" src="../../../assets/img/ViewArticle/ViewStudyGroupArticle/carbon-view.png" />
            <div v-if="article != null" class="text-wrapper-3">{{ article.articleViewCount }}</div>
          </div>
          <div class="group-4">
            <img class="vector" src="../../../assets/img/ViewArticle/ViewStudyGroupArticle/vector.png" />
            <div v-if="article != null" class="text-wrapper-4">{{ article.articleReplyCount }}</div>
          </div>
          <div class="group-5">
            <img class="mdi-like" src="../../../assets/img/ViewArticle/ViewStudyGroupArticle/mdi-like.png" />
            <div v-if="article != null" class="text-wrapper-5">{{ article.articleLikeCount }}</div>
          </div>
          <img class="image" src="../../../assets/img/ViewArticle/ViewStudyGroupArticle/image.png" />
          <div v-if="article !=null" class="text-wrapper-6">{{ article.articleCreateDate }}</div>
        </div>
        <div class="group-6">
          <div class="text-wrapper-7" @click="fetchInfo">정원수</div>
          <div v-if="article != null" type="number" class="rectangle-2" style="text-align: center;">{{ article.studygroupMemberMaxCount }}</div>
          <div class="text-wrapper-8">명</div>
        </div>
        <div class="overlap-group-wrapper">
          <div class="overlap-2">
            <div @click="routerMain()" class="overlap-3">
              <img class="innerjoin-us" src="../../../assets/img/ViewArticle/ViewStudyGroupArticle/innerjoin-us.png" />
              <img class="img" src="../../../assets/img/ViewArticle/ViewStudyGroupArticle/1.png" />
            </div>
            <div class="view">
              <div class="overlap-group-2">
                <div class="text-wrapper-9">검색</div>
                <img class="mdi-magnify" src="../../../assets/img/ViewArticle/ViewStudyGroupArticle/mdi-magnify.png" />
              </div>
            </div>
            <div class="vector-wrapper">
              <img class="vector-2" src="../../../assets/img/ViewArticle/ViewStudyGroupArticle/vector-1.png" />
            </div>
          </div>
        </div>
        <div class="group-7">
          <div class="div-wrapper">
            <div class="overlap-group-3"><div class="text-wrapper-10">댓글</div></div>
          </div>
          <img class="image-2" src="../../../assets/img/ViewArticle/ViewStudyGroupArticle/img/2.png" />
          <div class="rectangle-3">
            <input type="text" placeholder="댓글 작성" style="border: 0px; border-radius: 5px; background-color: #d9d9d94f; width: 490px; height: 20px;">
          </div>
          <img class="mingcute-send-plane" src="../../../assets/img/ViewArticle/ViewStudyGroupArticle/mingcute-send-plane-fill.png"/>
        </div>

          <div class="group-8">
            <img class="image-3" src="../../../assets/img/ViewArticle/ViewStudyGroupArticle/7.png" />
            <div v-if="article.replyDTOList" class="text-wrapper-11">{{article.replyDTOList[0].responseUser.userId}}</div>
            <div class="text-wrapper-12">2022.02.23</div>
            <p v-if="article.replyDTOList" class="p">{{article.replyDTOList[0].replyContent}}</p>
            <img class="mdi-like-2" src="../../../assets/img/ViewArticle/ViewStudyGroupArticle/mdi-like-5.png" />
            <div v-if="article.replyDTOList" class="text-wrapper-13">{{article.replyDTOList[0].replyLikeCount}}</div>
            <div class="ph-siren-light">
              <img class="vector-3" src="../../../assets/img/ViewArticle/ViewStudyGroupArticle/vector-6.png" />
            </div>
          </div>
        <div class="group-13">
          <div v-if="article.userList != null" class="text-wrapper-14">ID: {{ article.userList.userId }}</div>
          <img class="ph-siren-light-2" src="../../../assets/img/ViewArticle/ViewStudyGroupArticle/ph-siren-light.png" />
        </div>
      </div>
    </div>
  </body>
</template>

<script setup>
  import axios from 'axios';
  import {ref, onMounted} from 'vue';
  import {useRoute, useRouter} from 'vue-router'

  const article = ref([
    
  ]);
  const route = useRoute();
  const router = useRouter();

  onMounted(async() => {
    try{
      const response = await axios.get(`http://localhost:8000/article-reply/article/${route.params.id}`);
      article.value = response.data;
      console.log(article.value);
    }
    catch(error) {
      console.error("Error: ", error);
    }
  })

  function routerMain (){
    router.push(`/`)
  }


</script>

<style scoped>
  @import "@/assets/css/ViewArticle/ViewStudyGroupArticle/style.css";
  @import "@/assets/css/ViewArticle/ViewStudyGroupArticle/globals.css";
</style>