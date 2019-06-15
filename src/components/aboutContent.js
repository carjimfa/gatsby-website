import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "./aboutContent.css"
import "./glitch.css";
import "./cray.css";

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
                                fontWeight
                            }
                        }
                    }
                }
            }`
        }
        render = {data=>(
            <>
            <h1 className="glitch cray" data-text="Hello!">Hello!</h1>
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