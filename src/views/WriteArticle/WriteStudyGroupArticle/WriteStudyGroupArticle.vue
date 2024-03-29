<template>
  <body>
    <div class="screen">
      <form v-on:submit.prevent="submitForm">
      <div class="div">
        <div class="group">
          <div class="rectangle">
            <input type="text" v-model="articleTitle" placeholder="제목 작성" style="border: 0px; border-radius: 10px; color: black; background-color: #d9d9d94f; width: 550px; height: 50px;">
          </div>
          <div class="text-wrapper">제목</div>
        </div>
        <div class="group-2">
          <div class="text-wrapper-2">게시글 작성</div>
          <div class="text-wrapper-3">카테고리</div>
        </div>
        <div class="group-3">
          <div class="overlap-group-wrapper">
            <div class="overlap-group"><div class="text-wrapper-4">정보 공유</div></div>
          </div>
          <div class="overlap-wrapper">
            <div class="overlap-group"><div class="text-wrapper-5">질문</div></div>
          </div>
          <div class="div-wrapper">
            <div class="overlap"><div class="text-wrapper-6">스터디 구인</div></div>
          </div>
        </div>
        <div class="group-4">
          <div class="text-wrapper">내용</div>
          <div class="rectangle-2">
            <input type="text" v-model="articleContent" placeholder="내용 작성" style="border: 0px; border-radius: 10px; color: black; background-color: #d9d9d94f; width: 550px; height: 200px;">
          </div>
        </div>
        <div class="group-5">
          <div class="text-wrapper">태그</div>
          <div class="overlap-2">
            <select class="mingcute-down-fill">
              <option value="0" selected>스터디 태그</option>
              <option>#IELTS</option>
              <option>#OPIc</option>
              <option>#TOEIC</option>
              <option>#정보처리기사</option>
              <option>#SQLD</option>
              <option>#기타</option>
            </select>
            
            <div class="text-wrapper-7">태그를 추가하세요</div>
          </div>
        </div>
        <div class="group-6">
          <div class="text-wrapper">스터디 카테고리</div>
          <div class="overlap-2">
            <div class="text-wrapper-8">질문 주제를 선택하세요</div>
            <select class="mingcute-down-fill">
              <option value="0" selected>최애 프로그래밍 언어</option>
              <option>국가 자격증</option>
              <option>영어</option>
              <option>기타</option>
            </select>
          </div>
        </div>
        <div class="group-7">
          <div class="text-wrapper">정원수</div>
          <div class="rectangle-3">
            <input v-model="studygroupMemberMaxCount" type="number" style="width: 85px; height: 30px; border-radius: 10px; border: 0px; background-color: #d9d9d94f;">
          </div>
          <div class="text-wrapper-9">명</div>
        </div>
        <div class="group-8">
          <div class="group-9">
            <div class="overlap-group-2">
              <div class="rectangle-4"></div>
              <a href="WriteStudyGroupArticle" @click="writeSAT" type="submit" class="text-wrapper-10">
                <button >등록</button> 
              </a>
            </div>
          </div>
          <div class="group-10">
            <div class="overlap-group-2">
              <div class="rectangle-5"></div>
              <a href="/ViewAllStudyGroupArticle" @click="gobackList" class="text-wrapper-10">취소</a>
            </div>
          </div>
        </div>
        <div class="group-11">
          <div class="overlap-3">
            <div class="overlap-4">
              <img class="innerjoin-us" src="../../../assets/img/WriteArticle/WriteStudyGroupArticle/innerjoin-us.png">
                <a href="/" target="_self"></a>
              </img>
              <img class="image" src="../../../assets/img/WriteArticle/WriteStudyGroupArticle/image.png"/>
            </div>
            <div class="vector-wrapper">
              <img class="vector" src="../../../assets/img/WriteArticle/WriteStudyGroupArticle/vector.png"/>
            </div>
            <div class="view">
              <div class="overlap-group-3">
                <div class="text-wrapper-11">검색</div>
                <img class="mdi-magnify" src="../../../assets/img/WriteArticle/WriteStudyGroupArticle/mdi-magnify.png"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    </div>
  </body>
</template>

<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();


// const routerMain = () => {
//         router.push('/');
//       };


export default {
  setup() {
    const articleTitle = ref('');
    const articleContent = ref('');
    const studygroupMemberMaxCount = ref('');
    const route = useRoute();
    const router = useRouter();

    const userCode1 = route.params
    const submitForm = async () => {
      const data = {
        articleTitle: articleTitle.value,
        articleContent: articleContent.value,
        studygroupMemberMaxCount: studygroupMemberMaxCount.value,
        articleCategory: 3,
        articleViewCount: 0,
        articleLikeCount: 0,
        articleReplyCount: 6,
        articleReportStatus: 0,
        articleQuestionCategory: 1,
        userCode: 6,
        studygroupId: 12,
        studygroupCurrentMemberCount: 0,
        studygroupPendingMemberCount: 0,
        articleDeleteStatus: 0
      };

      const url = `http://localhost:8000/article-reply/article`;

      try {
        console.log(userCode1);
        const response = await axios.post(url, data);
        console.log(response); // 로그 출력
        router.push('/ViewAllStudyGroupArticle'); // 현재 페이지 새로고침
      } catch (error) {
        console.error(error); // 오류 처리
      }
    };

    return {
      articleTitle,
      articleContent,
      studygroupMemberMaxCount,
      submitForm
    };

    function routerMain() {
        router.push('/');
    };
  },
}





</script>

<style scoped>
  @import "@/assets/css/WriteArticle/WriteStudyGroupArticle/style.css";
  @import "@/assets/css/WriteArticle/WriteStudyGroupArticle/globals.css";
</style>