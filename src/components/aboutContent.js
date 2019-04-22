import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "./aboutContent.css"

const AboutContent=({children})=>(
    <StaticQuery
        query={
            graphql`
            query AboutTextsItemsQuery{
                allAboutTextsJson{
                    edges{
                        node{
                            value
                            style{
                                color
                            }
                        }
                    }
                }
            }`
        }
        render = {data=>(
            <>
            <h1>Hello!</h1>
            {getAboutTexts(data)}
            </>
        )}
    />
);

function getAboutTexts(data){
    const aboutTexts=[];
    data.allAboutTextsJson.edges.forEach(item=>aboutTexts.push(<p style={item.node.style}>{item.node.value}</p>));
    return aboutTexts;
}

export default AboutContent;