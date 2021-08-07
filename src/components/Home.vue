<template>
    <div class = "home">

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
export default {
    name : "Home",
    data(){
        return {
            features : [
                "Avoid chemical products, switch to natural products",
                "The true supporter of eco-friendliness.",
                "Walk away from the mean team and join the green team",
                "Get your beauty while caring for mother nature"
            ]
        }
    }
}
</script>

<style scoped lang = "scss">
    @import "../scss/_variables.scss";
    .home{
        .green { 
            color: $green;
        }
        .about{
            width: 90%;
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
                            background-color: $green;
                            color: $white;
                            font-size: $font18;
                            display: flex;
                            align-items: center;
                            border-radius: 30px;
                            padding : 10px 30px;
                            font-weight: $medium;
                        }
                    }
                }
                .right{
                    .container{
                        display: flex;
                        justify-content: flex-end;
                        padding: 20px;
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
</style>