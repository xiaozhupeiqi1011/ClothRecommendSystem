<template>
  <div class="container">
    <h1 title="title" class="h1" @click="loadCategory(name)">{{title}}</h1>
    <span v-if="products.length == 0">
      <p>你当前的账号是首次使用，且无评论操作，暂无实时推荐数据可查询</p>
      <p>你需要使用一段时间后才能获得实时推荐数据</p>
      <p>你也可以使用系统默认账号访问，以体验实时推荐数据</p>
    </span>
    <span v-if="products.length != 0">
      <a @click="doMore(1)" class="more" href="#" v-if="MAX_SHOW_NUM1 == 5">查看更多</a>
      <a @click="undoMore(1)" class="more" href="#" v-if="MAX_SHOW_NUM1 == 19">收起更多</a>
            <el-card
              v-for="item in products.slice(0, MAX_SHOW_NUM1)"
              :key="item.productId + 1"
              class="card"
            >
              <router-link :to="{path: '/detail', query: {productId: item.productId} }" class="a-name">
                <h5 class="name">{{item.name}}</h5>
              </router-link>
              <img :src="item.imageUrl" alt="商品图片" class="image" />
              <el-rate
                v-model="item.score"
                :colors="colors"
                :allow-half="true"
                @change="doRate(item.score, item.productId)"
              ></el-rate>
            </el-card>
    </span>
  </div>
</template>

<script src="./Category.ts" lang="ts" />

<style scoped lang="stylus">
@import url('./Category.stylus');
</style>