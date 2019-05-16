import * as React from 'react';
 

import * as ReactDOM from 'react-dom';

import './App.css';

import JqxNavigationBar from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxnavigationbar';

class App extends React.PureComponent<{}> {

    constructor(props: {}) {
        super(props);
    }

    public componentDidMount() {

        const Tolkien =
            <div className="bookContainer">
                <div className="book">
                    <img style={{ float: 'left' }} src={'https://www.jqwidgets.com/react/images/books/The Hobbit.JPG'} />
                    <i>The Hobbit</i>
                </div>
                <div className="book">
                    <img src={'https://www.jqwidgets.com/react/images/books/The Lord of the Rings.jpg'} />
                    <i>The Lord of the Rings</i>
                </div>
                <div className="book">
                    <img src={'https://www.jqwidgets.com/react/images/books/The Silmarillion.JPG'} />
                    <i>The Silmarillion</i>
                </div>
            </div>;

        const Brooks =
            <div className="bookContainer">
                <div className="book">
                    <img src={'https://www.jqwidgets.com/react/images/books/The Sword of Shannara.jpg'} />
                    <i>The Sword of Shannara</i>
                </div>
                <div className="book">
                    <img src={'https://www.jqwidgets.com/react/images/books/The Elfstones of Shannara.jpg'} />
                    <i>The Elfstones of Shannara</i>
                </div>
                <div className="book">
                    <img src={'https://www.jqwidgets.com/react/images/books/The Wishsong of Shannara.jpg'} />
                    <i>The Wishsong of Shannara</i>
                </div>
                <div className="book">
                    <img src={'https://www.jqwidgets.com/react/images/books/Running with the Demon.jpg'} />
                    <i>Running with the Demon</i>
                </div>
                <div className="book">
                    <img src={'https://www.jqwidgets.com/react/images/books/A Knight of the Word.jpg'} />
                    <i>A Knight of the Word</i>
                </div>
                <div className="book">
                    <img src={'https://www.jqwidgets.com/react/images/books/Angel Fire East.jpg'} />
                    <i>Angel Fire East</i>
                </div>
            </div>;

        const Rowling =
            <div className="bookContainer">
                <div className="book">
                    <img src={"https://www.jqwidgets.com/react/images/books/Harry Potter and the Philosopher's Stone.jpg"} />
                    <i> Harry Potter and the Philosopher&apos;s Stone</i>
                </div>
                <div className="book">
                    <img src={'https://www.jqwidgets.com/react/images/books/Harry Potter and the Chamber of Secrets.jpg'} />
                    <i>Harry Potter and the Chamber of Secrets</i>
                </div>
                <div className="book">
                    <img src={'https://www.jqwidgets.com/react/images/books/Harry Potter and the Prisoner of Azkaban.jpg'} />
                    <i>Harry Potter and the Prisoner of Azkaban</i>
                </div>
                <div className="book">
                    <img src={'https://www.jqwidgets.com/react/images/books/Harry Potter and the Goblet of Fire.jpg'} />
                    <i>Harry Potter and the Goblet of Fire</i>
                </div>
                <div className="book"><img src={'https://www.jqwidgets.com/react/images/books/Harry Potter and the Order of the Phoenix.jpg'} /><i>Harry Potter and the Order of the Phoenix</i></div> <div className="book"><img src={'https://www.jqwidgets.com/react/images/books/Harry Potter and the Half-Blood Prince.jpg'} /><i>Harry Potter and the Half-Blood Prince</i></div> <div className="book"><img src={'https://www.jqwidgets.com/react/images/books/Harry Potter and the Deathly Hallows.jpg'} /><i>Harry Potter and the Deathly Hallows</i></div></div>;

        const Wells =
            <div className="bookContainer">
                <div className="book">
                    <img src={'https://www.jqwidgets.com/react/images/books/The Time Machine.JPG'} />
                    <i>The Time Machine</i>
                </div>
                <div className="book">
                    <img src={'https://www.jqwidgets.com/react/images/books/The War of the Worlds.jpg'} />
                    <i>The War of the Worlds</i>
                </div>
            </div>;

        const Green =
            <div className="bookContainer">
                <div className="book">
                    <img src={'https://www.jqwidgets.com/react/images/books/Deathstalker.jpg'} />
                    <i>Deathstalker</i>
                </div>
                <div className="book">
                    <img src={'https://www.jqwidgets.com/react/images/books/Deathstalker Rebellion.jpg'} />
                    <i>Deathstalker Rebellion</i>
                </div>
                <div className="book">
                    <img src={'https://www.jqwidgets.com/react/images/books/Deathstalker War.jpg'} />
                    <i>Deathstalker War</i>
                </div>
                <div className="book">
                    <img src={'https://www.jqwidgets.com/react/images/books/Deathstalker Honor.jpg'} />
                    <i>Deathstalker Honor</i>
                </div>
                <div className="book">
                    <img src={'https://www.jqwidgets.com/react/images/books/Deathstalker Destiny.jpg'} />
                    <i>Deathstalker Destiny</i>
                </div>
            </div>;

        const Lovecraft =
            <div className="bookContainer">
                <div className="book">
                    <img src={'https://www.jqwidgets.com/react/images/books/The Call of Cthulhu.jpg'} />
                    <i>The Call of Cthulhu</i>
                </div>
                <div className="book">
                    <img src={'https://www.jqwidgets.com/react/images/books/At the Mountains of Madness.jpg'} />
                    <i>At the Mountains of Madness</i>
                </div>
            </div>;

        const King =
            <div className="bookContainer">
                <div className="book">
                    <img src={'https://www.jqwidgets.com/react/images/books/Carrie.jpg'} />
                    <i>Carrie</i>
                </div>
                <div className="book">
                    <img src={'https://www.jqwidgets.com/react/images/books/Night Shift.jpg'} />
                    <i>Night Shift</i>
                </div>
                <div className="book">
                    <img src={'https://www.jqwidgets.com/react/images/books/It.jpg'} />
                    <i>It</i>
                </div>
                <div className="book">
                    <img src={'https://www.jqwidgets.com/react/images/books/The Dark Half.jpg'} />
                    <i>The Dark Half</i>
                </div>
            </div>; 

        const bookShelf = document.getElementById('bookShelf');
        ReactDOM.render(Tolkien, bookShelf, () => {

            let booksNum = 0;
            const addToShoppingCart = () => {
                booksNum++;
                document.getElementById('text')!.innerHTML = 'Added ' + booksNum + (booksNum === 1 ? ' book' : ' books') + ' to shopping cart.';
            };

            const booksImages = document.querySelectorAll('.book img');

            Array.prototype.forEach.call(booksImages, (image: HTMLImageElement) => {
                image.addEventListener('click', addToShoppingCart);
                image.style.cursor = 'pointer';
            });

            const liTags = document.getElementsByTagName('li');
            Array.prototype.forEach.call(liTags, (liTag: HTMLLIElement, index: number) => {

                liTag.addEventListener('click', () => {

                    ReactDOM.unmountComponentAtNode(bookShelf!);
                    let newBook: any;
                    switch (index) {
                        case 0:
                            newBook = Tolkien;
                            break;
                        case 1:
                            newBook = Brooks;
                            break;
                        case 2:
                            newBook = Rowling;
                            break;
                        case 3:
                            newBook = Wells;
                            break;
                        case 4:
                            newBook = Green;
                            break;
                        case 5:
                            newBook = Lovecraft;
                            break;
                        case 6:
                            newBook = King;
                            break;
                    };

                    ReactDOM.render(newBook!, bookShelf, () => {
                        const booksImagesEl = document.querySelectorAll('.book img');
                        Array.prototype.forEach.call(booksImagesEl, (image: HTMLImageElement) => {
                            image.addEventListener('click', addToShoppingCart);
                            image.style.cursor = 'pointer';
                        });
                    });
                });
            }); 
            
        });               
    }

    public render() {
        return (
            <div style={{ width: '370px', height: '450px', border: 'none' }}>
                <div id="leftPanel" style={{ width: '225px', height: '100%', marginTop: '10px' }}>
                    <JqxNavigationBar theme={'material-purple'} width={'100%'} height={'100%'} expandMode={'singleFitHeight'}>
                        <div>
                            Fantasy
                        </div>
                        <div>
                            <ul>
                                <li>J. R. R. Tolkien</li>
                                <li>Terry Brooks</li>
                                <li>J. K. Rowling</li>
                            </ul>
                        </div>
                        <div>
                            Science Fiction
                        </div>
                        <div>
                            <ul>
                                <li>H. G. Wells</li>
                                <li>Simon R. Green</li>
                            </ul>
                        </div>
                        <div>
                            Horror
                        </div>
                        <div>
                            <ul>
                                <li>H. P. Lovecraft</li>
                                <li>Stephen King</li>
                            </ul>
                        </div>
                    </JqxNavigationBar>
                </div>

                <div style={{ width: '370px', height: '100%', marginTop: '20px' }} id="rightPanel">
                    <div id='rightPanelContent' className='jqx-widget-content'>
                        <div id="bookShelf" style={{ margin: '5px', width: '444px', height: '425px' }} />
                        <div id="shoppingCart" style={{ float: 'left', marginLeft: '5px' }}>
                            <img style={{ float: 'left' }} width={16} height={16} src={'https://www.jqwidgets.com/react/images/shopping_cart.png'} />
                            <div id='text'>
                                Shopping cart is empty.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }   
}

export default App;