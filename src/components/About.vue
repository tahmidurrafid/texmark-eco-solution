<template>
    <div class = "about">
        <div class = "history">
            <div class = "title">Who We Are</div>
            <div class = "description">
                <div v-if="!expand" class = "short">
                    We believe in designing the best interfaces. We create everything digital and analytical
                    <span class = "more">
                        <div class = "btn" @click="expand = true">more</div>
                    </span>
                </div>
                <div v-else class = "full">
                    We believe in designing the best interfaces. We create everything digital and analytical
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                    <span class = "more">
                        <div class = "btn" @click="expand = false">less</div>
                    </span>
                </div>
            </div>
        </div>

        <div class = "team">
            <div class = "heading">
                <span>Workers/Execuives</span>
            </div>
            <div class = "members">
                <div class = "member" v-for="i in 4" v-bind:key="i">
                    <div class = "wrap">
                        <div class = "dp">
                            <img src = "@/assets/dp1.jpg" />
                        </div>
                        <div class = "name">Muzahid Rumman</div>
                        <div class = "designation">Executive Manager</div>
                        <div class = "social">
                            <div class = "btn">
                                <i class = "fa fa-facebook"></i>
                            </div>
                            <div class = "btn">
                                <i class = "fa fa-linkedin"></i>
                            </div>
                            <div class = "btn">
                                <i class = "fa fa-envelope-o"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class = "achievement">
            <div class = "heading">
                <span>Achievement</span>
            </div>

            <div class = "slides">
                <div class = "prev" @click="prev()"> <i class = "fa fa-arrow-left"></i> </div>
                <div class = "next" @click="next()"> <i class = "fa fa-arrow-right"></i> </div>
                <swiper ref="mySwiper" :options="swiperOptions">
                    <swiper-slide v-for="i in 3" v-bind:key="i" >
                        <div class = "prize">
                            <div class = "position">1st Runner up</div>
                            <div class = "competition">
                                BCC-National Innovation Competition
                            </div>

                            <div class = "brief">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <div class = "projects">
            <div class = "heading">
                <span>Our Projects</span>
            </div>
            <div class = "items">
                <div class = "item">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

export default {
    name : "About",
    data(){
        return {
            swiperOptions: {
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                loop : true
            }
        }
    },
    components: {
        Swiper,
        SwiperSlide
    },
    directives: {
        swiper: directive
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper
        }
    },
    mounted() {
        console.log('Current Swiper instance object', this.swiper)
        // this.swiper.slideTo(3, 1000, false);

    },
    methods : {
        next : function(){
            this.swiper.slideNext(1000, false);
        },
        prev : function(){
            this.swiper.slidePrev(1000, false);
        }
    }
}
</script>

<style lang = "scss">
    @import "../scss/_variables.scss";

    .about{
        padding-bottom: 50px;
        .history{
            background-color: $darkGreen;
            box-sizing: border-box;
            padding: 130px 15%;
            color : $white;
            .title{
                font-size: 16px;
            }
            .description{
                padding-top: 20px;
                font-size: 34px;
                font-weight: $medium;
                .more{
                    margin: 0 12px;
                    line-height: 10px;
                    vertical-align: middle;
                    .btn{
                        cursor : pointer;
                        display: inline-block;
                        height : 10px;
                        font-size: 16px;
                        padding : 10px;
                        border : solid 2px $white;
                    }
                }
                .full{
                    font-size: 16px;
                    font-weight: 300;
                    text-align: justify;
                    line-height: 30px;
                }
            }
        }
        .team{
            .heading{
                @include heading;
            }
        }
        .members{
            display: flex;
            justify-content: space-between;
            box-sizing: border-box;
            padding: 0 8%;
            .member{
                width: 23%;
                .wrap{
                    padding : 30px 0;
                    box-sizing: border-box;
                    border : solid 1px $greyLight;
                    /* box-shadow: $shadowMid; */
                    border-radius: 20px;
                    text-align: center;                    
                    .dp{
                        width : 100px;
                        height: 100px;
                        margin : auto;
                        border-radius: 100%;
                        overflow: hidden;
                        img{
                            width : 100%;
                            display: block;
                        }
                    }
                    .name{
                        margin : 10px 0;
                        font-size: 16px;
                    }
                    .designation{
                        margin: 10px 0;
                        font-size: 14px;
                        color : $green;
                    }
                    .social{
                        display: flex;
                        justify-content: center;
                        margin: 15px 0;                        
                        .btn{
                            $dim : 35px;
                            width : $dim;
                            height : $dim;
                            line-height : $dim - 3px;
                            box-sizing: border-box;
                            border: solid 2px $dark;
                            color : $dark;
                            border-radius: 100%;
                            margin : 0 5px;
                            i{
                                font-size: 15px;
                            }
                            cursor: pointer;
                            transition: background-color .4s, color .4s;
                            &:hover{
                                background-color: $dark;
                                color : $white;
                            }
                        }
                    }
                }
            }
        }

        .achievement{
            /* display: none; */
            background-color: $dark;
            margin-top: 70px;  
            box-sizing: border-box;
            padding : 50px 0 100px;          
            color : $white;
            .heading{
                @include heading;
                color : $white;
                margin : 0;
                padding-top : 0;                
            }

            .slides{
                position : relative;
                .next , .prev{
                    position: absolute;
                    z-index: 10000;
                    background-color: $black;
                    font-size: $font18;
                    color: $white;
                    top : 50%;
                    display: block;
                    $nav-dim : 50px;
                    width: $nav-dim;
                    height: $nav-dim;
                    line-height: $nav-dim;
                    text-align: center;
                    border-radius: 100%;
                    margin-top: -25px;
                    cursor: pointer;
                    opacity: .5;
                    transition: opacity .2s, transform .3s;
                    &:hover{
                        opacity: 1;
                        transform : scale(1.2)
                    }
                }
                $nav-offset : 100px;
                .next{
                    right : $nav-offset;     
                }
                .prev{
                    left : $nav-offset;
                }                
            }

            .prize{
                box-sizing: border-box;
                padding : 0 20%;
                padding-top : 10px;
                position : relative;
                text-align: center;

                .competition{
                    font-family: $fontAnton;
                    font-size: 26px;
                    color : $green;
                    padding: 10px 0;                    
                }
                .position{
                    color: $white;
                    font-weight: $medium;
                }
                .brief{

                }
            }
        }
        .projects{
            /* background-color: $greyLight; */
            display: none;
            margin-top: 50px;
            .heading{
                @include heading;
                /* color : $white; */
            }
        }
    }
</style>