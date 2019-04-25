import React from "react";
import Slider from "react-slick";
import TimelineElements from "./timelineElements";
import "../../node_modules/slick-carousel/slick/slick.css"
import "../../node_modules/slick-carousel/slick/slick-theme.css"
import "./timelineSlider.css"

class TimelineSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        {/* <div class="slider-element">
            <div class="slider-content border-bottom">
                <div class="slider-space white-background"></div>
                <div class="slider-title white-background">
                    <div class="slider-title-text">
                        Experience
                    </div>
                    <div class="slider-title-date">
                        Oct 2017 - Nowadays
                    </div>
                </div>
                <div class="slider-text white-background border-left">
                <div class="slider-text-title">
                    <div class="slider-text-position">Software Engineer</div>
                    <div class="slider-text-company">Tech Education Rights & Technologies</div>
                </div>
                <div class="slider-text-description">
                    Since october 2017, I've been working as a software engineer in Aula Salud architecturing and building different applications, systems, APIs, infrastructure and more. I've been a key part of the migration of the entire infrastructure from on-premises virtual private servers to the Azure Cloud. We also have established an entire new user directory with Active Directory and redefined multiple business processes making them more efficient and productive. I've used so far .Net Core 2.2, SQL Server 2017, Azure MySql DB, Azure DB, Windows Server 2016, Active Directory, Sharepoint, Exchange, Docker containers, Powershell...
                </div>

                </div>
            </div>
            <div class="slider-space-bottom white-background"></div>
        </div> */}
        <TimelineElements>
        </TimelineElements>
      </Slider>
    );
  }
}

export default TimelineSlider;