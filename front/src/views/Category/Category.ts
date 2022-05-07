import { Component, Prop, Vue } from "vue-property-decorator";


@Component
export default class Category extends Vue {
    public products: any = []
    public title: string = ""
    public titleMap = new Map()
    public name: string = ""
    // 页面上商品最大展示数量
    public MAX_SHOW_NUM1: number = 10
    public MAX_SHOW_NUM2: number = 10
    public MAX_SHOW_NUM3: number = 10
    public MAX_SHOW_NUM4: number = 10

    public colors: any = ['#99A9BF', '#F7BA2A', '#FF9900']

    public created() {
        this.refresh((this.$route.params.name))
        this.$watch(() => this.$route.params, (curr, prev) => {
            console.log("router update")
            console.log(curr)
            this.refresh(curr['name'])
        })
    }

    public refresh(tab?: string) {
        console.log(`tab = ${tab}`)
        this.name = tab ? tab : this.$route.params.name;
        this.title = this.mapTab(tab ? tab : "");
        console.log(`title = ${this.title}`)
        this.getRecommendData(`/business/rest/product/${this.name}`, 0)
    }

    public mapTab(name: string) {
        let result
        if (name == "rate") {
            result =  "评分较多服装推荐"
        } else if (name == "offline") {
            result = "离线推荐"
        } else  if (name == "stream") {
            result = "实时推荐"
        } else {
            result = "近期热门服装推荐"
        }

        return result;
    }

    public getRecommendData(url: string, index: number) {
        let name = localStorage.getItem('user')
        this.axios.get(url, {
            params: {
                username: name,
                num: this.MAX_SHOW_NUM1
            }
        }).then(
            (res) => {
                if (res.data.success) {
                    this.products = res.data.products
                }
            }
        ).catch(
            (err) => {
                console.log('请求: ' + url + ' 的途中发生错误 ' + err)
            }
        )

    }

    public async doRate(rate: number, productId: number) {
        console.log('收到评分数据,productId: ' + productId + " rate: " + rate)
        let user = localStorage.getItem('user')
        let res = await this.axios.get('/business/rest/product/rate/' + productId, {
            params: {
                score: rate,
                username: user
            }
        })
        console.dir(res)
        if (res.data.success == true) {
            await this.$alert('评分成功', '提示', {
                confirmButtonText: '确定'
            });
        } else {
            await this.$alert('评分失败', '提示', {
                confirmButtonText: '确定'
            });
        }
    }

    public doMore(index: number) {
        switch (index) {
            case 1:
                this.MAX_SHOW_NUM1 = 19
                break
            case 2:
                this.MAX_SHOW_NUM2 = 19
                break
            case 3:
                this.MAX_SHOW_NUM3 = 19
                break
            case 4:
                this.MAX_SHOW_NUM4 = 19
                break
        }
    }

    public undoMore(index: number) {
        switch (index) {
            case 1:
                this.MAX_SHOW_NUM1 = 5
                break
            case 2:
                this.MAX_SHOW_NUM2 = 5
                break
            case 3:
                this.MAX_SHOW_NUM3 = 5
                break
            case 4:
                this.MAX_SHOW_NUM4 = 5
                break
        }
    }


    public async loadCategory(category: string) {
        await this.$router.push({
            name: "category",
            params: {
                name: category
            }
        })
    }
}