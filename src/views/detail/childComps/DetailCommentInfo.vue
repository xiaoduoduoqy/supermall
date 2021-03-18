<template>
  <div>
    <div class="comment-info" v-if="Object.keys(commentInfo).length!==0">
      <div class="info-header">
        <div class="header-title">用户评价</div>
        <div class="header-more" @click="moresppo">
          更多
          <i class="icon ion-forward"></i>
        </div>
      </div>
      <div class="info-user">
        <img :src="commentInfo.user.avatar">
        <span>{{ commentInfo.user.uname }}</span>
      </div>
      <div class="info-detail">
        <p>{{ commentInfo.content }}</p>
        <div class="info-other">
          <span class="date">{{ commentInfo.created | createdDate}}</span>
          <span>{{ commentInfo.style }}</span>
        </div>
        <div class="info-imgs">
          <img :src="item" v-for="(item,index) in commentInfo.images" :key="index">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from "common/utils"
export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters:{
    createdDate(value){
      if(value){
        return formatDate(value)
      }
      return
    }
  },
  methods: {
    moresppo() {
      alert("更多评论相关功能在维护，请稍后！")
      console.log(this.commentInfo)
    }
  }
}
</script>

<style scoped>
.comment-info {
  padding: 5px 12px;
  color: #333;
  border-bottom: 5px solid #ececec;
}

.info-header {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
}

.header-title {
  float: left;
  font-size: 15px;
}

.header-more {
  float: right;
  margin-right: 10px;
  font-size: 15px;
}

.info-user {
  padding: 10px 0 5px;
}

.info-user img {
  width: 45px;
  height: 45px;
  border-radius: 100%;
}

.info-user span {
  position: relative;
  font-size: 15px;
  top: -15px;
  margin-left: 10px;
}

.info-detail {
  padding: 0 5px 15px;
}

.info-detail p {
  font-size: 14px;
  color: #777;
  line-height: 15px;
}

.info-detail .info-other {
  font-size: 12px;
  color: #999;
  margin-top: 10px;
}

.info-other .date {
  margin-right: 8px;
}

.info-imgs {
  margin-top: 10px;
}

.info-imgs img {
  width: 70px;
  height: 70px;
  margin-right: 5px;
}
</style>
