import * as React from 'react';
 


import './App.css';

import JqxRadioButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxradiobutton';
import JqxRibbon from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxribbon';

class App extends React.PureComponent<{}> {

    private myRibbon = React.createRef<JqxRibbon>();

    constructor(props: {}) {
        super(props);
        this.checkedNear = this.checkedNear.bind(this);
        this.checkedFar = this.checkedFar.bind(this);
        this.checkedBoth = this.checkedBoth.bind(this);
    }

    public render() {
        return (
            <div>
                <JqxRibbon theme={'material-purple'} ref={this.myRibbon} style={{ float: 'left' }}
                    width={370} position={'top'} selectionMode={'click'}
                    animationType={'fade'}>
                    <ul>
                        <li>Sunflower</li>
                        <li>Rose</li>
                        <li>Tulip</li>
                        <li>Petunia</li>
                        <li>Morning glory</li>
                        <li>Violet</li>
                        <li>Lily</li>
                        <li>Jasmine</li>
                        <li>Hibiscus</li>
                        <li>Edelweiss</li>
                        <li>Dahlia</li>
                        <li>Narcissus</li>
                    </ul>
                    <div>
                        <div className="contentSection">
                            <b>Sunflower</b> "whole seed" (fruit) are sold as a snack food, after roasting in
                            ovens, with or without salt added. Sunflowers can be processed into a peanut butter
                            alternative, Sunbutter. In Germany, it is mixed together with rye flour to make
                            Sonnenblumenkernbrot (literally: sunflower whole seed bread), which is quite popular
                            in German-speaking Europe. It is also sold as food for birds and can be used directly
                            in cooking and salads. Sunflower oil, extracted from the seeds, is used for cooking,
                            as a carrier oil and to produce margarine and biodiesel, as it is cheaper than olive
                            oil. A range of sunflower varieties exist with differing fatty acid compositions;
                            some 'high oleic' types contain a higher level of healthy monounsaturated fats in
                            their oil than Olive oil.
                        </div>
                        <div className="contentSection">
                            The <b>rose</b> was sacred to Venus (mythology). Venus was the Roman goddess of
                            love and beauty. It was also linked with Cupid. He was the Roman god of desire -
                            in one myth, he dropped nectar and the nectar bubbled up from the ground as roses.
                            The rose was also sacred to Bacchus. He was the Roman god of wine.
                        </div>
                        <div className="contentSection">
                            <b>Tulips</b> are spring-blooming perennials that grow from bulbs. Depending on
                            the species, tulip plants can be between 4 inches (10 cm) and 28 inches (71 cm)
                            high. The tulip's large flowers usually bloom on scapes with leaves in a rosette
                            at ground level and a single flowering stalk arising from amongst the leaves.Tulip
                            stems have few leaves. Larger species tend to have multiple leaves. Plants typically
                            have two to six leaves, some species up to 12. The tulip's leaf is strap-shaped,
                            with a waxy coating, and the leaves are alternately arranged on the stem; these
                            fleshy blades are often bluish green in color. Most tulips produce only one flower
                            per stem, but a few species bear multiple flowers on their scapes (e.g. Tulipa turkestanica).
                            The generally cup or star-shaped tulip flower has three petals and three sepals,
                            which are often termed tepals because they are nearly identical.
                        </div>
                        <div className="contentSection">
                            <b>Petunia</b> is a genus in the family Solanaceae, subfamily Petunioideae. Well
                            known members of Solanaceae in other subfamilies include tobacco (Nicotianoideae),
                            and the cape gooseberry, tomato, potato, deadly nightshades and chili pepper (Solanoideae).
                            Some botanists place the plants of the genus Calibrachoa in the genus Petunia, but
                            this is not accepted by others. Petchoa is a hybrid genus derived from crossing
                            the genetically similar Calibrachoa and Petunia.
                        </div>
                        <div className="contentSection">
                            Most <b>morning glory</b> flowers unravel into full bloom in the early morning.
                            The flowers usually start to fade a few hours before the "petals" start showing
                            visible curling. They prefer full solar exposure throughout the day, and mesic soils.
                            Some morning glories, such as Ipomoea muricata, are night-blooming flowers. In some
                            places, such as Australian bushland, some species of morning glories develop thick
                            roots and tend to grow in dense thickets. They can quickly spread by way of long,
                            creeping stems. By crowding out, blanketing and smothering other plants, morning
                            glory has turned into a serious invasive weed problem.
                        </div>
                        <div className="contentSection">
                            <b>Viola</b> typically have heart-shaped, scalloped leaves, though a number have
                            palmate leaves or other shapes. The vast majority of Viola species are herbaceous,
                            and a substantial number are acaulescent in habit - meaning they lack any noticeable
                            stems and the foliage and flowers appear to rise from the ground; the remaining
                            species have short stems with foliage and flowers produced in the axils of the leaves.
                            The simple leaves of plants with either habit are arranged alternately; the acaulescent
                            species produce basal rosettes. Plants always have leaves with stipules that are
                            often leaf-like.
                        </div>
                        <div className="contentSection">
                            <b>Lilies</b> are tall perennials ranging in height from 2–6 ft (60–180 cm). They
                            form naked or tunicless scaly underground bulbs which are their overwintering organs.
                            In some North American species the base of the bulb develops into rhizomes, on which
                            numerous small bulbs are found. Some species develop stolons. Most bulbs are deeply
                            buried, but a few species form bulbs near the soil surface. Many species form stem-roots.
                            With these, the bulb grows naturally at some depth in the soil, and each year the
                            new stem puts out adventitious roots above the bulb as it emerges from the soil.
                            These roots are in addition to the basal roots that develop at the base of the bulb.
                        </div>
                        <div className="contentSection">
                            <b>Jasmines</b> can be either deciduous (leaves falling in autumn) or evergreen
                            (green all year round), and can be erect, spreading, or climbing shrubs and vines.
                            Their leaves are borne opposite or alternate. They can be simple, trifoliate, or
                            pinnate. The flowers are typically around 2.5 cm (0.98 in) in diameter. They are
                            white or yellow in color, although in rare instances they can be slightly reddish.
                            The flowers are borne in cymose clusters with a minimum of three flowers, though
                            they can also be solitary on the ends of branchlets. Each flower has about four
                            to nine petals, two locules, and one to four ovules. They have two stamens with
                            very short filaments. The bracts are linear or ovate. The calyx is bell-shaped.
                            They are usually very fragrant. The fruits of jasmines are berries that turn black
                            when ripe.
                        </div>
                        <div className="contentSection">
                            The leaves of <b>Hibiscus</b> are alternate, ovate to lanceolate, often with a toothed
                            or lobed margin. The flowers are large, conspicuous, trumpet-shaped, with five or
                            more petals, color from white to pink, red, orange, purple or yellow, and from 4–18
                            cm broad. Flower color in certain species, such as H. mutabilis and H. tiliaceus,
                            changes with age. The fruit is a dry five-lobed capsule, containing several seeds
                            in each lobe, which are released when the capsule dehisces (splits open) at maturity.
                            It is of red and white colours. It is an example of complete flowers.
                        </div>
                        <div className="contentSection">
                            Flowering stalks of <b>Edelweiss</b> can grow to a size of 3–20 cm (in cultivation,
                            up to 40 cm). Each bloom consists of five to six small yellow clustered spikelet-florets
                            (5 mm) surrounded by fuzzy white "petals" (technically, bracts) in a double star
                            formation. The flowers bloom between July and September.
                        </div>
                        <div className="contentSection">
                            <b>Dahlia</b> is a genus of the uplands and mountains, being found at elevations
                            between 1,500 and 3,700 meters, in what has been described as a "pine-oak woodland"
                            vegetative zone. Most species have limited ranges scattered throughout many mountain
                            ranges in Mexico.
                        </div>
                        <div className="contentSection">
                            The <b>Narcissi</b> are perennial herbaceous geophytes which grow from pale brown-skinned
                            spherical bulbs with pronounced necks, and reach heights varying from 5-80 cm depending
                            on species. Dwarf forms include N. asturiensis which reaches 5-8 cm, while N. italicus
                            may grow as high as 80cm. The leafless stems, appearing from early to late spring
                            depending on the species, bear from 1 to 20 blooms. Stem shape depends on the species,
                            some are highly compressed with a visible seam, while others are rounded. The stems
                            are upright and located at the centre of the leaves. It is hollow in the upper portion
                            but towards the bulb is more solid and filled with a spongy material. In a few species
                            such as N. hedraeanthus the stem is oblique.
                        </div>
                    </div>
                </JqxRibbon>
                <div style={{ width: '200px', float: 'left', marginLeft: '30px' }}>
                    <div>
                        <b>Scroll Buttons Position:</b>
                    </div>
                    <JqxRadioButton theme={'material-purple'} width={100} height={25} onChecked={this.checkedNear}>
                        Near
                    </JqxRadioButton>
                    <JqxRadioButton theme={'material-purple'} width={100} height={25} onChecked={this.checkedFar}>
                        Far
                    </JqxRadioButton>
                    <JqxRadioButton theme={'material-purple'} width={500} height={25} checked={true} onChecked={this.checkedBoth} >
                        Both
                    </JqxRadioButton>
                </div>
            </div>
        );
    }

    private checkedNear(event: any): void {
        this.myRibbon.current!.setOptions({ scrollPosition: 'near' });
    }

    private checkedFar(event: any): void {
        this.myRibbon.current!.setOptions({ scrollPosition: 'far' });
    }

    private checkedBoth(event: any): void {
        this.myRibbon.current!.setOptions({ scrollPosition: 'both' });
    }
}

export default App;
