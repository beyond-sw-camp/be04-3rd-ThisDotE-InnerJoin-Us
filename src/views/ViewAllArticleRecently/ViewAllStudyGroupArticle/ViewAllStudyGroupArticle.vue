<template>
	<div class="div-wrapper">
		<div class="div">
			<div class="group">
				<div class="overlap-group-wrapper">
					<div class="overlap-group">
						<div class="text-wrapper">스터디 그룹</div>
					</div>
				</div>
				<div class="text-wrapper-2">
					<a
						target="_self"
						style="color: black"
						href="../ViewAllQuestionArticle/index.html"
						>질문</a
					>
				</div>
				<div class="text-wrapper-3">
					<a
						target="_self"
						style="color: black"
						href="../ViewAllInfoArticle/index.html"
						>정보 공유</a
					>
				</div>
			</div>
			<div class="group-2">
				<img class="image" src="@/assets/img/ViewAllArticleRecently/ViewAllStudyGroupArticle/image.png" />
				<div class="group-3">
					<div class="overlap-group-2">
						<div @click="routeWriteArticle()" class="text-wrapper-4">
							<a
								target="_self"
								style="color: gray"
								>작성하기</a
							>
						</div>
						<img class="vector" src="@/assets/img/ViewAllArticleRecently/ViewAllStudyGroupArticle/vector.png" />
					</div>
					

					<div v-for="item in items" :key="item.articleId">
						<div class="group-5">
							<img class="image-3" src="@/assets/img/ViewAllArticleRecently/ViewAllStudyGroupArticle/2.png" />
							<div class="overlap-4">
								<div class="text-wrapper-7">{{ item?.userList?.userId }}</div>
								<div class="text-wrapper-8">{{ item?.articleCreateDate }}</div>
							</div>
							<div class="text-wrapper-9">모집정원</div>
							<div class="element">{{ item?.studygroupCurrentMemberCount }}&nbsp;&nbsp;/&nbsp;&nbsp;{{ item?.studygroupMemberMaxCount }}</div>
							<p class="springboot">
								{{ item?.articleContent }}
							</p>
							<div class="text-wrapper-10">{{item?.studygroupRecruitmentDeadline}}</div>
							<div class="text-wrapper-11">모집기한</div>
							<p class="p">
								{{ item?.articleTitle }}
							</p>
							<div class="img-wrapper">
								<img class="vector-5" src="@/assets/img/ViewAllArticleRecently/ViewAllStudyGroupArticle/vector-4.png" />
							</div>
							<div class="overlap-5">
								<img class="vector-6" src="@/assets/img/ViewAllArticleRecently/ViewAllStudyGroupArticle/vector-6.png" />
							</div>
							<div class="text-wrapper-12">{{ item?.articleLikeCount }}</div>
							<div class="text-wrapper-13">{{ item?.articleReplyCount }}</div>
							<img class="vector-7" src="@/assets/img/ViewAllArticleRecently/ViewAllStudyGroupArticle/vector-7.png" />
							<img class="vector-8" src="@/assets/img/ViewAllArticleRecently/ViewAllStudyGroupArticle/vector-8.png" />
							<img class="vector-9" src="@/assets/img/ViewAllArticleRecently/ViewAllStudyGroupArticle/vector-9.png" />
						</div>
					</div>
				</div>





				<div class="overlap-wrapper">
					<div class="overlap">
						<div class="text-wrapper-5">
							<a
								target="_self"
								style="color: black"
								href="../../ViewAllArticle+toggle/ViewAllStudyGroupArticle+toggle/index.html"
								>최신순</a
							>
						</div>
						<img class="img" src="@/assets/img/ViewAllArticleRecently/ViewAllStudyGroupArticle/group.png" />
					</div>
				</div>
				<div>

				</div>
			</div>
			<div class="group-4">
				<div class="overlap-2">
					<div class="overlap-3">
						<a
							href="../../MainPage/MainPageLogin/index.html"
							target="_self"
						></a>
						<img @click="routerMain()" class="innerjoin-us" src="@/assets/img/ViewAllArticleRecently/ViewAllStudyGroupArticle/innerjoin-us.png" /><img
							class="image-2"
							src="@/assets/img/ViewAllArticleRecently/ViewAllStudyGroupArticle/1.png"
						/>
					</div>
					<div class="view">
						<div class="overlap-group-3">
							<div class="text-wrapper-6">검색</div>
							<img class="vector-2" src="@/assets/img/ViewAllArticleRecently/ViewAllStudyGroupArticle/vector-1.png" />
						</div>
					</div>
					<div class="vector-wrapper">
						<img class="vector-3" src="@/assets/img/ViewAllArticleRecently/ViewAllStudyGroupArticle/vector-2.png" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	import axios from 'axios';
	import {ref, onMounted} from 'vue';
	import { useRouter } from 'vue-router';

	const router = useRouter();

	const studyArticleList = ref([]);

	const items = ref([{

	}])

	onMounted( async () => {
		try {
			const response = await axios.get(`http://localhost:8000/article-reply/article/study`);
			items.value = response.data;
			// sort((a,b) => b.items.value.articleCreateDate - a.items.value.articleCreateDate);
			console.log(response.data);
		} catch (error) {
			console.error("Error: ", error);
		}
	})

	function routerMain(){
		router.push('/');
	}

	function routeWriteArticle() {
		router.push('/writeStudyGroupArticle')
	}

	function routerViewArticle() {
		router.push('/viewStudyGroupArticle')
	}
	
</script>

<style scoped>
    @import "@/assets/css/ViewAllArticleRecently/ViewAllStudyGroupArticle/globals.css";
    @import "@/assets/css/ViewAllArticleRecently/ViewAllStudyGroupArticle/style.css";
</style>
