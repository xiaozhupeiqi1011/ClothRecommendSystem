<template>
  <div class="container" id="page-upload">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="服装名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <div class="img-box">
        <el-form-item class="img-input" label="服装图片">
          <el-input type="textarea" v-model="form.image"></el-input>
        </el-form-item>
        <img class="img-preview" :src="form.image"/>
      </div>
      <el-form-item class="category-input" label="服装分类">
<!--        <el-tag-->
<!--            :key="category"-->
<!--            v-for="category in form.categories"-->
<!--            closable-->
<!--            :disable-transitions="false"-->
<!--            @close="removeCategory(category)">-->
<!--          {{ category }}-->
<!--        </el-tag>-->
<!--        <el-input-->
<!--            class="input-new-tag"-->
<!--            v-if="categoryVisible"-->
<!--            v-model="categoryValue"-->
<!--            ref="saveCategoryInput"-->
<!--            size="mini"-->
<!--            @keyup.enter.native="handleCategoryInputConfirm"-->
<!--            @blur="handleCategoryInputConfirm"-->
<!--        >-->
<!--        </el-input>-->
<!--        <el-button v-else class="button-new-tag" size="small" @click="showCategoryInput">+ 新标签</el-button>-->
        <el-select v-model="categoryValue" placeholder="请选择标签">
          <el-option
              v-for="item in categoryOptions"
              :key="item"
              :label="item"
              :value="item">
          </el-option>
        </el-select>

      </el-form-item>
      <el-form-item class="tag-input" label="服装标签">
<!--        <el-tag-->
<!--            :key="tag"-->
<!--            v-for="tag in form.tags"-->
<!--            closable-->
<!--            :disable-transitions="false"-->
<!--            @close="removeTag(tag)">-->
<!--          {{ tag }}-->
<!--        </el-tag>-->
<!--        <el-input-->
<!--            class="input-new-tag"-->
<!--            v-if="tagVisible"-->
<!--            v-model="tagValue"-->
<!--            ref="saveTagInput"-->
<!--            size="mini"-->
<!--            @keyup.enter.native="handleInputConfirm"-->
<!--            @blur="handleInputConfirm"-->
<!--        >-->
<!--        </el-input>-->
<!--        <el-button v-else class="button-new-tag" size="small" @click="showTagInput">+ 新标签</el-button>-->
        <el-select v-model="form.tags" multiple placeholder="请选择 tag">
          <el-option
              v-for="item in tagOptions"
              :key="item"
              :label="item"
              :value="item">
          </el-option>
        </el-select>

      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script src="./Upload.ts" lang="ts"/>

<style scoped lang="stylus">
@import url('Upload.stylus');
</style>