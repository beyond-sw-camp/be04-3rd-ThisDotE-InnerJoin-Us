<template>
  <div class="div-wrapper">
    <div class="div">
      <div class="group">
        <div class="vector-wrapper"><img class="vector" src="../../../../src/assets/img/UserProfile/ViewUserProfile/vector.png" /></div>
        <div class="overlap-group">
          <div class="group-2">
            <div class="text-wrapper">팔로워</div>
            <div class="text-wrapper-2">434</div>
          </div>
          <div class="group-3">
            <div class="text-wrapper-3">180</div>
            <div class="text-wrapper">팔로잉</div>
          </div>
        </div>
      </div>
      <div class="overlap-wrapper">
        <div class="overlap"><div class="text-wrapper-4">Java</div></div>
      </div>
      <div class="overlap-group-wrapper">
        <div class="overlap-2"><div class="text-wrapper-5">JavaScript</div></div>
      </div>
      <div class="group-4">
        <div class="overlap-2"><div class="text-wrapper-6">SpringBoot</div></div>
      </div>
      <div class="group-5">
        <div class="overlap-3"><div class="text-wrapper-7">git</div></div>
      </div>
      <div v-if="articles != null" class="group-6">
        <img class="image" src="../../../../src/assets/img/UserProfile/ViewUserProfile/3.png" />
        <img class="mdi-like" src="../../../../src/assets/img/UserProfile/ViewUserProfile/mdi-like-3.png" />
        <img class="carbon-view" src="../../../../src/assets/img/UserProfile/ViewUserProfile/carbon-view-3.png" />
        <img class="img" src="../../../../src/assets/img/UserProfile/ViewUserProfile/vector-4.png" />
        <div class="text-wrapper-8">{{ articles[0]?.articleViewCount }}</div>
        <div class="text-wrapper-9">{{ articles[0]?.articleReplyCount }}</div>
        <div class="text-wrapper-10">{{ articles[0]?.articleContent }}</div>
        <div class="text-wrapper-11">💡 {{ articles[0]?.articleTitle }}</div>   
      </div>
      <div v-if="articles != null" class="group-7">
        <img class="image" src="../../../../src/assets/img/UserProfile/ViewUserProfile/3.png" />
        <img class="mdi-like" src="../../../../src/assets/img/UserProfile/ViewUserProfile/mdi-like-3.png" />
        <img class="carbon-view" src="../../../../src/assets/img/UserProfile/ViewUserProfile/carbon-view-3.png" />
        <img class="img" src="../../../../src/assets/img/UserProfile/ViewUserProfile/vector-4.png" />
        <div class="text-wrapper-8">{{ articles[2]?.articleViewCount }}</div>
        <div class="text-wrapper-9">{{ articles[2]?.articleReplyCount }}</div>
        <div class="text-wrapper-10">{{ articles[2]?.articleContent }}</div>
        <div class="text-wrapper-11">💡 {{ articles[2]?.articleTitle }}</div>
      </div>
      <div v-if="articles != null" class="group-8">
        <img class="image" src="../../../../src/assets/img/UserProfile/ViewUserProfile/3.png" />
        <img class="mdi-like" src="../../../../src/assets/img/UserProfile/ViewUserProfile/mdi-like-3.png" />
        <img class="carbon-view" src="../../../../src/assets/img/UserProfile/ViewUserProfile/carbon-view-3.png" />
        <img class="img" src="../../../../src/assets/img/UserProfile/ViewUserProfile/vector-4.png" />
        <div class="text-wrapper-8">{{ articles[3]?.articleViewCount }}</div>
        <div class="text-wrapper-9">{{ articles[3]?.articleReplyCount }}</div>
        <div class="text-wrapper-10">{{ articles[3]?.articleContent }}</div>
        <div class="text-wrapper-11">💡 {{ articles[3]?.articleTitle }}</div>
      </div>
      <div v-if="articles != null" class="group-9">
        <img class="image" src="../../../../src/assets/img/UserProfile/ViewUserProfile/3.png" />
        <img class="mdi-like" src="../../../../src/assets/img/UserProfile/ViewUserProfile/mdi-like-3.png" />
        <img class="carbon-view" src="../../../../src/assets/img/UserProfile/ViewUserProfile/carbon-view-3.png" />
        <img class="img" src="../../../../src/assets/img/UserProfile/ViewUserProfile/vector-4.png" />
        <div class="text-wrapper-8">{{ articles[1]?.articleViewCount }}</div>
        <div class="text-wrapper-9">{{ articles[1]?.articleReplyCount }}</div>
        <div class="text-wrapper-10">{{ articles[1]?.articleContent }}</div>
        <div class="text-wrapper-11">💡 {{ articles[1]?.articleTitle }}</div>
      </div>
      <div class="group-10">
        <div class="text-wrapper-12">스킬</div>
        <img class="image-2" src="../../../../src/assets/img/UserProfile/ViewUserProfile/4.png" />
        <img class="vector-2" src="../../../../src/assets/img/UserProfile/ViewUserProfile/vector-5.png" />
      </div>
      <div class="group-11">
        <div class="overlap-4">
          <img class="rectangle" src="../../../../src/assets/img/UserProfile/ViewUserProfile/rectangle-503-2.png" />
          <div class="text-wrapper-13">가입일</div>
          <div class="element">가입일&nbsp;&nbsp;&nbsp;&nbsp;2024.03.18</div>
          <div class="group-12">
            <img class="raphael-checkbox" src="../../../../src/assets/img/UserProfile/ViewUserProfile/raphael-checkbox-2.png" />
            <div class="text-wrapper-14">Follower</div>
          </div>
          <div class="group-13">
            <img class="vector-3" src="../../../../src/assets/img/UserProfile/ViewUserProfile/vector-8.png" />
            <div class="text-wrapper-15">Leader</div>
          </div>
          <div class="text-wrapper-16">버섯키우기 프론트엔드 개발</div>
        </div>
      </div>
      <div class="group-14">
        <div class="overlap-4">
          <img class="rectangle" src="../../../../src/assets/img/UserProfile/ViewUserProfile/rectangle-503-2.png" />
          <div class="text-wrapper-13">가입일</div>
          <div class="element">가입일&nbsp;&nbsp;&nbsp;&nbsp;2024.03.18</div>
          <div class="group-12">
            <img class="raphael-checkbox" src="../../../../src/assets/img/UserProfile/ViewUserProfile/raphael-checkbox-2.png" />
            <div class="text-wrapper-14">Follower</div>
          </div>
          <div class="group-13">
            <img class="vector-3" src="../../../../src/assets/img/UserProfile/ViewUserProfile/vector-8.png" />
            <div class="text-wrapper-15">Leader</div>
          </div>
          <div class="text-wrapper-16">버섯키우기 프론트엔드 개발</div>
        </div>
      </div>
      <div class="group-15">
        <div class="overlap-4">
          <img class="rectangle" src="../../../../src/assets/img/UserProfile/ViewUserProfile/rectangle-503-2.png" />
          <div class="text-wrapper-13">가입일</div>
          <div class="element">가입일&nbsp;&nbsp;&nbsp;&nbsp;2024.03.18</div>
          <div class="group-12">
            <img class="raphael-checkbox" src="../../../../src/assets/img/UserProfile/ViewUserProfile/raphael-checkbox-2.png" />
            <div class="text-wrapper-14">Follower</div>
          </div>
          <div class="group-13">
            <img class="vector-3" src="../../../../src/assets/img/UserProfile/ViewUserProfile/vector-8.png" />
            <div class="text-wrapper-15">Leader</div>
          </div>
          <div class="text-wrapper-16">버섯키우기 프론트엔드 개발</div>
        </div>
      </div>
      <div v-if="profile" class="group-16">
        <div class="text-wrapper-17">{{ profile.userId }}</div>
        <div class="text-wrapper-18">한화시스템 백엔드 개발자</div>
        <p class="p">
          저는 한화 시스템에서 근무 중인 백엔드 개발자 입니다. 취미로는 애니 보는 것이며,<br />그리고 점심에는 공화춘
          컵라면 2개랑 삼각김밥을 먹으며 밥먹은 뒤 산책하는 것을 좋아합니다.
        </p>
        <div class="group-17">
          <div class="overlap-group-2">
            <img class="rectangle-2" src="../../../../src/assets/img/UserProfile/ViewUserProfile/rectangle-520.png" />
            <div class="text-wrapper-19">편&nbsp;&nbsp;집</div>
          </div>
        </div>
        <div class="group-18">
          <div class="overlap-group-2">
            <img class="rectangle-2" src="../../../../src/assets/img/UserProfile/ViewUserProfile/rectangle-521.png" />
            <div class="text-wrapper-19">문&nbsp;&nbsp;의</div>
          </div>
        </div>
      </div>
      <div class="group-19">
        <div class="text-wrapper-20">내 활동 로그</div>
        <img class="image-2" src="../../../../src/assets/img/UserProfile/ViewUserProfile/5.png" />
        <div class="group-20">
          <div class="overlap-group-3">
            <div class="text-wrapper-21">더보기</div>
            <img class="line" src="../../../../src/assets/img/UserProfile/ViewUserProfile/line-5.png" />
          </div>
        </div>
      </div>
      <div class="group-21">
        <img class="image-2" src="../../../../src/assets/img/UserProfile/ViewUserProfile/6.png" />
        <div class="text-wrapper-22">스터디 그룹</div>
        <div class="group-22">
          <div class="overlap-group-3">
            <div class="text-wrapper-21">더보기</div>
            <img class="line" src="../../../../src/assets/img/UserProfile/ViewUserProfile/line-5-1.png" />
          </div>
        </div>
      </div>
      <div class="group-23">
        <div class="overlap-5">
          <div class="overlap-6">
            <img class="innerjoin-us" src="../../../../src/assets/img/UserProfile/ViewUserProfile/innerjoin-us.png" /> 
            <img class="image-3" src="../../../../src/assets/img/UserProfile/ViewUserProfile/7.png" />
          </div>
          <div class="text-wrapper-23">스터디구인</div>
          <div class="text-wrapper-24">정보 공유</div>
          <div class="text-wrapper-25">질문</div>
          <div class="view">
            <div class="overlap-group-4">
              <div class="text-wrapper-26">검색</div>
              <img class="mdi-magnify" src="../../../../src/assets/img/UserProfile/ViewUserProfile/mdi-magnify.png" />
            </div>
          </div>
          <div class="img-wrapper"><img class="vector-4" src="../../../../src/assets/img/UserProfile/ViewUserProfile/vector-9.png" /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

  import axios from 'axios';
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';

  const profile = ref([
    
  ]);
  const articles = ref([
    
  ]);


  const route = useRoute();

  onMounted(async() => {
    try {
      const response = await axios.get(`http://localhost:8000/user/${route.params.id}`);
      profile.value = response.data;
      articles.value = response.data.articleList;
      console.log(profile.value);
      console.log(articles.value);

    } catch (error) {
      console.error("Error: ", error);
    }
  })

</script>

<style scoped>
    @import '@/assets/css/UserProfile/ViewUserProfile/globals.css';
    @import '@/assets/css/UserProfile/ViewUserProfile/style.css';
</style>