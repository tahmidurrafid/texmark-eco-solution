<template>
    <div class = "home">
        <div class = "slider">
            <div class = "prev" @click="prev()"> <i class = "fa fa-arrow-left"></i> </div>
            <div class = "next" @click="next()"> <i class = "fa fa-arrow-right"></i> </div>
            <swiper ref="mySwiper" :options="swiperOptions">
                <swiper-slide v-for="i in 3" v-bind:key="i" >
                    <div class = "slide">
                        <div class = "content">
                            <div class = "heading">
                                Join hands to{{i}} <br/>
                                save environment.
                            </div>
                            <div class = "subtitle">
                                Think Smart, Think Green – Recycle! 
                                <br />Join the Green Revolution and stop pollution!
                            </div>
                            <div class = "separator"></div>
                            <div class = "buttons">
                                <div class = "button">
                                    Read More
                                </div>
                            </div>
                        </div>
                        <div class = "image">
                            <img src="@/assets/slide1.jpg" />
                        </div>
                    </div>
                </swiper-slide>

            </swiper>
        </div>

        <div class = "about">
            <div class = "container">
                <div class = "left">
                    <div class = "heading">
                        Welcome to TexMark <span class = "green">Eco-Solution</span>
                    </div>
                    <div class = "line"></div>
                    <div class = "features">
                        <div class = "items">
                            <div v-for="(item, i) in features" v-bind:key="i" class = "item">
                                <i class = "fa fa-check"></i>
                                <span>{{item}}</span>
                            </div>
                        </div>
                    </div>
                    <div class = "buttons">
                        <div class = "tour">
                            <i class = "fa fa-play-circle"></i>
                            <span>Take a Tour</span>
                        </div>
                        <div class = "button">
                            Shop Now
                        </div>
                    </div>
                </div>
                <div class = "right">
                    <div class = "container">
                        <img src="@/assets/side-image.jpg" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
// import style (>= Swiper 6.x)
import 'swiper/swiper-bundle.css'

export default {
    name : "Home",
    data(){
        return {
            features : [
                "Avoid chemical products, switch to natural products",
                "The true supporter of eco-friendliness.",
                "Walk away from the mean team and join the green team",
                "Get your beauty while caring for mother nature"
            ],
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

<style scoped lang = "scss">
    @import "../scss/_variables.scss";

    @mixin button{
        background-color: $green;
        color: $white;
        display: flex;
        align-items: center;
        font-weight: $medium;
        cursor : pointer;
        box-sizing: border-box;
        font-size: $font18;        
        border-radius: 30px;
        padding : 8px 27px;
        border : solid 3px $green;
        transition: background-color .3s, color .3s;
        &:hover{
            background-color: transparent;
            color : $green;
        }
    }

    .home{
        .green { 
            color: $green;
        }
        .slider{
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
            $nav-offset : 2.96vw;
            .next{
                right : $nav-offset;     
            }
            .prev{
                left : $nav-offset;
            }
            .slide{
                background-color: #0F0F0F;
                height: 40vw;
                position: relative;
                .content{
                    padding : 7vw 10vw;  
                    .heading{
                        font-size: 4.44vw;
                        line-height: 5.18vw;
                        font-weight: $bold;
                        color: $green;
                    }
                    .subtitle{
                        padding : 2.22vw 0 1.11vw;
                        color : $white;
                        font-size: 1.85vw;
                    }                    
                    .separator{
                        @include marker;
                        margin-bottom: 2.96vw;
                    }

                    .buttons{
                        display: flex;
                        .button{
                            display: flex;
                            @include button;
                        }
                    }

                }
                .image{
                    position: absolute;
                    right: 0;
                    top : 0;
                    height: 100%;
                    img{
                        display: block;
                        height: 100%;
                    }
                }
            }
        }
        .about{
            box-sizing: border-box;
            padding-top : 70px;
            padding-bottom : 50px;
            width: 85%;
            margin: auto;
            .container{
                display: flex;
                margin-bottom : 30px;
                .left{
                    width: 50%;                    
                    .heading{
                        font-family: $fontAnton;
                        font-size: $font42;
                        color : $dark;
                    }
                    .line{
                        width: 30px;
                        height: 5px;
                        background: $marker;
                    }
                    .features{
                        margin: 40px 0;
                        .items{
                            padding-left: 50px;
                            color: $dark;
                            font-weight: $medium;
                            .item{
                                padding: 7px 0;
                                i{
                                    padding-right: 20px;
                                    font-size: $font13;
                                }
                                font-size: $font15;
                            }
                        }
                    }
                    .buttons{
                        display: flex;
                        justify-content: space-around;
                        box-sizing: border-box;
                        padding-right: 50px;
                        .tour{
                            display: flex;
                            align-items: center;
                            i{
                                font-size: $font40;
                                color : $green;
                            }
                            span{
                                padding-left: 20px;
                                text-transform: uppercase;
                                font-family: $fontAnton;
                            }
                        }
                        .button{
                            @include button;
                        }
                    }
                }
                .right{
                    width: 50%;
                    .container{
                        display: flex;
                        justify-content: flex-end;
                        padding: 20px;
                        padding-left: 50px;
                        box-sizing: border-box;
                        img{
                            width: 100%;
                            border-radius: 50px;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: $breakpoint-tablet) {
        .home{
            .slider{
                .slide{
                    .content{
                        .buttons{
                            display: none;
                        }
                    }
                }
            }
            .about{
                .container{
                    display: block;
                    .left{
                        width: 100%;
                        .heading{
                            font-size : 30px;
                        }
                        .features{
                            .items{
                                padding-left: 0;
                            }
                        }
                    }
                    .right{
                        margin-top: 50px;
                        width: 100%;
                        .container{
                            padding : 0;
                        }
                    }
                }
            }
        }
    }
</style>