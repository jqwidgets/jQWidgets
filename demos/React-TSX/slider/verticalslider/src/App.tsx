import * as React from 'react';
 


import './App.css';

import JqxSlider, { ISliderProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxslider';
/* tslint:disable:no-console */

class App extends React.PureComponent<{}, ISliderProps> {
    public timeOut = setTimeout(() => { /* */ }, 1000);
    private mySlider = React.createRef<JqxSlider>();
    private currentSlide: number = 0;

    constructor(props: {}) {
        super(props);

        this.change = this.change.bind(this);
    }

    public componentDidMount() {
        (document.getElementsByClassName('slider-demo-header')[0] as HTMLElement).style.backgroundImage = "url('https://www.jqwidgets.com/react/images/slider-demo-header-background.png')";

        this.carPreview().init();
    }

    public render() {
        return (
            <div className="jqx-rc-all slider-demo-main">
                <div id="slider-demo-header" className="jqx-rc-t slider-demo-header">
                    <div className="slider-demo-header-content">
                        Precious Cars
                </div>
                </div>
                <div className="jqx-rc-b slider-demo-content">
                    <div className="jqx-rc-all slider-demo-content-inner">
                        <div className="jqx-rc-all slider-demo-content-container">
                            <div id="navigationContainer" className="slider-demo-content-navigation">
                                <img src="https://www.jqwidgets.com/react/images/previous.png" className="slider-demo-navigation-item" alt="Previous"
                                    title="Previous" id="previousButton" />
                                <img src="https://www.jqwidgets.com/react/images/play.png" className="slider-demo-navigation-item" alt="Play" title="Play"
                                    id="playButton" />
                                <img src="https://www.jqwidgets.com/react/images/stop.png" className="slider-demo-navigation-item" alt="Stop" title="Stop"
                                    id="stopButton" />
                                <img src="https://www.jqwidgets.com/react/images/next.png" className="slider-demo-navigation-item" alt="Next" title="Next"
                                    style={{ marginRight: 3 }} id="nextButton" />
                            </div>
                            <div id="slider-demo-content-0" style={{ display: "block" }}>
                                <div className="slider-demo-content-image-border">
                                    <img src="https://www.jqwidgets.com/react/images/mercedes.jpg" alt="Mercedes" />
                                </div>
                                <div className="slider-demo-content-info">
                                    <span className="slider-demo-info-header">Brabus Black Baron</span>
                                    <div className="slider-demo-info-content">
                                        Brabus will show its Black Baron E V12, based on the 2010 Mercedes-Benz E63 AMG,
                                        at the 2009 Frankfurt Motor Show next week. Visually, Brabus’ Black Baron E V12
                                        gets a new engine ventilation system, new front quarter panels, an upgraded front
                                        bumper, new side skirts, a trunk mounted spoiler, new front quarter panels and awkward
                                        looking rear-wheel covers.
                                    </div>
                                </div>
                            </div>
                            <div id="slider-demo-content-1" style={{ display: "none" }}>
                                <div className="slider-demo-content-image-border">
                                    <img src="https://www.jqwidgets.com/react/images/jaguar.jpg" alt="Jaguar" />
                                </div>
                                <div className="slider-demo-content-info">
                                    <span className="slider-demo-info-header">Jaguar XFR</span>
                                    <div className="slider-demo-info-content">
                                        The Jaguar XF (type (X250) is a mid-size luxury car / sports saloon produced by
                                        British car manufacturer Jaguar. The car, which replaced the Jaguar S-Type, was
                                        launched at the 2007 Frankfurt Motor Show following the public showing of the C-XF
                                        concept in January 2007 at the North American International Auto Show.
                                    </div>
                                </div>
                            </div>
                            <div id="slider-demo-content-2" style={{ display: "none" }}>
                                <div className="slider-demo-content-image-border">
                                    <img src="https://www.jqwidgets.com/react/images/ferrari.jpg" alt="Ferrari" />
                                </div>
                                <div className="slider-demo-content-info">
                                    <span className="slider-demo-info-header">Ferrari Enzo</span>
                                    <div className="slider-demo-info-content">
                                        The Enzo was designed by Japanese Pininfarina head Ken Okuyama was initially introduced
                                        at the 2002 Motor Show in Paris and had a limited number of units priced at $ 659,330.
                                        Pininfarina wanted a car the will be entirely different from the usual approach
                                        used for its predecessors (GTO, F40 and 50).
                                    </div>
                                </div>
                            </div>
                            <div id="slider-demo-content-3" style={{ display: "none" }}>
                                <div className="slider-demo-content-image-border">
                                    <img src="https://www.jqwidgets.com/react/images/lamborgini.jpg" alt="Lamborgini" />
                                </div>
                                <div className="slider-demo-content-info">
                                    <span className="slider-demo-info-header">Lamborghini Gallardo</span>
                                    <div className="slider-demo-info-content">
                                        The Lamborghini Gallardo is a sports car built by Lamborghini. The Gallardo is Lamborghini's
                                        most-produced model to date, with over 10,000 built in its first seven years of
                                        production. The Gallardo offers two choices of transmissions, H-Box and an advanced
                                        six-speed electro-hydraulically controlled semi-automatic robotized manual.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slider-demo-slider-container">
                        <JqxSlider theme={'material-purple'} ref={this.mySlider}
                            onChange={this.change}
                            height={250}
                            width={36}
                            orientation={"vertical"}
                            max={3}
                            min={0}
                            value={0}
                            tooltip={false}
                            ticksFrequency={1}
                            mode={"fixed"}
                        />
                    </div>
                </div>
            </div>
        );
    }


    public carPreview() {
        const config = {
            contentContainerSelector: 'slider-demo-content-',
            currentSlide: this.currentSlide,
            locked: false,
            navigationContainer: document.getElementById('navigationContainer')!,
            nextButton: document.getElementById('nextButton')!,
            playButton: document.getElementById('playButton')!,
            previousButton: document.getElementById('previousButton')!,
            stopButton: document.getElementById('stopButton')!
        };

        const attachEventListeners = () => {
            // Animates the fading of the "navigationContainer"
            config.navigationContainer.addEventListener('mouseenter', () => {
                let loop = 0;
                const interval = setInterval(() => {
                    config.navigationContainer.style.opacity = String(loop);
                    loop += 0.2;
                    if (loop >= 1) {
                        clearInterval(interval);
                        config.navigationContainer.style.opacity = String(1);
                    }
                }, 50);
            });

            config.navigationContainer.addEventListener('mouseleave', () => {
                // "navigationContainer" fade out animation
                let loop = 1;
                const interval = setInterval(() => {
                    config.navigationContainer.style.opacity = String(loop);
                    loop -= 0.2;
                    if (loop <= 0.3) {
                        clearInterval(interval);
                        config.navigationContainer.style.opacity = String(0.1);
                    }
                }, 50);
            });

            config.nextButton.addEventListener('click', () => {
                this.mySlider.current!.incrementValue();
            });

            config.previousButton.addEventListener('click', () => {
                this.mySlider.current!.decrementValue();
            });

            config.playButton.addEventListener('click', () => {
                if (!!this.timeOut) {
                    startSlideShow();
                }
            });

            config.stopButton.addEventListener('click', () => {
                stopSlideShow();
            });
        };

        const startupConfig = () => {
            config.navigationContainer.style.opacity = String(0.1);
        };

        const startSlideShow = () => {
            this.timeOut = setTimeout(() => {
                startSlideShow();
                const slider = this.mySlider.current!;
                const currentValue = slider.getOptions("value");
                const max = slider.getOptions("max");
                const min = slider.getOptions("min");
                if (currentValue < max) {
                    slider.incrementValue();
                } else {
                    slider.setValue(min);
                }
            }, 2000);
        };

        const stopSlideShow = () => {
            clearTimeout(this.timeOut);
            this.timeOut = setTimeout(() => { /* */ }, 1000);
        };

        const loadSlide = (id: any) => {
            showSlide(id);
        };

        const hideCurrentSlide = () => {
            document.getElementById(config.contentContainerSelector + config.currentSlide)!.style.display = 'none';
        };

        const showSlide = (id: any) => {
            hideCurrentSlide();
            document.getElementById(config.contentContainerSelector + id)!.style.display = 'block';
            document.getElementById(config.contentContainerSelector + id)!.style.opacity = String(0.5);
            setTimeout(() => {
                document.getElementById(config.contentContainerSelector + id)!.style.opacity = String(1);
            }, 100);
            this.currentSlide = id;
        };

        return {
            init: () => {
                attachEventListeners();
                startupConfig();
            },
            loadSlide
        };
    }

    // Event handling
    private change(event: any): void {
        this.carPreview().loadSlide(event.args.value);
    }

}

export default App;
