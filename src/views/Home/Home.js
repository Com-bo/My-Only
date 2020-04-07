import React, { Component } from 'react';
import "../../assets/css/home.css"
import Swiper from "swiper"
import "../../assets/css/swiper.min.css"
import homelist from "../../data/Home.json"
class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            bannerLists: [{
                id: 1,
                imgsrc: "https://x.dscmall.cn/storage/data/gallery_album/108/original_img/108_P_1536792291627.jpg"
            },{
                id: 2,
                imgsrc: "https://x.dscmall.cn/storage/data/gallery_album/108/original_img/108_P_1536792291627.jpg"
            },,{
                id: 3,
                imgsrc: "https://x.dscmall.cn/storage/data/gallery_album/108/original_img/108_P_1536792291627.jpg"
            }],
            homelist:homelist.list
        }
    }
    componentDidMount(){
        this.getBanner()
    }
    getBanner = () => {
        new Swiper(".swiper-container", {
            autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            },
            pagination: {
                el: '.swiper-pagination',
            }
        })
    }
    render() {
        return (
            <div className="page">
                {/* 标题 */}
                <header className="header">
                    <a className="iconfont icon-jiantou-copy">返回</a>
                    <div className="title">蓝果小镇</div>
                    <a>。。。</a>
                </header>
                {/* 轮播图 */}
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            this.state.bannerLists.map((banner, key) => {
                                return (
                                    <div className="swiper-slide" key={key}>
                                        <img src={banner.imgsrc} alt="" />
                                    </div>
                                )
                            })
                        }

                    </div>
                    <div className="swiper-pagination"></div>
                </div>
                {/* 商品列表 */}
                <div className="home-product-list">
                    <ul>
                        {
                            this.state.homelist.map((product,key)=>{
                                return(
                                    <li key={key}>
                                        <img src={product.product_img_url}></img>
                                        <h3>{product.product_name}</h3>
                                        <div className="price">
                                            <p>{product.product_price}</p>
                                            <p>{product.product_dprice}</p>
                                        </div>
                                        <div className="info">
                                            <p>新品</p>
                                            <p>销量：0</p>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Home;