<template>
    <JqxTabs ref="myTabs"
        :width="getWidth" :height="230" :keyboardNavigation="false">
        <ul>
            <li style="margin-left: 30px;">Personal info</li>
            <li>Shopping basket</li>
            <li>Review order</li>
        </ul>
        <div class="section">
            <div id="form">
                <div class="inputContainer">
                    Username:
                    <input class="formInput" type="text" id="usernameInput" ref="usernameInput" />
                </div>
                <div class="inputContainer">
                    Password:
                    <input class="formInput" type="password" id="passwordInput" ref="passwordInput" />
                </div>
            </div>
            <div id="hintWrapper">
                <div id="hintSection" class="hint"></div>
            </div>
            <div id="checkBoxWrapper">
                <JqxCheckBox ref="acceptCheckBox" :width="250" @change="acceptCheckBoxChange($event)">
                    I accept the terms and conditions
                </JqxCheckBox>
            </div>
            <div id="sectionButtonsWrapper">
                <JqxButton :width="50" ref="nextButtonInfo" class="nextButton">Next</JqxButton>
            </div>
        </div>
        <div class="section">
            <JqxListBox ref="products"
                @change="productsChange($event)" @unselect="productsUnselect($event)"
                :width="'99%'" :height="'70%'" :multiple="true" :source="source">
            </JqxListBox>
            <div class="hint" id="hintBasket"></div>
            <div id="basketButtonsWrapper">
                <JqxButton :width="50" ref="backButtonBasket" class="backButton">Back</JqxButton>
                <JqxButton :width="50" ref="nextButtonBasket" class="nextButton">Next</JqxButton>
            </div>
        </div>
        <div class="section">
            <div id="selectedProductsHeader">
                <h4>Selected products</h4>
                <div id="orderContainer" ref="orderContainer"></div>
            </div>
            <div id="selectedProductsButtonsWrapper">
                <JqxButton :width="50" ref="backButtonReview" class="backButton">Back</JqxButton>
            </div>
        </div>
    </JqxTabs>
</template>

<script>
    import JqxTabs from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtabs.vue';
    import JqxButton from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue';
    import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxcheckbox.vue';
    import JqxListBox from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxlistbox.vue';

    export default {
        components: {
            JqxTabs,
            JqxButton,
            JqxCheckBox,
            JqxListBox
        },     
        data: function () {
            return {
                source: this.getSource(),
                getWidth: '90%'
            }
        },
        mounted: function () {
            this.validate(true);
            this.addHandlers();
        },
        methods: {
            addHandlers: function () {
                this.$refs.usernameInput.addEventListener('keyup', () => {
                    this.validate(true);
                });

                this.$refs.usernameInput.addEventListener('change', () => {
                    this.validate(true);
                });

                this.$refs.passwordInput.addEventListener('keyup', () => {
                    this.validate(true);
                });

                const nextButtonClass = document.querySelectorAll('.nextButton');
                for (let i = 0; i < nextButtonClass.length; i++) {
                    const currentNextButton = nextButtonClass[i];
                    currentNextButton.addEventListener('click', () => {
                        this.validate(true);
                        this.$refs.myTabs.next;
                    });
                }

                const backButtonClass = document.querySelectorAll('.backButton');
                for (let i = 0; i < backButtonClass.length; i++) {
                    const currentBackButton = backButtonClass[i];
                    currentBackButton.addEventListener('click', () => {
                        this.validate(true);
                        this.$refs.myTabs.previous;
                    });
                }
            },
            acceptCheckBoxChange: function (event)  {
                this.validate(true);
            },
            productsChange: function (event)  {
                this.validate(true);

                const selectedItems = this.$refs.products.selectedIndexes;
                let count = selectedItems.length;
                const parent = this.$refs.orderContainer;

                while (parent.firstChild) {
                    parent.removeChild(parent.firstChild);
                }

                while (count) {
                    count--;
                    if (typeof selectedItems[count] !== 'undefined' &&
                        selectedItems[count] !== -1) {
                        const currentHtmlContent = parent.innerHTML;
                        parent.innerHTML = currentHtmlContent + '<div style="width: 190px; height: 20px;">' + (this.getSource()[selectedItems[count]].html) + '</div>';
                    }
                }
            },
            productsUnselect: function (event)  {
                this.validate(true);
            },
            isItemSelected: function (array) {
                let count = array.length;
                if (count === 0) {
                    return false;
                }
                while (count) {
                    count -= 1;
                    if (array[count] !== -1 &&
                        typeof array[count] !== 'undefined') {
                        return true;
                    }
                }
                return false;
            },
            validate: function (notify) {
                const myTabs = this.$refs.myTabs;
                if (!this.firstTab(notify)) {
                    myTabs.disableAt(1);
                    myTabs.disableAt(2);
                    return;
                } else {
                    myTabs.enableAt(1);
                }

                if (!this.secondTab(notify)) {
                    myTabs.disableAt(2);
                    return;
                } else {
                    myTabs.enableAt(2);
                }

            },
            showHint: function (message, selector) {
                if (typeof selector === 'undefined') {
                    selector = '.hint';
                }

                if (message === '') {
                    message = 'You can continue.';
                }

                if (selector.indexOf('.') == 0) {
                    document.getElementsByClassName(selector.slice(1))[0].innerHTML = '<strong>' + message + '</strong>';
                } else {
                    document.getElementById(selector.slice(1)).innerHTML = '<strong>' + message + '</strong>';
                }
            },
            firstTab: function (notify) {
                const username = this.$refs.usernameInput.value,
                    password = this.$refs.passwordInput.value;
                let message = '';

                if (username.length < 3) {
                    message += 'You have to enter valid username. <br /><br />';
                }

                if (password.length < 3) {
                    message += 'You have to enter valid password. <br /><br />';
                }

                if (!this.$refs.acceptCheckBox.checked) {
                    message += 'You have to accept the terms. <br /><br />';
                }

                if (message !== '') {
                    if (notify) {
                        this.showHint(message, '#hintSection');
                    }
                    return false;
                }

                this.showHint('You can continue.', '#hintSection');
                return true;
            },
            secondTab: function (notify) {
                const products = this.$refs.products.selectedIndex;
                if (!this.isItemSelected(this.$refs.products.selectedIndexes)) {
                    this.showHint('You have to select at least one item.', '#hintBasket');
                    return false;
                } else {
                    this.showHint('You can continue.', '#hintBasket');
                }
                return true;
            },
            getSource: function () {
                return [
                    { html: "<div style='height: 20px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' src='../../../images/numberinput.png'/><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>jqxNumberInput</span></div>", title: 'jqxNumberInput' },
                    { html: "<div style='height: 20px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' src='../../../images/progressbar.png'/><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>jqxProgressBar</span></div>", title: 'jqxProgressBar' },
                    { html: "<div style='height: 20px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' src='../../../images/calendar.png'/><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>jqxCalendar</span></div>", title: 'jqxCalendar' },
                    { html: "<div style='height: 20px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' src='../../../images/button.png'/><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>jqxButton</span></div>", title: 'jqxButton' },
                    { html: "<div style='height: 20px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' src='../../../images/dropdownlist.png'/><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>jqxDropDownList</span></div>", title: 'jqxDropDownList' },
                    { html: "<div style='height: 20px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' src='../../../images/listbox.png'/><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>jqxListBox</span></div>", title: 'jqxListBox' },
                    { html: "<div style='height: 20px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' src='../../../images/tooltip.png'/><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>jqxTooltip</span></div>", title: 'jqxTooltip' }
                ];
            }
        }
    }
</script>

<style>
    html, body {
        width: 100vw;
        height: 100vh;
        padding: 0;
        margin: 0;
    }

    #form {
        width: 50%;
        height: 70%;
        float: left;
    }
    .inputContainer {
        width: 130px;
        margin-left: 30px;
        margin-top: 10px;
    }
    .inputContainer:first-of-type {
        margin-top: 40px;
    }
    .formInput {
        width: 130px;
        height: 20px;
        outline: none;
    }

    #hintWrapper {
        width: 40%;
        height: 70%;
        display: inline-block;
    }
    #hintSection {     
        margin-top: 40px;
    }
    #hintBasket {
        width: 40%;
        margin-left: 20px;
        margin-top: 20px;
        padding: 5px;
        float: left;
    }

    #checkBoxWrapper {
        width: 50%;
        display: inline-block;
    }
    #checkBoxWrapper .jqx-checkbox {
        padding-left: 30px;
        padding-top: 20px;
    }

    #sectionButtonsWrapper {
        width: 40%;
        text-align: center;
        display: inline-block;
    }
    #basketButtonsWrapper {
        width: 40%;
        display: inline-block;
        margin-top: 20px;
    }
    #basketButtonsWrapper .jqx-button {
        display: inline-block;
    }
    #basketButtonsWrapper .jqx-button:first-child {
        margin-right: 10px;
    }
    #selectedProductsButtonsWrapper {
        width: 40%;
        display: inline-block;
        margin-top: 160px;
    }

    #selectedProductsHeader {
        margin-left: 20px;
        float: left;
        width: 50%;
    }

    #products {
        border: none;
    }
</style>