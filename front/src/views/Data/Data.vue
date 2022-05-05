<template>
  <div class="container">
    <h1 title="实时推荐" class="h1-anchor" @click="loadCategory('stream')">实时推荐</h1>
    <h1 title="离线推荐" class="h1-anchor" @click="loadCategory('offline')">离线推荐</h1>
    <h1 title="热门商品推荐" class="h1-anchor" @click="loadCategory('hot')">近期热门服装推荐</h1>
    <h1 title="好评商品推荐" class="h1-anchor" @click="loadCategory('rate')">评分较多服装推荐</h1>
    <h1 title="热门商品推荐" class="h1-anchor" @click="loadCategory('hot')">Upload</h1>
    <h1 title="好评商品推荐" class="h1-anchor" @click="loadCategory('rate')">Data</h1>
  </div>
</template>

<script src="./Data.ts" lang="ts" />

<style scoped lang="stylus">
@import url('Data.stylus');
</style>