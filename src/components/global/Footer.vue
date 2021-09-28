<template>
    <div class = "footer">
        <div class = "wrapper">
            <div class = "item left">
                <div class = "caption" ><span>Find US</span></div>                
                <div class = "infos">
                    <div class = "box">
                        <span class = "label">Phone</span>
                        <span class = "val">+8801405780240</span>
                    </div>
                    <div class = "box">
                        <span class = "label">EMAIL</span>
                        <span class = "val">texmark.ecosolution@gmail.com</span>
                    </div>
                    <div class = "box">
                        <span class = "label">Address</span>
                        <span class = "val">MERS Habib enterprise, 1<sup>st</sup> floor, Dublia Bazer, 
                        <br/>Pabna sadar, Pabna<br/>
                        </span>
                    </div>
                </div>
            </div>
            <div class = "item mid">
                <div class = "caption" >
                    <span>Site Links</span>
                </div>
                <div class = "links">
                    <div v-for="(item, i) in menu" v-bind:key = "i" class = "link" >
                        <router-link to = "/route1">{{item.caption}}</router-link>
                    </div>
                </div>
            </div>
            <div class = "item right">
                <div class = "wrap">
                    <div class = "logo">
                        <img src = "@/assets/footer-logo.svg" />
                    </div>
                    <div class = "social">
                        <div class = "text">Follow us on</div>
                        <div class = "links">
                            <router-link to = "#"> <i class = "fa  fa-facebook-official"></i> </router-link>    
                            <router-link to = "#"> <i class = "fa  fa-github"></i> </router-link>    
                            <router-link to = "#"> <i class = "fa  fa-instagram"></i> </router-link>    
                            <router-link to = "#"> <i class = "fa  fa-linkedin-square"></i> </router-link>    
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
        <div class = "copy">
            Copyright 2021-2021 by TexMark Eco-Solution | All Rights Reserved.            
        </div>
    </div>
</template>

<script>
    export default{
        name : 'Footer',
        data(){
            return{
                menu : [
                    {link : '/', caption : 'our Products'},
                    {link : '/', caption : 'About Us'},
                    {link : '/', caption : 'Contact'},
                    {link : '/', caption : 'Blogs'},
                    {link : '/', caption : 'Photos'},
                ]
            }
        }        
    };
</script>

<style lang = "scss" scoped>
    @import "../../scss/_variables.scss";
    $styleFont : 'Montserrat Subrayada';

    .footer{
        margin-top : 20px;
        background-color: black;
        color : white;
        .wrapper{
            padding : 60px 60px;            
            display: flex;
            box-sizing: border-box;
            .item{
                width: 33.33%;
                text-align: left;

                .caption{
                    font-size: 18px;
                    font-weight: bold;
                    padding-bottom: 30px;
                    span{
                        position: relative;
                        &::after{
                            position: absolute;
                            right : 0;
                            bottom : 0;
                            content: ' ';
                            display: block;
                            height: 2px;
                            width: 20px;
                            background-color: white;
                        }
                    }

                }
                &.left{
                    .infos{
                        .box{
                            display: flex;
                            padding : 8px 0; 
                            span{
                                display: block;
                            }
                            .label{
                                width : 130px;
                                font-family: $styleFont;
                                font-weight: bold;
                            }
                            .val{
                                font-size: 14px;

                            }
                        }
                    }   
                }         
                &.mid{
                    text-align: center;
                    .link{
                        padding : 5px 0;
                        font-size: 14px;
                    }
                }    
                &.right{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    .logo{
                        display: flex;
                        justify-content: center;
                        img{
                            display: block;
                        }
                    }
                    .social{
                        padding-top: 20px;                        
                        display: flex;
                        .text{
                            display: flex;
                            align-items: center;

                            &::after{
                                display: block;
                                height : 2px;
                                width : 20px;
                                margin : 0 10px;
                                content : ' ';
                                background-color: white;
                            }
                        }
                        .links{
                            a{
                                padding : 0 8px;
                                i{
                                    font-size: 22px;
                                }
                            }
                        }
                    }
                }
            }
        }

        .copy{
            font-size: 13px;
            font-weight: medium;
            background-color: #1C1C1C;
            height :60px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
        }
    }
    @media (max-width: $breakpoint-tablet) {
        .footer{
            .wrapper{
                display: block;
                .item{
                    width : 100%;
                    padding-top: 20px;
                    &.left{
                        display: none;                        
                        /* text-align: center; */
                        .infos{
                            .box{
                                /* justify-content: center; */
                            }
                        }
                    }
                }
            }
        }
    }

</style>