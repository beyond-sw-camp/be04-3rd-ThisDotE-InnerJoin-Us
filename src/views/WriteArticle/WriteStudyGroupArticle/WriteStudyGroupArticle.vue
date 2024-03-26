<template>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="globals.css" />
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="screen">
      <div class="div">
        <div class="group">
          <div class="rectangle"><input type="text" placeholder="제목 작성" style="border: 0px; border-radius: 10px; color: black; background-color: #d9d9d94f; width: 550px; height: 50px;"></div>
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
          <div class="rectangle-2"><input type="text" placeholder="내용 작성" style="border: 0px; border-radius: 10px; color: black; background-color: #d9d9d94f; width: 550px; height: 200px;"></div>
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
          <div class="rectangle-3"><input type="text" style="width: 85px; height: 30px; border-radius: 10px; border: 0px; background-color: #d9d9d94f;"></div>
          <div class="text-wrapper-9">명</div>
        </div>
        <div class="group-8">
          <div class="group-9">
            <div class="overlap-group-2">
              <div class="rectangle-4"></div>
              <div class="text-wrapper-10">등록</div>
            </div>
          </div>
          <div class="group-10">
            <div class="overlap-group-2">
              <div class="rectangle-5"></div>
              <div class="text-wrapper-10">취소</div>
            </div>
          </div>
        </div>
        <div class="group-11">
          <div class="overlap-3">
            <div class="overlap-4">
              <img class="innerjoin-us" src="img/innerjoin-us.png" /><img class="image" src="img/image.png" />
            </div>
            <div class="vector-wrapper"><img class="vector" src="img/vector.png" /></div>
            <div class="view">
              <div class="overlap-group-3">
                <div class="text-wrapper-11">검색</div>
                <img class="mdi-magnify" src="img/mdi-magnify.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>

</template>

<script setup>

</script>

<style scoped>
.screen {
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.screen .div {
  background-color: #ffffff;
  width: 1440px;
  height: 1024px;
  position: relative;
}

.screen .group {
  position: absolute;
  width: 549px;
  height: 85px;
  top: 600px;
  left: 419px;
}

.screen .rectangle {
  width: 547px;
  height: 49px;
  top: 36px;
  left: 0;
  background-color: #d9d9d945;
  position: absolute;
  border-radius: 20px;
}

.screen .text-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  font-family: "Inter", Helvetica;
  font-weight: 600;
  color: #000000;
  font-size: 22px;
  letter-spacing: 0;
  line-height: normal;
}

.screen .group-2 {
  position: absolute;
  width: 150px;
  height: 100px;
  top: 164px;
  left: 419px;
}

.screen .text-wrapper-2 {
  top: 0;
  left: 0;
  color: #000000;
  font-size: 30px;
  white-space: nowrap;
  position: absolute;
  font-family: "Inter", Helvetica;
  font-weight: 600;
  letter-spacing: 0;
  line-height: normal;
}

.screen .text-wrapper-3 {
  top: 73px;
  left: 0;
  color: #000000;
  font-size: 22px;
  position: absolute;
  font-family: "Inter", Helvetica;
  font-weight: 600;
  letter-spacing: 0;
  line-height: normal;
}

.screen .group-3 {
  position: absolute;
  width: 547px;
  height: 49px;
  top: 289px;
  left: 419px;
}

.screen .overlap-group-wrapper {
  position: absolute;
  width: 159px;
  height: 49px;
  top: 0;
  left: 0;
}

.screen .overlap-group {
  position: relative;
  width: 157px;
  height: 49px;
  background-color: #ffffff;
  border-radius: 20px;
  border: 1px solid;
  border-color: #000000;
}

.screen .text-wrapper-4 {
  top: 12px;
  left: 39px;
  color: #00000091;
  font-size: 20px;
  white-space: nowrap;
  position: absolute;
  font-family: "Inter", Helvetica;
  font-weight: 600;
  letter-spacing: 0;
  line-height: normal;
}

.screen .overlap-wrapper {
  position: absolute;
  width: 159px;
  height: 49px;
  top: 0;
  left: 195px;
}

.screen .text-wrapper-5 {
  top: 12px;
  left: 59px;
  color: #00000091;
  font-size: 20px;
  white-space: nowrap;
  position: absolute;
  font-family: "Inter", Helvetica;
  font-weight: 600;
  letter-spacing: 0;
  line-height: normal;
}

.screen .div-wrapper {
  position: absolute;
  width: 159px;
  height: 49px;
  top: 0;
  left: 390px;
}

.screen .overlap {
  position: relative;
  width: 157px;
  height: 49px;
  background-color: #e6ecff;
  border-radius: 20px;
  border: 1px solid;
  border-color: #000000;
}

.screen .text-wrapper-6 {
  top: 12px;
  left: 29px;
  color: #00000091;
  font-size: 20px;
  white-space: nowrap;
  position: absolute;
  font-family: "Inter", Helvetica;
  font-weight: 600;
  letter-spacing: 0;
  line-height: normal;
}

.screen .group-4 {
  position: absolute;
  width: 550px;
  height: 241px;
  top: 701px;
  left: 418px;
}

.screen .rectangle-2 {
  width: 548px;
  height: 198px;
  top: 43px;
  left: 0;
  background-color: #d9d9d945;
  position: absolute;
  border-radius: 20px;
}

.screen .group-5 {
  position: absolute;
  width: 552px;
  height: 86px;
  top: 351px;
  left: 419px;
}

.screen .overlap-2 {
  position: absolute;
  width: 547px;
  height: 49px;
  top: 37px;
  left: 1px;
  background-color: #ffffff;
  border-radius: 20px;
  border: 1px solid;
  border-color: #000000;
}

.screen .mingcute-down-fill {
  position: absolute;
  width: 24px;
  height: 24px;
  top: 12px;
  left: 503px;
  border: 1px solid #C4C4C4;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 12px 13px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
}

.screen .text-wrapper-7 {
  top: 16px;
  left: 22px;
  color: #00000033;
  font-size: 15px;
  white-space: nowrap;
  position: absolute;
  font-family: "Inter", Helvetica;
  font-weight: 600;
  letter-spacing: 0;
  line-height: normal;
}

.screen .group-6 {
  position: absolute;
  width: 552px;
  height: 86px;
  top: 450px;
  left: 418px;
}

.screen .img {
  position: absolute;
  width: 24px;
  height: 24px;
  top: 12px;
  left: 499px;
}

.screen .text-wrapper-8 {
  top: 16px;
  left: 19px;
  color: #00000033;
  font-size: 15px;
  white-space: nowrap;
  position: absolute;
  font-family: "Inter", Helvetica;
  font-weight: 600;
  letter-spacing: 0;
  line-height: normal;
}

.screen .group-7 {
  position: absolute;
  width: 550px;
  height: 32px;
  top: 554px;
  left: 418px;
}

.screen .rectangle-3 {
  width: 85px;
  height: 30px;
  top: 2px;
  left: 433px;
  background-color: #d9d9d94f;
  position: absolute;
  border-radius: 20px;
}

.screen .text-wrapper-9 {
  top: 2px;
  left: 525px;
  color: #000000;
  font-size: 22px;
  position: absolute;
  font-family: "Inter", Helvetica;
  font-weight: 600;
  letter-spacing: 0;
  line-height: normal;
}

.screen .group-8 {
  position: absolute;
  width: 255px;
  height: 49px;
  top: 962px;
  left: 709px;
}

.screen .group-9 {
  position: absolute;
  width: 118px;
  height: 49px;
  top: 0;
  left: 139px;
}

.screen .overlap-group-2 {
  position: relative;
  width: 116px;
  height: 49px;
  border-radius: 20px;
}

.screen .rectangle-4 {
  width: 116px;
  height: 49px;
  top: 0;
  left: 0;
  background-color: #e6ecff;
  position: absolute;
  border-radius: 20px;
}

.screen .text-wrapper-10 {
  top: 11px;
  left: 38px;
  color: #000000;
  font-size: 22px;
  position: absolute;
  font-family: "Inter", Helvetica;
  font-weight: 600;
  letter-spacing: 0;
  line-height: normal;
}

.screen .group-10 {
  position: absolute;
  width: 118px;
  height: 49px;
  top: 0;
  left: 0;
}

.screen .rectangle-5 {
  width: 116px;
  height: 49px;
  top: 0;
  left: 0;
  background-color: #d9d9d95c;
  position: absolute;
  border-radius: 20px;
}

.screen .group-11 {
  position: absolute;
  width: 1305px;
  height: 94px;
  top: 28px;
  left: 67px;
}

.screen .overlap-3 {
  position: relative;
  height: 94px;
}

.screen .overlap-4 {
  position: absolute;
  width: 1305px;
  height: 94px;
  top: 0;
  left: 0;
}

.screen .innerjoin-us {
  position: absolute;
  width: 155px;
  height: 94px;
  top: 0;
  left: 14px;
  object-fit: cover;
}

.screen .image {
  position: absolute;
  width: 1305px;
  height: 2px;
  top: 92px;
  left: 0;
  object-fit: cover;
}

.screen .vector-wrapper {
  position: absolute;
  width: 43px;
  height: 40px;
  top: 17px;
  left: 1241px;
  background-color: #7f94e1;
  border-radius: 21.5px/20px;
}

.screen .vector {
  position: absolute;
  width: 19px;
  height: 17px;
  top: 11px;
  left: 11px;
}

.screen .view {
  position: absolute;
  width: 276px;
  height: 40px;
  top: 17px;
  left: 783px;
}

.screen .overlap-group-3 {
  position: relative;
  width: 274px;
  height: 40px;
  background-color: #ffffff;
  border-radius: 50px;
  border: 1px solid;
  border-color: #000000;
}

.screen .text-wrapper-11 {
  width: 51px;
  top: 9px;
  left: 30px;
  color: #d9d9d9;
  font-size: 20px;
  position: absolute;
  font-family: "Inter", Helvetica;
  font-weight: 600;
  letter-spacing: 0;
  line-height: normal;
}

.screen .mdi-magnify {
  position: absolute;
  width: 25px;
  height: 26px;
  top: 7px;
  left: 5px;
}

</style>