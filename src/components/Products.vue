<template>
    <div class = "products">
        <div class = "heading">
            <span>Our Products</span>
        </div>

        <div class = "categories">
            <div class = "items">
                <div v-for="(item, i) in categories" v-bind:key="i" class = "item"
                :class="selectedCategory.index == i ? 'selected' : ''"
                @click="selectedCategory.index = i, selectedCategory.subIndex = 0">
                    {{item.value}}
                </div>
            </div>
        </div>
        <div class = "sub-categories">
            <div class = "items">
                <div v-for="(item, i) in categories[selectedCategory.index].sub" v-bind:key="i" 
                class = "item" :class="i == selectedCategory.subIndex ? 'selected' : ''"
                @click="selectedCategory.subIndex = i">
                    {{item.value}}
                </div>
            </div>
        </div>
        <div class = "product-list">
            <div class = "items">
                <div v-for="(item, i) in products.filter(
                        e => 
                        e.categoryId == categories[selectedCategory.index].sub[selectedCategory.subIndex].id
                    )" 
                    v-bind:key="i" class = "item">
                    <div class = "wrap">
                        <div class = "image">
                            <img :src = "require(`@/assets/products/${item.image}.jpg`)" />
                            <div class = "hover">
                                <div class = "btn">
                                    <i class = "fa fa-external-link"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    </div>
</template>

<script>
export default {
    name : "Products",
    data(){
        return{
            categories : [
                {
                    value : "Baggage Section",
                    id : 1,
                    sub : [
                        {
                            value : "Jute Backpack",
                            id : 3
                        },
                        {
                            value : "Jute Laptop bag",
                            id : 4                            
                        },
                        {
                            value : "Jute Handbag",
                            id : 5
                        },
                        {
                            value : "Fashionable Bag",
                            id : 6
                        },
                    ]
                },
                {
                    value : "Packaging Section",
                    id : 2,
                    sub : [
                        {
                            value : "Polymer Packing",
                            id : 7
                        },
                        {
                            value : "Others",
                            id : 8
                        }
                    ]                    
                }
            ],
            selectedCategory : {
                index : 0,
                subIndex : 0 
            } ,
            products : [
                {
                    image : "1",
                    categoryId : 3
                },
                {
                    image : "2",
                    categoryId : 3
                },
                {
                    image : "3",
                    categoryId : 3
                },
                {
                    image : "6",
                    categoryId : 3
                },
                {
                    image : "8",
                    categoryId : 3
                },
                {
                    image : "9",
                    categoryId : 3
                },
                {
                    image : "2",
                    categoryId : 4
                },
                {
                    image : "3",
                    categoryId : 4
                },
                {
                    image : "1",
                    categoryId : 7
                },
                {
                    image : "9",
                    categoryId : 7
                },
                {
                    image : "8",
                    categoryId : 7
                },
                {
                    image : "6",
                    categoryId : 7
                },
            ]

        }
    }
}
</script>

<style lang = "scss" scoped>
    @import "../scss/_variables.scss";
    .products{
        .heading{
            @include heading;
        }
        .categories{
            display: flex;
            justify-content: center;
            .items{
                border: solid 1px $greyLight;
                display: flex;
                justify-content: center;
                box-sizing: border-box;
                $radius : 30px;
                border-radius: $radius;
                .item{
                    border-radius: $radius;
                    font-weight: $medium;
                    font-size: 18px;
                    box-sizing: border-box;
                    padding: 10px 30px;
                    @media (max-width: $breakpoint-phone) {
                        padding: 10px 10px;                        
                    }
                    &.selected{
                        background-color : $green;
                        color : $white;
                    }
                    cursor: pointer;
                }

            }
        }
        .sub-categories{
            margin: 30px;
            display: flex;
            justify-content: center;
            .items{
                display: flex;
                justify-content: center;
                box-sizing: border-box;
                flex-wrap: wrap;
                .item{
                    display: flex;
                    align-items: center;
                    /* font-family: $fontAnton; */
                    font-size: 14px;
                    font-weight: $semibold;
                    box-sizing: border-box;
                    padding: 10px 10px;
                    cursor: pointer;                    
                    &.selected{
                        color : $green;
                    }
                    &:before{
                        content : '';
                        $dot : 4px;
                        border-radius: $dot;
                        height : $dot;
                        width : $dot;
                        background-color : $green;
                        display: block;
                        margin-right: 15px;
                    }
                }

            }
        }
        .product-list{
            box-sizing: border-box;
            padding : 0 8%;
            padding-bottom : 70px;
            .items{
                display: flex;
                flex-wrap: wrap;
                .item{
                    width : 25%;
                    padding-bottom: 25%;
                    @media (max-width: $breakpoint-tablet) {
                        width : 50%;
                        padding-bottom: 50%;
                    }
                    @media (max-width: $breakpoint-phone) {
                        width : 100%;
                        padding-bottom: 100%;
                    }
                    position : relative;
                    overflow: hidden;
                    .wrap{
                        left: 0;
                        top : 0;
                        box-sizing: border-box;
                        width : 100%;
                        height : 100%;
                        padding : 15px;
                        position: absolute;
                        .image{
                            width : 100%;
                            height : 100%;
                            border-radius: 15px;
                            overflow: hidden;
                            position : relative;
                            &:hover .hover{
                                top : 0;
                            }                            
                            img{
                                width : 100%;
                            }
                            .hover{
                                position : absolute;
                                left : 0;
                                top : 100%;
                                width : 100%;
                                height: 100%;
                                color : white;
                                background-color: rgb(106, 190, 82, .7);
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                transition: top .5s;

                                .btn{
                                    display: block;
                                    $dim : 50px;
                                    cursor: pointer;
                                    height : $dim;
                                    width : $dim;
                                    line-height : $dim;
                                    text-align: center;
                                    box-sizing: border-box;
                                    border: solid 2px $white;
                                    border-radius: $dim;
                                    transition : backgound-color .3s, color .3s;
                                    &:hover{
                                        background-color: $white;
                                        color: $green;
                                    }
                                    i{
                                        font-size: 18px;
                                    }
                                }
                            }

                        }
                    }
                }
            }
        }
    }

</style>