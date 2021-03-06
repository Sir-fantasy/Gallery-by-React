import React, { Component } from 'react';

class ImgFigure extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    /**
     * imgFigure的点击处理函数
     */
    handleClick(e) {
        this.props.arrange.isCenter ? this.props.inverse() : this.props.center();
        e.stopPropagation();
        e.preventDefault();
    }

    render() {
        let styleObj = {},
            imgFigureClassName = 'img-figure';

        const { imageURL, title, desc } = this.props.data,
              { pos, rotate, isCenter } = this.props.arrange;

        //如果props属性中指定了这张图片的位置，则使用
         pos && ( styleObj = this.props.arrange.pos );
         isCenter && ( styleObj.zIndex = 11 );

        //设置图片的旋转角度
        if (this.props.arrange.rotate) {
            (['MozTransform', 'msTransform', 'WebkitTransform', 'transform']).forEach((value) => {
                styleObj[value] =`rotate(${this.props.arrange.rotate}deg)`;
            })
        };

        imgFigureClassName += this.props.arrange.isInverse ? ' is-inverse' : '';

        return ( 
            <figure className = { imgFigureClassName } style = { styleObj } onClick = { this.handleClick } >
                <img src = { imageURL } alt = { title }/> 
                <figcaption>
                    <h2 className = "img-title" > { title } </h2> 
                    <div className = "img-back" onClick = { this.handleClick } >
                        <p> { desc } </p>
                    </div> 
                </figcaption> 
            </figure>
        );
    }
}

export default ImgFigure;