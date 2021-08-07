<template>
    <div class = "nav">
        <div class = "logo">
            <img src = "@/assets/nav-logo.svg" />
        </div>
        <div class = "menu">
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
            menu : [
                {link : '/', caption : 'Home'},
                {link : '/', caption : 'our Products'},
                {link : '/', caption : 'About Us'},
                {link : '/', caption : 'Contact'},
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
</style>