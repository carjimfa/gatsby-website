import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "./services.css"
import "./glitch.css"
import "./cray.css"
import { Link } from "gatsby";

const Services=({children})=>(
    <StaticQuery
        query={
            graphql`
            query ServicesTextsItemsQuery{
                allServicesTextsJson{
                    edges{
                        node{
                            title
                            description
                        }
                    }
                }
            }`
        }
        render = {data=>(

            <div className="services">
                <h1 className="what-can-i-do glitch cray" data-text="What can I do?">What can I do?</h1>
                {getServicesTexts(data)}
                <h1 className="what-on-your-mind">What do you have on mind?</h1>
                <p className="what-on-your-mind-p">Any other projects, services or whatever, you can <Link to="/contact/">contact me</Link> and we can have a chat, a sky or a coffee... I really love coffee btw. So, if you're not sure, just ask.</p>               
            </div>
        )}
    />
);

function getServicesTexts(data){
    const ServicesTexts=[];
    data.allServicesTextsJson.edges.forEach(item=>ServicesTexts.push(getServiceElement(item)));
    return ServicesTexts;
}

function getServiceElement(item){
    return <div className="service">
            <h1 className="service-title">{item.node.title}</h1>
            <br/>
            <p className="service-description">{item.node.description}</p>
        </div>;
}

export default Services;