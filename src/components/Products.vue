<template>

    <div class = "products">

        <div class = "heading">
            <span>Our Products</span>
        </div>

        <div class = "categories">
            <div class = "items">
                <div v-for="(item, i) in categories" v-bind:key="i" class = "item"
                :class="selectedCategory.id == item.id ? 'selected' : ''"
                @click="selectedCategory.id = item.id">
                    {{item.value}}
                </div>
            </div>
        </div>
        <div class = "product-list">
            <div class = "items">
                <div v-for="(item, i) in products.filter(
                        e => 
                        e.categoryId == selectedCategory.id
                    )" 
                    v-bind:key="i" class = "item">
                    <div class = "wrap">
                        <div class = "image">
                            <img :src = "require(`@/assets/products/${item.image}`)" />
                            <div class = "hover">
                                <div class = "btn" @click="lightbox.show = true; lightbox.productId = item.id">
                                    <i class = "fa fa-external-link"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class = "lightbox" v-if="lightbox.show">
            <div class = "holder">
                <div class = "close" @click="lightbox.show = false">
                    <i class = "fa fa-close"></i>
                </div>
                <div class = "wrapper">
                    <div class = "image">
                        <img :src="require(`@/assets/products/${products.filter(e => e.id == lightbox.productId)[0].image}`)" />
                    </div>
                    <div class = "description" v-html="products.filter(e => e.id == lightbox.productId)[0].description">
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
            lightbox : {
                show : false,
                productId: 0,
            },
            categories : [
                {
                    value : "Jute Backpack",
                    id : 1,
                },
                {
                    value : "Polymer packing",
                    id : 2
                },
                {
                    value : "Natural Straw",
                    id : 3
                }
            ],
            selectedCategory : {
                id : 1,
            },
            products : [
                {
                    id : 0,
                    image : "jp1.jpg",
                    categoryId : 1
                },
                {
                    id : 1,
                    image : "jp2.jpg",
                    categoryId : 1
                },
                {
                    id : 2,
                    image : "jp3.jpg",
                    categoryId : 1
                },
                {
                    id : 3,
                    image : "pp1.jpg",
                    categoryId : 2
                },
                {
                    id : 4,
                    image : "pp2.jpg",
                    categoryId : 2
                },
                {
                    id : 5,
                    image : "ns1.jpg",
                    categoryId : 3
                },
                {
                    id : 6,
                    image : "ns2.jpg",
                    categoryId : 3
                },
            ]

        }
    },
    mounted(){
        this.products.forEach( e => {
            if(e.categoryId == 1){
                e.description = `<h2>Jute Backpack</h2>
                        <h3>Material: </h3>
                        <ul>
                            <li>Specially treated Jute Magical fabric</li>
                            <li>High Quality Metal zipper</li>
                            <li>Jute + Cotton mixture back (For sweat absorb)</li>
                            <li>Leather for Fashionable look/design</li>
                        </ul>
                        <h3>Properties:</h3>
                        <ul>
                            <li>Liquid repellent (Waterproof)</li>
                            <li>Dust repellent</li>
                            <li>Bio-degradable</li>
                            <li>Eco-friendly</li>
                            <li>Back side is Sweat absorbant</li>
                            <li>Huge inner space</li>
                        </ul>
                        `;
            }else if(e.categoryId == 2){
                e.description = `<h2>Polymer Packing</h2>
                        <h3>Properties</h3>
                        <ul>
                            <li>100% bio degradable</li>
                            <li>100% eco friendly</li>
                            <li>Degrades immediately in water</li>
                            <li>Made from natural sources</li>
                            <li>Causes no environment pollution like Polyethene</li>
                            <li>Perfect substitute of Polyethene in daily life usage</li>
                        </ul>`
            }else if(e.categoryId == 3){
                e.description = `<h2>Natural Straw</h2>
                        <ul>
                            <li>Eco friendly</li>
                            <li>Made from natural sources</li>
                            <li>100% bio-degradable</li>
                            <li>No chemical used</li>
                        </ul>
                `                
            }
        })
    }
}
</script>

<style lang = "scss" scoped>
    @import "../scss/_variables.scss";
    .products{

        .heading{
            @include heading;
        }

        .lightbox{
            position: fixed;
            left: 0;
            top : 0;
            width : 100%;
            height : 100%;
            background-color: rgba(255, 255, 255, .7);
            z-index: 100;            
            .holder{
                position: relative;
                width : 80%;
                height : 80%;
                margin-left: 10%;
                margin-top : 5%;
                box-sizing: border-box;
                border-radius: 20px;
                background-color: #000;
                overflow: hidden;
                .close{
                    position: absolute;
                    right: 5px;
                    top: 5px;
                    border: solid 4px #fff;
                    display: block;
                    $dim : 25px;
                    width: $dim;
                    height : $dim;
                    border-radius: 100px;
                    color : #fff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                    overflow: hidden;
                }
                .wrapper{
                    display: flex;
                    overflow-y: auto;
                    overflow-x: hidden;
                    height: 100%;
                    @media (max-width: $breakpoint-tablet) {
                        display: block;
                    }
                    @media (max-width: $breakpoint-phone) {
                        display: block;
                    }
                    .image{
                        width: 50%;
                        @media (max-width: $breakpoint-tablet) {
                            width: 100%;
                        }
                        @media (max-width: $breakpoint-phone) {
                            width: 100%;
                        }
                        height: 100%;
                        box-sizing: border-box;
                        padding : 25px;
                        img{
                            display: block;
                            max-width: 100%;
                        }
                    }
                    .description{
                        padding: 30px 20px 0;
                        width: 50%;
                        @media (max-width: $breakpoint-tablet) {
                            width: 100%;
                        }
                        @media (max-width: $breakpoint-phone) {
                            width: 100%;
                        }

                        color: #fff;
                    }
                }
            }
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
            padding : 50px 8% 70px;
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