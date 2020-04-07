import React, { Component } from 'react';
import "../../assets/css/category.css"
import categorylist from "../../data/Category.json"
import Iscroll from "iscroll"
class Category extends Component {
    constructor(props){
        super(props)
        this.state={
            categorylist:categorylist.Category,
            imgurl:require("../../assets/images/category/004.jpg")
        }
    }
    componentDidMount(){
        this.scrollleft()
    }
    scrollleft=()=>{
        document.getElementById("scroll-left").addEventListener("touchmove",(e)=>{
            e.preventDefault()
        },false)
        new Iscroll("#scroll-left",{
            scrollX:false,
            scrollY:true,
            preventDefault:false
        })
    }
    render() {
        return (
            <div>
                {/* 标题 */}
                <header className="header">
                    <a className="iconfont icon-jiantou-copy">返回</a>
                    <div className="title">分类</div>
                    <a>。。。</a>
                </header>
                <div className="categorymain">
                    <div className="category-left" id="scroll-left">
                        <ul className="cat-ul">
                            {
                                this.state.categorylist.map((list,key)=>{
                                   return(
                                    <li key={key}>
                                        <a>{list.name}</a>
                                    </li>
                                   )
                                })
                            }
                        </ul>
                    </div>
                    <div className="cate-right">
                        <div className="category">
                            <ul>
                                <li>
                                    <div className="img">
                                        <img src={this.state.imgurl}></img>
                                    </div>
                                    <span>电脑</span>
                                </li>
                                <li>
                                    <div className="img">
                                        <img src={this.state.imgurl}></img>
                                    </div>
                                    <span>电脑</span>
                                </li>
                                <li>
                                    <div className="img">
                                        <img src={this.state.imgurl}></img>
                                    </div>
                                    <span>电脑</span>
                                </li>
                                <li>
                                    <div className="img">
                                        <img src={this.state.imgurl}></img>
                                    </div>
                                    <span>电脑</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Category;