<template>
    <div class = "contact">
        <div class = "heading">
            <span>Contact Us</span>
        </div>
        <div class = "container">
            <div class = "form">
                <form>
                    <div class = "bar">
                        <div class = "elem half">
                            <input type = "text" placeholder="Your name"/>
                            <span class = "icon">
                                <i class = "fa fa-user"></i>
                            </span>
                        </div>
                        <div class = "elem half">
                            <input type = "text" placeholder="Phone No."/>
                            <span class = "icon">
                                <i class = "fa fa-phone"></i>
                            </span>
                        </div>
                    </div>
                    <div class = "bar">
                        <div class = "elem half">
                            <input type = "text" placeholder="Your email"/>
                            <span class = "icon">
                                <i class = "fa fa-envelope"></i>
                            </span>
                        </div>
                        <div class = "elem half">
                            <input type = "text" placeholder="Company(Optional)"/>
                            <span class = "icon">
                                <i class = "fa fa-caret-square-o-up"></i>
                            </span>
                        </div>
                    </div>
                    <div class = "bar">
                        <div class = "elem">
                            <textarea placeholder="Type your message here...">
                            </textarea>
                        </div>
                    </div>
                    <div class = "submit">
                        <div class = "button">Submit</div>
                    </div>
                </form>
            </div>
            <div class = "infos">
                <div class = "box">
                    <span class = "label">Phone</span>
                    <span class = "val">+8801762111010 <br/>+88017343545
                    <br/>+880171231234</span>
                </div>
                <div class = "box">
                    <span class = "label">EMAIL</span>
                    <span class = "val">support@iclp.com<br/>support@iclp.com</span>
                </div>
                <div class = "box">
                    <span class = "label">Address</span>
                    <span class = "val">1365/54/7 Karwan Bazar Avenue,<br/>
                    Dhaka -1000, Bangladesh</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : "Contact"
}
</script>

<style lang = "scss" scoped>
    @import "../scss/_variables.scss";
    .contact{
        padding-bottom: 100px;
        .heading{
            @include heading;
        }
        .container{
            box-sizing: border-box;
            padding: 0 10%;
            display: flex;
            justify-content: space-between;
            .form{
                width: 45%;
                form{
                    textarea{
                        padding-left: 0 !important;
                        height: 150px;
                    }
                    input, textarea{
                        outline : none;
                        border : none;
                        /* font-family: $fontAnton; */
                        font-weight: $medium;
                        border-bottom: solid 2px $green;
                        line-height: 40px;
                        font-size: 14px;
                        width : 100%;
                        box-sizing: border-box;
                        padding-left: 20px;
                    }
                    display: block;
                    .bar{
                        margin : 30px 0;                        
                        display: flex;
                        justify-content: space-between;
                        .elem{
                            width : 100%;
                            position : relative;
                            .icon{
                                position : absolute;
                                left : 0;
                                line-height: 30px;
                                margin-top: -16px;
                                top: 50%;
                                color: $green;
                            }
                            &.half{
                                width : 45%;
                            }
                        }
                    }
                    .submit{
                        display: flex;
                        .button{
                            background-color: $green;
                            color : $white;
                            font-weight: $medium;
                            padding : 10px 25px;
                        }
                    }
                }
            }

            .infos{
                width: 45%;
                box-sizing: border-box;
                padding : 70px 0;
                .box{
                    display: flex;
                    padding : 15px 0; 
                    span{
                        display: block;
                    }
                    .label{
                        width : 130px;
                        font-family: $fontAnton;
                        /* font-weight: bold; */
                    }
                    .val{
                        font-size: 14px;

                    }
                }
            }   


        }

    }


    @media (max-width: $breakpoint-tablet) {
        .contact .container{
            display: block;
            .form{
                width: 100%;
            }
            .infos{
                width: 100%;
                padding : 50px 0 0;
            }
        }
    }
</style>