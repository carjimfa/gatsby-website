import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "./aboutContent.css"
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css"
import "../../node_modules/slick-carousel/slick/slick-theme.css"
import "./timelineSlider.css"


var settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1
  };

const TimelineSlider=({children})=>(
    
    <StaticQuery
        query={
            graphql`
            query timeLineTextsQuery{
                allTimelineTextsJson{
                    edges{
                        node{
                            type
                            date
                            position
                            company
                            color
                            description
                        }
                    }
                }
            }`
        }
        
        render = {data=>(
            
            <Slider {...settings}>
                {getElements(data)}
            </Slider>         
        )}
    />
);

function getElements(data){
    const elements=[];
    data.allTimelineTextsJson.edges.forEach(item=>elements.push(getElement(item)));
    return elements;
}

function getElement(item){
    if(item.node.color==="white"){
        return getWhiteElement(item);
    }
    return getBlueElement(item);
}

function getWhiteElement(item){
    return <div class="slider-element">
    <div class="slider-content border-bottom">
        <div class="slider-space white-background"></div>
        <div class="slider-title white-background">
            <div class="slider-title-text">
                {item.node.type}
            </div>
            <div class="slider-title-date">
                {item.node.date}
            </div>
        </div>
        <div class="slider-text white-background border-left">
        <div class="slider-text-title">
            <div class="slider-text-position">{item.node.position}</div>
            <div class="slider-text-company">{item.node.company}</div>
        </div>
        <div class="slider-text-description">
            {item.node.description}
        </div>

        </div>
    </div>
    <div class="slider-space-bottom white-background"></div>
</div>;
}

function getBlueElement(item){
    return <div class="slider-element">
    <div class="slider-content border-bottom">
        <div class="slider-space blue-background"></div>
        <div class="slider-title blue-background">
            <div class="slider-title-text">
                {item.node.type}
            </div>
            <div class="slider-title-date">
                {item.node.date}
            </div>
        </div>
        <div class="slider-text blue-background border-left">
        <div class="slider-text-title">
            <div class="slider-text-position">{item.node.position}</div>
            <div class="slider-text-company">{item.node.company}</div>
        </div>
        <div class="slider-text-description">
            {item.node.description}
        </div>

        </div>
    </div>
    <div class="slider-space-bottom blue-background"></div>
</div>;
}

export default TimelineSlider;