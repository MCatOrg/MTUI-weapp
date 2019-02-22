<style scoped>
.flex{display: flex;}
.flex-center{display: flex; justify-content: center; align-items: center;}
.flex1{flex: 1;}
.flex-shrink-0{flex-shrink: 0;}

.tabs_list-item{display: inline-block; font-size: 32rpx; text-align: center; line-height: 80rpx; box-sizing: border-box; margin-left: 10rpx; margin-right: 10rpx; position: relative; border-bottom: 8rpx solid transparent;}
.width750{width: 750rpx;}
.width662{width: 662rpx;}
.tabs_list-item.cur{border-bottom: 8rpx solid #ccc;}
.tabs_list-item.list_all{width: 25%; margin-right: 0 !important; margin-left: 0 !important; margin-bottom: 20rpx; border-bottom: 2px solid transparent;;}
.tabs_list-item.cur_in_list_all{border-bottom: 2px solid #ccc;}
.line{position: relative; width: 100%;}
.line_cur{height: 4px; background-color: blueviolet; width: 200rpx; position: absolute;}
.badeg{position: absolute; width: 40rpx; height: 40rpx; line-height: 40rpx; text-align: center; font-size: 20rpx; border-radius: 50px; border: 1px solid #ccc; background-color: white; transform: scale(.9); top: 0; right: -20rpx;}
.badeg.right10{right: -10rpx;}
.tabs_list-item.list_all .badeg{right: 0;}

.icon{width: 88rpx; height: 48rpx; position: relative; border-left: 1px solid #d2d2d2; margin-top: 20rpx;}
.icon_down{height: 48rpx; transform: translateY(-25%); transition: all .3s;}
.icon_down.cur{ transform: translateY(0);}
.icon_down.cur::before{transform: rotate(315deg);}
.icon_down::before{content: ''; width: 20rpx; height: 20rpx; border-top: 1px solid #666; border-right: 1px solid #666; display: inline-block; transform: rotate(135deg); transition: all .3s;}

.tabs_list_all{position: absolute; top: 68rpx; right: 0; width: 750rpx; padding-top: 10rpx; padding-bottom: 10rpx; border-top: 1px solid #e5e5e5; box-shadow: 0 2px 10px #e5e5e5;}
</style>
<template>
    <view>
        <view class="tabs width750 flex" v-if="list && 5 >= list.length">
            <view @click="onItemClick(i)" :id="'list' + i" v-for="(tab, i) in cList" :key="i" :class="['tabs_list-item', 'flex1', 'flex-shrink-0', i === index ? 'cur' : '']">
                <span>{{tab.text}}</span>
                <span v-if="tab.badeg" class="badeg right10">{{tab.badeg}}</span>
            </view>
        </view>
        <view v-if="list && 5 < list.length" class="flex">
            <scroll-view :scroll-left="scrollLeft" class="tabs width662 flex-shrink-0" scroll-x>
                <view :style="{width: (itemWidth - 20) + 'rpx'}" class="tabs_list-item" v-if="cur">全部</view>
                <view v-if="!cur" class="tabs_list" :style="{width: TabsListWidth + 'rpx'}">
                    <view :style="{width: (itemWidth - 20) + 'rpx'}" @click="onItemClick(i)" :id="'list' + i" v-for="(tab, i) in cList" :key="i" :class="['tabs_list-item', i === index ? 'cur' : '']">
                        <span>{{tab.text}}</span>
                        <span v-if="tab.badeg" class="badeg">{{tab.badeg}}</span>
                    </view>
                </view>
            </scroll-view>
            <view class="icon flex-center" @click="cur = !cur">
                <view :class="['icon_down', cur ? 'cur' : '']"></view>
                <view class="tabs_list_all" v-if="cur">
                    <view @click="onItemClick(i)" :id="'list' + i" v-for="(tab, i) in cList" :key="i" :class="['tabs_list-item', 'list_all', i === index ? 'cur_in_list_all' : '']">
                        <span>{{tab.text}}</span>
                        <span v-if="tab.badeg" class="badeg">{{tab.badeg}}</span>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>
<script>
export default {
    data(){
        return {
            index: this.active,
            cur: false,
        }
    },
    props: {
        list: {
            type: Array,
            required: true,
        },
        active: {
            type: Number,
            default: 0,
        },
        itemWidth: {
            type: Number,
            default: 160
        }
    },
    computed: {
        TabsListWidth(){
            let width = 0
            if(this.list && this.list.length) width = this.list.length * this.itemWidth
            else this.$toast.WarningToast('list值不能为空')
            return width
        },
        scrollLeft(){
            return (this.itemWidth - 20) * (this.index - 2)
        },
        cList(){
            let list = []
            if(!this.list || !this.list.length){
                console.error('list不能为空')
            }else{
                for(let i of this.list){
                    if(Number(i.badeg) > 99) i.badeg = '99+'
                    list.push(i)
                }
            }
            return list
        },
    },
    methods: {
        onItemClick(i){
            this.index = i
            this.$emit('onclick', this.cList[i])
        },
    },
}
</script>
