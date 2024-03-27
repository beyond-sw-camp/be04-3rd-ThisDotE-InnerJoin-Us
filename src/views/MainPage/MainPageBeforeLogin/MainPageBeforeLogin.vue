<template>
  <main>
    <div class="div-wrapper">
      <div class="div">
        <div class="group">
          <div class="overlap">
            <div class="overlap-group">
              <img class="innerjoin-us" src="@/assets/img/MainPage/MainPageBeforeLogin/innerjoin-us.png" /> <img class="image" src="@/assets/img/MainPage/MainPageBeforeLogin/image.png" />
            </div>
            <div class="text-wrapper">스터디구인</div>
            <div class="text-wrapper-2">정보 공유</div>
            <div class="text-wrapper-3">질문</div>
            <div class="view">
              <div class="overlap-group-2">
                <div class="text-wrapper-4">검색</div>
                <img class="mdi-magnify" src="@/assets/img/MainPage/MainPageBeforeLogin/mdi-magnify.png" />
              </div>
            </div>
            <div class="overlap-wrapper">
              <div class="overlap-2">
                <div class="overlap-group-wrapper">
                  <div class="overlap-group-3"><div class="text-wrapper-5">Log In</div></div>
                </div>
                <div class="rectangle"></div>
                <div class="text-wrapper-6">Sign Up</div>
              </div>
            </div>
          </div>
        </div>
        <div class="group-2">
          <div class="text-wrapper-7">랭킹</div>
          <img class="line" src="@/assets/img/MainPage/MainPageBeforeLogin/line-3.png" />
          <img class="img" src="@/assets/img/MainPage/MainPageBeforeLogin/group-15.png" />
        </div>
        <div class="group-3">
          <div class="overlap-3">
            <div class="text-wrapper-8">스터디 구인</div>
            <div class="group-4">
              <div class="overlap-group-4">
                <div class="text-wrapper-9">더보기</div>
                <img class="line-2" src="@/assets/img/MainPage/MainPageBeforeLogin/line-5.png" />
              </div>
            </div>
          </div>
        </div>
        <div class="group-5">
          <div class="overlap-4">
            <div class="text-wrapper-10">정보 공유</div>
            <div class="group-6">
              <div class="overlap-group-4">
                <div class="text-wrapper-9">더보기</div>
                <img class="line-2" src="@/assets/img/MainPage/MainPageBeforeLogin/line-5-1.png" />
              </div>
            </div>
          </div>
        </div>
        <div class="group-7">
          <div class="overlap-5">
            <div class="text-wrapper-10">질문</div>
            <div class="group-8">
              <div class="overlap-group-4">
                <div class="text-wrapper-9">더보기</div>
                <img class="line-2" src="@/assets/img/MainPage/MainPageBeforeLogin/line-5-2.png" />
              </div>
            </div>
          </div>
        </div>
        <div class="group-9">
          <div class="text-wrapper-11">우주링크</div>
          <img class="line" src="@/assets/img/MainPage/MainPageBeforeLogin/line-4.png" />
          <img class="group-10" src="@/assets/img/MainPage/MainPageBeforeLogin/group-19.png" />
        </div>
        <div class="group-12">
          <img class="image-3" src="@/assets/img/MainPage/MainPageBeforeLogin/3.png" />
          <div  v-if="studyList.length" class="group-13">
            <div class="text-wrapper-15"   @click="changeRouter(studyList[0].articleId)">{{ studyList[0].articleTitle }}</div>
            <div class="text-wrapper-16">{{ studyList[0].articleCreateDate }}</div>
            <div class="text-wrapper-17">{{ studyList[0].userList.userId }}</div>
          </div>
          <div v-if="studyList.length" class="group-14">
            <img class="mdi-like" src="@/assets/img/MainPage/MainPageBeforeLogin/mdi-like.png" />
            <div class="text-wrapper-18">{{ studyList[0].articleLikeCount }}</div>
            <img class="carbon-view" src="@/assets/img/MainPage/MainPageBeforeLogin/carbon-view.png" />
            <div class="text-wrapper-19">{{ studyList[0].articleViewCount }}</div>
            <img class="ant-design-message" src="@/assets/img/MainPage/MainPageBeforeLogin/ant-design-message-outlined.png" />
            <div class="text-wrapper-20">{{ studyList[0].articleReplyCount }}</div>
          </div>
        </div>
        <div class="group-15">
          <img class="image-4" src="@/assets/img/MainPage/MainPageBeforeLogin/3.png" />
          <div v-if="studyList.length" class="group-16">
            <div class="text-wrapper-15" @click="changeRouter(studyList[0].articleId)">{{ studyList[1].articleTitle }}</div>
            <div class="text-wrapper-16">{{ studyList[1].articleCreateDate }}</div>
            <div class="text-wrapper-17">{{ studyList[1].userList.userId }}</div>
          </div>
          <div class="group-17">
            <img class="mdi-like" src="@/assets/img/MainPage/MainPageBeforeLogin/mdi-like-1.png" />
            <div class="text-wrapper-18">1.6K</div>
            <img class="carbon-view" src="@/assets/img/MainPage/MainPageBeforeLogin/carbon-view-1.png" />
            <div class="text-wrapper-19">100</div>
            <img class="ant-design-message" src="@/assets/img/MainPage/MainPageBeforeLogin/ant-design-message-outlined-1.png" />
            <div class="text-wrapper-20">14</div>
          </div>
        </div>
        <div class="group-18">
          <img class="image-4" src="@/assets/img/MainPage/MainPageBeforeLogin/4.png" />
          <div v-if="studyList.length" class="group-16">
            <div class="text-wrapper-15" @click="changeRouter(studyList[0].articleId)">{{ studyList[2].articleTitle }}</div>
            <div class="text-wrapper-16">{{ studyList[2].articleCreateDate }}</div>
            <div class="text-wrapper-17">{{ studyList[2].userList.userId }}</div>
          </div>
          <div class="group-17">
            <img class="mdi-like" src="@/assets/img/MainPage/MainPageBeforeLogin/mdi-like-2.png" />
            <div class="text-wrapper-18">1.6K</div>
            <img class="carbon-view" src="@/assets/img/MainPage/MainPageBeforeLogin/carbon-view-2.png" />
            <div class="text-wrapper-19">100</div>
            <img class="ant-design-message" src="@/assets/img/MainPage/MainPageBeforeLogin/ant-design-message-outlined-2.png" />
            <div class="text-wrapper-20">14</div>
          </div>
        </div>
        <div v-if="shareInfoList.length" class="group-11">                                 <!-- 정보공유 1번 -->
          <img class="image-2" src="@/assets/img/MainPage/MainPageBeforeLogin/1.png" />
          <div class="text-wrapper-12">{{ shareInfoList[0].articleTitle }}</div>
          <div class="text-wrapper-13">{{ shareInfoList[0].articleCreateDate }}</div>
          <div class="text-wrapper-14">{{ shareInfoList[0].userList.userId }}</div>
        </div>
        <div v-if="shareInfoList.length" class="group-20">                                 <!-- 정보공유 2번 -->
          <img class="image-2" src="@/assets/img/MainPage/MainPageBeforeLogin/9.png" />     
          <div class="text-wrapper-12">{{ shareInfoList[1].articleTitle }}</div>
          <div class="text-wrapper-13">{{ shareInfoList[1].articleCreateDate }}</div>
          <div class="text-wrapper-14">{{ shareInfoList[1].userList.userId }}</div>
        </div>
        <div v-if="shareInfoList.length" class="group-21">                                    <!-- 정보공유 3번 -->
            <img class="image-2" src="@/assets/img/MainPage/MainPageBeforeLogin/9.png" />
            <div class="text-wrapper-12">{{ shareInfoList[2].articleTitle }}</div>
            <div class="text-wrapper-13">{{ shareInfoList[2].articleCreateDate }}</div>
            <div class="text-wrapper-14">{{ shareInfoList[2].userList.userId }}</div>
          </div>
          <div v-if="questionList.length" class="group-22">                                    <!-- 질문 1번 -->
            <img class="image-2" src="@/assets/img/MainPage/MainPageBeforeLogin/9.png" />
            <div class="text-wrapper-12">{{ questionList[0].articleTitle }}</div>
            <div class="text-wrapper-13">{{ questionList[0].articleCreateDate }}</div>
            <div class="text-wrapper-14">{{ questionList[0].userList.userId }}</div>
          </div>
        <div v-if="questionList.length" class="group-19">                                 <!-- 질문 2번 -->
          <img class="image-2" src="@/assets/img/MainPage/MainPageBeforeLogin/9.png" />
          <div class="text-wrapper-12">{{ questionList[1].articleTitle }}</div>
          <div class="text-wrapper-13">{{ questionList[1].articleCreateDate }}</div>
          <div class="text-wrapper-14">{{ questionList[1].userList.userId }}</div>
        </div>
          <div v-if="questionList.length" class="group-23">                                    <!-- 질문 3번 -->
            <img class="image-2" src="@/assets/img/MainPage/MainPageBeforeLogin/9.png" />
            <div class="text-wrapper-12">{{ questionList[2].articleTitle }}</div>
            <div class="text-wrapper-13">{{ questionList[2].articleCreateDate }}</div>
            <div class="text-wrapper-14">{{ questionList[2].userList.userId }}</div>
          </div>
      </div>
    </div>
  </main>
</template>

<script setup >
  import axios from 'axios';
  import {ref, onMounted, computed} from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const studyValue = ref([]);
  const shareValue = ref([]);
  const questValue = ref([]);
  
  const selectedIndex = ref(0);
  const studyList = ref([]);
  const shareInfoList = ref([]);
  const questionList = ref([]);
  
  
  onMounted(async() => {
    try{
      const response = await axios.get('http://localhost:8000/article-reply/main');
      studyValue.value = response.data['1'];
      shareValue.value = response.data['2'];
      questValue.value = response.data['3'];

      for (let i = 0; i < 4; i++) {
          studyList.value.push(studyValue.value[i]);
          shareInfoList.value.push(shareValue.value[i]);
          questionList.value.push(questValue.value[i]);
      }

      console.log(questValue.value);

    } catch (error){
      console.error("Error: ", error);
    }
  })

  function changeRouter(routerName){
    router.push(`/viewStudyGroupArticle/${routerName}`)
  }

</script>

<style scoped>
  @import "@/assets/css/MainPage/MainPageBeforeLogin/globals.css";
  @import "@/assets/css/MainPage/MainPageBeforeLogin/style.css";
</style>