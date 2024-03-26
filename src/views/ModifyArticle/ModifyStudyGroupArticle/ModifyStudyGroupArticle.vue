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
              <img class="innerjoin-us" src="img/innerjoin-us.png" /> <img class="image" src="img/image.png" />
            </div>
            <div class="view">
              <div class="overlap-group-2">
                <div class="text-wrapper-6">검색</div>
                <img class="mdi-magnify" src="img/mdi-magnify.png" />
              </div>
            </div>
            <div class="vector-wrapper"><img class="vector" src="img/vector.png" /></div>
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

.screen .text-wrapper {
  position: absolute;
  top: 163px;
  left: 419px;
  font-family: "Inter", Helvetica;
  font-weight: 600;
  color: #000000;
  font-size: 30px;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
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

.screen .group {
  position: absolute;
  width: 549px;
  height: 85px;
  top: 394px;
  left: 420px;
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

.screen .text-wrapper-2 {
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
  width: 550px;
  height: 276px;
  top: 495px;
  left: 419px;
}

.screen .rectangle-2 {
  width: 548px;
  height: 233px;
  top: 43px;
  left: 0;
  background-color: #d9d9d945;
  position: absolute;
  border-radius: 20px;
}

.screen .group-3 {
  position: absolute;
  width: 552px;
  height: 86px;
  top: 218px;
  left: 416px;
}

.screen .overlap-group {
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
  top: 14px;
  left: 503px;
}

.screen .text-wrapper-3 {
  top: 18px;
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

.screen .group-4 {
  position: absolute;
  width: 550px;
  height: 32px;
  top: 333px;
  left: 417px;
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

.screen .text-wrapper-4 {
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

.screen .group-5 {
  position: absolute;
  width: 255px;
  height: 49px;
  top: 836px;
  left: 708px;
}

.screen .overlap-group-wrapper {
  position: absolute;
  width: 118px;
  height: 49px;
  top: 0;
  left: 139px;
}

.screen .div-wrapper {
  position: relative;
  width: 116px;
  height: 49px;
  background-color: #e6ecff;
  border-radius: 20px;
}

.screen .text-wrapper-5 {
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

.screen .overlap-wrapper {
  position: absolute;
  width: 118px;
  height: 49px;
  top: 0;
  left: 0;
}

.screen .overlap {
  position: relative;
  width: 116px;
  height: 49px;
  background-color: #d9d9d95c;
  border-radius: 20px;
}

.screen .group-6 {
  position: absolute;
  width: 1305px;
  height: 94px;
  top: 28px;
  left: 67px;
}

.screen .overlap-2 {
  position: relative;
  height: 94px;
}

.screen .overlap-3 {
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

.screen .view {
  position: absolute;
  width: 276px;
  height: 40px;
  top: 17px;
  left: 783px;
}

.screen .overlap-group-2 {
  position: relative;
  width: 274px;
  height: 40px;
  background-color: #ffffff;
  border-radius: 50px;
  border: 1px solid;
  border-color: #000000;
}

.screen .text-wrapper-6 {
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

.screen .vector-wrapper {
  position: absolute;
  width: 43px;
  height: 40px;
  top: 17px;
  left: 1247px;
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

</style>