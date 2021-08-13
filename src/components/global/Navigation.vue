<template>
    <div class = "nav">
        <div class = "logo">
            <img src = "@/assets/nav-logo.svg" />
        </div>
        <div class = "expand" @click="showNav = !showNav">
            <i class = "fa fa-navicon"></i>
        </div>
        <div class = "menu" :class="showNav ? 'show' : ''">
            <div v-for="(item, i) in menu" v-bind:key = "i" class = "item" >
                <router-link :to = "item.link">{{item.caption}}</router-link>
            </div>
        </div>

    </div>
</template>

<script>
// import axios from 'axios';
export default{
    name : 'Navigation',
    data(){
        return{
            showNav : false,
            menu : [
                {link : '/', caption : 'Home'},
                {link : '/products', caption : 'our Products'},
                {link : '/about', caption : 'About Us'},
                {link : '/contact', caption : 'Contact'},
                {link : '/', caption : 'Blogs'},
                {link : '/', caption : 'Photos'},
                {link : '/', caption : 'Videos'},
                {link : '/', caption : 'Links'},
                {link : '/', caption : 'News'},
            ],
        }
    },
    mounted(){

    },
    methods : {

    },
    watch : {
        $route (to, from){
            this.showNav = false;
        }
    }
};
</script>

<style lang = "scss" scoped>
    @import "../../scss/_variables.scss";

    a{
        color: black;
    }
    .nav{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width : 100%;
        height : 90px;
        box-sizing: border-box;
        padding : 0 60px;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, .1);  
        .expand{
            display: none;
        }      
        .menu{
            display: flex;
            .item{
                padding : 0 20px;
                display: block;
            }
        }        
        .logo{
            display: block;
            img{
                max-height: 50px;
            }
        }
        .account{
            display : flex;            
            .noAuth{
                display: flex;
                .item{
                    padding : 0 10px;
                    display: block;
                }                
            }

            .settings{
                text-align: left;
                height: 100%;
                display: flex;
                align-items: center;
                position: relative;
                .dp{
                    display: flex;
                    align-items: center;
                    .dp-icon{
                        width: 50px;
                        height: 50px;
                        border-radius: 100px;
                        box-sizing: border-box;
                        border : solid 3px $greyLight;
                        display: block;
                        overflow: hidden;
                        img{
                            display: block;
                            width: 100%;
                        }
                    }
                    .name{
                        padding-left: 15px;
                        display: block;
                        color: $grey1;
                        font-size: $font15;
                        font-weight: $semibold;
                    }                
                }
                .dropdown{
                    z-index: 1000;
                    position: absolute;
                    color: $black;
                    width: max-content;
                    background-color: $white;
                    right: -50px;
                    top : 100%;
                    box-shadow: 1px 5px 9px rgb(0 0 0 / 9%);
                    border-radius: 21px;
                    border-top: none;
                    overflow: hidden;
                    .item{
                        a{
                            i{
                                font-size: $font18;
                                padding-right: 15px;
                            }
                            font-size: $font15;
                            color: $grey1;
                            padding : 15px 40px;
                            padding-left: 30px;
                            transition: color .3s;
                            display: block;
                            box-sizing: border-box;
                            &:hover{
                                background-color: $orange;
                                color : $white;
                            }
                        }
                    }
                }
            }
        }
    }

    @media (max-width: $breakpoint-desktop) {
        .nav{
            display: block;
            position : relative;
            .logo{
                display: flex;
                justify-content: center;
                padding : 10px 0;
            }
            .expand {
                cursor: pointer;
                display: flex;
                position : absolute;
                right : 10px;
                top : 10px;
                background-color: $white;
                box-shadow: $shadowMid;
                width : 40px;
                height : 40px;
                font-size: 20px;
                align-items: center;
                justify-content: center;
                border-radius: 100px;

            }
            height: auto;
            .menu{
                &.show{
                    display: block;
                }
                display: none;
                .item{
                    text-align: center;
                    padding: 5px 0;
                }
            }
        }
    }
</style>