import React from 'react';
import ReactDOM from 'react-dom';

import JqxSlider from '../../../jqwidgets-react/react_jqxslider.js';

class App extends React.Component {
    componentDidMount() {        
        this.carPreview().init();
    }
    carPreview() {
        let config = {
            timeOut: null,
            currentSlide: 0,
            navigationContainer: document.getElementById('navigationContainer'),
            nextButton: document.getElementById('nextButton'),
            previousButton: document.getElementById('previousButton'),
            playButton: document.getElementById('playButton'),
            stopButton: document.getElementById('stopButton'),
            slider: this.refs.jqxSlider,
            contentContainerSelector: 'slider-demo-content-',
            locked: false
        };
        let attachEventListeners = () => {
            // Animates the fading of the "navigationContainer"
            config.navigationContainer.addEventListener('mouseenter', () => {
                let loop = 0;
                let interval = setInterval(() => {
                    config.navigationContainer.style.opacity = loop;
                    loop += 0.2;
                    if (loop >= 1) {
                        clearInterval(interval);
                        config.navigationContainer.style.opacity = 1;
                    }
                }, 50);
            });

            config.navigationContainer.addEventListener('mouseleave', () => {
                // "navigationContainer" fade out animation
                let loop = 1;
                let interval = setInterval(() => {
                    config.navigationContainer.style.opacity = loop;
                    loop -= 0.2;
                    if (loop <= 0.3) {
                        clearInterval(interval);
                        config.navigationContainer.style.opacity = 0.1;
                    }
                }, 50);
            });

            config.nextButton.addEventListener('click', () => {
                config.slider.incrementValue();
            });

            config.previousButton.addEventListener('click', () => {
                config.slider.decrementValue();
            });

            config.playButton.addEventListener('click', () => {
                if (!config.timeOut) {
                    startSlideShow();
                }
            });
            config.stopButton.addEventListener('click', () => {
                stopSlideShow();
            });
            config.slider.on('change', (event) => {
                loadSlide(event.args.value);
            });
        };
        let startupConfig = () => {
            config.navigationContainer.style.opacity = 0.1;
        };
        let startSlideShow = () => {
            config.timeOut = setTimeout(() => {
                startSlideShow();
                let slider = config.slider,
                    currentValue = slider.value(),
                    max = slider.max(),
                    min = slider.min();
                if (currentValue < max) {
                    slider.incrementValue();
                } else {
                    slider.setValue(min);
                }
            }, 2000);
        };
        let stopSlideShow = () => {
            clearTimeout(config.timeOut);
            config.timeOut = null;
        };
        let loadSlide = (id) => {
            showSlide(id);
        };
        let hideCurrentSlide = () => {
            document.getElementById(config.contentContainerSelector + config.currentSlide).style.display = 'none';
        };
        let showSlide = (id) => {
            hideCurrentSlide();
            document.getElementById(config.contentContainerSelector + id).style.display = 'block';
            document.getElementById(config.contentContainerSelector + id).style.opacity = 0.5;
            setTimeout(() => {
                document.getElementById(config.contentContainerSelector + id).style.opacity = 1;
            }, 100);
            config.currentSlide = id;
        };
        return {
            init: () => {
                attachEventListeners();
                startupConfig();
            }
        };
    }
    render() {
        return (
            <div className='jqx-rc-all slider-demo-main'>
                <div id='slider-demo-header' className='jqx-rc-t slider-demo-header'>
                    <div className='slider-demo-header-content'>
                        Precious Cars
                    </div>
                </div>
                <div className='jqx-rc-b slider-demo-content'>
                    <div className='jqx-rc-all slider-demo-content-inner'>
                        <div className='jqx-rc-all slider-demo-content-container'>
                            <div id='navigationContainer' className='slider-demo-content-navigation'>
                                <img src='../../images/previous.png' className='slider-demo-navigation-item' alt='Previous'
                                    title='Previous' id='previousButton' />
                                <img src='../../images/play.png' className='slider-demo-navigation-item' alt='Play' title='Play'
                                    id='playButton' />
                                <img src='../../images/stop.png' className='slider-demo-navigation-item' alt='Stop' title='Stop'
                                    id='stopButton' />
                                <img src='../../images/next.png' className='slider-demo-navigation-item' alt='Next' title='Next'
                                    style={{marginRight: '3px'}} id='nextButton' />
                            </div>
                            <div id='slider-demo-content-0' style={{display: 'block'}}>
                                <div className='slider-demo-content-image-border'>
                                    <img src='../../images/mercedes.jpg' alt='Mercedes' />
                                </div>
                                <div className='slider-demo-content-info'>
                                    <span className='slider-demo-info-header'>Brabus Black Baron</span>
                                    <div className='slider-demo-info-content'>
                                        Brabus will show its Black Baron E V12, based on the 2010 Mercedes-Benz E63 AMG,
                                        at the 2009 Frankfurt Motor Show next week. Visually, Brabus&#39; Black Baron E V12
                                        gets a new engine ventilation system, new front quarter panels, an upgraded front
                                        bumper, new side skirts, a trunk mounted spoiler, new front quarter panels and awkward
                                        looking rear-wheel covers.
                                    </div>
                                </div>
                            </div>
                            <div id='slider-demo-content-1' style={{display: 'none'}}>
                                <div className='slider-demo-content-image-border'>
                                    <img src='../../images/jaguar.jpg' alt='Jaguar' />
                                </div>
                                <div className='slider-demo-content-info'>
                                    <span className='slider-demo-info-header'>Jaguar XFR</span>
                                    <div className='slider-demo-info-content'>
                                        The Jaguar XF (type (X250) is a mid-size luxury car / sports saloon produced by
                                        British car manufacturer Jaguar. The car, which replaced the Jaguar S-Type, was
                                        launched at the 2007 Frankfurt Motor Show following the public showing of the C-XF
                                        concept in January 2007 at the North American International Auto Show.
                                    </div>
                                </div>
                            </div>
                            <div id='slider-demo-content-2' style={{display: 'none'}}>
                                <div className='slider-demo-content-image-border'>
                                    <img src='../../images/ferrari.jpg' alt='Ferrari' />
                                </div>
                                <div className='slider-demo-content-info'>
                                    <span className='slider-demo-info-header'>Ferrari Enzo</span>
                                    <div className='slider-demo-info-content'>
                                        The Enzo was designed by Japanese Pininfarina head Ken Okuyama was initially introduced
                                        at the 2002 Motor Show in Paris and had a limited number of units priced at $ 659,330.
                                        Pininfarina wanted a car the will be entirely different from the usual approach
                                        used for its predecessors (GTO, F40 and 50).
                                    </div>
                                </div>
                            </div>
                            <div id='slider-demo-content-3' style={{display: 'none'}}>
                                <div className='slider-demo-content-image-border'>
                                    <img src='../../images/lamborgini.jpg' alt='Lamborgini' />
                                </div>
                                <div className='slider-demo-content-info'>
                                    <span className='slider-demo-info-header'>Lamborghini Gallardo</span>
                                    <div className='slider-demo-info-content'>
                                        The Lamborghini Gallardo is a sports car built by Lamborghini. The Gallardo is Lamborghini's
                                        most-produced model to date, with over 10,000 built in its first seven years of
                                        production. The Gallardo offers two choices of transmissions, H-Box and an advanced
                                        six-speed electro-hydraulically controlled semi-automatic robotized manual.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='slider-demo-slider-container'>
                        <JqxSlider ref='jqxSlider'
                            height={250} width={36}
                            orientation={'vertical'}
                            mode={'fixed'} max={3}
                            tooltip={false}
                        />
                    </div>
                </div>
            </div>            
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
