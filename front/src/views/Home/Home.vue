<template>
  <div class="home-container">
    <el-card title="实时推荐" class="el-card-anchor" style="background-color: #FFFFCC">
      <h1 @click="loadCategory('stream')">实时推荐</h1>
    </el-card>
    <el-card title="离线推荐" class="el-card-anchor" style="background-color: #CCFFFF">
      <h1  @click="loadCategory('offline')">离线推荐</h1>
      </el-card>
    <el-card title="近期热门服装推荐" class="el-card-anchor" style="background-color: #FFCCCC">
      <h1  @click="loadCategory('hot')">近期热门服装推荐</h1>
    </el-card>
    <el-card title="评分较多服装推荐" class="el-card-anchor" style="background-color: #CCCCFF">
      <h1 @click="loadCategory('rate')">评分较多服装推荐</h1>
    </el-card>
    <el-card title="上传服装" class="el-card-anchor" style="background-color: #CCCCCC">
      <h1 @click="jump('upload')">上传服装</h1>
    </el-card>
  </div>
</template>

<script src="./Home.ts" lang="ts" />

<style scoped lang="stylus">
@import url('./Home.stylus');
</style>