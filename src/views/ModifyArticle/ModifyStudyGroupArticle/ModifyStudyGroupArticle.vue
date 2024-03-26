<template>
  <body>
    <div class="screen">
      <div class="div">
        <div class="text-wrapper">게시글 수정</div>
        <div class="group">
          <div class="rectangle"><input type="text" placeholder="제목 작성" style="border: 0px; border-radius: 10px; color: black; background-color: #d9d9d94f; width: 550px; height: 50px;"></div>
          <div class="text-wrapper-2">제목</div>
        </div>
        <div class="group-2">
          <div class="text-wrapper-2">내용</div>
          <div class="rectangle-2">
            <input type="text" placeholder="내용 작성" style="border: 0px; border-radius: 10px; color: black; background-color: #d9d9d94f; width: 550px; height: 230px;">
          </div>
        </div>
        <div class="group-3">
          <div class="text-wrapper-2">태그</div>
          <div class="overlap-group">
            <select class="mingcute-down-fill">
              <option value="0" selected>스터디 태그</option>
              <option>#IELTS</option>
              <option>#OPIc</option>
              <option>#TOEIC</option>
              <option>#정보처리기사</option>
              <option>#SQLD</option>
              <option>#기타</option>
            </select>
            <div class="text-wrapper-3">태그를 추가하세요</div>
          </div>
        </div>
        <div class="group-4">
          <div class="text-wrapper-2">정원수</div>
          <div class="rectangle-3"><input type="text" style="width: 85px; height: 30px; border-radius: 10px; border: 0px; background-color: #d9d9d94f;"></div>
          <div class="text-wrapper-4">명</div>
        </div>
        <div class="group-5">
          <div class="overlap-group-wrapper">
            <div class="div-wrapper">
              <div class="text-wrapper-5">수정</div>
            </div>
          </div>
          <div class="overlap-wrapper">
            <div class="overlap"><div class="text-wrapper-5">취소</div></div>
          </div>
        </div>
        <div class="group-6">
          <div class="overlap-2">
            <div class="overlap-3">
              <img class="innerjoin-us" src="../../../assets/img/ModifyArticle/ModifyStudyGroupArticle/innerjoin-us.png" />
              <img class="image" src="../../../assets/img/ModifyArticle/ModifyStudyGroupArticle/image.png" />
            </div>
            <div class="view">
              <div class="overlap-group-2">
                <div class="text-wrapper-6">검색</div>
                <img class="mdi-magnify" src="../../../assets/img/ModifyArticle/ModifyStudyGroupArticle/mdi-magnify.png" />
              </div>
            </div>
            <div class="vector-wrapper"><img class="vector" src="../../../assets/img/ModifyArticle/ModifyStudyGroupArticle/vector.png" /></div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script setup>

</script>

<style scoped>
  @import "@/assets/css/ModifyArticle/ModifyStudyGroupArticle/globals.css";
  @import "@/assets/css/ModifyArticle/ModifyStudyGroupArticle/style.css";
</style>