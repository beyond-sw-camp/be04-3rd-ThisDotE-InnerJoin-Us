<template>
  <body>
    <div class="screen">
      <div class="div">
        <div class="group">
          <div class="overlap-group"><div v-show="article != null" class="text-wrapper">{{ article?.articleTitle }}</div></div>
        </div>
        <div class="overlap-wrapper">
          <div class="overlap">
            <div v-if="article != null" class="text-wrapper-2">{{ article?.articleContent }}</div>
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
          <div v-if="article !=null" class="text-wrapper-6">{{ convertTimeZone(article.articleCreateDate) }}</div>
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
            <input type="text" v-model="replyContent" placeholder="댓글 작성" style="border: 0px; border-radius: 5px; background-color: #d9d9d94f; width: 490px; height: 20px;">
          </div>
          <img class="mingcute-send-plane" @click="submitForm" src="../../../assets/img/ViewArticle/ViewStudyGroupArticle/mingcute-send-plane-fill.png"></img>

          <div v-for="reply in replies" :key="reply.replyId">
            <div class="group-8">
              <img class="image-3" src="../../../assets/img/ViewArticle/ViewStudyGroupArticle/7.png" />
              <div @click="routerToProfile(reply?.userCode)" class="text-wrapper-11">{{ reply?.responseUser.userId }}</div>
              <div class="text-wrapper-12">{{ convertTimeZone(reply?.replyCreatedDate) }}</div>
              <p class="p">{{ reply?.replyContent }}</p>
              <img class="mdi-like-2" src="../../../assets/img/ViewArticle/ViewStudyGroupArticle/mdi-like-5.png" />
              <div class="text-wrapper-13">{{ reply?.replyLikeCount }}</div>
              <div class="ph-siren-light">
                <img class="vector-3" src="../../../assets/img/ViewArticle/ViewStudyGroupArticle/vector-6.png" />
              </div>
            </div>
          </div>
        </div>

        <div class="group-13">
          <div @click="routerToProfile(article.userCode)" v-if="article.userList != null" class="text-wrapper-14">{{ article.userList.userId }}</div>
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
  const replies = ref([]);

  const route = useRoute();
  const router = useRouter();

  const replyContent = ref('');

  onMounted(async() => {
    try{
      const response = await axios.get(`http://localhost:8000/article-reply/article/${route.params.id}`);
      article.value = response.data;
      replies.value = response.data.replyDTOList;
      console.log(article.value);
      console.log(article.value.articleId);
    }
    catch(error) {
      console.error("Error: ", error);
    }
  })

  function routerMain (){
    router.push(`/`)
  }

  function routerToProfile(routerName) {
		router.push(`/viewuserprofile/${routerName}`);
  }

  const submitForm = async () => {
  // 라우트 파라미터에서 articleId 추출

  const data = {
    replyContent: replyContent.value,
    articleId: article.value.articleId,
    userCode: '13'
  }

  const url = `http://localhost:8000/article-reply/reply`

  // axios.post를 사용하여 비동기 요청 전송
  // 응답 처리를 위한 로직을 추가해야 함
  try {
    const response = await axios.post(url, data)
    console.log(response) // 개발자가 확인할 수 있도록 콘솔에 로그 출력
    router.go(0)

  } catch (error) {
    console.error(error) // 오류 처리
  }
}
function convertTimeZone(datetimeValue) {
		const date = new Date(datetimeValue);
		const formattedDate = 
			date.getFullYear() + "." + 
			String(date.getMonth() + 1).padStart(2, '0') + "." + 
			String(date.getDate()).padStart(2, '0') + ". " + 
			String(date.getHours()).padStart(2, '0') + ":" + 
			String(date.getMinutes()).padStart(2, '0');
    return formattedDate;
	}

</script>

<style scoped>
  @import "@/assets/css/ViewArticle/ViewStudyGroupArticle/style.css";
  @import "@/assets/css/ViewArticle/ViewStudyGroupArticle/globals.css";
</style>