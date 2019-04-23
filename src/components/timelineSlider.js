import React from "react";
import Slider from "react-slick";
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
        <div class="slider-element">
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
        </div>
        <div class="slider-element">
            <div class="slider-content border-bottom">
                <div class="slider-space blue-background"></div>
                <div class="slider-title blue-background">
                    <div class="slider-title-text">
                        Experience
                    </div>
                    <div class="slider-title-date">
                        Aug 2017 - Sep 2017
                    </div>
                </div>
                <div class="slider-text blue-background border-left">
                <div class="slider-text-title">
                    <div class="slider-text-position">Full Stack Developer</div>
                    <div class="slider-text-company">IVNOSIS SL</div>
                </div>
                <div class="slider-text-description">
                    I worked for only a few weeks in this company and in that period of time I built a complete Web API using .Net Framework 3.5+, MySQL, Entity Framework DB First and a Desktop App using DevExpress.
                </div>

                </div>
            </div>
            <div class="slider-space-bottom blue-background"></div>
        </div>
      </Slider>
    );
  }
}

export default TimelineSlider;