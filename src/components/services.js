import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "./services.css"

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
                <h1 className="what-can-i-do">What can I do?</h1>
                {getServicesTexts(data)}
                <div className="duotone-background duotone"></div>
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