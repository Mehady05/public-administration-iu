import React from 'react'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesH2, ServicesP, ServicesIcon,  } from './ServicesElements';
import Icon1 from '../../images/undraw_Metrics_re_6g90.svg';
import Icon2 from '../../images/undraw_Metrics_re_6g90.svg';
import Icon3 from '../../images/undraw_Metrics_re_6g90.svg';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1}/>
                        <ServicesH2>
                            Reduce expences.
                        </ServicesH2>
                        <ServicesP>
                            React Website using Styled Components and Smooth Scroll - Beginner Project Fully Responsive
                        </ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2}/>
                        <ServicesH2>
                            Another Items.
                        </ServicesH2>
                        <ServicesP>
                            React Website using Styled Components and Smooth Scroll - Beginner Project Fully Responsive
                        </ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3}/>
                        <ServicesH2>
                            Services Area.
                        </ServicesH2>
                        <ServicesP>
                            React Website using Styled Components and Smooth Scroll - Beginner Project Fully Responsive
                        </ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesH1>
        </ServicesContainer>
    )
}

export default Services
