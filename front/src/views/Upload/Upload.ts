import {Component, Prop, Vue} from "vue-property-decorator";

const altImage = ""

type ProductInfo = {
    name: string,
    image: string,
    categories: string[],
    tags: string[]
}

@Component
export default class Upload extends Vue {
    public form: ProductInfo = {
        name: '',
        categories: [],
        tags: [],
        image: altImage
    }

    public tagValue = ''
    public categoryValue = ''
    public tagVisible = false
    public categoryVisible = false
    public tagOptions = ['男装', '女装', '纯棉', '穿搭具有时尚美感', '高贵洋气','修身显瘦','简约帅气百搭','高弹力','轻薄','青春流行','百搭','宽松舒适','性价比高','含绒量高','无忧退换','保暖','透气','具有设计感','到货速度快','颜色多样','束腰']
    public categoryOptions = ['男士短袖', '男士卫衣', '男士冲锋衣', '男士牛仔衣', '男士牛仔衣','男士夹克衫','男士羽绒服','男士短裤','男士西装','男士休闲裤','男士短裤','女士短袖','女士风衣','^女士连衣裙','女士休闲装','女士羽绒服','女士休闲裤','女士牛仔裤']


    public onSubmit() {
        this.form.categories = [ this.categoryValue ]
        console.log("submit")
        console.log(JSON.stringify(this.form))
        this.axios.post("/business/rest/product/upload", this.form)
            .then(model => {
                this.$message({
                    message: '服装添加成功',
                    type: 'success'
                });
                this.form.name = '';
                this.form.image = '';
                this.form.categories = [];
                this.form.tags = [];
            })
            .catch(err => {
                this.$message.error('服装添加失败');
            })
    }



    public created() {

    }

    public showTagInput() {
        this.tagVisible = true;
        // this.$nextTick(_ => {
        //     this.$refs.saveTagInput.$refs.input.focus();
        // });
    }

    public showCategoryInput() {
        this.categoryVisible = true;
    }

    public handleInputConfirm() {
        let inputValue = this.tagValue;
        if (inputValue) {
            this.form.tags.push(inputValue);
        }
        this.tagVisible = false;
        this.tagValue = '';
    }

    public removeTag(tag: string) {
        this.form.tags = this.form.tags.filter(item => item != tag);
    }

    public handleCategoryInputConfirm() {
        let inputValue = this.categoryValue;
        if (inputValue) {
            this.form.categories.push(inputValue);
        }
        this.categoryVisible = false;
        this.categoryValue = '';
    }

    public removeCategory(category: string) {
        this.form.categories = this.form.categories.filter(item => item != category);
    }
}