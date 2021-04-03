import React from 'react'
import Typed from "react-typed";
import Particles from 'react-particles-js';
import { faCircle } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>News</h1>
                <Typed
                    className="typed-text"
                    strings={[
                        "Protection", 
                        "Prevention", 
                        "Attack"
                    ]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <Particles 
                    params={{
                        particles:{
                            number:{
                                value: 90,
                                density: {
                                    enable: true,
                                    value_area: 900
                                }
                            },
                            shape:{
                                type: "circle",
                                stroke:{
                                    width: 6
                                }
                            }
                        }
                    }}
                />
            </div>
        </div>
    )
}
export default Header;