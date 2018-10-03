<template>
    <div style="width: 680px; height: 450px; border: none;">

        <div id="leftPanel" style="width: 225px; height: 100%; float: left;">
            <JqxNavigationBar :width="'100%'" :height="'100%'" :expandMode="'singleFitHeight'">
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

        <div style="width: 450px;  height: 100%; float: left;" id="rightPanel">
            <div id="rightPanelContent" className="jqx-widget-content">
                <div id="bookShelf" style="margin: 5px; width: 444px; height: 425px;">
                </div>
                <div id="shoppingCart" style="float: left; margin-left: 5px;">
                    <img style="float: left;" width="16" height="16" src="../../../images/shopping_cart.png" />
                    <div id="text">
                        Shopping cart is empty.
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    import JqxNavigationBar from "jqwidgets-scripts/jqwidgets-vue/vue_jqxnavigationbar.vue";

    export default {
        components: {
            JqxNavigationBar
        },
        mounted: function () {
            let Tolkien = '<div class="bookContainer"><div class="book"><img style="float: left" src="../../../images/books/The Hobbit.JPG" /><i>The Hobbit</i></div><div class="book"><img src="../../../images/books/The Lord of the Rings.jpg" /><i>The Lord of the Rings</i></div><div class="book"><img src="../../../images/books/The Silmarillion.JPG" /><i>The Silmarillion</i></div></div>';

            let Brooks = '<div class="bookContainer"><div class="book"><img src="../../../images/books/The Sword of Shannara.jpg" /><i>The Sword of Shannara</i></div><div class="book"><img src="../../../images/books/The Elfstones of Shannara.jpg" /><i>The Elfstones of Shannara</i></div><div class="book"><img src="../../../images/books/The Wishsong of Shannara.jpg" /><i>The Wishsong of Shannara</i></div><div class="book"><img src="../../../images/books/Running with the Demon.jpg" /><i>Running with the Demon</i></div><div class="book"><img src="../../../images/books/A Knight of the Word.jpg" /><i>A Knight of the Word</i></div><div class="book"><img src="../../../images/books/Angel Fire East.jpg" /><i>Angel Fire East</i></div></div>';

            let Rowling = '<div class="bookContainer"><div class="book"><img src="../../../images/books/Harry Potter and the Philosopher&apos;s Stone.jpg" /><i>Harry Potter and the Philosopher&apos;s Stone</i></div><div class="book"><img src="../../../images/books/Harry Potter and the Chamber of Secrets.jpg" /><i>Harry Potter and the Chamber of Secrets</i></div><div class="book"><img src="../../../images/books/Harry Potter and the Prisoner of Azkaban.jpg" /><i>Harry Potter and the Prisoner of Azkaban</i></div><div class="book"><img src="../../../images/books/Harry Potter and the Goblet of Fire.jpg" /><i>Harry Potter and the Goblet of Fire</i></div><div class="book"><img src="../../../images/books/Harry Potter and the Order of the Phoenix.jpg" /><i>Harry Potter and the Order of the Phoenix</i></div><div class="book"><img src="../../../images/books/Harry Potter and the Half-Blood Prince.jpg" /><i>Harry Potter and the Half-Blood Prince</i></div><div class="book"><img src="../../../images/books/Harry Potter and the Deathly Hallows.jpg" /><i>Harry Potter and the Deathly Hallows</i></div></div>';

            let Wells = '<div class="bookContainer"><div class="book"><img src="../../../images/books/The Time Machine.JPG" /><i>The Time Machine</i></div><div class="book"><img src="../../../images/books/The War of the Worlds.jpg" /><i>The War of the Worlds</i></div></div>';

            let Green = '<div class="bookContainer"><div class="book"><img src="../../../images/books/Deathstalker.jpg" /><i>Deathstalker</i></div><div class="book"><img src="../../../images/books/Deathstalker Rebellion.jpg" /><i>Deathstalker Rebellion</i></div><div class="book"><img src="../../../images/books/Deathstalker War.jpg" /><i>Deathstalker War</i></div><div class="book"><img src="../../../images/books/Deathstalker Honor.jpg" /><i>Deathstalker Honor</i></div><div class="book"><img src="../../../images/books/Deathstalker Destiny.jpg" /><i>Deathstalker Destiny</i></div></div>';

            let Lovecraft = '<div class="bookContainer"><div class="book"><img src="../../../images/books/The Call of Cthulhu.jpg" /><i>The Call of Cthulhu</i></div><div class="book"><img src="../../../images/books/At the Mountains of Madness.jpg" /><i>At the Mountains of Madness</i></div></div>';

            let King = '<div class="bookContainer"><div class="book"><img src="../../../images/books/Carrie.jpg" /><i>Carrie</i></div><div class="book"><img src="../../../images/books/Night Shift.jpg" /><i>Night Shift</i></div><div class="book"><img src="../../../images/books/It.jpg" /><i>It</i></div><div class="book"><img src="../../../images/books/The Dark Half.jpg" /><i>The Dark Half</i></div></div>';

            let liTags = document.getElementsByTagName('LI');

            document.getElementById('bookShelf').innerHTML = Tolkien;

            let booksNum = 0;
            let addToShoppingCart = () => {
                booksNum += 1;
                document.getElementById('text').innerHTML = 'Added ' + booksNum + (booksNum == 1 ? ' book' : ' books') + ' to shopping cart.'
            };

            let booksImages = document.getElementsByClassName('book');
            for (var j = 0; j < booksImages.length; j++) {
                booksImages[j].getElementsByTagName('IMG')[0].addEventListener('click', addToShoppingCart);
                (booksImages[j].getElementsByTagName('IMG')[0]).style.cursor = 'pointer';
            }

            for (let i = 0; i < liTags.length; i++) {
                liTags[i].addEventListener('click', () => {
                    let bookShelf = document.getElementById('bookShelf');
                    switch (i) {
                        case 0:
                            bookShelf.innerHTML = Tolkien;
                            break;
                        case 1:
                            bookShelf.innerHTML = Brooks;
                            break;
                        case 2:
                            bookShelf.innerHTML = Rowling;
                            break;
                        case 3:
                            bookShelf.innerHTML = Wells;
                            break;
                        case 4:
                            bookShelf.innerHTML = Green;
                            break;
                        case 5:
                            bookShelf.innerHTML = Lovecraft;
                            break;
                        case 6:
                            bookShelf.innerHTML = King;
                            break;
                    };

                    booksImages = document.getElementsByClassName('book');
                    for (var j = 0; j < booksImages.length; j++) {
                        booksImages[j].getElementsByTagName('IMG')[0].addEventListener('click', addToShoppingCart);
                        (booksImages[j].getElementsByTagName('IMG')[0]).style.cursor = 'pointer';
                    }
                });
            }
        }
    }
</script>

<style>
    .bookContainer {
        width: 500px;
    }

    .book {
        width: 105px;
        height: 215px;
        float: left;
        margin-left: 5px;
    }
</style>
