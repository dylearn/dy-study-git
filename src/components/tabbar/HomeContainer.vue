<template>
    <div>
        <mt-swipe :auto="4000" >
            <mt-swipe-item v-for="(item,index) in lunbotu" :key="index"><img :src="item.img" alt=""></mt-swipe-item>
            <!--<mt-swipe-item></mt-swipe-item>-->
            <!--<mt-swipe-item>3</mt-swipe-item>-->
        </mt-swipe>
    </div>
</template>

<script >
    export default {
        data(){
            return{
                lunbotu:[]
            }
        },
        created(){
          this. getLunbotu
        },
        methods:{
            getLunbotu(){
                this.$http.get("http://vue.studyit.io/api/getlunbo").then(result=>{
                    if(result.body.status === 0){
                        this.lunbotu=result.body.message
                        console.log(result.body.status)
                    }
                })
            }
        }
    };

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.mint-swipe{
    height 200px
}
.mint-swipe-item
    &:nth-child(1)
        background-color #2AC845
    &:nth-child(2)
        background-color #4a82d1
    &:nth-child(3)
        background-color #8f8f94

</style>