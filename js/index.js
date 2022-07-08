// 執行中的組件
Vue.component('going_component',{
    template:`
    <div class="container">
        <div class="top_title">
            <div class="pic">
                <img src="https://picsum.photos/300/200/?random=10">
            </div>
            <div class="title_info">
                <h3>{{info.title}}</h3>
                <p>台北市重慶南路77號12樓
                </p>

            </div>
        </div>

        <!-- 標籤 -->
        <div class="label_date la_1">
            <div class="yellow_btn bdr10 p5-10">
                {{info.label_1}}
            </div>
            <p class="date">
                2020.12.31 ~ 2021.12.31
            </p>
        </div>

        <!-- 評論起始值～執行率 -->
        <div class="comment">
            <div class="comment_inf" v-for="item in info.comment" :item="item">
                <p class="num">
                    {{item.num}}
                </p>
                <p>
                    {{item.title}}
                </p>
            </div>
            
        </div>

        <!-- 滿版按鈕 -->
        <button  type="button" class="full_btn bdr20 getQR_btn" v-if="info.full_btn_1 !== '' ">
            {{info.full_btn_1}}
        </button>
        <!-- <p>你購買的專案已到期</p> -->

        <!-- 標籤 -->
        <div class="label_date la_2">
            <div class="red_btn bdr10 p5-10">
                {{info.label_2}}
            </div>
            <p class="date">
                2020.01.01 ~ 2021.01.01
            </p>
        </div>

        <!-- 滿版按鈕 -->
        <button  type="button" class="full_btn bdr20 apply_btn">
            {{info.full_btn_2}}
        </button>

        <p>你購買的專案已到期</p>

    </div>
    `,
    props: ["info"],
    // props:{
    //     item:Object,
        
    // },
    method:{
    },
    computed:{
    }
});

// 申請中的組件
Vue.component('applying_component',{
    template:`
    <div class="container">
        <div class="top_title">
            <div class="pic">
                <img src="https://picsum.photos/300/200/?random=10">
            </div>
            <div class="title_info">
                <h3>星和醫美台北店</h3>
            </div>
        </div>


        <!-- 標籤 -->
        <div class="label_date la_2">
            <div class="yellow_btn bdr10 p5-10">
                評價中心
            </div>
            <p class="date">
                申請日期 2020.01.01 ~ 2021.01.01
            </p>
            <p>台北市重慶南路77號12樓</p>
        </div>

        <!-- 滿版按鈕 -->
        <button  type="button" class="full_btn bdr20" :class="[choose ? 'choose_btn' : 'not_choose_btn']" @click="choose =!choose">
            選擇方案
        </button>

        <p>恭喜通過審核</p>

    </div>
    
    `,
    data() {
        return {
            choose:false,
        }
    },
    props:{
        item:Object,
    },
    method:{

    },
    computed:{
    }
    

})

new Vue({
    el:'#main',
    data:{
        sec_btn:   
        [
            {id: 1, label: "執行率", current: false},
            {id: 2, label: "增加評論數", current: false},
            {id: 3, label: "評論當前數", current: false},
            {id: 4, label: "商家中心效期", current: false},
            {id: 5, label: "評價中心效期", current: false}
        ],

        main_btn:['執行中','申請中'],
        currentMain:'執行中',
        currentSec:'商家中心',

        //section going組件用 執行中
        going:[
            {   
                id:1,
                title:'JupJup 精釀生啤餐酒館',
                label_1:'商家中心 專業版',
                comment:['2','200','198','60%'],
                full_btn_1:'取得QRcode',
                full_btn_2:'續購申請',
                label_2:'評價中心',
                comment:[
                    {
                        num:'2',
                        title:'評論起始值'
                    },
                    {
                        num:'200',
                        title:'評論當前值'
                    },
                    {
                        num:'198',
                        title:'已增加評論數'
                    },
                    {
                        num:'60%',
                        title:'執行率'
                    },
                ],
            },
            {   
                id:2,
                title:'JupJup 精釀生啤餐酒館',
                label_1:'商家中心 一般版',
                comment:['2','200','198','60%'],
                full_btn_1:'續購申請',
                full_btn_2:'續購申請',
                label_2:'評價中心',
                comment:[
                    {
                        num:'2',
                        title:'評論起始值'
                    },
                    {
                        num:'200',
                        title:'評論當前值'
                    },
                    {
                        num:'198',
                        title:'已增加評論數'
                    },
                    {
                        num:'60%',
                        title:'執行率'
                    },
                ],
            },
            {   
                id:3,
                title:'JupJup 精釀生啤餐酒館',
                label_1:'商家中心',
                comment:'',
                full_btn_1:'',
                full_btn_2:'選取方案',
                label_2:'評價中心',
               
            },
            {
                id:4,
                title:'JupJup 精釀生啤餐酒館',
                label_1:'商家中心 一般版',
                comment:['2','200','198','60%'],
                full_btn_1:'取得QRcode',
                full_btn_2:'選取方案',
                label_2:'評價中心',
                comment:[
                    {
                        num:'2',
                        title:'評論起始值'
                    },
                    {
                        num:'200',
                        title:'評論當前值'
                    },
                    {
                        num:'198',
                        title:'已增加評論數'
                    },
                    {
                        num:'60%',
                        title:'執行率'
                    },
                ],
            },
            {
                id:5,
                title:'JupJup 精釀生啤餐酒館',
                label_1:'商家中心 一般版',
                comment:['2','200','198','60%'],
                full_btn_1:'取得QRcode',
                full_btn_2:'選取方案',
                label_2:'評價中心',
                comment:[
                    {
                        num:'2',
                        title:'評論起始值'
                    },
                    {
                        num:'200',
                        title:'評論當前值'
                    },
                    {
                        num:'198',
                        title:'已增加評論數'
                    },
                    {
                        num:'60%',
                        title:'執行率'
                    },
                ],
            },
            {
                id:6,
                title:'JupJup 精釀生啤餐酒館',
                label_1:'商家中心 一般版',
                comment:['2','200','198','60%'],
                full_btn_1:'取得QRcode',
                full_btn_2:'選取方案',
                label_2:'評價中心',
                comment:[
                    {
                        num:'2',
                        title:'評論起始值'
                    },
                    {
                        num:'200',
                        title:'評論當前值'
                    },
                    {
                        num:'198',
                        title:'已增加評論數'
                    },
                    {
                        num:'60%',
                        title:'執行率'
                    },
                ],
            },
            {
                id:7,
                title:'JupJup 精釀生啤餐酒館',
                label_1:'商家中心 一般版',
                comment:['2','200','198','60%'],
                full_btn_1:'取得QRcode',
                full_btn_2:'選取方案',
                label_2:'評價中心',
                comment:[
                    {
                        num:'2',
                        title:'評論起始值'
                    },
                    {
                        num:'200',
                        title:'評論當前值'
                    },
                    {
                        num:'198',
                        title:'已增加評論數'
                    },
                    {
                        num:'60%',
                        title:'執行率'
                    },
                ],
            },
            {
                id:8,
                title:'JupJup 精釀生啤餐酒館',
                label_1:'商家中心 一般版',
                comment:['2','200','198','60%'],
                full_btn_1:'取得QRcode',
                full_btn_2:'選取方案',
                label_2:'評價中心',
                comment:[
                    {
                        num:'2',
                        title:'評論起始值'
                    },
                    {
                        num:'200',
                        title:'評論當前值'
                    },
                    {
                        num:'198',
                        title:'已增加評論數'
                    },
                    {
                        num:'60%',
                        title:'執行率'
                    },
                ],
            },
            {
                id:9,
                title:'JupJup 精釀生啤餐酒館',
                label_1:'商家中心 一般版',
                comment:['2','200','198','60%'],
                full_btn_1:'取得QRcode',
                full_btn_2:'選取方案',
                label_2:'評價中心',
                comment:[
                    {
                        num:'2',
                        title:'評論起始值'
                    },
                    {
                        num:'200',
                        title:'評論當前值'
                    },
                    {
                        num:'198',
                        title:'已增加評論數'
                    },
                    {
                        num:'60%',
                        title:'執行率'
                    },
                ],
            },
        
            
            
        ],

        //section applying組件用 申請中
        applying:[
            {},
            {},
            {},

        ],
        page: 0,
        pages:[],
        perPage: 4,  //一頁要秀出幾個
        displayedBooks:[],
    },

    computed: {  
        
        

    },
    created(){
        pagesAmount = Math.ceil(this.going.length/this.perPage)
        for(let i = 1;i<=pagesAmount;i++){
          this.pages.push(i)
        }
        this.setPage(1)
    },
    methods: {  
        setPage(p){
            if(p!=this.page){
            this.page = p
            minI = this.perPage * this.page - this.perPage 
            maxI = this.perPage * this.page
            disBooks=[]
            for(let i = minI; i<maxI; i++){
              disBooks.push(this.going[i])
            }
            this.displayedBooks = disBooks
            //   window.scrollTo(0,0);
            }
          }
      
     
    },
})


