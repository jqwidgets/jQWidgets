
/* Release Date: July-08-2026 
Copyright (c) 2011-2026 jQWidgets. 
License: https://jqwidgets.com/license/ */


/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 7204:
/***/ (() => {

/*
jQWidgets v26.0.0 (2026-July)
Copyright (c) 2011-2026 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

/* tslint:disable */
/* eslint-disable */
(function(){
    if (typeof document === 'undefined') { 
        return;
    }

(function ($) {

    $.jqx.jqxWidget("jqxBarcode", "", {});

    $.extend($.jqx._jqxBarcode.prototype, {
        defineInstance: function () {
            var settings = {
                value: '12345',
                type: 'codabar',
                backgroundColor: 'white',
                lineWidth: 4,
                lineHeight: 50,
                lineColor: 'black',
                displayLabel: true,
                labelPosition: 'bottom',
                labelFontSize: 14,
                labelMarginTop: 5,
                labelMarginBottom: 5,
                labelColor: 'black',
                labelFont: 'monospace',
                renderAs: 'svg'
            }
            $.extend(true, this, settings);
            return settings;
        },


        createInstance: function (args) {
            var that = this;

            var barcode = new Barcode(this.element);
            barcode.value = that.value;
            barcode.type = that.type;
            barcode.backgroundColor = that.backgroundColor;
            barcode.lineWidth = that.lineWidth;
            barcode.lineHeight = that.lineHeight;
            barcode.lineColor = that.lineColor;
            barcode.displayLabel = that.displayLabel;
            barcode.labelPosition = that.labelPosition;
            barcode.labelFontSize = that.labelFontSize;
            barcode.labelMarginTop = that.labelMarginTop;
            barcode.labelMarginBottom = that.labelMarginBottom;
            barcode.labelColor = that.labelColor;
            barcode.labelFont = that.labelFont;
            barcode.renderAs = that.renderAs;

            this.element.innerHTML = barcode.template();
            this.barcode = barcode;
            barcode.refresh();
        },

        getDataURL: function (format) {
            return this.barcode.getDataURL(format);
        },

        export: function (format, fileName) {
            this.barcode.export(format, fileName);
        },

        isValid: function () {
            return this.barcode.isValid(false);
        },

        propertyChangedHandler: function (object, key, oldvalue, value) {
            var that = object;

            that.barcode.refresh();
        }
    });
})(jqxBaseFramework);


class Barcode {
    constructor(host) {
        this.host = host;
    }
    // Barcode's properties.
    static get properties() {
        return {
            value: {
                type: 'string',
                value: ''
            },
            type: {
                value: 'codabar',
                type: 'string',
                allowedValues: [
                    'pharmacode',
                    'codabar',
                    'code128a',
                    'code128b',
                    'code128c',
                    'msi',
                    'msi10',
                    'msi11',
                    'msi1010',
                    'msi1110',
                    'ean13',
                    'ean8',
                    'code39',
                    'code93',
                ]
            },
            backgroundColor: {
                value: 'white',
                type: 'string'
            },
            lineWidth: {
                value: 4,
                type: 'number'
            },
            lineHeight: {
                value: 50,
                type: 'number'
            },
            lineColor: {
                value: 'black',
                type: 'string'
            },
            displayLabel: {
                value: true,
                type: 'boolean'
            },
            labelPosition: {
                value: 'bottom',
                type: 'string',
                allowedValues: ['top', 'bottom']
            },
            labelFontSize: {
                value: 14,
                type: 'number'
            },
            labelMarginTop: {
                value: 5,
                type: 'number'
            },
            labelMarginBottom: {
                value: 5,
                type: 'number'
            },
            labelColor: {
                value: 'black',
                type: 'string'
            },
            labelFont: {
                value: 'monospace',
                type: 'string'
            },
            renderAs: {
                value: 'svg',
                type: 'string',
                allowedValues: ['svg', 'canvas']
            },
        };
    }

    /** Barcode's template. */
    template() {
        return '<div class="jqx-barcode-container"></div>';
    }

    /**
     * Refreshes the UI Component.
     */
    refresh() {
        const that = this;
        that._generateCode(that.renderAs);
    }

    /**
     * Generates barcode
     */
    _generateCode(renderAs, hidden = false) {
        const that = this;
        const encoded = this._getEncoded(that.type, that.value);
        const barcodeLength = encoded.length * that.lineWidth;
        const barcodeHeight =
            that.lineHeight +
            that.displayLabel *
            (that.labelMarginTop + that.labelMarginBottom + that.labelFontSize);
        let x = 0,
            y = 0,
            container;

        that.isValid();

        if (renderAs === 'svg') {
            container = document.createElementNS(
                'http://www.w3.org/2000/svg',
                'svg'
            );
            container.setAttribute('width', barcodeLength);
            container.setAttribute('height', barcodeHeight);
            container.setAttributeNS(
                'http://www.w3.org/2000/xmlns/',
                'xmlns:svg',
                'http://www.w3.org/2000/svg'
            );
            container.style.backgroundColor = that.backgroundColor;
        }
        else if (renderAs === 'canvas') {
            container = document.createElement('canvas');
            container.setAttribute('width', barcodeLength);
            container.setAttribute('height', barcodeHeight);
            let ctx = container.getContext('2d');
            ctx.fillStyle = that.backgroundColor;
            ctx.fillRect(0, 0, barcodeLength, barcodeHeight);
        }
        if (hidden) {
            container.style.display = 'none';
        }

        container.classList.add('jqx-barcode');
        that.host.firstChild.appendChild(container);

        if (that.displayLabel && that.labelPosition === 'top') {
            y += that.labelMarginTop + that.labelFontSize;
            renderAs === 'svg'
                ? that._drawTextSVG(barcodeLength / 2, y, container)
                : that._drawTextCanvas(barcodeLength / 2, y, container);
            y += that.labelMarginBottom;
        }
        for (let line of encoded) {
            if (line === '1') {
                renderAs === 'svg'
                    ? that._drawStepSVG(that.lineColor, 1, x, y, container)
                    : that._drawStepCanvas(that.lineColor, 1, x, y, container);
            }
            else {
                renderAs === 'svg'
                    ? that._drawStepSVG('white', 0, x, y, container)
                    : that._drawStepCanvas('white', 0, x, y, container);
            }
            x += that.lineWidth;
        }
        if (that.displayLabel && that.labelPosition === 'bottom') {
            y += that.lineHeight + that.labelMarginTop + that.labelFontSize;
            renderAs === 'svg'
                ? that._drawTextSVG(barcodeLength / 2, y, container)
                : that._drawTextCanvas(barcodeLength / 2, y, container);
        }
        //Removes previous container
        if (that.host.firstChild.children.length === 2) {
            if (that.host.firstChild.children[1].style.display !== 'none') {
                that.host.firstChild.removeChild(that.host.firstChild.firstChild);
            }
        }
    }

    /**
     * Gets barcode encoded string
     */
    _getEncoded(type, value) {
        const that = this;
        let encoded;
        switch (type) {
            case 'pharmacode': {
                encoded = that._getEncodedPharmacode(value);
                break;
            }
            case 'codabar': {
                encoded = that._getEncodedCodabar(value);
                break;
            }
            case 'code128a': {
                encoded = that._getEncodedCode128(value, 'A');
                break;
            }
            case 'code128b': {
                encoded = that._getEncodedCode128(value, 'B');
                break;
            }
            case 'code128c': {
                encoded = that._getEncodedCode128(that.value, 'C');
                break;
            }
            case 'msi': {
                encoded = that._getEncodedMSI(that.value, '');
                break;
            }
            case 'msi10': {
                encoded = that._getEncodedMSI(that.value, '10');
                break;
            }
            case 'msi11': {
                encoded = that._getEncodedMSI(that.value, '11');
                break;
            }
            case 'msi1010': {
                encoded = that._getEncodedMSI(that.value, '1010');
                break;
            }
            case 'msi1110': {
                encoded = that._getEncodedMSI(that.value, '1010');
                break;
            }
            case 'ean13': {
                encoded = that._getEncodedEAN(that.value, '13');
                break;
            }
            case 'ean8': {
                encoded = that._getEncodedEAN(that.value, '8');
                break;
            }
            case 'code39': {
                encoded = that._getEncodedCode39(that.value);
                break;
            }
            case 'code93': {
                encoded = that._getEncodedCode93(that.value);
                break;
            }
        }
        return encoded;
    }

    /**
     * Validates the barcode value
     */
    isValid(isQRcode = false) {
        const that = this;
        const type = that.type;
        const val = that.value;

        let charactersRegex = /[^@!(一-龠)(ぁ-ゔ)(ァ-ヴー)\d0-9A-Z \$\%\*\+\-\.\/\:\=\?\^\{\|\}\~]/gm,
            patternValidity = true,
            lengthValidity = true,
            illegalChars = [];
        if (!isQRcode) {
            switch (type) {
                case 'pharmacode': {
                    charactersRegex = /[^\d]/gm;
                    lengthValidity = val.length >= 1 && val.length <= 6;
                    patternValidity = +val >= 3 && +val <= 131070;
                    break;
                }
                case 'codabar': {
                    charactersRegex = /[^ABCD\d\$-]/gm;
                    patternValidity = /^[A-D]\d+[A-D]$/gm.test(val);
                    break;
                }
                case 'code128a': {
                    charactersRegex = /[^\x20-\x5F]/gm;
                    break;
                }
                case 'code128b': {
                    charactersRegex = /[^\x20-\x7F]/gm;
                    break;
                }
                case 'code128c': {
                    charactersRegex = /[^\d]/gm;
                    break;
                }
                case 'msi':
                case 'msi10':
                case 'msi11':
                case 'msi1010':
                case 'msi1110': {
                    charactersRegex = /[^\d]/gm;
                    break;
                }
                case 'ean13': {
                    charactersRegex = /[^\d]/gm;
                    lengthValidity = val.length === 13 || val.length === 12;
                    break;
                }
                case 'ean8': {
                    charactersRegex = /[^\d]/gm;
                    lengthValidity = val.length === 7 || val.length === 8;
                    break;
                }
                case 'code39': {
                    charactersRegex = /[^\w\*.]/gm;
                    patternValidity = /^\*\*$/gm.test(val);
                    break;
                }
                case 'code93': {
                    charactersRegex = /[^\w\*.\-\* \$+\/%]/gm;
                    patternValidity = /^\*\*$/gm.test(val);
                    break;
                }
            }
        }

        illegalChars = val.match(charactersRegex);
        if (!patternValidity || illegalChars || !lengthValidity) {
            this.host.dispatchEvent(new CustomEvent("invalid", {
                detail: {
                    value: val,
                    invalidCharacters: illegalChars,
                    patternValidity: patternValidity,
                    lengthValidity: lengthValidity
                }
            }));
            return false;
        }
        return true;
    }

    /**
     * Draws the label text in SVG
     */
    _drawTextSVG(x, y, svg_container) {
        const that = this;

        let textElem = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'text'
        );
        textElem.setAttribute('x', x);
        textElem.setAttribute('y', y);
        textElem.setAttribute('text-anchor', 'middle');
        textElem.classList.add('jqx-barcode-label');
        textElem.style.fill = that.labelColor;
        textElem.style.fontFamily = that.labelFont;
        textElem.style.fontSize = that.labelFontSize + 'px';
        textElem.textContent = that.value;
        svg_container.appendChild(textElem);
    }

    /**
     * Draws the label text in Canvas
     */
    _drawTextCanvas(x, y, canvas) {
        const that = this;
        let ctx = canvas.getContext('2d');
        ctx.font = `${that.labelFontSize}px ${that.labelFont}`;
        ctx.fillStyle = that.labelColor;
        ctx.textAlign = 'center';
        ctx.fillText(that.value, x, y);
    }

    /**
     * Draws a single unit bar in svg
     */
    _drawStepSVG(color, opacity, x, y, svg_container) {
        const that = this;
        if (that.squareWidth) {
            that.lineWidth = that.squareWidth;
            that.lineHeight = that.squareWidth;
        }
        let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttribute('x', x);
        rect.setAttribute('y', y);
        rect.setAttribute('width', that.lineWidth);
        rect.setAttribute('height', that.lineHeight);
        rect.setAttribute('fill-opacity', opacity);
        rect.style.fill = color;
        svg_container.appendChild(rect);
    }

    /**
     * Draws a single unit bar in canvas
     */
    _drawStepCanvas(color, opacity, x, y, canvas) {
        const that = this;
        if (that.squareWidth) {
            that.lineWidth = that.squareWidth;
            that.lineHeight = that.squareWidth;
        }
        let ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.globalAlpha = opacity;
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx.rect(x, y, that.lineWidth, that.lineHeight);
        ctx.fill();
    }

    /**
     * Encodes data in pharmacode format
     */
    _getEncodedPharmacode(val) {
        let encoded = '';

        while (val !== 0) {
            if (val % 2 === 0) {
                encoded = '11100' + encoded;
                val = (val - 2) / 2;
            }
            else {
                encoded = '100' + encoded;
                val = (val - 1) / 2;
            }
        }

        encoded = encoded.slice(0, -2);

        return encoded;
    }

    /**
     * Encodes data in codabar format
     */
    _getEncodedCodabar(val) {
        let encoded = '';
        const sets = {
            0: 1010100110,
            1: 1010110010,
            2: 1010010110,
            3: 1100101010,
            4: 1011010010,
            5: 1101010010,
            6: 1001010110,
            7: 1001011010,
            8: 1001101010,
            9: 1101001010,
            '-': 1010011010,
            $: 1011001010,
            ':': 11010110110,
            '/': 11011010110,
            '.': 11011011010,
            '+': 10110110110,
            A: 10110010010,
            B: 10010010110,
            C: 10100100110,
            D: 10100110010,
        };

        for (let char of val) {
            encoded += sets[char];
        }

        encoded = encoded.slice(0, -1);

        return encoded;
    }

    /**
     * Encodes data in code39 format
     */
    _getEncodedCode39(val) {
        let encoded = '';
        const chars = [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            'A',
            'B',
            'C',
            'D',
            'E',
            'F',
            'G',
            'H',
            'I',
            'J',
            'K',
            'L',
            'M',
            'N',
            'O',
            'P',
            'Q',
            'R',
            'S',
            'T',
            'U',
            'V',
            'W',
            'X',
            'Y',
            'Z',
            '-',
            '.',
            ' ',
            '$',
            '/',
            '+',
            '%',
            '*',
        ];
        const set = [
            20957, 29783, 23639, 30485, 20951, 29813, 23669, 20855, 29789, 23645,
            29975, 23831, 30533, 22295, 30149, 24005, 21623, 29981, 23837, 22301,
            30023, 23879, 30545, 22343, 30161, 24017, 21959, 30065, 23921, 22385,
            29015, 18263, 29141, 17879, 29045, 18293, 17783, 29021, 18269, 17477,
            17489, 17681, 20753, 35770,
        ];

        for (let char of val) {
            encoded += set[chars.indexOf(char)].toString(2) + '0';
        }

        encoded = encoded.slice(0, -1);

        return encoded;
    }

    /**
     * Encodes data in code93 format
     */
    _getEncodedCode93(val) {
        let encoded = '';
        const chars = [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            'A',
            'B',
            'C',
            'D',
            'E',
            'F',
            'G',
            'H',
            'I',
            'J',
            'K',
            'L',
            'M',
            'N',
            'O',
            'P',
            'Q',
            'R',
            'S',
            'T',
            'U',
            'V',
            'W',
            'X',
            'Y',
            'Z',
            '-',
            '.',
            ' ',
            '$',
            '/',
            '+',
            '%',
            '*',
        ];
        const set = [
            100010100, 101001000, 101000100, 101000010, 100101000, 100100100,
            100100010, 101010000, 100010010, 100001010, 110101000, 110100100,
            110100010, 110010100, 110010010, 110001010, 101101000, 101100100,
            101100010, 100110100, 100011010, 101011000, 101001100, 101000110,
            100101100, 100010110, 110110100, 110110010, 110101100, 110100110,
            110010110, 110011010, 101101100, 101100110, 100110110, 100111010,
            100101110, 111010100, 111010010, 111001010, 111010110, 100110010,
            111011010, 101011110,
        ];

        for (let char of val) {
            encoded += set[chars.indexOf(char)] + '0';
        }

        encoded = encoded.slice(0, -1);

        return encoded;
    }

    /**
     * Encodes data in MSI format
     */
    _getEncodedMSI(val, mod) {
        let encoded = '';
        const sets = {
            0: 100100100100,
            1: 100100100110,
            2: 100100110100,
            3: 100100110110,
            4: 100110100100,
            5: 100110100110,
            6: 100110110100,
            7: 100110110110,
            8: 110100100100,
            9: 110100100110,
        };

        encoded += '110';

        if (mod === '10') {
            val += this._getMSIMod10(val);
        }
        else if (mod === '11') {
            val += this._getMSIMod11(val);
        }
        else if (mod === '1010') {
            val += this._getMSIMod10(val);
            val += this._getMSIMod10(val);
        }
        else if (mod === '1110') {
            val += this._getMSIMod11(val);
            val += this._getMSIMod10(val);
        }

        for (let char of val) {
            encoded += sets[char];
        }

        encoded += '1001';

        return encoded;
    }

    /**
     * Encodes data in EAN format
     */
    _getEncodedEAN(val, type) {
        let encoded = '';
        const table = [
            [
                '0001101',
                '0011001',
                '0010011',
                '0111101',
                '0100011',
                '0110001',
                '0101111',
                '0111011',
                '0110111',
                '0001011',
            ],
            [
                '0100111',
                '0110011',
                '0011011',
                '0100001',
                '0011101',
                '0111001',
                '0000101',
                '0010001',
                '0001001',
                '0010111',
            ],
            [
                '1110010',
                '1100110',
                '1101100',
                '1000010',
                '1011100',
                '1001110',
                '1010000',
                '1000100',
                '1001000',
                '1110100',
            ],
        ];
        const ean13_set = [
            '000000',
            '001011',
            '001101',
            '001110',
            '010011',
            '011001',
            '011100',
            '010101',
            '010110',
            '011010',
        ];

        //Compute check digit and add it to the string if it doesn't exist
        if (val.length === 12 || val.length === 7) {
            let intSumEven = 0,
                intSumOdd = 0,
                intCheck,
                stopper;

            if (val.length === 7) {
                stopper = 5;
            }
            else {
                stopper = 12;
            }
            for (let i = 0; i < stopper; i += 2) {
                intSumEven += parseInt(val[i]);
                intSumOdd += parseInt(val[i + 1]);
            }
            intCheck = (intSumOdd * 3 + intSumEven) % 10;
            if (intCheck > 0) {
                intCheck = 10 - intCheck;
            }
            val += intCheck;
        }

        if (type === '13') {
            encoded += '101';
            let structure = ean13_set[val[0]];
            for (let i = 1; i < 7; i++) {
                encoded += table[structure[i - 1]][val[i]];
            }
            encoded += '01010';
            for (let i = 0; i < 6; i++) {
                encoded += table[2][val[i + 7]];
            }
            encoded += '101';
        }
        else if (type === '8') {
            encoded += '101';
            for (let i = 0; i < 4; i++) {
                encoded += table[0][val[i]];
            }
            encoded += '01010';
            for (let i = 0; i < 4; i++) {
                encoded += table[2][val[i + 4]];
            }
            encoded += '101';
        }
        return encoded;
    }

    /**
     * Gets the mod10 value of the MSI format
     */
    _getMSIMod10(val) {
        let sum = 0;
        for (var i = 0; i < val.length; i++) {
            var n = parseInt(val[i]);
            if ((i + val.length) % 2 === 0) {
                sum += n;
            }
            else {
                sum += ((n * 2) % 10) + Math.floor((n * 2) / 10);
            }
        }
        return (10 - (sum % 10)) % 10;
    }

    /**
     * Gets the mod11 value of the MSI format
     */
    _getMSIMod11(val) {
        let sum = 0;
        var weights = [2, 3, 4, 5, 6, 7];
        for (var i = 0; i < val.length; i++) {
            var n = parseInt(val[val.length - 1 - i]);
            sum += weights[i % weights.length] * n;
        }
        return (11 - (sum % 11)) % 11;
    }

    /**
     * Encodes data in code128 format
     */
    _getEncodedCode128(val, type) {
        let encoded = '',
            elements = [],
            checkSum = 0,
            start;
        const table = [
            [' ', ' ', '00', '11011001100'],
            ['!', '!', '01', '11001101100'],
            ['"', '"', '02', '11001100110'],
            ['#', '#', '03', '10010011000'],
            ['$', '$', '04', '10010001100'],
            ['%', '%', '05', '10001001100'],
            ['&', '&', '06', '10011001000'],
            ['\'', '\'', '07', '10011000100'],
            ['(', '(', '08', '10001100100'],
            [')', ')', '09', '11001001000'],
            ['*', '*', '10', '11001000100'],
            ['+', '+', '11', '11000100100'],
            [',', ',', '12', '10110011100'],
            ['-', '-', '13', '10011011100'],
            ['.', '.', '14', '10011001110'],
            ['/', '/', '15', '10111001100'],
            ['0', '0', '16', '10011101100'],
            ['1', '1', '17', '10011100110'],
            ['2', '2', '18', '11001110010'],
            ['3', '3', '19', '11001011100'],
            ['4', '4', '20', '11001001110'],
            ['5', '5', '21', '11011100100'],
            ['6', '6', '22', '11001110100'],
            ['7', '7', '23', '11101101110'],
            ['8', '8', '24', '11101001100'],
            ['9', '9', '25', '11100101100'],
            [':', ':', '26', '11100100110'],
            [';', ';', '27', '11101100100'],
            ['<', '<', '28', '11100110100'],
            ['=', '=', '29', '11100110010'],
            ['>', '>', '30', '11011011000'],
            ['?', '?', '31', '11011000110'],
            ['@', '@', '32', '11000110110'],
            ['A', 'A', '33', '10100011000'],
            ['B', 'B', '34', '10001011000'],
            ['C', 'C', '35', '10001000110'],
            ['D', 'D', '36', '10110001000'],
            ['E', 'E', '37', '10001101000'],
            ['F', 'F', '38', '10001100010'],
            ['G', 'G', '39', '11010001000'],
            ['H', 'H', '40', '11000101000'],
            ['I', 'I', '41', '11000100010'],
            ['J', 'J', '42', '10110111000'],
            ['K', 'K', '43', '10110001110'],
            ['L', 'L', '44', '10001101110'],
            ['M', 'M', '45', '10111011000'],
            ['N', 'N', '46', '10111000110'],
            ['O', 'O', '47', '10001110110'],
            ['P', 'P', '48', '11101110110'],
            ['Q', 'Q', '49', '11010001110'],
            ['R', 'R', '50', '11000101110'],
            ['S', 'S', '51', '11011101000'],
            ['T', 'T', '52', '11011100010'],
            ['U', 'U', '53', '11011101110'],
            ['V', 'V', '54', '11101011000'],
            ['W', 'W', '55', '11101000110'],
            ['X', 'X', '56', '11100010110'],
            ['Y', 'Y', '57', '11101101000'],
            ['Z', 'Z', '58', '11101100010'],
            ['[', '[', '59', '11100011010'],
            ['\\', '\\', '60', '11101111010'],
            [']', ']', '61', '11001000010'],
            ['^', '^', '62', '11110001010'],
            ['_', '_', '63', '10100110000'],
            ['NUL', '`', '64', '10100001100'],
            ['SOH', 'a', '65', '10010110000'],
            ['STX', 'b', '66', '10010000110'],
            ['ETX', 'c', '67', '10000101100'],
            ['EOT', 'd', '68', '10000100110'],
            ['ENQ', 'e', '69', '10110010000'],
            ['ACK', 'f', '70', '10110000100'],
            ['BEL', 'g', '71', '10011010000'],
            ['BS', 'h', '72', '10011000010'],
            ['HT', 'i', '73', '10000110100'],
            ['LF', 'j', '74', '10000110010'],
            ['VT', 'k', '75', '11000010010'],
            ['FF', 'l', '76', '11001010000'],
            ['CR', 'm', '77', '11110111010'],
            ['SO', 'n', '78', '11000010100'],
            ['SI', 'o', '79', '10001111010'],
            ['DLE', 'p', '80', '10100111100'],
            ['DC1', 'q', '81', '10010111100'],
            ['DC2', 'r', '82', '10010011110'],
            ['DC3', 's', '83', '10111100100'],
            ['DC4', 't', '84', '10011110100'],
            ['NAK', 'u', '85', '10011110010'],
            ['SYN', 'v', '86', '11110100100'],
            ['ETB', 'w', '87', '11110010100'],
            ['CAN', 'x', '88', '11110010010'],
            ['EM', 'y', '89', '11011011110'],
            ['SUB', 'z', '90', '11011110110'],
            ['ESC', '[', '91', '11110110110'],
            ['FS', '|', '92', '10101111000'],
            ['GS', ']', '93', '10100011110'],
            ['RS', '~', '94', '10001011110'],
            ['US', 'DEL', '95', '10111101000'],
            ['FNC3', 'FNC3', '96', '10111100010'],
            ['FNC2', 'FNC2', '97', '11110101000'],
            ['SHIFT', 'SHIFT', '98', '11110100010'],
            ['CODEC', 'CODEC', '99', '10111011110'],
            ['CODEB', 'FNC4', 'CODEB', '10111101110'],
            ['FNC4', 'CODEA', 'CODEA', '11101011110'],
            ['FNC1', 'FNC1', 'FNC1', '11110101110'],
            ['StartA', 'StartA', 'StartA', '11010000100'],
            ['StartB', 'StartB', 'StartB', '11010010000'],
            ['StartC', 'StartC', 'StartC', '11010011100'],
            ['Stop', 'Stop', 'Stop', '1100011101011'],
        ];
        if (type === 'A') {
            start = 103;
            for (const [i, char] of val.split('').entries()) {
                let element = table.find((x) => x[0] === char);
                if (element) {
                    elements.push(element);
                    checkSum += i * element.length;
                }
            }
        }
        else if (type === 'B') {
            start = 104;
            for (const [i, char] of val.split('').entries()) {
                let element = table.find((x) => x[1] === char);
                if (element) {
                    elements.push(element);
                    checkSum += i * element.length;
                }
            }
        }
        else if (type === 'C') {
            start = 105;
            for (let i = 0; i < val.length - 1; i += 2) {
                let substr = val.substring(i, 2);
                let element = table.find((x) => x[2] === substr);
                if (element) {
                    elements.push(element);
                    checkSum += substr * element.length;
                }
            }
        }

        checkSum += start;
        elements.push(table[checkSum % 103]);
        elements.unshift(table[start]);
        elements.push(table[106]);
        elements.forEach((el) => (encoded += el[3]));

        return encoded;
    }

    /**
     * Gets the Base64 String of the barcode
     *
     * @param {String} format Sets the dataURL format of the string. Allowed values are 'svg', 'png', 'jpg'
     */
    getDataURL(format) {
        const that = this;
        if (format === 'svg') {
            if (that.renderAs !== 'svg') {
                that._generateCode('svg', true);
            }
            let svg = that.host.querySelector('svg');
            let data = new XMLSerializer().serializeToString(svg);
            let svgBlob = new Blob([data], {
                type: 'image/svg+xml;charset=utf-8',
            });
            const url = URL.createObjectURL(svgBlob);
            return url;
        }
        else if (format === 'png' || format === 'jpg') {
            let file_format = format === 'png' ? 'png' : 'jpeg';
            if (that.renderAs !== 'canvas') {
                that._generateCode('canvas', true);
            }
            let canvas = that.host.querySelector('canvas');
            const url = canvas.toDataURL(`image/${file_format}`);
            return url;
        }
    }

    /**
     * Gets the Base64 String of the barcode asynchronously
     *
     * @param {String} format Sets the dataURL format of the string. Allowed values are 'svg', 'png', 'jpg'
     */
    getDataURLAsync(format) {
        const that = this;
        return new Promise((resolve, reject) => {
            let url = that.getDataURL(format);
            if (url) {
                resolve(url);
            }
            else {
                reject();
            }
        });
    }

    /**
     * Export the barcode to a file
     *
     * @param {String} format Sets the export format of the barcode. Allowed values are 'svg', 'png', 'jpg'
     * @param {String} fileName Sets the name of the exported file
     */
    export(format = 'png', fileName = 'barcode') {
        const that = this;
        that.getDataURLAsync(format).then((url) => {
            let a = document.createElement('a');

            a.setAttribute('download', `${fileName}.${format}`);
            a.setAttribute('href', url);
            a.setAttribute('target', '_blank');

            a.click();
        });
    }

    /**
     * Called when a property is changed.
     */
    propertyChangedHandler(propertyName, oldValue, newValue) {
        const that = this;

        that.refresh();
    }

    ready() {
        const that = this;
        this._generateCode(that.renderAs);
    }
}
})();





/***/ }),

/***/ 7944:
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
jQWidgets v26.0.0 (2026-July)
Copyright (c) 2011-2026 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

(function(){if(typeof document==="undefined"){return}var a=document.all&&!document.addEventListener;if(!a){(function(bf,I){var s,ap,am=bf.document,bq=bf.location,bv=bf.navigator,az=bf.JQXLite,Z=bf.$,aT=Array.prototype.push,aF=Array.prototype.slice,aC=Array.prototype.indexOf,A=Object.prototype.toString,d=Object.prototype.hasOwnProperty,ay=String.prototype.trim,E=function(bw,bx){return new E.fn.init(bw,bx,s)},aG=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,av=/\S/,ba=/\s+/,U=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,aH=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,g=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,l=/^[\],:{}\s]*$/,v=/(?:^|:|,)(?:\s*\[)+/g,a7=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,M=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,aw=/^-ms-/,aU=/-([\da-z])/gi,o=function(bw,bx){return(bx+"").toUpperCase()},a6=function(){if(am.addEventListener){am.removeEventListener("DOMContentLoaded",a6,false);E.ready()}else{if(am.readyState==="complete"){am.detachEvent("onreadystatechange",a6);E.ready()}}},a2={};E.fn=E.prototype={constructor:E,init:function(bw,bz,bA){var by,bB,bx,bC;if(!bw){return this}if(bw.nodeType){this.context=this[0]=bw;this.length=1;return this}if(typeof bw==="string"){if(bw.charAt(0)==="<"&&bw.charAt(bw.length-1)===">"&&bw.length>=3){by=[null,bw,null]}else{by=aH.exec(bw)}if(by&&(by[1]||!bz)){if(by[1]){bz=bz instanceof E?bz[0]:bz;bC=(bz&&bz.nodeType?bz.ownerDocument||bz:am);bw=E.parseHTML(by[1],bC,true);if(g.test(by[1])&&E.isPlainObject(bz)){this.attr.call(bw,bz,true)}return E.merge(this,bw)}else{bB=am.getElementById(by[2]);if(bB&&bB.parentNode){if(bB.id!==by[2]){return bA.find(bw)}this.length=1;this[0]=bB}this.context=am;this.selector=bw;return this}}else{if(!bz||bz.jqx){return(bz||bA).find(bw)}else{return this.constructor(bz).find(bw)}}}else{if(E.isFunction(bw)){return bA.ready(bw)}}if(bw.selector!==I){this.selector=bw.selector;this.context=bw.context}return E.makeArray(bw,this)},selector:"",jqx:"4.5.0",length:0,size:function(){return this.length},toArray:function(){return aF.call(this)},get:function(bw){return bw==null?this.toArray():(bw<0?this[this.length+bw]:this[bw])},pushStack:function(bx,bz,bw){var by=E.merge(this.constructor(),bx);by.prevObject=this;by.context=this.context;if(bz==="find"){by.selector=this.selector+(this.selector?" ":"")+bw}else{if(bz){by.selector=this.selector+"."+bz+"("+bw+")"}}return by},each:function(bx,bw){return E.each(this,bx,bw)},ready:function(bw){E.ready.promise().done(bw);return this},eq:function(bw){bw=+bw;return bw===-1?this.slice(bw):this.slice(bw,bw+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(aF.apply(this,arguments),"slice",aF.call(arguments).join(","))},map:function(bw){return this.pushStack(E.map(this,function(by,bx){return bw.call(by,bx,by)}))},end:function(){return this.prevObject||this.constructor(null)},push:aT,sort:[].sort,splice:[].splice};E.fn.init.prototype=E.fn;E.extend=E.fn.extend=function(){var bF,by,bw,bx,bC,bD,bB=arguments[0]||{},bA=1,bz=arguments.length,bE=false;if(typeof bB==="boolean"){bE=bB;bB=arguments[1]||{};bA=2}if(typeof bB!=="object"&&!E.isFunction(bB)){bB={}}if(bz===bA){bB=this;--bA}for(;bA<bz;bA++){if((bF=arguments[bA])!=null){for(by in bF){bw=bB[by];bx=bF[by];if(bB===bx){continue}if(bE&&bx&&(E.isPlainObject(bx)||(bC=E.isArray(bx)))){if(bC){bC=false;bD=bw&&E.isArray(bw)?bw:[]}else{bD=bw&&E.isPlainObject(bw)?bw:{}}bB[by]=E.extend(bE,bD,bx)}else{if(bx!==I){bB[by]=bx}}}}}return bB};E.extend({noConflict:function(bw){if(bf.$===E){bf.$=Z}if(bw&&bf.JQXLite===E){bf.JQXLite=az}return E},isReady:false,readyWait:1,holdReady:function(bw){if(bw){E.readyWait++}else{E.ready(true)}},ready:function(bw){if(bw===true?--E.readyWait:E.isReady){return}if(!am.body){return setTimeout(E.ready,1)}E.isReady=true;if(bw!==true&&--E.readyWait>0){return}ap.resolveWith(am,[E]);if(E.fn.trigger){E(am).trigger("ready").off("ready")}},isFunction:function(bw){return E.type(bw)==="function"},isArray:Array.isArray||function(bw){return E.type(bw)==="array"},isWindow:function(bw){return bw!=null&&bw==bw.window},isNumeric:function(bw){return !isNaN(parseFloat(bw))&&isFinite(bw)},type:function(bw){return bw==null?String(bw):a2[A.call(bw)]||"object"},isPlainObject:function(by){if(!by||E.type(by)!=="object"||by.nodeType||E.isWindow(by)){return false}try{if(by.constructor&&!d.call(by,"constructor")&&!d.call(by.constructor.prototype,"isPrototypeOf")){return false}}catch(bx){return false}var bw;for(bw in by){}return bw===I||d.call(by,bw)},isEmptyObject:function(bx){var bw;for(bw in bx){return false}return true},error:function(bw){throw new Error(bw)},parseHTML:function(bz,by,bw){var bx;if(!bz||typeof bz!=="string"){return null}if(typeof by==="boolean"){bw=by;by=0}by=by||am;if((bx=g.exec(bz))){return[by.createElement(bx[1])]}bx=E.buildFragment([bz],by,bw?null:[]);return E.merge([],(bx.cacheable?E.clone(bx.fragment):bx.fragment).childNodes)},parseJSON:function(bw){if(!bw||typeof bw!=="string"){return null}bw=E.trim(bw);if(bf.JSON&&bf.JSON.parse){return bf.JSON.parse(bw)}if(l.test(bw.replace(a7,"@").replace(M,"]").replace(v,""))){return(new Function("return "+bw))()}E.error("Invalid JSON: "+bw)},parseXML:function(by){var bw,bx;if(!by||typeof by!=="string"){return null}try{if(bf.DOMParser){bx=new DOMParser();bw=bx.parseFromString(by,"text/xml")}else{bw=new ActiveXObject("Microsoft.XMLDOM");bw.async="false";bw.loadXML(by)}}catch(bz){bw=I}if(!bw||!bw.documentElement||bw.getElementsByTagName("parsererror").length){E.error("Invalid XML: "+by)}return bw},noop:function(){},globalEval:function(bw){if(bw&&av.test(bw)){(bf.execScript||function(bx){bf["eval"].call(bf,bx)})(bw)}},camelCase:function(bw){return bw.replace(aw,"ms-").replace(aU,o)},nodeName:function(bx,bw){return bx.nodeName&&bx.nodeName.toLowerCase()===bw.toLowerCase()},each:function(bB,bC,by){var bx,bz=0,bA=bB.length,bw=bA===I||E.isFunction(bB);if(by){if(bw){for(bx in bB){if(bC.apply(bB[bx],by)===false){break}}}else{for(;bz<bA;){if(bC.apply(bB[bz++],by)===false){break}}}}else{if(bw){for(bx in bB){if(bC.call(bB[bx],bx,bB[bx])===false){break}}}else{for(;bz<bA;){if(bC.call(bB[bz],bz,bB[bz++])===false){break}}}}return bB},trim:ay&&!ay.call("\uFEFF\xA0")?function(bw){return bw==null?"":ay.call(bw)}:function(bw){return bw==null?"":(bw+"").replace(U,"")},makeArray:function(bw,by){var bz,bx=by||[];if(bw!=null){bz=E.type(bw);if(bw.length==null||bz==="string"||bz==="function"||bz==="regexp"||E.isWindow(bw)){aT.call(bx,bw)}else{E.merge(bx,bw)}}return bx},inArray:function(bz,bx,by){var bw;if(bx){if(aC){return aC.call(bx,bz,by)}bw=bx.length;by=by?by<0?Math.max(0,bw+by):by:0;for(;by<bw;by++){if(by in bx&&bx[by]===bz){return by}}}return -1},merge:function(bA,by){var bw=by.length,bz=bA.length,bx=0;if(typeof bw==="number"){for(;bx<bw;bx++){bA[bz++]=by[bx]}}else{while(by[bx]!==I){bA[bz++]=by[bx++]}}bA.length=bz;return bA},grep:function(bx,bC,bw){var bB,by=[],bz=0,bA=bx.length;bw=!!bw;for(;bz<bA;bz++){bB=!!bC(bx[bz],bz);if(bw!==bB){by.push(bx[bz])}}return by},map:function(bw,bD,bE){var bB,bC,bA=[],by=0,bx=bw.length,bz=bw instanceof E||bx!==I&&typeof bx==="number"&&((bx>0&&bw[0]&&bw[bx-1])||bx===0||E.isArray(bw));if(bz){for(;by<bx;by++){bB=bD(bw[by],by,bE);if(bB!=null){bA[bA.length]=bB}}}else{for(bC in bw){bB=bD(bw[bC],bC,bE);if(bB!=null){bA[bA.length]=bB}}}return bA.concat.apply([],bA)},guid:1,proxy:function(bA,bz){var by,bw,bx;if(typeof bz==="string"){by=bA[bz];bz=bA;bA=by}if(!E.isFunction(bA)){return I}bw=aF.call(arguments,2);bx=function(){return bA.apply(bz,bw.concat(aF.call(arguments)))};bx.guid=bA.guid=bA.guid||E.guid++;return bx},access:function(bw,bC,bF,bD,bA,bG,bE){var by,bB=bF==null,bz=0,bx=bw.length;if(bF&&typeof bF==="object"){for(bz in bF){E.access(bw,bC,bz,bF[bz],1,bG,bD)}bA=1}else{if(bD!==I){by=bE===I&&E.isFunction(bD);if(bB){if(by){by=bC;bC=function(bI,bH,bJ){return by.call(E(bI),bJ)}}else{bC.call(bw,bD);bC=null}}if(bC){for(;bz<bx;bz++){bC(bw[bz],bF,by?bD.call(bw[bz],bz,bC(bw[bz],bF)):bD,bE)}}bA=1}}return bA?bw:bB?bC.call(bw):bx?bC(bw[0],bF):bG},now:function(){return(new Date()).getTime()}});E.ready.promise=function(bz){if(!ap){ap=E.Deferred();if(am.readyState==="complete"){setTimeout(E.ready,1)}else{if(am.addEventListener){am.addEventListener("DOMContentLoaded",a6,false);bf.addEventListener("load",E.ready,false)}else{am.attachEvent("onreadystatechange",a6);bf.attachEvent("onload",E.ready);var by=false;try{by=bf.frameElement==null&&am.documentElement}catch(bx){}if(by&&by.doScroll){(function bw(){if(!E.isReady){try{by.doScroll("left")}catch(bA){return setTimeout(bw,50)}E.ready()}})()}}}}return ap.promise(bz)};E.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(bx,bw){a2["[object "+bw+"]"]=bw.toLowerCase()});s=E(am);var aZ={};function D(bx){var bw=aZ[bx]={};E.each(bx.split(ba),function(bz,by){bw[by]=true});return bw}E.Callbacks=function(bG){bG=typeof bG==="string"?(aZ[bG]||D(bG)):E.extend({},bG);var bz,bw,bA,by,bB,bC,bD=[],bE=!bG.once&&[],bx=function(bH){bz=bG.memory&&bH;bw=true;bC=by||0;by=0;bB=bD.length;bA=true;for(;bD&&bC<bB;bC++){if(bD[bC].apply(bH[0],bH[1])===false&&bG.stopOnFalse){bz=false;break}}bA=false;if(bD){if(bE){if(bE.length){bx(bE.shift())}}else{if(bz){bD=[]}else{bF.disable()}}}},bF={add:function(){if(bD){var bI=bD.length;(function bH(bJ){E.each(bJ,function(bL,bK){var bM=E.type(bK);if(bM==="function"){if(!bG.unique||!bF.has(bK)){bD.push(bK)}}else{if(bK&&bK.length&&bM!=="string"){bH(bK)}}})})(arguments);if(bA){bB=bD.length}else{if(bz){by=bI;bx(bz)}}}return this},remove:function(){if(bD){E.each(arguments,function(bJ,bH){var bI;while((bI=E.inArray(bH,bD,bI))>-1){bD.splice(bI,1);if(bA){if(bI<=bB){bB--}if(bI<=bC){bC--}}}})}return this},has:function(bH){return E.inArray(bH,bD)>-1},empty:function(){bD=[];return this},disable:function(){bD=bE=bz=I;return this},disabled:function(){return !bD},lock:function(){bE=I;if(!bz){bF.disable()}return this},locked:function(){return !bE},fireWith:function(bI,bH){bH=bH||[];bH=[bI,bH.slice?bH.slice():bH];if(bD&&(!bw||bE)){if(bA){bE.push(bH)}else{bx(bH)}}return this},fire:function(){bF.fireWith(this,arguments);return this},fired:function(){return !!bw}};return bF};E.extend({Deferred:function(by){var bx=[["resolve","done",E.Callbacks("once memory"),"resolved"],["reject","fail",E.Callbacks("once memory"),"rejected"],["notify","progress",E.Callbacks("memory")]],bz="pending",bA={state:function(){return bz},always:function(){bw.done(arguments).fail(arguments);return this},then:function(){var bB=arguments;return E.Deferred(function(bC){E.each(bx,function(bE,bD){var bG=bD[0],bF=bB[bE];bw[bD[1]](E.isFunction(bF)?function(){var bH=bF.apply(this,arguments);if(bH&&E.isFunction(bH.promise)){bH.promise().done(bC.resolve).fail(bC.reject).progress(bC.notify)}else{bC[bG+"With"](this===bw?bC:this,[bH])}}:bC[bG])});bB=null}).promise()},promise:function(bB){return bB!=null?E.extend(bB,bA):bA}},bw={};bA.pipe=bA.then;E.each(bx,function(bC,bB){var bE=bB[2],bD=bB[3];bA[bB[1]]=bE.add;if(bD){bE.add(function(){bz=bD},bx[bC^1][2].disable,bx[2][2].lock)}bw[bB[0]]=bE.fire;bw[bB[0]+"With"]=bE.fireWith});bA.promise(bw);if(by){by.call(bw,bw)}return bw},when:function(bA){var by=0,bC=aF.call(arguments),bw=bC.length,bx=bw!==1||(bA&&E.isFunction(bA.promise))?bw:0,bF=bx===1?bA:E.Deferred(),bz=function(bH,bI,bG){return function(bJ){bI[bH]=this;bG[bH]=arguments.length>1?aF.call(arguments):bJ;if(bG===bE){bF.notifyWith(bI,bG)}else{if(!(--bx)){bF.resolveWith(bI,bG)}}}},bE,bB,bD;if(bw>1){bE=new Array(bw);bB=new Array(bw);bD=new Array(bw);for(;by<bw;by++){if(bC[by]&&E.isFunction(bC[by].promise)){bC[by].promise().done(bz(by,bD,bC)).fail(bF.reject).progress(bz(by,bB,bE))}else{--bx}}}if(!bx){bF.resolveWith(bD,bC)}return bF.promise()}});E.support=(function(){var bI,bH,bF,bG,bz,bE,bD,bB,bA,by,bw,bx=am.createElement("div");bx.setAttribute("className","t");bx.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";bH=bx.getElementsByTagName("*");bF=bx.getElementsByTagName("a")[0];if(!bH||!bF||!bH.length){return{}}bG=am.createElement("select");bz=bG.appendChild(am.createElement("option"));bE=bx.getElementsByTagName("input")[0];bF.style.cssText="top:1px;float:left;opacity:.5";bI={leadingWhitespace:(bx.firstChild.nodeType===3),tbody:!bx.getElementsByTagName("tbody").length,htmlSerialize:!!bx.getElementsByTagName("link").length,style:/top/.test(bF.getAttribute("style")),hrefNormalized:(bF.getAttribute("href")==="/a"),opacity:/^0.5/.test(bF.style.opacity),cssFloat:!!bF.style.cssFloat,checkOn:(bE.value==="on"),optSelected:bz.selected,getSetAttribute:bx.className!=="t",enctype:!!am.createElement("form").enctype,html5Clone:am.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>",boxModel:(am.compatMode==="CSS1Compat"),submitBubbles:true,changeBubbles:true,focusinBubbles:false,deleteExpando:true,noCloneEvent:true,inlineBlockNeedsLayout:false,shrinkWrapBlocks:false,reliableMarginRight:true,boxSizingReliable:true,pixelPosition:false};bE.checked=true;bI.noCloneChecked=bE.cloneNode(true).checked;bG.disabled=true;bI.optDisabled=!bz.disabled;try{delete bx.test}catch(bC){bI.deleteExpando=false}if(!bx.addEventListener&&bx.attachEvent&&bx.fireEvent){bx.attachEvent("onclick",bw=function(){bI.noCloneEvent=false});bx.cloneNode(true).fireEvent("onclick");bx.detachEvent("onclick",bw)}bE=am.createElement("input");bE.value="t";bE.setAttribute("type","radio");bI.radioValue=bE.value==="t";bE.setAttribute("checked","checked");bE.setAttribute("name","t");bx.appendChild(bE);bD=am.createDocumentFragment();bD.appendChild(bx.lastChild);bI.checkClone=bD.cloneNode(true).cloneNode(true).lastChild.checked;bI.appendChecked=bE.checked;bD.removeChild(bE);bD.appendChild(bx);if(bx.attachEvent){for(bA in {submit:true,change:true,focusin:true}){bB="on"+bA;by=(bB in bx);if(!by){bx.setAttribute(bB,"return;");by=(typeof bx[bB]==="function")}bI[bA+"Bubbles"]=by}}E(function(){var bK,bO,bM,bN,bL="padding:0;margin:0;border:0;display:block;overflow:hidden;",bJ=am.getElementsByTagName("body")[0];if(!bJ){return}bK=am.createElement("div");bK.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px";bJ.insertBefore(bK,bJ.firstChild);bO=am.createElement("div");bK.appendChild(bO);bO.innerHTML="<table><tr><td></td><td>t</td></tr></table>";bM=bO.getElementsByTagName("td");bM[0].style.cssText="padding:0;margin:0;border:0;display:none";by=(bM[0].offsetHeight===0);bM[0].style.display="";bM[1].style.display="none";bI.reliableHiddenOffsets=by&&(bM[0].offsetHeight===0);bO.innerHTML="";bO.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";bI.boxSizing=(bO.offsetWidth===4);bI.doesNotIncludeMarginInBodyOffset=(bJ.offsetTop!==1);if(bf.getComputedStyle){bI.pixelPosition=(bf.getComputedStyle(bO,null)||{}).top!=="1%";bI.boxSizingReliable=(bf.getComputedStyle(bO,null)||{width:"4px"}).width==="4px";bN=am.createElement("div");bN.style.cssText=bO.style.cssText=bL;bN.style.marginRight=bN.style.width="0";bO.style.width="1px";bO.appendChild(bN);bI.reliableMarginRight=!parseFloat((bf.getComputedStyle(bN,null)||{}).marginRight)}if(typeof bO.style.zoom!=="undefined"){bO.innerHTML="";bO.style.cssText=bL+"width:1px;padding:1px;display:inline;zoom:1";bI.inlineBlockNeedsLayout=(bO.offsetWidth===3);bO.style.display="block";bO.style.overflow="visible";bO.innerHTML="<div></div>";bO.firstChild.style.width="5px";bI.shrinkWrapBlocks=(bO.offsetWidth!==3);bK.style.zoom=1}bJ.removeChild(bK);bK=bO=bM=bN=null});bD.removeChild(bx);bH=bF=bG=bz=bE=bD=bx=null;return bI})();var aM=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,at=/([A-Z])/g;E.extend({cache:{},deletedIds:[],uuid:0,expando:"JQXLite"+(E.fn.jqx+Math.random()).replace(/\D/g,""),noData:{embed:true,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:true},hasData:function(bw){bw=bw.nodeType?E.cache[bw[E.expando]]:bw[E.expando];return !!bw&&!O(bw)},data:function(bz,bx,bB,bA){if(!E.acceptData(bz)){return}var bC,bE,bF=E.expando,bD=typeof bx==="string",bG=bz.nodeType,bw=bG?E.cache:bz,by=bG?bz[bF]:bz[bF]&&bF;if((!by||!bw[by]||(!bA&&!bw[by].data))&&bD&&bB===I){return}if(!by){if(bG){bz[bF]=by=E.deletedIds.pop()||E.guid++}else{by=bF}}if(!bw[by]){bw[by]={};if(!bG){bw[by].toJSON=E.noop}}if(typeof bx==="object"||typeof bx==="function"){if(bA){bw[by]=E.extend(bw[by],bx)}else{bw[by].data=E.extend(bw[by].data,bx)}}bC=bw[by];if(!bA){if(!bC.data){bC.data={}}bC=bC.data}if(bB!==I){bC[E.camelCase(bx)]=bB}if(bD){bE=bC[bx];if(bE==null){bE=bC[E.camelCase(bx)]}}else{bE=bC}return bE},removeData:function(bz,bx,bA){if(!E.acceptData(bz)){return}var bD,bC,bB,bE=bz.nodeType,bw=bE?E.cache:bz,by=bE?bz[E.expando]:E.expando;if(!bw[by]){return}if(bx){bD=bA?bw[by]:bw[by].data;if(bD){if(!E.isArray(bx)){if(bx in bD){bx=[bx]}else{bx=E.camelCase(bx);if(bx in bD){bx=[bx]}else{bx=bx.split(" ")}}}for(bC=0,bB=bx.length;bC<bB;bC++){delete bD[bx[bC]]}if(!(bA?O:E.isEmptyObject)(bD)){return}}}if(!bA){delete bw[by].data;if(!O(bw[by])){return}}if(bE){E.cleanData([bz],true)}else{if(E.support.deleteExpando||bw!=bw.window){delete bw[by]}else{bw[by]=null}}},_data:function(bx,bw,by){return E.data(bx,bw,by,true)},acceptData:function(bx){var bw=bx.nodeName&&E.noData[bx.nodeName.toLowerCase()];return !bw||bw!==true&&bx.getAttribute("classid")===bw}});E.fn.extend({data:function(bF,bE){var bA,bx,bD,bw,bz,by=this[0],bC=0,bB=null;if(bF===I){if(this.length){bB=E.data(by);if(by.nodeType===1&&!E._data(by,"parsedAttrs")){bD=by.attributes;for(bz=bD.length;bC<bz;bC++){bw=bD[bC].name;if(!bw.indexOf("data-")){bw=E.camelCase(bw.substring(5));bb(by,bw,bB[bw])}}E._data(by,"parsedAttrs",true)}}return bB}if(typeof bF==="object"){return this.each(function(){E.data(this,bF)})}bA=bF.split(".",2);bA[1]=bA[1]?"."+bA[1]:"";bx=bA[1]+"!";return E.access(this,function(bG){if(bG===I){bB=this.triggerHandler("getData"+bx,[bA[0]]);if(bB===I&&by){bB=E.data(by,bF);bB=bb(by,bF,bB)}return bB===I&&bA[1]?this.data(bA[0]):bB}bA[1]=bG;this.each(function(){var bH=E(this);bH.triggerHandler("setData"+bx,bA);E.data(this,bF,bG);bH.triggerHandler("changeData"+bx,bA)})},null,bE,arguments.length>1,null,false)},removeData:function(bw){return this.each(function(){E.removeData(this,bw)})}});function bb(by,bx,bz){if(bz===I&&by.nodeType===1){var bw="data-"+bx.replace(at,"-$1").toLowerCase();bz=by.getAttribute(bw);if(typeof bz==="string"){try{bz=bz==="true"?true:bz==="false"?false:bz==="null"?null:+bz+""===bz?+bz:aM.test(bz)?E.parseJSON(bz):bz}catch(bA){}E.data(by,bx,bz)}else{bz=I}}return bz}function O(bx){var bw;for(bw in bx){if(bw==="data"&&E.isEmptyObject(bx[bw])){continue}if(bw!=="toJSON"){return false}}return true}E.extend({queue:function(by,bx,bz){var bw;if(by){bx=(bx||"fx")+"queue";bw=E._data(by,bx);if(bz){if(!bw||E.isArray(bz)){bw=E._data(by,bx,E.makeArray(bz))}else{bw.push(bz)}}return bw||[]}},dequeue:function(bB,bA){bA=bA||"fx";var bx=E.queue(bB,bA),bC=bx.length,bz=bx.shift(),bw=E._queueHooks(bB,bA),by=function(){E.dequeue(bB,bA)};if(bz==="inprogress"){bz=bx.shift();bC--}if(bz){if(bA==="fx"){bx.unshift("inprogress")}delete bw.stop;bz.call(bB,by,bw)}if(!bC&&bw){bw.empty.fire()}},_queueHooks:function(by,bx){var bw=bx+"queueHooks";return E._data(by,bw)||E._data(by,bw,{empty:E.Callbacks("once memory").add(function(){E.removeData(by,bx+"queue",true);E.removeData(by,bw,true)})})}});E.fn.extend({queue:function(bw,bx){var by=2;if(typeof bw!=="string"){bx=bw;bw="fx";by--}if(arguments.length<by){return E.queue(this[0],bw)}return bx===I?this:this.each(function(){var bz=E.queue(this,bw,bx);E._queueHooks(this,bw);if(bw==="fx"&&bz[0]!=="inprogress"){E.dequeue(this,bw)}})},dequeue:function(bw){return this.each(function(){E.dequeue(this,bw)})},delay:function(bx,bw){bx=E.fx?E.fx.speeds[bx]||bx:bx;bw=bw||"fx";return this.queue(bw,function(bz,by){var bA=setTimeout(bz,bx);by.stop=function(){clearTimeout(bA)}})},clearQueue:function(bw){return this.queue(bw||"fx",[])},promise:function(by,bC){var bx,bz=1,bD=E.Deferred(),bB=this,bw=this.length,bA=function(){if(!(--bz)){bD.resolveWith(bB,[bB])}};if(typeof by!=="string"){bC=by;by=I}by=by||"fx";while(bw--){bx=E._data(bB[bw],by+"queueHooks");if(bx&&bx.empty){bz++;bx.empty.add(bA)}}bA();return bD.promise(bC)}});var bj,aV,aA,aK=/[\t\r\n]/g,aR=/\r/g,f=/^(?:button|input)$/i,B=/^(?:button|input|object|select|textarea)$/i,j=/^a(?:rea|)$/i,ag=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,C=E.support.getSetAttribute;E.fn.extend({attr:function(bw,bx){return E.access(this,E.attr,bw,bx,arguments.length>1)},removeAttr:function(bw){return this.each(function(){E.removeAttr(this,bw)})},prop:function(bw,bx){return E.access(this,E.prop,bw,bx,arguments.length>1)},removeProp:function(bw){bw=E.propFix[bw]||bw;return this.each(function(){try{this[bw]=I;delete this[bw]}catch(bx){}})},addClass:function(bA){var bC,by,bx,bz,bB,bD,bw;if(E.isFunction(bA)){return this.each(function(bE){E(this).addClass(bA.call(this,bE,this.className))})}if(bA&&typeof bA==="string"){bC=bA.split(ba);for(by=0,bx=this.length;by<bx;by++){bz=this[by];if(bz.nodeType===1){if(!bz.className&&bC.length===1){bz.className=bA}else{bB=" "+bz.className+" ";for(bD=0,bw=bC.length;bD<bw;bD++){if(bB.indexOf(" "+bC[bD]+" ")<0){bB+=bC[bD]+" "}}bz.className=E.trim(bB)}}}}return this},removeClass:function(bC){var bz,bA,bB,bD,bx,by,bw;if(E.isFunction(bC)){return this.each(function(bE){E(this).removeClass(bC.call(this,bE,this.className))})}if((bC&&typeof bC==="string")||bC===I){bz=(bC||"").split(ba);for(by=0,bw=this.length;by<bw;by++){bB=this[by];if(bB.nodeType===1&&bB.className){bA=(" "+bB.className+" ").replace(aK," ");for(bD=0,bx=bz.length;bD<bx;bD++){while(bA.indexOf(" "+bz[bD]+" ")>=0){bA=bA.replace(" "+bz[bD]+" "," ")}}bB.className=bC?E.trim(bA):""}}}return this},toggleClass:function(bz,bx){var by=typeof bz,bw=typeof bx==="boolean";if(E.isFunction(bz)){return this.each(function(bA){E(this).toggleClass(bz.call(this,bA,this.className,bx),bx)})}return this.each(function(){if(by==="string"){var bC,bB=0,bA=E(this),bD=bx,bE=bz.split(ba);while((bC=bE[bB++])){bD=bw?bD:!bA.hasClass(bC);bA[bD?"addClass":"removeClass"](bC)}}else{if(by==="undefined"||by==="boolean"){if(this.className){E._data(this,"__className__",this.className)}this.className=this.className||bz===false?"":E._data(this,"__className__")||""}}})},hasClass:function(bw){var bz=" "+bw+" ",by=0,bx=this.length;for(;by<bx;by++){if(this[by].nodeType===1&&(" "+this[by].className+" ").replace(aK," ").indexOf(bz)>=0){return true}}return false},val:function(bz){var bw,bx,bA,by=this[0];if(!arguments.length){if(by){bw=E.valHooks[by.type]||E.valHooks[by.nodeName.toLowerCase()];if(bw&&"get" in bw&&(bx=bw.get(by,"value"))!==I){return bx}bx=by.value;return typeof bx==="string"?bx.replace(aR,""):bx==null?"":bx}return}bA=E.isFunction(bz);return this.each(function(bC){var bD,bB=E(this);if(this.nodeType!==1){return}if(bA){bD=bz.call(this,bC,bB.val())}else{bD=bz}if(bD==null){bD=""}else{if(typeof bD==="number"){bD+=""}else{if(E.isArray(bD)){bD=E.map(bD,function(bE){return bE==null?"":bE+""})}}}bw=E.valHooks[this.type]||E.valHooks[this.nodeName.toLowerCase()];if(!bw||!("set" in bw)||bw.set(this,bD,"value")===I){this.value=bD}})}});E.extend({valHooks:{option:{get:function(bw){var bx=bw.attributes.value;return !bx||bx.specified?bw.value:bw.text}},select:{get:function(bw){var bC,by,bE=bw.options,bA=bw.selectedIndex,bz=bw.type==="select-one"||bA<0,bD=bz?null:[],bB=bz?bA+1:bE.length,bx=bA<0?bB:bz?bA:0;for(;bx<bB;bx++){by=bE[bx];if((by.selected||bx===bA)&&(E.support.optDisabled?!by.disabled:by.getAttribute("disabled")===null)&&(!by.parentNode.disabled||!E.nodeName(by.parentNode,"optgroup"))){bC=E(by).val();if(bz){return bC}bD.push(bC)}}return bD},set:function(bx,by){var bw=E.makeArray(by);E(bx).find("option").each(function(){this.selected=E.inArray(E(this).val(),bw)>=0});if(!bw.length){bx.selectedIndex=-1}return bw}}},attrFn:{},attr:function(bC,bz,bD,bB){var by,bw,bA,bx=bC.nodeType;if(!bC||bx===3||bx===8||bx===2){return}if(bB&&E.isFunction(E.fn[bz])){return E(bC)[bz](bD)}if(typeof bC.getAttribute==="undefined"){return E.prop(bC,bz,bD)}bA=bx!==1||!E.isXMLDoc(bC);if(bA){bz=bz.toLowerCase();bw=E.attrHooks[bz]||(ag.test(bz)?aV:bj)}if(bD!==I){if(bD===null){E.removeAttr(bC,bz);return}else{if(bw&&"set" in bw&&bA&&(by=bw.set(bC,bD,bz))!==I){return by}else{bC.setAttribute(bz,bD+"");return bD}}}else{if(bw&&"get" in bw&&bA&&(by=bw.get(bC,bz))!==null){return by}else{by=bC.getAttribute(bz);return by===null?I:by}}},removeAttr:function(bz,bB){var bA,bC,bx,bw,by=0;if(bB&&bz.nodeType===1){bC=bB.split(ba);for(;by<bC.length;by++){bx=bC[by];if(bx){bA=E.propFix[bx]||bx;bw=ag.test(bx);if(!bw){E.attr(bz,bx,"")}bz.removeAttribute(C?bx:bA);if(bw&&bA in bz){bz[bA]=false}}}}},attrHooks:{type:{set:function(bw,bx){if(f.test(bw.nodeName)&&bw.parentNode){E.error("type property can't be changed")}else{if(!E.support.radioValue&&bx==="radio"&&E.nodeName(bw,"input")){var by=bw.value;bw.setAttribute("type",bx);if(by){bw.value=by}return bx}}}},value:{get:function(bx,bw){if(bj&&E.nodeName(bx,"button")){return bj.get(bx,bw)}return bw in bx?bx.value:null},set:function(bx,by,bw){if(bj&&E.nodeName(bx,"button")){return bj.set(bx,by,bw)}bx.value=by}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(bB,bz,bC){var by,bw,bA,bx=bB.nodeType;if(!bB||bx===3||bx===8||bx===2){return}bA=bx!==1||!E.isXMLDoc(bB);if(bA){bz=E.propFix[bz]||bz;bw=E.propHooks[bz]}if(bC!==I){if(bw&&"set" in bw&&(by=bw.set(bB,bC,bz))!==I){return by}else{return(bB[bz]=bC)}}else{if(bw&&"get" in bw&&(by=bw.get(bB,bz))!==null){return by}else{return bB[bz]}}},propHooks:{tabIndex:{get:function(bx){var bw=bx.getAttributeNode("tabindex");return bw&&bw.specified?parseInt(bw.value,10):B.test(bx.nodeName)||j.test(bx.nodeName)&&bx.href?0:I}}}});aV={get:function(bx,bw){var bz,by=E.prop(bx,bw);return by===true||typeof by!=="boolean"&&(bz=bx.getAttributeNode(bw))&&bz.nodeValue!==false?bw.toLowerCase():I},set:function(bx,bz,bw){var by;if(bz===false){E.removeAttr(bx,bw)}else{by=E.propFix[bw]||bw;if(by in bx){bx[by]=true}bx.setAttribute(bw,bw.toLowerCase())}return bw}};if(!E.support.enctype){E.propFix.enctype="encoding"}var bh=/^(?:textarea|input|select)$/i,p=/^([^\.]*|)(?:\.(.+)|)$/,H=/(?:^|\s)hover(\.\S+|)\b/,aJ=/^key/,bk=/^(?:mouse|contextmenu)|click/,P=/^(?:focusinfocus|focusoutblur)$/,bu=function(bw){return E.event.special.hover?bw:bw.replace(H,"mouseenter$1 mouseleave$1")};E.event={add:function(bz,bD,bK,bB,bA){var bE,bC,bL,bJ,bI,bG,bw,bH,bx,by,bF;if(bz.nodeType===3||bz.nodeType===8||!bD||!bK||!(bE=E._data(bz))){return}if(bK.handler){bx=bK;bK=bx.handler;bA=bx.selector}if(!bK.guid){bK.guid=E.guid++}bL=bE.events;if(!bL){bE.events=bL={}}bC=bE.handle;if(!bC){bE.handle=bC=function(bM){return typeof E!=="undefined"&&(!bM||E.event.triggered!==bM.type)?E.event.dispatch.apply(bC.elem,arguments):I};bC.elem=bz}bD=E.trim(bu(bD)).split(" ");for(bJ=0;bJ<bD.length;bJ++){bI=p.exec(bD[bJ])||[];bG=bI[1];bw=(bI[2]||"").split(".").sort();bF=E.event.special[bG]||{};bG=(bA?bF.delegateType:bF.bindType)||bG;bF=E.event.special[bG]||{};bH=E.extend({type:bG,origType:bI[1],data:bB,handler:bK,guid:bK.guid,selector:bA,needsContext:bA&&E.expr.match.needsContext.test(bA),namespace:bw.join(".")},bx);by=bL[bG];if(!by){by=bL[bG]=[];by.delegateCount=0;if(!bF.setup||bF.setup.call(bz,bB,bw,bC)===false){if(bz.addEventListener){if(bB&&bB.passive!==I){bz.addEventListener(bG,bC,bB)}else{bz.addEventListener(bG,bC,false)}}else{if(bz.attachEvent){bz.attachEvent("on"+bG,bC)}}}}if(bF.add){bF.add.call(bz,bH);if(!bH.handler.guid){bH.handler.guid=bK.guid}}if(bA){by.splice(by.delegateCount++,0,bH)}else{by.push(bH)}E.event.global[bG]=true}bz=null},global:{},remove:function(bz,bE,bK,bA,bD){var bL,bM,bH,by,bx,bB,bC,bJ,bG,bw,bI,bF=E.hasData(bz)&&E._data(bz);if(!bF||!(bJ=bF.events)){return}bE=E.trim(bu(bE||"")).split(" ");for(bL=0;bL<bE.length;bL++){bM=p.exec(bE[bL])||[];bH=by=bM[1];bx=bM[2];if(!bH){for(bH in bJ){E.event.remove(bz,bH+bE[bL],bK,bA,true)}continue}bG=E.event.special[bH]||{};bH=(bA?bG.delegateType:bG.bindType)||bH;bw=bJ[bH]||[];bB=bw.length;bx=bx?new RegExp("(^|\\.)"+bx.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(bC=0;bC<bw.length;bC++){bI=bw[bC];if((bD||by===bI.origType)&&(!bK||bK.guid===bI.guid)&&(!bx||bx.test(bI.namespace))&&(!bA||bA===bI.selector||bA==="**"&&bI.selector)){bw.splice(bC--,1);if(bI.selector){bw.delegateCount--}if(bG.remove){bG.remove.call(bz,bI)}}}if(bw.length===0&&bB!==bw.length){if(!bG.teardown||bG.teardown.call(bz,bx,bF.handle)===false){E.removeEvent(bz,bH,bF.handle)}delete bJ[bH]}}if(E.isEmptyObject(bJ)){delete bF.handle;E.removeData(bz,"events",true)}},customEvent:{getData:true,setData:true,changeData:true},trigger:function(bx,bE,bC,bL){if(bC&&(bC.nodeType===3||bC.nodeType===8)){return}var bw,bz,bF,bJ,bB,bA,bH,bG,bD,bK,bI=bx.type||bx,by=[];if(P.test(bI+E.event.triggered)){return}if(bI.indexOf("!")>=0){bI=bI.slice(0,-1);bz=true}if(bI.indexOf(".")>=0){by=bI.split(".");bI=by.shift();by.sort()}if((!bC||E.event.customEvent[bI])&&!E.event.global[bI]){return}bx=typeof bx==="object"?bx[E.expando]?bx:new E.Event(bI,bx):new E.Event(bI);bx.type=bI;bx.isTrigger=true;bx.exclusive=bz;bx.namespace=by.join(".");bx.namespace_re=bx.namespace?new RegExp("(^|\\.)"+by.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;bA=bI.indexOf(":")<0?"on"+bI:"";if(!bC){bw=E.cache;for(bF in bw){if(bw[bF].events&&bw[bF].events[bI]){E.event.trigger(bx,bE,bw[bF].handle.elem,true)}}return}bx.result=I;if(!bx.target){bx.target=bC}bE=bE!=null?E.makeArray(bE):[];bE.unshift(bx);bH=E.event.special[bI]||{};if(bH.trigger&&bH.trigger.apply(bC,bE)===false){return}bD=[[bC,bH.bindType||bI]];if(!bL&&!bH.noBubble&&!E.isWindow(bC)){bK=bH.delegateType||bI;bJ=P.test(bK+bI)?bC:bC.parentNode;for(bB=bC;bJ;bJ=bJ.parentNode){bD.push([bJ,bK]);bB=bJ}if(bB===(bC.ownerDocument||am)){bD.push([bB.defaultView||bB.parentWindow||bf,bK])}}for(bF=0;bF<bD.length&&!bx.isPropagationStopped();bF++){bJ=bD[bF][0];bx.type=bD[bF][1];bG=(E._data(bJ,"events")||{})[bx.type]&&E._data(bJ,"handle");if(bG){bG.apply(bJ,bE)}bG=bA&&bJ[bA];if(bG&&E.acceptData(bJ)&&bG.apply&&bG.apply(bJ,bE)===false){bx.preventDefault()}}bx.type=bI;if(!bL&&!bx.isDefaultPrevented()){if((!bH._default||bH._default.apply(bC.ownerDocument,bE)===false)&&!(bI==="click"&&E.nodeName(bC,"a"))&&E.acceptData(bC)){if(bA&&bC[bI]&&((bI!=="focus"&&bI!=="blur")||bx.target.offsetWidth!==0)&&!E.isWindow(bC)){bB=bC[bA];if(bB){bC[bA]=null}E.event.triggered=bI;bC[bI]();E.event.triggered=I;if(bB){bC[bA]=bB}}}}return bx.result},dispatch:function(bw){bw=E.event.fix(bw||bf.event);var bD,bC,bM,bG,bF,bx,bE,bK,bz,bL,bA=((E._data(this,"events")||{})[bw.type]||[]),bB=bA.delegateCount,bI=aF.call(arguments),by=!bw.exclusive&&!bw.namespace,bH=E.event.special[bw.type]||{},bJ=[];bI[0]=bw;bw.delegateTarget=this;if(bH.preDispatch&&bH.preDispatch.call(this,bw)===false){return}if(bB&&!(bw.button&&bw.type==="click")){for(bM=bw.target;bM!=this;bM=bM.parentNode||this){if(bM.disabled!==true||bw.type!=="click"){bF={};bE=[];for(bD=0;bD<bB;bD++){bK=bA[bD];bz=bK.selector;if(bF[bz]===I){bF[bz]=bK.needsContext?E(bz,this).index(bM)>=0:E.find(bz,this,null,[bM]).length}if(bF[bz]){bE.push(bK)}}if(bE.length){bJ.push({elem:bM,matches:bE})}}}}if(bA.length>bB){bJ.push({elem:this,matches:bA.slice(bB)})}for(bD=0;bD<bJ.length&&!bw.isPropagationStopped();bD++){bx=bJ[bD];bw.currentTarget=bx.elem;for(bC=0;bC<bx.matches.length&&!bw.isImmediatePropagationStopped();bC++){bK=bx.matches[bC];if(by||(!bw.namespace&&!bK.namespace)||bw.namespace_re&&bw.namespace_re.test(bK.namespace)){bw.data=bK.data;bw.handleObj=bK;bG=((E.event.special[bK.origType]||{}).handle||bK.handler).apply(bx.elem,bI);if(bG!==I){bw.result=bG;if(bG===false){bw.preventDefault();bw.stopPropagation()}}}}}if(bH.postDispatch){bH.postDispatch.call(this,bw)}return bw.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(bx,bw){if(bx.which==null){bx.which=bw.charCode!=null?bw.charCode:bw.keyCode}return bx}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(bz,by){var bA,bB,bw,bx=by.button,bC=by.fromElement;if(bz.pageX==null&&by.clientX!=null){bA=bz.target.ownerDocument||am;bB=bA.documentElement;bw=bA.body;bz.pageX=by.clientX+(bB&&bB.scrollLeft||bw&&bw.scrollLeft||0)-(bB&&bB.clientLeft||bw&&bw.clientLeft||0);bz.pageY=by.clientY+(bB&&bB.scrollTop||bw&&bw.scrollTop||0)-(bB&&bB.clientTop||bw&&bw.clientTop||0)}if(!bz.relatedTarget&&bC){bz.relatedTarget=bC===bz.target?by.toElement:bC}if(!bz.which&&bx!==I){bz.which=(bx&1?1:(bx&2?3:(bx&4?2:0)))}return bz}},fix:function(by){if(by[E.expando]){return by}var bx,bB,bw=by,bz=E.event.fixHooks[by.type]||{},bA=bz.props?this.props.concat(bz.props):this.props;by=E.Event(bw);for(bx=bA.length;bx;){bB=bA[--bx];by[bB]=bw[bB]}if(!by.target){by.target=bw.srcElement||am}if(by.target.nodeType===3){by.target=by.target.parentNode}by.metaKey=!!by.metaKey;return bz.filter?bz.filter(by,bw):by},special:{load:{noBubble:true},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(by,bx,bw){if(E.isWindow(this)){this.onbeforeunload=bw}},teardown:function(bx,bw){if(this.onbeforeunload===bw){this.onbeforeunload=null}}}},simulate:function(bx,bz,by,bw){var bA=E.extend(new E.Event(),by,{type:bx,isSimulated:true,originalEvent:{}});if(bw){E.event.trigger(bA,null,bz)}else{E.event.dispatch.call(bz,bA)}if(bA.isDefaultPrevented()){by.preventDefault()}}};E.event.handle=E.event.dispatch;E.removeEvent=am.removeEventListener?function(bx,bw,by){if(bx.removeEventListener){bx.removeEventListener(bw,by,false)}}:function(by,bx,bz){var bw="on"+bx;if(by.detachEvent){if(typeof by[bw]==="undefined"){by[bw]=null}by.detachEvent(bw,bz)}};E.Event=function(bx,bw){if(!(this instanceof E.Event)){return new E.Event(bx,bw)}if(bx&&bx.type){this.originalEvent=bx;this.type=bx.type;this.isDefaultPrevented=(bx.defaultPrevented||bx.returnValue===false||bx.getPreventDefault&&bx.getPreventDefault())?h:bp}else{this.type=bx}if(bw){E.extend(this,bw)}this.timeStamp=bx&&bx.timeStamp||E.now();this[E.expando]=true};function bp(){return false}function h(){return true}E.Event.prototype={preventDefault:function(){this.isDefaultPrevented=h;var bw=this.originalEvent;if(!bw){return}if(bw.preventDefault){bw.preventDefault()}else{bw.returnValue=false}},stopPropagation:function(){this.isPropagationStopped=h;var bw=this.originalEvent;if(!bw){return}if(bw.stopPropagation){bw.stopPropagation()}bw.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=h;this.stopPropagation()},isDefaultPrevented:bp,isPropagationStopped:bp,isImmediatePropagationStopped:bp};E.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(bx,bw){E.event.special[bx]={delegateType:bw,bindType:bw,handle:function(bB){var bz,bD=this,bC=bB.relatedTarget,bA=bB.handleObj,by=bA.selector;if(!bC||(bC!==bD&&!E.contains(bD,bC))){bB.type=bA.origType;bz=bA.handler.apply(this,arguments);bB.type=bw}return bz}}});E.fn.extend({on:function(by,bw,bB,bA,bx){var bC,bz;if(typeof by==="object"){if(typeof bw!=="string"){bB=bB||bw;bw=I}for(bz in by){this.on(bz,bw,bB,by[bz],bx)}return this}if(bB==null&&bA==null){bA=bw;bB=bw=I}else{if(bA==null){if(typeof bw==="string"){bA=bB;bB=I}else{bA=bB;bB=bw;bw=I}}}if(bA===false){bA=bp}else{if(!bA){return this}}if(bx===1){bC=bA;bA=function(bD){E().off(bD);return bC.apply(this,arguments)};bA.guid=bC.guid||(bC.guid=E.guid++)}return this.each(function(){E.event.add(this,by,bA,bB,bw)})},off:function(by,bw,bA){var bx,bz;if(by&&by.preventDefault&&by.handleObj){bx=by.handleObj;E(by.delegateTarget).off(bx.namespace?bx.origType+"."+bx.namespace:bx.origType,bx.selector,bx.handler);return this}if(typeof by==="object"){for(bz in by){this.off(bz,bw,by[bz])}return this}if(bw===false||typeof bw==="function"){bA=bw;bw=I}if(bA===false){bA=bp}return this.each(function(){E.event.remove(this,by,bA,bw)})},delegate:function(bw,bx,bz,by){return this.on(bx,bw,bz,by)},undelegate:function(bw,bx,by){return arguments.length===1?this.off(bw,"**"):this.off(bx,bw||"**",by)},trigger:function(bw,bx){return this.each(function(){E.event.trigger(bw,bx,this)})},triggerHandler:function(bw,bx){if(this[0]){return E.event.trigger(bw,bx,this[0],true)}},toggle:function(bz){var bx=arguments,bw=bz.guid||E.guid++,by=0,bA=function(bB){var bC=(E._data(this,"lastToggle"+bz.guid)||0)%by;E._data(this,"lastToggle"+bz.guid,bC+1);bB.preventDefault();return bx[bC].apply(this,arguments)||false};bA.guid=bw;while(by<bx.length){bx[by++].guid=bw}return this.click(bA)},hover:function(bw,bx){return this.mouseenter(bw).mouseleave(bx||bw)}});E.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "),function(bx,bw){E.fn[bw]=function(bz,by){if(by==null){by=bz;bz=null}return arguments.length>0?this.on(bw,null,bz,by):this.trigger(bw)};if(aJ.test(bw)){E.event.fixHooks[bw]=E.event.keyHooks}if(bk.test(bw)){E.event.fixHooks[bw]=E.event.mouseHooks}});
/*!
             * Sizzle CSS Selector Engine
             * Copyright 2012 JQXLite Foundation and other contributors
             * Released under the MIT license
             * http://sizzlejs.com/
             */
(function(cp,bO){var cu,bH,ci,bx,bT,b7,bK,bN,bJ,cg,bG=true,b1="undefined",cw=("sizcache"+Math.random()).replace(".",""),bB=String,bF=cp.document,bI=bF.documentElement,bY=0,bM=0,cb=[].pop,ct=[].push,bS=[].slice,bV=[].indexOf||function(cG){var cF=0,cE=this.length;for(;cF<cE;cF++){if(this[cF]===cG){return cF}}return -1},cy=function(cE,cF){cE[cw]=cF==null||cF;return cE},cC=function(){var cE={},cF=[];return cy(function(cG,cH){if(cF.push(cG)>ci.cacheLength){delete cE[cF.shift()]}return(cE[cG+" "]=cH)},cE)},cr=cC(),cs=cC(),bU=cC(),b5="[\\x20\\t\\r\\n\\f]",bR="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",bP=bR.replace("w","w#"),cB="([*^$|!~]?=)",cm="\\["+b5+"*("+bR+")"+b5+"*(?:"+cB+b5+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+bP+")|)|)"+b5+"*\\]",cD=":("+bR+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+cm+")|[^:]|\\\\.)*|.*))\\)|)",b6=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+b5+"*((?:-\\d)?\\d*)"+b5+"*\\)|)(?=[^-]|$)",cq=new RegExp("^"+b5+"+|((?:^|[^\\\\])(?:\\\\.)*)"+b5+"+$","g"),bC=new RegExp("^"+b5+"*,"+b5+"*"),ce=new RegExp("^"+b5+"*([\\x20\\t\\r\\n\\f>+~])"+b5+"*"),cj=new RegExp(cD),cl=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,ca=/^:not/,co=/[\x20\t\r\n\f]*[+~]/,cx=/:not\($/,bZ=/h\d/i,ck=/input|select|textarea|button/i,b0=/\\(?!\\)/g,cd={ID:new RegExp("^#("+bR+")"),CLASS:new RegExp("^\\.("+bR+")"),NAME:new RegExp("^\\[name=['\"]?("+bR+")['\"]?\\]"),TAG:new RegExp("^("+bR.replace("w","w*")+")"),ATTR:new RegExp("^"+cm),PSEUDO:new RegExp("^"+cD),POS:new RegExp(b6,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+b5+"*(even|odd|(([+-]|)(\\d*)n|)"+b5+"*(?:([+-]|)"+b5+"*(\\d+)|))"+b5+"*\\)|)","i"),needsContext:new RegExp("^"+b5+"*[>+~]|"+b6,"i")},ch=function(cE){var cG=bF.createElement("div");try{return cE(cG)}catch(cF){return false}finally{cG=null}},bE=ch(function(cE){cE.appendChild(bF.createComment(""));return !cE.getElementsByTagName("*").length}),b9=ch(function(cE){cE.innerHTML="<a href='#'></a>";return cE.firstChild&&typeof cE.firstChild.getAttribute!==b1&&cE.firstChild.getAttribute("href")==="#"}),bX=ch(function(cF){cF.innerHTML="<select></select>";var cE=typeof cF.lastChild.getAttribute("multiple");return cE!=="boolean"&&cE!=="string"}),b8=ch(function(cE){cE.innerHTML="<div class='hidden e'></div><div class='hidden'></div>";if(!cE.getElementsByClassName||!cE.getElementsByClassName("e").length){return false}cE.lastChild.className="e";return cE.getElementsByClassName("e").length===2}),bw=ch(function(cF){cF.id=cw+0;cF.innerHTML="<a name='"+cw+"'></a><div name='"+cw+"'></div>";bI.insertBefore(cF,bI.firstChild);var cE=bF.getElementsByName&&bF.getElementsByName(cw).length===2+bF.getElementsByName(cw+0).length;bH=!bF.getElementById(cw);bI.removeChild(cF);return cE});try{bS.call(bI.childNodes,0)[0].nodeType}catch(cA){bS=function(cF){var cG,cE=[];for(;(cG=this[cF]);cF++){cE.push(cG)}return cE}}function cn(cH,cE,cJ,cM){cJ=cJ||[];cE=cE||bF;var cK,cF,cL,cG,cI=cE.nodeType;if(!cH||typeof cH!=="string"){return cJ}if(cI!==1&&cI!==9){return[]}cL=bT(cE);if(!cL&&!cM){if((cK=cl.exec(cH))){if((cG=cK[1])){if(cI===9){cF=cE.getElementById(cG);if(cF&&cF.parentNode){if(cF.id===cG){cJ.push(cF);return cJ}}else{return cJ}}else{if(cE.ownerDocument&&(cF=cE.ownerDocument.getElementById(cG))&&b7(cE,cF)&&cF.id===cG){cJ.push(cF);return cJ}}}else{if(cK[2]){ct.apply(cJ,bS.call(cE.getElementsByTagName(cH),0));return cJ}else{if((cG=cK[3])&&b8&&cE.getElementsByClassName){ct.apply(cJ,bS.call(cE.getElementsByClassName(cG),0));return cJ}}}}}return cv(cH.replace(cq,"$1"),cE,cJ,cM,cL)}cn.matches=function(cF,cE){return cn(cF,null,null,cE)};cn.matchesSelector=function(cE,cF){return cn(cF,null,null,[cE]).length>0};function cf(cE){return function(cG){var cF=cG.nodeName.toLowerCase();return cF==="input"&&cG.type===cE}}function bA(cE){return function(cG){var cF=cG.nodeName.toLowerCase();return(cF==="input"||cF==="button")&&cG.type===cE}}function cc(cE){return cy(function(cF){cF=+cF;return cy(function(cG,cK){var cI,cH=cE([],cG.length,cF),cJ=cH.length;while(cJ--){if(cG[(cI=cH[cJ])]){cG[cI]=!(cK[cI]=cG[cI])}}})})}bx=cn.getText=function(cI){var cH,cF="",cG=0,cE=cI.nodeType;if(cE){if(cE===1||cE===9||cE===11){if(typeof cI.textContent==="string"){return cI.textContent}else{for(cI=cI.firstChild;cI;cI=cI.nextSibling){cF+=bx(cI)}}}else{if(cE===3||cE===4){return cI.nodeValue}}}else{for(;(cH=cI[cG]);cG++){cF+=bx(cH)}}return cF};bT=cn.isXML=function(cE){var cF=cE&&(cE.ownerDocument||cE).documentElement;return cF?cF.nodeName!=="HTML":false};b7=cn.contains=bI.contains?function(cF,cE){var cH=cF.nodeType===9?cF.documentElement:cF,cG=cE&&cE.parentNode;return cF===cG||!!(cG&&cG.nodeType===1&&cH.contains&&cH.contains(cG))}:bI.compareDocumentPosition?function(cF,cE){return cE&&!!(cF.compareDocumentPosition(cE)&16)}:function(cF,cE){while((cE=cE.parentNode)){if(cE===cF){return true}}return false};cn.attr=function(cG,cF){var cH,cE=bT(cG);if(!cE){cF=cF.toLowerCase()}if((cH=ci.attrHandle[cF])){return cH(cG)}if(cE||bX){return cG.getAttribute(cF)}cH=cG.getAttributeNode(cF);return cH?typeof cG[cF]==="boolean"?cG[cF]?cF:null:cH.specified?cH.value:null:null};ci=cn.selectors={cacheLength:50,createPseudo:cy,match:cd,attrHandle:b9?{}:{href:function(cE){return cE.getAttribute("href",2)},type:function(cE){return cE.getAttribute("type")}},find:{ID:bH?function(cH,cG,cF){if(typeof cG.getElementById!==b1&&!cF){var cE=cG.getElementById(cH);return cE&&cE.parentNode?[cE]:[]}}:function(cH,cG,cF){if(typeof cG.getElementById!==b1&&!cF){var cE=cG.getElementById(cH);return cE?cE.id===cH||typeof cE.getAttributeNode!==b1&&cE.getAttributeNode("id").value===cH?[cE]:bO:[]}},TAG:bE?function(cE,cF){if(typeof cF.getElementsByTagName!==b1){return cF.getElementsByTagName(cE)}}:function(cE,cI){var cH=cI.getElementsByTagName(cE);if(cE==="*"){var cJ,cG=[],cF=0;for(;(cJ=cH[cF]);cF++){if(cJ.nodeType===1){cG.push(cJ)}}return cG}return cH},NAME:bw&&function(cE,cF){if(typeof cF.getElementsByName!==b1){return cF.getElementsByName(name)}},CLASS:b8&&function(cG,cF,cE){if(typeof cF.getElementsByClassName!==b1&&!cE){return cF.getElementsByClassName(cG)}}},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(cE){cE[1]=cE[1].replace(b0,"");cE[3]=(cE[4]||cE[5]||"").replace(b0,"");if(cE[2]==="~="){cE[3]=" "+cE[3]+" "}return cE.slice(0,4)},CHILD:function(cE){cE[1]=cE[1].toLowerCase();if(cE[1]==="nth"){if(!cE[2]){cn.error(cE[0])}cE[3]=+(cE[3]?cE[4]+(cE[5]||1):2*(cE[2]==="even"||cE[2]==="odd"));cE[4]=+((cE[6]+cE[7])||cE[2]==="odd")}else{if(cE[2]){cn.error(cE[0])}}return cE},PSEUDO:function(cF){var cG,cE;if(cd.CHILD.test(cF[0])){return null}if(cF[3]){cF[2]=cF[3]}else{if((cG=cF[4])){if(cj.test(cG)&&(cE=by(cG,true))&&(cE=cG.indexOf(")",cG.length-cE)-cG.length)){cG=cG.slice(0,cE);cF[0]=cF[0].slice(0,cE)}cF[2]=cG}}return cF.slice(0,3)}},filter:{ID:bH?function(cE){cE=cE.replace(b0,"");return function(cF){return cF.getAttribute("id")===cE}}:function(cE){cE=cE.replace(b0,"");return function(cG){var cF=typeof cG.getAttributeNode!==b1&&cG.getAttributeNode("id");return cF&&cF.value===cE}},TAG:function(cE){if(cE==="*"){return function(){return true}}cE=cE.replace(b0,"").toLowerCase();return function(cF){return cF.nodeName&&cF.nodeName.toLowerCase()===cE}},CLASS:function(cE){var cF=cr[cw][cE+" "];return cF||(cF=new RegExp("(^|"+b5+")"+cE+"("+b5+"|$)"))&&cr(cE,function(cG){return cF.test(cG.className||(typeof cG.getAttribute!==b1&&cG.getAttribute("class"))||"")})},ATTR:function(cG,cF,cE){return function(cJ,cI){var cH=cn.attr(cJ,cG);if(cH==null){return cF==="!="}if(!cF){return true}cH+="";return cF==="="?cH===cE:cF==="!="?cH!==cE:cF==="^="?cE&&cH.indexOf(cE)===0:cF==="*="?cE&&cH.indexOf(cE)>-1:cF==="$="?cE&&cH.substr(cH.length-cE.length)===cE:cF==="~="?(" "+cH+" ").indexOf(cE)>-1:cF==="|="?cH===cE||cH.substr(0,cE.length+1)===cE+"-":false}},CHILD:function(cE,cG,cH,cF){if(cE==="nth"){return function(cK){var cJ,cL,cI=cK.parentNode;if(cH===1&&cF===0){return true}if(cI){cL=0;for(cJ=cI.firstChild;cJ;cJ=cJ.nextSibling){if(cJ.nodeType===1){cL++;if(cK===cJ){break}}}}cL-=cF;return cL===cH||(cL%cH===0&&cL/cH>=0)}}return function(cJ){var cI=cJ;switch(cE){case"only":case"first":while((cI=cI.previousSibling)){if(cI.nodeType===1){return false}}if(cE==="first"){return true}cI=cJ;case"last":while((cI=cI.nextSibling)){if(cI.nodeType===1){return false}}return true}}},PSEUDO:function(cH,cG){var cE,cF=ci.pseudos[cH]||ci.setFilters[cH.toLowerCase()]||cn.error("unsupported pseudo: "+cH);if(cF[cw]){return cF(cG)}if(cF.length>1){cE=[cH,cH,"",cG];return ci.setFilters.hasOwnProperty(cH.toLowerCase())?cy(function(cK,cM){var cJ,cI=cF(cK,cG),cL=cI.length;while(cL--){cJ=bV.call(cK,cI[cL]);cK[cJ]=!(cM[cJ]=cI[cL])}}):function(cI){return cF(cI,0,cE)}}return cF}},pseudos:{not:cy(function(cE){var cF=[],cG=[],cH=bK(cE.replace(cq,"$1"));return cH[cw]?cy(function(cJ,cO,cM,cK){var cN,cI=cH(cJ,null,cK,[]),cL=cJ.length;while(cL--){if((cN=cI[cL])){cJ[cL]=!(cO[cL]=cN)}}}):function(cK,cJ,cI){cF[0]=cK;cH(cF,null,cI,cG);return !cG.pop()}}),has:cy(function(cE){return function(cF){return cn(cE,cF).length>0}}),contains:cy(function(cE){return function(cF){return(cF.textContent||cF.innerText||bx(cF)).indexOf(cE)>-1}}),enabled:function(cE){return cE.disabled===false},disabled:function(cE){return cE.disabled===true},checked:function(cE){var cF=cE.nodeName.toLowerCase();return(cF==="input"&&!!cE.checked)||(cF==="option"&&!!cE.selected)},selected:function(cE){if(cE.parentNode){cE.parentNode.selectedIndex}return cE.selected===true},parent:function(cE){return !ci.pseudos.empty(cE)},empty:function(cF){var cE;cF=cF.firstChild;while(cF){if(cF.nodeName>"@"||(cE=cF.nodeType)===3||cE===4){return false}cF=cF.nextSibling}return true},header:function(cE){return bZ.test(cE.nodeName)},text:function(cG){var cF,cE;return cG.nodeName.toLowerCase()==="input"&&(cF=cG.type)==="text"&&((cE=cG.getAttribute("type"))==null||cE.toLowerCase()===cF)},radio:cf("radio"),checkbox:cf("checkbox"),file:cf("file"),password:cf("password"),image:cf("image"),submit:bA("submit"),reset:bA("reset"),button:function(cF){var cE=cF.nodeName.toLowerCase();return cE==="input"&&cF.type==="button"||cE==="button"},input:function(cE){return ck.test(cE.nodeName)},focus:function(cE){var cF=cE.ownerDocument;return cE===cF.activeElement&&(!cF.hasFocus||cF.hasFocus())&&!!(cE.type||cE.href||~cE.tabIndex)},active:function(cE){return cE===cE.ownerDocument.activeElement},first:cc(function(){return[0]}),last:cc(function(cE,cF){return[cF-1]}),eq:cc(function(cE,cG,cF){return[cF<0?cF+cG:cF]}),even:cc(function(cE,cG){for(var cF=0;cF<cG;cF+=2){cE.push(cF)}return cE}),odd:cc(function(cE,cG){for(var cF=1;cF<cG;cF+=2){cE.push(cF)}return cE}),lt:cc(function(cE,cH,cG){for(var cF=cG<0?cG+cH:cG;--cF>=0;){cE.push(cF)}return cE}),gt:cc(function(cE,cH,cG){for(var cF=cG<0?cG+cH:cG;++cF<cH;){cE.push(cF)}return cE})}};function bz(cF,cE,cG){if(cF===cE){return cG}var cH=cF.nextSibling;while(cH){if(cH===cE){return -1}cH=cH.nextSibling}return 1}bN=bI.compareDocumentPosition?function(cF,cE){if(cF===cE){bJ=true;return 0}return(!cF.compareDocumentPosition||!cE.compareDocumentPosition?cF.compareDocumentPosition:cF.compareDocumentPosition(cE)&4)?-1:1}:function(cM,cL){if(cM===cL){bJ=true;return 0}else{if(cM.sourceIndex&&cL.sourceIndex){return cM.sourceIndex-cL.sourceIndex}}var cJ,cF,cG=[],cE=[],cI=cM.parentNode,cK=cL.parentNode,cN=cI;if(cI===cK){return bz(cM,cL)}else{if(!cI){return -1}else{if(!cK){return 1}}}while(cN){cG.unshift(cN);cN=cN.parentNode}cN=cK;while(cN){cE.unshift(cN);cN=cN.parentNode}cJ=cG.length;cF=cE.length;for(var cH=0;cH<cJ&&cH<cF;cH++){if(cG[cH]!==cE[cH]){return bz(cG[cH],cE[cH])}}return cH===cJ?bz(cM,cE[cH],-1):bz(cG[cH],cL,1)};[0,0].sort(bN);bG=!bJ;cn.uniqueSort=function(cG){var cH,cI=[],cF=1,cE=0;bJ=bG;cG.sort(bN);if(bJ){for(;(cH=cG[cF]);cF++){if(cH===cG[cF-1]){cE=cI.push(cF)}}while(cE--){cG.splice(cI[cE],1)}}return cG};cn.error=function(cE){throw new Error("Syntax error, unrecognized expression: "+cE)};function by(cI,cN){var cF,cJ,cL,cM,cK,cG,cE,cH=cs[cw][cI+" "];if(cH){return cN?0:cH.slice(0)}cK=cI;cG=[];cE=ci.preFilter;while(cK){if(!cF||(cJ=bC.exec(cK))){if(cJ){cK=cK.slice(cJ[0].length)||cK}cG.push(cL=[])}cF=false;if((cJ=ce.exec(cK))){cL.push(cF=new bB(cJ.shift()));cK=cK.slice(cF.length);cF.type=cJ[0].replace(cq," ")}for(cM in ci.filter){if((cJ=cd[cM].exec(cK))&&(!cE[cM]||(cJ=cE[cM](cJ)))){cL.push(cF=new bB(cJ.shift()));cK=cK.slice(cF.length);cF.type=cM;cF.matches=cJ}}if(!cF){break}}return cN?cK.length:cK?cn.error(cI):cs(cI,cG).slice(0)}function b3(cI,cG,cH){var cE=cG.dir,cJ=cH&&cG.dir==="parentNode",cF=bM++;return cG.first?function(cM,cL,cK){while((cM=cM[cE])){if(cJ||cM.nodeType===1){return cI(cM,cL,cK)}}}:function(cN,cM,cL){if(!cL){var cK,cO=bY+" "+cF+" ",cP=cO+cu;while((cN=cN[cE])){if(cJ||cN.nodeType===1){if((cK=cN[cw])===cP){return cN.sizset}else{if(typeof cK==="string"&&cK.indexOf(cO)===0){if(cN.sizset){return cN}}else{cN[cw]=cP;if(cI(cN,cM,cL)){cN.sizset=true;return cN}cN.sizset=false}}}}}else{while((cN=cN[cE])){if(cJ||cN.nodeType===1){if(cI(cN,cM,cL)){return cN}}}}}}function bL(cE){return cE.length>1?function(cI,cH,cF){var cG=cE.length;while(cG--){if(!cE[cG](cI,cH,cF)){return false}}return true}:cE[0]}function b2(cE,cF,cG,cH,cK){var cI,cN=[],cJ=0,cL=cE.length,cM=cF!=null;for(;cJ<cL;cJ++){if((cI=cE[cJ])){if(!cG||cG(cI,cH,cK)){cN.push(cI);if(cM){cF.push(cJ)}}}}return cN}function cz(cG,cF,cI,cH,cJ,cE){if(cH&&!cH[cw]){cH=cz(cH)}if(cJ&&!cJ[cw]){cJ=cz(cJ,cE)}return cy(function(cU,cR,cM,cT){var cW,cS,cO,cN=[],cV=[],cL=cR.length,cK=cU||bW(cF||"*",cM.nodeType?[cM]:cM,[]),cP=cG&&(cU||!cF)?b2(cK,cN,cG,cM,cT):cK,cQ=cI?cJ||(cU?cG:cL||cH)?[]:cR:cP;if(cI){cI(cP,cQ,cM,cT)}if(cH){cW=b2(cQ,cV);cH(cW,[],cM,cT);cS=cW.length;while(cS--){if((cO=cW[cS])){cQ[cV[cS]]=!(cP[cV[cS]]=cO)}}}if(cU){if(cJ||cG){if(cJ){cW=[];cS=cQ.length;while(cS--){if((cO=cQ[cS])){cW.push((cP[cS]=cO))}}cJ(null,(cQ=[]),cW,cT)}cS=cQ.length;while(cS--){if((cO=cQ[cS])&&(cW=cJ?bV.call(cU,cO):cN[cS])>-1){cU[cW]=!(cR[cW]=cO)}}}}else{cQ=b2(cQ===cR?cQ.splice(cL,cQ.length):cQ);if(cJ){cJ(null,cR,cQ,cT)}else{ct.apply(cR,cQ)}}})}function b4(cK){var cF,cI,cG,cJ=cK.length,cN=ci.relative[cK[0].type],cO=cN||ci.relative[" "],cH=cN?1:0,cL=b3(function(cP){return cP===cF},cO,true),cM=b3(function(cP){return bV.call(cF,cP)>-1},cO,true),cE=[function(cR,cQ,cP){return(!cN&&(cP||cQ!==cg))||((cF=cQ).nodeType?cL(cR,cQ,cP):cM(cR,cQ,cP))}];for(;cH<cJ;cH++){if((cI=ci.relative[cK[cH].type])){cE=[b3(bL(cE),cI)]}else{cI=ci.filter[cK[cH].type].apply(null,cK[cH].matches);if(cI[cw]){cG=++cH;for(;cG<cJ;cG++){if(ci.relative[cK[cG].type]){break}}return cz(cH>1&&bL(cE),cH>1&&cK.slice(0,cH-1).join("").replace(cq,"$1"),cI,cH<cG&&b4(cK.slice(cH,cG)),cG<cJ&&b4((cK=cK.slice(cG))),cG<cJ&&cK.join(""))}cE.push(cI)}}return bL(cE)}function bD(cH,cG){var cE=cG.length>0,cI=cH.length>0,cF=function(cS,cM,cR,cQ,cY){var cN,cO,cT,cX=[],cW=0,cP="0",cJ=cS&&[],cU=cY!=null,cV=cg,cL=cS||cI&&ci.find.TAG("*",cY&&cM.parentNode||cM),cK=(bY+=cV==null?1:Math.E);if(cU){cg=cM!==bF&&cM;cu=cF.el}for(;(cN=cL[cP])!=null;cP++){if(cI&&cN){for(cO=0;(cT=cH[cO]);cO++){if(cT(cN,cM,cR)){cQ.push(cN);break}}if(cU){bY=cK;cu=++cF.el}}if(cE){if((cN=!cT&&cN)){cW--}if(cS){cJ.push(cN)}}}cW+=cP;if(cE&&cP!==cW){for(cO=0;(cT=cG[cO]);cO++){cT(cJ,cX,cM,cR)}if(cS){if(cW>0){while(cP--){if(!(cJ[cP]||cX[cP])){cX[cP]=cb.call(cQ)}}}cX=b2(cX)}ct.apply(cQ,cX);if(cU&&!cS&&cX.length>0&&(cW+cG.length)>1){cn.uniqueSort(cQ)}}if(cU){bY=cK;cg=cV}return cJ};cF.el=0;return cE?cy(cF):cF}bK=cn.compile=function(cE,cJ){var cG,cF=[],cI=[],cH=bU[cw][cE+" "];if(!cH){if(!cJ){cJ=by(cE)}cG=cJ.length;while(cG--){cH=b4(cJ[cG]);if(cH[cw]){cF.push(cH)}else{cI.push(cH)}}cH=bU(cE,bD(cI,cF))}return cH};function bW(cF,cI,cH){var cG=0,cE=cI.length;for(;cG<cE;cG++){cn(cF,cI[cG],cH)}return cH}function cv(cG,cE,cI,cM,cL){var cJ,cP,cF,cO,cN,cK=by(cG),cH=cK.length;if(!cM){if(cK.length===1){cP=cK[0]=cK[0].slice(0);if(cP.length>2&&(cF=cP[0]).type==="ID"&&cE.nodeType===9&&!cL&&ci.relative[cP[1].type]){cE=ci.find.ID(cF.matches[0].replace(b0,""),cE,cL)[0];if(!cE){return cI}cG=cG.slice(cP.shift().length)}for(cJ=cd.POS.test(cG)?-1:cP.length-1;cJ>=0;cJ--){cF=cP[cJ];if(ci.relative[(cO=cF.type)]){break}if((cN=ci.find[cO])){if((cM=cN(cF.matches[0].replace(b0,""),co.test(cP[0].type)&&cE.parentNode||cE,cL))){cP.splice(cJ,1);cG=cM.length&&cP.join("");if(!cG){ct.apply(cI,bS.call(cM,0));return cI}break}}}}}bK(cG,cK)(cM,cE,cL,cI,co.test(cG));return cI}if(bF.querySelectorAll){(function(){var cJ,cK=cv,cI=/'|\\/g,cG=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,cF=[":focus"],cE=[":active"],cH=bI.matchesSelector||bI.mozMatchesSelector||bI.webkitMatchesSelector||bI.oMatchesSelector||bI.msMatchesSelector;ch(function(cL){cL.innerHTML="<select><option selected=''></option></select>";if(!cL.querySelectorAll("[selected]").length){cF.push("\\["+b5+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)")}if(!cL.querySelectorAll(":checked").length){cF.push(":checked")}});ch(function(cL){cL.innerHTML="<p test=''></p>";if(cL.querySelectorAll("[test^='']").length){cF.push("[*^$]="+b5+"*(?:\"\"|'')")}cL.innerHTML="<input type='hidden'/>";if(!cL.querySelectorAll(":enabled").length){cF.push(":enabled",":disabled")}});cF=new RegExp(cF.join("|"));cv=function(cR,cM,cT,cW,cV){if(!cW&&!cV&&!cF.test(cR)){var cP,cU,cO=true,cL=cw,cN=cM,cS=cM.nodeType===9&&cR;if(cM.nodeType===1&&cM.nodeName.toLowerCase()!=="object"){cP=by(cR);if((cO=cM.getAttribute("id"))){cL=cO.replace(cI,"\\$&")}else{cM.setAttribute("id",cL)}cL="[id='"+cL+"'] ";cU=cP.length;while(cU--){cP[cU]=cL+cP[cU].join("")}cN=co.test(cR)&&cM.parentNode||cM;cS=cP.join(",")}if(cS){try{ct.apply(cT,bS.call(cN.querySelectorAll(cS),0));return cT}catch(cQ){}finally{if(!cO){cM.removeAttribute("id")}}}}return cK(cR,cM,cT,cW,cV)};if(cH){ch(function(cM){cJ=cH.call(cM,"div");try{cH.call(cM,"[test!='']:sizzle");cE.push("!=",cD)}catch(cL){}});cE=new RegExp(cE.join("|"));cn.matchesSelector=function(cM,cO){cO=cO.replace(cG,"='$1']");if(!bT(cM)&&!cE.test(cO)&&!cF.test(cO)){try{var cL=cH.call(cM,cO);if(cL||cJ||cM.document&&cM.document.nodeType!==11){return cL}}catch(cN){}}return cn(cO,null,null,[cM]).length>0}}})()}ci.pseudos.nth=ci.pseudos.eq;function bQ(){}ci.filters=bQ.prototype=ci.pseudos;ci.setFilters=new bQ();cn.attr=E.attr;E.find=cn;E.expr=cn.selectors;E.expr[":"]=E.expr.pseudos;E.unique=cn.uniqueSort;E.text=cn.getText;E.isXMLDoc=cn.isXML;E.contains=cn.contains})(bf);var W=/Until$/,ai=/^(?:parents|prev(?:Until|All))/,bs=/^.[^:#\[\.,]*$/,aS=E.expr.match.needsContext,aq={children:true,contents:true,next:true,prev:true};E.fn.extend({find:function(bw){var bA,bx,bC,bD,bB,bz,by=this;if(typeof bw!=="string"){return E(bw).filter(function(){for(bA=0,bx=by.length;bA<bx;bA++){if(E.contains(by[bA],this)){return true}}})}bz=this.pushStack("","find",bw);for(bA=0,bx=this.length;bA<bx;bA++){bC=bz.length;E.find(bw,this[bA],bz);if(bA>0){for(bD=bC;bD<bz.length;bD++){for(bB=0;bB<bC;bB++){if(bz[bB]===bz[bD]){bz.splice(bD--,1);break}}}}}return bz},has:function(bz){var by,bx=E(bz,this),bw=bx.length;return this.filter(function(){for(by=0;by<bw;by++){if(E.contains(this,bx[by])){return true}}})},not:function(bw){return this.pushStack(aB(this,bw,false),"not",bw)},filter:function(bw){return this.pushStack(aB(this,bw,true),"filter",bw)},is:function(bw){return !!bw&&(typeof bw==="string"?aS.test(bw)?E(bw,this.context).index(this[0])>=0:E.filter(bw,this).length>0:this.filter(bw).length>0)},closest:function(bA,bz){var bB,by=0,bw=this.length,bx=[],bC=aS.test(bA)||typeof bA!=="string"?E(bA,bz||this.context):0;for(;by<bw;by++){bB=this[by];while(bB&&bB.ownerDocument&&bB!==bz&&bB.nodeType!==11){if(bC?bC.index(bB)>-1:E.find.matchesSelector(bB,bA)){bx.push(bB);break}bB=bB.parentNode}}bx=bx.length>1?E.unique(bx):bx;return this.pushStack(bx,"closest",bA)},index:function(bw){if(!bw){return(this[0]&&this[0].parentNode)?this.prevAll().length:-1}if(typeof bw==="string"){return E.inArray(this[0],E(bw))}return E.inArray(bw.jqx?bw[0]:bw,this)},add:function(bw,bx){var bz=typeof bw==="string"?E(bw,bx):E.makeArray(bw&&bw.nodeType?[bw]:bw),by=E.merge(this.get(),bz);return this.pushStack(z(bz[0])||z(by[0])?by:E.unique(by))},addBack:function(bw){return this.add(bw==null?this.prevObject:this.prevObject.filter(bw))}});E.fn.andSelf=E.fn.addBack;function z(bw){return !bw||!bw.parentNode||bw.parentNode.nodeType===11}function aD(bx,bw){do{bx=bx[bw]}while(bx&&bx.nodeType!==1);return bx}E.each({parent:function(bx){var bw=bx.parentNode;return bw&&bw.nodeType!==11?bw:null},parents:function(bw){return E.dir(bw,"parentNode")},parentsUntil:function(bx,bw,by){return E.dir(bx,"parentNode",by)},next:function(bw){return aD(bw,"nextSibling")},prev:function(bw){return aD(bw,"previousSibling")},nextAll:function(bw){return E.dir(bw,"nextSibling")},prevAll:function(bw){return E.dir(bw,"previousSibling")},nextUntil:function(bx,bw,by){return E.dir(bx,"nextSibling",by)},prevUntil:function(bx,bw,by){return E.dir(bx,"previousSibling",by)},siblings:function(bw){return E.sibling((bw.parentNode||{}).firstChild,bw)},children:function(bw){return E.sibling(bw.firstChild)},contents:function(bw){return E.nodeName(bw,"iframe")?bw.contentDocument||bw.contentWindow.document:E.merge([],bw.childNodes)}},function(bw,bx){E.fn[bw]=function(bA,by){var bz=E.map(this,bx,bA);if(!W.test(bw)){by=bA}if(by&&typeof by==="string"){bz=E.filter(by,bz)}bz=this.length>1&&!aq[bw]?E.unique(bz):bz;if(this.length>1&&ai.test(bw)){bz=bz.reverse()}return this.pushStack(bz,bw,aF.call(arguments).join(","))}});E.extend({filter:function(by,bw,bx){if(bx){by=":not("+by+")"}return bw.length===1?E.find.matchesSelector(bw[0],by)?[bw[0]]:[]:E.find.matches(by,bw)},dir:function(by,bx,bA){var bw=[],bz=by[bx];while(bz&&bz.nodeType!==9&&(bA===I||bz.nodeType!==1||!E(bz).is(bA))){if(bz.nodeType===1){bw.push(bz)}bz=bz[bx]}return bw},sibling:function(by,bx){var bw=[];for(;by;by=by.nextSibling){if(by.nodeType===1&&by!==bx){bw.push(by)}}return bw}});function aB(bz,by,bw){by=by||0;if(E.isFunction(by)){return E.grep(bz,function(bB,bA){var bC=!!by.call(bB,bA,bB);return bC===bw})}else{if(by.nodeType){return E.grep(bz,function(bB,bA){return(bB===by)===bw})}else{if(typeof by==="string"){var bx=E.grep(bz,function(bA){return bA.nodeType===1});if(bs.test(by)){return E.filter(by,bx,!bw)}else{by=E.filter(by,bx)}}}}return E.grep(bz,function(bB,bA){return(E.inArray(bB,by)>=0)===bw})}function c(bw){var by=aL.split("|"),bx=bw.createDocumentFragment();if(bx.createElement){while(by.length){bx.createElement(by.pop())}}return bx}var aL="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ac=/ JQXLite\d+="(?:null|\d+)"/g,aj=/^\s+/,N=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,e=/<([\w:]+)/,x=/<tbody/i,R=/<|&#?\w+;/,Y=/<(?:script|style|link)/i,K=/<(?:script|object|embed|option|style)/i,ae=new RegExp("<(?:"+aL+")[\\s/>]","i"),T=/^(?:checkbox|radio)$/,q=/checked\s*(?:[^=]|=\s*.checked.)/i,br=/\/(java|ecma)script/i,aI=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,ao={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},V=c(am),bi=V.appendChild(am.createElement("div"));ao.optgroup=ao.option;ao.tbody=ao.tfoot=ao.colgroup=ao.caption=ao.thead;ao.th=ao.td;if(!E.support.htmlSerialize){ao._default=[1,"X<div>","</div>"]}E.fn.extend({text:function(bw){return E.access(this,function(bx){return bx===I?E.text(this):this.empty().append((this[0]&&this[0].ownerDocument||am).createTextNode(bx))},null,bw,arguments.length)},wrapAll:function(bw){if(E.isFunction(bw)){return this.each(function(by){E(this).wrapAll(bw.call(this,by))})}if(this[0]){var bx=E(bw,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){bx.insertBefore(this[0])}bx.map(function(){var by=this;while(by.firstChild&&by.firstChild.nodeType===1){by=by.firstChild}return by}).append(this)}return this},wrapInner:function(bw){if(E.isFunction(bw)){return this.each(function(bx){E(this).wrapInner(bw.call(this,bx))})}return this.each(function(){var bx=E(this),by=bx.contents();if(by.length){by.wrapAll(bw)}else{bx.append(bw)}})},wrap:function(bw){var bx=E.isFunction(bw);return this.each(function(by){E(this).wrapAll(bx?bw.call(this,by):bw)})},unwrap:function(){return this.parent().each(function(){if(!E.nodeName(this,"body")){E(this).replaceWith(this.childNodes)}}).end()},append:function(){return this.domManip(arguments,true,function(bw){if(this.nodeType===1||this.nodeType===11){this.appendChild(bw)}})},prepend:function(){return this.domManip(arguments,true,function(bw){if(this.nodeType===1||this.nodeType===11){this.insertBefore(bw,this.firstChild)}})},before:function(){if(!z(this[0])){return this.domManip(arguments,false,function(bx){this.parentNode.insertBefore(bx,this)})}if(arguments.length){var bw=E.clean(arguments);return this.pushStack(E.merge(bw,this),"before",this.selector)}},after:function(){if(!z(this[0])){return this.domManip(arguments,false,function(bx){this.parentNode.insertBefore(bx,this.nextSibling)})}if(arguments.length){var bw=E.clean(arguments);return this.pushStack(E.merge(this,bw),"after",this.selector)}},remove:function(bw,bz){var by,bx=0;for(;(by=this[bx])!=null;bx++){if(!bw||E.filter(bw,[by]).length){if(!bz&&by.nodeType===1){E.cleanData(by.getElementsByTagName("*"));E.cleanData([by])}if(by.parentNode){by.parentNode.removeChild(by)}}}return this},empty:function(){var bx,bw=0;for(;(bx=this[bw])!=null;bw++){if(bx.nodeType===1){E.cleanData(bx.getElementsByTagName("*"))}while(bx.firstChild){bx.removeChild(bx.firstChild)}}return this},clone:function(bx,bw){bx=bx==null?false:bx;bw=bw==null?bx:bw;return this.map(function(){return E.clone(this,bx,bw)})},html:function(bw){return E.access(this,function(bA){var bz=this[0]||{},by=0,bx=this.length;if(bA===I){return bz.nodeType===1?bz.innerHTML.replace(ac,""):I}if(typeof bA==="string"&&!Y.test(bA)&&(E.support.htmlSerialize||!ae.test(bA))&&(E.support.leadingWhitespace||!aj.test(bA))&&!ao[(e.exec(bA)||["",""])[1].toLowerCase()]){bA=bA.replace(N,"<$1></$2>");try{for(;by<bx;by++){bz=this[by]||{};if(bz.nodeType===1){E.cleanData(bz.getElementsByTagName("*"));bz.innerHTML=bA}}bz=0}catch(bB){}}if(bz){this.empty().append(bA)}},null,bw,arguments.length)},replaceWith:function(bw){if(!z(this[0])){if(E.isFunction(bw)){return this.each(function(bz){var by=E(this),bx=by.html();by.replaceWith(bw.call(this,bz,bx))})}if(typeof bw!=="string"){bw=E(bw).detach()}return this.each(function(){var by=this.nextSibling,bx=this.parentNode;E(this).remove();if(by){E(by).before(bw)}else{E(bx).append(bw)}})}return this.length?this.pushStack(E(E.isFunction(bw)?bw():bw),"replaceWith",bw):this},detach:function(bw){return this.remove(bw,true)},domManip:function(bC,bG,bF){bC=[].concat.apply([],bC);var by,bA,bB,bE,bz=0,bD=bC[0],bx=[],bw=this.length;if(!E.support.checkClone&&bw>1&&typeof bD==="string"&&q.test(bD)){return this.each(function(){E(this).domManip(bC,bG,bF)})}if(E.isFunction(bD)){return this.each(function(bI){var bH=E(this);bC[0]=bD.call(this,bI,bG?bH.html():I);bH.domManip(bC,bG,bF)})}if(this[0]){by=E.buildFragment(bC,this,bx);bB=by.fragment;bA=bB.firstChild;if(bB.childNodes.length===1){bB=bA}if(bA){bG=bG&&E.nodeName(bA,"tr");for(bE=by.cacheable||bw-1;bz<bw;bz++){bF.call(bG&&E.nodeName(this[bz],"table")?a5(this[bz],"tbody"):this[bz],bz===bE?bB:E.clone(bB,true,true))}}bB=bA=null;if(bx.length){E.each(bx,function(bH,bI){if(bI.src){if(E.ajax){E.ajax({url:bI.src,type:"GET",dataType:"script",async:false,global:false,"throws":true})}else{E.error("no ajax")}}else{E.globalEval((bI.text||bI.textContent||bI.innerHTML||"").replace(aI,""))}if(bI.parentNode){bI.parentNode.removeChild(bI)}})}}return this}});function a5(bx,bw){return bx.getElementsByTagName(bw)[0]||bx.appendChild(bx.ownerDocument.createElement(bw))}function t(bD,bx){if(bx.nodeType!==1||!E.hasData(bD)){return}var bA,bz,bw,bC=E._data(bD),bB=E._data(bx,bC),by=bC.events;if(by){delete bB.handle;bB.events={};for(bA in by){for(bz=0,bw=by[bA].length;bz<bw;bz++){E.event.add(bx,bA,by[bA][bz])}}}if(bB.data){bB.data=E.extend({},bB.data)}}function ad(bx,bw){var by;if(bw.nodeType!==1){return}if(bw.clearAttributes){bw.clearAttributes()}if(bw.mergeAttributes){bw.mergeAttributes(bx)}by=bw.nodeName.toLowerCase();if(by==="object"){if(bw.parentNode){bw.outerHTML=bx.outerHTML}if(E.support.html5Clone&&(bx.innerHTML&&!E.trim(bw.innerHTML))){bw.innerHTML=bx.innerHTML}}else{if(by==="input"&&T.test(bx.type)){bw.defaultChecked=bw.checked=bx.checked;if(bw.value!==bx.value){bw.value=bx.value}}else{if(by==="option"){bw.selected=bx.defaultSelected}else{if(by==="input"||by==="textarea"){bw.defaultValue=bx.defaultValue}else{if(by==="script"&&bw.text!==bx.text){bw.text=bx.text}}}}}bw.removeAttribute(E.expando)}E.buildFragment=function(bz,bA,bx){var by,bw,bB,bC=bz[0];bA=bA||am;bA=!bA.nodeType&&bA[0]||bA;bA=bA.ownerDocument||bA;if(bz.length===1&&typeof bC==="string"&&bC.length<512&&bA===am&&bC.charAt(0)==="<"&&!K.test(bC)&&(E.support.checkClone||!q.test(bC))&&(E.support.html5Clone||!ae.test(bC))){bw=true;by=E.fragments[bC];bB=by!==I}if(!by){by=bA.createDocumentFragment();E.clean(bz,bA,by,bx);if(bw){E.fragments[bC]=bB&&by}}return{fragment:by,cacheable:bw}};E.fragments={};E.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(bw,bx){E.fn[bw]=function(by){var bA,bC=0,bB=[],bE=E(by),bz=bE.length,bD=this.length===1&&this[0].parentNode;if((bD==null||bD&&bD.nodeType===11&&bD.childNodes.length===1)&&bz===1){bE[bx](this[0]);return this}else{for(;bC<bz;bC++){bA=(bC>0?this.clone(true):this).get();E(bE[bC])[bx](bA);bB=bB.concat(bA)}return this.pushStack(bB,bw,bE.selector)}}});function bm(bw){if(typeof bw.getElementsByTagName!=="undefined"){return bw.getElementsByTagName("*")}else{if(typeof bw.querySelectorAll!=="undefined"){return bw.querySelectorAll("*")}else{return[]}}}function an(bw){if(T.test(bw.type)){bw.defaultChecked=bw.checked}}E.extend({clone:function(bA,bC,by){var bw,bx,bz,bB;if(E.support.html5Clone||E.isXMLDoc(bA)||!ae.test("<"+bA.nodeName+">")){bB=bA.cloneNode(true)}else{bi.innerHTML=bA.outerHTML;bi.removeChild(bB=bi.firstChild)}if((!E.support.noCloneEvent||!E.support.noCloneChecked)&&(bA.nodeType===1||bA.nodeType===11)&&!E.isXMLDoc(bA)){ad(bA,bB);bw=bm(bA);bx=bm(bB);for(bz=0;bw[bz];++bz){if(bx[bz]){ad(bw[bz],bx[bz])}}}if(bC){t(bA,bB);if(by){bw=bm(bA);bx=bm(bB);for(bz=0;bw[bz];++bz){t(bw[bz],bx[bz])}}}bw=bx=null;return bB},clean:function(bJ,by,bw,bz){var bG,bF,bI,bN,bC,bM,bD,bA,bx,bH,bL,bE,bB=by===am&&V,bK=[];if(!by||typeof by.createDocumentFragment==="undefined"){by=am}for(bG=0;(bI=bJ[bG])!=null;bG++){if(typeof bI==="number"){bI+=""}if(!bI){continue}if(typeof bI==="string"){if(!R.test(bI)){bI=by.createTextNode(bI)}else{bB=bB||c(by);bD=by.createElement("div");bB.appendChild(bD);bI=bI.replace(N,"<$1></$2>");bN=(e.exec(bI)||["",""])[1].toLowerCase();bC=ao[bN]||ao._default;bM=bC[0];bD.innerHTML=bC[1]+bI+bC[2];while(bM--){bD=bD.lastChild}if(!E.support.tbody){bA=x.test(bI);bx=bN==="table"&&!bA?bD.firstChild&&bD.firstChild.childNodes:bC[1]==="<table>"&&!bA?bD.childNodes:[];for(bF=bx.length-1;bF>=0;--bF){if(E.nodeName(bx[bF],"tbody")&&!bx[bF].childNodes.length){bx[bF].parentNode.removeChild(bx[bF])}}}if(!E.support.leadingWhitespace&&aj.test(bI)){bD.insertBefore(by.createTextNode(aj.exec(bI)[0]),bD.firstChild)}bI=bD.childNodes;bD.parentNode.removeChild(bD)}}if(bI.nodeType){bK.push(bI)}else{E.merge(bK,bI)}}if(bD){bI=bD=bB=null}if(!E.support.appendChecked){for(bG=0;(bI=bK[bG])!=null;bG++){if(E.nodeName(bI,"input")){an(bI)}else{if(typeof bI.getElementsByTagName!=="undefined"){E.grep(bI.getElementsByTagName("input"),an)}}}}if(bw){bL=function(bO){if(!bO.type||br.test(bO.type)){return bz?bz.push(bO.parentNode?bO.parentNode.removeChild(bO):bO):bw.appendChild(bO)}};for(bG=0;(bI=bK[bG])!=null;bG++){if(!(E.nodeName(bI,"script")&&bL(bI))){bw.appendChild(bI);if(typeof bI.getElementsByTagName!=="undefined"){bE=E.grep(E.merge([],bI.getElementsByTagName("script")),bL);bK.splice.apply(bK,[bG+1,0].concat(bE));bG+=bE.length}}}}return bK},cleanData:function(bx,bF){var bA,by,bz,bE,bB=0,bG=E.expando,bw=E.cache,bC=E.support.deleteExpando,bD=E.event.special;for(;(bz=bx[bB])!=null;bB++){if(bF||E.acceptData(bz)){by=bz[bG];bA=by&&bw[by];if(bA){if(bA.events){for(bE in bA.events){if(bD[bE]){E.event.remove(bz,bE)}else{E.removeEvent(bz,bE,bA.handle)}}}if(bw[by]){delete bw[by];if(bC){delete bz[bG]}else{if(bz.removeAttribute){bz.removeAttribute(bG)}else{bz[bG]=null}}E.deletedIds.push(by)}}}}}});(function(){var bw,bx;E.uaMatch=function(bz){bz=bz.toLowerCase();var by=/(chrome)[ \/]([\w.]+)/.exec(bz)||/(webkit)[ \/]([\w.]+)/.exec(bz)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(bz)||/(msie) ([\w.]+)/.exec(bz)||bz.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(bz)||[];return{browser:by[1]||"",version:by[2]||"0"}};bw=E.uaMatch(bv.userAgent);bx={};if(bw.browser){bx[bw.browser]=true;bx.version=bw.version}if(bx.chrome){bx.webkit=true}else{if(bx.webkit){bx.safari=true}}E.browser=bx;E.sub=function(){function bz(bB,bC){return new bz.fn.init(bB,bC)}E.extend(true,bz,this);bz.superclass=this;bz.fn=bz.prototype=this();bz.fn.constructor=bz;bz.sub=this.sub;bz.fn.init=function bA(bB,bC){if(bC&&bC instanceof E&&!(bC instanceof bz)){bC=bz(bC)}return E.fn.init.call(this,bB,bC,by)};bz.fn.init.prototype=bz.fn;var by=bz(am);return bz}})();var S,be,n,af=/alpha\([^)]*\)/i,al=/opacity=([^)]*)/,y=/^(top|right|bottom|left)$/,ak=/^(none|table(?!-c[ea]).+)/,ax=/^margin/,k=new RegExp("^("+aG+")(.*)$","i"),aX=new RegExp("^("+aG+")(?!px)[a-z%]+$","i"),G=new RegExp("^([-+])=("+aG+")","i"),L={BODY:"block"},bc={position:"absolute",visibility:"hidden",display:"block"},aN={letterSpacing:0,fontWeight:400},F=["Top","Right","Bottom","Left"],Q=["Webkit","O","Moz","ms"],bg=E.fn.toggle;function a4(bz,bx){if(bx in bz){return bx}var bA=bx.charAt(0).toUpperCase()+bx.slice(1),bw=bx,by=Q.length;while(by--){bx=Q[by]+bA;if(bx in bz){return bx}}return bw}function ar(bx,bw){bx=bw||bx;return E.css(bx,"display")==="none"||!E.contains(bx.ownerDocument,bx)}function bd(bB,bw){var bA,bC,bx=[],by=0,bz=bB.length;for(;by<bz;by++){bA=bB[by];if(!bA.style){continue}bx[by]=E._data(bA,"olddisplay");if(bw){if(!bx[by]&&bA.style.display==="none"){bA.style.display=""}if(bA.style.display===""&&ar(bA)){bx[by]=E._data(bA,"olddisplay",aP(bA.nodeName))}}else{bC=S(bA,"display");if(!bx[by]&&bC!=="none"){E._data(bA,"olddisplay",bC)}}}for(by=0;by<bz;by++){bA=bB[by];if(!bA.style){continue}if(!bw||bA.style.display==="none"||bA.style.display===""){bA.style.display=bw?bx[by]||"":"none"}}return bB}E.fn.extend({css:function(bw,bx){return E.access(this,function(bz,by,bA){return bA!==I?E.style(bz,by,bA):E.css(bz,by)},bw,bx,arguments.length>1)},show:function(){return bd(this,true)},hide:function(){return bd(this)},toggle:function(by,bx){var bw=typeof by==="boolean";if(E.isFunction(by)&&E.isFunction(bx)){return bg.apply(this,arguments)}return this.each(function(){if(bw?by:ar(this)){E(this).show()}else{E(this).hide()}})}});E.extend({cssHooks:{opacity:{get:function(by,bx){if(bx){var bw=S(by,"opacity");return bw===""?"1":bw}}}},cssNumber:{fillOpacity:true,fontWeight:true,lineHeight:true,opacity:true,orphans:true,widows:true,zIndex:true,zoom:true},cssProps:{"float":E.support.cssFloat?"cssFloat":"styleFloat"},style:function(by,bx,bE,bz){if(!by||by.nodeType===3||by.nodeType===8||!by.style){return}var bC,bD,bF,bA=E.camelCase(bx),bw=by.style;bx=E.cssProps[bA]||(E.cssProps[bA]=a4(bw,bA));bF=E.cssHooks[bx]||E.cssHooks[bA];if(bE!==I){bD=typeof bE;if(bD==="string"&&(bC=G.exec(bE))){bE=(bC[1]+1)*bC[2]+parseFloat(E.css(by,bx));bD="number"}if(bE==null||bD==="number"&&isNaN(bE)){return}if(bD==="number"&&!E.cssNumber[bA]){bE+="px"}if(!bF||!("set" in bF)||(bE=bF.set(by,bE,bz))!==I){try{bw[bx]=bE}catch(bB){}}}else{if(bF&&"get" in bF&&(bC=bF.get(by,false,bz))!==I){return bC}return bw[bx]}},css:function(bC,bA,bB,bx){var bD,bz,bw,by=E.camelCase(bA);bA=E.cssProps[by]||(E.cssProps[by]=a4(bC.style,by));bw=E.cssHooks[bA]||E.cssHooks[by];if(bw&&"get" in bw){bD=bw.get(bC,true,bx)}if(bD===I){bD=S(bC,bA)}if(bD==="normal"&&bA in aN){bD=aN[bA]}if(bB||bx!==I){bz=parseFloat(bD);return bB||E.isNumeric(bz)?bz||0:bD}return bD},swap:function(bA,bz,bB){var by,bx,bw={};for(bx in bz){bw[bx]=bA.style[bx];bA.style[bx]=bz[bx]}by=bB.call(bA);for(bx in bz){bA.style[bx]=bw[bx]}return by}});if(bf.getComputedStyle){S=function(bD,bx){var bw,bA,bz,bC,bB=bf.getComputedStyle(bD,null),by=bD.style;if(bB){bw=bB.getPropertyValue(bx)||bB[bx];if(bw===""&&!E.contains(bD.ownerDocument,bD)){bw=E.style(bD,bx)}if(aX.test(bw)&&ax.test(bx)){bA=by.width;bz=by.minWidth;bC=by.maxWidth;by.minWidth=by.maxWidth=by.width=bw;bw=bB.width;by.width=bA;by.minWidth=bz;by.maxWidth=bC}}return bw}}else{if(am.documentElement.currentStyle){S=function(bA,by){var bB,bw,bx=bA.currentStyle&&bA.currentStyle[by],bz=bA.style;if(bx==null&&bz&&bz[by]){bx=bz[by]}if(aX.test(bx)&&!y.test(by)){bB=bz.left;bw=bA.runtimeStyle&&bA.runtimeStyle.left;if(bw){bA.runtimeStyle.left=bA.currentStyle.left}bz.left=by==="fontSize"?"1em":bx;bx=bz.pixelLeft+"px";bz.left=bB;if(bw){bA.runtimeStyle.left=bw}}return bx===""?"auto":bx}}}function aQ(bw,by,bz){var bx=k.exec(by);return bx?Math.max(0,bx[1]-(bz||0))+(bx[2]||"px"):by}function a1(bz,bx,bw,bB){var by=bw===(bB?"border":"content")?4:bx==="width"?1:0,bA=0;for(;by<4;by+=2){if(bw==="margin"){bA+=E.css(bz,bw+F[by],true)}if(bB){if(bw==="content"){bA-=parseFloat(S(bz,"padding"+F[by]))||0}if(bw!=="margin"){bA-=parseFloat(S(bz,"border"+F[by]+"Width"))||0}}else{bA+=parseFloat(S(bz,"padding"+F[by]))||0;if(bw!=="padding"){bA+=parseFloat(S(bz,"border"+F[by]+"Width"))||0}}}return bA}function aa(bz,bx,bw){var bA=bx==="width"?bz.offsetWidth:bz.offsetHeight,by=true,bB=E.support.boxSizing&&E.css(bz,"boxSizing")==="border-box";if(bA<=0||bA==null){bA=S(bz,bx);if(bA<0||bA==null){bA=bz.style[bx]}if(aX.test(bA)){return bA}by=bB&&(E.support.boxSizingReliable||bA===bz.style[bx]);bA=parseFloat(bA)||0}return(bA+a1(bz,bx,bw||(bB?"border":"content"),by))+"px"}function aP(by){if(L[by]){return L[by]}var bw=E("<"+by+">").appendTo(am.body),bx=bw.css("display");bw.remove();if(bx==="none"||bx===""){be=am.body.appendChild(be||E.extend(am.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!n||!be.createElement){n=(be.contentWindow||be.contentDocument).document;n.write("<!doctype html><html><body>");n.close()}bw=n.body.appendChild(n.createElement(by));bx=S(bw,"display");am.body.removeChild(be)}L[by]=bx;return bx}E.each(["height","width"],function(bx,bw){E.cssHooks[bw]={get:function(bA,bz,by){if(bz){if(bA.offsetWidth===0&&ak.test(S(bA,"display"))){return E.swap(bA,bc,function(){return aa(bA,bw,by)})}else{return aa(bA,bw,by)}}},set:function(bz,bA,by){return aQ(bz,bA,by?a1(bz,bw,by,E.support.boxSizing&&E.css(bz,"boxSizing")==="border-box"):0)}}});if(!E.support.opacity){E.cssHooks.opacity={get:function(bx,bw){return al.test((bw&&bx.currentStyle?bx.currentStyle.filter:bx.style.filter)||"")?(0.01*parseFloat(RegExp.$1))+"":bw?"1":""},set:function(bA,bB){var bz=bA.style,bx=bA.currentStyle,bw=E.isNumeric(bB)?"alpha(opacity="+bB*100+")":"",by=bx&&bx.filter||bz.filter||"";bz.zoom=1;if(bB>=1&&E.trim(by.replace(af,""))===""&&bz.removeAttribute){bz.removeAttribute("filter");if(bx&&!bx.filter){return}}bz.filter=af.test(by)?by.replace(af,bw):by+" "+bw}}}E(function(){if(!E.support.reliableMarginRight){E.cssHooks.marginRight={get:function(bx,bw){return E.swap(bx,{display:"inline-block"},function(){if(bw){return S(bx,"marginRight")}})}}}if(!E.support.pixelPosition&&E.fn.position){E.each(["top","left"],function(bw,bx){E.cssHooks[bx]={get:function(bA,bz){if(bz){var by=S(bA,bx);return aX.test(by)?E(bA).position()[bx]+"px":by}}}})}});if(E.expr&&E.expr.filters){E.expr.filters.hidden=function(bw){return(bw.offsetWidth===0&&bw.offsetHeight===0)||(!E.support.reliableHiddenOffsets&&((bw.style&&bw.style.display)||S(bw,"display"))==="none")};E.expr.filters.visible=function(bw){return !E.expr.filters.hidden(bw)}}E.each({margin:"",padding:"",border:"Width"},function(bw,bx){E.cssHooks[bw+bx]={expand:function(bA){var bz,bB=typeof bA==="string"?bA.split(" "):[bA],by={};for(bz=0;bz<4;bz++){by[bw+F[bz]+bx]=bB[bz]||bB[bz-2]||bB[0]}return by}};if(!ax.test(bw)){E.cssHooks[bw+bx].set=aQ}});var i=/%20/g,ah=/\[\]$/,bt=/\r?\n/g,aW=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,r=/^(?:select|textarea)/i;E.fn.extend({serialize:function(){return E.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?E.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||r.test(this.nodeName)||aW.test(this.type))}).map(function(bw,bx){var by=E(this).val();return by==null?null:E.isArray(by)?E.map(by,function(bA,bz){return{name:bx.name,value:bA.replace(bt,"\r\n")}}):{name:bx.name,value:by.replace(bt,"\r\n")}}).get()}});E.param=function(bw,by){var bz,bx=[],bA=function(bB,bC){bC=E.isFunction(bC)?bC():(bC==null?"":bC);bx[bx.length]=encodeURIComponent(bB)+"="+encodeURIComponent(bC)};if(by===I){by=E.ajaxSettings&&E.ajaxSettings.traditional}if(E.isArray(bw)||(bw.jqx&&!E.isPlainObject(bw))){E.each(bw,function(){bA(this.name,this.value)})}else{for(bz in bw){u(bz,bw[bz],by,bA)}}return bx.join("&").replace(i,"+")};function u(by,bA,bx,bz){var bw;if(E.isArray(bA)){E.each(bA,function(bC,bB){if(bx||ah.test(by)){bz(by,bB)}else{u(by+"["+(typeof bB==="object"?bC:"")+"]",bB,bx,bz)}})}else{if(!bx&&E.type(bA)==="object"){for(bw in bA){u(by+"["+bw+"]",bA[bw],bx,bz)}}else{bz(by,bA)}}}if(E.support.ajax){E.ajaxTransport(function(bw){if(!bw.crossDomain||E.support.cors){var bx;return{send:function(bD,by){var bB,bA,bC=bw.xhr();if(bw.username){bC.open(bw.type,bw.url,bw.async,bw.username,bw.password)}else{bC.open(bw.type,bw.url,bw.async)}if(bw.xhrFields){for(bA in bw.xhrFields){bC[bA]=bw.xhrFields[bA]}}if(bw.mimeType&&bC.overrideMimeType){bC.overrideMimeType(bw.mimeType)}if(!bw.crossDomain&&!bD["X-Requested-With"]){bD["X-Requested-With"]="XMLHttpRequest"}try{for(bA in bD){bC.setRequestHeader(bA,bD[bA])}}catch(bz){}bC.send((bw.hasContent&&bw.data)||null);bx=function(bM,bG){var bH,bF,bE,bK,bJ;try{if(bx&&(bG||bC.readyState===4)){bx=I;if(bB){bC.onreadystatechange=E.noop;if(xhrOnUnloadAbort){delete xhrCallbacks[bB]}}if(bG){if(bC.readyState!==4){bC.abort()}}else{bH=bC.status;bE=bC.getAllResponseHeaders();bK={};bJ=bC.responseXML;if(bJ&&bJ.documentElement){bK.xml=bJ}try{bK.text=bC.responseText}catch(bL){}try{bF=bC.statusText}catch(bL){bF=""}if(!bH&&bw.isLocal&&!bw.crossDomain){bH=bK.text?200:404}else{if(bH===1223){bH=204}}}}}catch(bI){if(!bG){by(-1,bI)}}if(bK){by(bH,bF,bK,bE)}};if(!bw.async){bx()}else{if(bC.readyState===4){setTimeout(bx,0)}else{bB=++xhrId;if(xhrOnUnloadAbort){if(!xhrCallbacks){xhrCallbacks={};E(bf).unload(xhrOnUnloadAbort)}xhrCallbacks[bB]=bx}bC.onreadystatechange=bx}}},abort:function(){if(bx){bx(0,1)}}}}})}var a8,a3,au=/^(?:toggle|show|hide)$/,aO=new RegExp("^(?:([-+])=|)("+aG+")([a-z%]*)$","i"),a9=/queueHooks$/,m=[bo],J={"*":[function(bw,bD){var bz,bE,bF=this.createTween(bw,bD),bA=aO.exec(bD),bB=bF.cur(),bx=+bB||0,by=1,bC=20;if(bA){bz=+bA[2];bE=bA[3]||(E.cssNumber[bw]?"":"px");if(bE!=="px"&&bx){bx=E.css(bF.elem,bw,true)||bz||1;do{by=by||".5";bx=bx/by;E.style(bF.elem,bw,bx+bE)}while(by!==(by=bF.cur()/bB)&&by!==1&&--bC)}bF.unit=bE;bF.start=bx;bF.end=bA[1]?bx+(bA[1]+1)*bz:bz}return bF}]};function bn(){setTimeout(function(){a8=I},0);return(a8=E.now())}function ab(bx,bw){E.each(bw,function(bC,bA){var bB=(J[bC]||[]).concat(J["*"]),by=0,bz=bB.length;for(;by<bz;by++){if(bB[by].call(bx,bC,bA)){return}}})}function bl(by,bC,bF){var bG,bB=0,bw=0,bx=m.length,bE=E.Deferred().always(function(){delete bA.elem}),bA=function(){var bM=a8||bn(),bJ=Math.max(0,bz.startTime+bz.duration-bM),bH=bJ/bz.duration||0,bL=1-bH,bI=0,bK=bz.tweens.length;for(;bI<bK;bI++){bz.tweens[bI].run(bL)}bE.notifyWith(by,[bz,bL,bJ]);if(bL<1&&bK){return bJ}else{bE.resolveWith(by,[bz]);return false}},bz=bE.promise({elem:by,props:E.extend({},bC),opts:E.extend(true,{specialEasing:{}},bF),originalProperties:bC,originalOptions:bF,startTime:a8||bn(),duration:bF.duration,tweens:[],createTween:function(bK,bH,bJ){var bI=E.Tween(by,bz.opts,bK,bH,bz.opts.specialEasing[bK]||bz.opts.easing);bz.tweens.push(bI);return bI},stop:function(bI){var bH=0,bJ=bI?bz.tweens.length:0;for(;bH<bJ;bH++){bz.tweens[bH].run(1)}if(bI){bE.resolveWith(by,[bz,bI])}else{bE.rejectWith(by,[bz,bI])}return this}}),bD=bz.props;aY(bD,bz.opts.specialEasing);for(;bB<bx;bB++){bG=m[bB].call(bz,by,bD,bz.opts);if(bG){return bG}}ab(bz,bD);if(E.isFunction(bz.opts.start)){bz.opts.start.call(by,bz)}E.fx.timer(E.extend(bA,{anim:bz,queue:bz.opts.queue,elem:by}));return bz.progress(bz.opts.progress).done(bz.opts.done,bz.opts.complete).fail(bz.opts.fail).always(bz.opts.always)}function aY(bz,bB){var by,bx,bC,bA,bw;for(by in bz){bx=E.camelCase(by);bC=bB[bx];bA=bz[by];if(E.isArray(bA)){bC=bA[1];bA=bz[by]=bA[0]}if(by!==bx){bz[bx]=bA;delete bz[by]}bw=E.cssHooks[bx];if(bw&&"expand" in bw){bA=bw.expand(bA);delete bz[bx];for(by in bA){if(!(by in bz)){bz[by]=bA[by];bB[by]=bC}}}else{bB[bx]=bC}}}E.Animation=E.extend(bl,{tweener:function(bx,bA){if(E.isFunction(bx)){bA=bx;bx=["*"]}else{bx=bx.split(" ")}var bz,bw=0,by=bx.length;for(;bw<by;bw++){bz=bx[bw];J[bz]=J[bz]||[];J[bz].unshift(bA)}},prefilter:function(bx,bw){if(bw){m.unshift(bx)}else{m.push(bx)}}});function bo(bA,bG,bw){var bF,by,bI,bz,bM,bC,bL,bK,bJ,bB=this,bx=bA.style,bH={},bE=[],bD=bA.nodeType&&ar(bA);if(!bw.queue){bK=E._queueHooks(bA,"fx");if(bK.unqueued==null){bK.unqueued=0;bJ=bK.empty.fire;bK.empty.fire=function(){if(!bK.unqueued){bJ()}}}bK.unqueued++;bB.always(function(){bB.always(function(){bK.unqueued--;if(!E.queue(bA,"fx").length){bK.empty.fire()}})})}if(bA.nodeType===1&&("height" in bG||"width" in bG)){bw.overflow=[bx.overflow,bx.overflowX,bx.overflowY];if(E.css(bA,"display")==="inline"&&E.css(bA,"float")==="none"){if(!E.support.inlineBlockNeedsLayout||aP(bA.nodeName)==="inline"){bx.display="inline-block"}else{bx.zoom=1}}}if(bw.overflow){bx.overflow="hidden";if(!E.support.shrinkWrapBlocks){bB.done(function(){bx.overflow=bw.overflow[0];bx.overflowX=bw.overflow[1];bx.overflowY=bw.overflow[2]})}}for(bF in bG){bI=bG[bF];if(au.exec(bI)){delete bG[bF];bC=bC||bI==="toggle";if(bI===(bD?"hide":"show")){continue}bE.push(bF)}}bz=bE.length;if(bz){bM=E._data(bA,"fxshow")||E._data(bA,"fxshow",{});if("hidden" in bM){bD=bM.hidden}if(bC){bM.hidden=!bD}if(bD){E(bA).show()}else{bB.done(function(){E(bA).hide()})}bB.done(function(){var bN;E.removeData(bA,"fxshow",true);for(bN in bH){E.style(bA,bN,bH[bN])}});for(bF=0;bF<bz;bF++){by=bE[bF];bL=bB.createTween(by,bD?bM[by]:0);bH[by]=bM[by]||E.style(bA,by);if(!(by in bM)){bM[by]=bL.start;if(bD){bL.end=bL.start;bL.start=by==="width"||by==="height"?1:0}}}}}function w(by,bx,bA,bw,bz){return new w.prototype.init(by,bx,bA,bw,bz)}E.Tween=w;w.prototype={constructor:w,init:function(bz,bx,bB,bw,bA,by){this.elem=bz;this.prop=bB;this.easing=bA||"swing";this.options=bx;this.start=this.now=this.cur();this.end=bw;this.unit=by||(E.cssNumber[bB]?"":"px")},cur:function(){var bw=w.propHooks[this.prop];return bw&&bw.get?bw.get(this):w.propHooks._default.get(this)},run:function(by){var bx,bw=w.propHooks[this.prop];if(this.options.duration){this.pos=bx=E.easing[this.easing](by,this.options.duration*by,0,1,this.options.duration)}else{this.pos=bx=by}this.now=(this.end-this.start)*bx+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this)}if(bw&&bw.set){bw.set(this)}else{w.propHooks._default.set(this)}return this}};w.prototype.init.prototype=w.prototype;w.propHooks={_default:{get:function(bx){var bw;if(bx.elem[bx.prop]!=null&&(!bx.elem.style||bx.elem.style[bx.prop]==null)){return bx.elem[bx.prop]}bw=E.css(bx.elem,bx.prop,false,"");return !bw||bw==="auto"?0:bw},set:function(bw){if(E.fx.step[bw.prop]){E.fx.step[bw.prop](bw)}else{if(bw.elem.style&&(bw.elem.style[E.cssProps[bw.prop]]!=null||E.cssHooks[bw.prop])){E.style(bw.elem,bw.prop,bw.now+bw.unit)}else{bw.elem[bw.prop]=bw.now}}}}};w.propHooks.scrollTop=w.propHooks.scrollLeft={set:function(bw){if(bw.elem.nodeType&&bw.elem.parentNode){bw.elem[bw.prop]=bw.now}}};E.each(["toggle","show","hide"],function(bx,bw){var by=E.fn[bw];E.fn[bw]=function(bz,bB,bA){return bz==null||typeof bz==="boolean"||(!bx&&E.isFunction(bz)&&E.isFunction(bB))?by.apply(this,arguments):this.animate(a0(bw,true),bz,bB,bA)}});E.fn.extend({fadeTo:function(bw,bz,by,bx){return this.filter(ar).css("opacity",0).show().end().animate({opacity:bz},bw,by,bx)},animate:function(bC,bz,bB,bA){var by=E.isEmptyObject(bC),bw=E.speed(bz,bB,bA),bx=function(){var bD=bl(this,E.extend({},bC),bw);if(by){bD.stop(true)}};return by||bw.queue===false?this.each(bx):this.queue(bw.queue,bx)},stop:function(by,bx,bw){var bz=function(bA){var bB=bA.stop;delete bA.stop;bB(bw)};if(typeof by!=="string"){bw=bx;bx=by;by=I}if(bx&&by!==false){this.queue(by||"fx",[])}return this.each(function(){var bD=true,bA=by!=null&&by+"queueHooks",bC=E.timers,bB=E._data(this);if(bA){if(bB[bA]&&bB[bA].stop){bz(bB[bA])}}else{for(bA in bB){if(bB[bA]&&bB[bA].stop&&a9.test(bA)){bz(bB[bA])}}}for(bA=bC.length;bA--;){if(bC[bA].elem===this&&(by==null||bC[bA].queue===by)){bC[bA].anim.stop(bw);bD=false;bC.splice(bA,1)}}if(bD||!bw){E.dequeue(this,by)}})}});function a0(by,bA){var bz,bw={height:by},bx=0;bA=bA?1:0;for(;bx<4;bx+=2-bA){bz=F[bx];bw["margin"+bz]=bw["padding"+bz]=by}if(bA){bw.opacity=bw.width=by}return bw}E.each({slideDown:a0("show"),slideUp:a0("hide"),slideToggle:a0("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(bw,bx){E.fn[bw]=function(by,bA,bz){return this.animate(bx,by,bA,bz)}});E.speed=function(by,bz,bx){var bw=by&&typeof by==="object"?E.extend({},by):{complete:bx||!bx&&bz||E.isFunction(by)&&by,duration:by,easing:bx&&bz||bz&&!E.isFunction(bz)&&bz};bw.duration=E.fx.off?0:typeof bw.duration==="number"?bw.duration:bw.duration in E.fx.speeds?E.fx.speeds[bw.duration]:E.fx.speeds._default;if(bw.queue==null||bw.queue===true){bw.queue="fx"}bw.old=bw.complete;bw.complete=function(){if(E.isFunction(bw.old)){bw.old.call(this)}if(bw.queue){E.dequeue(this,bw.queue)}};return bw};E.easing={linear:function(bw){return bw},swing:function(bw){return 0.5-Math.cos(bw*Math.PI)/2}};E.timers=[];E.fx=w.prototype.init;E.fx.tick=function(){var by,bx=E.timers,bw=0;a8=E.now();for(;bw<bx.length;bw++){by=bx[bw];if(!by()&&bx[bw]===by){bx.splice(bw--,1)}}if(!bx.length){E.fx.stop()}a8=I};E.fx.timer=function(bw){if(bw()&&E.timers.push(bw)&&!a3){a3=setInterval(E.fx.tick,E.fx.interval)}};E.fx.interval=13;E.fx.stop=function(){clearInterval(a3);a3=null};E.fx.speeds={slow:600,fast:200,_default:400};E.fx.step={};if(E.expr&&E.expr.filters){E.expr.filters.animated=function(bw){return E.grep(E.timers,function(bx){return bw===bx.elem}).length}}var X=/^(?:body|html)$/i;E.fn.offset=function(bG){if(arguments.length){return bG===I?this:this.each(function(bH){E.offset.setOffset(this,bG,bH)})}var bx,bC,bD,bA,bE,bw,bz,bB={top:0,left:0},by=this[0],bF=by&&by.ownerDocument;if(!bF){return}if((bC=bF.body)===by){return E.offset.bodyOffset(by)}bx=bF.documentElement;if(!E.contains(bx,by)){return bB}if(typeof by.getBoundingClientRect!=="undefined"){bB=by.getBoundingClientRect()}bD=aE(bF);bA=bx.clientTop||bC.clientTop||0;bE=bx.clientLeft||bC.clientLeft||0;bw=bD.pageYOffset||bx.scrollTop;bz=bD.pageXOffset||bx.scrollLeft;return{top:bB.top+bw-bA,left:bB.left+bz-bE}};E.offset={bodyOffset:function(bw){var by=bw.offsetTop,bx=bw.offsetLeft;if(E.support.doesNotIncludeMarginInBodyOffset){by+=parseFloat(E.css(bw,"marginTop"))||0;bx+=parseFloat(E.css(bw,"marginLeft"))||0}return{top:by,left:bx}},setOffset:function(bz,bI,bC){var bD=E.css(bz,"position");if(bD==="static"){bz.style.position="relative"}var bB=E(bz),bx=bB.offset(),bw=E.css(bz,"top"),bG=E.css(bz,"left"),bH=(bD==="absolute"||bD==="fixed")&&E.inArray("auto",[bw,bG])>-1,bF={},bE={},by,bA;if(bH){bE=bB.position();by=bE.top;bA=bE.left}else{by=parseFloat(bw)||0;bA=parseFloat(bG)||0}if(E.isFunction(bI)){bI=bI.call(bz,bC,bx)}if(bI.top!=null){bF.top=(bI.top-bx.top)+by}if(bI.left!=null){bF.left=(bI.left-bx.left)+bA}if("using" in bI){bI.using.call(bz,bF)}else{bB.css(bF)}}};E.fn.extend({isRendered:function(){var bx=this;var bw=this[0];if(bw.parentNode==null||(bw.offsetWidth===0||bw.offsetHeight===0)){return false}return true},getSizeFromStyle:function(){var bA=this;var bz=null;var bw=null;var by=this[0];var bx;if(by.style.width){bz=by.style.width}if(by.style.height){bw=by.style.height}if(bf.getComputedStyle){bx=getComputedStyle(by,null)}else{bx=by.currentStyle}if(bx){if(bx.width){bz=bx.width}if(bx.height){bw=bx.height}}if(bz==="0px"){bz=0}if(bw==="0px"){bw=0}if(bz===null){bz=0}if(bw===null){bw=0}return{width:bz,height:bw}},initAnimate:function(){},sizeStyleChanged:function(bz){var by=this;var bA;var bw=function(bB){var bC=bA;if(bB&&bB[0]&&bB[0].attributeName==="style"&&bB[0].type==="attributes"){if(bC.element.offsetWidth!==bC.offsetWidth||bC.element.offsetHeight!==bC.offsetHeight){bC.offsetWidth=bC.element.offsetWidth;bC.offsetHeight=bC.element.offsetHeight;if(by.isRendered()){bC.callback()}}}};bA={element:by[0],offsetWidth:by[0].offsetWidth,offsetHeight:by[0].offsetHeight,callback:bz};try{if(!by.elementStyleObserver){by.elementStyleObserver=new MutationObserver(bw);by.elementStyleObserver.observe(by[0],{attributes:true,childList:false,characterData:false})}}catch(bx){}},position:function(){if(!this[0]){return}var by=this[0],bx=this.offsetParent(),bz=this.offset(),bw=X.test(bx[0].nodeName)?{top:0,left:0}:bx.offset();bz.top-=parseFloat(E.css(by,"marginTop"))||0;bz.left-=parseFloat(E.css(by,"marginLeft"))||0;bw.top+=parseFloat(E.css(bx[0],"borderTopWidth"))||0;bw.left+=parseFloat(E.css(bx[0],"borderLeftWidth"))||0;return{top:bz.top-bw.top,left:bz.left-bw.left}},offsetParent:function(){return this.map(function(){var bw=this.offsetParent||am.body;while(bw&&(!X.test(bw.nodeName)&&E.css(bw,"position")==="static")){bw=bw.offsetParent}return bw||am.body})}});E.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(by,bx){var bw=/Y/.test(bx);E.fn[by]=function(bz){return E.access(this,function(bA,bD,bC){var bB=aE(bA);if(bC===I){return bB?(bx in bB)?bB[bx]:bB.document.documentElement[bD]:bA[bD]}if(bB){bB.scrollTo(!bw?bC:E(bB).scrollLeft(),bw?bC:E(bB).scrollTop())}else{bA[bD]=bC}},by,bz,arguments.length,null)}});function aE(bw){return E.isWindow(bw)?bw:bw.nodeType===9?bw.defaultView||bw.parentWindow:false}E.each({Height:"height",Width:"width"},function(bw,bx){E.each({padding:"inner"+bw,content:bx,"":"outer"+bw},function(by,bz){E.fn[bz]=function(bD,bC){var bB=arguments.length&&(by||typeof bD!=="boolean"),bA=by||(bD===true||bC===true?"margin":"border");return E.access(this,function(bF,bE,bG){var bH;if(E.isWindow(bF)){return bF.document.documentElement["client"+bw]}if(bF.nodeType===9){bH=bF.documentElement;return Math.max(bF.body["scroll"+bw],bH["scroll"+bw],bF.body["offset"+bw],bH["offset"+bw],bH["client"+bw])}return bG===I?E.css(bF,bE,bG,bA):E.style(bF,bE,bG,bA)},bx,bB?bD:I,bB,null)}})});bf.JQXLite=bf.jqxHelper=E;if( true&&__webpack_require__.amdO.JQXLite){!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return E}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}})(window)}(function(c){if(c.jqxCore){c.$$=c.minQuery=c.JQXLite;if(!c.$){c.$=c.minQuery}return}if(c.jQuery){c.minQuery=c.JQXLite=c.jQuery;return}if(!c.$){c.$=c.minQuery=c.JQXLite}else{c.minQuery=c.JQXLite=c.$}})(window);JQXLite.generateID=function(){var c=function(){return(((1+Math.random())*65536)|0).toString(16).substring(1)};var d="";do{d="jqx"+c()+c()+c()}while($("#"+d).length>0);return d};var b=window.jqxBaseFramework=window.minQuery||window.jQuery;(function(d){d.jqx=d.jqx||{};window.jqx=d.jqx;var c={createInstance:function(e,g,i){if(g=="jqxDataAdapter"){var h=i[0];var f=i[1]||{};return new d.jqx.dataAdapter(h,f)}d(e)[g](i||{});return d(e)[g]("getInstance")}};window.jqwidgets=c;d.jqx.define=function(e,f,g){e[f]=function(){if(this.baseType){this.base=new e[this.baseType]();this.base.defineInstance()}this.defineInstance();this.metaInfo()};e[f].prototype.defineInstance=function(){};e[f].prototype.metaInfo=function(){};e[f].prototype.base=null;e[f].prototype.baseType=undefined;if(g&&e[g]){e[f].prototype.baseType=g}};d.jqx.invoke=function(h,g){if(g.length==0){return}var i=typeof(g)==Array||g.length>0?g[0]:g;var f=typeof(g)==Array||g.length>1?Array.prototype.slice.call(g,1):d({}).toArray();while(h[i]==undefined&&h.base!=null){if(h[i]!=undefined&&d.isFunction(h[i])){return h[i].apply(h,f)}if(typeof i=="string"){var e=i.toLowerCase();if(h[e]!=undefined&&d.isFunction(h[e])){return h[e].apply(h,f)}}h=h.base}if(h[i]!=undefined&&d.isFunction(h[i])){return h[i].apply(h,f)}if(typeof i=="string"){var e=i.toLowerCase();if(h[e]!=undefined&&d.isFunction(h[e])){return h[e].apply(h,f)}}return};d.jqx.getByPriority=function(e){var g=undefined;for(var f=0;f<e.length&&g==undefined;f++){if(g==undefined&&e[f]!=undefined){g=e[f]}}return g};d.jqx.hasProperty=function(f,e){if(typeof(e)=="object"){for(var h in e){var g=f;while(g){if(g.hasOwnProperty(h)){return true}if(g.hasOwnProperty(h.toLowerCase())){return true}g=g.base}return false}}else{while(f){if(f.hasOwnProperty(e)){return true}if(f.hasOwnProperty(e.toLowerCase())){return true}f=f.base}}return false};d.jqx.hasFunction=function(h,g){if(g.length==0){return false}if(h==undefined){return false}var i=typeof(g)==Array||g.length>0?g[0]:g;var f=typeof(g)==Array||g.length>1?Array.prototype.slice.call(g,1):{};while(h[i]==undefined&&h.base!=null){if(h[i]&&d.isFunction(h[i])){return true}if(typeof i=="string"){var e=i.toLowerCase();if(h[e]&&d.isFunction(h[e])){return true}}h=h.base}if(h[i]&&d.isFunction(h[i])){return true}if(typeof i=="string"){var e=i.toLowerCase();if(h[e]&&d.isFunction(h[e])){return true}}return false};d.jqx.isPropertySetter=function(f,e){if(e.length==1&&typeof(e[0])=="object"){return true}if(e.length==2&&typeof(e[0])=="string"&&!d.jqx.hasFunction(f,e)){return true}return false};d.jqx.validatePropertySetter=function(j,g,e){if(!d.jqx.propertySetterValidation){return true}if(g.length==1&&typeof(g[0])=="object"){for(var h in g[0]){var k=j;while(!k.hasOwnProperty(h)&&k.base){k=k.base}if(!k||!k.hasOwnProperty(h)){if(!e){var f=k.hasOwnProperty(h.toString().toLowerCase());if(!f){throw"Invalid property: "+h}else{return true}}return false}}return true}if(g.length!=2){if(!e){throw"Invalid property: "+g.length>=0?g[0]:""}return false}while(!j.hasOwnProperty(g[0])&&j.base){j=j.base}if(!j||!j.hasOwnProperty(g[0])){if(!e){throw"Invalid property: "+g[0]}return false}return true};if(!Object.keys){Object.keys=(function(){var g=Object.prototype.hasOwnProperty,h=!({toString:null}).propertyIsEnumerable("toString"),f=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],e=f.length;return function(l){if(typeof l!=="object"&&(typeof l!=="function"||l===null)){throw new TypeError("Object.keys called on non-object")}var j=[],m,k;for(m in l){if(g.call(l,m)){j.push(m)}}if(h){for(k=0;k<e;k++){if(g.call(l,f[k])){j.push(f[k])}}}return j}}())}d.jqx.set=function(h,k){var f=0;if(k.length==1&&typeof(k[0])=="object"){if(h.isInitialized&&Object.keys&&Object.keys(k[0]).length>1){var i=!h.base?h.element:h.base.element;var e=d.data(i,h.widgetName).initArgs;if(e&&JSON&&JSON.stringify&&k[0]&&e[0]){try{if(JSON.stringify(k[0])==JSON.stringify(e[0])){var j=true;d.each(k[0],function(n,o){if(h[n]!=o){j=false;return false}});if(j){return}}}catch(g){}}h.batchUpdate=k[0];var l={};var m={};d.each(k[0],function(n,o){var p=h;while(!p.hasOwnProperty(n)&&p.base!=null){p=p.base}if(p.hasOwnProperty(n)){if(h[n]!=o){l[n]=h[n];m[n]=o;f++}}else{if(p.hasOwnProperty(n.toLowerCase())){if(h[n.toLowerCase()]!=o){l[n.toLowerCase()]=h[n.toLowerCase()];m[n.toLowerCase()]=o;f++}}}});if(f<2){h.batchUpdate=null}}d.each(k[0],function(n,o){var p=h;while(!p.hasOwnProperty(n)&&p.base!=null){p=p.base}if(p.hasOwnProperty(n)){d.jqx.setvalueraiseevent(p,n,o)}else{if(p.hasOwnProperty(n.toLowerCase())){d.jqx.setvalueraiseevent(p,n.toLowerCase(),o)}else{if(d.jqx.propertySetterValidation){throw"jqxCore: invalid property '"+n+"'"}}}});if(h.batchUpdate!=null){h.batchUpdate=null;if(h.propertiesChangedHandler&&f>1){h.propertiesChangedHandler(h,l,m)}}}else{if(k.length==2){while(!h.hasOwnProperty(k[0])&&h.base){h=h.base}if(h.hasOwnProperty(k[0])){d.jqx.setvalueraiseevent(h,k[0],k[1])}else{if(h.hasOwnProperty(k[0].toLowerCase())){d.jqx.setvalueraiseevent(h,k[0].toLowerCase(),k[1])}else{if(d.jqx.propertySetterValidation){throw"jqxCore: invalid property '"+k[0]+"'"}}}}}};d.jqx.setvalueraiseevent=function(f,g,h){var e=f[g];f[g]=h;if(!f.isInitialized){return}if(f.propertyChangedHandler!=undefined){f.propertyChangedHandler(f,g,e,h)}if(f.propertyChangeMap!=undefined&&f.propertyChangeMap[g]!=undefined){f.propertyChangeMap[g](f,g,e,h)}};d.jqx.get=function(h,g){if(g==undefined||g==null){return undefined}if(h.propertyMap){var f=h.propertyMap(g);if(f!=null){return f}}if(h.hasOwnProperty(g)){return h[g]}if(h.hasOwnProperty(g.toLowerCase())){return h[g.toLowerCase()]}var e=undefined;if(typeof(g)==Array){if(g.length!=1){return undefined}e=g[0]}else{if(typeof(g)=="string"){e=g}}while(!h.hasOwnProperty(e)&&h.base){h=h.base}if(h){return h[e]}return undefined};d.jqx.serialize=function(h){var e="";if(d.isArray(h)){e="[";for(var g=0;g<h.length;g++){if(g>0){e+=", "}e+=d.jqx.serialize(h[g])}e+="]"}else{if(typeof(h)=="object"){e="{";var f=0;for(var g in h){if(f++>0){e+=", "}e+=g+": "+d.jqx.serialize(h[g])}e+="}"}else{e=h.toString()}}return e};d.jqx.propertySetterValidation=true;d.jqx.jqxWidgetProxy=function(j,f,e){var g=d(f);var i=d.data(f,j);if(i==undefined){return undefined}var h=i.instance;if(d.jqx.hasFunction(h,e)){return d.jqx.invoke(h,e)}if(d.jqx.isPropertySetter(h,e)){if(d.jqx.validatePropertySetter(h,e)){d.jqx.set(h,e);return undefined}}else{if(typeof(e)=="object"&&e.length==0){return}else{if(typeof(e)=="object"&&e.length==1&&d.jqx.hasProperty(h,e[0])){return d.jqx.get(h,e[0])}else{if(typeof(e)=="string"&&d.jqx.hasProperty(h,e[0])){return d.jqx.get(h,e)}}}}throw"jqxCore: Invalid parameter '"+d.jqx.serialize(e)+"' does not exist."};d.jqx.applyWidget=function(g,h,n,o){var k=false;try{k=window.MSApp!=undefined}catch(j){}var p=d(g);if(!o){o=new d.jqx["_"+h]()}else{o.host=p;o.element=g}if(g.id==""){g.id=d.jqx.utilities.createId()}var m={host:p,element:g,instance:o,initArgs:n};o.widgetName=h;d.data(g,h,m);d.data(g,"jqxWidget",m.instance);var l=new Array();var o=m.instance;while(o){o.isInitialized=false;l.push(o);o=o.base}l.reverse();l[0].theme=d.jqx.theme||"";d.jqx.jqxWidgetProxy(h,g,n);for(var f in l){o=l[f];if(f==0){o.host=p;o.element=g;o.WinJS=k}if(o!=undefined){if(o.definedInstance){o.definedInstance()}if(o.createInstance!=null){if(k){MSApp.execUnsafeLocalFunction(function(){o.createInstance(n)})}else{o.createInstance(n)}}}}for(var f in l){if(l[f]!=undefined){l[f].isInitialized=true}}if(k){MSApp.execUnsafeLocalFunction(function(){m.instance.refresh(true)})}else{m.instance.refresh(true)}};d.jqx.jqxWidget=function(f,g,i){var l=false;try{var n=Array.prototype.slice.call(i,0)}catch(k){var n=""}try{l=window.MSApp!=undefined}catch(k){}var j=f;var o="";if(g){o="_"+g}d.jqx.define(d.jqx,"_"+j,o);var m=new Array();if(!window[j]){var h=function(p){if(p==null){return""}var e=d.type(p);switch(e){case"string":case"number":case"date":case"boolean":case"bool":if(p===null){return""}return p.toString()}var q="";d.each(p,function(s,t){var v=t;if(s>0){q+=", "}q+="[";var r=0;if(d.type(v)=="object"){for(var u in v){if(r>0){q+=", "}q+="{"+u+":"+v[u]+"}";r++}}else{if(r>0){q+=", "}q+="{"+s+":"+v+"}";r++}q+="]"});return q};c[j]=window[j]=function(e,u){var p=[];if(!u){u={}}p.push(u);var q=e;if(d.type(q)==="object"&&e[0]){q=e[0].id;if(q===""){q=e[0].id=d.jqx.utilities.createId()}}else{if(d.type(e)==="object"&&e&&e.nodeName){q=e.id;if(q===""){q=e.id=d.jqx.utilities.createId()}}}if(window.jqxWidgets&&window.jqxWidgets[q]){if(u){d.each(window.jqxWidgets[q],function(v){var w=d(this.element).data();if(w&&w.jqxWidget){d(this.element)[j](u)}})}if(window.jqxWidgets[q].length==1){var s=d(window.jqxWidgets[q][0].widgetInstance.element).data();if(s&&s.jqxWidget){return window.jqxWidgets[q][0]}}var s=d(window.jqxWidgets[q][0].widgetInstance.element).data();if(s&&s.jqxWidget){return window.jqxWidgets[q]}}var r=d(e);if(r.length===0){r=d("<div></div>");if(j==="jqxInput"||j==="jqxPasswordInput"||j==="jqxMaskedInput"){r=d("<input/>")}if(j==="jqxTextArea"){r=d("<textarea></textarea>")}if(j==="jqxButton"||j==="jqxRepeatButton"||j==="jqxToggleButton"){r=d("<button/>")}if(j==="jqxSplitter"){r=d("<div><div>Panel 1</div><div>Panel 2</div></div>")}if(j==="jqxTabs"){r=d("<div><ul><li>Tab 1</li><li>Tab 2</li></ul><div>Content 1</div><div>Content 2</div></div>")}if(j==="jqxRibbon"){r=d("<div><ul><li>Tab 1</li><li>Tab 2</li></ul><div><div>Content 1</div><div>Content 2</div></div></div>")}if(j==="jqxDocking"){r=d("<div><div><div><div>Title 1</div><div>Content 1</div></div></div></div>")}if(j==="jqxWindow"){r=d("<div><div>Title 1</div><div>Content 1</div></div>")}}var t=[];d.each(r,function(y){var A=r[y];d.jqx.applyWidget(A,j,p,undefined);if(!m[j]){var w=d.data(A,"jqxWidget");var z=d.jqx["_"+j].prototype.defineInstance();var x={};if(d.jqx["_"+j].prototype.metaInfo){x=d.jqx["_"+j].prototype.metaInfo()}if(j=="jqxDockingLayout"){z=d.extend(z,d.jqx._jqxLayout.prototype.defineInstance())}if(j=="jqxToggleButton"||j=="jqxRepeatButton"){z=d.extend(z,d.jqx._jqxButton.prototype.defineInstance())}if(j=="jqxTreeGrid"){z=d.extend(z,d.jqx._jqxDataTable.prototype.defineInstance())}var v=function(C){var B=d.data(C,"jqxWidget");this.widgetInstance=B;var D=d.extend(this,B);D.on=D.addEventListener=function(F,G){D.addHandler(!D.base?D.host:D.base.host,F,G)};D.off=D.removeEventListener=function(F){D.removeHandler(!D.base?D.host:D.base.host,F)};for(var E in B){if(d.type(B[E])=="function"){D[E]=d.proxy(B[E],B)}}return D};m[j]=v;d.each(z,function(C,B){Object.defineProperty(v.prototype,C,{get:function(){if(this.widgetInstance){return this.widgetInstance[C]}return B},set:function(J){if(this.widgetInstance&&(this.widgetInstance[C]!=J||C==="width"||C==="height")){var H=this.widgetInstance[C];var G=J;var F=d.type(H);var D=d.type(G);var I=false;if(F!=D||C==="source"||C==="width"||C==="height"){I=true}if(I||(h(H)!=h(G))){var E={};E[C]=J;if(this.widgetInstance.host){this.widgetInstance.host[j](E)}else{this.widgetInstance.base.host[j](E)}this.widgetInstance[C]=J;if(this.widgetInstance.propertyUpdated){this.widgetInstance.propertyUpdated(C,H,J)}}}}})})}var w=new m[j](A);t.push(w);if(!window.jqxWidgets){window.jqxWidgets=new Array()}if(!window.jqxWidgets[q]){window.jqxWidgets[q]=new Array()}window.jqxWidgets[q].push(w)});if(t.length===1){return t[0]}return t}}d.fn[j]=function(){var e=Array.prototype.slice.call(arguments,0);if(e.length==0||(e.length==1&&typeof(e[0])=="object")){if(this.length==0){if(this.selector){throw new Error("Invalid Selector - "+this.selector+"! Please, check whether the used ID or CSS Class name is correct.")}else{throw new Error("Invalid Selector! Please, check whether the used ID or CSS Class name is correct.")}}return this.each(function(){var s=d(this);var r=this;var t=d.data(r,j);if(t==null){d.jqx.applyWidget(r,j,e,undefined)}else{d.jqx.jqxWidgetProxy(j,this,e)}})}else{if(this.length==0){if(this.selector){throw new Error("Invalid Selector - "+this.selector+"! Please, check whether the used ID or CSS Class name is correct.")}else{throw new Error("Invalid Selector! Please, check whether the used ID or CSS Class name is correct.")}}var q=null;var p=0;this.each(function(){var r=d.jqx.jqxWidgetProxy(j,this,e);if(p==0){q=r;p++}else{if(p==1){var s=[];s.push(q);q=s}q.push(r)}})}return q};try{d.extend(d.jqx["_"+j].prototype,Array.prototype.slice.call(i,0)[0])}catch(k){}d.extend(d.jqx["_"+j].prototype,{toThemeProperty:function(e,p){return d.jqx.toThemeProperty(this,e,p)},isMaterialized:function(){if(!this.theme){return false}if(this.theme==="fluent"){return true}if(this.theme==="tailwind"||this.theme==="tailwind-dark"){return true}if(this.theme==="light"){return true}if(this.theme==="dark"){return true}if(this.theme==="deepblue"){return true}if(this.theme.indexOf("material")>=0){return true}},isModern:function(){if(!this.theme){return false}if(this.theme.indexOf("light")>=0){return true}if(this.theme==="dark"){return true}},_addBarAndLabel:function(r){var q=this;var e=d("<label></label");e[0].innerHTML=this.placeHolder;e.addClass(q.toThemeProperty("jqx-input-label"));r.after(e);q.label=e;var p=d("<span></span>");r.after(p);p.addClass(q.toThemeProperty("jqx-input-bar"));q.bar=p;q.bar.css("top",this.host.height())}});d.jqx["_"+j].prototype.refresh=function(){if(this.base){this.base.refresh(true)}};d.jqx["_"+j].prototype.createInstance=function(){};d.jqx.isPassiveSupported=function(){var q=this;if(q.supportsPassive!==undefined){return q.supportsPassive}q.supportsPassive=false;try{var p=Object.defineProperty({},"passive",{get:function(){q.supportsPassive=true}});window.addEventListener("testPassive",null,p);window.removeEventListener("testPassive",null,p)}catch(r){}return q.supportsPassive};d.jqx["_"+j].prototype.addEventHandler=function(p,e){if(this.base){this.base.host.on(p,e)}else{this.host.on(p,e)}};d.jqx["_"+j].prototype.removeEventHandler=function(p,e){if(this.base){this.base.host.off(p)}else{this.host.off(p)}};d.jqx["_"+j].prototype.applyTo=function(q,p){if(!(p instanceof Array)){var e=[];e.push(p);p=e}d.jqx.applyWidget(q,j,p,this)};d.jqx["_"+j].prototype.getInstance=function(){return this};d.jqx["_"+j].prototype.propertyChangeMap={};d.jqx["_"+j].prototype.addHandler=function(r,e,p,q){d.jqx.addHandler(d(r),e,p,q)};d.jqx["_"+j].prototype.removeHandler=function(q,e,p){d.jqx.removeHandler(d(q),e,p)};d.jqx["_"+j].prototype.setOptions=function(){if(!this.host||!this.host.length||this.host.length!=1){return}return d.jqx.jqxWidgetProxy(j,this.host[0],arguments)}};d.jqx.toThemeProperty=function(f,g,l){if(f.theme==""){return g}var k=g.split(" ");var e="";for(var j=0;j<k.length;j++){if(j>0){e+=" "}var h=k[j];if(l!=null&&l){e+=h+"-"+f.theme}else{e+=h+" "+h+"-"+f.theme}}return e};d.jqx.addHandler=function(k,l,h,j){var f=l.split(" ");for(var e=0;e<f.length;e++){var g=f[e];if(window.addEventListener&&k[0]){switch(g){case"mousewheel":if(d.jqx.browser.mozilla){k[0].addEventListener("DOMMouseScroll",h,d.jqx.isPassiveSupported()?{passive:false}:false)}else{k[0].addEventListener("mousewheel",h,d.jqx.isPassiveSupported()?{passive:false}:false)}continue;case"mousemove":if(!j){k[0].addEventListener("mousemove",h,false);continue}break;case"touchmove":if(!j){k[0].addEventListener("touchmove",h,false);continue}else{if(j&&j.passive){k[0].addEventListener("touchmove",h,j);continue}}break}}if(j==undefined||j==null){if(k.on){k.on(g,h)}else{k.bind(g,h)}}else{if(k.on){k.on(g,j,h)}else{k.bind(g,j,h)}}}};d.jqx.removeHandler=function(j,k,h){if(!k){if(j.off){j.off()}else{j.unbind()}return}var f=k.split(" ");for(var e=0;e<f.length;e++){var g=f[e];if(window.removeEventListener){switch(g){case"mousewheel":if(d.jqx.browser.mozilla){j[0].removeEventListener("DOMMouseScroll",h,false)}else{j[0].removeEventListener("mousewheel",h,false)}continue;case"mousemove":if(h){j[0].removeEventListener("mousemove",h,false);continue}break;case"touchmove":if(h){j[0].removeEventListener("touchmove",h,false);continue}break}}if(g==undefined){if(j.off){j.off()}else{j.unbind()}continue}if(h==undefined){if(j.off){j.off(g)}else{j.unbind(g)}}else{if(j.off){j.off(g,h)}else{j.unbind(g,h)}}}};d.jqx.credits=d.jqx.credits||"";d.jqx.theme=d.jqx.theme||"";d.jqx.scrollAnimation=d.jqx.scrollAnimation||false;d.jqx.resizeDelay=d.jqx.resizeDelay||10;d.jqx.ready=function(){d(window).trigger("jqxReady")};d.jqx.init=function(){d.each(arguments[0],function(e,f){if(e=="theme"){d.jqx.theme=f}if(e=="scrollBarSize"){d.jqx.utilities.scrollBarSize=f}if(e=="touchScrollBarSize"){d.jqx.utilities.touchScrollBarSize=f}if(e=="scrollBarButtonsVisibility"){d.jqx.utilities.scrollBarButtonsVisibility=f}})};d.jqx.utilities=d.jqx.utilities||{};d.extend(d.jqx.utilities,{scrollBarSize:13,touchScrollBarSize:8,scrollBarButtonsVisibility:"visible",createId:function(){var e=function(){return(((1+Math.random())*65536)|0).toString(16).substring(1)};return"jqxWidget"+e()+e()+e()},setTheme:function(j,k,h){if(typeof h==="undefined"){return}if(!h[0].className.split){return}if(j===undefined){j=""}if(k===undefined){k=""}var l=h[0].className.split(" "),e=[],m=[],g=h.children();for(var f=0;f<l.length;f+=1){if(l[f].indexOf(j)>=0){if(j.length>0){e.push(l[f]);m.push(l[f].replace(j,k))}else{m.push(l[f].replace("-"+k,"")+"-"+k)}}}this._removeOldClasses(e,h);this._addNewClasses(m,h);for(var f=0;f<g.length;f+=1){this.setTheme(j,k,d(g[f]))}},_removeOldClasses:function(g,f){for(var e=0;e<g.length;e+=1){f.removeClass(g[e])}},_addNewClasses:function(g,f){for(var e=0;e<g.length;e+=1){f.addClass(g[e])}},getOffset:function(e){var g=d.jqx.mobile.getLeftPos(e[0]);var f=d.jqx.mobile.getTopPos(e[0]);return{top:f,left:g}},resize:function(k,v,s,r){if(r===undefined){r=true}var o=-1;var n=this;var g=function(x){if(!n.hiddenWidgets){return -1}var y=-1;for(var w=0;w<n.hiddenWidgets.length;w++){if(x.id){if(n.hiddenWidgets[w].id==x.id){y=w;break}}else{if(n.hiddenWidgets[w].id==x[0].id){y=w;break}}}return y};if(this.resizeHandlers){for(var l=0;l<this.resizeHandlers.length;l++){if(k.id){if(this.resizeHandlers[l].id==k.id){o=l;break}}else{if(this.resizeHandlers[l].id==k[0].id){o=l;break}}}if(s===true){if(o!=-1){this.resizeHandlers.splice(o,1);if(this.watchedElementData&&this.watchedElementData.length>0){this.watchedElementData.splice(o,1)}}if(this.resizeHandlers.length==0){var q=d(window);if(q.off){q.off("resize.jqx");q.off("orientationchange.jqx");q.off("orientationchanged.jqx")}else{q.unbind("resize.jqx");q.unbind("orientationchange.jqx");q.unbind("orientationchanged.jqx")}this.resizeHandlers=null}var e=g(k);if(e!=-1&&this.hiddenWidgets){this.hiddenWidgets.splice(e,1)}return}}else{if(s===true){var e=g(k);if(e!=-1&&this.hiddenWidgets){this.hiddenWidgets.splice(e,1)}return}}var n=this;var p=function(y,H){if(!n.resizeHandlers){return}var I=function(L){var i=-1;var M=L.parentNode;while(M){i++;M=M.parentNode}return i};var x=function(N,L){if(!N.widget||!L.widget){return 0}var M=I(N.widget[0]);var i=I(L.widget[0]);try{if(M<i){return -1}if(M>i){return 1}}catch(O){var P=O}return 0};var z=function(L){if(n.hiddenWidgets.length>0){n.hiddenWidgets.sort(x);var i=function(){var N=false;var P=new Array();for(var O=0;O<n.hiddenWidgets.length;O++){var M=n.hiddenWidgets[O];if(d.jqx.isHidden(M.widget)){N=true;P.push(M)}else{if(M.callback){M.callback(H)}}}n.hiddenWidgets=P;if(!N){clearInterval(n.__resizeInterval)}};if(L==false){i();if(n.__resizeInterval){clearInterval(n.__resizeInterval)}return}if(n.__resizeInterval){clearInterval(n.__resizeInterval)}n.__resizeInterval=setInterval(function(){i()},100)}};if(n.hiddenWidgets&&n.hiddenWidgets.length>0){z(false)}n.hiddenWidgets=new Array();n.resizeHandlers.sort(x);for(var E=0;E<n.resizeHandlers.length;E++){var K=n.resizeHandlers[E];var G=K.widget;var D=K.data;if(!D){continue}if(!D.jqxWidget){continue}var w=D.jqxWidget.width;var J=D.jqxWidget.height;if(D.jqxWidget.base){if(w==undefined){w=D.jqxWidget.base.width}if(J==undefined){J=D.jqxWidget.base.height}}if(w===undefined&&J===undefined){w=D.jqxWidget.element.style.width;J=D.jqxWidget.element.style.height}var F=false;if(w!=null&&w.toString().indexOf("%")!=-1){F=true}if(J!=null&&J.toString().indexOf("%")!=-1){F=true}if(d.jqx.isHidden(G)){if(g(G)===-1){if(F||y===true){if(K.data.nestedWidget!==true){n.hiddenWidgets.push(K)}}}}else{if(y===undefined||y!==true){if(F){K.callback(H);if(n.watchedElementData){for(var B=0;B<n.watchedElementData.length;B++){if(n.watchedElementData[B].element==D.jqxWidget.element){n.watchedElementData[B].offsetWidth=D.jqxWidget.element.offsetWidth;n.watchedElementData[B].offsetHeight=D.jqxWidget.element.offsetHeight;break}}}if(n.hiddenWidgets.indexOf(K)>=0){n.hiddenWidgets.splice(n.hiddenWidgets.indexOf(K),1)}}if(D.jqxWidget.element){var A=D.jqxWidget.element.className;if(A.indexOf("dropdownlist")>=0||A.indexOf("datetimeinput")>=0||A.indexOf("combobox")>=0||A.indexOf("menu")>=0){if(D.jqxWidget.isOpened){var C=D.jqxWidget.isOpened();if(C){if(H&&H=="resize"&&d.jqx.mobile.isTouchDevice()){continue}D.jqxWidget.close()}}}}}}}z()};if(!this.resizeHandlers){this.resizeHandlers=new Array();var q=d(window);if(q.on){this._resizeTimer=null;this._initResize=null;q.on("resize.jqx",function(i){if(n._resizeTimer!=undefined){clearTimeout(n._resizeTimer)}if(!n._initResize){n._initResize=true;p(null,"resize")}else{n._resizeTimer=setTimeout(function(){p(null,"resize")},d.jqx.resizeDelay)}});q.on("orientationchange.jqx",function(i){p(null,"orientationchange")});q.on("orientationchanged.jqx",function(i){p(null,"orientationchange")})}else{q.bind("resize.jqx",function(i){p(null,"orientationchange")});q.bind("orientationchange.jqx",function(i){p(null,"orientationchange")});q.bind("orientationchanged.jqx",function(i){p(null,"orientationchange")})}}var h=k.data();if(r){if(o===-1){this.resizeHandlers.push({id:k[0].id,widget:k,callback:v,data:h})}}try{var f=h.jqxWidget.width;var u=h.jqxWidget.height;if(h.jqxWidget.base){if(f==undefined){f=h.jqxWidget.base.width}if(u==undefined){u=h.jqxWidget.base.height}}if(f===undefined&&u===undefined){f=h.jqxWidget.element.style.width;u=h.jqxWidget.element.style.height}var m=false;if(f!=null&&f.toString().indexOf("%")!=-1){m=true}if(u!=null&&u.toString().indexOf("%")!=-1){m=true}if(m){if(!this.watchedElementData){this.watchedElementData=[]}var n=this;var j=function(i){if(n.watchedElementData.forEach){n.watchedElementData.forEach(function(w){if(w.element.offsetWidth!==w.offsetWidth||w.element.offsetHeight!==w.offsetHeight){w.offsetWidth=w.element.offsetWidth;w.offsetHeight=w.element.offsetHeight;if(w.timer){clearTimeout(w.timer)}w.timer=setTimeout(function(){if(!d.jqx.isHidden(d(w.element))){w.callback()}else{w.timer=setInterval(function(){if(!d.jqx.isHidden(d(w.element))){clearInterval(w.timer);w.callback()}},100)}})}})}};n.watchedElementData.push({element:k[0],offsetWidth:k[0].offsetWidth,offsetHeight:k[0].offsetHeight,callback:v});if(!n.observer){n.observer=new MutationObserver(j);n.observer.observe(document.body,{attributes:true,childList:true,characterData:true})}}}catch(t){}if(d.jqx.isHidden(k)&&r===true){p(true)}d.jqx.resize=function(){p(null,"resize")}},parseJSON:function(g){if(!g||typeof g!=="string"){return null}var e=/^[\],:{}\s]*$/,i=/(?:^|:|,)(?:\s*\[)+/g,f=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,h=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g;g=d.trim(g);if(window.JSON&&window.JSON.parse){return window.JSON.parse(g)}if(e.test(g.replace(f,"@").replace(h,"]").replace(i,""))){return(new Function("return "+g))()}throw new Error("Invalid JSON: "+g)},html:function(f,g){if(!d(f).on||!d.access){return d(f).html(g)}try{return d.access(f,function(u){var h=f[0]||{},o=0,m=f.length;if(u===undefined){return h.nodeType===1?h.innerHTML.replace(rinlinejQuery,""):undefined}var t=/<(?:script|style|link)/i,p="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",k=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,r=/<([\w:]+)/,j=/<(?:script|object|embed|option|style)/i,n=new RegExp("<(?:"+p+")[\\s/>]","i"),s=/^\s+/,v={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};if(typeof u==="string"&&!t.test(u)&&(d.support.htmlSerialize||!n.test(u))&&(d.support.leadingWhitespace||!s.test(u))&&!v[(r.exec(u)||["",""])[1].toLowerCase()]){u=u.replace(k,"<$1></$2>");try{for(;o<m;o++){h=this[o]||{};if(h.nodeType===1){d.cleanData(h.getElementsByTagName("*"));h.innerHTML=u}}h=0}catch(q){}}if(h){f.empty().append(u)}},null,g,arguments.length)}catch(e){return d(f).html(g)}},hasTransform:function(g){var f="";f=g.css("transform");if(f==""||f=="none"){f=g.parents().css("transform");if(f==""||f=="none"){var e=d.jqx.utilities.getBrowser();if(e.browser=="msie"){f=g.css("-ms-transform");if(f==""||f=="none"){f=g.parents().css("-ms-transform")}}else{if(e.browser=="chrome"){f=g.css("-webkit-transform");if(f==""||f=="none"){f=g.parents().css("-webkit-transform")}}else{if(e.browser=="opera"){f=g.css("-o-transform");if(f==""||f=="none"){f=g.parents().css("-o-transform")}}else{if(e.browser=="mozilla"){f=g.css("-moz-transform");if(f==""||f=="none"){f=g.parents().css("-moz-transform")}}}}}}else{return f!=""&&f!="none"}}if(f==""||f=="none"){f=d(document.body).css("transform")}return f!=""&&f!="none"&&f!=null},getBrowser:function(){var f=navigator.userAgent.toLowerCase();var e=/(chrome)[ \/]([\w.]+)/.exec(f)||/(webkit)[ \/]([\w.]+)/.exec(f)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(f)||/(msie) ([\w.]+)/.exec(f)||f.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(f)||[];var g={browser:e[1]||"",version:e[2]||"0"};if(f.indexOf("rv:11.0")>=0&&f.indexOf(".net4.0c")>=0){g.browser="msie";g.version="11";e[1]="msie"}if(f.indexOf("edge")>=0){g.browser="msie";g.version="12";e[1]="msie"}g[e[1]]=e[1];return g}});d.jqx.browser=d.jqx.utilities.getBrowser();d.jqx.isHidden=function(f){if(!f||!f[0]){return false}var e=f[0].offsetWidth,g=f[0].offsetHeight;if(e===0||g===0){return true}else{return false}};d.jqx.ariaEnabled=true;d.jqx.aria=function(f,h,g){if(!d.jqx.ariaEnabled){return}if(h==undefined){d.each(f.aria,function(j,k){var m=!f.base?f.host.attr(j):f.base.host.attr(j);if(m!=undefined&&!d.isFunction(m)){var l=m;switch(k.type){case"number":l=new Number(m);if(isNaN(l)){l=m}break;case"boolean":l=m=="true"?true:false;break;case"date":l=new Date(m);if(l=="Invalid Date"||isNaN(l)){l=m}break}f[k.name]=l}else{var m=f[k.name];if(d.isFunction(m)){m=f[k.name]()}if(m==undefined){m=""}try{!f.base?f.host.attr(j,m.toString()):f.base.host.attr(j,m.toString())}catch(i){}}})}else{try{if(f.host){if(!f.base){if(f.host){if(f.element.setAttribute){f.element.setAttribute(h,g.toString())}else{f.host.attr(h,g.toString())}}else{f.attr(h,g.toString())}}else{if(f.base.host){f.base.host.attr(h,g.toString())}else{f.attr(h,g.toString())}}}else{if(f.setAttribute){f.setAttribute(h,g.toString())}}}catch(e){}}};if(!Array.prototype.indexOf){Array.prototype.indexOf=function(f){var e=this.length;var g=Number(arguments[1])||0;g=(g<0)?Math.ceil(g):Math.floor(g);if(g<0){g+=e}for(;g<e;g++){if(g in this&&this[g]===f){return g}}return -1}}d.jqx.mobile=d.jqx.mobile||{};d.jqx.position=function(e){var h=parseInt(e.pageX);var g=parseInt(e.pageY);if(d.jqx.mobile.isTouchDevice()){var f=d.jqx.mobile.getTouches(e);var i=f[0];h=parseInt(i.pageX);g=parseInt(i.pageY)}return{left:h,top:g}};d.extend(d.jqx.mobile,{_touchListener:function(k,i){var f=function(l,n){var m=document.createEvent("MouseEvents");m.initMouseEvent(l,n.bubbles,n.cancelable,n.view,n.detail,n.screenX,n.screenY,n.clientX,n.clientY,n.ctrlKey,n.altKey,n.shiftKey,n.metaKey,n.button,n.relatedTarget);m._pageX=n.pageX;m._pageY=n.pageY;return m};var j={mousedown:"touchstart",mouseup:"touchend",mousemove:"touchmove"};var h=f(j[k.type],k);k.target.dispatchEvent(h);var g=k.target["on"+j[k.type]];if(typeof g==="function"){g(k)}},setMobileSimulator:function(f,h){if(this.isTouchDevice()){return}this.simulatetouches=true;if(h==false){this.simulatetouches=false}var g={mousedown:"touchstart",mouseup:"touchend",mousemove:"touchmove"};var e=this;if(window.addEventListener){var i=function(){for(var j in g){if(f.addEventListener){f.removeEventListener(j,e._touchListener);f.addEventListener(j,e._touchListener,false)}}};if(d.jqx.browser.msie){i()}else{i()}}},isTouchDevice:function(){if(this.touchDevice!=undefined){return this.touchDevice}var g="Browser CodeName: "+navigator.appCodeName+"";g+="Browser Name: "+navigator.appName+"";g+="Browser Version: "+navigator.appVersion+"";g+="Platform: "+navigator.platform+"";g+="User-agent header: "+navigator.userAgent+"";if(navigator.maxTouchPoints>1){}if(g.indexOf("Android")!=-1){return true}if(g.indexOf("IEMobile")!=-1){return true}if(g.indexOf("Windows Phone")!=-1){return true}if(g.indexOf("WPDesktop")!=-1){return true}if(g.indexOf("ZuneWP7")!=-1){return true}if(g.indexOf("BlackBerry")!=-1&&g.indexOf("Mobile Safari")!=-1){return true}if(g.indexOf("ipod")!=-1){return true}if(g.indexOf("nokia")!=-1||g.indexOf("Nokia")!=-1){return true}if(g.indexOf("Chrome/17")!=-1){return false}if(g.indexOf("CrOS")!=-1){return false}if(g.indexOf("Opera")!=-1&&g.indexOf("Mobi")==-1&&g.indexOf("Mini")==-1&&g.indexOf("Platform: Win")!=-1){return false}if(g.indexOf("HybridDeviceTouch")!=-1){return true}if(g.indexOf("HybridDeviceMouse")!=-1){return false}if(g.indexOf("Opera")!=-1&&g.indexOf("Mobi")!=-1&&g.indexOf("Opera Mobi")!=-1){return true}if(g.indexOf("Mozilla/5.0 (X11; Linux x86_64)")!=-1){return false}var h={ios:"i(?:Pad|Phone|Pod)(?:.*)CPU(?: iPhone)? OS ",android:"(Android |HTC_|Silk/)",blackberry:"BlackBerry(?:.*)Version/",rimTablet:"RIM Tablet OS ",webos:"(?:webOS|hpwOS)/",bada:"Bada/"};try{if(this.touchDevice!=undefined){return this.touchDevice}this.touchDevice=false;for(var k in h){if(h.hasOwnProperty(k)){var m=h[k];var j=g.match(new RegExp("(?:"+m+")([^\\s;]+)"));if(j){if(k.toString()=="blackberry"){this.touchDevice=false;return false}this.touchDevice=true;return true}}}var l=navigator.userAgent;if(navigator.platform.toLowerCase().indexOf("win")!=-1){if(l.indexOf("Windows Phone")>=0||l.indexOf("WPDesktop")>=0||l.indexOf("IEMobile")>=0||l.indexOf("ZuneWP7")>=0){this.touchDevice=true;return true}else{if(l.indexOf("Touch")>=0){var f=("MSPointerDown" in window)||("pointerdown" in window);if(f){this.touchDevice=true;return true}if(l.indexOf("ARM")>=0){this.touchDevice=true;return true}this.touchDevice=false;return false}}}if(navigator.platform.toLowerCase().indexOf("win")!=-1){this.touchDevice=false;return false}if(("ontouchstart" in window)||window.DocumentTouch&&document instanceof DocumentTouch){this.touchDevice=true}return this.touchDevice}catch(n){this.touchDevice=false;return false}},getLeftPos:function(e){var f=e.offsetLeft;while((e=e.offsetParent)!=null){if(e.tagName!="HTML"){f+=e.offsetLeft;if(document.all){f+=e.clientLeft}}}return f},getTopPos:function(f){var h=f.offsetTop;var e=d(f).coord();while((f=f.offsetParent)!=null){if(f.tagName!="HTML"){h+=(f.offsetTop-f.scrollTop);if(document.all){h+=f.clientTop}}}var g=navigator.userAgent.toLowerCase();var i=(g.indexOf("windows phone")!=-1||g.indexOf("WPDesktop")!=-1||g.indexOf("ZuneWP7")!=-1||g.indexOf("msie 9")!=-1||g.indexOf("msie 11")!=-1||g.indexOf("msie 10")!=-1)&&g.indexOf("touch")!=-1;if(i){return e.top}if(this.isSafariMobileBrowser()){if(this.isSafari4MobileBrowser()&&this.isIPadSafariMobileBrowser()){return h}if(g.indexOf("version/7")!=-1){return e.top}if(g.indexOf("version/6")!=-1||g.indexOf("version/5")!=-1){h=h+d(window).scrollTop()}if(/(Android.*Chrome\/[.0-9]* (!?Mobile))/.exec(navigator.userAgent)){return h}if(/(Android.*Chrome\/[.0-9]* Mobile)/.exec(navigator.userAgent)){return h}return e.top}return h},isChromeMobileBrowser:function(){var f=navigator.userAgent.toLowerCase();var e=f.indexOf("android")!=-1;return e},isOperaMiniMobileBrowser:function(){var f=navigator.userAgent.toLowerCase();var e=f.indexOf("opera mini")!=-1||f.indexOf("opera mobi")!=-1;return e},isOperaMiniBrowser:function(){var f=navigator.userAgent.toLowerCase();var e=f.indexOf("opera mini")!=-1;return e},isNewSafariMobileBrowser:function(){var f=navigator.userAgent.toLowerCase();var e=f.indexOf("ipad")!=-1||f.indexOf("iphone")!=-1||f.indexOf("ipod")!=-1;e=e&&(f.indexOf("version/5")!=-1);return e},isSafari4MobileBrowser:function(){var f=navigator.userAgent.toLowerCase();var e=f.indexOf("ipad")!=-1||f.indexOf("iphone")!=-1||f.indexOf("ipod")!=-1;e=e&&(f.indexOf("version/4")!=-1);return e},isWindowsPhone:function(){var f=navigator.userAgent.toLowerCase();var e=(f.indexOf("windows phone")!=-1||f.indexOf("WPDesktop")!=-1||f.indexOf("ZuneWP7")!=-1||f.indexOf("msie 9")!=-1||f.indexOf("msie 11")!=-1||f.indexOf("msie 10")!=-1&&f.indexOf("touch")!=-1);return e},isSafariMobileBrowser:function(){var f=navigator.userAgent.toLowerCase();if(/(Android.*Chrome\/[.0-9]* (!?Mobile))/.exec(navigator.userAgent)){return true}if(/(Android.*Chrome\/[.0-9]* Mobile)/.exec(navigator.userAgent)){return true}var e=f.indexOf("ipad")!=-1||f.indexOf("iphone")!=-1||f.indexOf("ipod")!=-1||f.indexOf("mobile safari")!=-1;return e},isIPadSafariMobileBrowser:function(){var f=navigator.userAgent.toLowerCase();var e=f.indexOf("ipad")!=-1;return e},isMobileBrowser:function(){var f=navigator.userAgent.toLowerCase();var e=f.indexOf("ipad")!=-1||f.indexOf("iphone")!=-1||f.indexOf("android")!=-1;return e},getTouches:function(f){if(f.originalEvent){if(f.originalEvent.touches&&f.originalEvent.touches.length){return f.originalEvent.touches}else{if(f.originalEvent.changedTouches&&f.originalEvent.changedTouches.length){return f.originalEvent.changedTouches}}}if(!f.touches){f.touches=new Array();f.touches[0]=f.originalEvent!=undefined?f.originalEvent:f;if(f.originalEvent!=undefined&&f.pageX){f.touches[0]=f}if(f.type=="mousemove"){f.touches[0]=f}}return f.touches},getTouchEventName:function(e){if(this.isWindowsPhone()){var f=navigator.userAgent.toLowerCase();if(f.indexOf("windows phone 7")!=-1){if(e.toLowerCase().indexOf("start")!=-1){return"MSPointerDown"}if(e.toLowerCase().indexOf("move")!=-1){return"MSPointerMove"}if(e.toLowerCase().indexOf("end")!=-1){return"MSPointerUp"}}if(e.toLowerCase().indexOf("start")!=-1){return"pointerdown"}if(e.toLowerCase().indexOf("move")!=-1){return"pointermove"}if(e.toLowerCase().indexOf("end")!=-1){return"pointerup"}}else{return e}},dispatchMouseEvent:function(f,i,h){if(this.simulatetouches){return}var g=document.createEvent("MouseEvent");g.initMouseEvent(f,true,true,i.view,1,i.screenX,i.screenY,i.clientX,i.clientY,false,false,false,false,0,null);if(h!=null){h.dispatchEvent(g)}},getRootNode:function(e){while(e.nodeType!==1){e=e.parentNode}return e},setTouchScroll:function(e,f){if(!this.enableScrolling){this.enableScrolling=[]}this.enableScrolling[f]=e},touchScroll:function(D,O,ab,J,z,p){if(D==null){return}var I=this;var h=0;var t=0;var i=0;var k=0;var v=0;var l=0;if(!this.scrolling){this.scrolling=[]}this.scrolling[J]=false;var m=false;var r=d(D);var T=["select","input","textarea"];var Z=0;var L=0;if(!this.enableScrolling){this.enableScrolling=[]}this.enableScrolling[J]=true;var J=J;var y=this.getTouchEventName("touchstart")+".touchScroll";var F=this.getTouchEventName("touchend")+".touchScroll";var ad=this.getTouchEventName("touchmove")+".touchScroll";var n,Y,B,aj,X,aa,al,S,ac,f,H,af,ah,Q,g,x,w,U,e,G,ai,q;S=O;var al=0;var ac=0;var j=0;var V=0;var ak=0;var aa=z.jqxScrollBar("max");var q=325;function C(ao){if(ao.targetTouches&&(ao.targetTouches.length>=1)){return ao.targetTouches[0].clientY}else{if(ao.originalEvent&&ao.originalEvent.clientY!==undefined){return ao.originalEvent.clientY}else{var an=I.getTouches(ao);return an[0].clientY}}}function ag(ao){if(ao.targetTouches&&(ao.targetTouches.length>=1)){return ao.targetTouches[0].clientX}else{if(ao.originalEvent&&ao.originalEvent.clientX!==undefined){return ao.originalEvent.clientX}else{var an=I.getTouches(ao);return an[0].clientX}}}var K=function(){var ar,ao,at,aq;ar=Date.now();ao=ar-x;x=ar;at=ac-g;var ap=j-aj;g=ac;aj=j;H=true;aq=1000*at/(1+ao);var an=1000*ap/(1+ao);ah=0.8*aq+0.2*ah;Q=0.8*an+0.2*Q};var E=false;var Z=function(ao){if(!I.enableScrolling[J]){return true}if(d.inArray(ao.target.tagName.toLowerCase(),T)!==-1){return}ac=p.jqxScrollBar("value");j=z.jqxScrollBar("value");var ap=I.getTouches(ao);var aq=ap[0];if(ap.length==1){I.dispatchMouseEvent("mousedown",aq,I.getRootNode(aq.target))}aa=z.jqxScrollBar("max");S=p.jqxScrollBar("max");function an(ar){E=false;H=true;f=C(ar);ai=ag(ar);ah=U=Q=0;g=ac;aj=j;x=Date.now();clearInterval(w);w=setInterval(K,100);V=ac;ak=j;if(ac>0&&ac<S&&p[0].style.visibility!="hidden"){}}an(ao);m=false;t=aq.pageY;v=aq.pageX;if(I.simulatetouches){if(aq._pageY!=undefined){t=aq._pageY;v=aq._pageX}}I.scrolling[J]=true;h=0;k=0;return true};if(r.on){r.on(y,Z)}else{r.bind(y,Z)}var ae=function(ao,an){ac=(ao>S)?S:(ao<al)?al:ao;ab(null,ao,0,0,an);return(ao>S)?"max":(ao<al)?"min":"value"};var o=function(ao,an){j=(ao>aa)?aa:(ao<al)?al:ao;ab(ao,null,0,0,an);return(ao>aa)?"max":(ao<al)?"min":"value"};function W(){var an,ao;if(U){an=Date.now()-x;ao=-U*Math.exp(-an/q);if(ao>0.5||ao<-0.5){ae(e+ao);requestAnimationFrame(W)}else{ae(e)}}}function P(){var an,ao;if(U){an=Date.now()-x;ao=-U*Math.exp(-an/q);if(ao>0.5||ao<-0.5){o(G+ao);requestAnimationFrame(P)}else{o(G)}}}var A=function(an){if(!I.enableScrolling[J]){return true}if(!I.scrolling[J]){return true}if(E){an.preventDefault();an.stopPropagation()}var at=I.getTouches(an);if(at.length>1){return true}var ao=at[0].pageY;var aq=at[0].pageX;if(I.simulatetouches){if(at[0]._pageY!=undefined){ao=at[0]._pageY;aq=at[0]._pageX}}var aw=ao-t;var ax=aq-v;L=ao;var av=aq;i=aw-h;l=ax-k;m=true;h=aw;k=ax;var ap=z!=null?z[0].style.visibility!="hidden":true;var au=p!=null?p[0].style.visibility!="hidden":true;function ar(aA){var aC,aB,az;if(H){aC=C(aA);az=ag(aA);aB=f-aC;X=ai-az;var ay="value";if(aB>2||aB<-2){f=aC;ay=ae(ac+aB,aA);K();if(ay=="min"&&V===0){return true}if(ay=="max"&&V===S){return true}if(!au){return true}aA.preventDefault();aA.stopPropagation();E=true;return false}else{if(X>2||X<-2){ai=az;ay=o(j+X,aA);K();if(ay=="min"&&ak===0){return true}if(ay=="max"&&ak===aa){return true}if(!ap){return true}E=true;aA.preventDefault();aA.stopPropagation();return false}}aA.preventDefault()}}if(ap||au){if((ap)||(au)){ar(an)}}};if(r.on){r.on(ad,A)}else{r.bind(ad,A)}var u=function(ao){if(!I.enableScrolling[J]){return true}var ap=I.getTouches(ao)[0];if(!I.scrolling[J]){return true}H=false;clearInterval(w);if(ah>10||ah<-10){U=0.8*ah;e=Math.round(ac+U);x=Date.now();requestAnimationFrame(W)}else{if(Q>10||Q<-10){U=0.8*Q;G=Math.round(j+U);x=Date.now();requestAnimationFrame(P)}else{}}I.scrolling[J]=false;if(m){I.dispatchMouseEvent("mouseup",ap,ao.target)}else{var ap=I.getTouches(ao)[0],an=I.getRootNode(ap.target);I.dispatchMouseEvent("mouseup",ap,an);I.dispatchMouseEvent("click",ap,an);return true}};if(this.simulatetouches){var s=d(window).on!=undefined||d(window).bind;var R=function(an){try{u(an)}catch(ao){}I.scrolling[J]=false};d(window).on!=undefined?d(document).on("mouseup.touchScroll",R):d(document).bind("mouseup.touchScroll",R);if(window.frameElement){if(window.top!=null){var N=function(an){try{u(an)}catch(ao){}I.scrolling[J]=false};if(window.top.document){d(window.top.document).on?d(window.top.document).on("mouseup",N):d(window.top.document).bind("mouseup",N)}}}var am=d(document).on!=undefined||d(document).bind;var M=function(an){if(!I.scrolling[J]){return true}I.scrolling[J]=false;var ap=I.getTouches(an)[0],ao=I.getRootNode(ap.target);I.dispatchMouseEvent("mouseup",ap,ao);I.dispatchMouseEvent("click",ap,ao)};d(document).on!=undefined?d(document).on("touchend",M):d(document).bind("touchend",M)}if(r.on){r.on("dragstart",function(an){an.preventDefault()});r.on("selectstart",function(an){an.preventDefault()})}r.on?r.on(F+" touchcancel.touchScroll",u):r.bind(F+" touchcancel.touchScroll",u)}});d.jqx.cookie=d.jqx.cookie||{};d.extend(d.jqx.cookie,{cookie:function(h,i,f){if(arguments.length>1&&String(i)!=="[object Object]"){f=d.extend({},f);if(i===null||i===undefined){f.expires=-1}if(typeof f.expires==="number"){var k=f.expires,g=f.expires=new Date();g.setDate(g.getDate()+k)}i=String(i);return(document.cookie=[encodeURIComponent(h),"=",f.raw?i:encodeURIComponent(i),f.expires?"; expires="+f.expires.toUTCString():"",f.path?"; path="+f.path:"",f.domain?"; domain="+f.domain:"",f.secure?"; secure":""].join(""))}f=i||{};var e,j=f.raw?function(l){return l}:decodeURIComponent;return(e=new RegExp("(?:^|; )"+encodeURIComponent(h)+"=([^;]*)").exec(document.cookie))?j(e[1]):null}});d.jqx.string=d.jqx.string||{};d.extend(d.jqx.string,{replace:function(i,g,h){if(g===h){return this}var e=i;var f=e.indexOf(g);while(f!=-1){e=e.replace(g,h);f=e.indexOf(g)}return e},contains:function(e,f){if(e==null||f==null){return false}return e.indexOf(f)!=-1},containsIgnoreCase:function(e,f){if(e==null||f==null){return false}return e.toString().toUpperCase().indexOf(f.toString().toUpperCase())!=-1},equals:function(e,f){if(e==null||f==null){return false}e=this.normalize(e);if(f.length==e.length){return e.slice(0,f.length)==f}return false},equalsIgnoreCase:function(e,f){if(e==null||f==null){return false}e=this.normalize(e);if(f.length==e.length){return e.toUpperCase().slice(0,f.length)==f.toUpperCase()}return false},startsWith:function(e,f){if(e==null||f==null){return false}return e.slice(0,f.length)==f},startsWithIgnoreCase:function(e,f){if(e==null||f==null){return false}return e.toUpperCase().slice(0,f.length)==f.toUpperCase()},normalize:function(e){if(e.charCodeAt(e.length-1)==65279){e=e.substring(0,e.length-1)}return e},endsWith:function(e,f){if(e==null||f==null){return false}e=this.normalize(e);return e.slice(-f.length)==f},endsWithIgnoreCase:function(e,f){if(e==null||f==null){return false}e=this.normalize(e);return e.toUpperCase().slice(-f.length)==f.toUpperCase()}});d.extend(d.easing,{easeOutBack:function(f,g,e,j,i,h){if(h==undefined){h=1.70158}return j*((g=g/i-1)*g*((h+1)*g+h)+1)+e},easeInQuad:function(f,g,e,i,h){return i*(g/=h)*g+e},easeInOutCirc:function(f,g,e,i,h){if((g/=h/2)<1){return -i/2*(Math.sqrt(1-g*g)-1)+e}return i/2*(Math.sqrt(1-(g-=2)*g)+1)+e},easeInOutSine:function(f,g,e,i,h){return -i/2*(Math.cos(Math.PI*g/h)-1)+e},easeInCubic:function(f,g,e,i,h){return i*(g/=h)*g*g+e},easeOutCubic:function(f,g,e,i,h){return i*((g=g/h-1)*g*g+1)+e},easeInOutCubic:function(f,g,e,i,h){if((g/=h/2)<1){return i/2*g*g*g+e}return i/2*((g-=2)*g*g+2)+e},easeInSine:function(f,g,e,i,h){return -i*Math.cos(g/h*(Math.PI/2))+i+e},easeOutSine:function(f,g,e,i,h){return i*Math.sin(g/h*(Math.PI/2))+e},easeInOutSine:function(f,g,e,i,h){return -i/2*(Math.cos(Math.PI*g/h)-1)+e}})})(b);(function(d){if(d.event&&d.event.special){d.extend(d.event.special,{close:{noBubble:true},open:{noBubble:true},cellclick:{noBubble:true},rowclick:{noBubble:true},tabclick:{noBubble:true},selected:{noBubble:true},expanded:{noBubble:true},collapsed:{noBubble:true},valuechanged:{noBubble:true},expandedItem:{noBubble:true},collapsedItem:{noBubble:true},expandingItem:{noBubble:true},collapsingItem:{noBubble:true}})}if(d.fn.extend){d.fn.extend({ischildof:function(i){if(!d(this).parents){var e=i.element.contains(this.element);return e}var g=d(this).parents().get();for(var f=0;f<g.length;f++){if(typeof i!="string"){var h=g[f];if(i!==undefined){if(h==i[0]){return true}}}else{if(i!==undefined){if(d(g[f]).is(i)){return true}}}}return false}})}d.fn.jqxProxy=function(){var g=d(this).data().jqxWidget;var e=Array.prototype.slice.call(arguments,0);var f=g.element;if(!f){f=g.base.element}return d.jqx.jqxWidgetProxy(g.widgetName,f,e)};var c=d.originalVal=d.fn.val;d.fn.val=function(f){if(typeof f=="undefined"){if(d(this).hasClass("jqx-widget")||d(this).hasClass("jqx-input-group")){var e=d(this).data().jqxWidget;if(e&&e.val){return e.val()}}if(this[0]&&this[0].tagName.toLowerCase().indexOf("angular")>=0){var e=d(this).find(".jqx-widget").data().jqxWidget;if(e&&e.val){return e.val()}}return c.call(this)}else{if(d(this).hasClass("jqx-widget")||d(this).hasClass("jqx-input-group")){var e=d(this).data().jqxWidget;if(e&&e.val){if(arguments.length!=2){return e.val(f)}else{return e.val(f,arguments[1])}}}if(this[0]&&this[0].tagName.toLowerCase().indexOf("angular")>=0){var e=d(this).find(".jqx-widget").data().jqxWidget;if(e&&e.val){if(arguments.length!=2){return e.val(f)}else{return e.val(f,arguments[1])}}}return c.call(this,f)}};if(d.fn.modal&&d.fn.modal.Constructor){d.fn.modal.Constructor.prototype.enforceFocus=function(){d(document).off("focusin.bs.modal").on("focusin.bs.modal",d.proxy(function(f){if(this.$element[0]!==f.target&&!this.$element.has(f.target).length){if(d(f.target).parents().hasClass("jqx-popup")){return true}this.$element.trigger("focus")}},this))}}d.fn.coord=function(p){var g,l,k={top:0,left:0},h=this[0],n=h&&h.ownerDocument;if(!n){return}g=n.documentElement;if(!d.contains(g,h)){return k}if(typeof h.getBoundingClientRect!==undefined){k=h.getBoundingClientRect()}var f=function(q){return d.isWindow(q)?q:q.nodeType===9?q.defaultView||q.parentWindow:false};l=f(n);var j=0;var e=0;var i=navigator.userAgent.toLowerCase();var o=i.indexOf("ipad")!=-1||i.indexOf("iphone")!=-1;if(o){j=2}if(true==p){if(document.body.style.position!="static"&&document.body.style.position!=""){var m=d(document.body).coord();j=-m.left;e=-m.top}}return{top:e+k.top+(l.pageYOffset||g.scrollTop)-(g.clientTop||0),left:j+k.left+(l.pageXOffset||g.scrollLeft)-(g.clientLeft||0)}};d.jqx.ripplers=[];d.jqx.ripple=function(g,f,p){if(!f){f=g}var j=d(g);var k=false;j.append("<span class='ink'></span>");var q=j.find(".ink");var e=false;for(var h=0;h<d.jqx.ripplers.length;h++){var l=d.jqx.ripplers[h];if(l.element[0]===g[0]){e=true;break}}if(!e){d.jqx.ripplers.push({ink:q,element:g,hostElement:f,hostElementType:p})}if(p==="checkbox"||p==="radiobutton"){var m=Math.max(j.outerWidth(),j.outerHeight());q.css({height:m,width:m});var o=j.width()/2-q.width()/2;var n=j.height()/2-q.height()/2;q.css({top:n+"px",left:o+"px"})}if(d.jqx.ripplers.length===1){d(document).on("mouseup",function(t){d.jqx.ripple.mouseCaptured=false;for(var s=0;s<d.jqx.ripplers.length;s++){var r=d.jqx.ripplers[s];r.ink.removeClass("active");r.element.removeClass("active");if(p!=="checkbox"&&p!=="radiobutton"){if(r.ink.hasClass("animate")){r.ink.removeClass("animate")}}}})}f.off("mousedown.ripple");f.on("mousedown.ripple",function(r){var i=d(g);d.jqx.ripple.mouseCaptured=true;setTimeout(function(){if(i.find(".ink").length==0){i.append("<span class='ink'></span>")}var t=i.find(".ink");t.removeClass("animate");if(!t.height()&&!t.width()){var u=Math.max(i.outerWidth(),i.outerHeight());t.css({height:u,width:u})}if(p==="checkbox"||p==="radiobutton"){if(p==="checkbox"){if(f.jqxCheckBox("disabled")){return}}if(p==="radiobutton"){if(f.jqxRadioButton("disabled")){return}}var s=i.width()/2-t.width()/2;var v=i.height()/2-t.height()/2;t.css({top:v+"px",left:s+"px"}).addClass("animate");t.on("animationend",function(){if(d.jqx.ripple.mouseCaptured){t.removeClass("animate");t.addClass("active");g.addClass("active")}});return}var s=r.pageX-i.offset().left-t.width()/2;var v=r.pageY-i.offset().top-t.height()/2;t.css({top:v+"px",left:s+"px"}).addClass("animate")})})}})(b)})();



/***/ }),

/***/ 471:
/***/ (() => {

/*
jQWidgets v26.0.0 (2026-July)
Copyright (c) 2011-2026 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

(function(){if(typeof document==="undefined"){return}(function(d){var c=(function(){var e={},w,s,l,n,i,j,q,r;function f(E,D,z,C,A,x,y){var B=this;if(!B){B=window.jqx}B.hierarchy=A;B.exportFormat=x;B.filename=y;E.beginFile(y);p(E);m(E);E.endFile(y);return E.getFile()}function p(B){var z=true;d.each(s,function(){if(this.hidden){z=false;return false}});B.beginHeader(z);var y=0;for(var x in s){if(s[x].columnsDataFields){x=s[x].columnsDataFields[y].displayfield}var A=o(x,s[x]);B.appendHeaderCell(s[x],x,A,z,y);y++}B.endHeader(z)}function m(A){var z=this;if(!z){z=window.jqx}A.beginBody();if(z.hierarchy){var y=function(C){for(var B=0;B<C.length;B+=1){if(C[B]!==undefined){A.hierarchy=true;A.beginRow(C[B].level);g(A,C[B],B,true);if(C[B].records){A.beginRows(C[B].level);y(C[B].records);A.endRows(C[B].level)}A.endRow(C[B].level)}}};y(w);A.endBody();return}for(var x=0;x<w.length;x+=1){if(w[x]!==undefined){g(A,w[x],x)}}A.endBody()}function g(z,C,A,F){var E=this;if(!E){E=window.jqx}var y;if(F!=true){z.beginRow()}var D=0;for(var B in s){if(s[B].columnsDataFields){B=s[B].columnsDataFields[D].displayfield}y=u(A,B);if(y){if(y.level!=undefined){if(y.index-1>C.level&&y.index-1<y.maxLevel){D++;continue}}if(y.maxLevel!=undefined){if(y.index-1==y.maxLevel){y=d.extend({},y);y.merge=y.maxLevel-C.level-1}}}if(C.level!=undefined&&C.label!=undefined){if(E.exportFormat==="xml"||E.exportFormat==="json"){var x={};x.text="group";z.appendBodyCell(C.label,x,y,C,D,"group");break}}if(C.hasOwnProperty(B)){z.appendBodyCell(C[B],s[B],y,C,D)}else{z.appendBodyCell("",s[B],y,C,D)}D++}if(F!=true){z.endRow()}}function o(y,z){if(z.style){return l[z.style]}var x=v();if(x.length>0){return x[0].style}return null}function v(){if(!i){i=new Array();d.each(l,function(x,y){i[i.length]={name:x,style:y}})}return i}function u(C,B){var D=s[B];if(D){if(D.customCellStyles){var z=D.customCellStyles[C];if(z){return l[z]}}if(D.cellStyle){if(D.cellAltStyle){var y=C%2;if(y==0){return l[D.cellStyle]}return l[D.cellAltStyle]}return l[D.cellStyle]}else{var x=v();if(x.length>0){var y=C%(x.length-1);var A=x[y+1].style;return A}}}return null}function t(A,y,z){var x=document.createElement("input");x.name=y;x.value=A;x.type="hidden";z.appendChild(x);return x}function h(z,x,y){var A=document.createElement("textarea");A.name=x;A.value=z;y.appendChild(A);return A}function k(y,B,A,x,C){var z=document.createElement("form");t(y,"filename",z);t(B,"format",z);h(A,"content",z);if(x==undefined||x==""){if(window&&window.location.toString().indexOf("jqwidgets.com")>=0){x="https://jqwidgets.com/export_server/dataexport.php"}else{x="http://jquerygrid.net/export_server/dataexport.php"}}z.action=x;z.method="post";if(C){z.acceptCharset=C}document.body.appendChild(z);return z}n=function(C,A,z,y,B,x){if(!(this instanceof c)){return new c(C,A,z,B,x)}w=C;s=A;l=z;this.exportTo=function(M,J,I,D){M=M.toString().toLowerCase();var F=e[M];if(typeof F==="undefined"){throw"You can't export to "+M+" format."}if(M==="pdf"&&D==undefined){var O=this.exportTo(M,J,M,"pdf");if(!d.jqx.pdfExport){d.jqx.pdfExport={orientation:"portrait",paperSize:"a4"}}var N=new b(d.jqx.pdfExport.orientation,"pt",d.jqx.pdfExport.paperSize);N.cellInitialize();var L=d(O).find("th");var K=d(O).find("tr");var P=0;N.setFontSize(13*72/96);var H=595;switch(d.jqx.pdfExport.paperSize){case"legal":var H=612;if(d.jqx.pdfExport.orientation!=="portrait"){H=1008}break;case"letter":var H=612;if(d.jqx.pdfExport.orientation!=="portrait"){H=792}break;case"a3":var H=841;if(d.jqx.pdfExport.orientation!=="portrait"){H=1190}break;case"a4":var H=595;if(d.jqx.pdfExport.orientation!=="portrait"){H=842}break;case"a5":var H=420;if(d.jqx.pdfExport.orientation!=="portrait"){H=595}break}H-=20;var G=0;var E=[];d.each(L,function(Q){var R=parseInt(this.style.width);if(isNaN(R)){R=25}var S=R*72/96;E[Q]=S;G+=S});if(L.length===0){d.each(K[0].cells,function(Q){var R=parseInt(this.style.width);if(isNaN(R)){R=H/K[0].cells.length}var S=R*72/96;E[Q]=S;G+=S})}if(G>H){d.each(E,function(Q){E[Q]=(E[Q]/G)*100;E[Q]=E[Q]*H/100})}d.each(L,function(R){var V=E[R];var U=25*72/96;var T=N.getTextDimensions(d(this).html());var S=d(this).html();if(T.w+3>V){var Q=N.splitTextToSize(S,V-3);var W=Q[0];if(W.length>3){S=W.substring(0,W.length-3)+"..."}else{S=W.substring(0,1)+"..."}var Q=N.splitTextToSize(S,V-3);var W=Q[0];if(W!=S){S=W}}N.cell(10,10,V,U,S,P)});P++;d.each(K,function(X){if(X===0){return true}var R=d(this).children();var S=R.length>L.length&&L.length>0;if(S){var aa=R.length-L.length;var ab="";var Z=E[0];var W=25*72/96;for(var T=0;T<=aa;T++){var Q=R[T].innerHTML;if(Q==="+"||Q==="-"){Q=Q+" "}if(Q==="&nbsp;"){Q="   "}ab+=Q}var V=N.getTextDimensions(ab);if(V.w+3>Z){var Y=N.splitTextToSize(ab,Z-3);var U=Y[0];if(U.length>3){ab=U.substring(0,U.length-3)+"..."}else{ab=U.substring(0,1)+"..."}var Y=N.splitTextToSize(ab,Z-3);var U=Y[0];if(U!=ab){ab=U}}N.cell(10,10,Z,W,ab,P);for(var T=aa+1;T<R.length;T++){var X=T-aa;var Z=E[X];var W=25*72/96;var ab=d(R[T]).html();var V=N.getTextDimensions(d(R[T]).html());if(V.w+3>Z){var Y=N.splitTextToSize(ab,Z-3);var U=Y[0];if(U.length>3){ab=U.substring(0,U.length-3)+"..."}else{ab=U.substring(0,1)+"..."}var Y=N.splitTextToSize(ab,Z-3);var U=Y[0];if(U!=ab){ab=U}}N.cell(10,10,Z,W,ab,P)}P++;return true}d.each(R,function(ad){var ah=E[ad];var ag=25*72/96;var af=d(this).html();var ae=N.getTextDimensions(d(this).html());if(ae.w+3>ah){var ac=N.splitTextToSize(af,ah-3);var ai=ac[0];if(ai.length>3){af=ai.substring(0,ai.length-3)+"..."}else{af=ai.substring(0,1)+"..."}var ac=N.splitTextToSize(af,ah-3);var ai=ac[0];if(ai!=af){af=ai}}N.cell(10,10,ah,ag,af,P)});P++});if(d.jqx.browser.msie&&d.jqx.browser.version<10){throw new Error("PDF export requires a browser with HTML5 support");return}return N}return f(F,w,s,l,J,I,D)};this.exportToFile=function(N,D,Q,H,K){if(N==="pdf"){var P=this.exportTo(N,K,N,D);if(!d.jqx.pdfExport){d.jqx.pdfExport={orientation:"portrait",paperSize:"a4"}}var O=new b(d.jqx.pdfExport.orientation,"pt",d.jqx.pdfExport.paperSize);if(H=="utf-8"||H=="UTF-8"){O.setFont("courier","normal")}O.cellInitialize();var M=d(P).find("th");var L=d(P).find("tr");var R=0;O.setFontSize(13*72/96);var I=595;switch(d.jqx.pdfExport.paperSize){case"legal":var I=612;if(d.jqx.pdfExport.orientation!=="portrait"){I=1008}break;case"letter":var I=612;if(d.jqx.pdfExport.orientation!=="portrait"){I=792}break;case"a3":var I=841;if(d.jqx.pdfExport.orientation!=="portrait"){I=1190}break;case"a4":var I=595;if(d.jqx.pdfExport.orientation!=="portrait"){I=842}break;case"a5":var I=420;if(d.jqx.pdfExport.orientation!=="portrait"){I=595}break}I-=20;var G=0;var E=[];d.each(M,function(S){var T=parseInt(this.style.width);if(isNaN(T)){T=25}var U=T*72/96;E[S]=U;G+=U});if(M.length===0){d.each(L[0].cells,function(S){var T=parseInt(this.style.width);if(isNaN(T)){T=I/L[0].cells.length}var U=T*72/96;E[S]=U;G+=U})}if(G>I){d.each(E,function(S){E[S]=(E[S]/G)*100;E[S]=E[S]*I/100})}d.each(M,function(T){var X=E[T];var W=25*72/96;var V=O.getTextDimensions(d(this).html());var U=d(this).html();if(V.w+3>X){var S=O.splitTextToSize(U,X-3);var Y=S[0];if(Y.length>3){U=Y.substring(0,Y.length-3)+"..."}else{U=Y.substring(0,1)+"..."}var S=O.splitTextToSize(U,X-3);var Y=S[0];if(Y!=U){U=Y}}O.cell(10,10,X,W,U,R)});R++;d.each(L,function(Z){if(Z===0){return true}var T=d(this).children();var U=T.length>M.length&&M.length>0;if(U){var ac=T.length-M.length;var ad="";var ab=E[0];var Y=25*72/96;for(var V=0;V<=ac;V++){var S=T[V].innerHTML;if(S==="+"||S==="-"){S=S+" "}if(S==="&nbsp;"){S="   "}ad+=S}var X=O.getTextDimensions(ad);if(X.w+3>ab){var aa=O.splitTextToSize(ad,ab-3);var W=aa[0];if(W.length>3){ad=W.substring(0,W.length-3)+"..."}else{ad=W.substring(0,1)+"..."}var aa=O.splitTextToSize(ad,ab-3);var W=aa[0];if(W!=ad){ad=W}}O.cell(10,10,ab,Y,ad,R);for(var V=ac+1;V<T.length;V++){var Z=V-ac;var ab=E[Z];var Y=25*72/96;var ad=d(T[V]).html();if(ad==="&nbsp;"){ad="   "}var X=O.getTextDimensions(d(T[V]).html());if(X.w+3>ab){var aa=O.splitTextToSize(ad,ab-3);var W=aa[0];if(W.length>3){ad=W.substring(0,W.length-3)+"..."}else{ad=W.substring(0,1)+"..."}var aa=O.splitTextToSize(ad,ab-3);var W=aa[0];if(W!=ad){ad=W}}O.cell(10,10,ab,Y,ad,R)}R++;return true}d.each(T,function(af){var aj=E[af];var ai=25*72/96;var ah=d(this).html();if(ah==="&nbsp;"){ah="   "}var ag=O.getTextDimensions(d(this).html());if(ag.w+3>aj){var ae=O.splitTextToSize(ah,aj-3);var ak=ae[0];if(ak.length>3){ah=ak.substring(0,ak.length-3)+"..."}else{ah=ak.substring(0,1)+"..."}var ae=O.splitTextToSize(ah,aj-3);var ak=ae[0];if(ak!=ah){ah=ak}}O.cell(10,10,aj,ai,ah,R)});R++});if(d.jqx.browser.msie&&d.jqx.browser.version<10){throw new Error("PDF export requires a browser with HTML5 support");return}O.save(D+".pdf");return}var J=this.exportTo(N,K,N,D),F=k(D,N,J,Q,H);F.submit();document.body.removeChild(F)};this.exportToLocalFile=function(H,E,F,D){var G=this.exportTo(H,F,D);document.location.href="data:application/octet-stream;filename="+E+","+encodeURIComponent(G)}};n.extend=function(x,y){if(y instanceof d.jqx.dataAdapter.DataExportModuleBase){e[x]=y}else{throw"The module "+x+" is not instance of DataExportModuleBase."}};return n}());d.jqx.dataAdapter.ArrayExporter=c})(jqxBaseFramework);(function(d){var c=function(){this.formatData=function(h,g,e,j){if(g==="date"){var f="";if(typeof h==="string"){f=d.jqx.dataFormat.tryparsedate(h);h=f}if(h===""||h===null){return""}f=d.jqx.dataFormat.formatdate(h,e,j);if((f&&f.toString()=="NaN")||f==null){return""}h=f}else{if(g==="number"||g==="float"||g==="int"||g=="integer"){if(h===""||h===null){return""}if(!isNaN(new Number(h))){var i=d.jqx.dataFormat.formatnumber(h,e,j);if(i.toString()=="NaN"){return""}else{h=i}}}else{h=h}}if(h===null){return""}return h};this.getFormat=function(h){var e=h?h.formatString:"";var g=h?h.localization:"";var f="string";f=h?h.type:"string";if(f=="number"||f=="float"){if(!e){e="f2"}}if(f=="int"||f=="integer"){if(!e){e="n0"}}if(f=="date"){if(!e){e="d"}}return{type:f,formatString:e,localization:g}};this.beginFile=function(){throw"Not implemented!"};this.beginHeader=function(){throw"Not implemented!"};this.appendHeaderCell=function(){throw"Not implemented!"};this.endHeader=function(){throw"Not implemented!"};this.beginBody=function(){throw"Not implemented!"};this.beginRow=function(){throw"Not implemented!"};this.beginRows=function(){throw"Not implemented!"};this.endRows=function(){throw"Not implemented!"};this.appendBodyCell=function(){throw"Not implemented!"};this.endRow=function(){throw"Not implemented!"};this.endBody=function(){throw"Not implemented!"};this.endFile=function(){throw"Not implemented!"};this.getFile=function(){throw"Not implemented!"}};d.jqx.dataAdapter.DataExportModuleBase=c})(jqxBaseFramework);(function(f){var e=function(l){var g,j,i;var n=0;var k=this;this.beginFile=function(){g=""};this.beginHeader=function(){};this.appendHeaderCell=function(s,t,r,o,p){if(r){if(r.level!=undefined){if(p<r.maxLevel){return}else{if(p===r.maxLevel){if(o){m(s.text)}for(var q=0;q<r.maxLevel;q++){m("")}return}}}}i=o;if(o){m(s.text)}};this.endHeader=function(){this.endRow()};this.beginBody=function(){n=0};this.beginRow=function(){if((n>0)||(n==0&&i)){g+="\n"}n++};this.appendBodyCell=function(s,o,r,t,p){if(r){if(r.maxLevel!=undefined){if(p===r.maxLevel){m(s,o);for(var q=0;q<r.maxLevel-t.level-1;q++){m("",o)}return}}}m(s,o)};this.endRow=function(){g=g.substring(0,g.length-1)};this.endBody=function(){};this.endFile=function(){};this.getFile=function(){return g};function h(o,q){if(q){var p=k.getFormat(q);o=k.formatData(o,p.type,p.formatString,p.localization)}o='"'+o+'"';return o}function m(o,p){o=h(o,p);g+=o+l}};e.prototype=new f.jqx.dataAdapter.DataExportModuleBase();var c=function(){};c.prototype=new e(",");var d=function(){};d.prototype=new e("\t");f.jqx.dataAdapter.ArrayExporter.extend("csv",new c());f.jqx.dataAdapter.ArrayExporter.extend("tsv",new d())})(jqxBaseFramework);(function(f){var c=function(){var k=false;var i;var j;var l=0;this.setPDF=function(){k=true};this.beginFile=function(m){if(k||m==undefined){i='<table style="empty-cells: show;" cellspacing="0" cellpadding="2">'}else{i='<html>\n\t<head>\n\t\t<title></title>\n\t\t<meta http-equiv=Content-type content="text/html; charset=UTF-8">\n\t</head>\n\t<body>\n\t\t<table style="empty-cells: show;" cellspacing="0" cellpadding="2">'}};this.beginHeader=function(){if(k){i+="\n\t<thead><tr>"}else{i+="\n\t\t\t<thead>"}};this.appendHeaderCell=function(o,p,n,m){j=m;if(!m){return}if(k){i+='\n\t\t\t\t<th style="'+h(n)+'">'+o.text+"</th>"}else{if(n.disabled){return}if(n.merge){if(o.width){i+="\n\t\t\t\t<th colspan="+(1+n.merge)+' style="width: '+o.width+"px; "+h(n)+'">'+o.text+"</th>"}else{i+="\n\t\t\t\t<th colspan="+(1+n.merge)+' style="'+h(n)+'">'+o.text+"</th>"}}else{if(o.width){i+='\n\t\t\t\t<th style="width: '+o.width+"px; "+h(n)+'">'+o.text+"</th>"}else{i+='\n\t\t\t\t<th style="'+h(n)+'">'+o.text+"</th>"}}}};this.endHeader=function(){if(k){i+="\n\t</tr></thead>"}else{i+="\n\t\t\t</thead>"}};this.beginBody=function(){if(k){i+="\n\t<tbody>"}else{i+="\n\t\t\t<tbody>"}l=0};this.beginRow=function(){if(k){i+="\n\t<tr>"}else{i+="\n\t\t\t\t<tr>"}l++};this.appendBodyCell=function(n,p,m){var o=this.getFormat(p);if(n===""){n="&nbsp;"}if(k){if(l==1&&!j){i+='\n\t\t\t\t\t<td style="'+h(m)+' border-top-width: 1px;">'+this.formatData(n,o.type,o.formatString,o.localization)+"</td>"}else{i+='\n\t\t\t\t\t<td style="'+h(m)+'">'+this.formatData(n,o.type,o.formatString,o.localization)+"</td>"}}else{if(m.merge){if(l==1&&!j){i+="\n\t\t\t\t\t<td colspan="+(1+m.merge)+' style="'+h(m)+' border-top-width: 1px;">'+this.formatData(n,o.type,o.formatString,o.localization)+"</td>"}else{i+="\n\t\t\t\t\t<td colspan="+(1+m.merge)+' style="'+h(m)+'">'+this.formatData(n,o.type,o.formatString,o.localization)+"</td>"}}else{if(l==1&&!j){i+='\n\t\t\t\t\t<td style="'+h(m)+' border-top-width: 1px;">'+this.formatData(n,o.type,o.formatString,o.localization)+"</td>"}else{i+='\n\t\t\t\t\t<td style="'+h(m)+'">'+this.formatData(n,o.type,o.formatString,o.localization)+"</td>"}}}};this.endRow=function(){if(k){i+="\n\t</tr>"}else{i+="\n\t\t\t\t</tr>"}};this.endBody=function(){if(k){i+="\n\t</tbody>"}else{i+="\n\t\t\t</tbody>"}};this.endFile=function(m){if(k||m==undefined){i+="\n</table>"}else{i+="\n\t\t</table>\n\t</body>\n</html>\n"}};this.getFile=function(){return i};function h(o){var m="";for(var n in o){if(o.hasOwnProperty(n)){if(k&&n=="font-size"){o[n]="100%"}m+=n+":"+o[n]+";"}}return m}};c.prototype=new f.jqx.dataAdapter.DataExportModuleBase();var g=function(){};g.prototype=new c();var e=function(){};e.prototype=new c();var d=new e();f.jqx.dataAdapter.ArrayExporter.extend("html",new g());f.jqx.dataAdapter.ArrayExporter.extend("pdf",d)})(jqxBaseFramework);(function(d){var c=function(){var j,n,f,k,e,l,o={style:"",stylesMap:{font:{color:"Color","font-family":"FontName","font-style":"Italic","font-weight":"Bold"},interior:{"background-color":"Color",background:"Color"},alignment:{left:"Left",center:"Center",right:"Right"}},startStyle:function(r){this.style+='\n\t\t<Style ss:ID="'+r+'" ss:Name="'+r+'">'},buildAlignment:function(s){if(s["text-align"]){var t=this.stylesMap.alignment[s["text-align"]];if(!t){t="Left"}var r='\n\t\t\t<Alignment ss:Vertical="Bottom" ss:Horizontal="'+t+'"/>';this.style+=r}},buildBorder:function(u){if(u["border-color"]){var t="\n\t\t\t<Borders>";var w='\n\t\t\t\t<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="'+u["border-color"]+'"/>';var r='\n\t\t\t\t<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="'+u["border-color"]+'"/>';var s='\n\t\t\t\t<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="'+u["border-color"]+'"/>';var v='\n\t\t\t\t<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="'+u["border-color"]+'"/>';t+=w;t+=r;t+=s;t+=v;t+="\n\t\t\t</Borders>";this.style+=t}},buildFont:function(s){var t=this.stylesMap.font,r="\n\t\t\t<Font ";for(var u in t){if(typeof s[u]!=="undefined"){if(u==="font-style"&&s[u].toString().toLowerCase()==="italic"){r+='ss:Italic="1" '}else{if(u==="font-weight"&&s[u].toString().toLowerCase()==="bold"){r+='ss:Bold="1" '}else{if(u==="color"){r+="ss:"+t[u]+'="'+s[u]+'" '}}}}}r+="/>";this.style+=r},buildInterior:function(s){var t=this.stylesMap.interior,v="\n\t\t\t<Interior ";var r=false;for(var u in t){if(typeof s[u]!=="undefined"){v+="ss:"+t[u]+'="'+s[u]+'" ';r=true}}if(r){v+='ss:Pattern="Solid"'}v+="/>";this.style+=v},buildFormat:function(s){if(s.dataType=="number"||s.dataType=="float"||s.dataType=="int"||s.dataType=="integer"){var r=s.formatString;if(r==""||r.indexOf("n")!=-1||r.indexOf("N")!=-1){this.style+='\n\t\t\t<NumberFormat ss:Format="0"/>'}else{if(r=="f"||r=="F"||r=="D"||r.indexOf("d")!=-1){this.style+='\n\t\t\t<NumberFormat ss:Format="#,##0.00_);[Red](#,##0.00)"/>'}else{if(r.indexOf("p")!=-1||r.indexOf("P")!=-1){this.style+='\n\t\t\t<NumberFormat ss:Format="Percent"/>'}else{if(r.indexOf("c")!=-1||r.indexOf("C")!=-1){if(s.currencysymbol&&parseInt(s.currencysymbol.charCodeAt(0))==8364){this.style+='\n\t\t\t<NumberFormat ss:Format="Euro Currency"/>'}else{this.style+='\n\t\t\t<NumberFormat ss:Format="Currency"/>'}}}}}}else{if(s.dataType=="date"){this.style+='\n\t\t\t<NumberFormat ss:Format="Short Date"/>'}}},closeStyle:function(){this.style+="\n\t\t</Style>"},toString:function(){var r=this.style;this.style="";return r}};this.beginFile=function(){e={};l=0;j='<?xml version="1.0"?>\n\t<?mso-application progid="Excel.Sheet"?> \n\t<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" \n\txmlns:o="urn:schemas-microsoft-com:office:office" \n\txmlns:x="urn:schemas-microsoft-com:office:excel" \n\txmlns:ss="urn:schemas-microsoft-com:office:spreadsheet" \n\txmlns:html="http://www.w3.org/TR/REC-html40"> \n\t<DocumentProperties xmlns="urn:schemas-microsoft-com:office:office"> \n\t<Version>12.00</Version> \n\t</DocumentProperties> \n\t<ExcelWorkbook xmlns="urn:schemas-microsoft-com:office:excel"> \n\t<WindowHeight>8130</WindowHeight> \n\t<WindowWidth>15135</WindowWidth> \n\t<WindowTopX>120</WindowTopX> \n\t<WindowTopY>45</WindowTopY> \n\t<ProtectStructure>False</ProtectStructure> \n\t<ProtectWindows>False</ProtectWindows> \n\t</ExcelWorkbook> \n\t<Styles>'};this.beginHeader=function(){n='\n\t<Worksheet ss:Name="Sheet1">\n\t\t<Table>';f=[];k=[]};this.appendHeaderCell=function(t,u,s){var r=t.width!=undefined?t.width:t.text.length*10;n+='\n\t\t\t<Column ss:Width="'+r+'"/>';f.push(t);k.push(s)};this.endHeader=function(r){if(r){this.beginRow();for(var s=0;s<f.length;s+=1){if(k[s].disabled){continue}i.call(this,f[s]["text"],null,k[s])}this.endRow()}};this.beginBody=function(){};this.beginRow=function(s){if(s!=undefined){n+="\n\t\t\t";for(var r=0;r<s;r++){n+="\t"}n+="<Row>";return}n+="\n\t\t\t<Row>"};this.beginRows=function(r){n+="\n\t\t\t\t<Rows>"};this.appendBodyCell=function(t,r,s,u){i.call(this,t,r,s,u)};this.endRow=function(s){if(s!=undefined){n+="\n\t\t\t";for(var r=0;r<s;r++){n+="\t"}n+="</Row>";return}n+="\n\t\t\t</Row>"};this.endRows=function(s){if(s!=undefined){n+="\n\t\t\t";for(var r=0;r<s;r++){n+="\t"}n+="</Rows>";return}};this.endBody=function(){n+="\n\t\t</Table>"};this.endFile=function(){n+="\n\t</Worksheet>\n</Workbook>";j+="\n\t</Styles>"};this.getFile=function(){return j+n};function i(v,y,u,x){var t="String";var w=this.getFormat(y);if(v!=null&&v.toString().substring(0,3)=="_AG"){v=v.toString().substring(3);t="String"}else{if(w.type=="date"){var s=v;v=this.formatData(v,w.type,w.formatString,w.localization);if(v===null||v===""){v="";t="String"}else{v=s.toISOString();t="DateTime"}}if(w.type=="string"){if(v===null||v===undefined){v=""}else{if(v.toString().indexOf("&")>=0){v=v.toString().replace(/&/g,"&amp;")}if(v.toString().indexOf(">")>=0){v=v.toString().replace(/>/g,"&gt;")}if(v.toString().indexOf("<")>=0){v=v.toString().replace(/</g,"&lt;")}if(v.toString().indexOf('"')>=0){v=v.toString().replace(/"/g,"&quot;")}if(v.toString().indexOf("'")>=0){v=v.toString().replace(/'/g,"&apos;")}}}if(u.dataType=="number"||u.dataType=="float"||u.dataType=="int"||u.dataType=="integer"){t="Number";v=parseFloat(v);if(v===null||isNaN(v)||v===""){v="";t="String"}if(v&&t!="String"&&v!=""){if(y&&y.formatString&&y.formatString.indexOf("p")>=0){v=v/100}}u.currencysymbol=y.localization.currencysymbol}}var r=h(u);if(u.merge){n+='\n\t\t\t\t<Cell ss:MergeAcross="'+u.merge+'" ss:StyleID="'+r+'"><Data ss:Type="'+t+'">'+v+"</Data></Cell>"}else{n+='\n\t\t\t\t<Cell ss:StyleID="'+r+'"><Data ss:Type="'+t+'">'+v+"</Data></Cell>"}}function p(){l+=1;return"xls-style-"+l}function m(t){for(var r in e){if(q(t,e[r])&&q(e[r],t)){return r}}return undefined}function q(u,r){var t=true;for(var s in u){if(u[s]!==r[s]){t=false}}return t}function g(s,r){o.startStyle(s);o.buildAlignment(r);o.buildBorder(r);o.buildFont(r);o.buildInterior(r);o.buildFormat(r);o.closeStyle();j+=o.toString()}function h(r){if(!r){return""}var s=m(r);if(typeof s==="undefined"){s=p();e[s]=r;g(s,r)}return s}};c.prototype=new d.jqx.dataAdapter.DataExportModuleBase();d.jqx.dataAdapter.ArrayExporter.extend("xls",new c())})(jqxBaseFramework);(function(d){var c=function(){var g,e,f;this.beginFile=function(){g='<?xml version="1.0" encoding="UTF-8" ?>';g+="\n<table>"};this.beginHeader=function(){e=[]};this.appendHeaderCell=function(h,i){e.push(i)};this.endHeader=function(){};this.beginBody=function(i,h){};this.beginRow=function(k){var j=this;if(!j){j=window.jqx}if(k!=undefined){if(j.hierarchy){g+="\n\t";for(var h=0;h<k;h++){g+="\t\t"}g+="<row>";f=0;return}}g+="\n\t<row>";f=0};this.beginRows=function(j){if(j!=undefined){g+="\n\t\t";for(var h=0;h<j;h++){g+="\t\t"}g+="<rows>";f=0;return}g+="\n\t\t<rows>"};this.appendBodyCell=function(k,p,h,q,l,o){var m=this;if(!m){m=window.jqx}var n=this.getFormat(p);k=this.formatData(k,n.type,n.formatString,n.localization);if(n.type=="string"){if(k.toString().indexOf("&")>=0){k=k.toString().replace(/&/g,"&amp;")}if(k.toString().indexOf(">")>=0){k=k.toString().replace(/>/g,"&gt;")}if(k.toString().indexOf("<")>=0){k=k.toString().replace(/</g,"&lt;")}if(k.toString().indexOf('"')>=0){k=k.toString().replace(/"/g,"&quot;")}if(k.toString().indexOf("'")>=0){k=k.toString().replace(/'/g,"&apos;")}}if(q.level!=undefined){if(m.hierarchy){g+="\n\t\t";for(var j=0;j<q.level;j++){g+="\t\t"}if(o===undefined){g+="<"+e[f]+">"+k+"</"+e[f]+">"}else{g+="<"+o+">"+k+"</"+o+">"}}else{if(o!=undefined){g+="\n\t\t<"+o+">"+k+"</"+o+">"}else{g+="\n\t\t<"+e[f]+">"+k+"</"+e[f]+">"}}}else{g+="\n\t\t<"+e[f]+">"+k+"</"+e[f]+">"}f++};this.endRow=function(k){var j=this;if(!j){j=window.jqx}if(k!=undefined){if(j.hierarchy){g+="\n\t";for(var h=0;h<k;h++){g+="\t\t"}g+="</row>";f=0;return}}g+="\n\t</row>";f=0};this.endRows=function(j){if(j!=undefined){g+="\n\t\t";for(var h=0;h<j;h++){g+="\t\t"}g+="</rows>";f=0;return}g+="\n\t\t</rows>"};this.endBody=function(){};this.endFile=function(){g+="\n</table>"};this.getFile=function(){return g}};c.prototype=new d.jqx.dataAdapter.DataExportModuleBase();d.jqx.dataAdapter.ArrayExporter.extend("xml",new c())})(jqxBaseFramework);(function(f){var l=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,n={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};function c(p){return'"'+p.replace(l,function(q){var r=n[q];return typeof r==="string"?r:"\\u"+("0000"+q.charCodeAt(0).toString(16)).slice(-4)})+'"'}function d(p){return p<10?"0"+p:p}function g(q){var p;if(isFinite(q.valueOf())){p=q.getUTCFullYear()+"-"+d(q.getUTCMonth()+1)+"-"+d(q.getUTCDate())+"T"+d(q.getUTCHours())+":"+d(q.getUTCMinutes())+":"+d(q.getUTCSeconds())+'Z"'}else{p="null"}return p}function i(s){var p=s.length,q=[],r;for(r=0;r<p;r++){q.push(j(r,s)||"null")}return"["+q.join(",")+"]"}function o(s){var q=[],r,p;for(r in s){if(Object.prototype.hasOwnProperty.call(s,r)){p=j(r,s);if(p){q.push(c(r)+":"+p)}}}return"{"+q.join(",")+"}"}function k(p){switch(Object.prototype.toString.call(p)){case"[object Date]":return g(p);case"[object Array]":return i(p)}return o(p)}function m(q,p){switch(p){case"string":return c(q);case"number":case"float":case"integer":case"int":return isFinite(q)?q:"null";case"boolean":return q}return"null"}function j(q,p){var s=p[q],r=typeof s;if(s&&typeof s==="object"&&typeof s.toJSON==="function"){s=s.toJSON(q);r=typeof s}if(/(number|float|int|integer|string|boolean)/.test(r)||(!s&&r==="object")){return m(s,r)}else{return k(s)}}function h(p){if(window.JSON&&typeof window.JSON.stringify==="function"){return window.JSON.stringify(p)}return j("",{"":p})}var e=function(){var s=this;this.prepareData=function(v,x){if(x){var w=s.getFormat(x);v=s.formatData(v,w.type,w.formatString,w.localization)}return v};var p,r,t,q=[],u=0;this.beginFile=function(){r=[]};this.beginHeader=function(){};this.appendHeaderCell=function(v){};this.endHeader=function(){};this.beginBody=function(w,v){};this.beginRow=function(){var v=this;if(!v){v=window.jqx}if(v.hierarchy||window.jqx.hierarchy){q[u]={}}else{t={}}};this.beginRows=function(){q[u].rows=[];u++;q[u]={}};this.endRows=function(){u--};this.appendBodyCell=function(x,v){var w=this;if(!w){w=window.jqx}var y=this.prepareData(x,v);if(w.hierarchy||window.jqx.hierarchy){q[u][v.text]=y}else{t[v.text]=y}};this.endRow=function(){var v=this;if(!v){v=window.jqx}if(v.hierarchy||window.jqx.hierarchy){if(u==0){r.push(q[u])}else{q[u-1].rows.push(q[u])}}else{r.push(t)}};this.endBody=function(){};this.endFile=function(){p=h(r)};this.getFile=function(){return p}};e.prototype=new f.jqx.dataAdapter.DataExportModuleBase();f.jqx.dataAdapter.ArrayExporter.extend("json",new e())})(jqxBaseFramework);var b=window.jqxPdfDataExport=(function(){if(typeof btoa==="undefined"){window.btoa=function(o){var k="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",u=k.split(""),j,h,g,t,s,q,p,v,n=0,w=0,m="",l=[],f;do{j=o.charCodeAt(n++);h=o.charCodeAt(n++);g=o.charCodeAt(n++);v=j<<16|h<<8|g;t=v>>18&63;s=v>>12&63;q=v>>6&63;p=v&63;l[w++]=u[t]+u[s]+u[q]+u[p]}while(n<o.length);m=l.join("");f=o.length%3;return(f?m.slice(0,f-3):m)+"===".slice(f||3)}}if(typeof atob==="undefined"){window.atob=function(n){var j="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",h,g,f,r,q,p,o,s,m=0,t=0,k="",l=[];if(!n){return n}n+="";do{r=j.indexOf(n.charAt(m++));q=j.indexOf(n.charAt(m++));p=j.indexOf(n.charAt(m++));o=j.indexOf(n.charAt(m++));s=r<<18|q<<12|p<<6|o;h=s>>16&255;g=s>>8&255;f=s&255;if(p===64){l[t++]=String.fromCharCode(h)}else{if(o===64){l[t++]=String.fromCharCode(h,g)}else{l[t++]=String.fromCharCode(h,g,f)}}}while(m<n.length);k=l.join("");return k}}var e=typeof Object.keys==="function"?function(f){return Object.keys(f).length}:function(f){var g=0,h;for(h in f){if(f.hasOwnProperty(h)){g++}}return g},c=function(f){this.topics={};this.context=f;this.publish=function(k,o){if(this.topics[k]){var m=this.topics[k],q=[],p,j,g,h,n=function(){};o=Array.prototype.slice.call(arguments,1);for(j=0,g=m.length;j<g;j++){h=m[j];p=h[0];if(h[1]){h[0]=n;q.push(j)}p.apply(this.context,o)}for(j=0,g=q.length;j<g;j++){m.splice(q[j],1)}}};this.subscribe=function(g,i,h){if(!this.topics[g]){this.topics[g]=[[i,h]]}else{this.topics[g].push([i,h])}return{topic:g,callback:i}};this.unsubscribe=function(k){if(this.topics[k.topic]){var h=this.topics[k.topic],j,g;for(j=0,g=h.length;j<g;j++){if(h[j][0]===k.callback){h.splice(j,1)}}}}};function d(G,ag,O,X){if(typeof G==="undefined"){G="p"}else{G=G.toString().toLowerCase()}if(typeof ag==="undefined"){ag="mm"}if(typeof O==="undefined"){O="a4"}if(typeof X==="undefined"&&typeof zpipe==="undefined"){X=false}var av=O.toString().toLowerCase(),aq="0.9.0rc2",v=[],H=0,ax=X,W="1.3",P={a3:[841.89,1190.55],a4:[595.28,841.89],a5:[420.94,595.28],letter:[612,792],legal:[612,1008]},af="0 g",J="0 G",j=0,h=[],p=2,x=false,F=[],ak={},S={},al=16,f,B=0.200025,D,E,am,Q={title:"",subject:"",author:"",keywords:"",creator:""},T=0,V=0,R={},I=new c(R),ah,at,r=function(i){return i.toFixed(2)},q=function(i){return i.toFixed(3)},C=function(i){var k=(i).toFixed(0);if(i<10){return"0"+k}else{return k}},t=function(i){var k=(i).toFixed(0);if(k.length<10){return new Array(11-k.length).join("0")+k}else{return k}},ad=function(i){if(x){h[j].push(i)}else{v.push(i);H+=i.length+1}},y=function(){p++;F[p]=H;ad(p+" 0 obj");return p},M=function(i){ad("stream");ad(i);ad("endstream")},ao,U,ar,an,ac=function(){ao=E*am;U=D*am;var aD,aC,k,ay,az,aB,aA;for(aD=1;aD<=j;aD++){y();ad("<</Type /Page");ad("/Parent 1 0 R");ad("/Resources 2 0 R");ad("/Contents "+(p+1)+" 0 R>>");ad("endobj");aC=h[aD].join("\n");y();if(ax){k=[];for(az=0;az<aC.length;++az){k[az]=aC.charCodeAt(az)}aA=adler32cs.from(aC);aB=new Deflater(6);aB.append(new Uint8Array(k));aC=aB.flush();k=[new Uint8Array([120,156]),new Uint8Array(aC),new Uint8Array([aA&255,(aA>>8)&255,(aA>>16)&255,(aA>>24)&255])];aC="";for(az in k){if(k.hasOwnProperty(az)){aC+=String.fromCharCode.apply(null,k[az])}}ad("<</Length "+aC.length+" /Filter [/FlateDecode]>>")}else{ad("<</Length "+aC.length+">>")}M(aC);ad("endobj")}F[1]=H;ad("1 0 obj");ad("<</Type /Pages");ar="/Kids [";for(az=0;az<j;az++){ar+=(3+2*az)+" 0 R "}ad(ar+"]");ad("/Count "+j);ad("/MediaBox [0 0 "+r(ao)+" "+r(U)+"]");ad(">>");ad("endobj")},Z=function(i){i.objectNumber=y();ad("<</BaseFont/"+i.PostScriptName+"/Type/Font");if(typeof i.encoding==="string"){ad("/Encoding/"+i.encoding)}ad("/Subtype/Type1>>");ad("endobj")},L=function(){var i;for(i in ak){if(ak.hasOwnProperty(i)){Z(ak[i])}}},N=function(){I.publish("putXobjectDict")},z=function(){ad("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]");ad("/Font <<");var i;for(i in ak){if(ak.hasOwnProperty(i)){ad("/"+i+" "+ak[i].objectNumber+" 0 R")}}ad(">>");ad("/XObject <<");N();ad(">>")},l=function(){L();I.publish("putResources");F[2]=H;ad("2 0 obj");ad("<<");z();ad(">>");ad("endobj");I.publish("postPutResources")},o=function(ay,k,az){var i;if(S[k]===i){S[k]={}}S[k][az]=ay},aw={},w=function(i,az,aB,ay){var aA="F"+(e(ak)+1).toString(10),k=ak[aA]={id:aA,PostScriptName:i,fontName:az,fontStyle:aB,encoding:ay,metadata:{}};o(aA,az,aB);I.publish("addFont",k);return aA},g=function(){var k="helvetica",aI="times",aK="courier",aH="normal",aG="bold",aF="italic",aJ="bolditalic",az="StandardEncoding",aC=[["Helvetica",k,aH],["Helvetica-Bold",k,aG],["Helvetica-Oblique",k,aF],["Helvetica-BoldOblique",k,aJ],["Courier",aK,aH],["Courier-Bold",aK,aG],["Courier-Oblique",aK,aF],["Courier-BoldOblique",aK,aJ],["Times-Roman",aI,aH],["Times-Bold",aI,aG],["Times-Italic",aI,aF],["Times-BoldItalic",aI,aJ]],aE,aA,aD,aB;for(aE=0,aA=aC.length;aE<aA;aE++){var ay=az;aD=w(aC[aE][0],aC[aE][1],aC[aE][2],ay);aB=aC[aE][0].split("-");o(aD,aB[0],aB[1]||"")}I.publish("addFonts",{fonts:ak,dictionary:S})},u=function(aI,az){var aE,aC,aB,aA,aG,aF,ay,aH,k,aD;if(az===aB){az={}}aA=az.sourceEncoding?aA:"Unicode";aF=az.outputEncoding;if((az.autoencode||aF)&&ak[f].metadata&&ak[f].metadata[aA]&&ak[f].metadata[aA].encoding){aG=ak[f].metadata[aA].encoding;if(!aF&&ak[f].encoding){aF=ak[f].encoding}if(!aF&&aG.codePages){aF=aG.codePages[0]}if(typeof aF==="string"){aF=aG[aF]}if(aF){aH=false;ay=[];for(aE=0,aC=aI.length;aE<aC;aE++){k=aF[aI.charCodeAt(aE)];if(k){ay.push(String.fromCharCode(k))}else{ay.push(aI[aE])}if(ay[aE].charCodeAt(0)>>8){aH=true}}aI=ay.join("")}}aE=aI.length;while(aH===aB&&aE!==0){if(aI.charCodeAt(aE-1)>>8){aH=true}aE--}if(!aH){return aI}else{ay=az.noBOM?[]:[254,255];for(aE=0,aC=aI.length;aE<aC;aE++){k=aI.charCodeAt(aE);aD=k>>8;if(aD>>8){throw new Error("Character at position "+aE.toString(10)+" of string '"+aI+"' exceeds 16bits. Cannot be encoded into UCS-2 BE")}ay.push(aD);ay.push(k-(aD<<8))}return String.fromCharCode.apply(aB,ay)}},ab=function(k,i){return u(k,i).replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)")},aa=function(){ad("/Producer (pdfDataExport "+aq+")");if(Q.title){ad("/Title ("+ab(Q.title)+")")}if(Q.subject){ad("/Subject ("+ab(Q.subject)+")")}if(Q.author){ad("/Author ("+ab(Q.author)+")")}if(Q.keywords){ad("/Keywords ("+ab(Q.keywords)+")")}if(Q.creator){ad("/Creator ("+ab(Q.creator)+")")}var i=new Date();ad("/CreationDate (D:"+[i.getFullYear(),C(i.getMonth()+1),C(i.getDate()),C(i.getHours()),C(i.getMinutes()),C(i.getSeconds())].join("")+")")},Y=function(){ad("/Type /Catalog");ad("/Pages 1 0 R");ad("/OpenAction [3 0 R /FitH null]");ad("/PageLayout /OneColumn");I.publish("putCatalog")},n=function(){ad("/Size "+(p+1));ad("/Root "+p+" 0 R");ad("/Info "+(p-1)+" 0 R")},au=function(){j++;x=true;h[j]=[]},aj=function(){au();ad(r(B*am)+" w");ad(J);if(T!==0){ad(T.toString(10)+" J")}if(V!==0){ad(V.toString(10)+" j")}I.publish("addPage",{pageNumber:j})},A=function(ay,aA){var i,k;if(ay===k){ay=ak[f].fontName}if(aA===k){aA=ak[f].fontStyle}try{i=S[ay][aA]}catch(az){i=k}if(!i){throw new Error("Unable to look up font label for font '"+ay+"', '"+aA+"'. Refer to getFontList() for available fonts.")}return i},s=function(){x=false;v=[];F=[];ad("%PDF-"+W);ac();l();y();ad("<<");aa();ad(">>");ad("endobj");y();ad("<<");Y();ad(">>");ad("endobj");var ay=H,k;ad("xref");ad("0 "+(p+1));ad("0000000000 65535 f ");for(k=1;k<=p;k++){ad(t(F[k])+" 00000 n ")}ad("trailer");ad("<<");n();ad(">>");ad("startxref");ad(ay);ad("%%EOF");x=true;return v.join("\n")},ae=function(i){var k="S";if(i==="F"){k="f"}else{if(i==="FD"||i==="DF"){k="B"}}return k},K=function(aB,ay){var aA,aD,aC,aE,az,k;switch(aB){case aA:return s();case"save":if(navigator.getUserMedia){if(window.URL===undefined){return R.output("dataurlnewwindow")}else{if(window.URL.createObjectURL===undefined){return R.output("dataurlnewwindow")}}}aD=s();aC=aD.length;aE=new Uint8Array(new ArrayBuffer(aC));for(az=0;az<aC;az++){aE[az]=aD.charCodeAt(az)}k=new Blob([aE],{type:"application/pdf"});a(k,ay);break;case"datauristring":case"dataurlstring":return"data:application/pdf;base64,"+btoa(s());case"datauri":case"dataurl":document.location.href="data:application/pdf;base64,"+btoa(s());break;case"dataurlnewwindow":window.open("data:application/pdf;base64,"+btoa(s()));break;default:throw new Error('Output type "'+aB+'" is not supported.')}};if(ag==="pt"){am=1}else{if(ag==="mm"){am=72/25.4}else{if(ag==="cm"){am=72/2.54}else{if(ag==="in"){am=72}else{throw ("Invalid unit: "+ag)}}}}if(P.hasOwnProperty(av)){D=P[av][1]/am;E=P[av][0]/am}else{try{D=O[1];E=O[0]}catch(ap){throw ("Invalid format: "+O)}}if(G==="p"||G==="portrait"){G="p";if(E>D){ah=E;E=D;D=ah}}else{if(G==="l"||G==="landscape"){G="l";if(D>E){ah=E;E=D;D=ah}}else{throw ("Invalid orientation: "+G)}}R.internal={pdfEscape:ab,getStyle:ae,getFont:function(){return ak[A.apply(R,arguments)]},getFontSize:function(){return al},btoa:btoa,write:function(i,az,ay,k){ad(arguments.length===1?i:Array.prototype.join.call(arguments," "))},getCoordinateString:function(i){return r(i*am)},getVerticalCoordinateString:function(i){return r((D-i)*am)},collections:{},newObject:y,putStream:M,events:I,scaleFactor:am,pageSize:{width:E,height:D},output:function(k,i){return K(k,i)}};R.addPage=function(){aj();return this};var ai=["","0","00","000","0000"];var m=function(aC,ay){var az=["FEFF"];for(var aB=0,k=aC.length,aA;aB<k;++aB){aA=aC.charCodeAt(aB).toString(16).toUpperCase();az.push(ai[4-aA.length],aA)}return az.join("")};R.text16=function(aH,aG,aE,ay){var az,aC,aB,aF,k,aD,aA;if(typeof aH==="number"){aC=aE;aB=aH;aF=aG;aH=aC;aG=aB;aE=aF}if(typeof aH==="string"&&aH.match(/[\n\r]/)){aH=aH.split(/\r\n|\r|\n/g)}if(typeof ay==="undefined"){ay={noBOM:true,autoencode:true}}else{if(ay.noBOM===az){ay.noBOM=true}if(ay.autoencode===az){ay.autoencode=true}}ay.autoencode=false;if(typeof aH==="string"){aD=m(aH,ay)}else{if(aH instanceof Array){k=aH.concat();for(aA=k.length-1;aA!==-1;aA--){k[aA]=m(k[aA],ay)}aD=k.join("> Tj\nT* <")}else{throw new Error('Type of text must be string or Array. "'+aH+'" is not recognized.')}}ad("BT\n/"+f+" "+al+" Tf\n"+al+" TL\n"+af+"\n"+r(aG*am)+" "+r((D-aE)*am)+" Td\n<"+aD+"> Tj\nET");return this};R.text=function(aH,aG,aE,ay){var az,aC,aB,aF,k,aD,aA;if(typeof aH==="number"){aC=aE;aB=aH;aF=aG;aH=aC;aG=aB;aE=aF}if(typeof aH==="string"&&aH.match(/[\n\r]/)){aH=aH.split(/\r\n|\r|\n/g)}if(typeof ay==="undefined"){ay={noBOM:true,autoencode:true}}else{if(ay.noBOM===az){ay.noBOM=true}if(ay.autoencode===az){ay.autoencode=true}}if(typeof aH==="string"){aD=ab(aH,ay)}else{if(aH instanceof Array){k=aH.concat();for(aA=k.length-1;aA!==-1;aA--){k[aA]=ab(k[aA],ay)}aD=k.join(") Tj\nT* (")}else{throw new Error('Type of text must be string or Array. "'+aH+'" is not recognized.')}}ad("BT\n/"+f+" "+al+" Tf\n"+al+" TL\n"+af+"\n"+r(aG*am)+" "+r((D-aE)*am)+" Td\n("+aD+") Tj\nET");return this};R.line=function(k,az,i,ay){ad(r(k*am)+" "+r((D-az)*am)+" m "+r(i*am)+" "+r((D-ay)*am)+" l S");return this};R.lines=function(k,aH,aG,aQ,aM){var aA,aO,aE,aF,aD,aC,aK,aI,aP,aN,aB,aL,az,aJ,ay;if(typeof k==="number"){aO=aG;aE=k;aF=aH;k=aO;aH=aE;aG=aF}aM=ae(aM);aQ=aQ===aA?[1,1]:aQ;ad(q(aH*am)+" "+q((D-aG)*am)+" m ");aD=aQ[0];aC=aQ[1];aI=k.length;aJ=aH;ay=aG;for(aK=0;aK<aI;aK++){aP=k[aK];if(aP.length===2){aJ=aP[0]*aD+aJ;ay=aP[1]*aC+ay;ad(q(aJ*am)+" "+q((D-ay)*am)+" l")}else{aN=aP[0]*aD+aJ;aB=aP[1]*aC+ay;aL=aP[2]*aD+aJ;az=aP[3]*aC+ay;aJ=aP[4]*aD+aJ;ay=aP[5]*aC+ay;ad(q(aN*am)+" "+q((D-aB)*am)+" "+q(aL*am)+" "+q((D-az)*am)+" "+q(aJ*am)+" "+q((D-ay)*am)+" c")}}ad(aM);return this};R.rect=function(i,aB,k,az,ay){var aA=ae(ay);ad([r(i*am),r((D-aB)*am),r(k*am),r(-az*am),"re",aA].join(" "));return this};R.triangle=function(az,aC,k,aA,i,ay,aB){this.lines([[k-az,aA-aC],[i-k,ay-aA],[az-i,aC-ay]],az,aC,[1,1],aB);return this};R.roundedRect=function(k,aD,ay,aA,aC,aB,az){var i=4/3*(Math.SQRT2-1);this.lines([[(ay-2*aC),0],[(aC*i),0,aC,aB-(aB*i),aC,aB],[0,(aA-2*aB)],[0,(aB*i),-(aC*i),aB,-aC,aB],[(-ay+2*aC),0],[-(aC*i),0,-aC,-(aB*i),-aC,-aB],[0,(-aA+2*aB)],[0,-(aB*i),(aC*i),-aB,aC,-aB]],k+aC,aD,[1,1],az);return this};R.ellipse=function(i,aD,aB,aA,k){var aC=ae(k),az=4/3*(Math.SQRT2-1)*aB,ay=4/3*(Math.SQRT2-1)*aA;ad([r((i+aB)*am),r((D-aD)*am),"m",r((i+aB)*am),r((D-(aD-ay))*am),r((i+az)*am),r((D-(aD-aA))*am),r(i*am),r((D-(aD-aA))*am),"c"].join(" "));ad([r((i-az)*am),r((D-(aD-aA))*am),r((i-aB)*am),r((D-(aD-ay))*am),r((i-aB)*am),r((D-aD)*am),"c"].join(" "));ad([r((i-aB)*am),r((D-(aD+ay))*am),r((i-az)*am),r((D-(aD+aA))*am),r(i*am),r((D-(aD+aA))*am),"c"].join(" "));ad([r((i+az)*am),r((D-(aD+aA))*am),r((i+aB)*am),r((D-(aD+ay))*am),r((i+aB)*am),r((D-aD)*am),"c",aC].join(" "));return this};R.circle=function(i,az,ay,k){return this.ellipse(i,az,ay,ay,k)};R.setProperties=function(i){var k;for(k in Q){if(Q.hasOwnProperty(k)&&i[k]){Q[k]=i[k]}}return this};R.setFontSize=function(i){al=i;return this};R.setFont=function(i,k){f=A(i,k);return this};R.setFontStyle=R.setFontType=function(k){var i;f=A(i,k);return this};R.getFontList=function(){var ay={},k,az,i;for(k in S){if(S.hasOwnProperty(k)){ay[k]=i=[];for(az in S[k]){if(S[k].hasOwnProperty(az)){i.push(az)}}}}return ay};R.setLineWidth=function(i){ad((i*am).toFixed(2)+" w");return this};R.setDrawColor=function(aA,az,ay,i){var k;if(az===undefined||(i===undefined&&aA===az===ay)){if(typeof aA==="string"){k=aA+" G"}else{k=r(aA/255)+" G"}}else{if(i===undefined){if(typeof aA==="string"){k=[aA,az,ay,"RG"].join(" ")}else{k=[r(aA/255),r(az/255),r(ay/255),"RG"].join(" ")}}else{if(typeof aA==="string"){k=[aA,az,ay,i,"K"].join(" ")}else{k=[r(aA),r(az),r(ay),r(i),"K"].join(" ")}}}ad(k);return this};R.setFillColor=function(aA,az,ay,i){var k;if(az===undefined||(i===undefined&&aA===az===ay)){if(typeof aA==="string"){k=aA+" g"}else{k=r(aA/255)+" g"}}else{if(i===undefined){if(typeof aA==="string"){k=[aA,az,ay,"rg"].join(" ")}else{k=[r(aA/255),r(az/255),r(ay/255),"rg"].join(" ")}}else{if(typeof aA==="string"){k=[aA,az,ay,i,"k"].join(" ")}else{k=[r(aA),r(az),r(ay),r(i),"k"].join(" ")}}}ad(k);return this};R.setTextColor=function(ay,k,i){if((ay===0&&k===0&&i===0)||(typeof k==="undefined")){af=q(ay/255)+" g"}else{af=[q(ay/255),q(k/255),q(i/255),"rg"].join(" ")}return this};R.CapJoinStyles={0:0,butt:0,but:0,bevel:0,1:1,round:1,rounded:1,circle:1,2:2,projecting:2,project:2,square:2,milter:2};R.setLineCap=function(i){var k=this.CapJoinStyles[i];if(k===undefined){throw new Error("Line cap style of '"+i+"' is not recognized. See or extend .CapJoinStyles property for valid styles")}T=k;ad(k.toString(10)+" J");return this};R.setLineJoin=function(i){var k=this.CapJoinStyles[i];if(k===undefined){throw new Error("Line join style of '"+i+"' is not recognized. See or extend .CapJoinStyles property for valid styles")}V=k;ad(k.toString(10)+" j");return this};R.output=K;R.save=function(i){R.output("save",i)};for(at in d.API){if(d.API.hasOwnProperty(at)){if(at==="events"&&d.API.events.length){(function(az,aB){var aA,ay,k;for(k=aB.length-1;k!==-1;k--){aA=aB[k][0];ay=aB[k][1];az.subscribe.apply(az,[aA].concat(typeof ay==="function"?[ay]:ay))}}(I,d.API.events))}else{R[at]=d.API[at]}}}g();f="F1";aj();I.publish("initialized");return R}d.API={events:[]};return d}());(function(k){var d=0,o=0,c,q,j,e={x:undefined,y:undefined,w:undefined,h:undefined,ln:undefined},h=1,g=false,f=function(r,v,s,t,u){e={x:r,y:v,w:s,h:t,ln:u}},m=function(){return e},l=function(r){d=r},n=function(){return d},p=function(r){o=r},i=function(r){return o};k.getTextDimensions=function(r){c=this.internal.getFont().fontName;q=this.internal.getFontSize();j=this.internal.getFont().fontStyle;var u=0.264583*72/25.4,s,t;t=document.createElement("font");t.id="pdfDataExportCell";t.style.fontStyle=j;t.style.fontName=c;t.style.fontSize=q+"pt";t.innerHTML=r;document.body.appendChild(t);s={w:(t.offsetWidth+1)*u,h:(t.offsetHeight+1)*u};document.body.removeChild(t);return s};k.cellAddPage=function(){this.addPage();f(undefined,undefined,undefined,undefined,undefined);g=true;h+=1;p(1)};k.cellInitialize=function(){d=0;e={x:undefined,y:undefined,w:undefined,h:undefined,ln:undefined};h=1;g=false;p(0)};k.cell=function(B,A,C,u,r,z){this.lnMod=this.lnMod===undefined?0:this.lnMod;if(this.printingHeaderRow!==true&&this.lnMod!==0){z=z+this.lnMod}if((((z*u)+A+(u*2))/h)>=this.internal.pageSize.height&&h===1&&!g){this.cellAddPage();if(this.printHeaders&&this.tableHeaderRow){this.printHeaderRow(z);this.lnMod+=1;z+=1}if(n()===0){l(Math.round((this.internal.pageSize.height-(u*2))/u))}}else{if(g&&m().ln!==z&&i()===n()){this.cellAddPage();if(this.printHeaders&&this.tableHeaderRow){this.printHeaderRow(z);this.lnMod+=1;z+=1}}}var D=m(),t=this.getTextDimensions(r),v=1;if(D.x!==undefined&&D.ln===z){B=D.x+D.w}if(D.y!==undefined&&D.y===A){A=D.y}if(D.h!==undefined&&D.h===u){u=D.h}if(D.ln!==undefined&&D.ln===z){z=D.ln;v=0}if(g){A=u*(i()+v)}else{A=(A+(u*Math.abs(n()*h-z-n())))}this.rect(B,A,C,u);var s=/[а-яА-ЯЁё]/.test(r);if(s){this.text16(r,B+3,A+u-3)}else{this.text(r,B+3,A+u-3)}p(i()+v);f(B,A,C,u,z);return this};k.getKeys=(typeof Object.keys==="function")?function(r){if(!r){return[]}return Object.keys(r)}:function(r){var s=[],t;for(t in r){if(r.hasOwnProperty(t)){s.push(t)}}return s};k.arrayMax=function(w,v){var r=w[0],s,u,t;for(s=0,u=w.length;s<u;s+=1){t=w[s];if(v){if(v(r,t)===-1){r=t}}else{if(t>r){r=t}}}return r};k.table=function(L,t,K){var x=[],r=[],F,B,D,z,G,A,I={},C={},w,u,J=[],E,H=[],v,s,y;this.lnMod=0;if(K){B=K.autoSize||false;D=this.printHeaders=K.printHeaders||true;z=K.autoStretch||true}if(!L){throw"No data for PDF table"}if(t===undefined||(t===null)){x=this.getKeys(L[0])}else{if(t[0]&&(typeof t[0]!=="string")){for(G=0,A=t.length;G<A;G+=1){F=t[G];x.push(F.name);r.push(F.prompt)}}else{x=t}}if(K.autoSize){y=function(M){return M[F]};for(G=0,A=x.length;G<A;G+=1){F=x[G];I[F]=L.map(y);J.push(this.getTextDimensions(r[G]||F).w);u=I[F];for(E=0,A=u.length;E<A;E+=1){w=u[E];J.push(this.getTextDimensions(w).w)}C[F]=k.arrayMax(J)}}if(K.printHeaders){for(G=0,A=x.length;G<A;G+=1){F=x[G];H.push([10,10,C[F],25,String(r.length?r[G]:F)])}this.setTableHeaderRow(H);this.printHeaderRow(1)}for(G=0,A=L.length;G<A;G+=1){v=L[G];for(E=0,s=x.length;E<s;E+=1){F=x[E];this.cell(10,10,C[F],25,String(v[F]),G+2)}}return this};k.setTableHeaderRow=function(r){this.tableHeaderRow=r};k.printHeaderRow=function(r){if(!this.tableHeaderRow){throw"Property tableHeaderRow does not exist."}var s,u,t,v;this.printingHeaderRow=true;for(t=0,v=this.tableHeaderRow.length;t<v;t+=1){s=this.tableHeaderRow[t];u=[].concat(s);this.cell.apply(this,u.concat(r))}this.printingHeaderRow=false}}(b.API));(function(e){var d=e.getCharWidthsArray=function(u,w){if(!w){w={}}var k=w.widths?w.widths:this.internal.getFont().metadata.Unicode.widths,t=k.fof?k.fof:1,p=w.kerning?w.kerning:this.internal.getFont().metadata.Unicode.kerning,r=p.fof?p.fof:1;var o,m,q,n,s=0,v=k[0]||t,j=[];for(o=0,m=u.length;o<m;o++){q=u.charCodeAt(o);j.push((k[q]||v)/t+(p[q]&&p[q][s]||0)/r);s=q}return j};var g=function(l){var k=l.length,j=0;while(k){k--;j+=l[k]}return j};var c=e.getStringUnitWidth=function(j,i){return g(d.call(this,j,i))};var f=function(j,p,k,m){var s=[];var o=0,n=j.length,r=0;while(o!==n&&r+p[o]<k){r+=p[o];o++}s.push(j.slice(0,o));var q=o;r=0;while(o!==n){if(r+p[o]>m){s.push(j.slice(q,o));r=0;q=o}r+=p[o];o++}if(q!==o){s.push(j.slice(q,o))}return s};var h=function(u,n,x){if(!x){x={}}var v=d(" ",x)[0];var t=u.split(" ");var y=[],z=[y],k=x.textIndent||0,w=0,r=0,j,s;var q,o,p;for(q=0,o=t.length;q<o;q++){j=t[q];s=d(j,x);r=g(s);if(k+w+r>n){if(r>n){p=f(j,s,n-(k+w),n);y.push(p.shift());y=[p.pop()];while(p.length){z.push([p.shift()])}r=g(s.slice(j.length-y[0].length))}else{y=[j]}z.push(y);k=r;w=v}else{y.push(j);k+=w+r;w=v}}var m=[];for(q=0,o=z.length;q<o;q++){m.push(z[q].join(" "))}return m};e.splitTextToSize=function(s,o,t){if(!t){t={}}var k=t.fontSize||this.internal.getFontSize(),j=(function(l){var v={0:1},i={};if(!l.widths||!l.kerning){var w=this.internal.getFont(l.fontName,l.fontStyle),u="Unicode";if(w.metadata[u]){return{widths:w.metadata[u].widths||v,kerning:w.metadata[u].kerning||i}}}else{return{widths:l.widths,kerning:l.kerning}}return{widths:v,kerning:i}}).call(this,t);var r;if(s.match(/[\n\r]/)){r=s.split(/\r\n|\r|\n/g)}else{r=[s]}var m=1*this.internal.scaleFactor*o/k;j.textIndent=t.textIndent?t.textIndent*1*this.internal.scaleFactor/k:0;var q,p,n=[];for(q=0,p=r.length;q<p;q++){n=n.concat(h(r[q],m,j))}return n}})(b.API);(function(e){var f="addImage_";var h=function(o){var n,k;if(!o.charCodeAt(0)===255||!o.charCodeAt(1)===216||!o.charCodeAt(2)===255||!o.charCodeAt(3)===224||!o.charCodeAt(6)==="J".charCodeAt(0)||!o.charCodeAt(7)==="F".charCodeAt(0)||!o.charCodeAt(8)==="I".charCodeAt(0)||!o.charCodeAt(9)==="F".charCodeAt(0)||!o.charCodeAt(10)===0){throw new Error("getJpegSize requires a binary jpeg file")}var l=o.charCodeAt(4)*256+o.charCodeAt(5);var m=4,j=o.length;while(m<j){m+=l;if(o.charCodeAt(m)!==255){throw new Error("getJpegSize could not find the size of the image")}if(o.charCodeAt(m+1)===192){k=o.charCodeAt(m+5)*256+o.charCodeAt(m+6);n=o.charCodeAt(m+7)*256+o.charCodeAt(m+8);return[n,k]}else{m+=2;l=o.charCodeAt(m)*256+o.charCodeAt(m+1)}}},d=function(j){var o=this.internal.newObject(),k=this.internal.write,n=this.internal.putStream;j.n=o;k("<</Type /XObject");k("/Subtype /Image");k("/Width "+j.w);k("/Height "+j.h);if(j.cs==="Indexed"){k("/ColorSpace [/Indexed /DeviceRGB "+(j.pal.length/3-1)+" "+(o+1)+" 0 R]")}else{k("/ColorSpace /"+j.cs);if(j.cs==="DeviceCMYK"){k("/Decode [1 0 1 0 1 0 1 0]")}}k("/BitsPerComponent "+j.bpc);if("f" in j){k("/Filter /"+j.f)}if("dp" in j){k("/DecodeParms <<"+j.dp+">>")}if("trns" in j&&j.trns.constructor==Array){var m="";for(var l=0;l<j.trns.length;l++){m+=(j[m][l]+" "+j.trns[l]+" ");k("/Mask ["+m+"]")}}if("smask" in j){k("/SMask "+(o+1)+" 0 R")}k("/Length "+j.data.length+">>");n(j.data);k("endobj")},g=function(){var j=this.internal.collections[f+"images"];for(var k in j){d.call(this,j[k])}},c=function(){var j=this.internal.collections[f+"images"],k=this.internal.write,m;for(var l in j){m=j[l];k("/I"+m.i,m.n,"0","R")}};e.addImage=function(i,t,r,q,u,m){if(typeof i==="object"&&i.nodeType===1){var k=document.createElement("canvas");k.width=i.clientWidth;k.height=i.clientHeight;var v=k.getContext("2d");if(!v){throw ("addImage requires canvas to be supported by browser.")}v.drawImage(i,0,0,k.width,k.height);i=k.toDataURL("image/jpeg");t="JPEG"}if(t.toUpperCase()!=="JPEG"){throw new Error("addImage currently only supports format 'JPEG', not '"+t+"'")}var j,o=this.internal.collections[f+"images"],n=this.internal.getCoordinateString,p=this.internal.getVerticalCoordinateString;if(i.substring(0,23)==="data:image/jpeg;base64,"){i=atob(i.replace("data:image/jpeg;base64,",""))}if(o){j=Object.keys?Object.keys(o).length:(function(y){var w=0;for(var x in y){if(y.hasOwnProperty(x)){w++}}return w})(o)}else{j=0;this.internal.collections[f+"images"]=o={};this.internal.events.subscribe("putResources",g);this.internal.events.subscribe("putXobjectDict",c)}var s=h(i);var l={w:s[0],h:s[1],cs:"DeviceRGB",bpc:8,f:"DCTDecode",i:j,data:i};o[j]=l;if(!u&&!m){u=-96;m=-96}if(u<0){u=(-1)*l.w*72/u/this.internal.scaleFactor}if(m<0){m=(-1)*l.h*72/m/this.internal.scaleFactor}if(u===0){u=m*l.w/l.h}if(m===0){m=u*l.h/l.w}this.internal.write("q",n(u),"0 0",n(m),n(r),p(q+m),"cm /I"+l.i,"Do Q");return this}})(b.API);(function(c){var g=function(s){var y="0123456789abcdef",q="klmnopqrstuvwxyz",k={};for(var t=0;t<q.length;t++){k[q[t]]=y[t]}var r,o={},p=1,v,m=o,j=[],u,n="",w="",x,l=s.length-1,h;t=1;while(t!=l){h=s[t];t+=1;if(h=="'"){if(v){x=v.join("");v=r}else{v=[]}}else{if(v){v.push(h)}else{if(h=="{"){j.push([m,x]);m={};x=r}else{if(h=="}"){u=j.pop();u[0][u[1]]=m;x=r;m=u[0]}else{if(h=="-"){p=-1}else{if(x===r){if(k.hasOwnProperty(h)){n+=k[h];x=parseInt(n,16)*p;p=+1;n=""}else{n+=h}}else{if(k.hasOwnProperty(h)){w+=k[h];m[x]=parseInt(w,16)*p;p=+1;x=r;w=""}else{w+=h}}}}}}}}return o};var f={codePages:["WinAnsiEncoding"],WinAnsiEncoding:g("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}")},e={Unicode:{Courier:f,"Courier-Bold":f,"Courier-BoldOblique":f,"Courier-Oblique":f,Helvetica:f,"Helvetica-Bold":f,"Helvetica-BoldOblique":f,"Helvetica-Oblique":f,"Times-Roman":f,"Times-Bold":f,"Times-BoldItalic":f,"Times-Italic":f}},d={Unicode:{"Courier-Oblique":g("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-BoldItalic":g("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"),"Helvetica-Bold":g("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),Courier:g("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Courier-BoldOblique":g("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-Bold":g("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"),Helvetica:g("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"),"Helvetica-BoldOblique":g("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),"Courier-Bold":g("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-Italic":g("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"),"Times-Roman":g("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"),"Helvetica-Oblique":g("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}")}};c.events.push(["addFonts",function(k){var h,i,j,m,l="Unicode",n;for(i in k.fonts){if(k.fonts.hasOwnProperty(i)){h=k.fonts[i];j=d[l][h.PostScriptName];if(j){if(h.metadata[l]){m=h.metadata[l]}else{m=h.metadata[l]={}}m.widths=j.widths;m.kerning=j.kerning}n=e[l][h.PostScriptName];if(n){if(h.metadata[l]){m=h.metadata[l]}else{m=h.metadata[l]={}}m.encoding=n;if(n.codePages&&n.codePages.length){h.encoding=n.codePages[0]}}}}}])})(b.API);var a=window.jqxSaveAs=a||(navigator.msSaveBlob&&navigator.msSaveBlob.bind(navigator))||(function(j){var t=j.document,n=function(){return j.URL||j.webkitURL||j},g=j.URL||j.webkitURL||j,p=$("<a></a>")[0],i="download" in p,l=function(v){var u=t.createEvent("MouseEvents");u.initMouseEvent("click",true,false,j,0,0,0,0,0,false,false,false,false,0,null);return v.dispatchEvent(u)},q=j.webkitRequestFileSystem,r=j.requestFileSystem||q||j.mozRequestFileSystem,o=function(u){(j.setImmediate||j.setTimeout)(function(){throw u},0)},e="application/octet-stream",m=0,d=[],k=function(){var v=d.length;while(v--){var u=d[v];if(typeof u==="string"){g.revokeObjectURL(u)}else{u.remove()}}d.length=0},s=function(v,u,y){u=[].concat(u);var x=u.length;while(x--){var z=v["on"+u[x]];if(typeof z==="function"){try{z.call(v,y||v)}catch(w){o(w)}}}},h=function(v,w){var x=this,D=v.type,G=false,z,y,u=function(){var H=n().createObjectURL(v);d.push(H);return H},C=function(){s(x,"writestart progress write writeend".split(" "))},F=function(){if(G||!z){z=u(v)}if(y){y.location.href=z}x.readyState=x.DONE;C()},B=function(H){return function(){if(x.readyState!==x.DONE){return H.apply(this,arguments)}}},A={create:true,exclusive:false},E;x.readyState=x.INIT;if(!w){w="download"}if(i){z=u(v);p.href=z;p.download=w;if(l(p)){x.readyState=x.DONE;C();return}}if(j.chrome&&D&&D!==e){E=v.slice||v.webkitSlice;v=E.call(v,0,v.size,e);G=true}if(q&&w!=="download"){w+=".download"}if(D===e||q){y=j}else{y=j.open()}if(!r){F();return}m+=v.size;r(j.TEMPORARY,m,B(function(H){H.root.getDirectory("saved",A,B(function(I){var J=function(){I.getFile(w,A,B(function(K){K.createWriter(B(function(L){L.onwriteend=function(M){y.location.href=K.toURL();d.push(K);x.readyState=x.DONE;s(x,"writeend",M)};L.onerror=function(){var M=L.error;if(M.code!==M.ABORT_ERR){F()}};"writestart progress write abort".split(" ").forEach(function(M){L["on"+M]=x["on"+M]});L.write(v);x.abort=function(){L.abort();x.readyState=x.DONE};x.readyState=x.WRITING}),F)}),F)};I.getFile(w,{create:false},B(function(K){K.remove();J()}),B(function(K){if(K.code===K.NOT_FOUND_ERR){J()}else{F()}}))}),F)}),F)},f=h.prototype,c=function(u,v){return new h(u,v)};f.abort=function(){var u=this;u.readyState=u.DONE;s(u,"abort")};f.readyState=f.INIT=0;f.WRITING=1;f.DONE=2;f.error=f.onwritestart=f.onprogress=f.onwrite=f.onabort=f.onerror=f.onwriteend=null;if(j.addEventListener){j.addEventListener("unload",k,false)}return c}(self));(function(c){var d="pdfDataExport IE Below 9 Shim plugin";c.output=function(g,f){return this.internal.output(g,f);var e="Output.pdf";switch(g){case"datauristring":case"dataurlstring":case"datauri":case"dataurl":case"dataurlnewwindow":if(console){console.log(d+": Data URIs are not supported on IE6-9.")}break;case"save":e=f;break}}})(b.API)})();



/***/ }),

/***/ 2142:
/***/ (() => {

/*
jQWidgets v26.0.0 (2026-July)
Copyright (c) 2011-2026 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

(function(){if(typeof document==="undefined"){return}(function(i){if(!Array.prototype.find){Object.defineProperty(Array.prototype,"find",{value:function(H){if(this==null){throw TypeError('"this" is null or not defined')}var L=Object(this);var e=L.length>>>0;if(typeof H!=="function"){throw TypeError("predicate must be a function")}var I=arguments[1];var J=0;while(J<e){var K=L[J];if(H.call(I,K,J,L)){return K}J++}return undefined},configurable:true,writable:true})}i.jqx.observableArray=function(e,J){if(typeof(e)=="string"){e=i.parseJSON(e)}if(!Object.defineProperty||!(function(){try{Object.defineProperty({},"x",{});return true}catch(M){return false}}())){var L=Object.defineProperty;Object.defineProperty=function(O,P,N){if(L){try{return L(O,P,N)}catch(M){}}if(O!==Object(O)){throw TypeError("Object.defineProperty called on non-object")}if(Object.prototype.__defineGetter__&&("get" in N)){Object.prototype.__defineGetter__.call(O,P,N.get)}if(Object.prototype.__defineSetter__&&("set" in N)){Object.prototype.__defineSetter__.call(O,P,N.set)}if("value" in N){O[P]=N.value}else{if(!O[P]){O[P]=N}}return O}}if(!Array.prototype.forEach){Array.prototype.forEach=function(N){if(this===void 0||this===null){throw TypeError()}var Q=Object(this);var M=Q.length>>>0;if(typeof N!=="function"){throw TypeError()}var P=arguments[1],O;for(O=0;O<M;O++){if(O in Q){N.call(P,Q[O],O,Q)}}}}if(typeof Object.getOwnPropertyNames!=="function"){Object.getOwnPropertyNames=function(O){if(O!==Object(O)){throw TypeError("Object.getOwnPropertyNames called on non-object")}var M=[],N;for(N in O){if(Object.prototype.hasOwnProperty.call(O,N)){M.push(N)}}return M}}var I=this,H,K=[];I.notifier=null;I.name="observableArray";I.observing=true;I.changes=new Array();var J=J;I.observe=function(){I.observing=true;if(arguments.length==1){J=arguments[0]}};I.unobserve=function(){I.observing=false};I.toArray=function(){return K.slice(0)};I.toJSON=function(X,O){var U=K;if(O){U=O}var T=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,W={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};function M(Z){return'"'+Z.replace(T,function(aa){var ab=W[aa];return typeof ab==="string"?ab:"\\u"+("0000"+aa.charCodeAt(0).toString(16)).slice(-4)})+'"'}function N(Z){return Z<10?"0"+Z:Z}function P(aa){var Z;if(isFinite(aa.valueOf())){Z=aa.getUTCFullYear()+"-"+N(aa.getUTCMonth()+1)+"-"+N(aa.getUTCDate())+"T"+N(aa.getUTCHours())+":"+N(aa.getUTCMinutes())+":"+N(aa.getUTCSeconds())+'Z"'}else{Z="null"}return Z}function Q(ac){var Z=ac.length,aa=[],ab;for(ab=0;ab<Z;ab++){aa.push(R(ab,ac)||"null")}return"["+aa.join(",")+"]"}function Y(ac){var aa=[],ab,Z;for(ab in ac){if(Object.prototype.hasOwnProperty.call(ac,ab)){if(ab!=""&&X&&X.indexOf(ab)===-1){continue}Z=R(ab,ac);if(Z){aa.push(M(ab)+":"+Z)}}}return"{"+aa.join(",")+"}"}function S(Z){switch(Object.prototype.toString.call(Z)){case"[object Date]":return P(Z);case"[object Array]":return Q(Z)}return Y(Z)}function V(aa,Z){switch(Z){case"string":return M(aa);case"number":case"float":case"integer":case"int":return isFinite(aa)?aa:"null";case"boolean":return aa}return"null"}function R(aa,Z){var ac=Z[aa],ab=typeof ac;if(ac&&typeof ac==="object"&&typeof ac.toJSON==="function"){ac=ac.toJSON(aa);ab=typeof ac}if(/(number|float|int|integer|string|boolean)/.test(ab)||(!ac&&ab==="object")){return V(ac,ab)}else{return S(ac)}}if(!X&&window.JSON&&typeof window.JSON.stringify==="function"){return window.JSON.stringify(U)}return R("",{"":U})};I.defineIndexProperty=function(O){if(!(O in I)){var M=function(V,S,U,R){var T=V[S];var Q=T;var P=function(){return Q};var W=function(ab){T=ab;if(Q!==T){var aa=Q;Q=T;if(typeof H==="function"){var Y=K.indexOf(R);var Z="";var X=function(ad,ac){Object.getOwnPropertyNames(ad).forEach(function(ae){var af=i.type(ad[ae]);if(af=="array"||af=="object"){X(ad[ae],ac+"."+ae)}else{if(S===ae){Z=ac+"."+ae}}})};X(R,Y);H({object:I,type:"update",path:Z,index:Y,name:S,newValue:T,oldValue:aa})}}Q=T;return T};if(V[S]!=undefined&&S!="length"){if(Object.defineProperty){Object.defineProperty(V,S,{get:P,set:W})}else{if(Object.prototype.__defineGetter__&&Object.prototype.__defineSetter__){Object.prototype.__defineGetter__.call(V,S,P);Object.prototype.__defineSetter__.call(V,S,W)}}}};var N=function(S,R,P){var Q=i.type(S);if(/(number|float|int|integer|string|boolean)/.test(Q)){return}if(S===undefined){return}Object.getOwnPropertyNames(S).forEach(function(T){var U=i.type(S[T]);if(U=="array"||U=="object"){M(S,T,R+"."+T,P);N(S[T],R+"."+T,P)}else{M(S,T,R+"."+T,P)}})};Object.defineProperty(I,O,{configurable:true,enumerable:true,get:function(){return K[O]},set:function(Q){var P=K[O];if(I.toJSON(null,P)!=I.toJSON(null,Q)){K[O]=Q;if(typeof H==="function"){H({object:I,type:"update",path:O.toString(),index:O,name:"index",newValue:Q,oldValue:P})}N(Q,O,Q)}}});N(I[O],O,I[O])}};I.push=function(){var M;for(var N=0,O=arguments.length;N<O;N++){M=K.length;K.push(arguments[N]);I.defineIndexProperty(M);if(typeof H==="function"){H({object:I,type:"add",name:"length",index:M,newValue:K.length,oldValue:M})}}return K.length};I.pop=function(){if(~K.length){var M=K.length-1,N=K.pop();delete I[M];if(typeof H==="function"){H({object:I,type:"delete",name:"length",index:M,newValue:K.length,oldValue:M})}return N}};I.unshift=function(){var M=K.length;for(var N=0,O=arguments.length;N<O;N++){K.splice(N,0,arguments[N]);I.defineIndexProperty(K.length-1)}if(typeof H==="function"){H({object:I,type:"add",index:0,name:"length",newValue:K.length,oldValue:M})}return K.length};I.shift=function(){var M=K.length;if(~K.length){var N=K.shift();K.length===0&&delete I[M];if(typeof H==="function"){H({object:I,type:"delete",index:M,name:"length",newValue:K.length,oldValue:M})}return N}};I.slice=function(Q,N,P){var M=K.slice(Q,N);var O=new i.jqx.observableArray(M,P);return O};I.splice=function(Q,R,M){var P=[],U,T;Q=!~Q?K.length-Q:Q;R=(R==null?K.length-Q:R)||0;while(R--){U=K.splice(Q,1)[0];P.push(U);delete I[K.length];if(typeof H==="function"){H({object:I,type:"delete",index:Q,name:"length",newValue:-1,oldValue:Q})}}for(var N=2,S=arguments.length;N<S;N++){K.splice(Q,0,arguments[N]);this.defineIndexProperty(K.length-1);if(typeof H==="function"){H({object:I,type:"add",index:Q,name:"length",newValue:K.length-1,oldValue:Q})}Q++}var O=new i.jqx.observableArray(P,M);return O};Object.defineProperty(I,"length",{configurable:false,enumerable:true,get:function(){return K.length},set:function(M){var N=Number(M);if(N%1===0&&N>=0){if(N<K.length){I.splice(N)}else{if(N>K.length){I.push.apply(I,new Array(N-K.length))}}}else{throw new RangeError("Invalid array length")}return M}});i.jqx.observableArray.prototype.fromArray=function(O,N){var M=new i.jqx.observableArray(O,N);return M};i.jqx.observableArray.prototype.clone=function(){var M=new i.jqx.observableArray(K,J);M.observing=I.observing;M.changes=I.changes;M.notifier=I.notifier;return M};I.remove=function(N){if(N<0||N>=I.length){throw new Error("Invalid index : "+N)}if(I.hasOwnProperty(N)){var M=I[N];I[N]=undefined;K[N]=undefined;if(typeof H==="function"){H({object:I,type:"delete",index:N,name:"index",newValue:undefined,oldValue:M})}return true}return false};I.concat=function(N,P){var M=K.concat(N);var O=new i.jqx.observableArray(M,P);return O};Object.getOwnPropertyNames(Array.prototype).forEach(function(M){if(!(M in I)){var N=function(){var Q=I.observing;I.observing=false;var P=K[M];var O=P.apply(K,arguments);I.observing=Q;return O};Object.defineProperty(I,M,{configurable:false,enumerable:true,writeable:false,value:N})}});I.set=function(N,P){if(i.type(N)=="string"&&N.split(".").length>1){var M=N.split(".");var Q=I;for(var O=0;O<M.length;O++){if(O===0){if(M[O]>=I.length){throw new Error("Invalid Index: "+N)}}if(O<M.length-1){Q=Q[M[O]]}else{Q[M[O]]=P}}return true}if(N>=I.length){I.push(P)}else{I[N]=P}return true};I.get=function(M){return I[M]};if(e instanceof Array){I.push.apply(I,e)}H=function(){if(!I.observing){return}if(arguments&&arguments[0]){I.changes.push(arguments[0])}if(J){J.apply(I,arguments)}if(I.notifier){I.notifier.apply(I,arguments)}};return I};i.jqx.formatDate=function(H,J,I){var e=i.jqx.dataFormat.formatdate(H,J,I);return e};i.jqx.formatNumber=function(H,J,I){var e=i.jqx.dataFormat.formatnumber(H,J,I);return e};i.jqx.dataAdapter=function(J,e){if(J!=undefined){if(J.dataFields!==undefined){J.datafields=J.dataFields}if(J.dataType!==undefined){J.datatype=J.dataType}if(J.localData!==undefined){J.localdata=J.localData}if(J.sortColumn!==undefined){J.sortcolumn=J.sortColumn}if(J.sortDirection!==undefined){J.sortdirection=J.sortDirection}if(J.sortColumns!==undefined){J.sortcolumns=J.sortColumns}if(J.sortDirections!==undefined){J.sortdirections=J.sortDirections}if(J.sortOrder!==undefined){J.sortdirection=J.sortOrder}if(J.formatData!==undefined){J.formatdata=J.formatData}if(J.processData!==undefined){J.processdata=J.processData}if(J.pageSize!==undefined){J.pagesize=J.pageSize}if(J.pageNum!==undefined){J.pagenum=J.pageNum}if(J.updateRow!==undefined){J.updaterow=J.updateRow}if(J.addRow!==undefined){J.addrow=J.addRow}if(J.deleteRow!==undefined){J.deleterow=J.deleteRow}if(J.contentType!==undefined){J.contenttype=J.contentType}if(J.totalRecords!=undefined){J.totalrecords=J.totalRecords}if(J.loadError!=undefined){J.loadError=J.loadError}if(J.sortComparer!=undefined){J.sortcomparer=J.sortComparer}}this._source=J;this._options=e||{};if(J.beforeLoadComplete!=undefined){this._options.beforeLoadComplete=this._source.beforeLoadComplete}if(J.downloadComplete!=undefined){this._options.downloadComplete=this._source.downloadComplete}if(J.loadComplete!=undefined){this._options.loadComplete=this._source.loadComplete}if(J.autoBind!=undefined){this._options.downloadComplete=this._source.autoBind}if(J.formatData!=undefined){this._options.formatData=this._source.formatData}if(J.loadError!=undefined){this._options.loadError=this._source.loadError}if(J.beforeSend!=undefined){this._options.beforeSend=this._source.beforeSend}if(J.contentType!=undefined){this._options.contentType=this._source.contentType}if(J.async!=undefined){this._options.async=this._source.async}if(J.loadServerData!=undefined){this._options.loadServerData=this._source.loadServerData}if(J.uniqueDataFields!=undefined){this._options.uniqueDataFields=this._source.uniqueDataFields}this.records=new Array();this._downloadComplete=new Array();this._bindingUpdate=new Array();if(J!=undefined&&J.localdata!=null&&typeof J.localdata=="function"){var I=J.localdata();if(I!=null){J._localdata=J.localdata;var H=this;if(J._localdata.subscribe){H._oldlocaldata=[];J._localdata.subscribe(function(K){var L=function(M){if(i.isArray(M)){return i.makeArray(L(i(M)))}return i.extend(true,{},M)};if(H.suspendKO==false||H.suspendKO==undefined||H._oldlocaldata.length==0){H._oldlocaldata=L(K)}},J._localdata,"beforeChange");J._localdata.subscribe(function(L){if(H.suspendKO==false||H.suspendKO==undefined){var K="";H._oldrecords=H.records;if(H._oldlocaldata.length==0){J.localdata=J._localdata()}if(H._oldlocaldata.length==0){K="change"}else{if(L){if(H._oldlocaldata.length==L.length){K="update"}if(H._oldlocaldata.length>L.length){K="remove"}if(H._oldlocaldata.length<L.length){K="add"}}}H.dataBind(null,K)}},J._localdata,"change");H._knockoutdatasource=true}J.localdata=I}}if(this._options.autoBind==true){this.dataBind()}};i.jqx.dataAdapter.prototype={getrecords:function(){return this.records},beginUpdate:function(){this.isUpdating=true},endUpdate:function(e){this.isUpdating=false;if(e!=false){if(this._changedrecords&&this._changedrecords.length>0){this.callBindingUpdate("update");this._changedrecords=[]}else{this.dataBind(null,"")}}},formatDate:function(H,J,I){var e=i.jqx.dataFormat.formatdate(H,J,I);return e},formatNumber:function(H,J,I){var e=i.jqx.dataFormat.formatnumber(H,J,I);return e},dataBind:function(R,aa){if(this.isUpdating==true){return}var W=this._source;if(!W){return}if(W.generatedfields){W.datafields=null;W.generatedfields=null}i.jqx.dataFormat.datescache=new Array();if(W.dataFields!=null){W.datafields=W.dataFields}if(W.recordstartindex==undefined){W.recordstartindex=0}if(W.recordendindex==undefined){W.recordendindex=0}if(W.loadallrecords==undefined){W.loadallrecords=true}if(W.root==undefined){W.root=""}if(W.record==undefined){W.record=""}if(W.sort!=undefined){this.sort=W.sort}if(W.filter!=undefined){this.filter=W.filter}else{this.filter=null}if(W.sortcolumn!=undefined){this.sortcolumn=W.sortcolumn}if(W.sortdirection!=undefined){this.sortdirection=W.sortdirection}if(W.sortcolumns!=undefined){this.sortcolumns=W.sortcolumns}if(W.sortdirections!=undefined){this.sortdirections=W.sortdirections}if(W.sortcomparer!=undefined){this.sortcomparer=W.sortcomparer}this.records=new Array();var K=this._options||{};this.virtualmode=K.virtualmode!=undefined?K.virtualmode:false;this.totalrecords=K.totalrecords!=undefined?K.totalrecords:0;this.pageable=K.pageable!=undefined?K.pageable:false;this.pagesize=K.pagesize!=undefined?K.pagesize:0;this.pagenum=K.pagenum!=undefined?K.pagenum:0;this.cachedrecords=K.cachedrecords!=undefined?K.cachedrecords:new Array();this.originaldata=new Array();this.recordids=new Array();this.updaterow=K.updaterow!=undefined?K.updaterow:null;this.addrow=K.addrow!=undefined?K.addrow:null;this.deleterow=K.deleterow!=undefined?K.deleterow:null;this.cache=K.cache!=undefined?K.cache:false;this.unboundmode=false;if(W.formatdata!=undefined){K.formatData=W.formatdata}if(W.data!=undefined){if(K.data==undefined){K.data={}}i.extend(K.data,W.data)}if(W.mapChar!=undefined){W.mapchar=W.mapChar}if(W.mapchar!=undefined){this.mapChar=W.mapchar?W.mapchar:">"}else{this.mapChar=K.mapChar?K.mapChar:">"}if(K.unboundmode||W.unboundmode){this.unboundmode=K.unboundmode||W.unboundmode}if(W.cache!=undefined){this.cache=W.cache}if(this.koSubscriptions){for(var ac=0;ac<this.koSubscriptions.length;ac++){this.koSubscriptions[ac].dispose()}}this.koSubscriptions=new Array();if(this.pagenum<0){this.pagenum=0}var ah=this;var Q=W.datatype;if(W.datatype==="csv"||W.datatype==="tab"||W.datatype==="tsv"||W.datatype=="text"){Q="text"}var N=K.async!=undefined?K.async:true;if(W.async!=undefined){N=W.async}if(Q==="xlsx"&&W.url){W.localdata=[];Q="array";if(window.jqxDataSource){var ai=new window.jqxDataSource({dataSource:W.url,async:false,dataFields:W.datafields});ai.notify(function(){W.url=null;W.localdata=ai.boundSource;W.datatype="array";ah.dataBind()})}}switch(Q){case"local":case"array":case"observablearray":case"observableArray":default:if(W.localdata==undefined&&W.length){W.localdata=new Array();for(var Z=0;Z<W.length;Z++){W.localdata[W.localdata.length]=W[Z];W[Z].uid=Z}}if(W.beforeprocessing&&i.isFunction(W.beforeprocessing)){W.beforeprocessing(W.localdata)}var M=W.localdata.length;this.totalrecords=this.virtualmode?(W.totalrecords||M):M;if(this.unboundmode){this.totalrecords=this.unboundmode?(W.totalrecords||M):M;var ad=W.datafields?W.datafields.length:0;if(ad>0){for(var Z=0;Z<this.totalrecords;Z++){var I={};for(var Y=0;Y<ad;Y++){I[W.datafields[Y].name]=""}I.uid=Z;W.localdata[W.localdata.length]=I}}}if(this.totalrecords==undefined){this.totalrecords=0}var ad=W.datafields?W.datafields.length:0;var H=function(ao,aq){var ap={};for(var am=0;am<aq;am++){var al=W.datafields?W.datafields[am]:{};var ar="";if(undefined==al||al==null){continue}if(al.map){if(i.isFunction(al.map)){ar=al.map(ao)}else{var aj=al.map.split(ah.mapChar);if(aj.length>0){var an=ao;for(var ak=0;ak<aj.length;ak++){if(!an){continue}an=an[aj[ak]]}ar=an}else{ar=ao[al.map]}}if(ar!=undefined&&ar!=null){ar=ar.toString()}else{if(ar==undefined&&ar!=null){ar=""}}}var at=false;if(ar==""){at=true;ar=ao[al.name];if(ar!=undefined&&ar!=null){if(W._localdata&&ar.subscribe){ar=ar()}else{if(al.type!="array"){if(al.type==="date"){if(ar&&ar instanceof Date){ar=ar}}else{ar=ar.toString()}}}}}if(ar=="[object Object]"&&al.map&&at){ar=""}ar=ah.getvaluebytype(ar,al);if(al.displayname!=undefined){ap[al.displayname]=ar}else{ap[al.name]=ar}}return ap};if(W._localdata){this._changedrecords=[];this.records=new Array();var ag=W._localdata();i.each(ag,function(am,ap){if(typeof ap==="string"){ah.records.push(ap)}else{var ak={};var ao=0;var an=this;i.each(this,function(ay,aD){var at=null;var aE="string";var aC=ay;if(ad>0){var aG=false;var aB=false;for(var ax=0;ax<ad;ax++){var aw=W.datafields[ax];if(aw!=undefined&&(aw.name==ay)){aG=true;at=aw.map;aE=aw.type;aC=aw.name;break}else{if(aw!=undefined&&aw.map&&(aw.map.indexOf(ay)>=0)){aG=true;at=aw.map;aE=aw.type;aC=aw.name;aB=true;var aF=an[ay];if(at!=null){var ar=at.split(ah.mapChar);if(ar.length>0){var az=an;for(var au=0;au<ar.length;au++){az=az[ar[au]]}aF=az}else{aF=an[at]}}if(aE!="string"){aF=ah.getvaluebytype(aF,{type:aE})}ak[aC]=aF;if(ak[aC]!=undefined){ao+=ak[aC].toString().length+ak[aC].toString().substr(0,1)}}}}if(!aG){return true}if(aB){return true}}var av=i.isFunction(an[ay]);if(av){var aF=an[ay]();if(aE!="string"){aF=ah.getvaluebytype(aF,{type:aE})}ak[ay]=aF;if(an[ay].subscribe){var aA=am;ah.koSubscriptions[ah.koSubscriptions.length]=an[ay].subscribe(function(aI){var aH=aA;ak[ay]=aI;var aJ={index:aH,oldrecord:ak,record:ak};ah._changedrecords.push(aJ);if(ah.isUpdating){return}ah.callBindingUpdate("update");ah._changedrecords=[];return false})}}else{var aF=an[ay];if(at!=null){var ar=at.split(ah.mapChar);if(ar.length>0){var az=an;for(var au=0;au<ar.length;au++){az=az[ar[au]]}aF=az}else{aF=an[at]}}if(aE!="string"){aF=ah.getvaluebytype(aF,{type:aE})}ak[aC]=aF;if(ak[aC]!=undefined){ao+=ak[aC].toString().length+ak[aC].toString().substr(0,1)}}});var al=ah.getid(W.id,an,am);ak.uid=al;ah.records.push(ak);ak._koindex=ao;if(ah._oldrecords){var aj=ah.records.length-1;if(aa=="update"){if(ah._oldrecords[aj]._koindex!=ao){var aq={index:aj,oldrecord:ah._oldrecords[aj],record:ak};ah._changedrecords.push(aq)}}}}});if(aa=="add"){var M=ah.records.length;for(var Z=0;Z<M;Z++){var I=ah.records[Z];var L=false;for(var U=0;U<ah._oldrecords.length;U++){if(ah._oldrecords[U]._koindex===I._koindex){L=true;break}}if(!L){ah._changedrecords.push({index:Z,oldrecord:null,record:I,position:(Z!=0?"last":"first")})}}}else{if(aa=="remove"){var M=ah._oldrecords.length;for(var Z=0;Z<M;Z++){var P=ah._oldrecords[Z];if(!ah.records[Z]){ah._changedrecords.push({index:Z,oldrecord:P,record:null})}else{if(ah.records[Z]._koindex!=P._koindex){ah._changedrecords.push({index:Z,oldrecord:P,record:null})}}}}}}else{if(!i.isArray(W.localdata)){this.records=new Array();var V=0;var T=new Array();i.each(W.localdata,function(al){var ak=ah.getid(W.id,this,al);if(ad==0){if(!(typeof this==="string"||this instanceof String)){for(var an in this){V++;var ao=i.type(this[an]);T.push({name:an,type:ao})}ad=V;W.datafields=T;W.generatedfields=T}}if(ad>0){var aj=this;var am=H(aj,ad);am.uid=ak;ah.records[ah.records.length]=am}else{this.uid=ak;ah.records[ah.records.length]=this}})}else{if(ad==0){var V=0;var T=new Array();i.each(W.localdata,function(al,an){var aj=new Object(this);if(typeof an==="string"){ah.records=W.localdata;return false}else{var ak=ah.getid(W.id,aj,al);if(typeof(ak)==="object"){ak=al}aj.uid=ak;if(al==0){for(var ao in this){V++;var ap=i.type(this[ao]);T.push({name:ao,type:ap})}ad=V;W.datafields=T;W.generatedfields=T}if(ad>0){var am=H(aj,ad);am.uid=ak;ah.records[ah.records.length]=am}else{ah.records[ah.records.length]=aj}}})}else{i.each(W.localdata,function(al){var aj=this;var am=H(aj,ad);var ak=ah.getid(W.id,am,al);if(typeof(ak)==="object"){ak=al}var aj=new Object(am);aj.uid=ak;ah.records[ah.records.length]=aj})}}}this.originaldata=W.localdata;this.cachedrecords=this.records;this.addForeignValues(W);if(K.uniqueDataFields){var S=this.getUniqueRecords(this.records,K.uniqueDataFields);this.records=S;this.cachedrecords=S}if(K.beforeLoadComplete){var ae=K.beforeLoadComplete(ah.records,this.originaldata);if(ae!=undefined){ah.records=ae;ah.cachedrecords=ae}}if(K.autoSort&&K.autoSortField){var O=Object.prototype.toString;Object.prototype.toString=(typeof field=="function")?field:function(){return this[K.autoSortField]};ah.records.sort(function(ak,aj){if(ak===undefined){ak=null}if(aj===undefined){aj=null}if(ak===null&&aj===null){return 0}if(ak===null&&aj!==null){return 1}if(ak!==null&&aj===null){return -1}ak=ak.toString();aj=aj.toString();if(ak===null&&aj===null){return 0}if(ak===null&&aj!==null){return 1}if(ak!==null&&aj===null){return -1}if(i.jqx.dataFormat.isNumber(ak)&&i.jqx.dataFormat.isNumber(aj)){if(ak<aj){return -1}if(ak>aj){return 1}return 0}else{if(i.jqx.dataFormat.isDate(ak)&&i.jqx.dataFormat.isDate(aj)){if(ak<aj){return -1}if(ak>aj){return 1}return 0}else{if(!i.jqx.dataFormat.isNumber(ak)&&!i.jqx.dataFormat.isNumber(aj)){ak=String(ak).toLowerCase();aj=String(aj).toLowerCase()}}}try{if(ak<aj){return -1}if(ak>aj){return 1}}catch(al){var am=al}return 0});Object.prototype.toString=O}ah.loadedData=W.localdata;ah.buildHierarchy();if(i.isFunction(K.loadComplete)){K.loadComplete(W.localdata,ah.records)}break;case"json":case"jsonp":case"xml":case"xhtml":case"script":case"text":case"ics":if(W.localdata!=null&&!W.url){if(i.isFunction(W.beforeprocessing)){W.beforeprocessing(W.localdata)}if(W.datatype==="xml"){ah.loadxml(W.localdata,W.localdata,W)}else{if(Q==="text"){ah.loadtext(W.localdata,W)}else{if(Q==="ics"){ah.loadics(W.localdata,W)}else{ah.loadjson(W.localdata,W.localdata,W)}}}ah.addForeignValues(W);if(K.uniqueDataFields){var S=ah.getUniqueRecords(ah.records,K.uniqueDataFields);ah.records=S;ah.cachedrecords=S}if(K.beforeLoadComplete){var ae=K.beforeLoadComplete(ah.records,this.originaldata);if(ae!=undefined){ah.records=ae;ah.cachedrecords=ae}}ah.loadedData=W.localdata;ah.buildHierarchy.call(ah);if(i.isFunction(K.loadComplete)){K.loadComplete(W.localdata,ah.records)}ah.callBindingUpdate(aa);return}var af=K.data!=undefined?K.data:{};if(W.processdata){W.processdata(af)}if(i.isFunction(K.processData)){K.processData(af)}if(i.isFunction(K.formatData)){var e=K.formatData(af);if(e!=undefined){af=e}}var ab="application/x-www-form-urlencoded";if(K.contentType){ab=K.contentType}var J="GET";if(W.type){J=W.type}if(K.type){J=K.type}var X=Q;if(Q=="ics"){X="text"}if(W.url&&W.url.length>0){if(i.isFunction(K.loadServerData)){ah._requestData(af,W,K)}else{this.xhr=i.jqx.data.ajax({dataType:X,cache:this.cache,type:J,url:W.url,async:N,timeout:W.timeout,contentType:ab,data:af,success:function(am,aj,ap){if(i.isFunction(W.beforeprocessing)){var ao=W.beforeprocessing(am,aj,ap);if(ao!=undefined){am=ao}}if(i.isFunction(K.downloadComplete)){var ao=K.downloadComplete(am,aj,ap);if(ao!=undefined){am=ao}}if(am==null){ah.records=new Array();ah.cachedrecords=new Array();ah.originaldata=new Array();ah.callDownloadComplete();if(i.isFunction(K.loadComplete)){K.loadComplete(new Array())}return}var ak=am;if(am.records){ak=am.records}if(am.totalrecords!=undefined){W.totalrecords=am.totalrecords}else{if(am.totalRecords!=undefined){W.totalrecords=am.totalRecords}}if(W.datatype==="xml"){ah.loadxml(null,ak,W)}else{if(Q==="text"){ah.loadtext(ak,W)}else{if(Q==="ics"){ah.loadics(ak,W)}else{ah.loadjson(null,ak,W)}}}ah.addForeignValues(W);if(K.uniqueDataFields){var al=ah.getUniqueRecords(ah.records,K.uniqueDataFields);ah.records=al;ah.cachedrecords=al}if(K.beforeLoadComplete){var an=K.beforeLoadComplete(ah.records,am);if(an!=undefined){ah.records=an;ah.cachedrecords=an}}ah.loadedData=am;ah.buildHierarchy.call(ah);ah.callDownloadComplete();if(i.isFunction(K.loadComplete)){K.loadComplete(am,aj,ap,ah.records)}},error:function(al,aj,ak){if(i.isFunction(W.loaderror)){W.loaderror(al,aj,ak)}if(i.isFunction(K.loadError)){K.loadError(al,aj,ak)}al=null;ah.callDownloadComplete()},beforeSend:function(ak,aj){if(i.isFunction(K.beforeSend)){K.beforeSend(ak,aj)}if(i.isFunction(W.beforesend)){W.beforesend(ak,aj)}}})}}else{ah.buildHierarchy(new Array());ah.callDownloadComplete();if(i.isFunction(K.loadComplete)){if(!ai){var ai={}}K.loadComplete(ai)}}break}this.callBindingUpdate(aa)},buildHierarchy:function(K){var e=this._source;var P=new Array();if(!e.datafields){return}if(e.hierarchy&&!e.hierarchy.reservedNames){e.hierarchy.reservedNames={leaf:"leaf",parent:"parent",expanded:"expanded",checked:"checked",selected:"selected",level:"level",icon:"icon",data:"data"}}else{if(e.hierarchy){var O=e.hierarchy.reservedNames;if(!O.leaf){O.leaf="leaf"}if(!O.parent){O.parent="parent"}if(!O.expanded){O.expanded="expanded"}if(!O.checked){O.checked="checked"}if(!O.selected){O.selected="selected"}if(!O.level){O.level="level"}if(!O.data){O.data="data"}}}if(!e.hierarchy){return}var N=this;var O=e.hierarchy.reservedNames;if(e.hierarchy.root){if(e.dataType=="xml"){var P=this.getRecordsHierarchy("uid","parentuid","records",null,K);this.hierarchy=P;return P}else{this.hierarchy=this.records;var R=e.hierarchy.root;for(var L=0;L<this.records.length;L++){var M=this.records[L];if(!M){continue}var H=function(S){if(e.hierarchy.record){S.records=S[R][e.hierarchy.record]}else{var U=R.split(N.mapChar);var T=null;if(U.length>1){var W=S;for(var V=0;V<U.length;V++){if(W!=undefined){W=W[U[V]]}}T=W}else{T=S[R]}S.records=T}if(S.records==null||(S.records&&S.records.length==0)){S[O.leaf]=true}};H(M);M[O.level]=0;var I=this.getid(e.id,M,L);M.uid=I;M[O.parent]=null;M[O.data]=M;if(M[O.expanded]===undefined){M[O.expanded]=false}var Q=function(W,U){if(!U){W.records=new Array();return}for(var V=0;V<U.length;V++){var S=U[V];if(!S){continue}H(S);S[O.level]=W[O.level]+1;S[O.parent]=W;S[O.data]=S;var T=N.getid(e.id,S,V);if(T==V&&e.id==null){S.uid=W.uid+"_"+T}else{S.uid=T}if(S[O.expanded]===undefined){S[O.expanded]=false}Q(S,S.records)}};Q(M,M.records)}}return this.hierarchy}if(e.hierarchy.keyDataField&&e.hierarchy.parentDataField){var P=this.getRecordsHierarchy(e.hierarchy.keyDataField.name,e.hierarchy.parentDataField.name,"records",null,K);this.hierarchy=P;return P}if(e.hierarchy.groupingDataFields){var J=new Array();for(var L=0;L<e.hierarchy.groupingDataFields.length;L++){J.push(e.hierarchy.groupingDataFields[L].name)}var P=this.getGroupedRecords(J,"records","label",null,"data",null,"parent",K);this.hierarchy=P;return P}},addRecord:function(H,e,M,I){var J=this;var N=function(){return{leaf:"leaf",parent:"parent",expanded:"expanded",checked:"checked",selected:"selected",level:"level",icon:"icon",data:"data"}};if(H!=undefined){if(M!=undefined){if(this.hierarchy.length>0){var K=function(O){if(O){for(var P=0;P<O.length;P++){var Q=O[P];if(Q.uid==M){var R=(J._source&&J._source.hierarchy)?J._source.hierarchy.reservedNames:null;if(R==null){R=N()}H[R.parent]=Q;H[R.level]=Q[R.level]+1;if(!Q.records){Q.records=new Array();Q[R.leaf]=false}else{Q[R.leaf]=false}if(e=="last"){Q.records.push(H)}else{if(typeof e==="number"&&isFinite(e)){Q.records.splice(e,0,H)}else{Q.records.splice(0,0,H)}}return true}if(Q.records){K(Q.records)}}}};K(this.hierarchy)}}else{if(this.hierarchy&&this.hierarchy.length>=0&&(this._source.hierarchy||I)){var L=(J._source&&J._source.hierarchy)?J._source.hierarchy.reservedNames:null;if(L==null){L=N()}H[L.level]=0;if(e=="last"){this.hierarchy.push(H)}else{if(typeof e==="number"&&isFinite(e)){this.hierarchy.splice(e,0,H)}else{this.hierarchy.splice(0,0,H)}}}else{if(e=="last"){this.records.push(H)}else{if(typeof e==="number"&&isFinite(e)){this.records.splice(e,0,H)}else{this.records.splice(0,0,H)}}}return true}}return false},deleteRecord:function(H){var J=this;if(this.hierarchy.length>0){var K=function(L){if(L){for(var O=0;O<L.length;O++){var P=L[O];if(P.uid==H){L.splice(O,1);if(J.recordids[H]){delete J.recordids[H]}var N=function(T){for(var Q=0;Q<T.length;Q++){var S=T[Q].uid;for(var R=0;R<J.records.length;R++){var U=J.records[R];if(U.uid==S){J.records.splice(R,1);break}}if(T[Q].records){N(T[Q].records)}}};if(P.records){N(P.records)}for(var M=0;M<J.records.length;M++){var P=J.records[M];if(P.uid==H){J.records.splice(M,1);break}}return true}if(P.records){K(P.records)}}}};K(this.hierarchy)}else{for(var e=0;e<this.records.length;e++){var I=this.records[e];if(I.uid==H){this.records.splice(e,1);return true}}}return false},addForeignValues:function(H){var Q=this;var V=H.datafields?H.datafields.length:0;for(var N=0;N<V;N++){var L=H.datafields[N];if(L!=undefined){if(L.values!=undefined){if(L.value==undefined){L.value=L.name}if(L.values.value==undefined){L.values.value=L.value}var T=new Array();var K,M;if(Q.pageable&&Q.virtualmode){K=Q.pagenum*Q.pagesize;M=K+Q.pagesize;if(M>Q.totalrecords){M=Q.totalrecords}}else{if(Q.virtualmode){K=H.recordstartindex;M=H.recordendindex;if(M>Q.totalrecords){M=Q.totalrecords}}else{K=0;M=Q.records.length}}for(var O=K;O<M;O++){var P=Q.records[O];var I=L.name;var U=P[L.value];if(T[U]!=undefined){P[I]=T[U]}else{for(var J=0;J<L.values.source.length;J++){var S=L.values.source[J];var e=S[L.values.value];if(e==undefined){e=S.uid}if(e==U){var R=S[L.values.name];P[I]=R;T[U]=R;break}}}}}else{if(L.value!=undefined){for(var O=0;O<Q.records.length;O++){var P=Q.records[O];P[L.name]=P[L.value]}}}}}},abort:function(){if(this.xhr&&this.xhr.readyState!=4){this.xhr.abort();this.callDownloadComplete()}},_requestData:function(H,J,e){var I=this;var K=function(P){if(P.totalrecords){J.totalrecords=P.totalrecords;I.totalrecords=P.totalrecords}if(P.records){I.records=P.records;I.cachedrecords=P.records}I.addForeignValues(J);if(e.uniqueDataFields){var N=I.getUniqueRecords(I.records,e.uniqueDataFields);I.records=N;I.cachedrecords=N}if(e.beforeLoadComplete){var O=e.beforeLoadComplete(I.records,P);if(O!=undefined){I.records=O;I.cachedrecords=O}}for(var M=0;M<I.records.length;M++){var L=I.records[M];if(undefined==L){continue}if(undefined==L.uid){L.uid=I.getid(J.id,L,M)}}I.buildHierarchy.call(I);if(i.isFunction(e.loadComplete)){e.loadComplete(P)}I.callDownloadComplete()};e.loadServerData(H,J,K)},getUniqueRecords:function(I,L){if(I&&L){var e=I.length;var Q=L.length;var N=new Array();var O=new Array();for(var P=0;P<e;P++){var M=I[P];var J="";if(M==undefined){continue}for(var K=0;K<Q;K++){var H=L[K];if(M[H]!==undefined){J+=M[H]+"_"}}if(!O[J]&&J){N[N.length]=M}O[J]=true}}return N},getAggregatedData:function(S,P,M,H){var L=M;if(!L){L=this.records}var Q={};var K=new Array();var J=L.length;if(J==0){return}if(J==undefined){return}for(var O=0;O<J;O++){var R=L[O];for(var N=0;N<S.length;N++){var I=S[N];var U=R[I.name];if(I.aggregates){Q[I.name]=Q[I.name]||{};K[I.name]=K[I.name]||0;K[I.name]++;var e=function(W){for(var Y in W){var X=Q[I.name][Y];if(X==null){Q[I.name][Y]=0;X=0}if(i.isFunction(W[Y])){X=W[Y](X,U,I.name,R,H)}Q[I.name][Y]=X}};var T=parseFloat(U);if(isNaN(T)){T=false}else{T=true}if(T){U=parseFloat(U)}if(typeof U==="number"&&isFinite(U)){i.each(I.aggregates,function(){var W=Q[I.name][this];if(W==null){W=0;if(this=="min"){W=9999999999999}if(this=="max"){W=-9999999999999}}if(this=="sum"||this=="avg"||this=="stdev"||this=="stdevp"||this=="var"||this=="varp"){W+=parseFloat(U)}else{if(this=="product"){if(O==0){W=parseFloat(U)}else{W*=parseFloat(U)}}else{if(this=="min"){W=Math.min(W,parseFloat(U))}else{if(this=="max"){W=Math.max(W,parseFloat(U))}else{if(this=="count"){W++}else{if(typeof(this)=="object"){e(this);return}}}}}}Q[I.name][this]=W})}else{i.each(I.aggregates,function(){if(this=="min"||this=="max"||this=="count"||this=="product"||this=="sum"||this=="avg"||this=="stdev"||this=="stdevp"||this=="var"||this=="varp"){if(U===null){return true}var W=Q[I.name][this];if(W==null){W=0}Q[I.name][this]=W;return true}if(typeof(this)=="object"){e(this)}})}}}}for(var N=0;N<S.length;N++){var I=S[N];if(!Q[I.name]){Q[I.name]={};i.each(I.aggregates,function(W){Q[I.name][this]=0})}if(Q[I.name]["avg"]!=undefined){var U=Q[I.name]["avg"];var V=K[I.name];if(V===0||V==undefined){Q[I.name]["avg"]=0}else{Q[I.name]["avg"]=U/V}}else{if(Q[I.name]["count"]!=undefined){Q[I.name]["count"]=J}}if(Q[I.name]["stdev"]||Q[I.name]["stdevp"]||Q[I.name]["var"]||Q[I.name]["varp"]){i.each(I.aggregates,function(ac){if(this=="stdev"||this=="var"||this=="varp"||this=="stdevp"){var ad=Q[I.name][this];var ab=J;var W=(ad/J);var Y=0;for(var Z=0;Z<J;Z++){var aa=L[Z];var ae=aa[I.name];Y+=(ae-W)*(ae-W)}var X=(this=="stdevp"||this=="varp")?ab:ab-1;if(X==0){X=1}if(this=="var"||this=="varp"){Q[I.name][this]=Y/X}else{if(this=="stdevp"||this=="stdev"){Q[I.name][this]=Math.sqrt(Y/X)}}}})}if(I.formatStrings){i.each(I.aggregates,function(X){var W=I.formatStrings[X];if(W){if(this=="min"||this=="max"||this=="count"||this=="product"||this=="sum"||this=="avg"||this=="stdev"||this=="stdevp"||this=="var"||this=="varp"){var Y=Q[I.name][this];Q[I.name][this]=i.jqx.dataFormat.formatnumber(Y,W,P)}else{if(typeof this=="object"){for(var Z in this){var Y=Q[I.name][Z];Q[I.name][Z]=i.jqx.dataFormat.formatnumber(Y,W,P)}}}}})}}return Q},bindDownloadComplete:function(H,e){this._downloadComplete[this._downloadComplete.length]={id:H,func:e}},unbindDownloadComplete:function(H){for(var e=0;e<this._downloadComplete.length;e++){if(this._downloadComplete[e].id==H){this._downloadComplete[e].func=null;this._downloadComplete.splice(e,1);break}}},callDownloadComplete:function(){for(var e=0;e<this._downloadComplete.length;e++){var H=this._downloadComplete[e];if(H.func!=null){H.func()}}},setSource:function(e){this._source=e},generatekey:function(){var e=function(){return(((1+Math.random())*65536)|0).toString(16).substring(1)};return(e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e())},getGroupedRecords:function(ak,an,W,af,al,ac,ae,ao,K){var ah=0;var aa=this;if(!K){K=0}var I=new Array();for(var N=0;N<ak.length;N++){I[N]=aa.generatekey()}if(!an){an="items"}if(!W){W="group"}if(!al){al="record"}if(!ae){ae="parentItem"}if(undefined===ac){ac="value"}var S=new Array();var L=0;var J=new Array();var R=ak.length;var am=new Array();if(!ao){var ao=this.records}var P=ao.length;var ag=function(ap){var aq=ap;if(af){i.each(af,function(){if(this.name&&this.map){aq[this.map]=aq[this.name]}})}return aq};for(var V=0;V<P;V++){var aj=ag(ao[V]);var ab=aj[aa.uniqueId];var H=new Array();var X=0;for(N=0;N<R;N++){var Q=ak[N];var ad=aj[Q];if(null==ad){continue}H[X++]={value:ad,hash:I[N]}}if(H.length!=R){break}var Y=null;var T="";var e=-1;for(var Z=0;Z<H.length;Z++){e++;var ai=H[Z].value;var M=H[Z].hash;T=T+"_"+M+"_"+ai;if(J[T]!=undefined&&J[T]!=null){Y=J[T];continue}if(Y==null){Y={level:0};Y[ae]=null;Y[W]=ai;Y[al]=aj;if(aj.expanded!==undefined){Y.expanded=aj.expanded}else{Y.expanded=false}if(ac){Y[ac]=aj[ac]}Y[an]=new Array();var O=S.length+K;if(!this._source.id||typeof aj.uid==="number"||isFinite(aj.uid)){O="Row"+O}Y.uid=O;S[L++]=Y}else{var U={level:Y.level+1};U[ae]=Y;U[W]=ai;U[an]=new Array();U[al]=aj;if(aj.expanded!==undefined){U.expanded=aj.expanded}else{U.expanded=false}if(ac){U[ac]=aj[ac]}U.uid=Y.uid+"_"+Y[an].length;Y[an][Y[an].length]=U;Y=U}J[T]=Y}if(aj){aj.leaf=true}if(Y!=null){if(this._source.id==null){if(undefined==aj.uid){aj.uid=Y.uid+"_"+Y[an].length}else{if(aj.uid.toString().indexOf(Y.uid)==-1){aj.uid=Y.uid+"_"+aj.uid}}}aj[ae]=Y;aj.level=Y.level+1;Y[an][Y[an].length]=aj}else{if(undefined==aj.uid){aj.uid=this.generatekey()}}}return S},getRecordsHierarchy:function(L,J,aa,U,H){var e=new Array();var I=this.records;if(H){I=H}if(this.records.length==0){return null}var Y=aa!=null?aa:"items";var R=[];var ab=I;var O=ab.length;var P=(this._source&&this._source.hierarchy)?this._source.hierarchy.reservedNames:null;var W=function(ac){var ad=ac;if(U){i.each(U,function(){if(this.name&&this.map){ad[this.map]=ad[this.name]}})}return ad};for(var X=0;X<O;X++){var Z=i.extend({},ab[X]);var T=Z[J];var S=Z[L];R[S]={parentid:T,item:Z}}for(var X=0;X<O;X++){var Z=i.extend({},ab[X]);var T=Z[J];var S=Z[L];if(R[T]!=undefined){var Z={parentid:T,item:R[S].item};var Q=R[T].item;if(!Q[Y]){Q[Y]=[]}var M=Q[Y].length;var K=Z.item;if(!P){if(K.parent==undefined){K.parent=Q}}else{if(K[P.parent]==undefined){K[P.parent]=Q}}var N=W(K);Q[Y][M]=N;R[T].item=Q;R[S]=Z}else{var K=R[S].item;if(!P){if(K.parent==undefined){K.parent=null}}else{if(K[P.parent]==undefined){K[P.parent]=null}}var N=W(K);if(!P){N.level=0}else{N[P.level]=0}e[e.length]=N}}if(e.length!=0){var V=function(af,ac){for(var ad=0;ad<ac.length;ad++){if(!P){ac[ad].level=af}else{ac[ad][P.level]=af}var ae=ac[ad][Y];if(ae){if(ae.length>0){V(af+1,ae)}else{if(!P){ac[ad].leaf=true}else{ac[ad][P.leaf]=true}}}else{if(!P){ac[ad].leaf=true}else{ac[ad][P.leaf]=true}}}};V(0,e)}return e},bindBindingUpdate:function(H,e){this._bindingUpdate[this._bindingUpdate.length]={id:H,func:e}},unbindBindingUpdate:function(H){for(var e=0;e<this._bindingUpdate.length;e++){if(this._bindingUpdate[e].id==H){this._bindingUpdate[e].func=null;this._bindingUpdate.splice(e,1);break}}},callBindingUpdate:function(e){for(var I=0;I<this._bindingUpdate.length;I++){var H=this._bindingUpdate[I];if(H.func!=null){H.func(e)}}},getid:function(N,H,K){if(N!=null&&N.name!=undefined){if(N.name){var e=i(H).attr(N.name);if(e!=null&&e.toString().length>0){return e}else{if(N.map){try{var e=i(H).attr(N.map);if(e!=null&&e.toString().length>0){return e}else{if(i(N.map,H).length>0){return i(N.map,H).text()}else{if(i(N.name,H).length>0){return i(N.name,H).text()}}}}catch(J){return K}}}return}}if(i(N,H).length>0){return i(N,H).text()}if(N){if(N.toString().length>0){var e=i(H).attr(N);if(e!=null&&e.toString().length>0){return i.trim(e).split(" ").join("").replace(/([ #;?%&,.+*~\':"!^$[\]()=>|\/\\@])/g,"")}else{var I=N.split(this.mapChar);if(I.length>1){var M=H;for(var L=0;L<I.length;L++){if(M!=undefined){M=M[I[L]]}}if(M!=undefined){return M}}else{if(H[N]!=undefined){return H[N]}}}}}return K},loadjson:function(af,ag,S){if(typeof(af)=="string"){af=i.parseJSON(af)}if(S.root==undefined){S.root=""}if(S.record==undefined){S.record=""}var af=af||ag;if(!af){af=[]}var ae=this;if(S.root!=""){var K=S.root.split(ae.mapChar);if(K.length>1){var ab=af;for(var R=0;R<K.length;R++){if(ab!=undefined){ab=ab[K[R]]}}af=ab}else{if(af[S.root]!==undefined){af=af[S.root]}else{if(af[0]&&af[0][S.root]!==undefined){af=af[0][S.root]}else{i.each(af,function(ai){var ah=this;if(this==S.root){af=this;return false}else{if(this[S.root]!=undefined){af=this[S.root]}}})}}if(!af){var K=S.root.split(ae.mapChar);if(K.length>0){var ab=af;for(var R=0;R<K.length;R++){if(ab!=undefined){ab=ab[K[R]]}}af=ab}}}}else{if(!af.length){for(var O in af){if(i.isArray(af[O])){af=af[O];break}}}}if(af!=null&&af.length==undefined){af=i.makeArray(af)}if(af==null||af==undefined||af=="undefined"||af.length==undefined){throw new Error("jqxDataAdapter: JSON Parse error! Invalid JSON. Please, check your JSON or your jqxDataAdapter initialization!");return}if(af.length==0){this.totalrecords=0;return}var J=af.length;this.totalrecords=this.virtualmode?(S.totalrecords||J):J;this.records=new Array();this.originaldata=new Array();var X=this.records;var U=!this.pageable?S.recordstartindex:this.pagesize*this.pagenum;this.recordids=new Array();if(S.loadallrecords){U=0;J=this.totalrecords}var Q=0;if(this.virtualmode){U=!this.pageable?S.recordstartindex:this.pagesize*this.pagenum;Q=U;U=0;J=this.totalrecords}var Z=S.datafields?S.datafields.length:0;if(Z==0){var e=af[0];var ac=new Array();for(var O in e){var H=O;ac[ac.length]={name:H}}S.datafields=ac;S.generatedfields=S.datafields;Z=ac.length}var M=U;for(var W=U;W<J;W++){var I=af[W];if(I==undefined){break}if(S.record&&S.record!=""){I=I[S.record];if(I==undefined){continue}}var ad=this.getid(S.id,I,W);if(typeof(ad)==="object"){ad=W}if(!this.recordids[ad]){this.recordids[ad]=I;var L={};for(var V=0;V<Z;V++){var N=S.datafields[V];var T="";if(undefined==N||N==null){continue}if(N.map){if(i.isFunction(N.map)){T=N.map(I)}else{var K=N.map.split(ae.mapChar);if(K.length>0){var aa=I;for(var R=0;R<K.length;R++){if(aa!=undefined){aa=aa[K[R]]}}T=aa}else{T=I[N.map]}}if(T!=undefined&&T!=null){T=this.getvaluebytype(T,N)}else{if(T==undefined&&T!=null){T=""}}}if(T==""&&!N.map){T=I[N.name];if(T==undefined&&T!=null){T=""}if(N.value!=undefined){if(T!=undefined){var Y=T[N.value];if(Y!=undefined){T=Y}}}}T=this.getvaluebytype(T,N);if(N.displayname!=undefined){L[N.displayname]=T}else{L[N.name]=T}if(N.type==="array"){var P=function(ak){if(!ak){return}for(var aq=0;aq<ak.length;aq++){var an=ak[aq];if(!an){continue}for(var ao=0;ao<Z;ao++){var aj=S.datafields[ao];var ap="";if(undefined==aj||aj==null){continue}if(aj.map){if(i.isFunction(aj.map)){ap=aj.map(an)}else{var ah=aj.map.split(ae.mapChar);if(ah.length>0){var am=an;for(var ai=0;ai<ah.length;ai++){if(am!=undefined){am=am[ah[ai]]}}ap=am}else{ap=an[aj.map]}}if(ap!=undefined&&ap!=null){ap=this.getvaluebytype(ap,aj)}else{if(ap==undefined&&ap!=null){ap=""}}}if(ap==""&&!aj.map){ap=an[aj.name];if(ap==undefined&&ap!=null){ap=""}if(aj.value!=undefined){if(ap!=undefined){var al=ap[aj.value];if(al!=undefined){ap=al}}}}ap=this.getvaluebytype(ap,aj);if(aj.displayname!=undefined){an[aj.displayname]=ap}else{an[aj.name]=ap}if(aj.type==="array"){P.call(this,ap)}}}};P.call(this,T)}}if(S.recordendindex<=0||U<S.recordendindex){X[Q+M]=new Object(L);X[Q+M].uid=ad;this.originaldata[Q+M]=new Object(X[W]);M++}}}this.records=X;this.cachedrecords=this.records},loadxml:function(K,aj,V){if(typeof(K)=="string"){K=aj=i(i.parseXML(K));K=null}if(V.root==undefined){V.root=""}if(V.record==undefined){V.record=""}var K;if(i.jqx.browser.msie&&aj){if(aj.xml!=undefined){K=i(V.root+" "+V.record,i.parseXML(aj.xml))}else{K=K||i(V.root+" "+V.record,aj)}}else{K=K||i(V.root+" "+V.record,aj)}if(!K){K=[]}var J=K.length;if(K.length==0){return}this.totalrecords=this.virtualmode?(V.totalrecords||J):J;this.records=new Array();this.originaldata=new Array();var ab=this.records;var Y=!this.pageable?V.recordstartindex:this.pagesize*this.pagenum;this.recordids=new Array();if(V.loadallrecords){Y=0;J=this.totalrecords}var T=0;if(this.virtualmode){Y=!this.pageable?V.recordstartindex:this.pagesize*this.pagenum;T=Y;Y=0;J=this.totalrecords}var ad=V.datafields?V.datafields.length:0;if(ad==0){var e=K[0];var ag=new Array();for(var S in e){var H=S;ag[ag.length]={name:H}}V.datafields=ag;V.generatedfields=V.datafields;ad=ag.length}var U=Y;var af=false;for(var aa=Y;aa<J;aa++){var I=K[aa];if(I==undefined){break}var ai=this.getid(V.id,I,aa);if(!this.recordids[ai]){this.recordids[ai]=I;var L={};var P=false;if(V.hierarchy&&V.hierarchy.root){P=true}for(var Z=0;Z<ad;Z++){var Q=V.datafields[Z];var X="";if(undefined==Q||Q==null){continue}if(Q.map){if(i.isFunction(Q.map)){X=Q.map(I)}else{var M=Q.map.indexOf("[");if(M<0){X=i(Q.map,I);if(X.length==1){X=X.text()}else{af=true;var ah=new Array();for(var ac=0;ac<X.length;ac++){ah.push(i(X[ac]).text())}X=ah;if(P&&ah.length>0){X=ah[0]}}}else{var ae=Q.map.substring(0,M-1);var O=Q.map.indexOf("]");var R=Q.map.substring(M+1,O);X=i(ae,I).attr(R);if(X==undefined){X=i(I).attr(R)}if(X==undefined){X=""}}if(X==""){X=i(I).attr(Q.map);if(X==undefined){X=""}}}}if(X==""){X=i(Q.name,I);if(X.length==1){X=X.text()}else{var ah=new Array();for(var ac=0;ac<X.length;ac++){ah.push(i(X[ac]).text())}X=ah;if(P&&ah.length>0){X=ah[0]}}if(X==""){X=i(I).attr(Q.name);if(X==undefined){X=""}}if(X==""){if(I.nodeName&&I.nodeName==Q.name&&I.firstChild){X=i(I.firstChild).text()}}}var W=X;X=this.getvaluebytype(X,Q);if(Q.displayname!=undefined){L[Q.displayname]=X}else{L[Q.name]=X}}if(V.recordendindex<=0||Y<V.recordendindex){ab[T+U]=i.extend({},L);ab[T+U].uid=ai;this.originaldata[T+U]=i.extend({},ab[aa]);U++}}}if(V.hierarchy&&V.hierarchy.root){for(var aa=Y;aa<J;aa++){var I=K[aa];var N=ab[aa];if(i(I).parent().length>0){var ai=this.getid(V.id,i(I).parents(V.hierarchy.record+":first"));N.parentuid=ai}else{N.parentuid=null}}}this.records=ab;this.cachedrecords=this.records},loadics:function(N,H){if(N==null){return}var S=H.rowDelimiter||this.rowDelimiter||"\n";var R=N.split(S);var K=R.length;var Q=N.split("\r");if(K==1&&Q.length>1){R=Q;K=R.length}this.records=new Array();this.originaldata=new Array();var L=this.records;this.recordids=new Array();var I=0;var P=function(V){var T=/^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z)?$/;var U=T.exec(V);if(!U){throw new Error("Invalid UNTIL value: "+V)}return new Date(Date.UTC(U[1],U[2]-1,U[3],U[5]||0,U[6]||0,U[7]||0))};for(var M=0;M<K;M++){var O=R[M];if(O=="BEGIN:VEVENT"){var e={};continue}if(O.indexOf("SUMMARY")>=0){e.SUMMARY=O.substring(O.indexOf("SUMMARY")+8);continue}if(O.indexOf("LOCATION")>=0){e.LOCATION=O.substring(O.indexOf("LOCATION")+9);continue}if(O.indexOf("DESCRIPTION")>=0){e.DESCRIPTION=O.substring(O.indexOf("DESCRIPTION")+12);continue}if(O.indexOf("RRULE")>=0){e.RRULE=O.substring(O.indexOf("RRULE")+6);continue}if(O.indexOf("EXDATE")>=0){var J=O.substring(O.indexOf("EXDATE")+7);e.EXDATE=J;continue}if(O.indexOf("DTEND")>=0){e.DTEND=P(O.substring(O.indexOf("DTEND")+6));continue}if(O.indexOf("DTSTART")>=0){e.DTSTART=P(O.substring(O.indexOf("DTSTART")+8));continue}if(O.indexOf("UID")>=0){e.uid=e.UID=O.substring(O.indexOf("UID")+4);continue}if(O.indexOf("STATUS")>=0){e.STATUS=O.substring(O.indexOf("STATUS")+7);continue}if(O=="END:VEVENT"){L.push(e);continue}}this.records=L;this.cachedrecords=this.records},loadtext:function(Y,P){if(Y==null){return}var e=P.rowDelimiter||this.rowDelimiter||"\n";var L=Y.split(e);var J=L.length;var X=Y.split("\r");if(J==1&&X.length>1){L=X;J=L.length}this.totalrecords=this.virtualmode?(P.totalrecords||J):J;this.records=new Array();this.originaldata=new Array();var U=this.records;var R=!this.pageable?P.recordstartindex:this.pagesize*this.pagenum;this.recordids=new Array();if(P.loadallrecords){R=0;J=this.totalrecords}var N=0;if(this.virtualmode){R=!this.pageable?P.recordstartindex:this.pagesize*this.pagenum;N=R;R=0;J=this.totalrecords}var V=P.datafields.length;var O=P.columnDelimiter||this.columnDelimiter;if(!O){O=(P.datatype==="tab"||P.datatype==="tsv")?"\t":","}for(var T=R;T<J;T++){var I=L[T];var W=null;if(!this.recordids[W]){if(P.id==null){W=T;this.recordids[W]=I}var K={};var H=L[T].split(O);for(var S=0;S<V;S++){if(S>=H.length){continue}var M=P.datafields[S];var Q=H[S];if(M.map&&i.isFunction(M.map)){Q=M.map(I)}if(M.type){Q=this.getvaluebytype(Q,M)}var Z=M.map||M.name||S.toString();K[Z]=Q;if(P.id!=null){if(P.id===M.name){W=Q;this.recordids[W]=I}}}if(W==null){W=T}U[N+T]=i.extend({},K);U[N+T].uid=W;this.originaldata[N+T]=i.extend({},U[T])}}this.records=U;this.cachedrecords=this.records},getvaluebytype:function(L,H){var J=L;if(L==null){return L}if(i.isArray(L)&&H.type!="array"){for(var I=0;I<L.length;I++){L[I]=this.getvaluebytype(L[I],H)}return L}if(H.type=="date"){if(L=="NaN"){L=""}else{if(L&&L instanceof Date){return L}var K=new Date(L);if(typeof L=="string"){if(H.format){var e=i.jqx.dataFormat.parsedate(L,H.format);if(e!=null){K=e}}}if(K.toString()=="NaN"||K.toString()=="Invalid Date"){if(i.jqx.dataFormat){L=i.jqx.dataFormat.tryparsedate(L)}else{L=K}}else{L=K}if(L==null){L=J}}}else{if(H.type=="float"||H.type=="number"||H.type=="decimal"){if(L=="NaN"){L=""}else{var L=parseFloat(L);if(isNaN(L)){L=J}}}else{if(H.type=="int"||H.type=="integer"){var L=parseInt(L);if(isNaN(L)){L=J}}else{if(H.type=="bool"||H.type=="boolean"){if(L!=null){if(L.toLowerCase!=undefined){if(L.toLowerCase()=="false"){L=false}else{if(L.toLowerCase()=="true"){L=true}}}}if(L==1){L=true}else{if(L==0&&L!==""){L=false}else{L=""}}}}}}return L}};i.jqx.dataFormat={};i.extend(i.jqx.dataFormat,{regexTrim:/^\s+|\s+$/g,regexInfinity:/^[+-]?infinity$/i,regexHex:/^0x[a-f0-9]+$/i,regexParseFloat:/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/,toString:Object.prototype.toString,isBoolean:function(e){return typeof e==="boolean"},isObject:function(e){return(e&&(typeof e==="object"||i.isFunction(e)))||false},isDate:function(e){return e instanceof Date},arrayIndexOf:function(J,I){if(J.indexOf){return J.indexOf(I)}for(var e=0,H=J.length;e<H;e++){if(J[e]===I){return e}}return -1},isString:function(e){return typeof e==="string"},isNumber:function(e){return typeof e==="number"&&isFinite(e)},isNull:function(e){return e===null},isUndefined:function(e){return typeof e==="undefined"},isValue:function(e){return(this.isObject(e)||this.isString(e)||this.isNumber(e)||this.isBoolean(e))},isEmpty:function(e){if(!this.isString(e)&&this.isValue(e)){return false}else{if(!this.isValue(e)){return true}}e=i.trim(e).replace(/\&nbsp\;/ig,"").replace(/\&#160\;/ig,"");return e===""},startsWith:function(H,e){return H.indexOf(e)===0},endsWith:function(H,e){return H.substr(H.length-e.length)===e},trim:function(e){return(e+"").replace(this.regexTrim,"")},isArray:function(e){return this.toString.call(e)==="[object Array]"},defaultcalendar:function(){var e={"/":"/",":":":",firstDay:0,days:{names:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],namesAbbr:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],namesShort:["Su","Mo","Tu","We","Th","Fr","Sa"]},months:{names:["January","February","March","April","May","June","July","August","September","October","November","December",""],namesAbbr:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""]},AM:["AM","am","AM"],PM:["PM","pm","PM"],eras:[{name:"A.D.",start:null,offset:0}],twoDigitYearMax:2029,patterns:{d:"M/d/yyyy",D:"dddd, MMMM dd, yyyy",t:"h:mm tt",T:"h:mm:ss tt",f:"dddd, MMMM dd, yyyy h:mm tt",F:"dddd, MMMM dd, yyyy h:mm:ss tt",M:"MMMM dd",Y:"yyyy MMMM",S:"yyyy\u0027-\u0027MM\u0027-\u0027dd\u0027T\u0027HH\u0027:\u0027mm\u0027:\u0027ss",ISO:"yyyy-MM-dd hh:mm:ss",ISO2:"yyyy-MM-dd HH:mm:ss",d1:"dd.MM.yyyy",d2:"dd-MM-yyyy",d3:"MM-dd-yyyy",zone1:"yyyy-MM-ddTHH:mm:ss-HH:mm",zone2:"yyyy-MM-ddTHH:mm:ss+HH:mm",custom:"yyyy-MM-ddTHH:mm:ss.fff",custom2:"yyyy-MM-dd HH:mm:ss.fff"},percentsymbol:"%",currencysymbol:"$",currencysymbolposition:"before",decimalseparator:".",thousandsseparator:","};return e},expandFormat:function(K,J){J=J||"F";var I,H=K.patterns,e=J.length;if(e===1){I=H[J];if(!I){throw"Invalid date format string '"+J+"'."}J=I}else{if(e===2&&J.charAt(0)==="%"){J=J.charAt(1)}}return J},getEra:function(I,H){if(!H){return 0}if(typeof I==="string"){return 0}var L,K=I.getTime();for(var J=0,e=H.length;J<e;J++){L=H[J].start;if(L===null||K>=L){return J}}return 0},toUpper:function(e){return e.split("\u00A0").join(" ").toUpperCase()},toUpperArray:function(e){var J=[];for(var I=0,H=e.length;I<H;I++){J[I]=this.toUpper(e[I])}return J},getEraYear:function(H,J,e,K){var I=H.getFullYear();if(!K&&J.eras){I-=J.eras[e].offset}return I},toUpper:function(e){if(e){return e.toUpperCase()}return""},getDayIndex:function(K,J,H){var e,L=K.days,I=K._upperDays;if(!I){K._upperDays=I=[this.toUpperArray(L.names),this.toUpperArray(L.namesAbbr),this.toUpperArray(L.namesShort)]}J=J.toUpperCase();if(H){e=this.arrayIndexOf(I[1],J);if(e===-1){e=this.arrayIndexOf(I[2],J)}}else{e=this.arrayIndexOf(I[0],J)}return e},getMonthIndex:function(N,M,I){var e=N.months,H=N.monthsGenitive||N.months,K=N._upperMonths,L=N._upperMonthsGen;if(!K){N._upperMonths=K=[this.toUpperArray(e.names),this.toUpperArray(e.namesAbbr)];N._upperMonthsGen=L=[this.toUpperArray(H.names),this.toUpperArray(H.namesAbbr)]}M=this.toUpper(M);var J=this.arrayIndexOf(I?K[1]:K[0],M);if(J<0){J=this.arrayIndexOf(I?L[1]:L[0],M)}return J},appendPreOrPostMatch:function(J,e){var I=0,L=false;for(var K=0,H=J.length;K<H;K++){var M=J.charAt(K);switch(M){case"'":if(L){e.push("'")}else{I++}L=false;break;case"\\":if(L){e.push("\\")}L=!L;break;default:e.push(M);L=false;break}}return I},getTokenRegExp:function(){return/\/|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z|gg|g/g},formatlink:function(e,I){var H="";if(I&&I.target){H="target="+I.target}if(H!=""){return"<a "+H+' href="'+e+'">'+e+"</a>"}return'<a href="'+e+'">'+e+"</a>"},formatemail:function(e){return'<a href="mailto:'+e+'">'+e+"</a>"},formatNumber:function(e,I,H){return this.formatnumber(e,I,H)},formatnumber:function(T,S,O){if(O==undefined||O==null||O==""){O=this.defaultcalendar()}if(S===""||S===null){return T}if(!this.isNumber(T)){T*=1}var P;if(S.length>1){P=parseInt(S.slice(1),10)}var V={};var Q=S.charAt(0).toUpperCase();V.thousandsSeparator=O.thousandsseparator;V.decimalSeparator=O.decimalseparator;switch(Q){case"D":case"d":case"F":case"f":V.decimalPlaces=P;break;case"N":case"n":V.decimalPlaces=0;break;case"C":case"c":V.decimalPlaces=P;if(O.currencysymbolposition=="before"){V.prefix=O.currencysymbol}else{V.suffix=O.currencysymbol}break;case"P":case"p":V.suffix=O.percentsymbol;V.decimalPlaces=P;break;default:throw"Bad number format specifier: "+Q}if(this.isNumber(T)){var K=(T<0);var I=T+"";var R=(V.decimalSeparator)?V.decimalSeparator:".";var e;if(this.isNumber(V.decimalPlaces)){var L=V.decimalPlaces;var N=Math.pow(10,L);I=(T*N).toFixed(0)/N+"";e=I.lastIndexOf(".");if(L>0){if(e<0){I+=R;e=I.length-1}else{if(R!=="."){I=I.replace(".",R)}}while((I.length-1-e)<L){I+="0"}}}else{var I=T+"";e=I.lastIndexOf(".");if(e>0&&L==undefined){if(R!=="."){I=I.replace(".",R)}}}if(V.thousandsSeparator){var U=V.thousandsSeparator;e=I.lastIndexOf(R);e=(e>-1)?e:I.length;var J=I.substring(e);var H=-1;for(var M=e;M>0;M--){H++;if((H%3===0)&&(M!==e)&&(!K||(M>1))){J=U+J}J=I.charAt(M-1)+J}I=J}I=(V.prefix)?V.prefix+I:I;I=(V.suffix)?I+V.suffix:I;return I}else{return T}},tryparsedate:function(ak,al){if(al==undefined||al==null){al=this.defaultcalendar()}var P=this;if(ak==""){return null}if(ak!=null&&!ak.substring){ak=ak.toString()}if(ak!=null&&ak.substring(0,6)=="/Date("){var au=/^\/Date\((-?\d+)(\+|-)?(\d+)?\)\/$/;var ar=new Date(+ak.replace(/\/Date\((\d+)\)\//,"$1"));if(ar=="Invalid Date"){var an=ak.match(/^\/Date\((\d+)([-+]\d\d)(\d\d)\)\/$/);var ar=null;if(an){ar=new Date(1*an[1]+3600000*an[2]+60000*an[3])}}if(ar==null||ar=="Invalid Date"||isNaN(ar)){var Q=au.exec(ak);if(Q){var T=new Date(parseInt(Q[1]));if(Q[2]){var Z=parseInt(Q[3]);if(Q[2]==="-"){Z=-Z}var V=T.getUTCMinutes();T.setUTCMinutes(V-Z)}if(!isNaN(T.valueOf())){return T}}}return ar}var N=al.patterns;for(var S in N){ar=P.parsedate(ak,N[S],al);if(ar){if(S=="ISO"){var ac=P.parsedate(ak,N.ISO2,al);if(ac){return ac}}return ar}}if(ak!=null){var ac=null;var L=[":","/","-"];var ap=true;for(var O=0;O<L.length;O++){if(ak.indexOf(L[O])!=-1){ap=false}}if(ap){var av=new Number(ak);if(!isNaN(av)){return new Date(av)}}}if(i.type(ak)==="string"){var ag=P;ak=ag.trim(ak);var am=[":","/","-"," ",","];var M=function(az,ax,ay){return ay.replace(new RegExp(az,"g"),ax)};ak=M(", ",",",ak);var I="";var Y=ak;if(ak.indexOf(":")>=0){I=ak.substring(ak.indexOf(":")-2);I=ag.trim(I);Y=ak.substring(0,ak.indexOf(":")-2)}else{if(ak.toUpperCase().indexOf("AM")>=0){I=ak.substring(ak.toUpperCase().indexOf("AM")-2);I=ag.trim(I);Y=ak.substring(0,ak.toUpperCase().indexOf("AM")-2)}else{if(ak.toUpperCase().indexOf("PM")>=0){I=ak.substring(ak.toUpperCase().indexOf("PM")-2);I=ag.trim(I);Y=ak.substring(0,ak.toUpperCase().indexOf("PM")-2)}}}var e=new Date();var aj=false;if(Y){for(var aq=0;aq<am.length;aq++){if(Y.indexOf(am[aq])>=0){L=Y.split(am[aq]);break}}var H=new Array();var W=new Array();var ae=new Array();var R=null;var aw=null;for(var aq=0;aq<L.length;aq++){var O=L[aq];var ad=ag.parsedate(O,"d",al)||ag.parsedate(O,"dd",al)||ag.parsedate(O,"ddd",al)||ag.parsedate(O,"dddd",al);if(ad){if(O.length<=2){R=aq;H.push(ad.getDate());break}}}for(var aq=0;aq<L.length;aq++){var O=L[aq];var U=ag.parsedate(O,"M",al)||ag.parsedate(O,"MM",al)||ag.parsedate(O,"MMM",al)||ag.parsedate(O,"MMMM",al);if(U){if(R!=undefined&&R==aq){continue}W.push(U.getMonth());if(O.length>2){aw=aq;break}}}for(var aq=0;aq<L.length;aq++){var O=L[aq];var af=ag.parsedate(O,"yyyy",al);if(af){if(R!=undefined&&R==aq){continue}if(aw!=undefined&&aw==aq){continue}ae.push(af.getFullYear())}}var ao=new Array();for(var at=0;at<H.length;at++){for(var an=0;an<W.length;an++){for(var ai=0;ai<ae.length;ai++){var T=new Date(ae[ai],W[an],H[at]);if(ae[ai]<1970){T.setFullYear(ae[ai])}if(T.getTime()!=NaN){ao.push(T)}}}}if(ao.length>0){e=ao[0];aj=true}}if(I){var ah=I.indexOf(":")>=0?I.split(":"):I;var K=ag.parsedate(I,"h:mm tt",al)||ag.parsedate(I,"h:mm:ss tt",al)||ag.parsedate(I,"HH:mm:ss.fff",al)||ag.parsedate(I,"HH:mm:ss.ff",al)||ag.parsedate(I,"HH:mm:ss.tttt",al)||ag.parsedate(I,"HH:mm:ss",al)||ag.parsedate(I,"HH:mm",al)||ag.parsedate(I,"HH",al);var X=0,J=0,aa=0,ab=0;if(K&&K.getTime()!=NaN){X=K.getHours();J=K.getMinutes();aa=K.getSeconds();ab=K.getMilliseconds()}else{if(ah.length==1){X=parseInt(ah[0])}if(ah.length==2){X=parseInt(ah[0]);J=parseInt(ah[1])}if(ah.length==3){X=parseInt(ah[0]);J=parseInt(ah[1]);if(ah[2].indexOf(".")>=0){aa=parseInt(ah[2].toString().split(".")[0]);ab=parseInt(ah[2].toString().split(".")[1])}else{aa=parseInt(ah[2])}}if(ah.length==4){X=parseInt(ah[0]);J=parseInt(ah[1]);aa=parseInt(ah[2]);ab=parseInt(ah[3])}}if(e&&!isNaN(X)&&!isNaN(J)&&!isNaN(aa)&&!isNaN(ab)){e.setHours(X,J,aa,ab);aj=true}}if(aj){return e}}return null},getparseregexp:function(e,R){var T=e._parseRegExp;if(!T){e._parseRegExp=T={}}else{var K=T[R];if(K){return K}}var Q=this.expandFormat(e,R).replace(/([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g,"\\\\$1"),O=["^"],H=[],N=0,J=0,W=this.getTokenRegExp(),L;while((L=W.exec(Q))!==null){var V=Q.slice(N,L.index);N=W.lastIndex;J+=this.appendPreOrPostMatch(V,O);if(J%2){O.push(L[0]);continue}var I=L[0],M=I.length,S;switch(I){case"dddd":case"ddd":case"MMMM":case"MMM":case"gg":case"g":S="(\\D+)";break;case"tt":case"t":S="(\\D*)";break;case"yyyy":case"fff":case"ff":case"f":S="(\\d{"+M+"})";break;case"dd":case"d":case"MM":case"M":case"yy":case"y":case"HH":case"H":case"hh":case"h":case"mm":case"m":case"ss":case"s":S="(\\d\\d?)";break;case"zzz":S="([+-]?\\d\\d?:\\d{2})";break;case"zz":case"z":S="([+-]?\\d\\d?)";break;case"/":S="(\\"+e["/"]+")";break;default:throw"Invalid date format pattern '"+I+"'.";break}if(S){O.push(S)}H.push(L[0])}this.appendPreOrPostMatch(Q.slice(N),O);O.push("$");var U=O.join("").replace(/\s+/g,"\\s+"),P={regExp:U,groups:H};return T[R]=P},outOfRange:function(I,e,H){return I<e||I>H},expandYear:function(L,J){var H=new Date(),e=this.getEra(H);if(J<100){var I=L.twoDigitYearMax;I=typeof I==="string"?new Date().getFullYear()%100+parseInt(I,10):I;var K=this.getEraYear(H,L,e);J+=K-(K%100);if(J>I){J-=100}}return J},parsedate:function(ab,ai,W){if(W==undefined||W==null){W=this.defaultcalendar()}ab=this.trim(ab);var T=W,an=this.getparseregexp(T,ai),N=new RegExp(an.regExp).exec(ab);if(N===null){return null}var aj=an.groups,Z=null,R=null,am=null,al=null,S=null,L=0,ae,ad=0,ak=0,e=0,I=null,U=false;for(var af=0,ah=aj.length;af<ah;af++){var H=N[af+1];if(H){var aa=aj[af],K=aa.length,M=parseInt(H,10);switch(aa){case"dd":case"d":al=M;if(this.outOfRange(al,1,31)){return null}break;case"MMM":case"MMMM":am=this.getMonthIndex(T,H,K===3);if(this.outOfRange(am,0,11)){return null}break;case"M":case"MM":am=M-1;if(this.outOfRange(am,0,11)){return null}break;case"y":case"yy":case"yyyy":R=K<4?this.expandYear(T,M):M;if(this.outOfRange(R,0,9999)){return null}break;case"h":case"hh":L=M;if(L===12){L=0}if(this.outOfRange(L,0,11)){return null}break;case"H":case"HH":L=M;if(this.outOfRange(L,0,23)){return null}break;case"m":case"mm":ad=M;if(this.outOfRange(ad,0,59)){return null}break;case"s":case"ss":ak=M;if(this.outOfRange(ak,0,59)){return null}break;case"tt":case"t":U=T.PM&&(H===T.PM[0]||H===T.PM[1]||H===T.PM[2]);if(!U&&(!T.AM||(H!==T.AM[0]&&H!==T.AM[1]&&H!==T.AM[2]))){return null}break;case"f":case"ff":case"fff":e=M*Math.pow(10,3-K);if(this.outOfRange(e,0,999)){return null}break;case"ddd":case"dddd":S=this.getDayIndex(T,H,K===3);if(this.outOfRange(S,0,6)){return null}break;case"zzz":var J=H.split(/:/);if(J.length!==2){return null}ae=parseInt(J[0],10);if(this.outOfRange(ae,-12,13)){return null}var P=parseInt(J[1],10);if(this.outOfRange(P,0,59)){return null}I=(ae*60)+(this.startsWith(H,"-")?-P:P);break;case"z":case"zz":ae=M;if(this.outOfRange(ae,-12,13)){return null}I=ae*60;break;case"g":case"gg":var V=H;if(!V||!T.eras){return null}V=this.trim(V.toLowerCase());for(var ag=0,ac=T.eras.length;ag<ac;ag++){if(V===T.eras[ag].name.toLowerCase()){Z=ag;break}}if(Z===null){return null}break}}}var Q=new Date(),Y,O=T.convert;Y=Q.getFullYear();if(R===null){R=Y}else{if(T.eras){R+=T.eras[(Z||0)].offset}}if(am===null){am=0}if(al===null){al=1}if(O){Q=O.toGregorian(R,am,al);if(Q===null){return null}}else{Q.setFullYear(R,am,al);if(Q.getDate()!==al){return null}if(S!==null&&Q.getDay()!==S){return null}}if(U&&L<12){L+=12}Q.setHours(L,ad,ak,e);if(I!==null){var X=Q.getMinutes()-(I+Q.getTimezoneOffset());Q.setHours(Q.getHours()+parseInt(X/60,10),X%60)}return Q},cleardatescache:function(){this.datescache=new Array()},formatDate:function(e,I,H){return this.formatdate(e,I,H)},formatdate:function(Z,ad,U){if(U==undefined||U==null){U=this.defaultcalendar()}if(typeof Z==="string"){return Z}var J=Z.toString()+"_"+ad;if(this.datescache&&this.datescache[J]){if(ad.indexOf("f")==-1){return this.datescache[J]}}if(!ad||!ad.length||ad==="i"){var af;af=this.formatDate(Z,U.patterns.F,U);return af}var aa=U.eras,H=ad==="s";ad=this.expandFormat(U,ad);af=[];var M,ab=["0","00","000"],Q,R,e=/([^d]|^)(d|dd)([^d]|$)/g,ae=0,W=this.getTokenRegExp(),I;function O(ag,aj){var ai,ah=ag+"";if(aj>1&&ah.length<aj){ai=(ab[aj-2]+ah);return ai.substr(ai.length-aj,aj)}else{ai=ah}return ai}function ac(){if(Q||R){return Q}Q=e.test(ad);R=true;return Q}function K(ah,ag){if(I){return I[ag]}if(ah.getMonth!=undefined){switch(ag){case 0:return ah.getFullYear();case 1:return ah.getMonth();case 2:return ah.getDate()}}}for(;;){var N=W.lastIndex,V=W.exec(ad);var S=ad.slice(N,V?V.index:ad.length);ae+=this.appendPreOrPostMatch(S,af);if(!V){break}if(ae%2){af.push(V[0]);continue}var X=V[0],L=X.length;switch(X){case"ddd":case"dddd":var T=(L===3)?U.days.namesAbbr:U.days.names;af.push(T[Z.getDay()]);break;case"d":case"dd":Q=true;af.push(O(K(Z,2),L));break;case"MMM":case"MMMM":var Y=K(Z,1);af.push(U.months[L===3?"namesAbbr":"names"][Y]);break;case"M":case"MM":af.push(O(K(Z,1)+1,L));break;case"y":case"yy":case"yyyy":Y=this.getEraYear(Z,U,this.getEra(Z,aa),H);if(L<4){Y=Y%100}af.push(O(Y,L));break;case"h":case"hh":M=Z.getHours()%12;if(M===0){M=12}af.push(O(M,L));break;case"H":case"HH":af.push(O(Z.getHours(),L));break;case"m":case"mm":af.push(O(Z.getMinutes(),L));break;case"s":case"ss":af.push(O(Z.getSeconds(),L));break;case"t":case"tt":Y=Z.getHours()<12?(U.AM?U.AM[0]:" "):(U.PM?U.PM[0]:" ");af.push(L===1?Y.charAt(0):Y);break;case"f":case"ff":case"fff":af.push(O(Z.getMilliseconds(),3).substr(0,L));break;case"z":case"zz":M=Z.getTimezoneOffset()/60;af.push((M<=0?"+":"-")+O(Math.floor(Math.abs(M)),L));break;case"zzz":M=Z.getTimezoneOffset()/60;af.push((M<=0?"+":"-")+O(Math.floor(Math.abs(M)),2)+":"+O(Math.abs(Z.getTimezoneOffset()%60),2));break;case"g":case"gg":if(U.eras){af.push(U.eras[this.getEra(Z,aa)].name)}break;case"/":af.push(U["/"]);break;default:throw"Invalid date format pattern '"+X+"'.";break}}var P=af.join("");if(!this.datescache){this.datescache=new Array()}this.datescache[J]=P;return P}});i.jqx.data={};var l,E,p=/#.*$/,a=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,f=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,j=/^(?:GET|HEAD)$/,o=/^\/\//,k=/\?/,b=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,d=/([?&])_=[^&]*/,h=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,t=/\s+/,F=i.fn.load,G={},C={},q=["*/"]+["*"];try{E=location.href}catch(A){E=document.createElement("a");E.href="";E=E.href}l=h.exec(E.toLowerCase())||[];function r(e){return function(K,M){if(typeof K!=="string"){M=K;K="*"}var H,N,O,J=K.toLowerCase().split(t),I=0,L=J.length;if(i.isFunction(M)){for(;I<L;I++){H=J[I];O=/^\+/.test(H);if(O){H=H.substr(1)||"*"}N=e[H]=e[H]||[];N[O?"unshift":"push"](M)}}}}function v(H,Q,L,O,N,J){N=N||Q.dataTypes[0];J=J||{};J[N]=true;var P,M=H[N],I=0,e=M?M.length:0,K=(H===G);for(;I<e&&(K||!P);I++){P=M[I](Q,L,O);if(typeof P==="string"){if(!K||J[P]){P=undefined}else{Q.dataTypes.unshift(P);P=v(H,Q,L,O,P,J)}}}if((K||!P)&&!J["*"]){P=v(H,Q,L,O,"*",J)}return P}function u(I,J){var H,e,K=i.jqx.data.ajaxSettings.flatOptions||{};for(H in J){if(J[H]!==undefined){(K[H]?I:(e||(e={})))[H]=J[H]}}if(e){i.extend(true,I,e)}}i.extend(i.jqx.data,{ajaxSetup:function(H,e){if(e){u(H,i.jqx.data.ajaxSettings)}else{e=H;H=i.jqx.data.ajaxSettings}u(H,e);return H},ajaxSettings:{url:E,isLocal:f.test(l[1]),global:true,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:true,async:true,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":q},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":window.String,"text html":true,"text json":i.parseJSON,"text xml":i.parseXML},flatOptions:{context:true,url:true}},ajaxPrefilter:r(G),ajaxTransport:r(C),ajax:function(M,J){if(typeof M==="object"){J=M;M=undefined}J=J||{};var P,ad,K,Y,R,V,I,X,Q=i.jqx.data.ajaxSetup({},J),af=Q.context||Q,T=af!==Q&&(af.nodeType||af instanceof i)?i(af):i.event,ae=i.Deferred(),aa=i.Callbacks("once memory"),N=Q.statusCode||{},U={},ab={},L=0,O="canceled",W={readyState:0,setRequestHeader:function(ag,ah){if(!L){var e=ag.toLowerCase();ag=ab[e]=ab[e]||ag;U[ag]=ah}return this},getAllResponseHeaders:function(){return L===2?ad:null},getResponseHeader:function(ag){var e;if(L===2){if(!K){K={};while((e=a.exec(ad))){K[e[1].toLowerCase()]=e[2]}}e=K[ag.toLowerCase()]}return e===undefined?null:e},overrideMimeType:function(e){if(!L){Q.mimeType=e}return this},abort:function(e){e=e||O;if(Y){Y.abort(e)}S(0,e);return this}};function S(ak,ag,al,ai){var e,ao,am,aj,an,ah=ag;if(L===2){return}L=2;if(R){clearTimeout(R)}Y=undefined;ad=ai||"";W.readyState=ak>0?4:0;if(al){aj=B(Q,W,al)}if(ak>=200&&ak<300||ak===304){if(Q.ifModified){an=W.getResponseHeader("Last-Modified");if(an){i.lastModified[P]=an}an=W.getResponseHeader("Etag");if(an){i.etag[P]=an}}if(ak===304){ah="notmodified";e=true}else{e=c(Q,aj);ah=e.state;ao=e.data;am=e.error;e=!am}}else{am=ah;if(!ah||ak){ah="error";if(ak<0){ak=0}}}W.status=ak;W.statusText=(ag||ah)+"";if(e){ae.resolveWith(af,[ao,ah,W])}else{ae.rejectWith(af,[W,ah,am])}W.statusCode(N);N=undefined;if(I){T.trigger("ajax"+(e?"Success":"Error"),[W,Q,e?ao:am])}aa.fireWith(af,[W,ah]);if(I){T.trigger("ajaxComplete",[W,Q]);if(!(--i.active)){i.event.trigger("ajaxStop")}}}ae.promise(W);W.success=W.done;W.error=W.fail;W.complete=aa.add;W.statusCode=function(ag){if(ag){var e;if(L<2){for(e in ag){N[e]=[N[e],ag[e]]}}else{e=ag[W.status];W.always(e)}}return this};Q.url=((M||Q.url)+"").replace(p,"").replace(o,l[1]+"//");Q.dataTypes=i.trim(Q.dataType||"*").toLowerCase().split(t);if(Q.crossDomain==null){V=h.exec(Q.url.toLowerCase());Q.crossDomain=!!(V&&(V[1]!==l[1]||V[2]!==l[2]||(V[3]||(V[1]==="http:"?80:443))!=(l[3]||(l[1]==="http:"?80:443))))}if(Q.data&&Q.processData&&typeof Q.data!=="string"){Q.data=i.param(Q.data,Q.traditional)}v(G,Q,J,W);if(L===2){return W}I=Q.global;Q.type=Q.type.toUpperCase();Q.hasContent=!j.test(Q.type);if(I&&i.active++===0){i.event.trigger("ajaxStart")}if(!Q.hasContent){if(Q.data){Q.url+=(k.test(Q.url)?"&":"?")+Q.data;delete Q.data}P=Q.url;if(Q.cache===false){var H=(new Date()).getTime(),ac=Q.url.replace(d,"$1_="+H);Q.url=ac+((ac===Q.url)?(k.test(Q.url)?"&":"?")+"_="+H:"")}}if(Q.data&&Q.hasContent&&Q.contentType!==false||J.contentType){W.setRequestHeader("Content-Type",Q.contentType)}if(Q.ifModified){P=P||Q.url;if(i.lastModified[P]){W.setRequestHeader("If-Modified-Since",i.lastModified[P])}if(i.etag[P]){W.setRequestHeader("If-None-Match",i.etag[P])}}W.setRequestHeader("Accept",Q.dataTypes[0]&&Q.accepts[Q.dataTypes[0]]?Q.accepts[Q.dataTypes[0]]+(Q.dataTypes[0]!=="*"?", "+q+"; q=0.01":""):Q.accepts["*"]);for(X in Q.headers){W.setRequestHeader(X,Q.headers[X])}if(Q.beforeSend&&(Q.beforeSend.call(af,W,Q)===false||L===2)){return W.abort()}O="abort";for(X in {success:1,error:1,complete:1}){W[X](Q[X])}Y=v(C,Q,J,W);if(!Y){S(-1,"No Transport")}else{W.readyState=1;if(I){T.trigger("ajaxSend",[W,Q])}if(Q.async&&Q.timeout>0){R=setTimeout(function(){W.abort("timeout")},Q.timeout)}try{L=1;Y.send(U,S)}catch(Z){if(L<2){S(-1,Z)}else{throw Z}}}return W},active:0,lastModified:{},etag:{}});function B(P,O,L){var K,M,J,e,H=P.contents,N=P.dataTypes,I=P.responseFields;for(M in I){if(M in L){O[I[M]]=L[M]}}while(N[0]==="*"){N.shift();if(K===undefined){K=P.mimeType||O.getResponseHeader("content-type")}}if(K){for(M in H){if(H[M]&&H[M].test(K)){N.unshift(M);break}}}if(N[0] in L){J=N[0]}else{for(M in L){if(!N[0]||P.converters[M+" "+N[0]]){J=M;break}if(!e){e=M}}J=J||e}if(J){if(J!==N[0]){N.unshift(J)}return L[J]}}function c(R,J){var P,H,N,L,O=R.dataTypes.slice(),I=O[0],Q={},K=0;if(R.dataFilter){J=R.dataFilter(J,R.dataType)}if(O[1]){for(P in R.converters){Q[P.toLowerCase()]=R.converters[P]}}for(;(N=O[++K]);){if(N!=="*"){if(I!=="*"&&I!==N){P=Q[I+" "+N]||Q["* "+N];if(!P){for(H in Q){L=H.split(" ");if(L[1]===N){P=Q[I+" "+L[0]]||Q["* "+L[0]];if(P){if(P===true){P=Q[H]}else{if(Q[H]!==true){N=L[0];O.splice(K--,0,N)}}break}}}}if(P!==true){if(P&&R["throws"]){J=P(J)}else{try{J=P(J)}catch(M){return{state:"parsererror",error:P?M:"No conversion from "+I+" to "+N}}}}}I=N}}return{state:"success",data:J}}var y=[],n=/\?/,D=/(=)\?(?=&|$)|\?\?/,z=(new Date()).getTime();i.jqx.data.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=y.pop()||(i.expando+"_"+(z++));this[e]=true;return e}});i.jqx.data.ajaxPrefilter("json jsonp",function(Q,L,P){var O,e,N,J=Q.data,H=Q.url,I=Q.jsonp!==false,M=I&&D.test(H),K=I&&!M&&typeof J==="string"&&!(Q.contentType||"").indexOf("application/x-www-form-urlencoded")&&D.test(J);if(Q.dataTypes[0]==="jsonp"||M||K){O=Q.jsonpCallback=i.isFunction(Q.jsonpCallback)?Q.jsonpCallback():Q.jsonpCallback;e=window[O];if(M){Q.url=H.replace(D,"$1"+O)}else{if(K){Q.data=J.replace(D,"$1"+O)}else{if(I){Q.url+=(n.test(H)?"&":"?")+Q.jsonp+"="+O}}}Q.converters["script json"]=function(){if(!N){i.error(O+" was not called")}return N[0]};Q.dataTypes[0]="json";window[O]=function(){N=arguments};P.always(function(){window[O]=e;if(Q[O]){Q.jsonpCallback=L.jsonpCallback;y.push(O)}if(N&&i.isFunction(e)){e(N[0])}N=e=undefined});return"script"}});i.jqx.data.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){i.globalEval(e);return e}}});i.jqx.data.ajaxPrefilter("script",function(e){if(e.cache===undefined){e.cache=false}if(e.crossDomain){e.type="GET";e.global=false}});i.jqx.data.ajaxTransport("script",function(I){if(I.crossDomain){var e,H=document.head||document.getElementsByTagName("head")[0]||document.documentElement;return{send:function(J,K){e=document.createElement("script");e.async="async";if(I.scriptCharset){e.charset=I.scriptCharset}e.src=I.url;e.onload=e.onreadystatechange=function(M,L){if(L||!e.readyState||/loaded|complete/.test(e.readyState)){e.onload=e.onreadystatechange=null;if(H&&e.parentNode){H.removeChild(e)}e=undefined;if(!L){K(200,"success")}}};H.insertBefore(e,H.firstChild)},abort:function(){if(e){e.onload(0,1)}}}}});var w,x=window.ActiveXObject?function(){for(var e in w){w[e](0,1)}}:false,m=0;function g(){try{return new window.XMLHttpRequest()}catch(H){}}function s(){try{return new window.ActiveXObject("Microsoft.XMLHTTP")}catch(H){}}i.jqx.data.ajaxSettings.xhr=window.ActiveXObject?function(){return !this.isLocal&&g()||s()}:g;(function(e){i.extend(i.support,{ajax:!!e,cors:!!e&&("withCredentials" in e)})})(i.jqx.data.ajaxSettings.xhr());if(!i.support){i.support={ajax:true}}if(i.support.ajax){i.jqx.data.ajaxTransport(function(e){if(!e.crossDomain||i.support.cors){var H;return{send:function(N,I){var L,K,M=e.xhr();if(e.username){M.open(e.type,e.url,e.async,e.username,e.password)}else{M.open(e.type,e.url,e.async)}if(e.xhrFields){for(K in e.xhrFields){M[K]=e.xhrFields[K]}}if(e.mimeType&&M.overrideMimeType){M.overrideMimeType(e.mimeType)}if(!e.crossDomain&&!N["X-Requested-With"]){N["X-Requested-With"]="XMLHttpRequest"}try{for(K in N){M.setRequestHeader(K,N[K])}}catch(J){}M.send((e.hasContent&&e.data)||null);H=function(W,Q){var R,P,O,U,T;try{if(H&&(Q||M.readyState===4)){H=undefined;if(L){M.onreadystatechange=function(){};if(x){delete w[L]}}if(Q){if(M.readyState!==4){M.abort()}}else{R=M.status;O=M.getAllResponseHeaders();U={};T=M.responseXML;if(T&&T.documentElement){U.xml=T}try{U.text=M.responseText}catch(V){}try{P=M.statusText}catch(V){P=""}if(!R&&e.isLocal&&!e.crossDomain){R=U.text?200:404}else{if(R===1223){R=204}}}}}catch(S){if(!Q){I(-1,S)}}if(U){I(R,P,U,O)}};if(!e.async){H()}else{if(M.readyState===4){setTimeout(H,0)}else{L=++m;if(x){if(!w){w={};i(window).unload(x)}w[L]=H}M.onreadystatechange=H}}},abort:function(){if(H){H(0,1)}}}}})}i.jqx.filter=function(){this.operator="and";var M=0;var J=1;var P=["EMPTY","NOT_EMPTY","CONTAINS","CONTAINS_CASE_SENSITIVE","DOES_NOT_CONTAIN","DOES_NOT_CONTAIN_CASE_SENSITIVE","STARTS_WITH","STARTS_WITH_CASE_SENSITIVE","ENDS_WITH","ENDS_WITH_CASE_SENSITIVE","EQUAL","EQUAL_CASE_SENSITIVE","NULL","NOT_NULL"];var R=["EQUAL","NOT_EQUAL","LESS_THAN","LESS_THAN_OR_EQUAL","GREATER_THAN","GREATER_THAN_OR_EQUAL","NULL","NOT_NULL"];var S=["EQUAL","NOT_EQUAL","LESS_THAN","LESS_THAN_OR_EQUAL","GREATER_THAN","GREATER_THAN_OR_EQUAL","NULL","NOT_NULL"];var L=["EQUAL","NOT_EQUAL"];var K=new Array();var Q=new Array();this.evaluate=function(X){var V=true;for(var W=0;W<K.length;W++){var U=K[W].evaluate(X);if(W==0){V=U}else{if(Q[W]==J||Q[W]=="or"){V=V||U}else{V=V&&U}}}return V};this.getfilterscount=function(){return K.length};this.setoperatorsbyfiltertype=function(U,V){switch(U){case"numericfilter":R=V;break;case"stringfilter":P=V;break;case"datefilter":S=V;break;case"booleanfilter":L=V;break}};this.getoperatorsbyfiltertype=function(U){var V=new Array();switch(U){case"numericfilter":V=R.slice(0);break;case"stringfilter":V=P.slice(0);break;case"datefilter":V=S.slice(0);break;case"booleanfilter":V=L.slice(0);break}return V};var O=function(){var U=function(){return(((1+Math.random())*65536)|0).toString(16).substring(1)};return(U()+"-"+U()+"-"+U())};this.createfilter=function(Y,V,X,W,U,Z){if(Y==null||Y==undefined){return null}switch(Y){case"numericfilter":return new N(V,X.toUpperCase());case"stringfilter":return new T(V,X.toUpperCase());case"datefilter":return new H(V,X.toUpperCase(),U,Z);case"booleanfilter":return new I(V,X.toUpperCase());case"custom":return new e(V,X.toUpperCase(),W)}throw new Error("jqxGrid: There is no such filter type. The available filter types are: 'numericfilter', 'stringfilter', 'datefilter' and 'booleanfilter'");return null};this.getfilters=function(){var U=new Array();for(var V=0;V<K.length;V++){var W={value:K[V].filtervalue,condition:K[V].comparisonoperator,operator:Q[V],type:K[V].type};if(K[V].data){W.id=K[V].data}U[V]=W}return U};this.addfilter=function(U,V){K[K.length]=V;V.key=O();Q[Q.length]=U};this.removefilter=function(V){for(var U=0;U<K.length;U++){if(K[U].key==V.key){K.splice(U,1);Q.splice(U,1);break}}};this.getoperatorat=function(U){if(U==undefined||U==null){return null}if(U<0||U>K.length){return null}return Q[U]};this.setoperatorat=function(V,U){if(V==undefined||V==null){return null}if(V<0||V>K.length){return null}Q[U]=U};this.getfilterat=function(U){if(U==undefined||U==null){return null}if(U<0||U>K.length){return null}return K[U]};this.setfilterat=function(U,V){if(U==undefined||U==null){return null}if(U<0||U>K.length){return null}V.key=O();K[U]=V};this.clear=function(){K=new Array();Q=new Array()};var T=function(V,U){this.filtervalue=V;this.comparisonoperator=U;this.type="stringfilter";this.evaluate=function(af){var ae=this.filtervalue;var al=this.comparisonoperator;if(af==null||af==undefined||af==""){if(al=="NULL"){return true}if(al=="NOT_NULL"){return false}if(al=="EQUAL"&&af==ae){return true}if(al=="NOT_EQUAL"&&af!=ae){return true}if(al!="EMPTY"){return false}else{if(af==""){return true}}}var an="";try{an=af.toString()}catch(ag){return true}var am=function(ap,ao){switch(al){case"EQUAL":return i.jqx.string.equalsIgnoreCase(ap,ao);case"EQUAL_CASE_SENSITIVE":return i.jqx.string.equals(ap,ao);case"NOT_EQUAL":return !i.jqx.string.equalsIgnoreCase(ap,ao);case"NOT_EQUAL_CASE_SENSITIVE":return !i.jqx.string.equals(ap,ao);case"CONTAINS":return i.jqx.string.containsIgnoreCase(ap,ao);case"CONTAINS_CASE_SENSITIVE":return i.jqx.string.contains(ap,ao);case"DOES_NOT_CONTAIN":return !i.jqx.string.containsIgnoreCase(ap,ao);case"DOES_NOT_CONTAIN_CASE_SENSITIVE":return !i.jqx.string.contains(ap,ao);case"EMPTY":return ap=="";case"NOT_EMPTY":return ap!="";case"NOT_NULL":return ap!=null;case"STARTS_WITH":return i.jqx.string.startsWithIgnoreCase(ap,ao);case"ENDS_WITH":return i.jqx.string.endsWithIgnoreCase(ap,ao);case"ENDS_WITH_CASE_SENSITIVE":return i.jqx.string.endsWith(ap,ao);case"STARTS_WITH_CASE_SENSITIVE":return i.jqx.string.startsWith(ap,ao);default:return false}};var Z=new Array();if(ae&&ae.indexO&&al!=="NOT_EQUAL"){if(ae.indexOf("|")>=0||ae.indexOf(" AND ")>=0||ae.indexOf(" OR ")>=0||ae.indexOf(" and ")>=0||ae.indexOf(" or ")>=0){var aa=am(an,ae);if(aa){return aa}var ab=ae.indexOf(" AND ")>=0?ae.split(" AND "):new Array();var Y=ae.indexOf(" OR ")>=0?ae.split(" OR "):new Array();var X=ae.indexOf(" and ")>=0?ae.split(" and "):new Array();var ac=ae.indexOf(" or ")>=0?ae.split(" or "):new Array();var W=ae.indexOf("|")>=0?ae.split("|"):new Array();if(W.length>0){for(var ak=0;ak<W.length;ak++){W[ak]=i.trim(W[ak])}}var aj=ae.indexOf(" ")>=0?ae.split(" "):new Array();if(aj.length>0){for(var ak=0;ak<aj.length;ak++){aj[ak]=i.trim(aj[ak])}}ab=ab.concat(aj);ab=ab.concat(X);Y=Y.concat(W);Y=Y.concat(ac);if(ab.length>0){for(var ak=0;ak<ab.length;ak++){if(!ab[ak].indexOf(" OR ")>=0){Z.push(ab[ak])}}}if(Y.length>0){for(var ak=0;ak<Y.length;ak++){if(!Y[ak].indexOf(" AND ")>=0){Z.push(Y[ak])}}}var ai=undefined;for(var ah=0;ah<Z.length;ah++){var af=Z[ah];var aa=am(an,af);var ad=ah<ab.length?"and":"or";if(ai==undefined){ai=aa}else{if(ad=="or"){ai=ai||aa}else{ai=ai&&aa}}}return ai}}return am(an,ae)}};var I=function(V,U){this.filtervalue=V;this.comparisonoperator=U;this.type="booleanfilter";this.evaluate=function(Y){var X=this.filtervalue;var W=this.comparisonoperator;if(Y==null||Y==undefined){if(W=="NULL"){return true}return false}var Z=Y;switch(W){case"EQUAL":return Z==X||Z.toString()==X.toString();case"NOT_EQUAL":return Z!=X&&Z.toString()!=X.toString();default:return false}}};var N=function(V,U){this.filtervalue=V;this.comparisonoperator=U;this.type="numericfilter";this.evaluate=function(ag){var af=this.filtervalue;var al=this.comparisonoperator;if(ag===null||ag===undefined||ag===""){if(al=="NOT_NULL"){return false}if(al=="NULL"){return true}else{switch(al){case"EQUAL":return ag==af;case"NOT_EQUAL":return ag!=af}return false}}else{if(al=="NULL"){return false}if(al=="NOT_NULL"){return true}}var an=ag;try{an=parseFloat(an)}catch(ah){if(ag.toString()!=""){return false}}var am=function(ap,ao){switch(al){case"EQUAL":return ap==ao;case"NOT_EQUAL":return ap!=ao;case"GREATER_THAN":return ap>ao;case"GREATER_THAN_OR_EQUAL":return ap>=ao;case"LESS_THAN":return ap<ao;case"LESS_THAN_OR_EQUAL":return ap<=ao;case"STARTS_WITH":return i.jqx.string.startsWithIgnoreCase(ap.toString(),ao.toString());case"ENDS_WITH":return i.jqx.string.endsWithIgnoreCase(ap.toString(),ao.toString());case"ENDS_WITH_CASE_SENSITIVE":return i.jqx.string.endsWith(ap.toString(),ao.toString());case"STARTS_WITH_CASE_SENSITIVE":return i.jqx.string.startsWith(ap.toString(),ao.toString());case"CONTAINS":return i.jqx.string.containsIgnoreCase(ap.toString(),ao.toString());case"CONTAINS_CASE_SENSITIVE":return i.jqx.string.contains(ap.toString(),ao.toString());case"DOES_NOT_CONTAIN":return !i.jqx.string.containsIgnoreCase(ap.toString(),ao.toString());case"DOES_NOT_CONTAIN_CASE_SENSITIVE":return !i.jqx.string.contains(ap.toString(),ao.toString());default:return true}};var aa=new Array();if(af&&af.indexOf){af=af.replace("$","")}if(af&&af.indexOf&&(af.indexOf("|")>=0||af.indexOf(" AND ")>=0||af.indexOf(" OR ")>=0||af.indexOf(" and ")>=0||af.indexOf(" or ")>=0)){var ab=am(an,af);if(ab){return ab}af=af.toString();var ac=af.indexOf(" AND ")>=0?af.split(" AND "):new Array();var Z=af.indexOf(" OR ")>=0?af.split(" OR "):new Array();var Y=af.indexOf(" and ")>=0?af.split(" and "):new Array();var ad=af.indexOf(" or ")>=0?af.split(" or "):new Array();ac=ac.concat(Y);Z=Z.concat(ad);var X=af.indexOf("|")>=0?af.split("|"):new Array();if(X.length>0){for(var ak=0;ak<X.length;ak++){X[ak]=i.trim(X[ak])}}Z=Z.concat(X);if(ac.length>0){for(var ak=0;ak<ac.length;ak++){if(!ac[ak].indexOf(" OR ")>=0){aa.push(ac[ak])}}}if(Z.length>0){for(var ak=0;ak<Z.length;ak++){if(!Z[ak].indexOf(" AND ")>=0){aa.push(Z[ak])}}}var aj=undefined;for(var ai=0;ai<aa.length;ai++){var ag=aa[ai];if(ag&&ag.indexOf&&ag.indexOf("..")>=0){var W=ag.toString().split("..");if(W.length==2){ab=an>=W[0]&&an<=W[1]}}else{var ab=am(an,ag)}var ae=ai<ac.length?"and":"or";if(aj==undefined){aj=ab}else{if(ae=="or"){aj=aj||ab}else{aj=aj&&ab}}}return aj}if(af&&af.indexOf&&af.indexOf("..")>=0){aa=af.toString().split("..");if(aa.length==2){return an>=aa[0]&&an<=aa[1]}}return am(an,af)}};var H=function(X,V,W,ab){this.filtervalue=X;this.type="datefilter";var Z=this;if(W!=undefined&&ab!=undefined){var Y=i.jqx.dataFormat.parsedate(X,W,ab);if(Y!=null){this.filterdate=Y}else{var U=i.jqx.dataFormat.tryparsedate(X,ab);if(U!=null){this.filterdate=U}}}else{var aa=new Date(X);if(aa.toString()=="NaN"||aa.toString()=="Invalid Date"){this.filterdate=i.jqx.dataFormat.tryparsedate(X)}else{this.filterdate=aa}}if(!this.filterdate){var aa=new Date(X);if(aa.toString()=="NaN"||aa.toString()=="Invalid Date"){this.filterdate=i.jqx.dataFormat.tryparsedate(X)}else{this.filterdate=aa}}this.comparisonoperator=V;this.evaluate=function(ao){var an=this.filtervalue;var aw=this.comparisonoperator;if(ao==null||ao==undefined||ao==""){if(aw=="NOT_NULL"){return false}if(aw=="NULL"){return true}else{switch(aw){case"EQUAL":return ao==an;case"NOT_EQUAL":return ao!=an}return false}}else{if(aw=="NULL"){return false}if(aw=="NOT_NULL"){return true}}var ay=new Date();ay.setFullYear(1900,0,1);ay.setHours(12,0,0,0);try{var av=new Date(ao);if(av.toString()=="NaN"||av.toString()=="Invalid Date"){ao=i.jqx.dataFormat.tryparsedate(ao)}else{ao=av}ay=ao;var at=false;if(W!=undefined&&ab!=undefined){if(W.indexOf("t")>=0||W.indexOf("T")>=0||W.indexOf(":")>=0||W.indexOf("f")>=0){at=true;if(an&&an.toString().indexOf(":")==-1){var aj=i.jqx.dataFormat.tryparsedate(an.toString()+":00",ab);if(aj!=null){Z.filterdate=aj}}}}if(W!=undefined){if(W.indexOf("hh")>=0||W.indexOf("t")>=0){at=true}}if(!at){ay.setHours(0);ay.setMinutes(0);ay.setSeconds(0)}}catch(ap){if(ao&&ao.toString()!=""){return false}return false}if(Z.filterdate!=null){an=Z.filterdate}else{if(an&&an.indexOf){if(an.indexOf(":")!=-1||!isNaN(parseInt(an))){var ai=new Date(ay);ai.setHours(12,0,0,0);var ah=an.split(":");for(var au=0;au<ah.length;au++){if(au==0){ai.setHours(ah[au])}if(au==1){ai.setMinutes(ah[au])}if(au==2){ai.setSeconds(ah[au])}}an=ai}}}if(at){if(an&&an.setFullYear){if(ay&&ay.getFullYear){if(W.indexOf("d")==-1&&W.indexOf("M")==-1&&W.indexOf("y")==-1){an.setFullYear(ay.getFullYear(),ay.getMonth(),ay.getDate())}}}}var ax=function(aA,az){if(aA==null){aA=""}switch(aw){case"EQUAL":return aA.toString()==az.toString();case"NOT_EQUAL":return aA.toString()!=az.toString();case"GREATER_THAN":return aA>az;case"GREATER_THAN_OR_EQUAL":return aA>=az;case"LESS_THAN":return aA<az;case"LESS_THAN_OR_EQUAL":return aA<=az;case"STARTS_WITH":return i.jqx.string.startsWithIgnoreCase(aA.toString(),az.toString());case"ENDS_WITH":return i.jqx.string.endsWithIgnoreCase(aA.toString(),az.toString());case"ENDS_WITH_CASE_SENSITIVE":return i.jqx.string.endsWith(aA.toString(),az.toString());case"STARTS_WITH_CASE_SENSITIVE":return i.jqx.string.startsWith(aA.toString(),az.toString());case"CONTAINS":return i.jqx.string.containsIgnoreCase(aA.toString(),az.toString());case"CONTAINS_CASE_SENSITIVE":return i.jqx.string.contains(aA.toString(),az.toString());case"DOES_NOT_CONTAIN":return !i.jqx.string.containsIgnoreCase(aA.toString(),az.toString());case"DOES_NOT_CONTAIN_CASE_SENSITIVE":return !i.jqx.string.contains(aA.toString(),az.toString());default:return true}};var ag=new Array();if(an&&an.indexOf){if(an.indexOf("|")>=0||an.indexOf(" AND ")>=0||an.indexOf(" OR ")>=0||an.indexOf(" and ")>=0||an.indexOf(" or ")>=0){var aj=ax(ay,an);if(aj){return aj}var ak=an.indexOf(" AND ")>=0?an.split(" AND "):new Array();var af=an.indexOf(" OR ")>=0?an.split(" OR "):new Array();var ae=an.indexOf(" and ")>=0?an.split(" and "):new Array();var al=an.indexOf(" or ")>=0?an.split(" or "):new Array();ak=ak.concat(ae);af=af.concat(al);var ad=an.indexOf("|")>=0?an.split("|"):new Array();if(ad.length>0){for(var au=0;au<ad.length;au++){ad[au]=i.trim(ad[au])}}af=af.concat(ad);if(ak.length>0){for(var au=0;au<ak.length;au++){if(!ak[au].indexOf(" OR ")>=0){ag.push(ak[au])}}}if(af.length>0){for(var au=0;au<af.length;au++){if(!af[au].indexOf(" AND ")>=0){ag.push(af[au])}}}var ar=undefined;for(var aq=0;aq<ag.length;aq++){var ao=ag[aq];if(ao&&ao.indexOf&&ao.indexOf("..")>=0){var ac=ao.toString().split("..");if(ac.length==2){aj=ay>=ac[0]&&ay<=ac[1]}}else{var aj=ax(ay,ao)}var am=aq<ak.length?"and":"or";if(ar==undefined){ar=aj}else{if(am=="or"){ar=ar||aj}else{ar=ar&&aj}}}return ar}}if(an&&an.indexOf&&an.indexOf("..")>=0){ag=an.toString().split("..");if(ag.length==2){return ay>=ag[0]&&ay<=ag[1]}}return ax(ay,an)}};var e=function(V,U,W){this.filtervalue=V;this.comparisonoperator=U;this.evaluate=function(Y,X){return W(this.filtervalue,Y,this.comparisonoperator)}}}})(jqxBaseFramework)})();



/***/ }),

/***/ 7749:
/***/ (() => {

﻿/* tslint:disable */
/* eslint-disable */
(function () {
    if (typeof document === 'undefined') {
        return;
    }

    (function ($) {
        window.jqxToDash = function (value) {
            return value.split(/(?=[A-Z])/).join('-').toLowerCase();
        }

        var LINE_SEPARATOR2 = "\r\n";
        function returnAttributeIfPopulated(key, value, booleanTransformer) {
            if (!value && value !== "" && value !== 0) {
                return "";
            }
            let xmlValue = value;
            if (typeof value === "boolean") {
                if (booleanTransformer) {
                    xmlValue = booleanTransformer(value);
                }
            }
            return ` ${key}="${xmlValue}"`;
        }

        var XmlFactory = class {
            static createHeader(headerElement = {}) {
                const headerStart = "<?";
                const headerEnd = "?>";
                const keys = ["version"];
                if (!headerElement.version) {
                    headerElement.version = "1.0";
                }
                if (headerElement.encoding) {
                    keys.push("encoding");
                }
                if (headerElement.standalone) {
                    keys.push("standalone");
                }
                const att = keys.map((key) => `${key}="${headerElement[key]}"`).join(" ");
                return `${headerStart}xml ${att} ${headerEnd}`;
            }
            static createXml(xmlElement, booleanTransformer) {
                let props = "";
                if (xmlElement.properties) {
                    if (xmlElement.properties.prefixedAttributes) {
                        xmlElement.properties.prefixedAttributes.forEach((prefixedSet) => {
                            Object.keys(prefixedSet.map).forEach((key) => {
                                props += returnAttributeIfPopulated(
                                    prefixedSet.prefix + key,
                                    prefixedSet.map[key],
                                    booleanTransformer
                                );
                            });
                        });
                    }
                    if (xmlElement.properties.rawMap) {
                        Object.keys(xmlElement.properties.rawMap).forEach((key) => {
                            props += returnAttributeIfPopulated(key, xmlElement.properties.rawMap[key], booleanTransformer);
                        });
                    }
                }
                let result = "<" + xmlElement.name + props;
                if (!xmlElement.children && xmlElement.textNode == null) {
                    return result + "/>" + LINE_SEPARATOR2;
                }
                if (xmlElement.textNode != null) {
                    return result + ">" + xmlElement.textNode + "</" + xmlElement.name + ">" + LINE_SEPARATOR2;
                }
                result += ">" + LINE_SEPARATOR2;
                if (xmlElement.children) {
                    xmlElement.children.forEach((it) => {
                        result += this.createXml(it, booleanTransformer);
                    });
                }
                return result + "</" + xmlElement.name + ">" + LINE_SEPARATOR2;
            }
        };

        class DataExporter {
            constructor(exportDetails, groupBy, filterBy, conditionalFormatting) {
                const that = this;

                if (!exportDetails) {
                    exportDetails = {};
                }

                /*
                 * "style" object definition (all properties are optional):
                 *
                 * «any valid CSS property» - applied to whole table
                 * header (Object)
                 *      «any valid CSS property» - applied to header cells
                 *      «any column name» (Object)
                 *          «any valid CSS property» - applied to particular column header cell
                 * columns (Object)
                 *      «any valid CSS property» - applied to column cells
                 *      «any column name» (Object)
                 *          «any valid CSS property» - applied to the cells of particular column
                 *          format - applicable to numeric and date columns
                 *          «n» (Object), where «n» is a row index (related to use of "ConditionalFormatting" object)
                 *              background
                 *              border
                 *              color
                 * rows (Object)
                 *      «any valid CSS property» - applied to rows
                 *      alternationCount
                 *      alternationStart
                 *      alternationEnd
                 *      alternationIndex«n»Color, where «n» is an integer
                 *      alternationIndex«n»BorderColor, where «n» is an integer
                 *      alternationIndex«n»BackgroundColor, where «n» is an integer
                 *      «n» (Object), where «n» is a row index
                 *          «any valid CSS property» - applied to particular row
                 */
                that.style = exportDetails.style;

                that.header = exportDetails.header;
                that.exportHeader = exportDetails.exportHeader !== undefined ? exportDetails.exportHeader : true;
                that.hierarchical = exportDetails.hierarchical;
                that.expandChar = exportDetails.expandChar || '+';
                that.collapseChar = exportDetails.collapseChar || '-';
                that.pageOrientation = exportDetails.pageOrientation;
                that.allowNull = exportDetails.allowNull || false;
                that.spreadsheets = exportDetails.spreadsheets || null;

                that._media = [];

                if (!that.hierarchical && groupBy && groupBy.length > 0) {
                    that.groupBy = groupBy;
                }
                else {
                    that.mergedCells = exportDetails.mergedCells;
                }

                if (!that.groupBy && filterBy && Object.keys(filterBy).length > 0) {
                    that.filterBy = filterBy;
                }

                if (conditionalFormatting) {
                    that.conditionalFormatting = conditionalFormatting;
                }

                that.timeBetween1900And1970 = new Date(1970, 0, 1, 0, 0, 0).getTime() - new Date(1900, 0, 1, 0, 0, 0).getTime();
            }

            /**
             * Generates and downloads a file.
             */
            downloadFile(data, type, fileName) {
                let file;

                if (!fileName) {
                    return data;
                }

                if (data instanceof Blob) {
                    file = data;
                }
                else {
                    file = new Blob([data], { type: type });
                }

                if (window.navigator.msSaveOrOpenBlob) { // Edge
                    window.navigator.msSaveOrOpenBlob(file, fileName);
                }
                else { // Chrome, Firefox, Safari
                    const a = document.createElement('a'),
                        url = URL.createObjectURL(file);

                    a.href = url;
                    a.download = fileName;
                    a.style.position = 'absolute';
                    a.style.visibility = 'hidden';

                    document.body.appendChild(a);

                    a.click();

                    setTimeout(function () {
                        document.body.removeChild(a);
                        window.URL.revokeObjectURL(url);
                    }, 100);
                }
            }

            /**
             * Exports data.
             */
            exportData(data, format, fileName, callback) {
                const that = this;

                that.actualHierarchy = that.hierarchical;
                format = format.toLowerCase();

                if (that.exportHeader) {
                    if (that.header) {
                        data = data.slice(0);

                        if (data.length === 0) {
                            that.actualHierarchy = false;
                        }

                        that.processComplexHeader(that.header, data, format);
                    }
                    else if (data.length === 1) {
                        that.actualHierarchy = false;
                    }
                }

                if (data.length === 0) {
                    // eslint-disable-next-line
                    console.warn('No data to export.');
                    return;
                }

                if (format === 'xlsx') {
                    that.xlsxStartIndex = that.complexHeader ? that.complexHeader.length : +that.exportHeader;

                    const offset = that.headerContent ? that.headerContent.length : 0;
                    that.xlsxStartIndex = that.xlsxStartIndex + offset;
                }

                if (that.actualHierarchy) {
                    data = that.processHierarchicalData(data, format);
                }

                that.getDatafields(data);

                if (fileName && fileName.slice(fileName.length - format.length - 1, fileName.length) !== '.' + format) {
                    fileName += '.' + format;
                }

                let output = null;
                switch (format) {
                    case 'csv':
                        output = that.exportToCSVAndTSV(data, { delimiter: ', ', MIME: 'text/csv;charset=utf-8;', toRemove: 2 }, fileName);
                        break;
                    case 'html':
                        output = that.exportToHTML(data, fileName);
                        break;
                    case 'jpeg':
                    case 'png':
                        that.exportToImage(data, fileName, format, callback);
                        break;
                    case 'json':
                        output = that.exportToJSON(data, fileName);
                        break;
                    case 'pdf':
                        output = that.exportToPDF(data, fileName);
                        break;
                    case 'tsv':
                        output = that.exportToCSVAndTSV(data, { delimiter: '\t', MIME: 'text/tab-separated-values', toRemove: 1 }, fileName);
                        break;
                    case 'xlsx':
                        output = that.exportToXLSX(data, fileName, callback);
                        break;
                    case 'xml':
                        output = that.exportToXML(data, fileName);
                        break;
                    case 'md':
                        output = that.exportToMD(data, fileName);
                        break;
                }

                if (callback && output) {
                    callback(output);
                }

                delete that.complexHeader;

                return output;
            }

            /**
             * Exports to CSV and TSV.
             */
            exportToCSVAndTSV(data, formatOptions, fileName) {
                const that = this,
                    datafields = that.datafields;
                let stringResult = '';

                for (let i = 0; i < data.length; i++) {
                    const currentRecord = data[i];
                    let stringifiedCurrentRecord = '';

                    for (let j = 0; j < datafields.length; j++) {
                        if (that.actualHierarchy && j === 0) {
                            stringifiedCurrentRecord += ('""' + formatOptions.delimiter).repeat(currentRecord._level - 1) +
                                '"' + currentRecord[datafields[j]] + '"' + formatOptions.delimiter +
                                ('""' + formatOptions.delimiter).repeat(that.maxLevel - currentRecord._level);
                            continue;
                        }

                        stringifiedCurrentRecord += '"' + currentRecord[datafields[j]] + '"' + formatOptions.delimiter;
                    }

                    stringifiedCurrentRecord = stringifiedCurrentRecord.slice(0, stringifiedCurrentRecord.length - formatOptions.toRemove) + '\n';
                    stringResult += stringifiedCurrentRecord;
                }

                if (!fileName) {
                    return stringResult;
                }

                const bom = '\uFEFF';
                const csvContent = bom + stringResult;
                return this.downloadFile(csvContent, formatOptions.MIME, fileName);
            }

            /**
             * Exports to HTML.
             */
            exportToHTML(data, fileName) {
                const that = this,
                    datafields = that.datafields,
                    style = that.style;
                let header = '',
                    startIndex = 0,
                    html2canvas = '';

                data = that.processGroupingInformation(data);
                that.data = data;

                if (that.exportHeader) {
                    header = that.getHTMLHeader(datafields, data);
                    startIndex = 1;
                }

                if (arguments[2]) {
                    const scripts = Array.from(document.getElementsByTagName('script')),
                        html2canvasScript = scripts.find(script => script.src.indexOf('html2canvas') !== -1);
                    html2canvas = `<script type="text/javascript" src="${html2canvasScript.src}"></script>`;
                }

                let htmlContent = `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <style type="text/css">
    ${that.getRowStyle()}${that.getColumnStyle()}
        </style>${html2canvas}${that.toggleableFunctionality()}
    </head>
    <body>
        <table${that.getTableStyle()}>${header}
            <tbody>\n`;

                const mergedMainCells = {},
                    mergedSecondaryCells = {},
                    groupsHandled = [];

                that.getMergedCellsInfo(mergedMainCells, mergedSecondaryCells);

                mainLoop:
                for (let i = startIndex; i < data.length; i++) {
                    const currentRecord = data[i],
                        row = i - startIndex;
                    let n = that.getAlternationIndex(row, ' rowN'),
                        toCollapse = '',
                        level = '',
                        groupId = '',
                        outlineLevel = 0;

                    if (that.actualHierarchy) {
                        if (currentRecord._collapsed) {
                            toCollapse = ' collapsed';
                        }

                        level = ` level="${currentRecord._level}"`;
                    }
                    else if (that.groupBy) {
                        for (let k = 0; k < that.groupBy.length; k++) {
                            const datafield = that.groupBy[k],
                                currentGroup = currentRecord[datafield],
                                currentGroupLabel = that.groups[datafield][currentGroup];

                            groupId += currentGroup;

                            if (groupsHandled.indexOf(groupId) === -1) {
                                htmlContent += `            <tr class="row">
                    <td class="column group" style="padding-left: ${outlineLevel * 25}px;" colspan="${that.datafields.length}">${currentGroupLabel}</td>
                </tr>`;
                                groupsHandled.push(groupId);
                                i--;
                                continue mainLoop;
                            }

                            outlineLevel++;
                        }
                    }

                    let currentContent = `            <tr class="row row${row}${n}${toCollapse}"${level}`;

                    if (!fileName) {
                        currentContent += ' style="page-break-inside: avoid;"'
                    }

                    currentContent += '>\n';

                    for (let j = 0; j < datafields.length; j++) {
                        const cellCode = j + ',' + (row);
                        let colspan = 1, rowspan = 1;

                        if (mergedMainCells[cellCode]) {
                            colspan = mergedMainCells[cellCode].colspan;
                            rowspan = mergedMainCells[cellCode].rowspan;
                        }
                        else if (mergedSecondaryCells[cellCode]) {
                            continue;
                        }

                        const datafield = datafields[j];
                        let value = currentRecord[datafield],
                            indent = '';

                        if (that.actualHierarchy && j === 0) {
                            let sign = '';

                            if (currentRecord._expanded) {
                                sign = that.collapseChar;
                            }
                            else if (currentRecord._expanded === false) {
                                sign = that.expandChar;
                            }

                            indent = `<div class="toggle-element" style="margin-left: ${25 * (currentRecord._level - 1) + 5}px;" expanded>${sign}</div>`;
                        }

                        value = that.getFormattedValue(value, datafield);

                        if (typeof value === 'string' && (value.indexOf('base64') >= 0 || value.indexOf('.svg') >= 0 || value.indexOf('.png') >= 0 || value.indexOf('.jpeg') >= 0)) {
                            value = `<img height="30" src="${value}"/>`;
                        }

                        let css = '';

                        if (style && style.columns && style.columns[datafield] && style.columns[datafield][row]) {
                            const uniqueStyle = style.columns[datafield][row];

                            css += `border-color: ${uniqueStyle.border}; background-color: ${uniqueStyle.background}; color: ${uniqueStyle.color};"`;
                        }

                        if (j === 0 && outlineLevel > 1) {
                            css += `padding-left: ${(outlineLevel - 1) * 25}px;"`;
                        }

                        if (css) {
                            css = ` style="${css}"`;
                        }

                        currentContent += `                <td class="column column${datafield}"${css} colspan="${colspan}" rowspan="${rowspan}">${indent + value}</td>\n`;
                    }

                    htmlContent += currentContent + '            </tr>\n';
                }

                htmlContent += `        </tbody>
        </table>
    </body>
    </html>`;

                if (arguments[2]) {
                    return htmlContent;
                }

                return this.downloadFile(htmlContent, 'text/html', fileName);
            }

            /**
             * Exports to an image (PNG/JPEG).
             */
            exportToImage(data, fileName, fileExtension, callback) {
                const that = this;

                try {
                    html2canvas;
                }
                catch (error) {
                    throw new Error('jqx-grid: Missing reference to \'html2canvas.min.js\'.');
                }

                let imageData = null;

                const htmlContent = that.exportToHTML(data, fileName, true),
                    iframe = document.createElement('iframe');

                iframe.style.position = 'absolute';
                iframe.style.top = 0;
                iframe.style.left = 0;
                iframe.style.border = 'none';
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                iframe.style.opacity = 0;
                iframe.style.pointerEvents = 'none';

                document.body.appendChild(iframe);

                iframe.contentDocument.write(htmlContent);

                function checkIframePopulated() {
                    if (!iframe.contentDocument.body || !iframe.contentDocument.body.firstElementChild) {
                        requestAnimationFrame(checkIframePopulated);
                    }
                    else {
                        iframe.contentWindow.html2canvas(iframe.contentDocument.body.firstElementChild).then(canvas => {
                            const draw = new JQX.Utilities.Draw(document.createElement('div'));

                            imageData = canvas.toDataURL('image/png');

                            if (callback) {
                                callback(imageData);
                            }
                            else {
                                document.body.appendChild(canvas);
                                draw.exportImage(undefined, canvas, fileExtension, fileName);
                            }

                            iframe.remove();
                            canvas.remove();
                        });
                    }
                }

                checkIframePopulated();

                return imageData;
            }

            /**
             * Gets merged cells information (for use in HTML and PDF export).
             */
            getMergedCellsInfo(mergedMainCells, mergedSecondaryCells, mapping) {
                const that = this;

                if (!that.mergedCells) {
                    return;
                }

                const multipleTables = mapping && mapping[that.datafields.length - 1] !== 0;

                that.mergedCellsPDF = that.mergedCells.slice(0);

                for (let i = 0; i < that.mergedCellsPDF.length; i++) {
                    const cellDefinition = that.mergedCellsPDF[i];
                    let colspan = cellDefinition.colspan,
                        rowspan = cellDefinition.rowspan;

                    if (rowspan < 2 && colspan < 2) {
                        continue;
                    }

                    const row = cellDefinition.cell[1];
                    let col = cellDefinition.cell[0];

                    if (multipleTables && colspan > 1) {
                        const startTable = mapping[col],
                            endTable = mapping[col + colspan - 1],
                            splitCells = [];

                        if (endTable > startTable) {
                            let currentTable = startTable,
                                currentColumn = col,
                                overal = 0;

                            mainLoop:
                            for (let i = startTable; i <= endTable; i++) {
                                let start = currentColumn,
                                    span = 0;

                                while (mapping[currentColumn] === currentTable) {
                                    currentColumn++;
                                    overal++;
                                    span++;

                                    if (overal === colspan) {
                                        splitCells.push({ start: start, span: span });
                                        break mainLoop;
                                    }
                                }

                                splitCells.push({ start: start, span: span });
                                currentTable = mapping[currentColumn];
                            }

                            colspan = splitCells[0].span;

                            for (let i = 1; i < splitCells.length; i++) {
                                that.mergedCellsPDF.push({ cell: [splitCells[i].start, row], colspan: splitCells[i].span, rowspan: rowspan, originalCell: col });
                            }
                        }
                    }

                    for (let j = col; j < col + colspan; j++) {
                        for (let k = row; k < row + rowspan; k++) {
                            const code = j + ',' + k;

                            if (j === col && k === row) {
                                mergedMainCells[code] = { colspan: colspan, rowspan: rowspan, originalCell: cellDefinition.originalCell };
                                continue;
                            }

                            mergedSecondaryCells[code] = true;
                        }
                    }
                }
            }

            /**
             * Gets alternation index.
             */
            getAlternationIndex(row, prefix) {
                const that = this;

                if (!that.style) {
                    return '';
                }

                const rowsDefinition = that.style.rows,
                    alternationCount = rowsDefinition && rowsDefinition.alternationCount;

                if (alternationCount &&
                    (((rowsDefinition.alternationStart === undefined || row >= rowsDefinition.alternationStart) &&
                        (rowsDefinition.alternationEnd === undefined || row <= rowsDefinition.alternationEnd)) ||
                        rowsDefinition.alternationStart === rowsDefinition.alternationEnd)) {
                    return prefix + (row % rowsDefinition.alternationCount);
                }

                return '';
            }

            /**
             * Gets formatted numeric or date value (for use in HTML and PDF export).
             */
            getFormattedValue(value, datafield) {
                const that = this,
                    style = that.style;

                if (value === null) {
                    return that.allowNull ? 'null' : '';
                }

                if (datafield && style && style.columns &&
                    style.columns[datafield] && style.columns[datafield].format) {
                    if (typeof value === 'number') {
                        return that.formatNumber(value, style.columns[datafield].format);
                    }
                    else if (value instanceof Date) {
                        return that.formatDate(value, style.columns[datafield].format);
                    }
                }
                else if (value instanceof Date) {
                    return that.formatDate(value, 'd');
                }

                return value;
            }

            /**
             * Exports to JSON.
             */
            exportToJSON(data, fileName) {
                return this.downloadFile(JSON.stringify(data, this.datafields.concat('rows')), 'application/json', fileName);
            }

            /**
             * Export to Markdown(MD)
             * @param {string} data - the data to export
             * @param {string} fileName - the name of the file
             * @returns 
             */
            exportToMD(data, fileName) {
                const that = this,
                    dataFields = that.datafields;
                let text = '';


                for (let i = 0, max = data.length; i < max; i += 1) {
                    for (let j = 0, max = dataFields.length; j < max; j += 1) {
                        const dataField = data[i][dataFields[j]];

                        if (typeof dataField === 'string') {
                            text += dataField;
                        }
                    }
                }

                return that.downloadFile(text, 'application/text', fileName);
            }

            /**
             * Exports to PDF.
             */
            exportToPDF(data, fileName) {
                try {
                    pdfMake;
                }
                catch (error) {
                    throw new Error('Missing reference to \'pdfmake.min.js\'.');
                }

                const that = this,
                    datafields = that.datafields,
                    startIndex = +that.exportHeader,
                    groupsHandled = [],
                    mergedMainCells = {},
                    mergedSecondaryCells = {},
                    mapping = {},
                    headerRows = startIndex ? that.complexHeader ? that.complexHeader.length : 1 : 0,
                    docDefinition = {
                        pageOrientation: that.pageOrientation || 'portrait'
                    };
                let header = [], content = [], tables;

                function createTableRow() {
                    let tableRow = [];

                    for (let i = 0; i < tables.length; i++) {
                        tableRow.push([]);
                    }

                    return tableRow;
                }

                data = that.processGroupingInformation(data);
                that.data = data;
                that.headerRows = headerRows;
                that.getPDFStyle();

                const styleInfo = that.styleInfo;

                tables = styleInfo ? that.wrapPDFColumns(docDefinition, mapping) : [{ body: header, datafields: datafields }];

                if (startIndex) {
                    header = that.getPDFHeader(datafields, tables, mapping);
                }

                that.getMergedCellsInfo(mergedMainCells, mergedSecondaryCells, mapping);

                mainLoop:
                for (let i = startIndex; i < data.length; i++) {
                    const currentRecord = data[i];
                    let groupId = '',
                        outlineLevel = 0;

                    if (that.groupBy) {
                        for (let k = 0; k < that.groupBy.length; k++) {
                            const datafield = that.groupBy[k],
                                currentGroup = currentRecord[datafield],
                                currentGroupLabel = that.groups[datafield][currentGroup];

                            groupId += currentGroup;

                            if (groupsHandled.indexOf(groupId) === -1) {
                                that.createGroupHeaderRow(tables, { text: currentGroupLabel, style: ['row', 'cell', 'group'], marginLeft: outlineLevel * 7.5 });
                                groupsHandled.push(groupId);
                                i--;
                                continue mainLoop;
                            }

                            outlineLevel++;
                        }
                    }

                    const tableRow = createTableRow(),
                        row = i - startIndex;
                    let n = that.getAlternationIndex(row, '');

                    for (let j = 0; j < datafields.length; j++) {
                        const datafield = datafields[j],
                            entry = { style: ['row', 'row' + row, 'cell', 'cell' + datafield] },
                            tableIndex = mapping[j] || 0;

                        if (n !== undefined) {
                            entry.style.splice(1, 0, 'rowN' + n);
                        }

                        if (that.mergedCellsPDF) {
                            const cellCode = j + ',' + row,
                                mergeInfo = mergedMainCells[cellCode];

                            if (mergeInfo) {
                                entry.colSpan = mergeInfo.colspan;
                                entry.rowSpan = mergeInfo.rowspan;

                                if (mergeInfo.originalCell !== undefined) {
                                    entry.text = '';
                                    entry.style[entry.style.length - 1] = 'cell' + datafields[mergeInfo.originalCell];
                                    tableRow[tableIndex].push(entry);
                                    continue;
                                }
                            }
                            else if (mergedSecondaryCells[cellCode]) {
                                tableRow[tableIndex].push({});
                                continue;
                            }
                        }

                        const value = that.getFormattedValue(currentRecord[datafield], datafield);

                        entry.text = value.toString();
                        that.getUniqueStylePDF(entry, datafield, row);
                        that.setIndentation(entry, { j: j, currentRecord: currentRecord, value: value, outlineLevel: outlineLevel });
                        tableRow[tableIndex].push(entry);
                    }

                    for (let k = 0; k < tables.length; k++) {
                        tables[k].body.push(tableRow[k]);
                    }
                }

                if (styleInfo) {
                    for (let i = 0; i < tables.length; i++) {
                        const body = tables[i].body;

                        for (let j = headerRows - 1; j >= 0; j--) {
                            body.unshift(header[i][j]);
                        }

                        content.push({
                            table: {
                                headerRows: headerRows,
                                widths: tables[i].widths,
                                heights: function (row) {
                                    if (styleInfo.heights[row]) {
                                        return styleInfo.heights[row];
                                    }

                                    if (styleInfo.defaultHeight) {
                                        return styleInfo.defaultHeight;
                                    }
                                },
                                body: body
                            },
                            pageBreak: 'after'
                        });
                    }

                    delete content[tables.length - 1].pageBreak;
                    docDefinition.styles = styleInfo.styles;
                }
                else {
                    const body = tables[0].body;

                    for (let j = headerRows - 1; j >= 0; j--) {
                        body.unshift(header[0][j]);
                    }

                    content = [{ table: { headerRows: headerRows, body: body } }];
                    docDefinition.styles = { header: { bold: true }, group: { bold: true } };
                }

                docDefinition.content = content;

                if (!fileName) {
                    const output = pdfMake.createPdf(docDefinition);

                    delete that.mergedCellsPDF;
                    delete that.styleInfo;

                    return output;
                }
                pdfMake.createPdf(docDefinition).download(fileName);

                delete that.mergedCellsPDF;
                delete that.styleInfo;
            }

            /**
             * Gets the header content when exporting to PDF.
             */
            getPDFStyle() {
                const that = this,
                    style = that.style;

                if (!style) {
                    return '';
                }

                const sampleRecord = that.data[0],
                    headerDefinition = style.header,
                    columnsDefinition = style.columns,
                    rowsDefinition = style.rows,
                    styleInfo = {
                        heights: [],
                        widths: Array(that.datafields.length).fill('*'),
                        styles: {
                            header: {},
                            row: {},
                            cell: {},
                            group: { fillColor: '#FFFFFF', color: '#000000', bold: true }
                        }
                    };

                that.styleInfo = styleInfo;

                function processStyleDefinition(definition, type) {
                    if (!definition) {
                        return;
                    }

                    for (let prop in definition) {
                        if (!Object.prototype.hasOwnProperty.call(definition, prop)) {
                            continue;
                        }

                        if (sampleRecord[prop] === undefined) {
                            if (prop === 'height' && type === 'header') {
                                for (let i = 0; i < that.headerRows; i++) {
                                    styleInfo.heights[i] = (parseInt(definition[prop], 10) / that.headerRows) / 1.4;
                                }
                            }
                            else {
                                that.storePDFStyle({ prop: prop, value: definition[prop], toUpdate: type });
                            }
                        }
                        else {
                            for (let columnProp in definition[prop]) {
                                if (!isNaN(columnProp) || !Object.prototype.hasOwnProperty.call(definition[prop], columnProp)) {
                                    continue;
                                }

                                const value = definition[prop][columnProp],
                                    index = that.datafields.indexOf(prop);

                                if (columnProp === 'width' && styleInfo.widths[index] === '*') {
                                    styleInfo.widths[index] = value;
                                }
                                else {
                                    that.storePDFStyle({ prop: columnProp, value: value, toUpdate: type + prop });
                                }
                            }
                        }
                    }
                }

                processStyleDefinition(headerDefinition, 'header');
                processStyleDefinition(columnsDefinition, 'cell');

                if (!rowsDefinition) {
                    return;
                }

                for (let prop in rowsDefinition) {
                    if (!Object.prototype.hasOwnProperty.call(rowsDefinition, prop) || prop.indexOf('alt') !== -1) {
                        continue;
                    }

                    const value = rowsDefinition[prop];

                    if (!isNaN(prop)) {
                        for (let rowProp in value) {
                            if (Object.prototype.hasOwnProperty.call(value, rowProp)) {
                                if (rowProp === 'height') {
                                    styleInfo.heights[parseFloat(prop) + that.headerRows] = parseFloat(value[rowProp]) / 1.4;
                                }
                                else {
                                    that.storePDFStyle({ prop: rowProp, value: value[rowProp], toUpdate: 'row' + prop });
                                }
                            }
                        }

                        continue;
                    }

                    if (prop === 'height') {
                        styleInfo.defaultHeight = parseFloat(value) / 1.4;
                    }
                    else {
                        that.storePDFStyle({ prop: prop, value: value, toUpdate: 'row' });
                    }
                }

                if (!rowsDefinition.alternationCount) {
                    return;
                }

                for (let i = 0; i < rowsDefinition.alternationCount; i++) {
                    const styleN = {};

                    if (rowsDefinition[`alternationIndex${i}Color`]) {
                        styleN.color = rowsDefinition[`alternationIndex${i}Color`];
                    }

                    if (rowsDefinition[`alternationIndex${i}BackgroundColor`]) {
                        styleN.fillColor = rowsDefinition[`alternationIndex${i}BackgroundColor`];
                    }

                    styleInfo.styles['rowN' + i] = styleN;
                }
            }

            /**
             * Stores style in object to be applied to generated PDF.
             */
            storePDFStyle(details) {
                const that = this;
                let objectToUpdate = that.styleInfo.styles[details.toUpdate];

                if (!objectToUpdate) {
                    objectToUpdate = {};
                    that.styleInfo.styles[details.toUpdate] = objectToUpdate;
                }

                let value = details.value;

                switch (details.prop) {
                    case 'backgroundColor':
                        objectToUpdate.fillColor = value;
                        break;
                    case 'color':
                        objectToUpdate.color = value;
                        break;
                    case 'fontSize':
                        objectToUpdate.fontSize = parseFloat(value);
                        break;
                    case 'fontStyle':
                        if (value === 'italic') {
                            objectToUpdate.italics = true;
                        }

                        break;
                    case 'fontWeight':
                        if (value === 'bold') {
                            objectToUpdate.bold = true;
                        }

                        break;
                    case 'textAlign':
                        objectToUpdate.alignment = value;
                        break;
                }
            }

            /**
             * Enables column wrapping when exporting to PDF.
             */
            wrapPDFColumns(docDefinition, mapping) {
                const that = this,
                    styleInfo = this.styleInfo,
                    maxPerPage = docDefinition.pageOrientation === 'portrait' ? 655 : 1155, // maximum of 655px (portrait) or 1155px (landscape) per A4 page
                    tables = [];
                let currentPage = 0;

                for (let i = 0; i < styleInfo.widths.length; i++) {
                    let currentWidth = styleInfo.widths[i],
                        numericWidth;

                    if (currentWidth === '*') {
                        numericWidth = maxPerPage / 6;
                    }
                    else if (typeof currentWidth === 'string' && currentWidth.indexOf('%') !== -1) {
                        numericWidth = Math.min(maxPerPage, Math.floor((parseFloat(currentWidth) / 100) * maxPerPage));

                        if (numericWidth === maxPerPage) {
                            currentWidth = '*';
                        }
                    }
                    else {
                        currentWidth = parseFloat(currentWidth);

                        if (currentWidth >= maxPerPage) {
                            numericWidth = maxPerPage
                            currentWidth = '*';
                        }
                        else {
                            numericWidth = currentWidth;
                            currentWidth /= 1.4;
                        }
                    }

                    if (tables[currentPage] === undefined) {
                        const body = [];

                        tables[currentPage] = {
                            body: body,
                            width: numericWidth,
                            widths: [currentWidth],
                            datafields: [that.datafields[i]]
                        };
                        mapping[i] = currentPage;
                        continue;
                    }

                    const table = tables[currentPage];

                    if (table.width + numericWidth > maxPerPage) {
                        currentPage++;
                        i--;
                        continue;
                    }

                    mapping[i] = currentPage;
                    table.width += numericWidth;
                    table.widths.push(currentWidth);
                    table.datafields.push(that.datafields[i]);
                }

                return tables;
            }

            /**
             * Gets the header content when exporting to PDF.
             */
            getPDFHeader(datafields, tables, mapping) {
                const that = this,
                    headerArray = [],
                    headerRows = that.headerRows,
                    headers = [],
                    headerDataFields = [];
                let result = [],
                    headerStructure, headerDataFieldStructure;

                if (that.complexHeader) {
                    headerStructure = that.complexHeader;
                    headerDataFieldStructure = that.complexDataFieldsHeader;
                }
                else {
                    headerStructure = [Object.values(that.data[0])];
                    headerDataFieldStructure = headerStructure;
                }

                for (let i = 0; i < headerRows; i++) {
                    const row = headerStructure[i],
                        rowDataField = headerDataFieldStructure[i];

                    for (let k = 0; k < row.length; k++) {
                        let tableIndex = mapping[k] || 0;

                        if (!headers[tableIndex]) {
                            headers[tableIndex] = [];
                            headerDataFields[tableIndex] = [];
                        }

                        if (!headers[tableIndex][i]) {
                            headers[tableIndex][i] = [];
                            headerDataFields[tableIndex][i] = [];
                        }

                        headers[tableIndex][i].push(row[k]);
                        headerDataFields[tableIndex][i].push(rowDataField[k]);
                    }
                }

                function processHeader(header, headerDataField, result, table) {
                    for (let j = 0; j < headerRows; j++) {
                        const row = header[j],
                            rowDataField = headerDataField[j];
                        const tableRow = [];

                        for (let k = 0; k < row.length; k++) {
                            const currentDataField = rowDataField[k];
                            let colspan = 1, rowspan = 1;

                            if ((rowDataField[k - 1] && rowDataField[k - 1] === currentDataField) ||
                                (headerDataField[j - 1] && (headerDataField[j - 1][k] === currentDataField))) {
                                tableRow.push({});
                                continue;
                            }

                            let iterator = k + 1;

                            while (rowDataField[iterator] && rowDataField[iterator] === rowDataField[iterator - 1]) {
                                colspan++;
                                iterator++;
                            }

                            iterator = j + 1;

                            while (headerDataField[iterator] && headerDataField[iterator][k] === currentDataField) {
                                rowspan++;
                                iterator++;
                            }

                            const datafield = j === headerRows - 1 || rowspan + j === headerRows ?
                                table.datafields[k] : null,
                                entry = {
                                    text: row[k], colSpan: colspan, rowSpan: rowspan
                                };

                            if (!datafield) {
                                entry.alignment = 'center';
                                entry.style = 'header';
                            }
                            else {
                                entry.style = ['header', 'header' + datafield];
                            }

                            tableRow.push(entry);
                        }

                        result.push(tableRow);
                    }
                }

                for (let i = 0; i < tables.length; i++) {
                    result = [];
                    processHeader(headers[i], headerDataFields[i], result, tables[i]);
                    headerArray.push(result);
                }

                return headerArray;
            }

            /**
             * Creates group header rows when exporting to PDF.
             */
            createGroupHeaderRow(tables, entryTemplate) {
                for (let i = 0; i < tables.length; i++) {
                    const entry = Object.assign({}, entryTemplate),
                        colspan = tables[i].datafields.length,
                        tableRow = [entry];

                    entry.colSpan = colspan;
                    tableRow.length = colspan;
                    tableRow.fill({}, 1, colspan - 1);

                    tables[i].body.push(tableRow);
                }
            }

            /**
             * Gets unique cell style when exporting to PDF.
             */
            getUniqueStylePDF(entry, datafield, row) {
                const style = this.style;

                function toHex(background) {
                    const parts = /rgba\((\d+),(\d+),(\d+)\,(\d*.\d+|\d+)\)/gi.exec(background.replace(/\s/g, ''));

                    if (parts === null) {
                        return background;
                    }

                    const r = parseFloat(parts[1]).toString(16).toUpperCase(),
                        g = parseFloat(parts[2]).toString(16).toUpperCase(),
                        b = parseFloat(parts[3]).toString(16).toUpperCase();

                    return '#' + ('0').repeat(2 - r.length) + r +
                        ('0').repeat(2 - g.length) + g +
                        ('0').repeat(2 - b.length) + b;
                }

                if (!style || !style.columns || !style.columns[datafield]) {
                    return;
                }

                const uniqueStyle = style.columns[datafield][row];

                if (!uniqueStyle) {
                    return;
                }

                entry.fillColor = toHex(uniqueStyle.background);
                entry.color = uniqueStyle.color.toLowerCase();
            }

            /**
             * Sets the indentation of a PDF cell.
             */
            setIndentation(entry, details) {
                if (details.j !== 0) {
                    return;
                }

                const that = this;

                if (that.actualHierarchy) {
                    const currentRecord = details.currentRecord;

                    if (currentRecord._expanded !== undefined) {
                        entry.marginLeft = 25 * (currentRecord._level - 1);
                        entry.text = that.collapseChar + ' ' + details.value;
                    }
                    else {
                        entry.marginLeft = 25 * (currentRecord._level - 1) + 6;
                    }
                }
                else if (details.outlineLevel > 1) {
                    entry.marginLeft = (details.outlineLevel - 1) * 7.5;
                }
            }

            addBodyImageToMap(image, rowIndex, col, columnsToExport) {
                const sheetIndex = 1;
                const { row, column } = image.position || {};
                const calculatedImage = image;
                if (columnsToExport) {
                    if (rowIndex !== null && col !== null && (!row || !column)) {
                        if (!image.position) {
                            image.position = {};
                        }
                        image.position = Object.assign({}, image.position, {
                            row: rowIndex,
                            column: columnsToExport.indexOf(col) + 1
                        });
                    }
                    calculatedImage.totalWidth = calculatedImage.width;
                    calculatedImage.totalHeight = calculatedImage.height;
                }
                this.buildImageMap({ imageToAdd: calculatedImage, idx: sheetIndex });
                let worksheetImageIdMap = this.worksheetImageIds.get(sheetIndex);
                if (!worksheetImageIdMap) {
                    worksheetImageIdMap = new Map();
                    this.worksheetImageIds.set(sheetIndex, worksheetImageIdMap);
                }
                const sheetImages = this.worksheetImages.get(sheetIndex);
                if (!sheetImages) {
                    this.worksheetImages.set(sheetIndex, [calculatedImage]);
                } else {
                    sheetImages.push(calculatedImage);
                }
                if (!worksheetImageIdMap.get(image.id)) {
                    worksheetImageIdMap.set(image.id, { index: worksheetImageIdMap.size, type: image.imageType });
                }
            }
            buildImageMap(params) {
                const { imageToAdd, idx } = params;
                const mappedImagesToSheet = this.images.get(imageToAdd.id);
                if (mappedImagesToSheet) {
                    const currentSheetImages = mappedImagesToSheet.find((currentImage) => currentImage.sheetId === idx);
                    if (currentSheetImages) {
                        currentSheetImages.image.push(imageToAdd);
                    } else {
                        mappedImagesToSheet.push({
                            sheetId: idx,
                            image: [imageToAdd]
                        });
                    }
                } else {
                    this.images.set(imageToAdd.id, [{ sheetId: idx, image: [imageToAdd] }]);
                    this.workbookImageIds.set(imageToAdd.id, { type: imageToAdd.imageType, index: this.workbookImageIds.size });
                }
            }

            createXmlPart(body, skipHeader) {
                const header = XmlFactory.createHeader({
                    encoding: "UTF-8",
                    standalone: "yes"
                });
                const xmlBody = XmlFactory.createXml(body);
                if (skipHeader) {
                    return xmlBody;
                }
                return `${header}${xmlBody}`;
            }

            generateWorksheetImages(zip, xl, data) {
                const that = this;

                this.images = new Map();
                this.worksheetImages = new Map();
                this.worksheetHeaderFooterImages = new Map();
                this.workbookImageIds = new Map();
                this.worksheetImageIds = new Map();
                let drawingIndex = 0;
                let imgCounter = 0;
                let imgIndex = 0;
                if (that.addImageToCell) {
                    let offset = that.headerContent ? that.headerContent.length : 0;
                    if (that.complexHeader) {
                        offset += that.complexHeader.length - 1;
                    }

                    for (let i = 1 + offset; i < data.length; i++) {
                        const row = data[i];
                        for (let j = 0; j < that.datafields.length; j++) {
                            const dataField = that.datafields[j];
                            let value = row[dataField];

                            if (value && Array.isArray(value)) {
                                for (let m = 0; m < value.length; m++) {
                                    const addedImage = that.addImageToCell(i + imgIndex++, dataField, value[m], value, row, m);
                                    if (addedImage) {
                                        row[dataField] = '';
                                        this.addBodyImageToMap(
                                            addedImage.image,
                                            1 + i,
                                            dataField,
                                            that.datafields
                                        );
                                    }
                                }
                                continue;
                            }

                            const addedImage = that.addImageToCell(i + imgIndex++, dataField, value, value, row, 0);
                            if (addedImage) {
                                row[dataField] = '';
                                if (addedImage.value && addedImage.value !== value) {
                                    row[dataField] = addedImage.value;
                                }
                                this.addBodyImageToMap(
                                    addedImage.image,
                                    1 + i,
                                    dataField,
                                    that.datafields
                                );
                            }
                        }
                    }

                    if (that.headerContent) {
                        for (let m = 0; m < that.headerContent.length; m++) {
                            const row = data[m];
                            for (let j = 0; j < that.datafields.length; j++) {
                                const dataField = that.datafields[j];
                                const value = row[dataField];

                                const addedImage = that.addImageToCell(m + 1, dataField, value, value, row, 0);
                                if (addedImage) {
                                    row[dataField] = '';
                                    this.addBodyImageToMap(
                                        addedImage.image,
                                        1 + m,
                                        dataField,
                                        that.datafields
                                    );
                                }
                            }
                        }
                    }

                    this.images.forEach((value) => {
                        const firstImage = value[0].image[0];
                        const { base64, imageType } = firstImage;
                        const ext = imageType === 'jpg' ? 'jpeg' : imageType;
                        // Function to convert a base64 string to a Blob
                        const base64ToBlob = (base64, mimeType) => {
                            if (!base64) {
                                base64 = '';
                            }
                            const byteCharacters = atob(base64);
                            const byteNumbers = new Array(byteCharacters.length);
                            for (let i = 0; i < byteCharacters.length; i++) {
                                byteNumbers[i] = byteCharacters.charCodeAt(i);
                            }
                            const byteArray = new Uint8Array(byteNumbers);
                            return new Blob([byteArray], { type: mimeType });
                        }

                        let imageBlob;
                        // Convert the Base64 string to a PNG Blob
                        if (base64 && Array.isArray(base64)) {
                            imageBlob = base64ToBlob(base64[0].split(',')[1], 'image/' + ext);
                        }
                        else {
                            imageBlob = base64ToBlob(base64.split(',')[1], 'image/' + ext);
                        }

                        zip.file(`xl/media/image${++imgCounter}.${ext}`, imageBlob, true);
                    });
                }

                let imageRelationCounter = 0;

                var INCH_TO_EMU = 9525;

                var pixelsToEMU = (value) => {
                    return Math.ceil(value * INCH_TO_EMU);
                };

                var getImageBoxSize = (image) => {
                    image.fitCell = !!image.fitCell || !image.width || !image.height;
                    const { position = {}, fitCell, width = 0, height = 0, totalHeight, totalWidth } = image;
                    const { offsetX = 0, offsetY = 0, row = 1, rowSpan = 1, column = 1, colSpan = 1 } = position;
                    return {
                        from: {
                            row: row - 1,
                            col: column - 1,
                            offsetX: pixelsToEMU(offsetX),
                            offsetY: pixelsToEMU(offsetY)
                        },
                        to: {
                            row: row - 1 + (fitCell ? 1 : rowSpan - 1),
                            col: column - 1 + (fitCell ? 1 : colSpan - 1),
                            offsetX: pixelsToEMU(width + offsetX),
                            offsetY: pixelsToEMU(height + offsetY)
                        },
                        height: pixelsToEMU(totalHeight || height),
                        width: pixelsToEMU(totalWidth || width)
                    };
                };
                var getPicture = (image, currentIndex, worksheetImageIndex, imageBoxSize) => {
                    return {
                        name: "xdr:pic",
                        children: [
                            getNvPicPr(image, currentIndex + 1),
                            getBlipFill(image, worksheetImageIndex + 1),
                            getSpPr(image, imageBoxSize)
                        ]
                    };
                };


                var getBlipFill = (image, index) => {
                    let blipChildren;
                    if (image.transparency) {
                        const transparency = Math.min(Math.max(image.transparency, 0), 100);
                        blipChildren = [
                            {
                                name: "a:alphaModFix",
                                properties: {
                                    rawMap: {
                                        amt: 1e5 - Math.round(transparency * 1e3)
                                    }
                                }
                            }
                        ];
                    }
                    if (image.recolor) {
                        if (!blipChildren) {
                            blipChildren = [];
                        }
                        switch (image.recolor.toLocaleLowerCase()) {
                            case "grayscale":
                                blipChildren.push({ name: "a:grayscl" });
                                break;
                            case "sepia":
                                blipChildren.push(getDuoTone({ color: "black" }, { color: "D9C3A5", tint: 50, saturation: 180 }));
                                break;
                            case "washout":
                                blipChildren.push({
                                    name: "a:lum",
                                    properties: {
                                        rawMap: {
                                            bright: "70000",
                                            contrast: "-70000"
                                        }
                                    }
                                });
                                break;
                            default:
                        }
                    }
                    return {
                        name: "xdr:blipFill",
                        children: [
                            {
                                name: "a:blip",
                                properties: {
                                    rawMap: {
                                        cstate: "print",
                                        "r:embed": `rId${index}`,
                                        "xmlns:r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships"
                                    }
                                },
                                children: blipChildren
                            },
                            {
                                name: "a:stretch",
                                children: [
                                    {
                                        name: "a:fillRect"
                                    }
                                ]
                            }
                        ]
                    };
                };
                var getSpPr = (image, imageBoxSize) => {
                    const xfrm = {
                        name: "a:xfrm",
                        children: [
                            {
                                name: "a:off",
                                properties: {
                                    rawMap: {
                                        x: 0,
                                        y: 0
                                    }
                                }
                            },
                            {
                                name: "a:ext",
                                properties: {
                                    rawMap: {
                                        cx: imageBoxSize.width,
                                        cy: imageBoxSize.height
                                    }
                                }
                            }
                        ]
                    };
                    if (image.rotation) {
                        const rotation = image.rotation;
                        xfrm.properties = {
                            rawMap: {
                                rot: Math.min(Math.max(rotation, 0), 360) * 6e4
                            }
                        };
                    }
                    const prstGeom = {
                        name: "a:prstGeom",
                        properties: {
                            rawMap: {
                                prst: "rect"
                            }
                        },
                        children: [{ name: "a:avLst" }]
                    };
                    const ret = {
                        name: "xdr:spPr",
                        children: [xfrm, prstGeom]
                    };
                    return ret;
                };

                var getExt = (image) => {
                    const children = [
                        {
                            name: "a:ext",
                            properties: {
                                rawMap: {
                                    uri: "{FF2B5EF4-FFF2-40B4-BE49-F238E27FC236}"
                                }
                            },
                            children: [
                                {
                                    name: "a16:creationId",
                                    properties: {
                                        rawMap: {
                                            id: "{822E6D20-D7BC-2841-A643-D49A6EF008A2}",
                                            "xmlns:a16": "http://schemas.microsoft.com/office/drawing/2014/main"
                                        }
                                    }
                                }
                            ]
                        }
                    ];
                    const recolor = image.recolor && image.recolor.toLowerCase();
                    switch (recolor) {
                        case "grayscale":
                        case "sepia":
                        case "washout":
                            children.push({
                                name: "a:ext",
                                properties: {
                                    rawMap: {
                                        uri: "{C183D7F6-B498-43B3-948B-1728B52AA6E4}"
                                    }
                                },
                                children: [
                                    {
                                        name: "adec:decorative",
                                        properties: {
                                            rawMap: {
                                                val: "0",
                                                "xmlns:adec": "http://schemas.microsoft.com/office/drawing/2017/decorative"
                                            }
                                        }
                                    }
                                ]
                            });
                    }
                    return {
                        name: "a:extLst",
                        children
                    };
                };

                var getNvPicPr = (image, index) => ({
                    name: "xdr:nvPicPr",
                    children: [
                        {
                            name: "xdr:cNvPr",
                            properties: {
                                rawMap: {
                                    id: index,
                                    name: image.id,
                                    descr: image.altText != null ? image.altText : void 0
                                }
                            },
                            children: [getExt(image)]
                        },
                        {
                            name: "xdr:cNvPicPr",
                            properties: {
                                rawMap: {
                                    preferRelativeResize: "0"
                                }
                            },
                            children: [
                                {
                                    name: "a:picLocks"
                                }
                            ]
                        }
                    ]
                });

                var getAnchor = (name, imageAnchor) => ({
                    name: `xdr:${name}`,
                    children: [
                        {
                            name: "xdr:col",
                            textNode: imageAnchor.col.toString()
                        },
                        {
                            name: "xdr:colOff",
                            textNode: imageAnchor.offsetX.toString()
                        },
                        {
                            name: "xdr:row",
                            textNode: imageAnchor.row.toString()
                        },
                        {
                            name: "xdr:rowOff",
                            textNode: imageAnchor.offsetY.toString()
                        }
                    ]
                });

                var drawingFactory = {
                    getTemplate(config) {
                        const { sheetIndex } = config;
                        const sheetImages = that.worksheetImages.get(sheetIndex);
                        const sheetImageIds = that.worksheetImageIds.get(sheetIndex);
                        const children = sheetImages.map((image, idx) => {
                            const boxSize = getImageBoxSize(image);
                            return {
                                name: "xdr:twoCellAnchor",
                                properties: {
                                    rawMap: {
                                        editAs: "absolute"
                                    }
                                },
                                children: [
                                    getAnchor("from", boxSize.from),
                                    getAnchor("to", boxSize.to),
                                    getPicture(image, idx, sheetImageIds.get(image.id).index, boxSize),
                                    { name: "xdr:clientData" }
                                ]
                            };
                        });
                        return {
                            name: "xdr:wsDr",
                            properties: {
                                rawMap: {
                                    "xmlns:xdr": "http://schemas.openxmlformats.org/drawingml/2006/spreadsheetDrawing",
                                    "xmlns:a": "http://schemas.openxmlformats.org/drawingml/2006/main",
                                }
                            },
                            children
                        };
                    }
                };

                const createDrawing = (sheetIndex) => {
                    return this.createXmlPart(drawingFactory.getTemplate({ sheetIndex }));
                }
                // enterprise-modules/excel-export/src/excelExport/files/ooxml/relationship.ts
                var relationshipFactory = {
                    getTemplate(config) {
                        const { Id, Type, Target } = config;
                        return {
                            name: "Relationship",
                            properties: {
                                rawMap: {
                                    Id,
                                    Type,
                                    Target
                                }
                            }
                        };
                    }
                };
                var relationship_default = relationshipFactory;

                // enterprise-modules/excel-export/src/excelExport/files/ooxml/relationships.ts
                var relationshipsFactory = {
                    getTemplate(c) {
                        const children = c.map((relationship) => relationship_default.getTemplate(relationship));
                        return {
                            name: "Relationships",
                            properties: {
                                rawMap: {
                                    xmlns: "http://schemas.openxmlformats.org/package/2006/relationships"
                                }
                            },
                            children
                        };
                    }
                };
                var relationships_default = relationshipsFactory;

                const createDrawingRel = (sheetIndex) => {
                    const worksheetImageIds = this.worksheetImageIds.get(sheetIndex) || [];
                    const XMLArr = [];
                    for (const [key, value] of worksheetImageIds) {
                        XMLArr.push({
                            Id: `rId${value.index + 1}`,
                            Type: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image",
                            Target: `../media/image${this.workbookImageIds.get(key).index + 1}.${value.type}`
                        });
                    }
                    return this.createXmlPart(relationshipsFactory.getTemplate(XMLArr));
                }

                var createExcelXmlDrawings = (sheetIndex, drawingIndex) => {
                    const drawingFolder = 'xl/drawings';
                    const drawingFileName = `${drawingFolder}/drawing${drawingIndex + 1}.xml`;
                    const relFileName = `${drawingFolder}/_rels/drawing${drawingIndex + 1}.xml.rels`;
                    zip.file(relFileName, createDrawingRel(sheetIndex));
                    zip.file(drawingFileName, createDrawing(sheetIndex));
                };

                for (let i = 1; i < data.length; i++) {
                    const hasImages = this.worksheetImages.has(i);
                    if (hasImages) {
                        createExcelXmlDrawings(i, imageRelationCounter);
                        drawingIndex = imageRelationCounter;
                        imageRelationCounter++;
                    }
                }

                const createRelationships = ({
                    drawingIndex,
                    tableIndex
                } = {}) => {
                    if (drawingIndex === void 0 && tableIndex === void 0) {
                        return '';
                    }
                    const config = [];

                    if (drawingIndex !== null && imgCounter > 0) {
                        config.push({
                            Id: `rId${config.length + 1}`,
                            Type: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing",
                            Target: `../drawings/drawing${drawingIndex + 1}.xml`
                        });
                    }
                    if (tableIndex !== null) {
                        config.push({
                            Id: `rId${config.length + 1}`,
                            Type: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/table",
                            Target: `../tables/table1.xml`
                        });
                    }
                    const rs = relationships_default.getTemplate(config);
                    return this.createXmlPart(rs);
                }

                var tableIndex = this.exportAsTable ? 1 : 0;
                const worksheetRelFile = `xl/worksheets/_rels/sheet1.xml.rels`;
                zip.file(
                    worksheetRelFile,
                    createRelationships({
                        tableIndex,
                        drawingIndex
                    })
                );
            }
            /**
             * Exports to XLSX.
             */
            exportToXLSX(data, fileName, callback) {
                try {
                    JSZip;
                }
                catch (error) {
                    throw new Error('Missing reference to \'jszip.min.js\'.');
                }

                const that = this;
                let style = that.style;

                data = that.processGroupingInformation(data, true);
                that.data = data;
                that.getColumnsArray();

                that.complexHeaderMergedCells = [];

                if (that.complexHeaderMergeInfo) {
                    for (let cell in that.complexHeaderMergeInfo) {
                        if (Object.prototype.hasOwnProperty.call(that.complexHeaderMergeInfo, cell)) {
                            const currentEntry = that.complexHeaderMergeInfo[cell];

                            if (currentEntry.from[0] === currentEntry.to[0] &&
                                currentEntry.from[1] === currentEntry.to[1]) {
                                continue;
                            }

                            that.complexHeaderMergedCells.push({
                                from: that.columnsArray[currentEntry.from[1]] + (currentEntry.from[0] + 1),
                                to: that.columnsArray[currentEntry.to[1]] + (currentEntry.to[0] + 1)
                            });
                        }
                    }
                }

                that.getConditionalFormatting();

                if (!style) {
                    style = that.generateDefaultStyle(data);
                }

                // eslint-disable-next-line
                const zip = new JSZip(),
                    _rels = zip.folder('_rels'),
                    docProps = zip.folder('docProps'),
                    xl = zip.folder('xl');

                if (that.headerContent) {
                    const rows = that.headerContent;
                    const customRows = [];
                    for (let i = 0; i < rows.length; i++) {
                        const row = rows[i];
                        const cells = row.cells;
                        let customRow = {};
                        for (let j = 0; j < that.datafields.length; j++) {
                            const dataField = that.datafields[j];
                            if (cells[dataField]) {
                                customRow[dataField] = cells[dataField];
                            }
                            else {
                                customRow[dataField] = null;
                            }
                        }
                        customRows.push(customRow);
                    }
                    data = [...customRows, ...data];
                }

                if (that.footerContent) {
                    const rows = that.footerContent;
                    const customRows = [];
                    for (let i = 0; i < rows.length; i++) {
                        const row = rows[i];
                        const cells = row.cells;
                        let customRow = {};
                        for (let j = 0; j < that.datafields.length; j++) {
                            const dataField = that.datafields[j];
                            if (cells[dataField]) {
                                customRow[dataField] = cells[dataField];
                            }
                            else {
                                customRow[dataField] = null;
                            }
                        }
                        customRows.push(customRow);
                    }
                    data = [...data, ...customRows];
                }

                this.generateWorksheetImages(zip, xl, data);

                const sharedStrings = that.generateSharedStrings(data),
                    sharedStringsCollection = sharedStrings.collection,
                    sharedStringsXML = sharedStrings.xml,
                    stylesXML = that.generateStyles(style),
                    sheet1XML = that.groupBy ? that.generateSheet1WithGrouping(data, sharedStringsCollection) :
                        that.generateSheet1(data, sharedStringsCollection, that.datafields, that.columnsArray),
                    auxiliaryFiles = that.generateAuxiliaryFiles();


                let hasImages = false;
                const worksheetImages = this.worksheetImages.get(1);
                if (worksheetImages && worksheetImages.length) {
                    hasImages = true;
                }

                const xl_rels = xl.folder('_rels'),
                    theme = xl.folder('theme'),
                    worksheets = xl.folder('worksheets');

                if (hasImages) {
                    const media = xl.folder('media'),
                        drawings = xl.folder('drawings'),
                        drawingsRels = xl.folder('drawings/_rels');
                }

                _rels.file('.rels', auxiliaryFiles._relsRels);
                docProps.file('app.xml', auxiliaryFiles.docPropsAppXml);
                docProps.file('core.xml', auxiliaryFiles.docPropsCoreXml);
                xl_rels.file('workbook.xml.rels', auxiliaryFiles.xl_relsWorkbookXmlRels);
                theme.file('theme1.xml', auxiliaryFiles.xlThemeTheme1Xml);
                worksheets.file('sheet1.xml', sheet1XML);
                xl.file('sharedStrings.xml', sharedStringsXML);
                xl.file('styles.xml', stylesXML);
                xl.file('workbook.xml', auxiliaryFiles.xlWorkbookXml);
                zip.file('[Content_Types].xml', auxiliaryFiles.Content_TypesXml);


                if (this.spreadsheets) {
                    let sheetIndex = 2;
                    for (let s = 0; s < this.spreadsheets.length; s++) {
                        const sheet = this.spreadsheets[s];
                        const dataFields = sheet.dataFields;
                        let data = [...sheet.dataSource];

                        let header = [];
                        for (let i = 0; i < sheet.columns.length; i++) {
                            const column = sheet.columns[i];
                            if (typeof column === 'string') {
                                header[column] = column;
                            }
                            else {
                                header[column.dataField] = column.label || column.text;
                            }
                        }
                        data.splice(0, 0, header);
                        const sheet1XML = that.generateSheet1(data, sharedStringsCollection, dataFields, that.getColumnsArrayFromDataFields(dataFields), sheetIndex);
                        worksheets.file('sheet' + sheetIndex++ + '.xml', sheet1XML);
                    }
                }

                if (this.exportAsTable) {
                    const columnNames = Object.values(that.data[0]);

                    const createGUID = () => {
                        function part() {
                            return Math.floor((1 + Math.random()) * 0x10000)
                                .toString(16)
                                .substring(1);
                        }

                        return part() + part() + '-' + part() + '-' + part() + '-' + part() + '-' + part() + part() + part();
                    }

                    const dimensionEnd = (that.groupBy && that.groupBy.length) ? that.groupDimensionEnd : that.columnsArray[that.columnsArray.length - 1] + (data.length - 1);

                    let table = `<table xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:xr="http://schemas.microsoft.com/office/spreadsheetml/2014/revision" xmlns:xr3="http://schemas.microsoft.com/office/spreadsheetml/2016/revision3" mc:Ignorable="xr xr3" id="1" name="Table1" displayName="Table1" ref="A${this.xlsxStartIndex}:${dimensionEnd}" totalsRowShown="0">
    <autoFilter ref="A${this.xlsxStartIndex}:${dimensionEnd}">`;
                    for (let i = 0; i < columnNames.length; i++) {
                        table += `<filterColumn colId="${i}" hiddenButton="0"/>
    `;
                    }
                    table += '</autoFilter>';
                    let tableColumns = `
    <tableColumns count="${columnNames.length}">`;

                    for (let i = 0; i < columnNames.length; i++) {
                        const column = columnNames[i];

                        tableColumns += `<tableColumn id="${i + 1}" name="${column}" dataCellStyle="Normal"/>
    `;
                    }
                    tableColumns += `
    </tableColumns>`;

                    table += tableColumns;
                    table += `
        <tableStyleInfo name="TableStyleLight1" showFirstColumn="0" showLastColumn="0" showRowStripes="1" showColumnStripes="0"/>
    </table>`;


                    const tables = xl.folder('tables');
                    tables.file('table1.xml', table);
                }

                zip.generateAsync({
                    type: 'blob',
                    mimeType:
                        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                })
                    .then(function (content) {
                        if (!fileName && callback) {
                            callback(content);
                        }
                        return that.downloadFile(content, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName);
                    });

                delete that.conditionalFormattingXLSX;
                delete that.complexHeaderMergeInfo;
                delete that.defaultRowHeight;
                delete that.rowHeight;
            }

            /**
             * Processes grouping information.
             */
            processGroupingInformation(data, xlsx) {
                const that = this;

                if (!that.groupBy) {
                    return data;
                }

                let header;

                data = data.slice(0);

                if (that.exportHeader) {
                    if (xlsx && that.complexHeader) {
                        header = data.slice(0, that.complexHeader.length);
                        data.splice(0, that.complexHeader.length);
                    }
                    else {
                        header = [data[0]];
                        data.splice(0, 1);
                    }
                }

                if (data.length > 1) {
                    const getCompareFunction = function (a, knownDataType) {
                        // gets data type of column (not necessary if the Grid provides this information)
                        const dataType = knownDataType || typeof a;
                        let compareFunction;

                        switch (dataType) {
                            case 'string':
                                compareFunction = new Intl.Collator().compare;
                                break;
                            case 'number':
                                compareFunction = function (a, b) {
                                    return a - b;
                                };
                                break;
                            case 'boolean':
                            case 'bool':
                                compareFunction = function (a, b) {
                                    if (a === b) {
                                        return 0;
                                    }
                                    else if (a === false) {
                                        return -1;
                                    }
                                    else {
                                        return 1;
                                    }
                                };
                                break;
                            case 'date':
                            case 'time':
                            case 'dateTime':
                                if (a instanceof Date) {
                                    compareFunction = function (a, b) {
                                        return a.getTime() - b.getTime();
                                    };
                                }

                                break;
                            case 'object':
                                if (a instanceof Date) {
                                    compareFunction = function (a, b) {
                                        return a.getTime() - b.getTime();
                                    };
                                }


                                break;
                        }

                        return compareFunction;
                    }

                    const sortByMultipleColumns = function (dataSource, sortColumns, directions, customSortingCallback) {
                        if (!dataSource || !(Array.isArray(dataSource)) || dataSource.length === 0 ||
                            !sortColumns || Array.isArray(sortColumns) && sortColumns.length === 0) {
                            return;
                        }

                        if (typeof sortColumns === 'string') {
                            sortColumns = [sortColumns];
                        }

                        const directionCoefficients = [],
                            compareFunctions = [];

                        if (directions === undefined) {
                            directions = [];
                        }

                        for (let i = 0; i < sortColumns.length; i++) {
                            if (directions[i] === undefined || directions[i] === 'asc' || directions[i] === 'ascending') {
                                directionCoefficients[i] = 1;
                            }
                            else {
                                directionCoefficients[i] = -1;
                            }

                            compareFunctions[i] = getCompareFunction(dataSource[0][sortColumns[i]]);
                        }

                        if (customSortingCallback) {
                            customSortingCallback(dataSource, sortColumns, directions, compareFunctions);
                            return;
                        }

                        dataSource.sort(function (a, b) {
                            for (let i = 0; i < sortColumns.length; i++) {
                                const result = compareFunctions[i](a[sortColumns[i]], b[sortColumns[i]]);

                                if (result === 0) {
                                    if (sortColumns[i + 1]) {
                                        continue;
                                    }
                                    else if (a._index !== undefined) {
                                        // makes sorting stable
                                        return (a._index - b._index) * directionCoefficients[i];
                                    }

                                    return 0;
                                }

                                return result * directionCoefficients[i];
                            }
                        });
                    }

                    sortByMultipleColumns(data, that.groupBy);
                }

                if (header) {
                    data = header.concat(data);
                }

                that.getGroupLabels(data);

                return data;
            }

            /**
             * Exports to XML.
             */
            exportToXML(data, fileName) {
                const datafields = this.datafields.slice(0);
                let xmlContent = '<?xml version="1.0" encoding="UTF-8" ?>\n<table>\n';

                if (datafields.indexOf('rows') === -1) {
                    datafields.push('rows');
                }

                function recursion(records, indent) {
                    let content = '';

                    for (let i = 0; i < records.length; i++) {
                        const currentRecord = records[i];

                        content += indent + '<row>\n';

                        for (let j = 0; j < datafields.length; j++) {
                            const datafield = datafields[j];

                            if (datafield === 'rows') {
                                if (!currentRecord.rows) {
                                    continue;
                                }

                                content += `${indent}    <rows>\n${recursion(currentRecord.rows, indent + '        ')}${indent}    </rows>\n`;
                                continue;
                            }

                            content += indent + `    <${datafield}>${currentRecord[datafield]}</${datafield}>\n`;
                        }

                        content += indent + '</row>\n';
                    }

                    return content;
                }

                xmlContent += recursion(data, '    ') + '</table>';

                if (!fileName) {
                    return xmlContent;
                }

                return this.downloadFile(xmlContent, 'application/xml', fileName);
            }

            /**
             * Formats a date.
             */
            formatDate(value, format) {
                return value;
            }

            /**
             * Formats a number.
             */
            formatNumber(value, format) {
                return value;
            }

            /**
             * Generates auxiliary files necessary for XLSX.
             */
            generateAuxiliaryFiles() {
                // _rels\.rels
                const _relsRels = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>`;

                // docProps\app.xml
                const docPropsAppXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes"><Application>Microsoft Excel</Application><DocSecurity>0</DocSecurity><ScaleCrop>false</ScaleCrop><HeadingPairs><vt:vector size="2" baseType="variant"><vt:variant><vt:lpstr>Worksheets</vt:lpstr></vt:variant><vt:variant><vt:i4>1</vt:i4></vt:variant></vt:vector></HeadingPairs><TitlesOfParts><vt:vector size="1" baseType="lpstr"><vt:lpstr>Sheet1</vt:lpstr></vt:vector></TitlesOfParts><Company></Company><LinksUpToDate>false</LinksUpToDate><SharedDoc>false</SharedDoc><HyperlinksChanged>false</HyperlinksChanged><AppVersion>16.0300</AppVersion></Properties>`;

                // docProps\core.xml
                const now = new Date().toISOString(),
                    docPropsCoreXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><dc:creator>Smart HTML Elements</dc:creator><cp:lastModifiedBy>Smart HTML Elements</cp:lastModifiedBy><dcterms:created xsi:type="dcterms:W3CDTF">${now}</dcterms:created><dcterms:modified xsi:type="dcterms:W3CDTF">${now}</dcterms:modified></cp:coreProperties>`;

                // xl\_rels\workbook.xml.rels
                let relationShips = `<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>`;
                let relationShipId = 1;
                if (this.spreadsheets) {
                    for (let s = 0; s < this.spreadsheets.length; s++) {
                        const sheetId = 2 + s;
                        relationShipId++;
                        relationShips += `<Relationship Id="rId${sheetId}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet${sheetId}.xml"/>`;
                    }
                }

                const xl_relsWorkbookXmlRels = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">${relationShips}<Relationship Id="rId${++relationShipId}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" Target="theme/theme1.xml"/><Relationship Id="rId${++relationShipId}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/><Relationship Id="rId${++relationShipId}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml"/></Relationships>`;

                // xl\theme\theme1.xml
                const xlThemeTheme1Xml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme"><a:themeElements><a:clrScheme name="Office"><a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1><a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1><a:dk2><a:srgbClr val="44546A"/></a:dk2><a:lt2><a:srgbClr val="E7E6E6"/></a:lt2><a:accent1><a:srgbClr val="4472C4"/></a:accent1><a:accent2><a:srgbClr val="ED7D31"/></a:accent2><a:accent3><a:srgbClr val="A5A5A5"/></a:accent3><a:accent4><a:srgbClr val="FFC000"/></a:accent4><a:accent5><a:srgbClr val="5B9BD5"/></a:accent5><a:accent6><a:srgbClr val="70AD47"/></a:accent6><a:hlink><a:srgbClr val="0563C1"/></a:hlink><a:folHlink><a:srgbClr val="954F72"/></a:folHlink></a:clrScheme><a:fontScheme name="Office"><a:majorFont><a:latin typeface="Calibri Light" panose="020F0302020204030204"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="游ゴシック Light"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="等线 Light"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Times New Roman"/><a:font script="Hebr" typeface="Times New Roman"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="MoolBoran"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Times New Roman"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/><a:font script="Armn" typeface="Arial"/><a:font script="Bugi" typeface="Leelawadee UI"/><a:font script="Bopo" typeface="Microsoft JhengHei"/><a:font script="Java" typeface="Javanese Text"/><a:font script="Lisu" typeface="Segoe UI"/><a:font script="Mymr" typeface="Myanmar Text"/><a:font script="Nkoo" typeface="Ebrima"/><a:font script="Olck" typeface="Nirmala UI"/><a:font script="Osma" typeface="Ebrima"/><a:font script="Phag" typeface="Phagspa"/><a:font script="Syrn" typeface="Estrangelo Edessa"/><a:font script="Syrj" typeface="Estrangelo Edessa"/><a:font script="Syre" typeface="Estrangelo Edessa"/><a:font script="Sora" typeface="Nirmala UI"/><a:font script="Tale" typeface="Microsoft Tai Le"/><a:font script="Talu" typeface="Microsoft New Tai Lue"/><a:font script="Tfng" typeface="Ebrima"/></a:majorFont><a:minorFont><a:latin typeface="Calibri" panose="020F0502020204030204"/><a:ea typeface=""/><a:cs typeface=""/><a:font script="Jpan" typeface="游ゴシック"/><a:font script="Hang" typeface="맑은 고딕"/><a:font script="Hans" typeface="等线"/><a:font script="Hant" typeface="新細明體"/><a:font script="Arab" typeface="Arial"/><a:font script="Hebr" typeface="Arial"/><a:font script="Thai" typeface="Tahoma"/><a:font script="Ethi" typeface="Nyala"/><a:font script="Beng" typeface="Vrinda"/><a:font script="Gujr" typeface="Shruti"/><a:font script="Khmr" typeface="DaunPenh"/><a:font script="Knda" typeface="Tunga"/><a:font script="Guru" typeface="Raavi"/><a:font script="Cans" typeface="Euphemia"/><a:font script="Cher" typeface="Plantagenet Cherokee"/><a:font script="Yiii" typeface="Microsoft Yi Baiti"/><a:font script="Tibt" typeface="Microsoft Himalaya"/><a:font script="Thaa" typeface="MV Boli"/><a:font script="Deva" typeface="Mangal"/><a:font script="Telu" typeface="Gautami"/><a:font script="Taml" typeface="Latha"/><a:font script="Syrc" typeface="Estrangelo Edessa"/><a:font script="Orya" typeface="Kalinga"/><a:font script="Mlym" typeface="Kartika"/><a:font script="Laoo" typeface="DokChampa"/><a:font script="Sinh" typeface="Iskoola Pota"/><a:font script="Mong" typeface="Mongolian Baiti"/><a:font script="Viet" typeface="Arial"/><a:font script="Uigh" typeface="Microsoft Uighur"/><a:font script="Geor" typeface="Sylfaen"/><a:font script="Armn" typeface="Arial"/><a:font script="Bugi" typeface="Leelawadee UI"/><a:font script="Bopo" typeface="Microsoft JhengHei"/><a:font script="Java" typeface="Javanese Text"/><a:font script="Lisu" typeface="Segoe UI"/><a:font script="Mymr" typeface="Myanmar Text"/><a:font script="Nkoo" typeface="Ebrima"/><a:font script="Olck" typeface="Nirmala UI"/><a:font script="Osma" typeface="Ebrima"/><a:font script="Phag" typeface="Phagspa"/><a:font script="Syrn" typeface="Estrangelo Edessa"/><a:font script="Syrj" typeface="Estrangelo Edessa"/><a:font script="Syre" typeface="Estrangelo Edessa"/><a:font script="Sora" typeface="Nirmala UI"/><a:font script="Tale" typeface="Microsoft Tai Le"/><a:font script="Talu" typeface="Microsoft New Tai Lue"/><a:font script="Tfng" typeface="Ebrima"/></a:minorFont></a:fontScheme><a:fmtScheme name="Office"><a:fillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:lumMod val="110000"/><a:satMod val="105000"/><a:tint val="67000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="103000"/><a:tint val="73000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="105000"/><a:satMod val="109000"/><a:tint val="81000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:satMod val="103000"/><a:lumMod val="102000"/><a:tint val="94000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:satMod val="110000"/><a:lumMod val="100000"/><a:shade val="100000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:lumMod val="99000"/><a:satMod val="120000"/><a:shade val="78000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:fillStyleLst><a:lnStyleLst><a:ln w="6350" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="12700" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln><a:ln w="19050" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/><a:miter lim="800000"/></a:ln></a:lnStyleLst><a:effectStyleLst><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst/></a:effectStyle><a:effectStyle><a:effectLst><a:outerShdw blurRad="57150" dist="19050" dir="5400000" algn="ctr" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="63000"/></a:srgbClr></a:outerShdw></a:effectLst></a:effectStyle></a:effectStyleLst><a:bgFillStyleLst><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:solidFill><a:schemeClr val="phClr"><a:tint val="95000"/><a:satMod val="170000"/></a:schemeClr></a:solidFill><a:gradFill rotWithShape="1"><a:gsLst><a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="93000"/><a:satMod val="150000"/><a:shade val="98000"/><a:lumMod val="102000"/></a:schemeClr></a:gs><a:gs pos="50000"><a:schemeClr val="phClr"><a:tint val="98000"/><a:satMod val="130000"/><a:shade val="90000"/><a:lumMod val="103000"/></a:schemeClr></a:gs><a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="63000"/><a:satMod val="120000"/></a:schemeClr></a:gs></a:gsLst><a:lin ang="5400000" scaled="0"/></a:gradFill></a:bgFillStyleLst></a:fmtScheme></a:themeElements><a:objectDefaults/><a:extraClrSchemeLst/><a:extLst><a:ext uri="{05A4C25C-085E-4340-85A3-A5531E510DB2}"><thm15:themeFamily xmlns:thm15="http://schemas.microsoft.com/office/thememl/2012/main" name="Office Theme" id="{62F939B6-93AF-4DB8-9C6B-D6C7DFDC589F}" vid="{4A3C46E8-61CC-4603-A589-7422A47A8E4A}"/></a:ext></a:extLst></a:theme>`;

                // xl\workbook.xml
                let sheets = '<sheet name="Sheet1" sheetId="1" r:id="rId1"/>';
                if (this.spreadsheets) {
                    for (let s = 0; s < this.spreadsheets.length; s++) {
                        const sheetId = 2 + s;
                        const sheet = this.spreadsheets[s];
                        sheets += `<sheet name="${sheet.label}" sheetId="${sheetId}" r:id="rId${sheetId}"/>`;
                    }
                }

                const xlWorkbookXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x15 xr xr6 xr10 xr2" xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main" xmlns:xr="http://schemas.microsoft.com/office/spreadsheetml/2014/revision" xmlns:xr6="http://schemas.microsoft.com/office/spreadsheetml/2016/revision6" xmlns:xr10="http://schemas.microsoft.com/office/spreadsheetml/2016/revision10" xmlns:xr2="http://schemas.microsoft.com/office/spreadsheetml/2015/revision2"><fileVersion appName="xl" lastEdited="7" lowestEdited="7" rupBuild="20325"/><workbookPr defaultThemeVersion="166925"/><mc:AlternateContent xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006"><mc:Choice Requires="x15"><x15ac:absPath url="C:\Users\jqwidgets\Desktop\" xmlns:x15ac="http://schemas.microsoft.com/office/spreadsheetml/2010/11/ac"/></mc:Choice></mc:AlternateContent><xr:revisionPtr revIDLastSave="0" documentId="13_ncr:1_{0DEDCB6D-5403-4CD8-AAA5-59B6D238A8B6}" xr6:coauthVersionLast="34" xr6:coauthVersionMax="34" xr10:uidLastSave="{00000000-0000-0000-0000-000000000000}"/><bookViews><workbookView xWindow="0" yWindow="0" windowWidth="19200" windowHeight="6950" xr2:uid="{0CB664E6-3800-4A88-B158-B46A682E7484}"/></bookViews><sheets>${sheets}</sheets><calcPr calcId="179021"/><extLst><ext uri="{140A7094-0E35-4892-8432-C4D2E57EDEB5}" xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main"><x15:workbookPr chartTrackingRefBase="1"/></ext></extLst></workbook>`;

                const worksheetImages = this.worksheetImages.get(1);
                let drawings = '';
                if (worksheetImages && worksheetImages.length) {
                    drawings = '<Override PartName="/xl/drawings/drawing1.xml" ContentType="application/vnd.openxmlformats-officedocument.drawing+xml"/>';
                }

                let tables = '';
                if (this.exportAsTable) {
                    tables = '<Override PartName="/xl/tables/table1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml"/>';
                }

                // [Content_Types].xml
                let sheetOverrides = `<Override PartName = "/xl/worksheets/sheet1.xml" ContentType = "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" />`;
                if (this.spreadsheets) {
                    for (let i = 0; i < this.spreadsheets.length; i++) {
                        sheetOverrides += `<Override PartName = "/xl/worksheets/sheet${i + 2}.xml" ContentType = "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" />`;
                    }
                }
                const Content_TypesXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="bin" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings"/><Default Extension="jpeg" ContentType="image/jpeg"/><Default Extension="png" ContentType="image/png"/><Default Extension="svg" ContentType="image/svg"/><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>${sheetOverrides}<Override PartName="/xl/theme/theme1.xml" ContentType="application/vnd.openxmlformats-officedocument.theme+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/><Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/>${tables}${drawings}<Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/><Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/></Types>`;

                return {
                    _relsRels: _relsRels,
                    docPropsAppXml: docPropsAppXml,
                    docPropsCoreXml: docPropsCoreXml,
                    xl_relsWorkbookXmlRels: xl_relsWorkbookXmlRels,
                    xlThemeTheme1Xml: xlThemeTheme1Xml,
                    xlWorkbookXml: xlWorkbookXml,
                    Content_TypesXml: Content_TypesXml
                };
            }

            /**
             * Generates default style object (for use in XLSX export).
             */
            generateDefaultStyle(data) {
                const that = this,
                    defaultStyle = {},
                    datafields = that.datafields,
                    firstRecord = that.complexHeader ? data[that.complexHeader.length] : data[+that.exportHeader];

                if (!firstRecord) {
                    return defaultStyle;
                }

                for (let i = 0; i < datafields.length; i++) {
                    const sampleValue = firstRecord[datafields[i]];

                    if (sampleValue instanceof Date) {
                        if (!defaultStyle.columns) {
                            defaultStyle.columns = [];
                        }

                        defaultStyle.columns[datafields[i]] = { format: 'd' };
                    }
                }

                return defaultStyle;
            }

            /**
             * Generates group row.
             */
            generateGroupRow(details) {
                const rowNumber = details.rowNumber,
                    from = 'A' + rowNumber,
                    recordXML = `        <row r="${rowNumber}" outlineLevel="${details.outlineLevel}" spans="1:${details.numberOfColumns}"${this.getCustomRowHeight(rowNumber - 1)} x14ac:dyDescent="0.45">
                <c r="${from}" t="s" s="0">
                    <v>${details.sharedStringIndex}</v>
                </c>
            </row>\n`;

                details.mergedCells.push({ from: from, to: this.columnsArray[details.numberOfColumns - 1] + rowNumber });

                return recordXML;
            }

            /**
             * Generates sharedStrings.xml.
             */
            generateSharedStrings(data) {
                const that = this,
                    datafields = that.datafields,
                    collection = [];
                let xml = '',
                    count = 0,
                    uniqueCount = 0;

                function addSharedString(currentValue) {
                    count++;

                    if (collection.indexOf(currentValue) === -1) {
                        uniqueCount++;
                        collection.push(currentValue);

                        currentValue = currentValue.replace(/&(?!amp;)/g, '&amp;');
                        currentValue = currentValue.replace(/'/g, '&apos;');
                        currentValue = currentValue.replace(/"/g, '&quot;');
                        currentValue = currentValue.replace(/>/g, '&gt;');
                        currentValue = currentValue.replace(/</g, '&lt;');

                        xml += `<si><t>${currentValue}</t></si>`;
                    }
                }

                const addSharedStrings = (data, datafields) => {
                    for (let i = 0; i < data.length; i++) {
                        const currentRecord = data[i];

                        for (let j = 0; j < datafields.length; j++) {
                            let currentValue = currentRecord[datafields[j]];

                            if (currentValue === null && !that.allowNull) {
                                currentValue = '';
                            }

                            if (typeof currentValue !== 'string') {
                                continue;
                            }

                            addSharedString(currentValue);
                        }
                    }
                }

                addSharedStrings(data, datafields);

                if (that.spreadsheets) {
                    for (let i = 0; i < that.spreadsheets.length; i++) {
                        const sheet = that.spreadsheets[i];
                        const datafields = sheet.dataFields;
                        let data = [...sheet.dataSource];

                        let header = [];
                        for (let i = 0; i < sheet.columns.length; i++) {
                            const column = sheet.columns[i];
                            if (typeof column === 'string') {
                                header[column] = column;
                            }
                            else {
                                header[column.dataField] = column.label;
                            }
                        }
                        data.splice(0, 0, header);
                        addSharedStrings(data, datafields);
                    }

                }

                if (that.groupLabels) {
                    for (let i = 0; i < that.groupLabels.length; i++) {
                        addSharedString(that.groupLabels[i]);
                    }
                }

                xml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="${count}" uniqueCount="${uniqueCount}">${xml}</sst>`;

                return { collection: collection, xml: xml };
            }


            /**
             * Generates sheet1.xml.
             */
            generateSheet1(data, sharedStrings, datafields, columnsArray, sheetIndex) {
                const that = this,
                    numberOfColumns = columnsArray.length,
                    numberOfRows = data.length,
                    dimensionEnd = columnsArray[numberOfColumns - 1] + numberOfRows,
                    autoFilter = that.getFilters(),
                    mergedCells = [].concat(that.complexHeaderMergedCells);
                let rIdCounter = 0;

                const addDrawingRel = (currentSheet2) => {
                    let xmlContent = '';

                    const worksheetImages = this.worksheetImages.get(currentSheet2);
                    if (worksheetImages && worksheetImages.length) {
                        xmlContent += `<drawing r:id="rId${++rIdCounter}"/>`;
                    }
                    return xmlContent;
                };
                const addTableRel = () => {
                    if (!that.exportAsTable) {
                        return '';
                    }

                    let xmlContent = `<tableParts count="1">
                    <tablePart r:id="rId${++rIdCounter}"/>
                </tableParts>`;

                    return xmlContent;
                };

                const freezeHeader = that.freezeHeader ? `<sheetView rightToLeft="0" workbookViewId="0">
             <pane state="frozen" topLeftCell="A${that.xlsxStartIndex + 1}" ySplit="${that.xlsxStartIndex}"/>
            </sheetView>` : '';

                let cols = that.getCustomColumnWidths(columnsArray);

                if (sheetIndex > 1) {
                    let colsString = '<cols>';
                    for (let i = 0; i < columnsArray.length; i++) {
                        colsString += '<col min="1" max="1" width="25" hidden="0" bestFit="0" customWidth="1"/>';
                    }
                    colsString += '</cols>';

                    cols = colsString;
                }

                const tabSelected = sheetIndex <= 1 ? 'tabSelected="1"' : '';

                let xmlContent = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac xr xr2 xr3" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:xr="http://schemas.microsoft.com/office/spreadsheetml/2014/revision" xmlns:xr2="http://schemas.microsoft.com/office/spreadsheetml/2015/revision2" xmlns:xr3="http://schemas.microsoft.com/office/spreadsheetml/2016/revision3" xr:uid="{7F25248B-C640-4C64-AD47-C0EA0E5D90D0}">
        <sheetPr filterMode="${autoFilter !== ''}" />
        <dimension ref="A1:${dimensionEnd}" />
        <sheetViews>
            <sheetView ${tabSelected} workbookViewId="0" />
            ${freezeHeader}
        </sheetViews>
        <sheetFormatPr defaultRowHeight="14.5" x14ac:dyDescent="0.35" />${cols}
        <sheetData>\n`;

                function r(col, row) {
                    return columnsArray[col] + row;
                }

                for (let i = 0; i <= data.length; i++) {
                    const currentRecord = data[i],
                        rowNumber = i + 1;
                    let collapsed = '';

                    if (that.actualHierarchy) {
                        const previousRecord = data[i - 1];

                        if (previousRecord && previousRecord._collapsed &&
                            (!currentRecord || previousRecord._level > currentRecord._level)) {
                            collapsed = ' collapsed="true"';
                        }
                    }

                    if (i === data.length) {
                        if (collapsed) {
                            xmlContent += `        <row r="${rowNumber}" outlineLevel="${Math.max(data[i - 1]._level - 2, 0)}" hidden="false" collapsed="true" />\n`;
                        }

                        break;
                    }

                    let recordXML = `        <row r="${rowNumber}"${that.getOutlineLevel(currentRecord)} hidden="${currentRecord._hidden || currentRecord._collapsed || false}"${collapsed} spans="1:${numberOfColumns}"${that.getCustomRowHeight(rowNumber - 1)} customHeight="1" x14ac:dyDescent="0.45">\n`;

                    for (let j = 0; j < datafields.length; j++) {
                        const s = that.getXLSXCellStyle(r(j, rowNumber));

                        recordXML += that.getActualCellData(currentRecord[datafields[j]], { r: r(j, rowNumber), s: s }, sharedStrings, rowNumber, datafields[j]);
                    }

                    recordXML += '        </row>\n';
                    xmlContent += recordXML;
                }

                if (that.headerContent) {
                    for (let m = 0; m < that.headerContent.length; m++) {
                        const row = that.headerContent[m];
                        if (row.style && row.style.mergeAcross) {
                            mergedCells.push({
                                from: 'A' + (m + 1),
                                to: columnsArray[numberOfColumns - 1] + (m + 1)
                            });
                        }
                    }
                }
                if (that.footerContent) {
                    for (let m = 0; m < that.footerContent.length; m++) {
                        const row = that.footerContent[m];
                        if (row.style && row.style.mergeAcross) {
                            mergedCells.push({
                                from: 'A' + (data.length - m),
                                to: columnsArray[numberOfColumns - 1] + (data.length - m)
                            });
                        }
                    }
                }
                xmlContent += `    </sheetData>${that.conditionalFormattingXLSX.conditions}${autoFilter}${that.getMergedCells(mergedCells)}
        <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3" />
        <pageSetup paperSize="9" orientation="portrait" r:id="rId1" />
        ${addDrawingRel(sheetIndex ? sheetIndex : 1)}
        ${addTableRel()}
    </worksheet>`;



                return xmlContent;
            }

            /**
             * Generates sheet1.xml with grouping.
             */
            generateSheet1WithGrouping(data, sharedStrings) {
                const that = this,
                    numberOfColumns = that.columnsArray.length,
                    numberOfRows = data.length,
                    dimensionEnd = that.columnsArray[numberOfColumns - 1] + numberOfRows,
                    datafields = that.datafields,
                    mergedCells = [].concat(that.complexHeaderMergedCells);
                let rIdCounter = 0;

                const addDrawingRel = (currentSheet2) => {
                    let xmlContent = '';

                    const worksheetImages = this.worksheetImages.get(currentSheet2);
                    if (worksheetImages && worksheetImages.length) {
                        xmlContent += `<drawing r:id="rId${++rIdCounter}"/>`;
                    }
                    return xmlContent;
                };
                const addTableRel = () => {
                    if (!that.exportAsTable) {
                        return '';
                    }

                    let xmlContent = `<tableParts count="1">
                    <tablePart r:id="rId${++rIdCounter}"/>
                </tableParts>`;

                    return xmlContent;
                };
                const freezeHeader = that.freezeHeader ? `<sheetView rightToLeft="0" workbookViewId="0">
             <pane state="frozen" topLeftCell="A${that.xlsxStartIndex + 1}" ySplit="${that.xlsxStartIndex}"/>
            </sheetView>` : '';
                let xmlContent = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac xr xr2 xr3" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:xr="http://schemas.microsoft.com/office/spreadsheetml/2014/revision" xmlns:xr2="http://schemas.microsoft.com/office/spreadsheetml/2015/revision2" xmlns:xr3="http://schemas.microsoft.com/office/spreadsheetml/2016/revision3" xr:uid="{7F25248B-C640-4C64-AD47-C0EA0E5D90D0}">
        <dimension ref="A1:${dimensionEnd}" />
        <sheetViews>
            <sheetView tabSelected="1" workbookViewId="0" />
            ${freezeHeader}
        </sheetViews>
        <sheetFormatPr defaultRowHeight="14.5" x14ac:dyDescent="0.35" />${that.getCustomColumnWidths()}
        <sheetData>\n`,
                    rowNumberCorrection = 0,
                    groupsHandled = [];

                function r(col, row) {
                    return that.columnsArray[col] + row;
                }

                mainLoop:
                for (let i = 0; i < data.length; i++) {
                    const currentRecord = data[i],
                        rowNumber = i + 1 + rowNumberCorrection;
                    let outlineLevel = 0,
                        outlineXML = '';

                    if (!that.exportHeader ||
                        (!that.complexHeader && i !== 0) ||
                        (that.complexHeader && i >= that.complexHeader.length)) {
                        let groupId = '';

                        for (let k = 0; k < that.groupBy.length; k++) {
                            const datafield = that.groupBy[k],
                                currentGroup = currentRecord[datafield],
                                currentGroupLabel = that.groups[datafield][currentGroup];

                            groupId += currentGroup;

                            if (groupsHandled.indexOf(groupId) === -1) {
                                let sharedStringIndex = sharedStrings.indexOf(currentGroupLabel);

                                xmlContent += that.generateGroupRow({
                                    rowNumber: rowNumber,
                                    outlineLevel: outlineLevel,
                                    numberOfColumns: numberOfColumns,
                                    sharedStringIndex: sharedStringIndex,
                                    mergedCells: mergedCells
                                });
                                groupsHandled.push(groupId);
                                i--;
                                rowNumberCorrection++;
                                continue mainLoop;
                            }

                            outlineLevel++;
                        }

                        outlineXML = ` outlineLevel="${outlineLevel}"`;
                    }

                    let recordXML = `        <row r="${rowNumber}"${outlineXML} spans="1:${numberOfColumns}"${that.getCustomRowHeight(rowNumber - 1)} customHeight="1" x14ac:dyDescent="0.45">\n`;

                    for (let j = 0; j < datafields.length; j++) {
                        const s = that.getXLSXCellStyle(r(j, i + 1));

                        recordXML += that.getActualCellData(currentRecord[datafields[j]], { r: r(j, rowNumber), s: s }, sharedStrings, rowNumber, datafields[j]);
                    }

                    recordXML += '        </row>\n';
                    xmlContent += recordXML;
                }

                xmlContent += `    </sheetData>${!that.exportAsTable ? that.getMergedCells(mergedCells) : ''}
        <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3" />
        <pageSetup paperSize="9" orientation="portrait" r:id="rId1" />
        ${addDrawingRel(1)}
        ${addTableRel()}
    </worksheet>`;

                that.groupDimensionEnd = that.columnsArray[numberOfColumns - 1] + (numberOfRows + rowNumberCorrection);
                that.groupRowsCount = numberOfRows + rowNumberCorrection;
                return xmlContent;
            }

            isFormula(value) {
                if (value === null) {
                    return false;
                }
                return this.autoConvertFormulas && value.toString().startsWith('=');
            }

            /**
             * Gets actual spreadsheet cell data.
             */
            getActualCellData(currentValue, details, sharedStrings) {
                const r = details.r,
                    s = details.s || ' s="0"';

                if (currentValue === null && !this.allowNull) {
                    currentValue = '';
                }

                if (currentValue && this.isFormula(currentValue)) {
                    return `            <c r="${r}" t="s"${s}>
                    <f>${currentValue.slice(1)}</f>
                </c>\n`;
                }

                if (typeof currentValue === 'string') {
                    return `            <c r="${r}" t="s"${s}>
                    <v>${sharedStrings.indexOf(currentValue)}</v>
                </c>\n`;
                }

                if (typeof currentValue === 'boolean') {
                    return `            <c r="${r}" t="b"${s}>
                    <v>${+currentValue}</v>
                </c>\n`;
                }

                if (currentValue instanceof Date) {
                    //    const timeZoneOffset = currentValue.getTimezoneOffset() * 1000 * 60;
                    //    const excelDate = (currentValue.getTime() + this.timeBetween1900And1970 - timeZoneOffset) / (1000 * 60 * 60 * 24) + 3;

                    const timeBetweenJSandExcel = 2 + Math.round(this.timeBetween1900And1970 / (1000 * 60 * 60 * 24));
                    const excelDateTime = timeBetweenJSandExcel + ((currentValue.getTime() - (currentValue.getTimezoneOffset() * 60 * 1000)) / (1000 * 60 * 60 * 24));

                    return `            <c r="${r}"${s}>
                    <v>${excelDateTime}</v>
                </c>\n`;
                }

                // numeric cells
                return `            <c r="${r}"${s}>
                    <v>${currentValue}</v>
                </c>\n`;
            }

            /**
             * Gets column labels.
             */
            getColumnsArray() {
                const that = this,
                    numberOfColumns = that.datafields.length,
                    columnsCollection = [];

                function getIterator(i) {
                    if (i < 26) {
                        return '';
                    }

                    return String.fromCharCode(64 + Math.floor(i / 26));
                }

                for (let i = 0; i < numberOfColumns; i++) {
                    columnsCollection.push(getIterator(i) + String.fromCharCode(65 + (i < 26 ? i : i % 26)));
                }

                that.columnsArray = columnsCollection;
            }

            /**
           * Gets column labels.
           */
            getColumnsArrayFromDataFields(datafields) {
                const that = this,
                    numberOfColumns = datafields.length,
                    columnsCollection = [];

                function getIterator(i) {
                    if (i < 26) {
                        return '';
                    }

                    return String.fromCharCode(64 + Math.floor(i / 26));
                }

                for (let i = 0; i < numberOfColumns; i++) {
                    columnsCollection.push(getIterator(i) + String.fromCharCode(65 + (i < 26 ? i : i % 26)));
                }

                return columnsCollection;
            }

            /**
             * Gets column style.
             */
            getColumnStyle() {
                const that = this,
                    style = that.style;

                if (!style) {
                    return `        .header { border: 1px solid black; padding: 5px; }
            .column { border: 1px solid black; padding: 5px; }
            .group { background-color: #FFFFFF; color: #000000; font-weight: bold; }`;
                }

                let styles;

                if (style.removeDefault) {
                    styles = {
                        header: '',
                        column: '',
                        group: ''
                    };
                }
                else {
                    styles = {
                        header: 'border: 1px solid black; padding: 5px; ',
                        column: 'white-space: nowrap; overflow: hidden; border: 1px solid black; padding: 5px; ',
                        group: 'background-color: #FFFFFF; color: #000000; font-weight: bold; '
                    };
                }

                const sampleRecord = that.data[0];
                let generatedStyle = '';

                const headerDefinition = style.header || {};

                for (let prop in headerDefinition) {
                    if (!Object.prototype.hasOwnProperty.call(headerDefinition, prop)) {
                        continue;
                    }

                    const value = headerDefinition[prop];

                    if (sampleRecord[prop]) {
                        if (!styles['header' + prop]) {
                            styles['header' + prop] = '';
                        }

                        for (let columnProp in value) {
                            if (Object.prototype.hasOwnProperty.call(value, columnProp)) {
                                const css = window.jqxToDash(columnProp) + ': ' + value[columnProp] + '; ';

                                styles['header' + prop] += css;

                                if (columnProp === 'width') {
                                    if (!styles['column' + prop]) {
                                        styles['column' + prop] = '';
                                    }

                                    styles['column' + prop] += css;
                                }
                            }
                        }

                        continue;
                    }

                    if (prop === 'height' && that.complexHeader) {
                        styles.header += 'height: ' + parseInt(headerDefinition[prop], 10) / that.complexHeader.length + 'px; ';
                    }
                    else {
                        styles.header += window.jqxToDash(prop) + ': ' + headerDefinition[prop] + '; ';
                    }
                }

                const columnsDefinition = style.columns || {};

                for (let prop in columnsDefinition) {
                    if (!Object.prototype.hasOwnProperty.call(columnsDefinition, prop)) {
                        continue;
                    }

                    const value = columnsDefinition[prop];

                    if (sampleRecord[prop]) {
                        if (!styles['column' + prop]) {
                            styles['column' + prop] = '';
                        }

                        for (let columnProp in value) {
                            if (isNaN(columnProp) && Object.prototype.hasOwnProperty.call(value, columnProp) && columnProp !== 'format') {
                                styles['column' + prop] += window.jqxToDash(columnProp) + ': ' + value[columnProp] + '; ';
                            }
                        }

                        continue;
                    }

                    styles.column += window.jqxToDash(prop) + ': ' + value + '; ';
                }

                for (let prop in styles) {
                    if (Object.prototype.hasOwnProperty.call(styles, prop)) {
                        generatedStyle += `        .${prop} { ${styles[prop]}}\n`;
                    }
                }

                if (style.custom) {
                    generatedStyle += `${style.custom}\n`;
                }

                return generatedStyle;
            }

            /**
             * Gets custom column widths.
             */
            getCustomColumnWidths(columnsArray) {
                const that = this;

                if (columnsArray !== that.columnsArray) {
                    return '';
                }

                if (!that.style || !that.columnWidth || that.columnWidth.length === 0) {
                    return '';
                }

                let xml = '\n    <cols>\n';

                for (let i = 0; i < that.columnWidth.length; i++) {
                    let width = that.columnWidth[i];

                    if (width !== undefined) {
                        width = Math.round(parseFloat(width)) / 7;
                        xml += `        <col min="${i + 1}" max="${i + 1}" width="${width}" customWidth="1" />\n`;
                    }
                }

                xml += '    </cols>';

                return xml;
            }

            /**
             * Returns customFilter tag.
             */
            getCustomFilter(value, condition) {
                let operator = 'equal',
                    val;

                if (value instanceof Date) {
                    value = (value.getTime() + this.timeBetween1900And1970) / 86400000 + 2;
                }

                condition = condition.toUpperCase();

                switch (condition) {
                    case 'EMPTY':
                        val = '';
                        break;
                    case 'NOT_EMPTY':
                        val = '';
                        operator = 'notEqual';
                        break;
                    case 'CONTAINS':
                    case 'CONTAINS_CASE_SENSITIVE':
                        val = `*${value}*`;
                        break;
                    case 'DOES_NOT_CONTAIN':
                    case 'DOES_NOT_CONTAIN_CASE_SENSITIVE':
                        val = `*${value}*`;
                        operator = 'notEqual';
                        break;
                    case 'STARTS_WITH':
                    case 'STARTS_WITH_CASE_SENSITIVE':
                        val = `${value}*`;
                        break;
                    case 'ENDS_WITH':
                    case 'ENDS_WITH_CASE_SENSITIVE':
                        val = `*${value}`;
                        break;
                    case 'EQUAL':
                    case 'EQUAL_CASE_SENSITIVE':
                        val = value;
                        break;
                    case 'NULL':
                        val = null;
                        break;
                    case 'NOT_NULL':
                        val = null;
                        operator = 'notEqual';
                        break;
                    case 'NOT_EQUAL':
                        val = value;
                        operator = 'notEqual';
                        break;
                    case 'LESS_THAN':
                        val = value;
                        operator = 'lessThan';
                        break;
                    case 'LESS_THAN_OR_EQUAL':
                        val = value;
                        operator = 'lessThanOrEqual';
                        break;
                    case 'GREATER_THAN':
                        val = value;
                        operator = 'greaterThan';
                        break;
                    case 'GREATER_THAN_OR_EQUAL':
                        val = value;
                        operator = 'greaterThanOrEqual';
                        break;
                }

                return `                <customFilter val="${val}" operator="${operator}"/>\n`;
            }

            /**
             * Gets custom row height.
             */
            getCustomRowHeight(row) {
                const that = this;

                if (that.style) {
                    return that.rowHeight[row] || that.defaultRowHeight || '';
                }

                return '';
            }

            /**
             * Gets datafields.
             */
            getDatafields(data) {
                const that = this,
                    sampleRecord = data[0],
                    datafields = [];

                for (let prop in sampleRecord) {
                    if (Object.prototype.hasOwnProperty.call(sampleRecord, prop) && prop.charAt(0) !== '_') {
                        datafields.push(prop);
                    }
                }

                that.datafields = datafields;
            }

            /**
             * Returns autoFilter XML.
             */
            getFilters() {
                const that = this,
                    filterBy = that.filterBy;

                if (!filterBy) {
                    return '';
                }

                let xml = '';

                for (let datafield in filterBy) {
                    if (Object.prototype.hasOwnProperty.call(filterBy, datafield)) {
                        const colId = that.datafields.indexOf(datafield);

                        if (colId === -1) {
                            continue;
                        }

                        const filterDetails = filterBy[datafield],
                            filters = filterDetails.filters;

                        xml += `        <filterColumn colId="${colId}">
                <customFilters and="${!filterDetails.operator}">\n`;

                        for (let i = 0; i < filters.length; i++) {
                            xml += that.getCustomFilter(filters[i].value, filters[i].condition);
                        }

                        xml += `            </customFilters>
            </filterColumn>`;
                    }
                }

                if (!xml) {
                    return '';
                }

                xml = `\n    <autoFilter ref="A1:${that.columnsArray[that.columnsArray.length - 1] + that.data.length}">\n${xml}\n    </autoFilter>`;
                return xml;
            }

            /**
             * Gets group labels based on data.
             */
            getGroupLabels(data) {
                const that = this,
                    startIndex = that.xlsxStartIndex !== undefined ? that.xlsxStartIndex : +that.exportHeader,
                    groups = {},
                    groupLabels = [];

                for (let i = startIndex; i < data.length; i++) {
                    const currentRecord = data[i];

                    for (let j = 0; j < that.groupBy.length; j++) {
                        const datafield = that.groupBy[j],
                            currentValue = currentRecord[datafield];
                        let group = groups[datafield];

                        if (group === undefined) {
                            groups[datafield] = {};
                            group = groups[datafield];
                        }

                        if (group[currentValue] === undefined) {
                            group[currentValue] = (that.exportHeader ? data[startIndex - 1][datafield] : datafield) + ': ' + currentValue;
                            groupLabels.push(group[currentValue]);
                        }
                    }
                }

                that.groups = groups;
                that.groupLabels = groupLabels;
            }

            /**
             * Gets the header content when exporting to HTML.
             */
            getHTMLHeader(datafields, data) {
                const that = this;
                let header = '\n        <thead>\n';

                if (!that.complexHeader) {
                    header += '            <tr>\n';

                    for (let j = 0; j < datafields.length; j++) {
                        const datafield = datafields[j];

                        header += `                <th class="header header${datafield}">${data[0][datafield]}</th>\n`;
                    }

                    header += '            </tr>\n        </thead>';
                    return header;
                }

                for (let j = 0; j < that.complexDataFieldsHeader.length; j++) {
                    const row = that.complexDataFieldsHeader[j];

                    header += '            <tr>\n';

                    for (let k = 0; k < row.length; k++) {
                        const currentLabel = row[k];
                        let colspan = 1, rowspan = 1;

                        if ((row[k - 1] && row[k - 1] === currentLabel) ||
                            (that.complexDataFieldsHeader[j - 1] && (that.complexDataFieldsHeader[j - 1][k] === currentLabel))) {
                            continue;
                        }

                        let iterator = k + 1;

                        while (row[iterator] && row[iterator] === row[iterator - 1]) {
                            colspan++;
                            iterator++;
                        }

                        iterator = j + 1;

                        while (that.complexDataFieldsHeader[iterator] && that.complexDataFieldsHeader[iterator][k] === currentLabel) {
                            rowspan++;
                            iterator++;
                        }

                        const datafield = j === that.complexHeader.length - 1 || rowspan + j === that.complexHeader.length ?
                            ' header' + datafields[k] : '';

                        header += `                <th class="header${datafield}" colspan="${colspan}" rowspan="${rowspan}">${that.complexHeader[j][k]}</th>\n`;
                    }

                    header += '            </tr>\n';
                }

                header += '        </thead>';
                return header;
            }

            /**
             * Gets conditional formatting XML.
             */
            getConditionalFormatting() {
                const that = this,
                    conditionalFormatting = that.conditionalFormatting;

                if (!conditionalFormatting) {
                    that.conditionalFormattingXLSX = { conditions: '', styles: '' };
                    return;
                }

                const dxfCodes = [];
                let conditionsXml = '',
                    stylesXml = '';

                for (let i = conditionalFormatting.length - 1; i >= 0; i--) {
                    const columnFormat = conditionalFormatting[i],
                        columnLetter = that.columnsArray[that.datafields.indexOf(columnFormat.column)],
                        startCell = columnLetter + (that.xlsxStartIndex + 1),
                        sqref = startCell + ':' + columnLetter + (that.data.length),
                        dxfCode = columnFormat.background + columnFormat.color,
                        attr = that.getConditionalAttributes(columnFormat, startCell);
                    let dxfId = dxfCodes.indexOf(dxfCode);

                    if (dxfId === -1) {
                        const newDxf = `        <dxf>
                <font>
                    <b val="0"/>
                    <i val="0"/>
                    <color rgb="${columnFormat.color === 'White' ? 'FFFFFFFF' : 'FF000000'}"/>
                    <sz val="10"/>
                </font>
                <fill>
                    <patternFill>
                        <bgColor rgb="${that.toARGB(columnFormat.background)}"/>
                    </patternFill>
                </fill>
            </dxf>\n`;

                        stylesXml += newDxf;
                        dxfId = dxfCodes.length;
                        dxfCodes.push(dxfCode);
                    }

                    conditionsXml += `    <conditionalFormatting sqref="${sqref}">
            <cfRule dxfId="${dxfId}" text="${attr.text}" rank="${attr.rank}" percent="${attr.percent}" bottom="${attr.bottom}" equalAverage="${attr.equalAverage}" aboveAverage="${attr.aboveAverage}"${attr.operator}${attr.timePeriod} priority="${i + 2}" type="${attr.type}">
    ${attr.formula}        </cfRule>
        </conditionalFormatting>\n`;
                }

                stylesXml = `    <dxfs count="${dxfCodes.length}">\n${stylesXml}    </dxfs>`;

                that.conditionalFormattingXLSX = { conditions: conditionsXml, styles: stylesXml };
            }

            /**
             * Gets conditional formatting XML attributes.
             */
            getConditionalAttributes(columnFormat, startCell) {
                let condition = columnFormat.condition,
                    comparator = columnFormat.comparator,
                    text = '',
                    rank = 0,
                    percent = 0,
                    bottom = 0,
                    equalAverage = 0,
                    aboveAverage = 0,
                    operator = '',
                    timePeriod = '',
                    type = '',
                    formula = '';

                switch (condition) {
                    case 'equal':
                        operator = 'equal';
                        type = 'cellIs';
                        formula = `            <formula>${comparator}</formula>\n`;
                        break;
                    case 'lessThan':
                        operator = 'lessThan';
                        type = 'cellIs';
                        formula = `            <formula>${comparator}</formula>\n`;
                        break;
                    case 'greaterThan':
                        operator = 'greaterThan';
                        type = 'cellIs';
                        formula = `            <formula>${comparator}</formula>\n`;
                        break;
                    case 'notEqual':
                        operator = 'notEqual';
                        type = 'cellIs';
                        formula = `            <formula>${comparator}</formula>\n`;
                        break;
                    case 'between':
                        operator = 'between';
                        type = 'cellIs';
                        formula = `            <formula>${columnFormat.min}</formula>
                <formula>${columnFormat.max}</formula>\n`;
                        break;
                    case 'duplicate':
                        type = 'duplicateValues';
                        formula = '            <formula>0</formula>\n';
                        break;
                    case 'topNItems':
                        rank = comparator;
                        type = 'top10';
                        break;
                    case 'bottomNItems':
                        rank = comparator;
                        bottom = 1;
                        type = 'top10';
                        break;
                    case 'topNPercent':
                        rank = comparator;
                        percent = 1;
                        type = 'top10';
                        break;
                    case 'bottomNPercent':
                        rank = comparator;
                        percent = 1;
                        bottom = 1;
                        type = 'top10';
                        break;
                    case 'aboveAverage':
                        aboveAverage = 1;
                        type = 'aboveAverage';
                        formula = '            <formula>0</formula>\n';
                        break;
                    case 'belowAverage':
                        type = 'aboveAverage';
                        formula = '            <formula>0</formula>\n';
                        break;
                    case 'contains':
                        text = comparator;
                        operator = 'containsText';
                        type = 'containsText';
                        formula = `            <formula>NOT(ISERROR(SEARCH("${comparator}",${startCell})))</formula>\n`;
                        break;
                    case 'doesNotContain':
                        text = comparator;
                        operator = 'notContains';
                        type = 'notContainsText';
                        formula = `            <formula>ISERROR(SEARCH("${comparator}",${startCell}))</formula>\n`;
                        break;
                    case 'dateOccur':
                        timePeriod = ` timePeriod="${comparator}"`;
                        type = 'timePeriod';
                        break;
                }

                if (operator) {
                    operator = ` operator="${operator}" `;
                }

                return {
                    text: text,
                    rank: rank,
                    percent: percent,
                    bottom: bottom,
                    equalAverage: equalAverage,
                    aboveAverage: aboveAverage,
                    operator: operator,
                    timePeriod: timePeriod,
                    type: type,
                    formula: formula
                }
            }

            /**
             * Gets merged cells XML.
             */
            getMergedCells(mergedCells) {
                const that = this;

                let mergeCellsXml = '';

                for (let i = 0; i < mergedCells.length; i++) {
                    if (mergedCells[i].from === mergedCells[i].to) {
                        continue;
                    }

                    mergeCellsXml += `\n        <mergeCell ref="${mergedCells[i].from}:${mergedCells[i].to}" />\n`;
                }

                if (that.mergedCells) {
                    for (let i = 0; i < that.mergedCells.length; i++) {
                        const cellDefinition = that.mergedCells[i];

                        if (cellDefinition.rowspan < 2 && cellDefinition.colspan < 2) {
                            continue;
                        }

                        const from = that.columnsArray[cellDefinition.cell[0]] + (cellDefinition.cell[1] + that.xlsxStartIndex + 1),
                            to = that.columnsArray[cellDefinition.cell[0] + cellDefinition.colspan - 1] + (cellDefinition.cell[1] + that.xlsxStartIndex + cellDefinition.rowspan);

                        mergeCellsXml += `\n        <mergeCell ref="${from}:${to}" />\n`;
                    }
                }

                if (mergeCellsXml) {
                    mergeCellsXml = `\n    <mergeCells count="${mergedCells.length}">${mergeCellsXml}    </mergeCells>`;
                }

                return mergeCellsXml;
            }

            /**
             * Gets numFmt index.
             */
            getNumFmtIndex(format, numFmts) {
                let index = numFmts.collection.indexOf(format);

                if (index === -1) {
                    index = numFmts.collection.length + 100;
                    numFmts.collection.push(format);
                    numFmts.xml += `<numFmt numFmtId="${index}" formatCode="${format}"/>`;
                }
                else {
                    index += 100;
                }

                return index;
            }

            /**
                * Returns outlineLevel.
                */
            getOutlineLevel(record) {
                if (!this.actualHierarchy || record._level === 1) {
                    return '';
                }

                return ` outlineLevel="${record._level - 1}"`;
            }

            /**
             * Gets row style.
             */
            getRowStyle() {
                const that = this,
                    style = that.style;

                if (!style) {
                    return '';
                }

                const rowsDefinition = style.rows;

                if (!rowsDefinition) {
                    return '';
                }

                const styles = {
                    row: ''
                };
                let generatedStyle = '';

                for (let prop in rowsDefinition) {
                    if (!Object.prototype.hasOwnProperty.call(rowsDefinition, prop) ||
                        prop === 'alternationCount' ||
                        prop === 'alternationStart' ||
                        prop === 'alternationEnd') {
                        continue;
                    }

                    const value = rowsDefinition[prop];

                    if (prop.indexOf('alt') !== -1) {
                        const i = prop.slice(16, 17),
                            property = prop.slice(17);

                        if (!styles['rowN' + i]) {
                            styles['rowN' + i] = '';
                        }

                        if (property === 'Color') {
                            styles['rowN' + i] += 'color : ' + value + '; ';
                        }
                        else if (property === 'BorderColor') {
                            styles['rowN' + i] += 'border-color : ' + value + '; ';
                        }
                        else {
                            styles['rowN' + i] += 'background-color : ' + value + '; ';
                        }

                        continue;
                    }

                    if (!isNaN(prop)) {
                        if (!styles['row' + prop]) {
                            styles['row' + prop] = '';
                        }

                        for (let rowProp in value) {
                            if (Object.prototype.hasOwnProperty.call(value, rowProp)) {
                                styles['row' + prop] += window.jqxToDash(rowProp) + ': ' + value[rowProp] + '; ';
                            }
                        }

                        continue;
                    }

                    styles.row += window.jqxToDash(prop) + ': ' + rowsDefinition[prop] + '; ';
                }

                let keys = Object.keys(styles);

                keys.sort(function (a, b) {
                    if (a === 'row') {
                        return -1;
                    }

                    if (b === 'row') {
                        return 1;
                    }

                    const aIsNum = !isNaN(a.slice(3)),
                        bIsNum = !isNaN(b.slice(3));

                    if (aIsNum && !bIsNum) {
                        return 1;
                    }

                    if (!aIsNum && bIsNum) {
                        return -1;
                    }

                    return +(a < b);
                });

                for (let i = 0; i < keys.length; i++) {
                    generatedStyle += `        .${keys[i]} { ${styles[keys[i]]}}\n`;
                }

                return generatedStyle;
            }

            /**
             * Gets table style.
             */
            getTableStyle() {
                const that = this,
                    style = that.style;

                if (!style) {
                    return ' style="table-layout: fixed; border: 1px solid black; border-collapse: collapse;"';
                }

                let generatedStyle = 'table-layout: fixed; ';

                for (let prop in style) {
                    if (Object.prototype.hasOwnProperty.call(style, prop) &&
                        ['header', 'columns', 'rows', 'removeDefault', 'custom'].indexOf(prop) === -1) {
                        generatedStyle += window.jqxToDash(prop) + ': ' + style[prop] + '; ';
                    }
                }

                if (generatedStyle) {
                    generatedStyle = ' style="' + generatedStyle + '"';
                }

                return generatedStyle;
            }

            /**
             * Gets the "s" (style) attribute of an XLSX cell.
             */
            getXLSXCellStyle(r) {
                const that = this;

                if (that.cellStyleMapping[r] !== undefined) {
                    return ` s="${that.cellStyleMapping[r]}"`;
                }

                return '';
            }

            /**
             * Gets the "s" (style) attribute of an XLSX cell.
             */
            getXLSXFormat(format, cellValue) {
                if (typeof cellValue === 'number') {
                    let currencySign = '$';
                    if (format && typeof (format) === 'string' && format.indexOf('c') >= 0 && format.indexOf('x') >= 0) {
                        currencySign = format.substring(0, format.indexOf('x'));
                        format = format.substring(1 + format.indexOf('x'));
                    }

                    if (!/^([a-zA-Z]\d*)$/g.test(format)) {
                        return format;
                    }

                    let precision = parseFloat(format.slice(1)) || 0,
                        precisionCode = precision > 0 ? '.' + ('0').repeat(precision) : '';

                    format = format.slice(0, 1);

                    switch (format) {
                        case 'C':
                        case 'c':
                            if (currencySign !== '$') {
                                return '\#,0' + precisionCode + ' ' + currencySign;
                            }
                            return currencySign + '\#,0' + precisionCode;
                        case 'D':
                        case 'd':
                            if (precision) {
                                return '\#,0' + precisionCode;
                            }

                            return '0';
                        case 'E':
                        case 'e':
                            return '0' + precisionCode + format + '000';
                        case 'F':
                        case 'f':
                            return '0' + precisionCode;
                        case 'N':
                        case 'n':
                            return '#,0' + precisionCode;
                        case 'P':
                        case 'p':
                            return '#,0' + precisionCode + ' %';
                        default:
                            return;
                    }
                }
                else if (cellValue instanceof Date) {
                    switch (format) {
                        case 'd':
                            return 'm/d/yyyy';
                        case 'D':
                            return 'nnnnmmmm dd, yyyy';
                        case 't':
                            return 'h:m AM/PM';
                        case 'T':
                            return 'h:mm:ss AM/PM';
                        case 'f':
                            return 'nnnnmmmm dd, yyyy h:m AM/PM';
                        case 'F':
                            return 'nnnnmmmm dd, yyyy h:mm:ss AM/PM';
                        case 'M':
                            return 'mmmm d';
                        case 'Y':
                            return 'yyyy mmmm';
                        case 'FP':
                        case 'PP':
                            return 'yyyy-mm-dd hh:mm:ss';
                        case 'FT':
                        case 'PT':
                            return 'hh:mm:ss';
                    }

                    format = format.replace(/f|u|n|p|e|a|x|o/gi, '');
                    format = format.replace(/tt/gi, 'AM/PM');
                    format = format.replace(/:{2,}|:\s|:$|\.$/g, '');
                    format = format.trim();
                    return format;
                }
            }

            /**
             * Processes column styles.
             */
            processColumnStyle(style) {
                const that = this,
                    headerDefinition = style.header,
                    columnsDefinition = style.columns,
                    sampleRecord = that.data[0],
                    startIndex = that.xlsxStartIndex;

                that.columnWidth = [];

                if (startIndex && headerDefinition) {
                    for (let i = 0; i < that.columnsArray.length; i++) {
                        const columnLetter = that.columnsArray[i],
                            cell = columnLetter + startIndex,
                            columnSpecific = headerDefinition[that.datafields[i]];

                        for (let prop in headerDefinition) {
                            if (Object.prototype.hasOwnProperty.call(headerDefinition, prop) && sampleRecord[prop] === undefined) {
                                if (that.complexHeader) {
                                    for (let j = 0; j < that.complexHeader.length; j++) {
                                        if (prop === 'height') {
                                            that.rowHeight[j] = ` ht="${(parseFloat(headerDefinition.height) / 1) / 2}"`;
                                            continue;
                                        }
                                        else {
                                            that.storeCellStyle(columnLetter + (j + 1), prop, headerDefinition[prop]);
                                        }
                                    }
                                }
                                else {
                                    if (prop === 'height') {
                                        that.rowHeight[startIndex - 1] = ` ht="${parseFloat(headerDefinition.height) / 2}"`;
                                        continue;
                                    }

                                    that.storeCellStyle(cell, prop, headerDefinition[prop]);
                                }
                            }
                        }

                        if (!columnSpecific) {
                            continue;
                        }

                        for (let prop in columnSpecific) {
                            if (Object.prototype.hasOwnProperty.call(columnSpecific, prop)) {
                                if (prop === 'width') {
                                    that.columnWidth[i] = columnSpecific.width;
                                    continue;
                                }

                                that.storeCellStyle(cell, prop, columnSpecific[prop]);
                            }
                        }
                    }
                }
                else if (headerDefinition) {
                    for (let i = 0; i < that.columnsArray.length; i++) {
                        const columnSpecific = headerDefinition[that.datafields[i]];

                        if (columnSpecific && columnSpecific.width !== undefined) {
                            that.columnWidth[i] = columnSpecific.width;
                        }
                    }
                }

                if (!columnsDefinition) {
                    return '';
                }

                for (let i = startIndex; i < that.data.length; i++) {
                    for (let j = 0; j < that.columnsArray.length; j++) {
                        const columnLetter = that.columnsArray[j],
                            cell = columnLetter + (i + 1),
                            datafield = that.datafields[j],
                            columnSpecific = columnsDefinition[datafield];

                        for (let prop in columnsDefinition) {
                            if (Object.prototype.hasOwnProperty.call(columnsDefinition, prop) && sampleRecord[prop] === undefined) {
                                that.storeCellStyle(cell, prop, columnsDefinition[prop]);
                            }
                        }

                        if (!columnSpecific) {
                            continue;
                        }

                        for (let prop in columnSpecific) {
                            if (!isNaN(prop) || !Object.prototype.hasOwnProperty.call(columnSpecific, prop)) {
                                continue;
                            }

                            that.storeCellStyle(cell, prop, columnSpecific[prop], that.data[i][datafield]);
                        }

                        if (columnSpecific[i]) {
                            const cellProperties = columnSpecific[i];
                            for (let prop in cellProperties) {
                                if (!isNaN(prop) || !Object.prototype.hasOwnProperty.call(cellProperties, prop)) {
                                    continue;
                                }
                                if (!cellProperties[prop]) {
                                    continue;
                                }

                                that.storeCellStyle(cell, prop, cellProperties[prop], that.data[i][datafield]);
                            }
                        }
                    }
                }

                // prepend

                if (that.headerContent && that.headerContent.length) {
                    for (let m = 0; m < that.headerContent.length; m++) {
                        const applyToRowCells = (row, prop, value) => {
                            for (let j = 0; j < that.columnsArray.length; j++) {
                                const currentCell = that.columnsArray[j] + (row);

                                that.storeCellStyle(currentCell, prop, value);
                            }
                        }

                        const row = m + 1;

                        if (that.headerContent[m].style) {
                            const contentStyle = that.headerContent[m].style;

                            const hexDigits = new Array
                                ('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f');

                            const hex = (x) => {
                                return isNaN(x) ? '00' : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
                            }

                            //Function to convert rgb color to hex format
                            const toHex = (rgb) => {
                                if (!rgb.startsWith('#')) {
                                    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

                                    if (!rgb) {
                                        return null;
                                    }
                                }
                                else {
                                    return rgb.toUpperCase();
                                }

                                return '#' + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]).toUpperCase();
                            }



                            for (let prop in contentStyle) {
                                let value = contentStyle[prop];

                                if (prop === 'height') {
                                    that.rowHeight[row - 1] = ` ht="${parseFloat(value)}"`;
                                    continue;
                                }
                                if (prop === 'color' || prop === 'backgroundColor') {
                                    value = toHex(value);
                                }

                                applyToRowCells(row, prop, value);
                            }
                        }
                    }
                }




                // append
                if (that.footerContent && that.footerContent.length) {
                    for (let m = 0; m < that.footerContent.length; m++) {
                        const applyToRowCells = (row, prop, value) => {
                            for (let j = 0; j < that.columnsArray.length; j++) {
                                const currentCell = that.columnsArray[j] + (row);

                                that.storeCellStyle(currentCell, prop, value);
                            }
                        }

                        let prefix = (that.headerContent && that.headerContent.length) ? that.headerContent.length : 0;

                        const row = 1 + that.data.length + m + prefix;

                        if (that.footerContent[m].style) {
                            const contentStyle = that.footerContent[m].style;

                            const hexDigits = new Array
                                ('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f');

                            const hex = (x) => {
                                return isNaN(x) ? '00' : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
                            }

                            //Function to convert rgb color to hex format
                            const toHex = (rgb) => {
                                if (!rgb.startsWith('#')) {
                                    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

                                    if (!rgb) {
                                        return null;
                                    }
                                }
                                else {
                                    return rgb.toUpperCase();
                                }

                                return '#' + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]).toUpperCase();
                            }



                            for (let prop in contentStyle) {
                                let value = contentStyle[prop];

                                if (prop === 'height') {
                                    that.rowHeight[row - 1] = ` ht="${parseFloat(value)}"`;
                                    continue;
                                }
                                if (prop === 'color' || prop === 'backgroundColor') {
                                    value = toHex(value);
                                }

                                applyToRowCells(row, prop, value);
                            }
                        }
                    }
                }
            }

            /**
             * Processes complex header object.
             */
            processComplexHeader(header, data, format) {
                const that = this,
                    flatHeader = {},
                    processGrouping = ['html', 'jpeg', 'pdf', 'png', 'xlsx'].indexOf(format) !== -1 && header.columngroups,
                    datafieldMapping = [],
                    columnGroupHierarchy = {},
                    columnGroupNameHierarchy = {},
                    complexHeader = [],
                    complexDataFieldsHeader = [];
                let headerDepth = 0;

                function getColumnGroup(columnGroup) {
                    for (let i = 0; i < header.columngroups.length; i++) {
                        const currentGroupDefinition = header.columngroups[i];

                        if (currentGroupDefinition.name === columnGroup) {
                            return currentGroupDefinition;
                        }
                    }
                }

                function getColumnGroupHierarchy(groupDefinition, property) {
                    const columnGroups = [];

                    while (groupDefinition) {
                        columnGroups.unshift(groupDefinition[property]);

                        if (groupDefinition.parentGroup) {
                            groupDefinition = getColumnGroup(groupDefinition.parentGroup);
                        }
                        else {
                            return columnGroups;
                        }
                    }
                }

                if (processGrouping) {
                    for (let i = 0; i < header.columngroups.length; i++) {
                        const currentGroupDefinition = header.columngroups[i],
                            groupHierarchy = getColumnGroupHierarchy(currentGroupDefinition, 'label');

                        columnGroupHierarchy[currentGroupDefinition.name] = groupHierarchy;
                        columnGroupNameHierarchy[currentGroupDefinition.name] = getColumnGroupHierarchy(currentGroupDefinition, 'name');
                        headerDepth = Math.max(headerDepth, groupHierarchy.length);
                    }

                    headerDepth++;

                    for (let i = 0; i < headerDepth; i++) {
                        complexHeader[i] = [];
                        complexDataFieldsHeader[i] = [];
                    }
                }

                for (let i = 0; i < header.columns.length; i++) {
                    const currentColumn = header.columns[i];

                    flatHeader[currentColumn.dataField] = currentColumn.label;

                    if (!processGrouping) {
                        continue;
                    }

                    datafieldMapping[i] = currentColumn.dataField;
                    complexHeader[headerDepth - 1][i] = currentColumn.label;
                    complexDataFieldsHeader[headerDepth - 1][i] = currentColumn.dataField;

                    if (!currentColumn.columnGroup) {
                        continue;
                    }

                    const columnGroups = columnGroupHierarchy[currentColumn.columnGroup],
                        columnGroupNames = columnGroupNameHierarchy[currentColumn.columnGroup];

                    if (columnGroups) {
                        for (let j = 0; j < columnGroups.length; j++) {
                            complexHeader[j][i] = columnGroups[j];
                            complexDataFieldsHeader[j][i] = columnGroupNames[j];
                        }
                    }
                }

                if (complexHeader.length > 1) {
                    const numberOfDatafields = Object.keys(flatHeader).length;

                    for (let i = 0; i < headerDepth - 1; i++) {
                        const entry = {};

                        for (let j = 0; j < numberOfDatafields; j++) {
                            if (complexHeader[i][j] === undefined) {
                                let iterator = i + 1;

                                while (complexHeader[iterator][j] === undefined) {
                                    iterator++;
                                }

                                complexHeader[i][j] = complexHeader[iterator][j];
                                complexDataFieldsHeader[i][j] = complexDataFieldsHeader[iterator][j];
                            }

                            entry[datafieldMapping[j]] = complexHeader[i][j];
                        }

                        if (format === 'xlsx') {
                            data.splice(i, 0, entry);
                        }
                    }

                    that.complexHeader = complexHeader;
                    that.complexDataFieldsHeader = complexDataFieldsHeader;

                    if (format !== 'xlsx') {
                        data.unshift(flatHeader);
                    }
                    else {
                        data.splice(headerDepth - 1, 0, flatHeader);

                        const toMerge = {};

                        for (let i = 0; i < headerDepth; i++) {
                            for (let j = 0; j < numberOfDatafields; j++) {
                                const dataField = complexDataFieldsHeader[i][j];

                                if (!toMerge[dataField]) {
                                    toMerge[dataField] = { from: [i, j] };
                                    toMerge[dataField].to = toMerge[dataField].from;
                                }
                                else {
                                    const oldMergeTo = toMerge[dataField].to;

                                    if (i - oldMergeTo[0] > 1 || j - oldMergeTo[1] > 1) {
                                        toMerge[dataField + Math.random().toString(36)] = toMerge[dataField];
                                        toMerge[dataField] = { from: [i, j], to: [i, j] };
                                        continue;
                                    }

                                    toMerge[dataField].to = [i, j];
                                }
                            }
                        }

                        that.complexHeaderMergeInfo = toMerge;
                    }
                }
                else {
                    data.unshift(flatHeader);
                }
            }

            /**
             * Processes hierarchical data.
             */
            processHierarchicalData(data, format) {
                const that = this,
                    startIndex = format !== 'xlsx' ? +that.exportHeader : that.xlsxStartIndex,
                    siblingGroups = {},
                    processedData = [];
                let maxLevel = 0,
                    actualHierarchy = false;

                function process(parentKey, level, collapsed) {
                    const group = siblingGroups[parentKey];

                    maxLevel = Math.max(maxLevel, level);

                    if (group === undefined) {
                        return;
                    }

                    for (let i = 0; i < group.length; i++) {
                        const currentRecord = group[i],
                            keyDataField = currentRecord._keyDataField;

                        currentRecord._collapsed = collapsed;
                        currentRecord._level = level;
                        processedData.push(currentRecord);

                        if (siblingGroups[keyDataField]) {
                            actualHierarchy = true;
                            currentRecord._expanded = currentRecord._expanded !== undefined ? currentRecord._expanded : true;
                            process(keyDataField, level + 1, collapsed || !currentRecord._expanded);
                        }
                    }
                }

                function processJSONXML(parentKey, level, parent) {
                    const group = siblingGroups[parentKey];

                    maxLevel = Math.max(maxLevel, level);

                    if (group === undefined) {
                        return;
                    }

                    for (let i = 0; i < group.length; i++) {
                        const currentRecord = group[i],
                            keyDataField = currentRecord._keyDataField;
                        let cleanedRecord;

                        if (format === 'json') {
                            cleanedRecord = {};

                            for (let prop in currentRecord) {
                                if (Object.prototype.hasOwnProperty.call(currentRecord, prop) && prop.charAt(0) !== '_') {
                                    cleanedRecord[prop] = currentRecord[prop];
                                }
                            }
                        }
                        else {
                            cleanedRecord = Object.assign({}, currentRecord);
                        }

                        parent.push(cleanedRecord);

                        if (siblingGroups[keyDataField]) {
                            actualHierarchy = true;
                            cleanedRecord.rows = [];
                            processJSONXML(keyDataField, level + 1, cleanedRecord.rows);
                        }
                    }
                }

                if (data[startIndex]._keyDataField === undefined) {
                    return that.processNestedData(data, format, startIndex);
                }

                for (let i = startIndex; i < data.length; i++) {
                    const currentRecord = Object.assign({}, data[i]);
                    let parentKey = currentRecord._parentDataField;

                    if (parentKey === undefined) {
                        parentKey = null;
                    }

                    if (siblingGroups[parentKey] === undefined) {
                        siblingGroups[parentKey] = [currentRecord];
                    }
                    else {
                        siblingGroups[parentKey].push(currentRecord);
                    }
                }

                if (startIndex) {
                    for (let i = 0; i < startIndex; i++) {
                        processedData.push(Object.assign({}, data[i]));

                        if (['json', 'pdf', 'xml'].indexOf(format) === -1) {
                            processedData[i]._level = 1;
                        }
                    }
                }

                if (format !== 'json' && format !== 'xml') {
                    process(null, 1, false);
                }
                else {
                    processJSONXML(null, 1, processedData);
                }

                if (!actualHierarchy) {
                    that.actualHierarchy = false;
                }

                that.maxLevel = maxLevel;
                return processedData;
            }

            /**
             * Processes nested hierarchical data.
             */
            processNestedData(data, format, startIndex) {
                const that = this,
                    processedData = [];
                let maxLevel = 0,
                    actualHierarchy = false;

                function process(start, children, level, collapsed) {
                    maxLevel = Math.max(maxLevel, level);

                    for (let i = start; i < children.length; i++) {
                        const currentRecord = Object.assign({}, children[i]);

                        currentRecord._collapsed = collapsed;
                        currentRecord._level = level;
                        processedData.push(currentRecord);

                        if (currentRecord.children && currentRecord.children.length > 0) {
                            actualHierarchy = true;
                            currentRecord._expanded = currentRecord._expanded !== undefined ? currentRecord._expanded : true;
                            process(0, currentRecord.children, level + 1, collapsed || !currentRecord._expanded);
                        }

                        delete currentRecord.children;
                    }
                }

                function processJSONXML(start, children, rows, level) {
                    maxLevel = Math.max(maxLevel, level);

                    for (let i = start; i < children.length; i++) {
                        const currentRecord = Object.assign({}, children[i]);

                        if (level === 1) {
                            processedData[i] = currentRecord;
                        }
                        else {
                            rows[i] = currentRecord;
                        }

                        if (currentRecord.children && currentRecord.children.length > 0) {
                            actualHierarchy = true;
                            currentRecord.rows = [];
                            processJSONXML(0, currentRecord.children, currentRecord.rows, level + 1);
                        }

                        delete currentRecord.children;
                    }
                }

                if (startIndex) {
                    for (let i = 0; i < startIndex; i++) {
                        processedData.push(Object.assign({}, data[i]));

                        if (['json', 'pdf', 'xml'].indexOf(format) === -1) {
                            processedData[i]._level = 1;
                        }
                    }
                }

                if (format !== 'json' && format !== 'xml') {
                    process(startIndex, data, 1, false);
                }
                else {
                    processJSONXML(startIndex, data, undefined, 1);
                }

                if (!actualHierarchy) {
                    that.actualHierarchy = false;
                }

                that.maxLevel = maxLevel;
                return processedData;
            }

            /**
             * Processes row styles.
             */
            processRowStyle(style) {
                const that = this,
                    rowsDefinition = style.rows;

                that.rowHeight = [];

                if (!rowsDefinition) {
                    return;
                }

                const startIndex = that.xlsxStartIndex;

                function applyToRowCells(row, prop, value) {
                    for (let j = 0; j < that.columnsArray.length; j++) {
                        const currentCell = that.columnsArray[j] + (row + 1 + startIndex);

                        that.storeCellStyle(currentCell, prop, value);
                    }
                }

                if (rowsDefinition.height) {
                    if (!rowsDefinition.height) {
                        rowsDefinition.height = 15;
                    }
                    that.defaultRowHeight = ` ht="${parseFloat(rowsDefinition.height) / 2}"`;
                }

                for (let i = startIndex; i < that.data.length; i++) {
                    const row = i - startIndex;

                    for (let prop in rowsDefinition) {
                        if (Object.prototype.hasOwnProperty.call(rowsDefinition, prop) &&
                            prop.indexOf('alt') === -1 &&
                            isNaN(prop) &&
                            prop !== 'height') {
                            applyToRowCells(row, prop, rowsDefinition[prop]);
                        }
                    }

                    if (rowsDefinition.alternationCount &&
                        (((rowsDefinition.alternationStart === undefined || row >= rowsDefinition.alternationStart) &&
                            (rowsDefinition.alternationEnd === undefined || row <= rowsDefinition.alternationEnd)) ||
                            rowsDefinition.alternationStart === rowsDefinition.alternationEnd)) {
                        const start = rowsDefinition.alternationStart || 0,
                            i = (row - start) % rowsDefinition.alternationCount;

                        if (rowsDefinition[`alternationIndex${i}Color`]) {
                            applyToRowCells(row, 'color', rowsDefinition[`alternationIndex${i}Color`]);
                        }

                        if (rowsDefinition[`alternationIndex${i}BorderColor`]) {
                            applyToRowCells(row, 'borderColor', rowsDefinition[`alternationIndex${i}BorderColor`]);
                        }

                        if (rowsDefinition[`alternationIndex${i}BackgroundColor`]) {
                            applyToRowCells(row, 'backgroundColor', rowsDefinition[`alternationIndex${i}BackgroundColor`]);
                        }
                    }

                    if (that.setRowHeight) {
                        const rowHeight = that.setRowHeight(row);
                        if (rowHeight) {
                            that.rowHeight[i] = ` ht="${parseFloat(rowHeight)}"`;
                            continue;
                        }
                    }

                    if (rowsDefinition[row]) {
                        for (let prop in rowsDefinition[row]) {
                            if (Object.prototype.hasOwnProperty.call(rowsDefinition[row], prop)) {
                                if (prop === 'height') {
                                    that.rowHeight[i] = ` ht="${parseFloat(rowsDefinition[row].height) / 2}"`;
                                    continue;
                                }

                                if (that.data[i] && that.data[i][prop]) {
                                    function applyToRowCell(row, prop, value, dataField) {
                                        const j = that.datafields ? that.datafields.indexOf(dataField) : -1;
                                        if (j >= 0) {
                                            const currentCell = that.columnsArray[j] + (row + 1 + startIndex);

                                            that.storeCellStyle(currentCell, prop, value);
                                        }
                                    }
                                    for (let styleProp in rowsDefinition[row][prop]) {
                                        applyToRowCell(row, styleProp, rowsDefinition[row][prop][styleProp], prop);
                                    }
                                    continue;
                                }

                                applyToRowCells(row, prop, rowsDefinition[row][prop]);
                            }
                        }
                    }
                }
            }

            /**
             * Stores cell style in "styleMap" object.
             */
            storeCellStyle(cell, prop, value) {
                const that = this,
                    cellMap = that.styleMap[cell];

                switch (prop) {
                    case 'backgroundColor':
                        cellMap.fills.fgColor = value;
                        break;
                    case 'color':
                        cellMap.fonts.color = value;
                        break;
                    case 'fontFamily':
                        cellMap.fonts.name = value.replace(/"/g, '\'');
                        break;
                    case 'fontSize':
                        cellMap.fonts.sz = Math.round(parseFloat(value) / (96 / 72));
                        break;
                    case 'fontStyle':
                        if (value === 'italic') {
                            cellMap.fonts.i = true;
                        }
                        else {
                            delete cellMap.fonts.i;
                        }

                        break;
                    case 'fontWeight':
                        if (value === 'bold') {
                            cellMap.fonts.b = true;
                        }
                        else {
                            delete cellMap.fonts.b;
                        }

                        break;
                    case 'numFmt': {
                        cellMap.numFmt = value;
                        break;
                    }
                    case 'textAlign':
                        cellMap.alignment.horizontal = value;
                        break;
                    case 'textDecoration':
                        if (value === 'underline') {
                            cellMap.fonts.u = true;
                        }
                        else {
                            delete cellMap.fonts.u;
                        }

                        break;
                    case 'verticalAlign':
                        if (value === 'middle') {
                            value = 'center';
                        }

                        cellMap.alignment.vertical = value;
                        break;
                }
            }

            /**
             * Returns an Alpha Red Green Blue color value.
             */
            toARGB(color) {
                color = color.replace(/\s/g, '');

                const rgbResult = /rgb\((\d+),(\d+),(\d+)\)/gi.exec(color);

                if (rgbResult !== null) {
                    const r = parseFloat(rgbResult[1]).toString(16).toUpperCase(),
                        g = parseFloat(rgbResult[2]).toString(16).toUpperCase(),
                        b = parseFloat(rgbResult[3]).toString(16).toUpperCase();

                    return 'FF' + ('0').repeat(2 - r.length) + r +
                        ('0').repeat(2 - g.length) + g +
                        ('0').repeat(2 - b.length) + b;
                }

                const rgbaResult = /rgba\((\d+),(\d+),(\d+)\,(\d*.\d+|\d+)\)/gi.exec(color);

                if (rgbaResult !== null) {
                    const a = Math.round(parseFloat(rgbaResult[4]) * 255).toString(16).toUpperCase(),
                        r = parseFloat(rgbaResult[1]).toString(16).toUpperCase(),
                        g = parseFloat(rgbaResult[2]).toString(16).toUpperCase(),
                        b = parseFloat(rgbaResult[3]).toString(16).toUpperCase();

                    return ('0').repeat(2 - a.length) + a +
                        ('0').repeat(2 - r.length) + r +
                        ('0').repeat(2 - g.length) + g +
                        ('0').repeat(2 - b.length) + b;
                }

                const shortHexResult = /^#(.)(.)(.)$/gi.exec(color);

                if (shortHexResult !== null) {
                    const r = shortHexResult[1].toUpperCase(),
                        g = shortHexResult[2].toUpperCase(),
                        b = shortHexResult[3].toUpperCase();

                    return 'FF' + r + r + g + g + b + b;
                }

                return 'FF' + color.toUpperCase().slice(1);
            }

            /**
             * Adds toggleable functionality.
             */
            toggleableFunctionality() {
                const that = this;

                if (!that.actualHierarchy) {
                    return '';
                }

                return `\n    <style type="text/css">
            .toggle-element {
                width: 5px;
                height: 1px;
                padding-right: 5px;
                float: left;
                text-align: right;
                cursor: pointer;
                user-select: none;
            }
    
            .collapsed {
                display: none;
            }
        </style>
        <script type="text/javascript">
            window.onload = function () {
                var expandChar = '${that.expandChar}',
                    collapseChar = '${that.collapseChar}',
                    toggleElements = document.getElementsByClassName('toggle-element');
    
                function getParent(child) {
                    var prevSibling = child.previousElementSibling;
    
                    while (prevSibling) {
                        if (child.getAttribute('level') > prevSibling.getAttribute('level')) {
                            return prevSibling;
                        }
    
                        prevSibling = prevSibling.previousElementSibling;
                    }
    
                }
    
                function getFirstCollapsedAncestor(child) {
                    var parent = getParent(child);
    
                    while (parent) {
                        if (parent.firstElementChild.firstElementChild.innerHTML === expandChar) {
                            return parent;
                        }
    
                        parent = getParent(parent);
                    }
                }
    
                for (var i = 0; i < toggleElements.length; i++) {
                    toggleElements[i].addEventListener('click', function (event) {
                        var expanded = this.innerHTML === collapseChar,
                            row = this.parentElement.parentElement,
                            sibling = row.nextElementSibling;
    
                        if (expanded) {
                            this.innerHTML = expandChar;
                        }
                        else {
                            this.innerHTML = collapseChar;
                        }
    
                        while (sibling && row.getAttribute('level') < sibling.getAttribute('level')) {
                            if (expanded) {
                                sibling.style.display = 'none';
                            }
                            else {
                                var firstCollapsedAncestor = getFirstCollapsedAncestor(sibling);
    
                                if (!firstCollapsedAncestor || firstCollapsedAncestor === row) {
                                    sibling.classList.remove('collapsed');
                                    sibling.style.display = null;
                                }
    
                            }
    
                            sibling = sibling.nextElementSibling;
                        }
                    });
                }
            }
        </script>`;
            }

            /**
             * Generates styles.xml.
             */
            generateStyles(style) {
                const that = this;

                that.cellStyleMapping = {};

                if (Object.keys(style).length === 0 && !that.complexHeader) {
                    // default style
                    return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac x16r2 xr" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:x16r2="http://schemas.microsoft.com/office/spreadsheetml/2015/02/main" xmlns:xr="http://schemas.microsoft.com/office/spreadsheetml/2014/revision"><fonts count="1" x14ac:knownFonts="1"><font><sz val="11"/><color theme="1"/><name val="Calibri"/><family val="2"/><charset val="204"/><scheme val="minor"/></font></fonts><fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills><borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs><cellXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>${that.conditionalFormattingXLSX.styles || '<dxfs count="0"/>'}<tableStyles count="0" defaultTableStyle="TableStyleMedium2" defaultPivotStyle="PivotStyleLight16"/><extLst><ext uri="{EB79DEF2-80B8-43e5-95BD-54CBDDF9020C}" xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main"><x14:slicerStyles defaultSlicerStyle="SlicerStyleLight1"/></ext><ext uri="{9260A510-F301-46a8-8635-F512D64BE5F5}" xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main"><x15:timelineStyles defaultTimelineStyle="TimeSlicerStyleLight1"/></ext></extLst></styleSheet>`;
                }

                that.styleMap = {};

                let offset = that.headerContent ? that.headerContent.length : 0;
                offset += that.footerContent ? that.footerContent.length : 0;

                let count = that.data.length + offset;

                if (that.groupBy && that.groupBy.length) {
                    count += 50;
                }

                for (let i = 0; i < count; i++) {
                    for (let j = 0; j < that.columnsArray.length; j++) {
                        that.styleMap[that.columnsArray[j] + (i + 1)] = {
                            numFmts: {}, fonts: {}, fills: {}, borders: {}, alignment: {}
                        }
                    }
                }

                if (style && style.columns) {
                    for (let i = 0; i < that.columnsArray.length; i++) {
                        const datafield = that.datafields[i];

                        if (!style.columns[datafield] || !style.columns[datafield].format) {
                            continue;
                        }

                        const XLSXFormatFirst = that.getXLSXFormat(style.columns[datafield].format, that.data[1][datafield]);
                        const XLSXFormat = that.getXLSXFormat(style.columns[datafield].format, that.data[that.data.length - 1][datafield]);

                        if (XLSXFormat) {
                            style.columns[datafield].numFmt = XLSXFormat;
                        }
                        else if (XLSXFormatFirst) {
                            style.columns[datafield].numFmt = XLSXFormatFirst;
                        }
                        else if (style.columns[datafield].format && (datafield.toLowerCase().indexOf('date') >= 0 || style.columns[datafield].format.indexOf('d/') >= 0)) {
                            let format = style.columns[datafield].format;
                            switch (format) {
                                case 'd':
                                    format = 'm/d/yyyy';
                                    break;
                                case 'D':
                                    format = 'nnnnmmmm dd, yyyy';
                                    break;
                                case 't':
                                    format = 'h:m AM/PM';
                                    break;
                                case 'T':
                                    format = 'h:mm:ss AM/PM';
                                    break;
                                case 'f':
                                    format = 'nnnnmmmm dd, yyyy h:m AM/PM';
                                    break;
                                case 'F':
                                    format = 'nnnnmmmm dd, yyyy h:mm:ss AM/PM';
                                    break;
                                case 'M':
                                    format = 'mmmm d';
                                    break;
                                case 'Y':
                                    format = 'yyyy mmmm';
                                    break;
                                case 'FP':
                                case 'PP':
                                    format = 'yyyy-mm-dd hh:mm:ss';
                                    break;
                                case 'FT':
                                case 'PT':
                                    format = 'hh:mm:ss';
                                    break;
                            }

                            format = format.replace(/f|u|n|p|e|a|x|o/gi, '');
                            format = format.replace(/tt/gi, 'AM/PM');
                            format = format.replace(/:{2,}|:\s|:$|\.$/g, '');
                            format = format.trim();
                            style.columns[datafield].numFmt = format;
                        }
                    }
                }

                that.processRowStyle(style);
                that.processColumnStyle(style);

                const cellAliases = {};

                for (let i = 0; i < that.complexHeaderMergedCells.length; i++) {
                    const currentCell = that.complexHeaderMergedCells[i];

                    if (parseFloat(currentCell.to[1]) === that.complexHeader.length) {
                        cellAliases[currentCell.to] = currentCell.from;
                        continue;
                    }

                    that.styleMap[currentCell.from].alignment.horizontal = 'center';
                    that.styleMap[currentCell.from].alignment.vertical = 'center';
                }

                const fonts = {
                    xml: '<font><sz val="11" /><color theme="1" /><name val="Calibri" /><family val="2" /><charset val="204" /><scheme val="minor" /></font>',
                    collection: ['default']
                },
                    fills = {
                        xml: '<fill><patternFill patternType="none" /></fill><fill><patternFill patternType="gray125" /></fill>',
                        collection: ['default', 'gray125']
                    },
                    numFmts = {
                        xml: '',
                        collection: []
                    },
                    cellXfs = {
                        xml: '<xf fontId="0" fillId="0" borderId="1"/>',
                        collection: ['default']
                    };

                for (let i = 0; i < count; i++) { // iterate rows
                    for (let j = 0; j < that.columnsArray.length; j++) { // iterate columns
                        const currentCell = that.columnsArray[j] + (i + 1),
                            currentCellStyle = that.styleMap[currentCell];
                        let currentFont = '', currentFill = '', currentAlignment = '',
                            currentFontCode = [], currentFillCode = [], currentAlignmentCode = [], xf = [];

                        for (let prop in currentCellStyle.fonts) {
                            if (Object.prototype.hasOwnProperty.call(currentCellStyle.fonts, prop)) {
                                const value = currentCellStyle.fonts[prop];

                                switch (prop) {
                                    case 'color':
                                        currentFontCode[0] = value;
                                        currentFont += `<color rgb="${that.toARGB(value)}" />`;
                                        break;
                                    case 'name':
                                        currentFontCode[1] = value;
                                        currentFont += `<name val="${value}" />`;
                                        break;
                                    case 'sz':
                                        currentFontCode[2] = value;
                                        currentFont += `<sz val="${value}" />`;
                                        break;
                                    case 'i':
                                        currentFontCode[3] = value;
                                        currentFont += '<i />';
                                        break;
                                    case 'b':
                                        currentFontCode[4] = value;
                                        currentFont += '<b />';
                                        break;
                                    case 'u':
                                        currentFontCode[5] = value;
                                        currentFont += '<u />';
                                        break;
                                }
                            }
                        }

                        for (let prop in currentCellStyle.fills) {
                            if (Object.prototype.hasOwnProperty.call(currentCellStyle.fills, prop)) {
                                const value = currentCellStyle.fills[prop];

                                switch (prop) {
                                    case 'fgColor':
                                        currentFillCode[0] = value;
                                        currentFill += `<fgColor rgb="${that.toARGB(value)}" />`;
                                        break;
                                }
                            }
                        }

                        for (let prop in currentCellStyle.alignment) {
                            if (Object.prototype.hasOwnProperty.call(currentCellStyle.alignment, prop)) {
                                const value = currentCellStyle.alignment[prop];

                                switch (prop) {
                                    case 'horizontal':
                                        currentAlignmentCode[0] = value;
                                        currentAlignment += `horizontal="${value}" `;
                                        break;
                                    case 'vertical':
                                        currentAlignmentCode[1] = value;
                                        currentAlignment += `vertical="${value}" `;
                                        break;
                                }
                            }
                        }

                        currentFontCode = currentFontCode.toString();
                        currentFillCode = currentFillCode.toString();

                        if (currentFont !== '') {
                            let fontIndex = fonts.collection.indexOf(currentFontCode);

                            if (fontIndex === -1) {
                                fontIndex = fonts.collection.length;

                                fonts.xml += '<font>' + currentFont + '</font>';
                                fonts.collection.push(currentFontCode);
                            }

                            xf[0] = fontIndex;
                        }

                        if (currentFill !== '') {
                            let fillIndex = fills.collection.indexOf(currentFillCode);

                            if (fillIndex === -1) {
                                fillIndex = fills.collection.length;

                                fills.xml += '<fill><patternFill patternType="solid">' + currentFill + '</patternFill></fill>';
                                fills.collection.push(currentFillCode);
                            }

                            xf[1] = fillIndex;
                        }

                        if (currentAlignmentCode.length > 0) {
                            xf[2] = currentAlignment;
                        }

                        if (currentCellStyle.numFmt !== undefined) {
                            xf[3] = that.getNumFmtIndex(currentCellStyle.numFmt, numFmts);
                        }

                        const xfCode = xf.toString();

                        if (xfCode !== '') {
                            let xfIndex = cellXfs.collection.indexOf(xfCode);

                            if (xfIndex === -1) {
                                let newXfXML = '<xf ';

                                xfIndex = cellXfs.collection.length;

                                if (xf[0] !== undefined) {
                                    newXfXML += `fontId="${xf[0]}" `;
                                }

                                if (xf[1] !== undefined) {
                                    newXfXML += `fillId="${xf[1]}" `;
                                }

                                if (xf[3] !== undefined) {
                                    newXfXML += `numFmtId="${xf[3]}" `;
                                }

                                if (xf[2] !== undefined) {
                                    newXfXML += `applyAlignment="1" borderId="1"><alignment ${currentAlignment}/></xf>`;
                                }
                                else {
                                    newXfXML += ' borderId="1"/>';
                                }

                                cellXfs.xml += newXfXML;
                                cellXfs.collection.push(xfCode);
                            }

                            that.cellStyleMapping[cellAliases[currentCell] || currentCell] = xfIndex;
                        }
                    }
                }

                if (numFmts.collection.length) {
                    numFmts.xml = `<numFmts count="${numFmts.collection.length}">${numFmts.xml}</numFmts>`;
                }

                return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac x16r2 xr" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:x16r2="http://schemas.microsoft.com/office/spreadsheetml/2015/02/main" xmlns:xr="http://schemas.microsoft.com/office/spreadsheetml/2014/revision">${numFmts.xml}<fonts count="${fonts.collection.length}" x14ac:knownFonts="1">${fonts.xml}</fonts><fills count="${fills.collection.length}">${fills.xml}</fills><borders count="2"><border><left/><right/><top/><bottom/></border><border><left style="hair"/><right style="hair"/><top style="hair"/><bottom style="hair"/><diagonal/></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs><cellXfs count="${cellXfs.collection.length}">${cellXfs.xml}</cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>${that.conditionalFormattingXLSX.styles}<dxfs count="0"/><tableStyles count="0" defaultTableStyle="TableStyleMedium2" defaultPivotStyle="PivotStyleLight16"/><extLst><ext uri="{EB79DEF2-80B8-43e5-95BD-54CBDDF9020C}" xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main"><x14:slicerStyles defaultSlicerStyle="SlicerStyleLight1"/></ext><ext uri="{9260A510-F301-46a8-8635-F512D64BE5F5}" xmlns:x15="http://schemas.microsoft.com/office/spreadsheetml/2010/11/main"><x15:timelineStyles defaultTimelineStyle="TimeSlicerStyleLight1"/></ext></extLst></styleSheet>`;
            }
        }

        if ($.jqx && $.jqx.dataAdapter) {
            $.jqx.dataAdapter.DataExporter = DataExporter;
        }
    })(jqxBaseFramework);
})();

/***/ }),

/***/ 6752:
/***/ (() => {

/*
jQWidgets v26.0.0 (2026-July)
Copyright (c) 2011-2026 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

/* tslint:disable */
/* eslint-disable */
(function () {
    if (typeof document === 'undefined') {
        return;
    }

    (function ($) {

        $.jqx.jqxWidget("jqxQRcode", "", {});

        $.extend($.jqx._jqxQRcode.prototype, {
            defineInstance: function () {
                var settings = {
                    value: 'jqwidgets.com',
                    backgroundColor: 'white',
                    squareWidth: 7,
                    lineColor: 'black',
                    displayLabel: false,
                    labelPosition: 'bottom',
                    labelFontSize: 10,
                    labelMarginTop: 5,
                    labelMarginBottom: 5,
                    labelColor: 'black',
                    labelFont: 'monospace',
                    errorLevel: 'H',
                    renderAs: 'svg',
                    embedImage: '',
                    imageHeight: 15,
                    imageWidth: 15,
                    type: 'codabar'

                }
                $.extend(true, this, settings);
                return settings;
            },


            createInstance: function (args) {
                var that = this;

                var qrcode = new QRcode(this.element);
                qrcode.value = that.value;
                qrcode.backgroundColor = that.backgroundColor;
                qrcode.squareWidth = that.squareWidth;
                qrcode.lineColor = that.lineColor;
                qrcode.displayLabel = that.displayLabel;
                qrcode.labelPosition = that.labelPosition;
                qrcode.labelFontSize = that.labelFontSize;
                qrcode.labelMarginTop = that.labelMarginTop;
                qrcode.labelMarginBottom = that.labelMarginBottom;
                qrcode.labelColor = that.labelColor;
                qrcode.labelFont = that.labelFont;
                qrcode.errorLevel = that.errorLevel;
                qrcode.renderAs = that.renderAs;
                qrcode.embedImage = that.embedImage;
                qrcode.imageHeight = that.imageHeight;
                qrcode.imageWidth = that.imageWidth;
                qrcode.type = that.type;
                this.element.innerHTML = qrcode.template();
                this.qrcode = qrcode;
                qrcode.refresh();
            },


            export: function (format, fileName) {
                this.qrcode.export(format, fileName);
            },

            isValid: function () {
                return this.qrcode.isValid(false);
            },

            propertyChangedHandler: function (object, key, oldvalue, value) {
                var that = object;

                that.qrcode[key] = value;
                that.qrcode.refresh();
            }
        });
    })(jqxBaseFramework);

    class QRcode {
        // QRcode's properties.
        static get properties() {
            return {
                value: {
                    type: 'string',
                    value: '',
                },
                backgroundColor: {
                    value: 'white',
                    type: 'string',
                },
                squareWidth: {
                    value: 7,
                    type: 'number',
                },
                lineColor: {
                    value: 'black',
                    type: 'string',
                },
                displayLabel: {
                    value: false,
                    type: 'boolean',
                },
                labelPosition: {
                    value: 'bottom',
                    type: 'string',
                    allowedValues: ['top', 'bottom'],
                },
                labelFontSize: {
                    value: 10,
                    type: 'number',
                },
                labelMarginTop: {
                    value: 5,
                    type: 'number',
                },
                labelMarginBottom: {
                    value: 5,
                    type: 'number',
                },
                labelColor: {
                    value: 'black',
                    type: 'string',
                },
                labelFont: {
                    value: 'monospace',
                    type: 'string',
                },
                errorLevel: {
                    value: 'H',
                    type: 'string',
                },
                renderAs: {
                    value: 'svg',
                    type: 'string',
                    allowedValues: ['svg', 'canvas'],
                },
                embedImage: {
                    value: '',
                    type: 'string'
                },
                imageHeight: {
                    value: 15,
                    type: 'number'
                },
                imageWidth: {
                    value: 15,
                    type: 'number'
                },
                type: {
                    value: 'codabar',
                    type: 'string',
                    allowedValues: [
                        'pharmacode',
                        'codabar',
                        'code128a',
                        'code128b',
                        'code128c',
                        'msi',
                        'msi10',
                        'msi11',
                        'msi1010',
                        'msi1110',
                        'ean13',
                        'ean8',
                        'code39',
                        'code93'
                    ]
                },
            };
        }

        constructor(host) {
            this.host = host;
        }

        /** QR Code's template. */
        template() {
            return '<div class="qx-qrcode-container"></div>';
        }

        _getValuesTable() {
            return [
                null,
                [[10, 7, 17, 13], [1, 1, 1, 1], []],
                [
                    [16, 10, 28, 22],
                    [1, 1, 1, 1],
                    [4, 16],
                ],
                [
                    [26, 15, 22, 18],
                    [1, 1, 2, 2],
                    [4, 20],
                ],
                [
                    [18, 20, 16, 26],
                    [2, 1, 4, 2],
                    [4, 24],
                ],
                [
                    [24, 26, 22, 18],
                    [2, 1, 4, 4],
                    [4, 28],
                ],
                [
                    [16, 18, 28, 24],
                    [4, 2, 4, 4],
                    [4, 32],
                ],
                [
                    [18, 20, 26, 18],
                    [4, 2, 5, 6],
                    [4, 20, 36],
                ],
                [
                    [22, 24, 26, 22],
                    [4, 2, 6, 6],
                    [4, 22, 40],
                ],
                [
                    [22, 30, 24, 20],
                    [5, 2, 8, 8],
                    [4, 24, 44],
                ],
                [
                    [26, 18, 28, 24],
                    [5, 4, 8, 8],
                    [4, 26, 48],
                ],
                [
                    [30, 20, 24, 28],
                    [5, 4, 11, 8],
                    [4, 28, 52],
                ],
                [
                    [22, 24, 28, 26],
                    [8, 4, 11, 10],
                    [4, 30, 56],
                ],
                [
                    [22, 26, 22, 24],
                    [9, 4, 16, 12],
                    [4, 32, 60],
                ],
                [
                    [24, 30, 24, 20],
                    [9, 4, 16, 16],
                    [4, 24, 44, 64],
                ],
                [
                    [24, 22, 24, 30],
                    [10, 6, 18, 12],
                    [4, 24, 46, 68],
                ],
                [
                    [28, 24, 30, 24],
                    [10, 6, 16, 17],
                    [4, 24, 48, 72],
                ],
                [
                    [28, 28, 28, 28],
                    [11, 6, 19, 16],
                    [4, 28, 52, 76],
                ],
                [
                    [26, 30, 28, 28],
                    [13, 6, 21, 18],
                    [4, 28, 54, 80],
                ],
                [
                    [26, 28, 26, 26],
                    [14, 7, 25, 21],
                    [4, 28, 56, 84],
                ],
                [
                    [26, 28, 28, 30],
                    [16, 8, 25, 20],
                    [4, 32, 60, 88],
                ],
                [
                    [26, 28, 30, 28],
                    [17, 8, 25, 23],
                    [4, 26, 48, 70, 92],
                ],
                [
                    [28, 28, 24, 30],
                    [17, 9, 34, 23],
                    [4, 24, 48, 72, 96],
                ],
                [
                    [28, 30, 30, 30],
                    [18, 9, 30, 25],
                    [4, 28, 52, 76, 100],
                ],
                [
                    [28, 30, 30, 30],
                    [20, 10, 32, 27],
                    [4, 26, 52, 78, 104],
                ],
                [
                    [28, 26, 30, 30],
                    [21, 12, 35, 29],
                    [4, 30, 56, 82, 108],
                ],
                [
                    [28, 28, 30, 28],
                    [23, 12, 37, 34],
                    [4, 28, 56, 84, 112],
                ],
                [
                    [28, 30, 30, 30],
                    [25, 12, 40, 34],
                    [4, 32, 60, 88, 116],
                ],
                [
                    [28, 30, 30, 30],
                    [26, 13, 42, 35],
                    [4, 24, 48, 72, 96, 120],
                ],
                [
                    [28, 30, 30, 30],
                    [28, 14, 45, 38],
                    [4, 28, 52, 76, 100, 124],
                ],
                [
                    [28, 30, 30, 30],
                    [29, 15, 48, 40],
                    [4, 24, 50, 76, 102, 128],
                ],
                [
                    [28, 30, 30, 30],
                    [31, 16, 51, 43],
                    [4, 28, 54, 80, 106, 132],
                ],
                [
                    [28, 30, 30, 30],
                    [33, 17, 54, 45],
                    [4, 32, 58, 84, 110, 136],
                ],
                [
                    [28, 30, 30, 30],
                    [35, 18, 57, 48],
                    [4, 28, 56, 84, 112, 140],
                ],
                [
                    [28, 30, 30, 30],
                    [37, 19, 60, 51],
                    [4, 32, 60, 88, 116, 144],
                ],
                [
                    [28, 30, 30, 30],
                    [38, 19, 63, 53],
                    [4, 28, 52, 76, 100, 124, 148],
                ],
                [
                    [28, 30, 30, 30],
                    [40, 20, 66, 56],
                    [4, 22, 48, 74, 100, 126, 152],
                ],
                [
                    [28, 30, 30, 30],
                    [43, 21, 70, 59],
                    [4, 26, 52, 78, 104, 130, 156],
                ],
                [
                    [28, 30, 30, 30],
                    [45, 22, 74, 62],
                    [4, 30, 56, 82, 108, 134, 160],
                ],
                [
                    [28, 30, 30, 30],
                    [47, 24, 77, 65],
                    [4, 24, 52, 80, 108, 136, 164],
                ],
                [
                    [28, 30, 30, 30],
                    [49, 25, 81, 68],
                    [4, 28, 56, 84, 112, 140, 168],
                ],
            ];
        }

        _getGaloisFieldTable() {
            let table = [],
                inverseTable = [-1];
            for (let i = 0, v = 1; i < 255; ++i) {
                table.push(v);
                inverseTable[v] = i;
                v = (v * 2) ^ (v >= 128 ? 0x11d : 0);
            }

            return [table, inverseTable];
        }

        _getGaloisFieldPoly() {
            const that = this;
            const [GF_TABLE, GF_INVERSE_TABLE] = that._getGaloisFieldTable();
            let GF_POLY = [[]];
            for (let i = 0; i < 30; ++i) {
                let prevpoly = GF_POLY[i],
                    poly = [];
                for (let j = 0; j <= i; ++j) {
                    let a = j < i ? GF_TABLE[prevpoly[j]] : 0;
                    let b = GF_TABLE[(i + (prevpoly[j - 1] || 0)) % 255];
                    poly.push(GF_INVERSE_TABLE[a ^ b]);
                }
                GF_POLY.push(poly);
            }
            return GF_POLY
        }

        _getDataMaskingFunctions() {
            return [
                function (row, col) {
                    return (row + col) % 2 === 0;
                },
                function (row,) {
                    return row % 2 === 0;
                },
                function (row, col) {
                    return col % 3 === 0;
                },
                function (row, col) {
                    return (row + col) % 3 === 0;
                },
                function (row, col) {
                    return (((row / 2) | 0) + ((col / 3) | 0)) % 2 === 0;
                },
                function (row, col) {
                    return ((row * col) % 2) + ((row * col) % 3) === 0;
                },
                function (row, col) {
                    return (((row * col) % 2) + ((row * col) % 3)) % 2 === 0;
                },
                function (row, col) {
                    return (((row + col) % 2) + ((row * col) % 3)) % 2 === 0;
                }
            ]
        }

        _polynomialGenerator() {
            const that = this;
            const [GF_TABLE, GF_INVERSE_TABLE] = that._getGaloisFieldTable();
            let polynomial = [[]];
            for (let i = 0; i < 30; ++i) {
                let prevpoly = polynomial[i],
                    poly = [];
                for (let j = 0; j <= i; ++j) {
                    let a = j < i ? GF_TABLE[prevpoly[j]] : 0;
                    let b = GF_TABLE[(i + (prevpoly[j - 1] || 0)) % 255];
                    poly.push(GF_INVERSE_TABLE[a ^ b]);
                }
                polynomial.push(poly);
            }
        }

        _getCodeSize(version) {
            return 4 * version + 17;
        }

        //returns the number of bits available for code words
        _getCodeWordsBits(version) {
            const that = this;
            let versionBits = that._getValuesTable()[version];
            let bitsCount = 16 * version * version + 128 * version + 64;
            if (version > 6) bitsCount -= 36;
            if (versionBits[2].length) {
                // alignment patterns
                bitsCount -= 25 * versionBits[2].length * versionBits[2].length - 10 * versionBits[2].length - 55;
            }
            return bitsCount;
        }

        //returns the number of bits available for data portions
        _getDataBits(version, errorLevel) {
            const that = this;
            let bitsCount = that._getCodeWordsBits(version) & ~7;
            let versionBits = that._getValuesTable()[version];
            bitsCount -= 8 * versionBits[0][errorLevel] * versionBits[1][errorLevel];
            return bitsCount;
        }

        //returns the number of bits required for the length of data.
        _getDataLengthBits(version) {
            const that = this;
            const mode = that._getEncodingMode(that.value)
            switch (mode) {
                case 1:
                    //Numeric Mode
                    return version < 10 ? 10 : version < 27 ? 12 : 14;
                case 2:
                    //Alphanumeric Mode
                    return version < 10 ? 9 : version < 27 ? 11 : 13;
                case 4:
                    //Byte Mode
                    return version < 10 ? 8 : 16;
                case 8:
                    //Kanji Mode
                    return version < 10 ? 8 : version < 27 ? 10 : 12;
            }
        }

        //returns the data capacity for the specified version and level
        _getDataLength(version, errorLevel) {
            const that = this;
            const mode = that._getEncodingMode(that.value)
            let bits = that._getDataBits(version, errorLevel) - 4 - that._getDataLengthBits(version);
            switch (mode) {
                case 1:
                    return that._getNumericCapacity(bits);
                case 2:
                    return that._getAlphanumericCapacity(bits);
                case 4:
                    return that._getByteCapacity(bits);
                case 8:
                    return that._getKanjiCapacity(bits);
            }
        }


        _getNumericCapacity(availableBits) {
            return (
                ((availableBits / 10) | 0) * 3 + (availableBits % 10 < 4 ? 0 : availableBits % 10 < 7 ? 1 : 2)
            );
        }

        _getAlphanumericCapacity(availableBits) {
            return ((availableBits / 11) | 0) * 2 + (availableBits % 11 < 6 ? 0 : 1);
        }

        _getByteCapacity(availableBits) {
            return Math.floor(availableBits / 8);
        }

        _getKanjiCapacity(availableBits) {
            return Math.floor(availableBits / 13);
        }

        //Determine QR Code Encoding Mode
        _getEncodingMode(val) {
            if (/^\d+$/.test(val)) {
                //Numeric Mode
                return 1;
            }
            else if (/^[A-Z0-9 $%*+\-./:]*$/.test(val)) {
                //Alphanumeric Mode
                return 2;
            }
            else if (
                /^[\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFF9F\u4E00-\u9FAF\u2605-\u2606\u2190-\u2195\u203B\u25C0-\u25C5]+$/.test(
                    val
                )
            ) {
                //Kanji Mode
                return 8;
            }
            else {
                //Byte Mode
                return 4;
            }
        }

        _getByteValues(content) {
            let result = [];
            for (var i = 0; i < content.length; ++i) {
                var ch = content.charCodeAt(i);
                if (ch < 0x80) {
                    result.push(ch);
                }
                else if (ch < 0x800) {
                    result.push(0xc0 | (ch >> 6), 0x80 | (ch & 0x3f));
                }
                else if (ch < 0x10000) {
                    result.push(
                        0xe0 | (ch >> 12),
                        0x80 | ((ch >> 6) & 0x3f),
                        0x80 | (ch & 0x3f)
                    );
                }
                else {
                    result.push(
                        0xf0 | (ch >> 18),
                        0x80 | ((ch >> 12) & 0x3f),
                        0x80 | ((ch >> 6) & 0x3f),
                        0x80 | (ch & 0x3f)
                    );
                }
            }
            return result;
        }

        _getNumericValues(content) {
            const BIT_WIDTHS = [0, 4, 7, 10];
            let result = [];
            for (let index = 0; index < content.length; index += 3) {
                const chunk = content.substr(index, 3);
                const bitLength = BIT_WIDTHS[chunk.length];
                const value = parseInt(chunk, 10);
                result.push({
                    value,
                    bitLength,
                });
            }
            return result;
        }

        _getAlphanumericValues(content) {
            const ALPHACHAR_MAP = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:';
            let result = [];
            for (let index = 0; index < content.length; index += 2) {
                const chunk = content.substr(index, 2);
                const codes = chunk
                    .split('')
                    .map((char) => ALPHACHAR_MAP.indexOf(char));
                const value =
                    chunk.length === 1
                        ? codes[0]
                        : codes[0] * ALPHACHAR_MAP.length + codes[1];
                result.push(value);
            }
            return result;
        }

        _getKanjiValues(content) {
            const kanjiTable = [[32, 32], [33, 33], [34, 34], [35, 35], [36, 36], [37, 37], [38, 38], [39, 39], [40, 40], [41, 41], [42, 42], [43, 43], [44, 44], [45, 45], [46, 46], [47, 47], [48, 48], [49, 49], [50, 50], [51, 51], [52, 52], [53, 53], [54, 54], [55, 55], [56, 56], [57, 57], [58, 58], [59, 59], [60, 60], [61, 61], [62, 62], [63, 63], [64, 64], [65, 65], [66, 66], [67, 67], [68, 68], [69, 69], [70, 70], [71, 71], [72, 72], [73, 73], [74, 74], [75, 75], [76, 76], [77, 77], [78, 78], [79, 79], [80, 80], [81, 81], [82, 82], [83, 83], [84, 84], [85, 85], [86, 86], [87, 87], [88, 88], [89, 89], [90, 90], [91, 91], [92, 165], [93, 93], [94, 94], [95, 95], [96, 96], [97, 97], [98, 98], [99, 99], [100, 100], [101, 101], [102, 102], [103, 103], [104, 104], [105, 105], [106, 106], [107, 107], [108, 108], [109, 109], [110, 110], [111, 111], [112, 112], [113, 113], [114, 114], [115, 115], [116, 116], [117, 117], [118, 118], [119, 119], [120, 120], [121, 121], [122, 122], [123, 123], [124, 124], [125, 125], [126, 8254], [33088, 12288], [33089, 12289], [33090, 12290], [33091, 65292], [33092, 65294], [33093, 12539], [33094, 65306], [33095, 65307], [33096, 65311], [33097, 65281], [33098, 12443], [33099, 12444], [33100, 180], [33101, 65344], [33102, 168], [33103, 65342], [33104, 65507], [33105, 65343], [33106, 12541], [33107, 12542], [33108, 12445], [33109, 12446], [33110, 12291], [33111, 20189], [33112, 12293], [33113, 12294], [33114, 12295], [33115, 12540], [33116, 8213], [33117, 8208], [33118, 65295], [33119, 92], [33120, 12316], [33121, 8214], [33122, 65372], [33123, 8230], [33124, 8229], [33125, 8216], [33126, 8217], [33127, 8220], [33128, 8221], [33129, 65288], [33130, 65289], [33131, 12308], [33132, 12309], [33133, 65339], [33134, 65341], [33135, 65371], [33136, 65373], [33137, 12296], [33138, 12297], [33139, 12298], [33140, 12299], [33141, 12300], [33142, 12301], [33143, 12302], [33144, 12303], [33145, 12304], [33146, 12305], [33147, 65291], [33148, 8722], [33149, 177], [33150, 215], [33152, 247], [33153, 65309], [33154, 8800], [33155, 65308], [33156, 65310], [33157, 8806], [33158, 8807], [33159, 8734], [33160, 8756], [33161, 9794], [33162, 9792], [33163, 176], [33164, 8242], [33165, 8243], [33166, 8451], [33167, 65509], [33168, 65284], [33169, 162], [33170, 163], [33171, 65285], [33172, 65283], [33173, 65286], [33174, 65290], [33175, 65312], [33176, 167], [33177, 9734], [33178, 9733], [33179, 9675], [33180, 9679], [33181, 9678], [33182, 9671], [33183, 9670], [33184, 9633], [33185, 9632], [33186, 9651], [33187, 9650], [33188, 9661], [33189, 9660], [33190, 8251], [33191, 12306], [33192, 8594], [33193, 8592], [33194, 8593], [33195, 8595], [33196, 12307], [33208, 8712], [33209, 8715], [33210, 8838], [33211, 8839], [33212, 8834], [33213, 8835], [33214, 8746], [33215, 8745], [33224, 8743], [33225, 8744], [33226, 172], [33227, 8658], [33228, 8660], [33229, 8704], [33230, 8707], [33242, 8736], [33243, 8869], [33244, 8978], [33245, 8706], [33246, 8711], [33247, 8801], [33248, 8786], [33249, 8810], [33250, 8811], [33251, 8730], [33252, 8765], [33253, 8733], [33254, 8757], [33255, 8747], [33256, 8748], [33264, 8491], [33265, 8240], [33266, 9839], [33267, 9837], [33268, 9834], [33269, 8224], [33270, 8225], [33271, 182], [33276, 9711], [33359, 65296], [33360, 65297], [33361, 65298], [33362, 65299], [33363, 65300], [33364, 65301], [33365, 65302], [33366, 65303], [33367, 65304], [33368, 65305], [33376, 65313], [33377, 65314], [33378, 65315], [33379, 65316], [33380, 65317], [33381, 65318], [33382, 65319], [33383, 65320], [33384, 65321], [33385, 65322], [33386, 65323], [33387, 65324], [33388, 65325], [33389, 65326], [33390, 65327], [33391, 65328], [33392, 65329], [33393, 65330], [33394, 65331], [33395, 65332], [33396, 65333], [33397, 65334], [33398, 65335], [33399, 65336], [33400, 65337], [33401, 65338], [33409, 65345], [33410, 65346], [33411, 65347], [33412, 65348], [33413, 65349], [33414, 65350], [33415, 65351], [33416, 65352], [33417, 65353], [33418, 65354], [33419, 65355], [33420, 65356], [33421, 65357], [33422, 65358], [33423, 65359], [33424, 65360], [33425, 65361], [33426, 65362], [33427, 65363], [33428, 65364], [33429, 65365], [33430, 65366], [33431, 65367], [33432, 65368], [33433, 65369], [33434, 65370], [33439, 12353], [33440, 12354], [33441, 12355], [33442, 12356], [33443, 12357], [33444, 12358], [33445, 12359], [33446, 12360], [33447, 12361], [33448, 12362], [33449, 12363], [33450, 12364], [33451, 12365], [33452, 12366], [33453, 12367], [33454, 12368], [33455, 12369], [33456, 12370], [33457, 12371], [33458, 12372], [33459, 12373], [33460, 12374], [33461, 12375], [33462, 12376], [33463, 12377], [33464, 12378], [33465, 12379], [33466, 12380], [33467, 12381], [33468, 12382], [33469, 12383], [33470, 12384], [33471, 12385], [33472, 12386], [33473, 12387], [33474, 12388], [33475, 12389], [33476, 12390], [33477, 12391], [33478, 12392], [33479, 12393], [33480, 12394], [33481, 12395], [33482, 12396], [33483, 12397], [33484, 12398], [33485, 12399], [33486, 12400], [33487, 12401], [33488, 12402], [33489, 12403], [33490, 12404], [33491, 12405], [33492, 12406], [33493, 12407], [33494, 12408], [33495, 12409], [33496, 12410], [33497, 12411], [33498, 12412], [33499, 12413], [33500, 12414], [33501, 12415], [33502, 12416], [33503, 12417], [33504, 12418], [33505, 12419], [33506, 12420], [33507, 12421], [33508, 12422], [33509, 12423], [33510, 12424], [33511, 12425], [33512, 12426], [33513, 12427], [33514, 12428], [33515, 12429], [33516, 12430], [33517, 12431], [33518, 12432], [33519, 12433], [33520, 12434], [33521, 12435], [33600, 12449], [33601, 12450], [33602, 12451], [33603, 12452], [33604, 12453], [33605, 12454], [33606, 12455], [33607, 12456], [33608, 12457], [33609, 12458], [33610, 12459], [33611, 12460], [33612, 12461], [33613, 12462], [33614, 12463], [33615, 12464], [33616, 12465], [33617, 12466], [33618, 12467], [33619, 12468], [33620, 12469], [33621, 12470], [33622, 12471], [33623, 12472], [33624, 12473], [33625, 12474], [33626, 12475], [33627, 12476], [33628, 12477], [33629, 12478], [33630, 12479], [33631, 12480], [33632, 12481], [33633, 12482], [33634, 12483], [33635, 12484], [33636, 12485], [33637, 12486], [33638, 12487], [33639, 12488], [33640, 12489], [33641, 12490], [33642, 12491], [33643, 12492], [33644, 12493], [33645, 12494], [33646, 12495], [33647, 12496], [33648, 12497], [33649, 12498], [33650, 12499], [33651, 12500], [33652, 12501], [33653, 12502], [33654, 12503], [33655, 12504], [33656, 12505], [33657, 12506], [33658, 12507], [33659, 12508], [33660, 12509], [33661, 12510], [33662, 12511], [33664, 12512], [33665, 12513], [33666, 12514], [33667, 12515], [33668, 12516], [33669, 12517], [33670, 12518], [33671, 12519], [33672, 12520], [33673, 12521], [33674, 12522], [33675, 12523], [33676, 12524], [33677, 12525], [33678, 12526], [33679, 12527], [33680, 12528], [33681, 12529], [33682, 12530], [33683, 12531], [33684, 12532], [33685, 12533], [33686, 12534], [33695, 913], [33696, 914], [33697, 915], [33698, 916], [33699, 917], [33700, 918], [33701, 919], [33702, 920], [33703, 921], [33704, 922], [33705, 923], [33706, 924], [33707, 925], [33708, 926], [33709, 927], [33710, 928], [33711, 929], [33712, 931], [33713, 932], [33714, 933], [33715, 934], [33716, 935], [33717, 936], [33718, 937], [33727, 945], [33728, 946], [33729, 947], [33730, 948], [33731, 949], [33732, 950], [33733, 951], [33734, 952], [33735, 953], [33736, 954], [33737, 955], [33738, 956], [33739, 957], [33740, 958], [33741, 959], [33742, 960], [33743, 961], [33744, 963], [33745, 964], [33746, 965], [33747, 966], [33748, 967], [33749, 968], [33750, 969], [33856, 1040], [33857, 1041], [33858, 1042], [33859, 1043], [33860, 1044], [33861, 1045], [33862, 1025], [33863, 1046], [33864, 1047], [33865, 1048], [33866, 1049], [33867, 1050], [33868, 1051], [33869, 1052], [33870, 1053], [33871, 1054], [33872, 1055], [33873, 1056], [33874, 1057], [33875, 1058], [33876, 1059], [33877, 1060], [33878, 1061], [33879, 1062], [33880, 1063], [33881, 1064], [33882, 1065], [33883, 1066], [33884, 1067], [33885, 1068], [33886, 1069], [33887, 1070], [33888, 1071], [33904, 1072], [33905, 1073], [33906, 1074], [33907, 1075], [33908, 1076], [33909, 1077], [33910, 1105], [33911, 1078], [33912, 1079], [33913, 1080], [33914, 1081], [33915, 1082], [33916, 1083], [33917, 1084], [33918, 1085], [33920, 1086], [33921, 1087], [33922, 1088], [33923, 1089], [33924, 1090], [33925, 1091], [33926, 1092], [33927, 1093], [33928, 1094], [33929, 1095], [33930, 1096], [33931, 1097], [33932, 1098], [33933, 1099], [33934, 1100], [33935, 1101], [33936, 1102], [33937, 1103], [33951, 9472], [33952, 9474], [33953, 9484], [33954, 9488], [33955, 9496], [33956, 9492], [33957, 9500], [33958, 9516], [33959, 9508], [33960, 9524], [33961, 9532], [33962, 9473], [33963, 9475], [33964, 9487], [33965, 9491], [33966, 9499], [33967, 9495], [33968, 9507], [33969, 9523], [33970, 9515], [33971, 9531], [33972, 9547], [33973, 9504], [33974, 9519], [33975, 9512], [33976, 9527], [33977, 9535], [33978, 9501], [33979, 9520], [33980, 9509], [33981, 9528], [33982, 9538], [34975, 20124], [34976, 21782], [34977, 23043], [34978, 38463], [34979, 21696], [34980, 24859], [34981, 25384], [34982, 23030], [34983, 36898], [34984, 33909], [34985, 33564], [34986, 31312], [34987, 24746], [34988, 25569], [34989, 28197], [34990, 26093], [34991, 33894], [34992, 33446], [34993, 39925], [34994, 26771], [34995, 22311], [34996, 26017], [34997, 25201], [34998, 23451], [34999, 22992], [35000, 34427], [35001, 39156], [35002, 32098], [35003, 32190], [35004, 39822], [35005, 25110], [35006, 31903], [35007, 34999], [35008, 23433], [35009, 24245], [35010, 25353], [35011, 26263], [35012, 26696], [35013, 38343], [35014, 38797], [35015, 26447], [35016, 20197], [35017, 20234], [35018, 20301], [35019, 20381], [35020, 20553], [35021, 22258], [35022, 22839], [35023, 22996], [35024, 23041], [35025, 23561], [35026, 24799], [35027, 24847], [35028, 24944], [35029, 26131], [35030, 26885], [35031, 28858], [35032, 30031], [35033, 30064], [35034, 31227], [35035, 32173], [35036, 32239], [35037, 32963], [35038, 33806], [35039, 34915], [35040, 35586], [35041, 36949], [35042, 36986], [35043, 21307], [35044, 20117], [35045, 20133], [35046, 22495], [35047, 32946], [35048, 37057], [35049, 30959], [35050, 19968], [35051, 22769], [35052, 28322], [35053, 36920], [35054, 31282], [35055, 33576], [35056, 33419], [35057, 39983], [35058, 20801], [35059, 21360], [35060, 21693], [35061, 21729], [35062, 22240], [35063, 23035], [35064, 24341], [35065, 39154], [35066, 28139], [35067, 32996], [35068, 34093], [35136, 38498], [35137, 38512], [35138, 38560], [35139, 38907], [35140, 21515], [35141, 21491], [35142, 23431], [35143, 28879], [35144, 32701], [35145, 36802], [35146, 38632], [35147, 21359], [35148, 40284], [35149, 31418], [35150, 19985], [35151, 30867], [35152, 33276], [35153, 28198], [35154, 22040], [35155, 21764], [35156, 27421], [35157, 34074], [35158, 39995], [35159, 23013], [35160, 21417], [35161, 28006], [35162, 29916], [35163, 38287], [35164, 22082], [35165, 20113], [35166, 36939], [35167, 38642], [35168, 33615], [35169, 39180], [35170, 21473], [35171, 21942], [35172, 23344], [35173, 24433], [35174, 26144], [35175, 26355], [35176, 26628], [35177, 27704], [35178, 27891], [35179, 27945], [35180, 29787], [35181, 30408], [35182, 31310], [35183, 38964], [35184, 33521], [35185, 34907], [35186, 35424], [35187, 37613], [35188, 28082], [35189, 30123], [35190, 30410], [35191, 39365], [35192, 24742], [35193, 35585], [35194, 36234], [35195, 38322], [35196, 27022], [35197, 21421], [35198, 20870], [35200, 22290], [35201, 22576], [35202, 22852], [35203, 23476], [35204, 24310], [35205, 24616], [35206, 25513], [35207, 25588], [35208, 27839], [35209, 28436], [35210, 28814], [35211, 28948], [35212, 29017], [35213, 29141], [35214, 29503], [35215, 32257], [35216, 33398], [35217, 33489], [35218, 34199], [35219, 36960], [35220, 37467], [35221, 40219], [35222, 22633], [35223, 26044], [35224, 27738], [35225, 29989], [35226, 20985], [35227, 22830], [35228, 22885], [35229, 24448], [35230, 24540], [35231, 25276], [35232, 26106], [35233, 27178], [35234, 27431], [35235, 27572], [35236, 29579], [35237, 32705], [35238, 35158], [35239, 40236], [35240, 40206], [35241, 40644], [35242, 23713], [35243, 27798], [35244, 33659], [35245, 20740], [35246, 23627], [35247, 25014], [35248, 33222], [35249, 26742], [35250, 29281], [35251, 20057], [35252, 20474], [35253, 21368], [35254, 24681], [35255, 28201], [35256, 31311], [35257, 38899], [35258, 19979], [35259, 21270], [35260, 20206], [35261, 20309], [35262, 20285], [35263, 20385], [35264, 20339], [35265, 21152], [35266, 21487], [35267, 22025], [35268, 22799], [35269, 23233], [35270, 23478], [35271, 23521], [35272, 31185], [35273, 26247], [35274, 26524], [35275, 26550], [35276, 27468], [35277, 27827], [35278, 28779], [35279, 29634], [35280, 31117], [35281, 31166], [35282, 31292], [35283, 31623], [35284, 33457], [35285, 33499], [35286, 33540], [35287, 33655], [35288, 33775], [35289, 33747], [35290, 34662], [35291, 35506], [35292, 22057], [35293, 36008], [35294, 36838], [35295, 36942], [35296, 38686], [35297, 34442], [35298, 20420], [35299, 23784], [35300, 25105], [35301, 29273], [35302, 30011], [35303, 33253], [35304, 33469], [35305, 34558], [35306, 36032], [35307, 38597], [35308, 39187], [35309, 39381], [35310, 20171], [35311, 20250], [35312, 35299], [35313, 22238], [35314, 22602], [35315, 22730], [35316, 24315], [35317, 24555], [35318, 24618], [35319, 24724], [35320, 24674], [35321, 25040], [35322, 25106], [35323, 25296], [35324, 25913], [35392, 39745], [35393, 26214], [35394, 26800], [35395, 28023], [35396, 28784], [35397, 30028], [35398, 30342], [35399, 32117], [35400, 33445], [35401, 34809], [35402, 38283], [35403, 38542], [35404, 35997], [35405, 20977], [35406, 21182], [35407, 22806], [35408, 21683], [35409, 23475], [35410, 23830], [35411, 24936], [35412, 27010], [35413, 28079], [35414, 30861], [35415, 33995], [35416, 34903], [35417, 35442], [35418, 37799], [35419, 39608], [35420, 28012], [35421, 39336], [35422, 34521], [35423, 22435], [35424, 26623], [35425, 34510], [35426, 37390], [35427, 21123], [35428, 22151], [35429, 21508], [35430, 24275], [35431, 25313], [35432, 25785], [35433, 26684], [35434, 26680], [35435, 27579], [35436, 29554], [35437, 30906], [35438, 31339], [35439, 35226], [35440, 35282], [35441, 36203], [35442, 36611], [35443, 37101], [35444, 38307], [35445, 38548], [35446, 38761], [35447, 23398], [35448, 23731], [35449, 27005], [35450, 38989], [35451, 38990], [35452, 25499], [35453, 31520], [35454, 27179], [35456, 27263], [35457, 26806], [35458, 39949], [35459, 28511], [35460, 21106], [35461, 21917], [35462, 24688], [35463, 25324], [35464, 27963], [35465, 28167], [35466, 28369], [35467, 33883], [35468, 35088], [35469, 36676], [35470, 19988], [35471, 39993], [35472, 21494], [35473, 26907], [35474, 27194], [35475, 38788], [35476, 26666], [35477, 20828], [35478, 31427], [35479, 33970], [35480, 37340], [35481, 37772], [35482, 22107], [35483, 40232], [35484, 26658], [35485, 33541], [35486, 33841], [35487, 31909], [35488, 21000], [35489, 33477], [35490, 29926], [35491, 20094], [35492, 20355], [35493, 20896], [35494, 23506], [35495, 21002], [35496, 21208], [35497, 21223], [35498, 24059], [35499, 21914], [35500, 22570], [35501, 23014], [35502, 23436], [35503, 23448], [35504, 23515], [35505, 24178], [35506, 24185], [35507, 24739], [35508, 24863], [35509, 24931], [35510, 25022], [35511, 25563], [35512, 25954], [35513, 26577], [35514, 26707], [35515, 26874], [35516, 27454], [35517, 27475], [35518, 27735], [35519, 28450], [35520, 28567], [35521, 28485], [35522, 29872], [35523, 29976], [35524, 30435], [35525, 30475], [35526, 31487], [35527, 31649], [35528, 31777], [35529, 32233], [35530, 32566], [35531, 32752], [35532, 32925], [35533, 33382], [35534, 33694], [35535, 35251], [35536, 35532], [35537, 36011], [35538, 36996], [35539, 37969], [35540, 38291], [35541, 38289], [35542, 38306], [35543, 38501], [35544, 38867], [35545, 39208], [35546, 33304], [35547, 20024], [35548, 21547], [35549, 23736], [35550, 24012], [35551, 29609], [35552, 30284], [35553, 30524], [35554, 23721], [35555, 32747], [35556, 36107], [35557, 38593], [35558, 38929], [35559, 38996], [35560, 39000], [35561, 20225], [35562, 20238], [35563, 21361], [35564, 21916], [35565, 22120], [35566, 22522], [35567, 22855], [35568, 23305], [35569, 23492], [35570, 23696], [35571, 24076], [35572, 24190], [35573, 24524], [35574, 25582], [35575, 26426], [35576, 26071], [35577, 26082], [35578, 26399], [35579, 26827], [35580, 26820], [35648, 27231], [35649, 24112], [35650, 27589], [35651, 27671], [35652, 27773], [35653, 30079], [35654, 31048], [35655, 23395], [35656, 31232], [35657, 32000], [35658, 24509], [35659, 35215], [35660, 35352], [35661, 36020], [35662, 36215], [35663, 36556], [35664, 36637], [35665, 39138], [35666, 39438], [35667, 39740], [35668, 20096], [35669, 20605], [35670, 20736], [35671, 22931], [35672, 23452], [35673, 25135], [35674, 25216], [35675, 25836], [35676, 27450], [35677, 29344], [35678, 30097], [35679, 31047], [35680, 32681], [35681, 34811], [35682, 35516], [35683, 35696], [35684, 25516], [35685, 33738], [35686, 38816], [35687, 21513], [35688, 21507], [35689, 21931], [35690, 26708], [35691, 27224], [35692, 35440], [35693, 30759], [35694, 26485], [35695, 40653], [35696, 21364], [35697, 23458], [35698, 33050], [35699, 34384], [35700, 36870], [35701, 19992], [35702, 20037], [35703, 20167], [35704, 20241], [35705, 21450], [35706, 21560], [35707, 23470], [35708, 24339], [35709, 24613], [35710, 25937], [35712, 26429], [35713, 27714], [35714, 27762], [35715, 27875], [35716, 28792], [35717, 29699], [35718, 31350], [35719, 31406], [35720, 31496], [35721, 32026], [35722, 31998], [35723, 32102], [35724, 26087], [35725, 29275], [35726, 21435], [35727, 23621], [35728, 24040], [35729, 25298], [35730, 25312], [35731, 25369], [35732, 28192], [35733, 34394], [35734, 35377], [35735, 36317], [35736, 37624], [35737, 28417], [35738, 31142], [35739, 39770], [35740, 20136], [35741, 20139], [35742, 20140], [35743, 20379], [35744, 20384], [35745, 20689], [35746, 20807], [35747, 31478], [35748, 20849], [35749, 20982], [35750, 21332], [35751, 21281], [35752, 21375], [35753, 21483], [35754, 21932], [35755, 22659], [35756, 23777], [35757, 24375], [35758, 24394], [35759, 24623], [35760, 24656], [35761, 24685], [35762, 25375], [35763, 25945], [35764, 27211], [35765, 27841], [35766, 29378], [35767, 29421], [35768, 30703], [35769, 33016], [35770, 33029], [35771, 33288], [35772, 34126], [35773, 37111], [35774, 37857], [35775, 38911], [35776, 39255], [35777, 39514], [35778, 20208], [35779, 20957], [35780, 23597], [35781, 26241], [35782, 26989], [35783, 23616], [35784, 26354], [35785, 26997], [35786, 29577], [35787, 26704], [35788, 31873], [35789, 20677], [35790, 21220], [35791, 22343], [35792, 24062], [35793, 37670], [35794, 26020], [35795, 27427], [35796, 27453], [35797, 29748], [35798, 31105], [35799, 31165], [35800, 31563], [35801, 32202], [35802, 33465], [35803, 33740], [35804, 34943], [35805, 35167], [35806, 35641], [35807, 36817], [35808, 37329], [35809, 21535], [35810, 37504], [35811, 20061], [35812, 20534], [35813, 21477], [35814, 21306], [35815, 29399], [35816, 29590], [35817, 30697], [35818, 33510], [35819, 36527], [35820, 39366], [35821, 39368], [35822, 39378], [35823, 20855], [35824, 24858], [35825, 34398], [35826, 21936], [35827, 31354], [35828, 20598], [35829, 23507], [35830, 36935], [35831, 38533], [35832, 20018], [35833, 27355], [35834, 37351], [35835, 23633], [35836, 23624], [35904, 25496], [35905, 31391], [35906, 27795], [35907, 38772], [35908, 36705], [35909, 31402], [35910, 29066], [35911, 38536], [35912, 31874], [35913, 26647], [35914, 32368], [35915, 26705], [35916, 37740], [35917, 21234], [35918, 21531], [35919, 34219], [35920, 35347], [35921, 32676], [35922, 36557], [35923, 37089], [35924, 21350], [35925, 34952], [35926, 31041], [35927, 20418], [35928, 20670], [35929, 21009], [35930, 20804], [35931, 21843], [35932, 22317], [35933, 29674], [35934, 22411], [35935, 22865], [35936, 24418], [35937, 24452], [35938, 24693], [35939, 24950], [35940, 24935], [35941, 25001], [35942, 25522], [35943, 25658], [35944, 25964], [35945, 26223], [35946, 26690], [35947, 28179], [35948, 30054], [35949, 31293], [35950, 31995], [35951, 32076], [35952, 32153], [35953, 32331], [35954, 32619], [35955, 33550], [35956, 33610], [35957, 34509], [35958, 35336], [35959, 35427], [35960, 35686], [35961, 36605], [35962, 38938], [35963, 40335], [35964, 33464], [35965, 36814], [35966, 39912], [35968, 21127], [35969, 25119], [35970, 25731], [35971, 28608], [35972, 38553], [35973, 26689], [35974, 20625], [35975, 27424], [35976, 27770], [35977, 28500], [35978, 31348], [35979, 32080], [35980, 34880], [35981, 35363], [35982, 26376], [35983, 20214], [35984, 20537], [35985, 20518], [35986, 20581], [35987, 20860], [35988, 21048], [35989, 21091], [35990, 21927], [35991, 22287], [35992, 22533], [35993, 23244], [35994, 24314], [35995, 25010], [35996, 25080], [35997, 25331], [35998, 25458], [35999, 26908], [36000, 27177], [36001, 29309], [36002, 29356], [36003, 29486], [36004, 30740], [36005, 30831], [36006, 32121], [36007, 30476], [36008, 32937], [36009, 35211], [36010, 35609], [36011, 36066], [36012, 36562], [36013, 36963], [36014, 37749], [36015, 38522], [36016, 38997], [36017, 39443], [36018, 40568], [36019, 20803], [36020, 21407], [36021, 21427], [36022, 24187], [36023, 24358], [36024, 28187], [36025, 28304], [36026, 29572], [36027, 29694], [36028, 32067], [36029, 33335], [36030, 35328], [36031, 35578], [36032, 38480], [36033, 20046], [36034, 20491], [36035, 21476], [36036, 21628], [36037, 22266], [36038, 22993], [36039, 23396], [36040, 24049], [36041, 24235], [36042, 24359], [36043, 25144], [36044, 25925], [36045, 26543], [36046, 28246], [36047, 29392], [36048, 31946], [36049, 34996], [36050, 32929], [36051, 32993], [36052, 33776], [36053, 34382], [36054, 35463], [36055, 36328], [36056, 37431], [36057, 38599], [36058, 39015], [36059, 40723], [36060, 20116], [36061, 20114], [36062, 20237], [36063, 21320], [36064, 21577], [36065, 21566], [36066, 23087], [36067, 24460], [36068, 24481], [36069, 24735], [36070, 26791], [36071, 27278], [36072, 29786], [36073, 30849], [36074, 35486], [36075, 35492], [36076, 35703], [36077, 37264], [36078, 20062], [36079, 39881], [36080, 20132], [36081, 20348], [36082, 20399], [36083, 20505], [36084, 20502], [36085, 20809], [36086, 20844], [36087, 21151], [36088, 21177], [36089, 21246], [36090, 21402], [36091, 21475], [36092, 21521], [36160, 21518], [36161, 21897], [36162, 22353], [36163, 22434], [36164, 22909], [36165, 23380], [36166, 23389], [36167, 23439], [36168, 24037], [36169, 24039], [36170, 24055], [36171, 24184], [36172, 24195], [36173, 24218], [36174, 24247], [36175, 24344], [36176, 24658], [36177, 24908], [36178, 25239], [36179, 25304], [36180, 25511], [36181, 25915], [36182, 26114], [36183, 26179], [36184, 26356], [36185, 26477], [36186, 26657], [36187, 26775], [36188, 27083], [36189, 27743], [36190, 27946], [36191, 28009], [36192, 28207], [36193, 28317], [36194, 30002], [36195, 30343], [36196, 30828], [36197, 31295], [36198, 31968], [36199, 32005], [36200, 32024], [36201, 32094], [36202, 32177], [36203, 32789], [36204, 32771], [36205, 32943], [36206, 32945], [36207, 33108], [36208, 33167], [36209, 33322], [36210, 33618], [36211, 34892], [36212, 34913], [36213, 35611], [36214, 36002], [36215, 36092], [36216, 37066], [36217, 37237], [36218, 37489], [36219, 30783], [36220, 37628], [36221, 38308], [36222, 38477], [36224, 38917], [36225, 39321], [36226, 39640], [36227, 40251], [36228, 21083], [36229, 21163], [36230, 21495], [36231, 21512], [36232, 22741], [36233, 25335], [36234, 28640], [36235, 35946], [36236, 36703], [36237, 40633], [36238, 20811], [36239, 21051], [36240, 21578], [36241, 22269], [36242, 31296], [36243, 37239], [36244, 40288], [36245, 40658], [36246, 29508], [36247, 28425], [36248, 33136], [36249, 29969], [36250, 24573], [36251, 24794], [36252, 39592], [36253, 29403], [36254, 36796], [36255, 27492], [36256, 38915], [36257, 20170], [36258, 22256], [36259, 22372], [36260, 22718], [36261, 23130], [36262, 24680], [36263, 25031], [36264, 26127], [36265, 26118], [36266, 26681], [36267, 26801], [36268, 28151], [36269, 30165], [36270, 32058], [36271, 33390], [36272, 39746], [36273, 20123], [36274, 20304], [36275, 21449], [36276, 21766], [36277, 23919], [36278, 24038], [36279, 24046], [36280, 26619], [36281, 27801], [36282, 29811], [36283, 30722], [36284, 35408], [36285, 37782], [36286, 35039], [36287, 22352], [36288, 24231], [36289, 25387], [36290, 20661], [36291, 20652], [36292, 20877], [36293, 26368], [36294, 21705], [36295, 22622], [36296, 22971], [36297, 23472], [36298, 24425], [36299, 25165], [36300, 25505], [36301, 26685], [36302, 27507], [36303, 28168], [36304, 28797], [36305, 37319], [36306, 29312], [36307, 30741], [36308, 30758], [36309, 31085], [36310, 25998], [36311, 32048], [36312, 33756], [36313, 35009], [36314, 36617], [36315, 38555], [36316, 21092], [36317, 22312], [36318, 26448], [36319, 32618], [36320, 36001], [36321, 20916], [36322, 22338], [36323, 38442], [36324, 22586], [36325, 27018], [36326, 32948], [36327, 21682], [36328, 23822], [36329, 22524], [36330, 30869], [36331, 40442], [36332, 20316], [36333, 21066], [36334, 21643], [36335, 25662], [36336, 26152], [36337, 26388], [36338, 26613], [36339, 31364], [36340, 31574], [36341, 32034], [36342, 37679], [36343, 26716], [36344, 39853], [36345, 31545], [36346, 21273], [36347, 20874], [36348, 21047], [36416, 23519], [36417, 25334], [36418, 25774], [36419, 25830], [36420, 26413], [36421, 27578], [36422, 34217], [36423, 38609], [36424, 30352], [36425, 39894], [36426, 25420], [36427, 37638], [36428, 39851], [36429, 30399], [36430, 26194], [36431, 19977], [36432, 20632], [36433, 21442], [36434, 23665], [36435, 24808], [36436, 25746], [36437, 25955], [36438, 26719], [36439, 29158], [36440, 29642], [36441, 29987], [36442, 31639], [36443, 32386], [36444, 34453], [36445, 35715], [36446, 36059], [36447, 37240], [36448, 39184], [36449, 26028], [36450, 26283], [36451, 27531], [36452, 20181], [36453, 20180], [36454, 20282], [36455, 20351], [36456, 21050], [36457, 21496], [36458, 21490], [36459, 21987], [36460, 22235], [36461, 22763], [36462, 22987], [36463, 22985], [36464, 23039], [36465, 23376], [36466, 23629], [36467, 24066], [36468, 24107], [36469, 24535], [36470, 24605], [36471, 25351], [36472, 25903], [36473, 23388], [36474, 26031], [36475, 26045], [36476, 26088], [36477, 26525], [36478, 27490], [36480, 27515], [36481, 27663], [36482, 29509], [36483, 31049], [36484, 31169], [36485, 31992], [36486, 32025], [36487, 32043], [36488, 32930], [36489, 33026], [36490, 33267], [36491, 35222], [36492, 35422], [36493, 35433], [36494, 35430], [36495, 35468], [36496, 35566], [36497, 36039], [36498, 36060], [36499, 38604], [36500, 39164], [36501, 27503], [36502, 20107], [36503, 20284], [36504, 20365], [36505, 20816], [36506, 23383], [36507, 23546], [36508, 24904], [36509, 25345], [36510, 26178], [36511, 27425], [36512, 28363], [36513, 27835], [36514, 29246], [36515, 29885], [36516, 30164], [36517, 30913], [36518, 31034], [36519, 32780], [36520, 32819], [36521, 33258], [36522, 33940], [36523, 36766], [36524, 27728], [36525, 40575], [36526, 24335], [36527, 35672], [36528, 40235], [36529, 31482], [36530, 36600], [36531, 23437], [36532, 38635], [36533, 19971], [36534, 21489], [36535, 22519], [36536, 22833], [36537, 23241], [36538, 23460], [36539, 24713], [36540, 28287], [36541, 28422], [36542, 30142], [36543, 36074], [36544, 23455], [36545, 34048], [36546, 31712], [36547, 20594], [36548, 26612], [36549, 33437], [36550, 23649], [36551, 34122], [36552, 32286], [36553, 33294], [36554, 20889], [36555, 23556], [36556, 25448], [36557, 36198], [36558, 26012], [36559, 29038], [36560, 31038], [36561, 32023], [36562, 32773], [36563, 35613], [36564, 36554], [36565, 36974], [36566, 34503], [36567, 37034], [36568, 20511], [36569, 21242], [36570, 23610], [36571, 26451], [36572, 28796], [36573, 29237], [36574, 37196], [36575, 37320], [36576, 37675], [36577, 33509], [36578, 23490], [36579, 24369], [36580, 24825], [36581, 20027], [36582, 21462], [36583, 23432], [36584, 25163], [36585, 26417], [36586, 27530], [36587, 29417], [36588, 29664], [36589, 31278], [36590, 33131], [36591, 36259], [36592, 37202], [36593, 39318], [36594, 20754], [36595, 21463], [36596, 21610], [36597, 23551], [36598, 25480], [36599, 27193], [36600, 32172], [36601, 38656], [36602, 22234], [36603, 21454], [36604, 21608], [36672, 23447], [36673, 23601], [36674, 24030], [36675, 20462], [36676, 24833], [36677, 25342], [36678, 27954], [36679, 31168], [36680, 31179], [36681, 32066], [36682, 32333], [36683, 32722], [36684, 33261], [36685, 33311], [36686, 33936], [36687, 34886], [36688, 35186], [36689, 35728], [36690, 36468], [36691, 36655], [36692, 36913], [36693, 37195], [36694, 37228], [36695, 38598], [36696, 37276], [36697, 20160], [36698, 20303], [36699, 20805], [36700, 21313], [36701, 24467], [36702, 25102], [36703, 26580], [36704, 27713], [36705, 28171], [36706, 29539], [36707, 32294], [36708, 37325], [36709, 37507], [36710, 21460], [36711, 22809], [36712, 23487], [36713, 28113], [36714, 31069], [36715, 32302], [36716, 31899], [36717, 22654], [36718, 29087], [36719, 20986], [36720, 34899], [36721, 36848], [36722, 20426], [36723, 23803], [36724, 26149], [36725, 30636], [36726, 31459], [36727, 33308], [36728, 39423], [36729, 20934], [36730, 24490], [36731, 26092], [36732, 26991], [36733, 27529], [36734, 28147], [36736, 28310], [36737, 28516], [36738, 30462], [36739, 32020], [36740, 24033], [36741, 36981], [36742, 37255], [36743, 38918], [36744, 20966], [36745, 21021], [36746, 25152], [36747, 26257], [36748, 26329], [36749, 28186], [36750, 24246], [36751, 32210], [36752, 32626], [36753, 26360], [36754, 34223], [36755, 34295], [36756, 35576], [36757, 21161], [36758, 21465], [36759, 22899], [36760, 24207], [36761, 24464], [36762, 24661], [36763, 37604], [36764, 38500], [36765, 20663], [36766, 20767], [36767, 21213], [36768, 21280], [36769, 21319], [36770, 21484], [36771, 21736], [36772, 21830], [36773, 21809], [36774, 22039], [36775, 22888], [36776, 22974], [36777, 23100], [36778, 23477], [36779, 23558], [36780, 23567], [36781, 23569], [36782, 23578], [36783, 24196], [36784, 24202], [36785, 24288], [36786, 24432], [36787, 25215], [36788, 25220], [36789, 25307], [36790, 25484], [36791, 25463], [36792, 26119], [36793, 26124], [36794, 26157], [36795, 26230], [36796, 26494], [36797, 26786], [36798, 27167], [36799, 27189], [36800, 27836], [36801, 28040], [36802, 28169], [36803, 28248], [36804, 28988], [36805, 28966], [36806, 29031], [36807, 30151], [36808, 30465], [36809, 30813], [36810, 30977], [36811, 31077], [36812, 31216], [36813, 31456], [36814, 31505], [36815, 31911], [36816, 32057], [36817, 32918], [36818, 33750], [36819, 33931], [36820, 34121], [36821, 34909], [36822, 35059], [36823, 35359], [36824, 35388], [36825, 35412], [36826, 35443], [36827, 35937], [36828, 36062], [36829, 37284], [36830, 37478], [36831, 37758], [36832, 37912], [36833, 38556], [36834, 38808], [36835, 19978], [36836, 19976], [36837, 19998], [36838, 20055], [36839, 20887], [36840, 21104], [36841, 22478], [36842, 22580], [36843, 22732], [36844, 23330], [36845, 24120], [36846, 24773], [36847, 25854], [36848, 26465], [36849, 26454], [36850, 27972], [36851, 29366], [36852, 30067], [36853, 31331], [36854, 33976], [36855, 35698], [36856, 37304], [36857, 37664], [36858, 22065], [36859, 22516], [36860, 39166], [36928, 25325], [36929, 26893], [36930, 27542], [36931, 29165], [36932, 32340], [36933, 32887], [36934, 33394], [36935, 35302], [36936, 39135], [36937, 34645], [36938, 36785], [36939, 23611], [36940, 20280], [36941, 20449], [36942, 20405], [36943, 21767], [36944, 23072], [36945, 23517], [36946, 23529], [36947, 24515], [36948, 24910], [36949, 25391], [36950, 26032], [36951, 26187], [36952, 26862], [36953, 27035], [36954, 28024], [36955, 28145], [36956, 30003], [36957, 30137], [36958, 30495], [36959, 31070], [36960, 31206], [36961, 32051], [36962, 33251], [36963, 33455], [36964, 34218], [36965, 35242], [36966, 35386], [36967, 36523], [36968, 36763], [36969, 36914], [36970, 37341], [36971, 38663], [36972, 20154], [36973, 20161], [36974, 20995], [36975, 22645], [36976, 22764], [36977, 23563], [36978, 29978], [36979, 23613], [36980, 33102], [36981, 35338], [36982, 36805], [36983, 38499], [36984, 38765], [36985, 31525], [36986, 35535], [36987, 38920], [36988, 37218], [36989, 22259], [36990, 21416], [36992, 36887], [36993, 21561], [36994, 22402], [36995, 24101], [36996, 25512], [36997, 27700], [36998, 28810], [36999, 30561], [37000, 31883], [37001, 32736], [37002, 34928], [37003, 36930], [37004, 37204], [37005, 37648], [37006, 37656], [37007, 38543], [37008, 29790], [37009, 39620], [37010, 23815], [37011, 23913], [37012, 25968], [37013, 26530], [37014, 36264], [37015, 38619], [37016, 25454], [37017, 26441], [37018, 26905], [37019, 33733], [37020, 38935], [37021, 38592], [37022, 35070], [37023, 28548], [37024, 25722], [37025, 23544], [37026, 19990], [37027, 28716], [37028, 30045], [37029, 26159], [37030, 20932], [37031, 21046], [37032, 21218], [37033, 22995], [37034, 24449], [37035, 24615], [37036, 25104], [37037, 25919], [37038, 25972], [37039, 26143], [37040, 26228], [37041, 26866], [37042, 26646], [37043, 27491], [37044, 28165], [37045, 29298], [37046, 29983], [37047, 30427], [37048, 31934], [37049, 32854], [37050, 22768], [37051, 35069], [37052, 35199], [37053, 35488], [37054, 35475], [37055, 35531], [37056, 36893], [37057, 37266], [37058, 38738], [37059, 38745], [37060, 25993], [37061, 31246], [37062, 33030], [37063, 38587], [37064, 24109], [37065, 24796], [37066, 25114], [37067, 26021], [37068, 26132], [37069, 26512], [37070, 30707], [37071, 31309], [37072, 31821], [37073, 32318], [37074, 33034], [37075, 36012], [37076, 36196], [37077, 36321], [37078, 36447], [37079, 30889], [37080, 20999], [37081, 25305], [37082, 25509], [37083, 25666], [37084, 25240], [37085, 35373], [37086, 31363], [37087, 31680], [37088, 35500], [37089, 38634], [37090, 32118], [37091, 33292], [37092, 34633], [37093, 20185], [37094, 20808], [37095, 21315], [37096, 21344], [37097, 23459], [37098, 23554], [37099, 23574], [37100, 24029], [37101, 25126], [37102, 25159], [37103, 25776], [37104, 26643], [37105, 26676], [37106, 27849], [37107, 27973], [37108, 27927], [37109, 26579], [37110, 28508], [37111, 29006], [37112, 29053], [37113, 26059], [37114, 31359], [37115, 31661], [37116, 32218], [37184, 32330], [37185, 32680], [37186, 33146], [37187, 33307], [37188, 33337], [37189, 34214], [37190, 35438], [37191, 36046], [37192, 36341], [37193, 36984], [37194, 36983], [37195, 37549], [37196, 37521], [37197, 38275], [37198, 39854], [37199, 21069], [37200, 21892], [37201, 28472], [37202, 28982], [37203, 20840], [37204, 31109], [37205, 32341], [37206, 33203], [37207, 31950], [37208, 22092], [37209, 22609], [37210, 23720], [37211, 25514], [37212, 26366], [37213, 26365], [37214, 26970], [37215, 29401], [37216, 30095], [37217, 30094], [37218, 30990], [37219, 31062], [37220, 31199], [37221, 31895], [37222, 32032], [37223, 32068], [37224, 34311], [37225, 35380], [37226, 38459], [37227, 36961], [37228, 40736], [37229, 20711], [37230, 21109], [37231, 21452], [37232, 21474], [37233, 20489], [37234, 21930], [37235, 22766], [37236, 22863], [37237, 29245], [37238, 23435], [37239, 23652], [37240, 21277], [37241, 24803], [37242, 24819], [37243, 25436], [37244, 25475], [37245, 25407], [37246, 25531], [37248, 25805], [37249, 26089], [37250, 26361], [37251, 24035], [37252, 27085], [37253, 27133], [37254, 28437], [37255, 29157], [37256, 20105], [37257, 30185], [37258, 30456], [37259, 31379], [37260, 31967], [37261, 32207], [37262, 32156], [37263, 32865], [37264, 33609], [37265, 33624], [37266, 33900], [37267, 33980], [37268, 34299], [37269, 35013], [37270, 36208], [37271, 36865], [37272, 36973], [37273, 37783], [37274, 38684], [37275, 39442], [37276, 20687], [37277, 22679], [37278, 24974], [37279, 33235], [37280, 34101], [37281, 36104], [37282, 36896], [37283, 20419], [37284, 20596], [37285, 21063], [37286, 21363], [37287, 24687], [37288, 25417], [37289, 26463], [37290, 28204], [37291, 36275], [37292, 36895], [37293, 20439], [37294, 23646], [37295, 36042], [37296, 26063], [37297, 32154], [37298, 21330], [37299, 34966], [37300, 20854], [37301, 25539], [37302, 23384], [37303, 23403], [37304, 23562], [37305, 25613], [37306, 26449], [37307, 36956], [37308, 20182], [37309, 22810], [37310, 22826], [37311, 27760], [37312, 35409], [37313, 21822], [37314, 22549], [37315, 22949], [37316, 24816], [37317, 25171], [37318, 26561], [37319, 33333], [37320, 26965], [37321, 38464], [37322, 39364], [37323, 39464], [37324, 20307], [37325, 22534], [37326, 23550], [37327, 32784], [37328, 23729], [37329, 24111], [37330, 24453], [37331, 24608], [37332, 24907], [37333, 25140], [37334, 26367], [37335, 27888], [37336, 28382], [37337, 32974], [37338, 33151], [37339, 33492], [37340, 34955], [37341, 36024], [37342, 36864], [37343, 36910], [37344, 38538], [37345, 40667], [37346, 39899], [37347, 20195], [37348, 21488], [37349, 22823], [37350, 31532], [37351, 37261], [37352, 38988], [37353, 40441], [37354, 28381], [37355, 28711], [37356, 21331], [37357, 21828], [37358, 23429], [37359, 25176], [37360, 25246], [37361, 25299], [37362, 27810], [37363, 28655], [37364, 29730], [37365, 35351], [37366, 37944], [37367, 28609], [37368, 35582], [37369, 33592], [37370, 20967], [37371, 34552], [37372, 21482], [37440, 21481], [37441, 20294], [37442, 36948], [37443, 36784], [37444, 22890], [37445, 33073], [37446, 24061], [37447, 31466], [37448, 36799], [37449, 26842], [37450, 35895], [37451, 29432], [37452, 40008], [37453, 27197], [37454, 35504], [37455, 20025], [37456, 21336], [37457, 22022], [37458, 22374], [37459, 25285], [37460, 25506], [37461, 26086], [37462, 27470], [37463, 28129], [37464, 28251], [37465, 28845], [37466, 30701], [37467, 31471], [37468, 31658], [37469, 32187], [37470, 32829], [37471, 32966], [37472, 34507], [37473, 35477], [37474, 37723], [37475, 22243], [37476, 22727], [37477, 24382], [37478, 26029], [37479, 26262], [37480, 27264], [37481, 27573], [37482, 30007], [37483, 35527], [37484, 20516], [37485, 30693], [37486, 22320], [37487, 24347], [37488, 24677], [37489, 26234], [37490, 27744], [37491, 30196], [37492, 31258], [37493, 32622], [37494, 33268], [37495, 34584], [37496, 36933], [37497, 39347], [37498, 31689], [37499, 30044], [37500, 31481], [37501, 31569], [37502, 33988], [37504, 36880], [37505, 31209], [37506, 31378], [37507, 33590], [37508, 23265], [37509, 30528], [37510, 20013], [37511, 20210], [37512, 23449], [37513, 24544], [37514, 25277], [37515, 26172], [37516, 26609], [37517, 27880], [37518, 34411], [37519, 34935], [37520, 35387], [37521, 37198], [37522, 37619], [37523, 39376], [37524, 27159], [37525, 28710], [37526, 29482], [37527, 33511], [37528, 33879], [37529, 36015], [37530, 19969], [37531, 20806], [37532, 20939], [37533, 21899], [37534, 23541], [37535, 24086], [37536, 24115], [37537, 24193], [37538, 24340], [37539, 24373], [37540, 24427], [37541, 24500], [37542, 25074], [37543, 25361], [37544, 26274], [37545, 26397], [37546, 28526], [37547, 29266], [37548, 30010], [37549, 30522], [37550, 32884], [37551, 33081], [37552, 33144], [37553, 34678], [37554, 35519], [37555, 35548], [37556, 36229], [37557, 36339], [37558, 37530], [37559, 38263], [37560, 38914], [37561, 40165], [37562, 21189], [37563, 25431], [37564, 30452], [37565, 26389], [37566, 27784], [37567, 29645], [37568, 36035], [37569, 37806], [37570, 38515], [37571, 27941], [37572, 22684], [37573, 26894], [37574, 27084], [37575, 36861], [37576, 37786], [37577, 30171], [37578, 36890], [37579, 22618], [37580, 26626], [37581, 25524], [37582, 27131], [37583, 20291], [37584, 28460], [37585, 26584], [37586, 36795], [37587, 34086], [37588, 32180], [37589, 37716], [37590, 26943], [37591, 28528], [37592, 22378], [37593, 22775], [37594, 23340], [37595, 32044], [37596, 29226], [37597, 21514], [37598, 37347], [37599, 40372], [37600, 20141], [37601, 20302], [37602, 20572], [37603, 20597], [37604, 21059], [37605, 35998], [37606, 21576], [37607, 22564], [37608, 23450], [37609, 24093], [37610, 24213], [37611, 24237], [37612, 24311], [37613, 24351], [37614, 24716], [37615, 25269], [37616, 25402], [37617, 25552], [37618, 26799], [37619, 27712], [37620, 30855], [37621, 31118], [37622, 31243], [37623, 32224], [37624, 33351], [37625, 35330], [37626, 35558], [37627, 36420], [37628, 36883], [37696, 37048], [37697, 37165], [37698, 37336], [37699, 40718], [37700, 27877], [37701, 25688], [37702, 25826], [37703, 25973], [37704, 28404], [37705, 30340], [37706, 31515], [37707, 36969], [37708, 37841], [37709, 28346], [37710, 21746], [37711, 24505], [37712, 25764], [37713, 36685], [37714, 36845], [37715, 37444], [37716, 20856], [37717, 22635], [37718, 22825], [37719, 23637], [37720, 24215], [37721, 28155], [37722, 32399], [37723, 29980], [37724, 36028], [37725, 36578], [37726, 39003], [37727, 28857], [37728, 20253], [37729, 27583], [37730, 28593], [37731, 30000], [37732, 38651], [37733, 20814], [37734, 21520], [37735, 22581], [37736, 22615], [37737, 22956], [37738, 23648], [37739, 24466], [37740, 26007], [37741, 26460], [37742, 28193], [37743, 30331], [37744, 33759], [37745, 36077], [37746, 36884], [37747, 37117], [37748, 37709], [37749, 30757], [37750, 30778], [37751, 21162], [37752, 24230], [37753, 22303], [37754, 22900], [37755, 24594], [37756, 20498], [37757, 20826], [37758, 20908], [37760, 20941], [37761, 20992], [37762, 21776], [37763, 22612], [37764, 22616], [37765, 22871], [37766, 23445], [37767, 23798], [37768, 23947], [37769, 24764], [37770, 25237], [37771, 25645], [37772, 26481], [37773, 26691], [37774, 26812], [37775, 26847], [37776, 30423], [37777, 28120], [37778, 28271], [37779, 28059], [37780, 28783], [37781, 29128], [37782, 24403], [37783, 30168], [37784, 31095], [37785, 31561], [37786, 31572], [37787, 31570], [37788, 31958], [37789, 32113], [37790, 21040], [37791, 33891], [37792, 34153], [37793, 34276], [37794, 35342], [37795, 35588], [37796, 35910], [37797, 36367], [37798, 36867], [37799, 36879], [37800, 37913], [37801, 38518], [37802, 38957], [37803, 39472], [37804, 38360], [37805, 20685], [37806, 21205], [37807, 21516], [37808, 22530], [37809, 23566], [37810, 24999], [37811, 25758], [37812, 27934], [37813, 30643], [37814, 31461], [37815, 33012], [37816, 33796], [37817, 36947], [37818, 37509], [37819, 23776], [37820, 40199], [37821, 21311], [37822, 24471], [37823, 24499], [37824, 28060], [37825, 29305], [37826, 30563], [37827, 31167], [37828, 31716], [37829, 27602], [37830, 29420], [37831, 35501], [37832, 26627], [37833, 27233], [37834, 20984], [37835, 31361], [37836, 26932], [37837, 23626], [37838, 40182], [37839, 33515], [37840, 23493], [37841, 37193], [37842, 28702], [37843, 22136], [37844, 23663], [37845, 24775], [37846, 25958], [37847, 27788], [37848, 35930], [37849, 36929], [37850, 38931], [37851, 21585], [37852, 26311], [37853, 37389], [37854, 22856], [37855, 37027], [37856, 20869], [37857, 20045], [37858, 20970], [37859, 34201], [37860, 35598], [37861, 28760], [37862, 25466], [37863, 37707], [37864, 26978], [37865, 39348], [37866, 32260], [37867, 30071], [37868, 21335], [37869, 26976], [37870, 36575], [37871, 38627], [37872, 27741], [37873, 20108], [37874, 23612], [37875, 24336], [37876, 36841], [37877, 21250], [37878, 36049], [37879, 32905], [37880, 34425], [37881, 24319], [37882, 26085], [37883, 20083], [37884, 20837], [37952, 22914], [37953, 23615], [37954, 38894], [37955, 20219], [37956, 22922], [37957, 24525], [37958, 35469], [37959, 28641], [37960, 31152], [37961, 31074], [37962, 23527], [37963, 33905], [37964, 29483], [37965, 29105], [37966, 24180], [37967, 24565], [37968, 25467], [37969, 25754], [37970, 29123], [37971, 31896], [37972, 20035], [37973, 24316], [37974, 20043], [37975, 22492], [37976, 22178], [37977, 24745], [37978, 28611], [37979, 32013], [37980, 33021], [37981, 33075], [37982, 33215], [37983, 36786], [37984, 35223], [37985, 34468], [37986, 24052], [37987, 25226], [37988, 25773], [37989, 35207], [37990, 26487], [37991, 27874], [37992, 27966], [37993, 29750], [37994, 30772], [37995, 23110], [37996, 32629], [37997, 33453], [37998, 39340], [37999, 20467], [38000, 24259], [38001, 25309], [38002, 25490], [38003, 25943], [38004, 26479], [38005, 30403], [38006, 29260], [38007, 32972], [38008, 32954], [38009, 36649], [38010, 37197], [38011, 20493], [38012, 22521], [38013, 23186], [38014, 26757], [38016, 26995], [38017, 29028], [38018, 29437], [38019, 36023], [38020, 22770], [38021, 36064], [38022, 38506], [38023, 36889], [38024, 34687], [38025, 31204], [38026, 30695], [38027, 33833], [38028, 20271], [38029, 21093], [38030, 21338], [38031, 25293], [38032, 26575], [38033, 27850], [38034, 30333], [38035, 31636], [38036, 31893], [38037, 33334], [38038, 34180], [38039, 36843], [38040, 26333], [38041, 28448], [38042, 29190], [38043, 32283], [38044, 33707], [38045, 39361], [38046, 40614], [38047, 20989], [38048, 31665], [38049, 30834], [38050, 31672], [38051, 32903], [38052, 31560], [38053, 27368], [38054, 24161], [38055, 32908], [38056, 30033], [38057, 30048], [38058, 20843], [38059, 37474], [38060, 28300], [38061, 30330], [38062, 37271], [38063, 39658], [38064, 20240], [38065, 32624], [38066, 25244], [38067, 31567], [38068, 38309], [38069, 40169], [38070, 22138], [38071, 22617], [38072, 34532], [38073, 38588], [38074, 20276], [38075, 21028], [38076, 21322], [38077, 21453], [38078, 21467], [38079, 24070], [38080, 25644], [38081, 26001], [38082, 26495], [38083, 27710], [38084, 27726], [38085, 29256], [38086, 29359], [38087, 29677], [38088, 30036], [38089, 32321], [38090, 33324], [38091, 34281], [38092, 36009], [38093, 31684], [38094, 37318], [38095, 29033], [38096, 38930], [38097, 39151], [38098, 25405], [38099, 26217], [38100, 30058], [38101, 30436], [38102, 30928], [38103, 34115], [38104, 34542], [38105, 21290], [38106, 21329], [38107, 21542], [38108, 22915], [38109, 24199], [38110, 24444], [38111, 24754], [38112, 25161], [38113, 25209], [38114, 25259], [38115, 26000], [38116, 27604], [38117, 27852], [38118, 30130], [38119, 30382], [38120, 30865], [38121, 31192], [38122, 32203], [38123, 32631], [38124, 32933], [38125, 34987], [38126, 35513], [38127, 36027], [38128, 36991], [38129, 38750], [38130, 39131], [38131, 27147], [38132, 31800], [38133, 20633], [38134, 23614], [38135, 24494], [38136, 26503], [38137, 27608], [38138, 29749], [38139, 30473], [38140, 32654], [38208, 40763], [38209, 26570], [38210, 31255], [38211, 21305], [38212, 30091], [38213, 39661], [38214, 24422], [38215, 33181], [38216, 33777], [38217, 32920], [38218, 24380], [38219, 24517], [38220, 30050], [38221, 31558], [38222, 36924], [38223, 26727], [38224, 23019], [38225, 23195], [38226, 32016], [38227, 30334], [38228, 35628], [38229, 20469], [38230, 24426], [38231, 27161], [38232, 27703], [38233, 28418], [38234, 29922], [38235, 31080], [38236, 34920], [38237, 35413], [38238, 35961], [38239, 24287], [38240, 25551], [38241, 30149], [38242, 31186], [38243, 33495], [38244, 37672], [38245, 37618], [38246, 33948], [38247, 34541], [38248, 39981], [38249, 21697], [38250, 24428], [38251, 25996], [38252, 27996], [38253, 28693], [38254, 36007], [38255, 36051], [38256, 38971], [38257, 25935], [38258, 29942], [38259, 19981], [38260, 20184], [38261, 22496], [38262, 22827], [38263, 23142], [38264, 23500], [38265, 20904], [38266, 24067], [38267, 24220], [38268, 24598], [38269, 25206], [38270, 25975], [38272, 26023], [38273, 26222], [38274, 28014], [38275, 29238], [38276, 31526], [38277, 33104], [38278, 33178], [38279, 33433], [38280, 35676], [38281, 36000], [38282, 36070], [38283, 36212], [38284, 38428], [38285, 38468], [38286, 20398], [38287, 25771], [38288, 27494], [38289, 33310], [38290, 33889], [38291, 34154], [38292, 37096], [38293, 23553], [38294, 26963], [38295, 39080], [38296, 33914], [38297, 34135], [38298, 20239], [38299, 21103], [38300, 24489], [38301, 24133], [38302, 26381], [38303, 31119], [38304, 33145], [38305, 35079], [38306, 35206], [38307, 28149], [38308, 24343], [38309, 25173], [38310, 27832], [38311, 20175], [38312, 29289], [38313, 39826], [38314, 20998], [38315, 21563], [38316, 22132], [38317, 22707], [38318, 24996], [38319, 25198], [38320, 28954], [38321, 22894], [38322, 31881], [38323, 31966], [38324, 32027], [38325, 38640], [38326, 25991], [38327, 32862], [38328, 19993], [38329, 20341], [38330, 20853], [38331, 22592], [38332, 24163], [38333, 24179], [38334, 24330], [38335, 26564], [38336, 20006], [38337, 34109], [38338, 38281], [38339, 38491], [38340, 31859], [38341, 38913], [38342, 20731], [38343, 22721], [38344, 30294], [38345, 30887], [38346, 21029], [38347, 30629], [38348, 34065], [38349, 31622], [38350, 20559], [38351, 22793], [38352, 29255], [38353, 31687], [38354, 32232], [38355, 36794], [38356, 36820], [38357, 36941], [38358, 20415], [38359, 21193], [38360, 23081], [38361, 24321], [38362, 38829], [38363, 20445], [38364, 33303], [38365, 37610], [38366, 22275], [38367, 25429], [38368, 27497], [38369, 29995], [38370, 35036], [38371, 36628], [38372, 31298], [38373, 21215], [38374, 22675], [38375, 24917], [38376, 25098], [38377, 26286], [38378, 27597], [38379, 31807], [38380, 33769], [38381, 20515], [38382, 20472], [38383, 21253], [38384, 21574], [38385, 22577], [38386, 22857], [38387, 23453], [38388, 23792], [38389, 23791], [38390, 23849], [38391, 24214], [38392, 25265], [38393, 25447], [38394, 25918], [38395, 26041], [38396, 26379], [38464, 27861], [38465, 27873], [38466, 28921], [38467, 30770], [38468, 32299], [38469, 32990], [38470, 33459], [38471, 33804], [38472, 34028], [38473, 34562], [38474, 35090], [38475, 35370], [38476, 35914], [38477, 37030], [38478, 37586], [38479, 39165], [38480, 40179], [38481, 40300], [38482, 20047], [38483, 20129], [38484, 20621], [38485, 21078], [38486, 22346], [38487, 22952], [38488, 24125], [38489, 24536], [38490, 24537], [38491, 25151], [38492, 26292], [38493, 26395], [38494, 26576], [38495, 26834], [38496, 20882], [38497, 32033], [38498, 32938], [38499, 33192], [38500, 35584], [38501, 35980], [38502, 36031], [38503, 37502], [38504, 38450], [38505, 21536], [38506, 38956], [38507, 21271], [38508, 20693], [38509, 21340], [38510, 22696], [38511, 25778], [38512, 26420], [38513, 29287], [38514, 30566], [38515, 31302], [38516, 37350], [38517, 21187], [38518, 27809], [38519, 27526], [38520, 22528], [38521, 24140], [38522, 22868], [38523, 26412], [38524, 32763], [38525, 20961], [38526, 30406], [38528, 25705], [38529, 30952], [38530, 39764], [38531, 40635], [38532, 22475], [38533, 22969], [38534, 26151], [38535, 26522], [38536, 27598], [38537, 21737], [38538, 27097], [38539, 24149], [38540, 33180], [38541, 26517], [38542, 39850], [38543, 26622], [38544, 40018], [38545, 26717], [38546, 20134], [38547, 20451], [38548, 21448], [38549, 25273], [38550, 26411], [38551, 27819], [38552, 36804], [38553, 20397], [38554, 32365], [38555, 40639], [38556, 19975], [38557, 24930], [38558, 28288], [38559, 28459], [38560, 34067], [38561, 21619], [38562, 26410], [38563, 39749], [38564, 24051], [38565, 31637], [38566, 23724], [38567, 23494], [38568, 34588], [38569, 28234], [38570, 34001], [38571, 31252], [38572, 33032], [38573, 22937], [38574, 31885], [38575, 27665], [38576, 30496], [38577, 21209], [38578, 22818], [38579, 28961], [38580, 29279], [38581, 30683], [38582, 38695], [38583, 40289], [38584, 26891], [38585, 23167], [38586, 23064], [38587, 20901], [38588, 21517], [38589, 21629], [38590, 26126], [38591, 30431], [38592, 36855], [38593, 37528], [38594, 40180], [38595, 23018], [38596, 29277], [38597, 28357], [38598, 20813], [38599, 26825], [38600, 32191], [38601, 32236], [38602, 38754], [38603, 40634], [38604, 25720], [38605, 27169], [38606, 33538], [38607, 22916], [38608, 23391], [38609, 27611], [38610, 29467], [38611, 30450], [38612, 32178], [38613, 32791], [38614, 33945], [38615, 20786], [38616, 26408], [38617, 40665], [38618, 30446], [38619, 26466], [38620, 21247], [38621, 39173], [38622, 23588], [38623, 25147], [38624, 31870], [38625, 36016], [38626, 21839], [38627, 24758], [38628, 32011], [38629, 38272], [38630, 21249], [38631, 20063], [38632, 20918], [38633, 22812], [38634, 29242], [38635, 32822], [38636, 37326], [38637, 24357], [38638, 30690], [38639, 21380], [38640, 24441], [38641, 32004], [38642, 34220], [38643, 35379], [38644, 36493], [38645, 38742], [38646, 26611], [38647, 34222], [38648, 37971], [38649, 24841], [38650, 24840], [38651, 27833], [38652, 30290], [38720, 35565], [38721, 36664], [38722, 21807], [38723, 20305], [38724, 20778], [38725, 21191], [38726, 21451], [38727, 23461], [38728, 24189], [38729, 24736], [38730, 24962], [38731, 25558], [38732, 26377], [38733, 26586], [38734, 28263], [38735, 28044], [38736, 29494], [38737, 29495], [38738, 30001], [38739, 31056], [38740, 35029], [38741, 35480], [38742, 36938], [38743, 37009], [38744, 37109], [38745, 38596], [38746, 34701], [38747, 22805], [38748, 20104], [38749, 20313], [38750, 19982], [38751, 35465], [38752, 36671], [38753, 38928], [38754, 20653], [38755, 24188], [38756, 22934], [38757, 23481], [38758, 24248], [38759, 25562], [38760, 25594], [38761, 25793], [38762, 26332], [38763, 26954], [38764, 27096], [38765, 27915], [38766, 28342], [38767, 29076], [38768, 29992], [38769, 31407], [38770, 32650], [38771, 32768], [38772, 33865], [38773, 33993], [38774, 35201], [38775, 35617], [38776, 36362], [38777, 36965], [38778, 38525], [38779, 39178], [38780, 24958], [38781, 25233], [38782, 27442], [38784, 27779], [38785, 28020], [38786, 32716], [38787, 32764], [38788, 28096], [38789, 32645], [38790, 34746], [38791, 35064], [38792, 26469], [38793, 33713], [38794, 38972], [38795, 38647], [38796, 27931], [38797, 32097], [38798, 33853], [38799, 37226], [38800, 20081], [38801, 21365], [38802, 23888], [38803, 27396], [38804, 28651], [38805, 34253], [38806, 34349], [38807, 35239], [38808, 21033], [38809, 21519], [38810, 23653], [38811, 26446], [38812, 26792], [38813, 29702], [38814, 29827], [38815, 30178], [38816, 35023], [38817, 35041], [38818, 37324], [38819, 38626], [38820, 38520], [38821, 24459], [38822, 29575], [38823, 31435], [38824, 33870], [38825, 25504], [38826, 30053], [38827, 21129], [38828, 27969], [38829, 28316], [38830, 29705], [38831, 30041], [38832, 30827], [38833, 31890], [38834, 38534], [38835, 31452], [38836, 40845], [38837, 20406], [38838, 24942], [38839, 26053], [38840, 34396], [38841, 20102], [38842, 20142], [38843, 20698], [38844, 20001], [38845, 20940], [38846, 23534], [38847, 26009], [38848, 26753], [38849, 28092], [38850, 29471], [38851, 30274], [38852, 30637], [38853, 31260], [38854, 31975], [38855, 33391], [38856, 35538], [38857, 36988], [38858, 37327], [38859, 38517], [38860, 38936], [38861, 21147], [38862, 32209], [38863, 20523], [38864, 21400], [38865, 26519], [38866, 28107], [38867, 29136], [38868, 29747], [38869, 33256], [38870, 36650], [38871, 38563], [38872, 40023], [38873, 40607], [38874, 29792], [38875, 22593], [38876, 28057], [38877, 32047], [38878, 39006], [38879, 20196], [38880, 20278], [38881, 20363], [38882, 20919], [38883, 21169], [38884, 23994], [38885, 24604], [38886, 29618], [38887, 31036], [38888, 33491], [38889, 37428], [38890, 38583], [38891, 38646], [38892, 38666], [38893, 40599], [38894, 40802], [38895, 26278], [38896, 27508], [38897, 21015], [38898, 21155], [38899, 28872], [38900, 35010], [38901, 24265], [38902, 24651], [38903, 24976], [38904, 28451], [38905, 29001], [38906, 31806], [38907, 32244], [38908, 32879], [38976, 34030], [38977, 36899], [38978, 37676], [38979, 21570], [38980, 39791], [38981, 27347], [38982, 28809], [38983, 36034], [38984, 36335], [38985, 38706], [38986, 21172], [38987, 23105], [38988, 24266], [38989, 24324], [38990, 26391], [38991, 27004], [38992, 27028], [38993, 28010], [38994, 28431], [38995, 29282], [38996, 29436], [38997, 31725], [38998, 32769], [38999, 32894], [39000, 34635], [39001, 37070], [39002, 20845], [39003, 40595], [39004, 31108], [39005, 32907], [39006, 37682], [39007, 35542], [39008, 20525], [39009, 21644], [39010, 35441], [39011, 27498], [39012, 36036], [39013, 33031], [39014, 24785], [39015, 26528], [39016, 40434], [39017, 20121], [39018, 20120], [39019, 39952], [39020, 35435], [39021, 34241], [39022, 34152], [39023, 26880], [39024, 28286], [39025, 30871], [39026, 33109], [39071, 24332], [39072, 19984], [39073, 19989], [39074, 20010], [39075, 20017], [39076, 20022], [39077, 20028], [39078, 20031], [39079, 20034], [39080, 20054], [39081, 20056], [39082, 20098], [39083, 20101], [39084, 35947], [39085, 20106], [39086, 33298], [39087, 24333], [39088, 20110], [39089, 20126], [39090, 20127], [39091, 20128], [39092, 20130], [39093, 20144], [39094, 20147], [39095, 20150], [39096, 20174], [39097, 20173], [39098, 20164], [39099, 20166], [39100, 20162], [39101, 20183], [39102, 20190], [39103, 20205], [39104, 20191], [39105, 20215], [39106, 20233], [39107, 20314], [39108, 20272], [39109, 20315], [39110, 20317], [39111, 20311], [39112, 20295], [39113, 20342], [39114, 20360], [39115, 20367], [39116, 20376], [39117, 20347], [39118, 20329], [39119, 20336], [39120, 20369], [39121, 20335], [39122, 20358], [39123, 20374], [39124, 20760], [39125, 20436], [39126, 20447], [39127, 20430], [39128, 20440], [39129, 20443], [39130, 20433], [39131, 20442], [39132, 20432], [39133, 20452], [39134, 20453], [39135, 20506], [39136, 20520], [39137, 20500], [39138, 20522], [39139, 20517], [39140, 20485], [39141, 20252], [39142, 20470], [39143, 20513], [39144, 20521], [39145, 20524], [39146, 20478], [39147, 20463], [39148, 20497], [39149, 20486], [39150, 20547], [39151, 20551], [39152, 26371], [39153, 20565], [39154, 20560], [39155, 20552], [39156, 20570], [39157, 20566], [39158, 20588], [39159, 20600], [39160, 20608], [39161, 20634], [39162, 20613], [39163, 20660], [39164, 20658], [39232, 20681], [39233, 20682], [39234, 20659], [39235, 20674], [39236, 20694], [39237, 20702], [39238, 20709], [39239, 20717], [39240, 20707], [39241, 20718], [39242, 20729], [39243, 20725], [39244, 20745], [39245, 20737], [39246, 20738], [39247, 20758], [39248, 20757], [39249, 20756], [39250, 20762], [39251, 20769], [39252, 20794], [39253, 20791], [39254, 20796], [39255, 20795], [39256, 20799], [39257, 20800], [39258, 20818], [39259, 20812], [39260, 20820], [39261, 20834], [39262, 31480], [39263, 20841], [39264, 20842], [39265, 20846], [39266, 20864], [39267, 20866], [39268, 22232], [39269, 20876], [39270, 20873], [39271, 20879], [39272, 20881], [39273, 20883], [39274, 20885], [39275, 20886], [39276, 20900], [39277, 20902], [39278, 20898], [39279, 20905], [39280, 20906], [39281, 20907], [39282, 20915], [39283, 20913], [39284, 20914], [39285, 20912], [39286, 20917], [39287, 20925], [39288, 20933], [39289, 20937], [39290, 20955], [39291, 20960], [39292, 34389], [39293, 20969], [39294, 20973], [39296, 20976], [39297, 20981], [39298, 20990], [39299, 20996], [39300, 21003], [39301, 21012], [39302, 21006], [39303, 21031], [39304, 21034], [39305, 21038], [39306, 21043], [39307, 21049], [39308, 21071], [39309, 21060], [39310, 21067], [39311, 21068], [39312, 21086], [39313, 21076], [39314, 21098], [39315, 21108], [39316, 21097], [39317, 21107], [39318, 21119], [39319, 21117], [39320, 21133], [39321, 21140], [39322, 21138], [39323, 21105], [39324, 21128], [39325, 21137], [39326, 36776], [39327, 36775], [39328, 21164], [39329, 21165], [39330, 21180], [39331, 21173], [39332, 21185], [39333, 21197], [39334, 21207], [39335, 21214], [39336, 21219], [39337, 21222], [39338, 39149], [39339, 21216], [39340, 21235], [39341, 21237], [39342, 21240], [39343, 21241], [39344, 21254], [39345, 21256], [39346, 30008], [39347, 21261], [39348, 21264], [39349, 21263], [39350, 21269], [39351, 21274], [39352, 21283], [39353, 21295], [39354, 21297], [39355, 21299], [39356, 21304], [39357, 21312], [39358, 21318], [39359, 21317], [39360, 19991], [39361, 21321], [39362, 21325], [39363, 20950], [39364, 21342], [39365, 21353], [39366, 21358], [39367, 22808], [39368, 21371], [39369, 21367], [39370, 21378], [39371, 21398], [39372, 21408], [39373, 21414], [39374, 21413], [39375, 21422], [39376, 21424], [39377, 21430], [39378, 21443], [39379, 31762], [39380, 38617], [39381, 21471], [39382, 26364], [39383, 29166], [39384, 21486], [39385, 21480], [39386, 21485], [39387, 21498], [39388, 21505], [39389, 21565], [39390, 21568], [39391, 21548], [39392, 21549], [39393, 21564], [39394, 21550], [39395, 21558], [39396, 21545], [39397, 21533], [39398, 21582], [39399, 21647], [39400, 21621], [39401, 21646], [39402, 21599], [39403, 21617], [39404, 21623], [39405, 21616], [39406, 21650], [39407, 21627], [39408, 21632], [39409, 21622], [39410, 21636], [39411, 21648], [39412, 21638], [39413, 21703], [39414, 21666], [39415, 21688], [39416, 21669], [39417, 21676], [39418, 21700], [39419, 21704], [39420, 21672], [39488, 21675], [39489, 21698], [39490, 21668], [39491, 21694], [39492, 21692], [39493, 21720], [39494, 21733], [39495, 21734], [39496, 21775], [39497, 21780], [39498, 21757], [39499, 21742], [39500, 21741], [39501, 21754], [39502, 21730], [39503, 21817], [39504, 21824], [39505, 21859], [39506, 21836], [39507, 21806], [39508, 21852], [39509, 21829], [39510, 21846], [39511, 21847], [39512, 21816], [39513, 21811], [39514, 21853], [39515, 21913], [39516, 21888], [39517, 21679], [39518, 21898], [39519, 21919], [39520, 21883], [39521, 21886], [39522, 21912], [39523, 21918], [39524, 21934], [39525, 21884], [39526, 21891], [39527, 21929], [39528, 21895], [39529, 21928], [39530, 21978], [39531, 21957], [39532, 21983], [39533, 21956], [39534, 21980], [39535, 21988], [39536, 21972], [39537, 22036], [39538, 22007], [39539, 22038], [39540, 22014], [39541, 22013], [39542, 22043], [39543, 22009], [39544, 22094], [39545, 22096], [39546, 29151], [39547, 22068], [39548, 22070], [39549, 22066], [39550, 22072], [39552, 22123], [39553, 22116], [39554, 22063], [39555, 22124], [39556, 22122], [39557, 22150], [39558, 22144], [39559, 22154], [39560, 22176], [39561, 22164], [39562, 22159], [39563, 22181], [39564, 22190], [39565, 22198], [39566, 22196], [39567, 22210], [39568, 22204], [39569, 22209], [39570, 22211], [39571, 22208], [39572, 22216], [39573, 22222], [39574, 22225], [39575, 22227], [39576, 22231], [39577, 22254], [39578, 22265], [39579, 22272], [39580, 22271], [39581, 22276], [39582, 22281], [39583, 22280], [39584, 22283], [39585, 22285], [39586, 22291], [39587, 22296], [39588, 22294], [39589, 21959], [39590, 22300], [39591, 22310], [39592, 22327], [39593, 22328], [39594, 22350], [39595, 22331], [39596, 22336], [39597, 22351], [39598, 22377], [39599, 22464], [39600, 22408], [39601, 22369], [39602, 22399], [39603, 22409], [39604, 22419], [39605, 22432], [39606, 22451], [39607, 22436], [39608, 22442], [39609, 22448], [39610, 22467], [39611, 22470], [39612, 22484], [39613, 22482], [39614, 22483], [39615, 22538], [39616, 22486], [39617, 22499], [39618, 22539], [39619, 22553], [39620, 22557], [39621, 22642], [39622, 22561], [39623, 22626], [39624, 22603], [39625, 22640], [39626, 27584], [39627, 22610], [39628, 22589], [39629, 22649], [39630, 22661], [39631, 22713], [39632, 22687], [39633, 22699], [39634, 22714], [39635, 22750], [39636, 22715], [39637, 22712], [39638, 22702], [39639, 22725], [39640, 22739], [39641, 22737], [39642, 22743], [39643, 22745], [39644, 22744], [39645, 22757], [39646, 22748], [39647, 22756], [39648, 22751], [39649, 22767], [39650, 22778], [39651, 22777], [39652, 22779], [39653, 22780], [39654, 22781], [39655, 22786], [39656, 22794], [39657, 22800], [39658, 22811], [39659, 26790], [39660, 22821], [39661, 22828], [39662, 22829], [39663, 22834], [39664, 22840], [39665, 22846], [39666, 31442], [39667, 22869], [39668, 22864], [39669, 22862], [39670, 22874], [39671, 22872], [39672, 22882], [39673, 22880], [39674, 22887], [39675, 22892], [39676, 22889], [39744, 22904], [39745, 22913], [39746, 22941], [39747, 20318], [39748, 20395], [39749, 22947], [39750, 22962], [39751, 22982], [39752, 23016], [39753, 23004], [39754, 22925], [39755, 23001], [39756, 23002], [39757, 23077], [39758, 23071], [39759, 23057], [39760, 23068], [39761, 23049], [39762, 23066], [39763, 23104], [39764, 23148], [39765, 23113], [39766, 23093], [39767, 23094], [39768, 23138], [39769, 23146], [39770, 23194], [39771, 23228], [39772, 23230], [39773, 23243], [39774, 23234], [39775, 23229], [39776, 23267], [39777, 23255], [39778, 23270], [39779, 23273], [39780, 23254], [39781, 23290], [39782, 23291], [39783, 23308], [39784, 23307], [39785, 23318], [39786, 23346], [39787, 23248], [39788, 23338], [39789, 23350], [39790, 23358], [39791, 23363], [39792, 23365], [39793, 23360], [39794, 23377], [39795, 23381], [39796, 23386], [39797, 23387], [39798, 23397], [39799, 23401], [39800, 23408], [39801, 23411], [39802, 23413], [39803, 23416], [39804, 25992], [39805, 23418], [39806, 23424], [39808, 23427], [39809, 23462], [39810, 23480], [39811, 23491], [39812, 23495], [39813, 23497], [39814, 23508], [39815, 23504], [39816, 23524], [39817, 23526], [39818, 23522], [39819, 23518], [39820, 23525], [39821, 23531], [39822, 23536], [39823, 23542], [39824, 23539], [39825, 23557], [39826, 23559], [39827, 23560], [39828, 23565], [39829, 23571], [39830, 23584], [39831, 23586], [39832, 23592], [39833, 23608], [39834, 23609], [39835, 23617], [39836, 23622], [39837, 23630], [39838, 23635], [39839, 23632], [39840, 23631], [39841, 23409], [39842, 23660], [39843, 23662], [39844, 20066], [39845, 23670], [39846, 23673], [39847, 23692], [39848, 23697], [39849, 23700], [39850, 22939], [39851, 23723], [39852, 23739], [39853, 23734], [39854, 23740], [39855, 23735], [39856, 23749], [39857, 23742], [39858, 23751], [39859, 23769], [39860, 23785], [39861, 23805], [39862, 23802], [39863, 23789], [39864, 23948], [39865, 23786], [39866, 23819], [39867, 23829], [39868, 23831], [39869, 23900], [39870, 23839], [39871, 23835], [39872, 23825], [39873, 23828], [39874, 23842], [39875, 23834], [39876, 23833], [39877, 23832], [39878, 23884], [39879, 23890], [39880, 23886], [39881, 23883], [39882, 23916], [39883, 23923], [39884, 23926], [39885, 23943], [39886, 23940], [39887, 23938], [39888, 23970], [39889, 23965], [39890, 23980], [39891, 23982], [39892, 23997], [39893, 23952], [39894, 23991], [39895, 23996], [39896, 24009], [39897, 24013], [39898, 24019], [39899, 24018], [39900, 24022], [39901, 24027], [39902, 24043], [39903, 24050], [39904, 24053], [39905, 24075], [39906, 24090], [39907, 24089], [39908, 24081], [39909, 24091], [39910, 24118], [39911, 24119], [39912, 24132], [39913, 24131], [39914, 24128], [39915, 24142], [39916, 24151], [39917, 24148], [39918, 24159], [39919, 24162], [39920, 24164], [39921, 24135], [39922, 24181], [39923, 24182], [39924, 24186], [39925, 40636], [39926, 24191], [39927, 24224], [39928, 24257], [39929, 24258], [39930, 24264], [39931, 24272], [39932, 24271], [40000, 24278], [40001, 24291], [40002, 24285], [40003, 24282], [40004, 24283], [40005, 24290], [40006, 24289], [40007, 24296], [40008, 24297], [40009, 24300], [40010, 24305], [40011, 24307], [40012, 24304], [40013, 24308], [40014, 24312], [40015, 24318], [40016, 24323], [40017, 24329], [40018, 24413], [40019, 24412], [40020, 24331], [40021, 24337], [40022, 24342], [40023, 24361], [40024, 24365], [40025, 24376], [40026, 24385], [40027, 24392], [40028, 24396], [40029, 24398], [40030, 24367], [40031, 24401], [40032, 24406], [40033, 24407], [40034, 24409], [40035, 24417], [40036, 24429], [40037, 24435], [40038, 24439], [40039, 24451], [40040, 24450], [40041, 24447], [40042, 24458], [40043, 24456], [40044, 24465], [40045, 24455], [40046, 24478], [40047, 24473], [40048, 24472], [40049, 24480], [40050, 24488], [40051, 24493], [40052, 24508], [40053, 24534], [40054, 24571], [40055, 24548], [40056, 24568], [40057, 24561], [40058, 24541], [40059, 24755], [40060, 24575], [40061, 24609], [40062, 24672], [40064, 24601], [40065, 24592], [40066, 24617], [40067, 24590], [40068, 24625], [40069, 24603], [40070, 24597], [40071, 24619], [40072, 24614], [40073, 24591], [40074, 24634], [40075, 24666], [40076, 24641], [40077, 24682], [40078, 24695], [40079, 24671], [40080, 24650], [40081, 24646], [40082, 24653], [40083, 24675], [40084, 24643], [40085, 24676], [40086, 24642], [40087, 24684], [40088, 24683], [40089, 24665], [40090, 24705], [40091, 24717], [40092, 24807], [40093, 24707], [40094, 24730], [40095, 24708], [40096, 24731], [40097, 24726], [40098, 24727], [40099, 24722], [40100, 24743], [40101, 24715], [40102, 24801], [40103, 24760], [40104, 24800], [40105, 24787], [40106, 24756], [40107, 24560], [40108, 24765], [40109, 24774], [40110, 24757], [40111, 24792], [40112, 24909], [40113, 24853], [40114, 24838], [40115, 24822], [40116, 24823], [40117, 24832], [40118, 24820], [40119, 24826], [40120, 24835], [40121, 24865], [40122, 24827], [40123, 24817], [40124, 24845], [40125, 24846], [40126, 24903], [40127, 24894], [40128, 24872], [40129, 24871], [40130, 24906], [40131, 24895], [40132, 24892], [40133, 24876], [40134, 24884], [40135, 24893], [40136, 24898], [40137, 24900], [40138, 24947], [40139, 24951], [40140, 24920], [40141, 24921], [40142, 24922], [40143, 24939], [40144, 24948], [40145, 24943], [40146, 24933], [40147, 24945], [40148, 24927], [40149, 24925], [40150, 24915], [40151, 24949], [40152, 24985], [40153, 24982], [40154, 24967], [40155, 25004], [40156, 24980], [40157, 24986], [40158, 24970], [40159, 24977], [40160, 25003], [40161, 25006], [40162, 25036], [40163, 25034], [40164, 25033], [40165, 25079], [40166, 25032], [40167, 25027], [40168, 25030], [40169, 25018], [40170, 25035], [40171, 32633], [40172, 25037], [40173, 25062], [40174, 25059], [40175, 25078], [40176, 25082], [40177, 25076], [40178, 25087], [40179, 25085], [40180, 25084], [40181, 25086], [40182, 25088], [40183, 25096], [40184, 25097], [40185, 25101], [40186, 25100], [40187, 25108], [40188, 25115], [40256, 25118], [40257, 25121], [40258, 25130], [40259, 25134], [40260, 25136], [40261, 25138], [40262, 25139], [40263, 25153], [40264, 25166], [40265, 25182], [40266, 25187], [40267, 25179], [40268, 25184], [40269, 25192], [40270, 25212], [40271, 25218], [40272, 25225], [40273, 25214], [40274, 25234], [40275, 25235], [40276, 25238], [40277, 25300], [40278, 25219], [40279, 25236], [40280, 25303], [40281, 25297], [40282, 25275], [40283, 25295], [40284, 25343], [40285, 25286], [40286, 25812], [40287, 25288], [40288, 25308], [40289, 25292], [40290, 25290], [40291, 25282], [40292, 25287], [40293, 25243], [40294, 25289], [40295, 25356], [40296, 25326], [40297, 25329], [40298, 25383], [40299, 25346], [40300, 25352], [40301, 25327], [40302, 25333], [40303, 25424], [40304, 25406], [40305, 25421], [40306, 25628], [40307, 25423], [40308, 25494], [40309, 25486], [40310, 25472], [40311, 25515], [40312, 25462], [40313, 25507], [40314, 25487], [40315, 25481], [40316, 25503], [40317, 25525], [40318, 25451], [40320, 25449], [40321, 25534], [40322, 25577], [40323, 25536], [40324, 25542], [40325, 25571], [40326, 25545], [40327, 25554], [40328, 25590], [40329, 25540], [40330, 25622], [40331, 25652], [40332, 25606], [40333, 25619], [40334, 25638], [40335, 25654], [40336, 25885], [40337, 25623], [40338, 25640], [40339, 25615], [40340, 25703], [40341, 25711], [40342, 25718], [40343, 25678], [40344, 25898], [40345, 25749], [40346, 25747], [40347, 25765], [40348, 25769], [40349, 25736], [40350, 25788], [40351, 25818], [40352, 25810], [40353, 25797], [40354, 25799], [40355, 25787], [40356, 25816], [40357, 25794], [40358, 25841], [40359, 25831], [40360, 33289], [40361, 25824], [40362, 25825], [40363, 25260], [40364, 25827], [40365, 25839], [40366, 25900], [40367, 25846], [40368, 25844], [40369, 25842], [40370, 25850], [40371, 25856], [40372, 25853], [40373, 25880], [40374, 25884], [40375, 25861], [40376, 25892], [40377, 25891], [40378, 25899], [40379, 25908], [40380, 25909], [40381, 25911], [40382, 25910], [40383, 25912], [40384, 30027], [40385, 25928], [40386, 25942], [40387, 25941], [40388, 25933], [40389, 25944], [40390, 25950], [40391, 25949], [40392, 25970], [40393, 25976], [40394, 25986], [40395, 25987], [40396, 35722], [40397, 26011], [40398, 26015], [40399, 26027], [40400, 26039], [40401, 26051], [40402, 26054], [40403, 26049], [40404, 26052], [40405, 26060], [40406, 26066], [40407, 26075], [40408, 26073], [40409, 26080], [40410, 26081], [40411, 26097], [40412, 26482], [40413, 26122], [40414, 26115], [40415, 26107], [40416, 26483], [40417, 26165], [40418, 26166], [40419, 26164], [40420, 26140], [40421, 26191], [40422, 26180], [40423, 26185], [40424, 26177], [40425, 26206], [40426, 26205], [40427, 26212], [40428, 26215], [40429, 26216], [40430, 26207], [40431, 26210], [40432, 26224], [40433, 26243], [40434, 26248], [40435, 26254], [40436, 26249], [40437, 26244], [40438, 26264], [40439, 26269], [40440, 26305], [40441, 26297], [40442, 26313], [40443, 26302], [40444, 26300], [40512, 26308], [40513, 26296], [40514, 26326], [40515, 26330], [40516, 26336], [40517, 26175], [40518, 26342], [40519, 26345], [40520, 26352], [40521, 26357], [40522, 26359], [40523, 26383], [40524, 26390], [40525, 26398], [40526, 26406], [40527, 26407], [40528, 38712], [40529, 26414], [40530, 26431], [40531, 26422], [40532, 26433], [40533, 26424], [40534, 26423], [40535, 26438], [40536, 26462], [40537, 26464], [40538, 26457], [40539, 26467], [40540, 26468], [40541, 26505], [40542, 26480], [40543, 26537], [40544, 26492], [40545, 26474], [40546, 26508], [40547, 26507], [40548, 26534], [40549, 26529], [40550, 26501], [40551, 26551], [40552, 26607], [40553, 26548], [40554, 26604], [40555, 26547], [40556, 26601], [40557, 26552], [40558, 26596], [40559, 26590], [40560, 26589], [40561, 26594], [40562, 26606], [40563, 26553], [40564, 26574], [40565, 26566], [40566, 26599], [40567, 27292], [40568, 26654], [40569, 26694], [40570, 26665], [40571, 26688], [40572, 26701], [40573, 26674], [40574, 26702], [40576, 26803], [40577, 26667], [40578, 26713], [40579, 26723], [40580, 26743], [40581, 26751], [40582, 26783], [40583, 26767], [40584, 26797], [40585, 26772], [40586, 26781], [40587, 26779], [40588, 26755], [40589, 27310], [40590, 26809], [40591, 26740], [40592, 26805], [40593, 26784], [40594, 26810], [40595, 26895], [40596, 26765], [40597, 26750], [40598, 26881], [40599, 26826], [40600, 26888], [40601, 26840], [40602, 26914], [40603, 26918], [40604, 26849], [40605, 26892], [40606, 26829], [40607, 26836], [40608, 26855], [40609, 26837], [40610, 26934], [40611, 26898], [40612, 26884], [40613, 26839], [40614, 26851], [40615, 26917], [40616, 26873], [40617, 26848], [40618, 26863], [40619, 26920], [40620, 26922], [40621, 26906], [40622, 26915], [40623, 26913], [40624, 26822], [40625, 27001], [40626, 26999], [40627, 26972], [40628, 27000], [40629, 26987], [40630, 26964], [40631, 27006], [40632, 26990], [40633, 26937], [40634, 26996], [40635, 26941], [40636, 26969], [40637, 26928], [40638, 26977], [40639, 26974], [40640, 26973], [40641, 27009], [40642, 26986], [40643, 27058], [40644, 27054], [40645, 27088], [40646, 27071], [40647, 27073], [40648, 27091], [40649, 27070], [40650, 27086], [40651, 23528], [40652, 27082], [40653, 27101], [40654, 27067], [40655, 27075], [40656, 27047], [40657, 27182], [40658, 27025], [40659, 27040], [40660, 27036], [40661, 27029], [40662, 27060], [40663, 27102], [40664, 27112], [40665, 27138], [40666, 27163], [40667, 27135], [40668, 27402], [40669, 27129], [40670, 27122], [40671, 27111], [40672, 27141], [40673, 27057], [40674, 27166], [40675, 27117], [40676, 27156], [40677, 27115], [40678, 27146], [40679, 27154], [40680, 27329], [40681, 27171], [40682, 27155], [40683, 27204], [40684, 27148], [40685, 27250], [40686, 27190], [40687, 27256], [40688, 27207], [40689, 27234], [40690, 27225], [40691, 27238], [40692, 27208], [40693, 27192], [40694, 27170], [40695, 27280], [40696, 27277], [40697, 27296], [40698, 27268], [40699, 27298], [40700, 27299], [40768, 27287], [40769, 34327], [40770, 27323], [40771, 27331], [40772, 27330], [40773, 27320], [40774, 27315], [40775, 27308], [40776, 27358], [40777, 27345], [40778, 27359], [40779, 27306], [40780, 27354], [40781, 27370], [40782, 27387], [40783, 27397], [40784, 34326], [40785, 27386], [40786, 27410], [40787, 27414], [40788, 39729], [40789, 27423], [40790, 27448], [40791, 27447], [40792, 30428], [40793, 27449], [40794, 39150], [40795, 27463], [40796, 27459], [40797, 27465], [40798, 27472], [40799, 27481], [40800, 27476], [40801, 27483], [40802, 27487], [40803, 27489], [40804, 27512], [40805, 27513], [40806, 27519], [40807, 27520], [40808, 27524], [40809, 27523], [40810, 27533], [40811, 27544], [40812, 27541], [40813, 27550], [40814, 27556], [40815, 27562], [40816, 27563], [40817, 27567], [40818, 27570], [40819, 27569], [40820, 27571], [40821, 27575], [40822, 27580], [40823, 27590], [40824, 27595], [40825, 27603], [40826, 27615], [40827, 27628], [40828, 27627], [40829, 27635], [40830, 27631], [40832, 40638], [40833, 27656], [40834, 27667], [40835, 27668], [40836, 27675], [40837, 27684], [40838, 27683], [40839, 27742], [40840, 27733], [40841, 27746], [40842, 27754], [40843, 27778], [40844, 27789], [40845, 27802], [40846, 27777], [40847, 27803], [40848, 27774], [40849, 27752], [40850, 27763], [40851, 27794], [40852, 27792], [40853, 27844], [40854, 27889], [40855, 27859], [40856, 27837], [40857, 27863], [40858, 27845], [40859, 27869], [40860, 27822], [40861, 27825], [40862, 27838], [40863, 27834], [40864, 27867], [40865, 27887], [40866, 27865], [40867, 27882], [40868, 27935], [40869, 34893], [40870, 27958], [40871, 27947], [40872, 27965], [40873, 27960], [40874, 27929], [40875, 27957], [40876, 27955], [40877, 27922], [40878, 27916], [40879, 28003], [40880, 28051], [40881, 28004], [40882, 27994], [40883, 28025], [40884, 27993], [40885, 28046], [40886, 28053], [40887, 28644], [40888, 28037], [40889, 28153], [40890, 28181], [40891, 28170], [40892, 28085], [40893, 28103], [40894, 28134], [40895, 28088], [40896, 28102], [40897, 28140], [40898, 28126], [40899, 28108], [40900, 28136], [40901, 28114], [40902, 28101], [40903, 28154], [40904, 28121], [40905, 28132], [40906, 28117], [40907, 28138], [40908, 28142], [40909, 28205], [40910, 28270], [40911, 28206], [40912, 28185], [40913, 28274], [40914, 28255], [40915, 28222], [40916, 28195], [40917, 28267], [40918, 28203], [40919, 28278], [40920, 28237], [40921, 28191], [40922, 28227], [40923, 28218], [40924, 28238], [40925, 28196], [40926, 28415], [40927, 28189], [40928, 28216], [40929, 28290], [40930, 28330], [40931, 28312], [40932, 28361], [40933, 28343], [40934, 28371], [40935, 28349], [40936, 28335], [40937, 28356], [40938, 28338], [40939, 28372], [40940, 28373], [40941, 28303], [40942, 28325], [40943, 28354], [40944, 28319], [40945, 28481], [40946, 28433], [40947, 28748], [40948, 28396], [40949, 28408], [40950, 28414], [40951, 28479], [40952, 28402], [40953, 28465], [40954, 28399], [40955, 28466], [40956, 28364], [161, 65377], [162, 65378], [163, 65379], [164, 65380], [165, 65381], [166, 65382], [167, 65383], [168, 65384], [169, 65385], [170, 65386], [171, 65387], [172, 65388], [173, 65389], [174, 65390], [175, 65391], [176, 65392], [177, 65393], [178, 65394], [179, 65395], [180, 65396], [181, 65397], [182, 65398], [183, 65399], [184, 65400], [185, 65401], [186, 65402], [187, 65403], [188, 65404], [189, 65405], [190, 65406], [191, 65407], [192, 65408], [193, 65409], [194, 65410], [195, 65411], [196, 65412], [197, 65413], [198, 65414], [199, 65415], [200, 65416], [201, 65417], [202, 65418], [203, 65419], [204, 65420], [205, 65421], [206, 65422], [207, 65423], [208, 65424], [209, 65425], [210, 65426], [211, 65427], [212, 65428], [213, 65429], [214, 65430], [215, 65431], [216, 65432], [217, 65433], [218, 65434], [219, 65435], [220, 65436], [221, 65437], [222, 65438], [223, 65439], [57408, 28478], [57409, 28435], [57410, 28407], [57411, 28550], [57412, 28538], [57413, 28536], [57414, 28545], [57415, 28544], [57416, 28527], [57417, 28507], [57418, 28659], [57419, 28525], [57420, 28546], [57421, 28540], [57422, 28504], [57423, 28558], [57424, 28561], [57425, 28610], [57426, 28518], [57427, 28595], [57428, 28579], [57429, 28577], [57430, 28580], [57431, 28601], [57432, 28614], [57433, 28586], [57434, 28639], [57435, 28629], [57436, 28652], [57437, 28628], [57438, 28632], [57439, 28657], [57440, 28654], [57441, 28635], [57442, 28681], [57443, 28683], [57444, 28666], [57445, 28689], [57446, 28673], [57447, 28687], [57448, 28670], [57449, 28699], [57450, 28698], [57451, 28532], [57452, 28701], [57453, 28696], [57454, 28703], [57455, 28720], [57456, 28734], [57457, 28722], [57458, 28753], [57459, 28771], [57460, 28825], [57461, 28818], [57462, 28847], [57463, 28913], [57464, 28844], [57465, 28856], [57466, 28851], [57467, 28846], [57468, 28895], [57469, 28875], [57470, 28893], [57472, 28889], [57473, 28937], [57474, 28925], [57475, 28956], [57476, 28953], [57477, 29029], [57478, 29013], [57479, 29064], [57480, 29030], [57481, 29026], [57482, 29004], [57483, 29014], [57484, 29036], [57485, 29071], [57486, 29179], [57487, 29060], [57488, 29077], [57489, 29096], [57490, 29100], [57491, 29143], [57492, 29113], [57493, 29118], [57494, 29138], [57495, 29129], [57496, 29140], [57497, 29134], [57498, 29152], [57499, 29164], [57500, 29159], [57501, 29173], [57502, 29180], [57503, 29177], [57504, 29183], [57505, 29197], [57506, 29200], [57507, 29211], [57508, 29224], [57509, 29229], [57510, 29228], [57511, 29232], [57512, 29234], [57513, 29243], [57514, 29244], [57515, 29247], [57516, 29248], [57517, 29254], [57518, 29259], [57519, 29272], [57520, 29300], [57521, 29310], [57522, 29314], [57523, 29313], [57524, 29319], [57525, 29330], [57526, 29334], [57527, 29346], [57528, 29351], [57529, 29369], [57530, 29362], [57531, 29379], [57532, 29382], [57533, 29380], [57534, 29390], [57535, 29394], [57536, 29410], [57537, 29408], [57538, 29409], [57539, 29433], [57540, 29431], [57541, 20495], [57542, 29463], [57543, 29450], [57544, 29468], [57545, 29462], [57546, 29469], [57547, 29492], [57548, 29487], [57549, 29481], [57550, 29477], [57551, 29502], [57552, 29518], [57553, 29519], [57554, 40664], [57555, 29527], [57556, 29546], [57557, 29544], [57558, 29552], [57559, 29560], [57560, 29557], [57561, 29563], [57562, 29562], [57563, 29640], [57564, 29619], [57565, 29646], [57566, 29627], [57567, 29632], [57568, 29669], [57569, 29678], [57570, 29662], [57571, 29858], [57572, 29701], [57573, 29807], [57574, 29733], [57575, 29688], [57576, 29746], [57577, 29754], [57578, 29781], [57579, 29759], [57580, 29791], [57581, 29785], [57582, 29761], [57583, 29788], [57584, 29801], [57585, 29808], [57586, 29795], [57587, 29802], [57588, 29814], [57589, 29822], [57590, 29835], [57591, 29854], [57592, 29863], [57593, 29898], [57594, 29903], [57595, 29908], [57596, 29681], [57664, 29920], [57665, 29923], [57666, 29927], [57667, 29929], [57668, 29934], [57669, 29938], [57670, 29936], [57671, 29937], [57672, 29944], [57673, 29943], [57674, 29956], [57675, 29955], [57676, 29957], [57677, 29964], [57678, 29966], [57679, 29965], [57680, 29973], [57681, 29971], [57682, 29982], [57683, 29990], [57684, 29996], [57685, 30012], [57686, 30020], [57687, 30029], [57688, 30026], [57689, 30025], [57690, 30043], [57691, 30022], [57692, 30042], [57693, 30057], [57694, 30052], [57695, 30055], [57696, 30059], [57697, 30061], [57698, 30072], [57699, 30070], [57700, 30086], [57701, 30087], [57702, 30068], [57703, 30090], [57704, 30089], [57705, 30082], [57706, 30100], [57707, 30106], [57708, 30109], [57709, 30117], [57710, 30115], [57711, 30146], [57712, 30131], [57713, 30147], [57714, 30133], [57715, 30141], [57716, 30136], [57717, 30140], [57718, 30129], [57719, 30157], [57720, 30154], [57721, 30162], [57722, 30169], [57723, 30179], [57724, 30174], [57725, 30206], [57726, 30207], [57728, 30204], [57729, 30209], [57730, 30192], [57731, 30202], [57732, 30194], [57733, 30195], [57734, 30219], [57735, 30221], [57736, 30217], [57737, 30239], [57738, 30247], [57739, 30240], [57740, 30241], [57741, 30242], [57742, 30244], [57743, 30260], [57744, 30256], [57745, 30267], [57746, 30279], [57747, 30280], [57748, 30278], [57749, 30300], [57750, 30296], [57751, 30305], [57752, 30306], [57753, 30312], [57754, 30313], [57755, 30314], [57756, 30311], [57757, 30316], [57758, 30320], [57759, 30322], [57760, 30326], [57761, 30328], [57762, 30332], [57763, 30336], [57764, 30339], [57765, 30344], [57766, 30347], [57767, 30350], [57768, 30358], [57769, 30355], [57770, 30361], [57771, 30362], [57772, 30384], [57773, 30388], [57774, 30392], [57775, 30393], [57776, 30394], [57777, 30402], [57778, 30413], [57779, 30422], [57780, 30418], [57781, 30430], [57782, 30433], [57783, 30437], [57784, 30439], [57785, 30442], [57786, 34351], [57787, 30459], [57788, 30472], [57789, 30471], [57790, 30468], [57791, 30505], [57792, 30500], [57793, 30494], [57794, 30501], [57795, 30502], [57796, 30491], [57797, 30519], [57798, 30520], [57799, 30535], [57800, 30554], [57801, 30568], [57802, 30571], [57803, 30555], [57804, 30565], [57805, 30591], [57806, 30590], [57807, 30585], [57808, 30606], [57809, 30603], [57810, 30609], [57811, 30624], [57812, 30622], [57813, 30640], [57814, 30646], [57815, 30649], [57816, 30655], [57817, 30652], [57818, 30653], [57819, 30651], [57820, 30663], [57821, 30669], [57822, 30679], [57823, 30682], [57824, 30684], [57825, 30691], [57826, 30702], [57827, 30716], [57828, 30732], [57829, 30738], [57830, 31014], [57831, 30752], [57832, 31018], [57833, 30789], [57834, 30862], [57835, 30836], [57836, 30854], [57837, 30844], [57838, 30874], [57839, 30860], [57840, 30883], [57841, 30901], [57842, 30890], [57843, 30895], [57844, 30929], [57845, 30918], [57846, 30923], [57847, 30932], [57848, 30910], [57849, 30908], [57850, 30917], [57851, 30922], [57852, 30956], [57920, 30951], [57921, 30938], [57922, 30973], [57923, 30964], [57924, 30983], [57925, 30994], [57926, 30993], [57927, 31001], [57928, 31020], [57929, 31019], [57930, 31040], [57931, 31072], [57932, 31063], [57933, 31071], [57934, 31066], [57935, 31061], [57936, 31059], [57937, 31098], [57938, 31103], [57939, 31114], [57940, 31133], [57941, 31143], [57942, 40779], [57943, 31146], [57944, 31150], [57945, 31155], [57946, 31161], [57947, 31162], [57948, 31177], [57949, 31189], [57950, 31207], [57951, 31212], [57952, 31201], [57953, 31203], [57954, 31240], [57955, 31245], [57956, 31256], [57957, 31257], [57958, 31264], [57959, 31263], [57960, 31104], [57961, 31281], [57962, 31291], [57963, 31294], [57964, 31287], [57965, 31299], [57966, 31319], [57967, 31305], [57968, 31329], [57969, 31330], [57970, 31337], [57971, 40861], [57972, 31344], [57973, 31353], [57974, 31357], [57975, 31368], [57976, 31383], [57977, 31381], [57978, 31384], [57979, 31382], [57980, 31401], [57981, 31432], [57982, 31408], [57984, 31414], [57985, 31429], [57986, 31428], [57987, 31423], [57988, 36995], [57989, 31431], [57990, 31434], [57991, 31437], [57992, 31439], [57993, 31445], [57994, 31443], [57995, 31449], [57996, 31450], [57997, 31453], [57998, 31457], [57999, 31458], [58000, 31462], [58001, 31469], [58002, 31472], [58003, 31490], [58004, 31503], [58005, 31498], [58006, 31494], [58007, 31539], [58008, 31512], [58009, 31513], [58010, 31518], [58011, 31541], [58012, 31528], [58013, 31542], [58014, 31568], [58015, 31610], [58016, 31492], [58017, 31565], [58018, 31499], [58019, 31564], [58020, 31557], [58021, 31605], [58022, 31589], [58023, 31604], [58024, 31591], [58025, 31600], [58026, 31601], [58027, 31596], [58028, 31598], [58029, 31645], [58030, 31640], [58031, 31647], [58032, 31629], [58033, 31644], [58034, 31642], [58035, 31627], [58036, 31634], [58037, 31631], [58038, 31581], [58039, 31641], [58040, 31691], [58041, 31681], [58042, 31692], [58043, 31695], [58044, 31668], [58045, 31686], [58046, 31709], [58047, 31721], [58048, 31761], [58049, 31764], [58050, 31718], [58051, 31717], [58052, 31840], [58053, 31744], [58054, 31751], [58055, 31763], [58056, 31731], [58057, 31735], [58058, 31767], [58059, 31757], [58060, 31734], [58061, 31779], [58062, 31783], [58063, 31786], [58064, 31775], [58065, 31799], [58066, 31787], [58067, 31805], [58068, 31820], [58069, 31811], [58070, 31828], [58071, 31823], [58072, 31808], [58073, 31824], [58074, 31832], [58075, 31839], [58076, 31844], [58077, 31830], [58078, 31845], [58079, 31852], [58080, 31861], [58081, 31875], [58082, 31888], [58083, 31908], [58084, 31917], [58085, 31906], [58086, 31915], [58087, 31905], [58088, 31912], [58089, 31923], [58090, 31922], [58091, 31921], [58092, 31918], [58093, 31929], [58094, 31933], [58095, 31936], [58096, 31941], [58097, 31938], [58098, 31960], [58099, 31954], [58100, 31964], [58101, 31970], [58102, 39739], [58103, 31983], [58104, 31986], [58105, 31988], [58106, 31990], [58107, 31994], [58108, 32006], [58176, 32002], [58177, 32028], [58178, 32021], [58179, 32010], [58180, 32069], [58181, 32075], [58182, 32046], [58183, 32050], [58184, 32063], [58185, 32053], [58186, 32070], [58187, 32115], [58188, 32086], [58189, 32078], [58190, 32114], [58191, 32104], [58192, 32110], [58193, 32079], [58194, 32099], [58195, 32147], [58196, 32137], [58197, 32091], [58198, 32143], [58199, 32125], [58200, 32155], [58201, 32186], [58202, 32174], [58203, 32163], [58204, 32181], [58205, 32199], [58206, 32189], [58207, 32171], [58208, 32317], [58209, 32162], [58210, 32175], [58211, 32220], [58212, 32184], [58213, 32159], [58214, 32176], [58215, 32216], [58216, 32221], [58217, 32228], [58218, 32222], [58219, 32251], [58220, 32242], [58221, 32225], [58222, 32261], [58223, 32266], [58224, 32291], [58225, 32289], [58226, 32274], [58227, 32305], [58228, 32287], [58229, 32265], [58230, 32267], [58231, 32290], [58232, 32326], [58233, 32358], [58234, 32315], [58235, 32309], [58236, 32313], [58237, 32323], [58238, 32311], [58240, 32306], [58241, 32314], [58242, 32359], [58243, 32349], [58244, 32342], [58245, 32350], [58246, 32345], [58247, 32346], [58248, 32377], [58249, 32362], [58250, 32361], [58251, 32380], [58252, 32379], [58253, 32387], [58254, 32213], [58255, 32381], [58256, 36782], [58257, 32383], [58258, 32392], [58259, 32393], [58260, 32396], [58261, 32402], [58262, 32400], [58263, 32403], [58264, 32404], [58265, 32406], [58266, 32398], [58267, 32411], [58268, 32412], [58269, 32568], [58270, 32570], [58271, 32581], [58272, 32588], [58273, 32589], [58274, 32590], [58275, 32592], [58276, 32593], [58277, 32597], [58278, 32596], [58279, 32600], [58280, 32607], [58281, 32608], [58282, 32616], [58283, 32617], [58284, 32615], [58285, 32632], [58286, 32642], [58287, 32646], [58288, 32643], [58289, 32648], [58290, 32647], [58291, 32652], [58292, 32660], [58293, 32670], [58294, 32669], [58295, 32666], [58296, 32675], [58297, 32687], [58298, 32690], [58299, 32697], [58300, 32686], [58301, 32694], [58302, 32696], [58303, 35697], [58304, 32709], [58305, 32710], [58306, 32714], [58307, 32725], [58308, 32724], [58309, 32737], [58310, 32742], [58311, 32745], [58312, 32755], [58313, 32761], [58314, 39132], [58315, 32774], [58316, 32772], [58317, 32779], [58318, 32786], [58319, 32792], [58320, 32793], [58321, 32796], [58322, 32801], [58323, 32808], [58324, 32831], [58325, 32827], [58326, 32842], [58327, 32838], [58328, 32850], [58329, 32856], [58330, 32858], [58331, 32863], [58332, 32866], [58333, 32872], [58334, 32883], [58335, 32882], [58336, 32880], [58337, 32886], [58338, 32889], [58339, 32893], [58340, 32895], [58341, 32900], [58342, 32902], [58343, 32901], [58344, 32923], [58345, 32915], [58346, 32922], [58347, 32941], [58348, 20880], [58349, 32940], [58350, 32987], [58351, 32997], [58352, 32985], [58353, 32989], [58354, 32964], [58355, 32986], [58356, 32982], [58357, 33033], [58358, 33007], [58359, 33009], [58360, 33051], [58361, 33065], [58362, 33059], [58363, 33071], [58364, 33099], [58432, 38539], [58433, 33094], [58434, 33086], [58435, 33107], [58436, 33105], [58437, 33020], [58438, 33137], [58439, 33134], [58440, 33125], [58441, 33126], [58442, 33140], [58443, 33155], [58444, 33160], [58445, 33162], [58446, 33152], [58447, 33154], [58448, 33184], [58449, 33173], [58450, 33188], [58451, 33187], [58452, 33119], [58453, 33171], [58454, 33193], [58455, 33200], [58456, 33205], [58457, 33214], [58458, 33208], [58459, 33213], [58460, 33216], [58461, 33218], [58462, 33210], [58463, 33225], [58464, 33229], [58465, 33233], [58466, 33241], [58467, 33240], [58468, 33224], [58469, 33242], [58470, 33247], [58471, 33248], [58472, 33255], [58473, 33274], [58474, 33275], [58475, 33278], [58476, 33281], [58477, 33282], [58478, 33285], [58479, 33287], [58480, 33290], [58481, 33293], [58482, 33296], [58483, 33302], [58484, 33321], [58485, 33323], [58486, 33336], [58487, 33331], [58488, 33344], [58489, 33369], [58490, 33368], [58491, 33373], [58492, 33370], [58493, 33375], [58494, 33380], [58496, 33378], [58497, 33384], [58498, 33386], [58499, 33387], [58500, 33326], [58501, 33393], [58502, 33399], [58503, 33400], [58504, 33406], [58505, 33421], [58506, 33426], [58507, 33451], [58508, 33439], [58509, 33467], [58510, 33452], [58511, 33505], [58512, 33507], [58513, 33503], [58514, 33490], [58515, 33524], [58516, 33523], [58517, 33530], [58518, 33683], [58519, 33539], [58520, 33531], [58521, 33529], [58522, 33502], [58523, 33542], [58524, 33500], [58525, 33545], [58526, 33497], [58527, 33589], [58528, 33588], [58529, 33558], [58530, 33586], [58531, 33585], [58532, 33600], [58533, 33593], [58534, 33616], [58535, 33605], [58536, 33583], [58537, 33579], [58538, 33559], [58539, 33560], [58540, 33669], [58541, 33690], [58542, 33706], [58543, 33695], [58544, 33698], [58545, 33686], [58546, 33571], [58547, 33678], [58548, 33671], [58549, 33674], [58550, 33660], [58551, 33717], [58552, 33651], [58553, 33653], [58554, 33696], [58555, 33673], [58556, 33704], [58557, 33780], [58558, 33811], [58559, 33771], [58560, 33742], [58561, 33789], [58562, 33795], [58563, 33752], [58564, 33803], [58565, 33729], [58566, 33783], [58567, 33799], [58568, 33760], [58569, 33778], [58570, 33805], [58571, 33826], [58572, 33824], [58573, 33725], [58574, 33848], [58575, 34054], [58576, 33787], [58577, 33901], [58578, 33834], [58579, 33852], [58580, 34138], [58581, 33924], [58582, 33911], [58583, 33899], [58584, 33965], [58585, 33902], [58586, 33922], [58587, 33897], [58588, 33862], [58589, 33836], [58590, 33903], [58591, 33913], [58592, 33845], [58593, 33994], [58594, 33890], [58595, 33977], [58596, 33983], [58597, 33951], [58598, 34009], [58599, 33997], [58600, 33979], [58601, 34010], [58602, 34000], [58603, 33985], [58604, 33990], [58605, 34006], [58606, 33953], [58607, 34081], [58608, 34047], [58609, 34036], [58610, 34071], [58611, 34072], [58612, 34092], [58613, 34079], [58614, 34069], [58615, 34068], [58616, 34044], [58617, 34112], [58618, 34147], [58619, 34136], [58620, 34120], [58688, 34113], [58689, 34306], [58690, 34123], [58691, 34133], [58692, 34176], [58693, 34212], [58694, 34184], [58695, 34193], [58696, 34186], [58697, 34216], [58698, 34157], [58699, 34196], [58700, 34203], [58701, 34282], [58702, 34183], [58703, 34204], [58704, 34167], [58705, 34174], [58706, 34192], [58707, 34249], [58708, 34234], [58709, 34255], [58710, 34233], [58711, 34256], [58712, 34261], [58713, 34269], [58714, 34277], [58715, 34268], [58716, 34297], [58717, 34314], [58718, 34323], [58719, 34315], [58720, 34302], [58721, 34298], [58722, 34310], [58723, 34338], [58724, 34330], [58725, 34352], [58726, 34367], [58727, 34381], [58728, 20053], [58729, 34388], [58730, 34399], [58731, 34407], [58732, 34417], [58733, 34451], [58734, 34467], [58735, 34473], [58736, 34474], [58737, 34443], [58738, 34444], [58739, 34486], [58740, 34479], [58741, 34500], [58742, 34502], [58743, 34480], [58744, 34505], [58745, 34851], [58746, 34475], [58747, 34516], [58748, 34526], [58749, 34537], [58750, 34540], [58752, 34527], [58753, 34523], [58754, 34543], [58755, 34578], [58756, 34566], [58757, 34568], [58758, 34560], [58759, 34563], [58760, 34555], [58761, 34577], [58762, 34569], [58763, 34573], [58764, 34553], [58765, 34570], [58766, 34612], [58767, 34623], [58768, 34615], [58769, 34619], [58770, 34597], [58771, 34601], [58772, 34586], [58773, 34656], [58774, 34655], [58775, 34680], [58776, 34636], [58777, 34638], [58778, 34676], [58779, 34647], [58780, 34664], [58781, 34670], [58782, 34649], [58783, 34643], [58784, 34659], [58785, 34666], [58786, 34821], [58787, 34722], [58788, 34719], [58789, 34690], [58790, 34735], [58791, 34763], [58792, 34749], [58793, 34752], [58794, 34768], [58795, 38614], [58796, 34731], [58797, 34756], [58798, 34739], [58799, 34759], [58800, 34758], [58801, 34747], [58802, 34799], [58803, 34802], [58804, 34784], [58805, 34831], [58806, 34829], [58807, 34814], [58808, 34806], [58809, 34807], [58810, 34830], [58811, 34770], [58812, 34833], [58813, 34838], [58814, 34837], [58815, 34850], [58816, 34849], [58817, 34865], [58818, 34870], [58819, 34873], [58820, 34855], [58821, 34875], [58822, 34884], [58823, 34882], [58824, 34898], [58825, 34905], [58826, 34910], [58827, 34914], [58828, 34923], [58829, 34945], [58830, 34942], [58831, 34974], [58832, 34933], [58833, 34941], [58834, 34997], [58835, 34930], [58836, 34946], [58837, 34967], [58838, 34962], [58839, 34990], [58840, 34969], [58841, 34978], [58842, 34957], [58843, 34980], [58844, 34992], [58845, 35007], [58846, 34993], [58847, 35011], [58848, 35012], [58849, 35028], [58850, 35032], [58851, 35033], [58852, 35037], [58853, 35065], [58854, 35074], [58855, 35068], [58856, 35060], [58857, 35048], [58858, 35058], [58859, 35076], [58860, 35084], [58861, 35082], [58862, 35091], [58863, 35139], [58864, 35102], [58865, 35109], [58866, 35114], [58867, 35115], [58868, 35137], [58869, 35140], [58870, 35131], [58871, 35126], [58872, 35128], [58873, 35148], [58874, 35101], [58875, 35168], [58876, 35166], [58944, 35174], [58945, 35172], [58946, 35181], [58947, 35178], [58948, 35183], [58949, 35188], [58950, 35191], [58951, 35198], [58952, 35203], [58953, 35208], [58954, 35210], [58955, 35219], [58956, 35224], [58957, 35233], [58958, 35241], [58959, 35238], [58960, 35244], [58961, 35247], [58962, 35250], [58963, 35258], [58964, 35261], [58965, 35263], [58966, 35264], [58967, 35290], [58968, 35292], [58969, 35293], [58970, 35303], [58971, 35316], [58972, 35320], [58973, 35331], [58974, 35350], [58975, 35344], [58976, 35340], [58977, 35355], [58978, 35357], [58979, 35365], [58980, 35382], [58981, 35393], [58982, 35419], [58983, 35410], [58984, 35398], [58985, 35400], [58986, 35452], [58987, 35437], [58988, 35436], [58989, 35426], [58990, 35461], [58991, 35458], [58992, 35460], [58993, 35496], [58994, 35489], [58995, 35473], [58996, 35493], [58997, 35494], [58998, 35482], [58999, 35491], [59000, 35524], [59001, 35533], [59002, 35522], [59003, 35546], [59004, 35563], [59005, 35571], [59006, 35559], [59008, 35556], [59009, 35569], [59010, 35604], [59011, 35552], [59012, 35554], [59013, 35575], [59014, 35550], [59015, 35547], [59016, 35596], [59017, 35591], [59018, 35610], [59019, 35553], [59020, 35606], [59021, 35600], [59022, 35607], [59023, 35616], [59024, 35635], [59025, 38827], [59026, 35622], [59027, 35627], [59028, 35646], [59029, 35624], [59030, 35649], [59031, 35660], [59032, 35663], [59033, 35662], [59034, 35657], [59035, 35670], [59036, 35675], [59037, 35674], [59038, 35691], [59039, 35679], [59040, 35692], [59041, 35695], [59042, 35700], [59043, 35709], [59044, 35712], [59045, 35724], [59046, 35726], [59047, 35730], [59048, 35731], [59049, 35734], [59050, 35737], [59051, 35738], [59052, 35898], [59053, 35905], [59054, 35903], [59055, 35912], [59056, 35916], [59057, 35918], [59058, 35920], [59059, 35925], [59060, 35938], [59061, 35948], [59062, 35960], [59063, 35962], [59064, 35970], [59065, 35977], [59066, 35973], [59067, 35978], [59068, 35981], [59069, 35982], [59070, 35988], [59071, 35964], [59072, 35992], [59073, 25117], [59074, 36013], [59075, 36010], [59076, 36029], [59077, 36018], [59078, 36019], [59079, 36014], [59080, 36022], [59081, 36040], [59082, 36033], [59083, 36068], [59084, 36067], [59085, 36058], [59086, 36093], [59087, 36090], [59088, 36091], [59089, 36100], [59090, 36101], [59091, 36106], [59092, 36103], [59093, 36111], [59094, 36109], [59095, 36112], [59096, 40782], [59097, 36115], [59098, 36045], [59099, 36116], [59100, 36118], [59101, 36199], [59102, 36205], [59103, 36209], [59104, 36211], [59105, 36225], [59106, 36249], [59107, 36290], [59108, 36286], [59109, 36282], [59110, 36303], [59111, 36314], [59112, 36310], [59113, 36300], [59114, 36315], [59115, 36299], [59116, 36330], [59117, 36331], [59118, 36319], [59119, 36323], [59120, 36348], [59121, 36360], [59122, 36361], [59123, 36351], [59124, 36381], [59125, 36382], [59126, 36368], [59127, 36383], [59128, 36418], [59129, 36405], [59130, 36400], [59131, 36404], [59132, 36426], [59200, 36423], [59201, 36425], [59202, 36428], [59203, 36432], [59204, 36424], [59205, 36441], [59206, 36452], [59207, 36448], [59208, 36394], [59209, 36451], [59210, 36437], [59211, 36470], [59212, 36466], [59213, 36476], [59214, 36481], [59215, 36487], [59216, 36485], [59217, 36484], [59218, 36491], [59219, 36490], [59220, 36499], [59221, 36497], [59222, 36500], [59223, 36505], [59224, 36522], [59225, 36513], [59226, 36524], [59227, 36528], [59228, 36550], [59229, 36529], [59230, 36542], [59231, 36549], [59232, 36552], [59233, 36555], [59234, 36571], [59235, 36579], [59236, 36604], [59237, 36603], [59238, 36587], [59239, 36606], [59240, 36618], [59241, 36613], [59242, 36629], [59243, 36626], [59244, 36633], [59245, 36627], [59246, 36636], [59247, 36639], [59248, 36635], [59249, 36620], [59250, 36646], [59251, 36659], [59252, 36667], [59253, 36665], [59254, 36677], [59255, 36674], [59256, 36670], [59257, 36684], [59258, 36681], [59259, 36678], [59260, 36686], [59261, 36695], [59262, 36700], [59264, 36706], [59265, 36707], [59266, 36708], [59267, 36764], [59268, 36767], [59269, 36771], [59270, 36781], [59271, 36783], [59272, 36791], [59273, 36826], [59274, 36837], [59275, 36834], [59276, 36842], [59277, 36847], [59278, 36999], [59279, 36852], [59280, 36869], [59281, 36857], [59282, 36858], [59283, 36881], [59284, 36885], [59285, 36897], [59286, 36877], [59287, 36894], [59288, 36886], [59289, 36875], [59290, 36903], [59291, 36918], [59292, 36917], [59293, 36921], [59294, 36856], [59295, 36943], [59296, 36944], [59297, 36945], [59298, 36946], [59299, 36878], [59300, 36937], [59301, 36926], [59302, 36950], [59303, 36952], [59304, 36958], [59305, 36968], [59306, 36975], [59307, 36982], [59308, 38568], [59309, 36978], [59310, 36994], [59311, 36989], [59312, 36993], [59313, 36992], [59314, 37002], [59315, 37001], [59316, 37007], [59317, 37032], [59318, 37039], [59319, 37041], [59320, 37045], [59321, 37090], [59322, 37092], [59323, 25160], [59324, 37083], [59325, 37122], [59326, 37138], [59327, 37145], [59328, 37170], [59329, 37168], [59330, 37194], [59331, 37206], [59332, 37208], [59333, 37219], [59334, 37221], [59335, 37225], [59336, 37235], [59337, 37234], [59338, 37259], [59339, 37257], [59340, 37250], [59341, 37282], [59342, 37291], [59343, 37295], [59344, 37290], [59345, 37301], [59346, 37300], [59347, 37306], [59348, 37312], [59349, 37313], [59350, 37321], [59351, 37323], [59352, 37328], [59353, 37334], [59354, 37343], [59355, 37345], [59356, 37339], [59357, 37372], [59358, 37365], [59359, 37366], [59360, 37406], [59361, 37375], [59362, 37396], [59363, 37420], [59364, 37397], [59365, 37393], [59366, 37470], [59367, 37463], [59368, 37445], [59369, 37449], [59370, 37476], [59371, 37448], [59372, 37525], [59373, 37439], [59374, 37451], [59375, 37456], [59376, 37532], [59377, 37526], [59378, 37523], [59379, 37531], [59380, 37466], [59381, 37583], [59382, 37561], [59383, 37559], [59384, 37609], [59385, 37647], [59386, 37626], [59387, 37700], [59388, 37678], [59456, 37657], [59457, 37666], [59458, 37658], [59459, 37667], [59460, 37690], [59461, 37685], [59462, 37691], [59463, 37724], [59464, 37728], [59465, 37756], [59466, 37742], [59467, 37718], [59468, 37808], [59469, 37804], [59470, 37805], [59471, 37780], [59472, 37817], [59473, 37846], [59474, 37847], [59475, 37864], [59476, 37861], [59477, 37848], [59478, 37827], [59479, 37853], [59480, 37840], [59481, 37832], [59482, 37860], [59483, 37914], [59484, 37908], [59485, 37907], [59486, 37891], [59487, 37895], [59488, 37904], [59489, 37942], [59490, 37931], [59491, 37941], [59492, 37921], [59493, 37946], [59494, 37953], [59495, 37970], [59496, 37956], [59497, 37979], [59498, 37984], [59499, 37986], [59500, 37982], [59501, 37994], [59502, 37417], [59503, 38000], [59504, 38005], [59505, 38007], [59506, 38013], [59507, 37978], [59508, 38012], [59509, 38014], [59510, 38017], [59511, 38015], [59512, 38274], [59513, 38279], [59514, 38282], [59515, 38292], [59516, 38294], [59517, 38296], [59518, 38297], [59520, 38304], [59521, 38312], [59522, 38311], [59523, 38317], [59524, 38332], [59525, 38331], [59526, 38329], [59527, 38334], [59528, 38346], [59529, 28662], [59530, 38339], [59531, 38349], [59532, 38348], [59533, 38357], [59534, 38356], [59535, 38358], [59536, 38364], [59537, 38369], [59538, 38373], [59539, 38370], [59540, 38433], [59541, 38440], [59542, 38446], [59543, 38447], [59544, 38466], [59545, 38476], [59546, 38479], [59547, 38475], [59548, 38519], [59549, 38492], [59550, 38494], [59551, 38493], [59552, 38495], [59553, 38502], [59554, 38514], [59555, 38508], [59556, 38541], [59557, 38552], [59558, 38549], [59559, 38551], [59560, 38570], [59561, 38567], [59562, 38577], [59563, 38578], [59564, 38576], [59565, 38580], [59566, 38582], [59567, 38584], [59568, 38585], [59569, 38606], [59570, 38603], [59571, 38601], [59572, 38605], [59573, 35149], [59574, 38620], [59575, 38669], [59576, 38613], [59577, 38649], [59578, 38660], [59579, 38662], [59580, 38664], [59581, 38675], [59582, 38670], [59583, 38673], [59584, 38671], [59585, 38678], [59586, 38681], [59587, 38692], [59588, 38698], [59589, 38704], [59590, 38713], [59591, 38717], [59592, 38718], [59593, 38724], [59594, 38726], [59595, 38728], [59596, 38722], [59597, 38729], [59598, 38748], [59599, 38752], [59600, 38756], [59601, 38758], [59602, 38760], [59603, 21202], [59604, 38763], [59605, 38769], [59606, 38777], [59607, 38789], [59608, 38780], [59609, 38785], [59610, 38778], [59611, 38790], [59612, 38795], [59613, 38799], [59614, 38800], [59615, 38812], [59616, 38824], [59617, 38822], [59618, 38819], [59619, 38835], [59620, 38836], [59621, 38851], [59622, 38854], [59623, 38856], [59624, 38859], [59625, 38876], [59626, 38893], [59627, 40783], [59628, 38898], [59629, 31455], [59630, 38902], [59631, 38901], [59632, 38927], [59633, 38924], [59634, 38968], [59635, 38948], [59636, 38945], [59637, 38967], [59638, 38973], [59639, 38982], [59640, 38991], [59641, 38987], [59642, 39019], [59643, 39023], [59644, 39024], [59712, 39025], [59713, 39028], [59714, 39027], [59715, 39082], [59716, 39087], [59717, 39089], [59718, 39094], [59719, 39108], [59720, 39107], [59721, 39110], [59722, 39145], [59723, 39147], [59724, 39171], [59725, 39177], [59726, 39186], [59727, 39188], [59728, 39192], [59729, 39201], [59730, 39197], [59731, 39198], [59732, 39204], [59733, 39200], [59734, 39212], [59735, 39214], [59736, 39229], [59737, 39230], [59738, 39234], [59739, 39241], [59740, 39237], [59741, 39248], [59742, 39243], [59743, 39249], [59744, 39250], [59745, 39244], [59746, 39253], [59747, 39319], [59748, 39320], [59749, 39333], [59750, 39341], [59751, 39342], [59752, 39356], [59753, 39391], [59754, 39387], [59755, 39389], [59756, 39384], [59757, 39377], [59758, 39405], [59759, 39406], [59760, 39409], [59761, 39410], [59762, 39419], [59763, 39416], [59764, 39425], [59765, 39439], [59766, 39429], [59767, 39394], [59768, 39449], [59769, 39467], [59770, 39479], [59771, 39493], [59772, 39490], [59773, 39488], [59774, 39491], [59776, 39486], [59777, 39509], [59778, 39501], [59779, 39515], [59780, 39511], [59781, 39519], [59782, 39522], [59783, 39525], [59784, 39524], [59785, 39529], [59786, 39531], [59787, 39530], [59788, 39597], [59789, 39600], [59790, 39612], [59791, 39616], [59792, 39631], [59793, 39633], [59794, 39635], [59795, 39636], [59796, 39646], [59797, 39647], [59798, 39650], [59799, 39651], [59800, 39654], [59801, 39663], [59802, 39659], [59803, 39662], [59804, 39668], [59805, 39665], [59806, 39671], [59807, 39675], [59808, 39686], [59809, 39704], [59810, 39706], [59811, 39711], [59812, 39714], [59813, 39715], [59814, 39717], [59815, 39719], [59816, 39720], [59817, 39721], [59818, 39722], [59819, 39726], [59820, 39727], [59821, 39730], [59822, 39748], [59823, 39747], [59824, 39759], [59825, 39757], [59826, 39758], [59827, 39761], [59828, 39768], [59829, 39796], [59830, 39827], [59831, 39811], [59832, 39825], [59833, 39830], [59834, 39831], [59835, 39839], [59836, 39840], [59837, 39848], [59838, 39860], [59839, 39872], [59840, 39882], [59841, 39865], [59842, 39878], [59843, 39887], [59844, 39889], [59845, 39890], [59846, 39907], [59847, 39906], [59848, 39908], [59849, 39892], [59850, 39905], [59851, 39994], [59852, 39922], [59853, 39921], [59854, 39920], [59855, 39957], [59856, 39956], [59857, 39945], [59858, 39955], [59859, 39948], [59860, 39942], [59861, 39944], [59862, 39954], [59863, 39946], [59864, 39940], [59865, 39982], [59866, 39963], [59867, 39973], [59868, 39972], [59869, 39969], [59870, 39984], [59871, 40007], [59872, 39986], [59873, 40006], [59874, 39998], [59875, 40026], [59876, 40032], [59877, 40039], [59878, 40054], [59879, 40056], [59880, 40167], [59881, 40172], [59882, 40176], [59883, 40201], [59884, 40200], [59885, 40171], [59886, 40195], [59887, 40198], [59888, 40234], [59889, 40230], [59890, 40367], [59891, 40227], [59892, 40223], [59893, 40260], [59894, 40213], [59895, 40210], [59896, 40257], [59897, 40255], [59898, 40254], [59899, 40262], [59900, 40264], [59968, 40285], [59969, 40286], [59970, 40292], [59971, 40273], [59972, 40272], [59973, 40281], [59974, 40306], [59975, 40329], [59976, 40327], [59977, 40363], [59978, 40303], [59979, 40314], [59980, 40346], [59981, 40356], [59982, 40361], [59983, 40370], [59984, 40388], [59985, 40385], [59986, 40379], [59987, 40376], [59988, 40378], [59989, 40390], [59990, 40399], [59991, 40386], [59992, 40409], [59993, 40403], [59994, 40440], [59995, 40422], [59996, 40429], [59997, 40431], [59998, 40445], [59999, 40474], [60000, 40475], [60001, 40478], [60002, 40565], [60003, 40569], [60004, 40573], [60005, 40577], [60006, 40584], [60007, 40587], [60008, 40588], [60009, 40594], [60010, 40597], [60011, 40593], [60012, 40605], [60013, 40613], [60014, 40617], [60015, 40632], [60016, 40618], [60017, 40621], [60018, 38753], [60019, 40652], [60020, 40654], [60021, 40655], [60022, 40656], [60023, 40660], [60024, 40668], [60025, 40670], [60026, 40669], [60027, 40672], [60028, 40677], [60029, 40680], [60030, 40687], [60032, 40692], [60033, 40694], [60034, 40695], [60035, 40697], [60036, 40699], [60037, 40700], [60038, 40701], [60039, 40711], [60040, 40712], [60041, 30391], [60042, 40725], [60043, 40737], [60044, 40748], [60045, 40766], [60046, 40778], [60047, 40786], [60048, 40788], [60049, 40803], [60050, 40799], [60051, 40800], [60052, 40801], [60053, 40806], [60054, 40807], [60055, 40812], [60056, 40810], [60057, 40823], [60058, 40818], [60059, 40822], [60060, 40853], [60061, 40860], [60062, 40864], [60063, 22575], [60064, 27079], [60065, 36953], [60066, 29796], [60067, 20956], [60068, 29081]]
            let result = [];
            for (const char of content) {
                let shiftCode;
                for (let i = 0; i < kanjiTable.length; i++) {
                    if (kanjiTable[i][1] === char.charCodeAt(0)) {
                        shiftCode = kanjiTable[i][0];
                    }
                }
                const reduced = shiftCode - (shiftCode >= 0xe040 ? 0xc140 : 0x8140);
                //Split the number into its most significant byte and its least significant byte
                const byte1 = (reduced >> 8) & 255;
                const byte2 = reduced & 255;
                const value = byte1 * 192 + byte2;
                result.push(value);
            }
            return result;
        }

        _pushBits(buffer, bits, remaining, x, n) {
            if (n >= remaining) {
                buffer.push(bits | (x >> (n -= remaining)));
                while (n >= 8) buffer.push((x >> (n -= 8)) & 255);
                bits = 0;
                remaining = 8;
            }
            if (n > 0) bits |= (x & ((1 << n) - 1)) << (remaining -= n);
            return { buffer, bits, remaining };
        }

        _EncodeData(value, version, capacity) {
            const that = this;
            const mode = that._getEncodingMode(value);
            let result;
            let buffer = [], bits = 0, remaining = 8;
            let content = 0;
            let ALPHANUMERIC_MAP = {};
            for (let i = 0; i < 45; ++i) {
                ALPHANUMERIC_MAP[
                    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:'.charAt(i)
                ] = i;
            }
            let lengthbits = that._getDataLengthBits(version)
            result = that._pushBits(buffer, bits, remaining, mode, 4);
            buffer = result.buffer, bits = result.bits, remaining = result.remaining;
            result = that._pushBits(buffer, bits, remaining, value.length, lengthbits);
            buffer = result.buffer, bits = result.bits, remaining = result.remaining;
            switch (mode) {
                case 1:
                    //Numeric Mode
                    for (var i = 2; i < value.length; i += 3) {
                        result = that._pushBits(buffer, bits, remaining, parseInt(value.substring(i - 2, i + 1), 10), 10);
                        buffer = result.buffer, bits = result.bits, remaining = result.remaining;
                    }
                    result = that._pushBits(buffer, bits, remaining, parseInt(value.substring(i - 2), 10), [0, 4, 7][value.length % 3]);
                    buffer = result.buffer, bits = result.bits, remaining = result.remaining;
                    break;

                case 2:
                    //Alphanumeric Mode
                    for (let i = 1; i < value.length; i += 2) {
                        result = that._pushBits(
                            buffer, bits, remaining,
                            ALPHANUMERIC_MAP[value.charAt(i - 1)] * 45 +
                            ALPHANUMERIC_MAP[value.charAt(i)],
                            11
                        );
                        buffer = result.buffer, bits = result.bits, remaining = result.remaining;
                    }
                    if (value.length % 2 === 1) {
                        result = that._pushBits(buffer, bits, remaining, ALPHANUMERIC_MAP[value.charAt(i - 1)], 6);
                        buffer = result.buffer, bits = result.bits, remaining = result.remaining;
                    }
                    break;

                case 4:
                    //Byte Mode
                    content = that._getByteValues(value);
                    content.forEach(el => {
                        result = that._pushBits(buffer, bits, remaining, el, 8)
                        buffer = result.buffer, bits = result.bits, remaining = result.remaining;
                    });
                    break;
                case 8:
                    //Kanji Mode
                    content = that._getKanjiValues(value);
                    content.forEach(el => {
                        result = that._pushBits(buffer, bits, remaining, el, 13)
                        buffer = result.buffer, bits = result.bits, remaining = result.remaining;
                    });
            }

            result = that._pushBits(buffer, bits, remaining, 0, 4);
            buffer = result.buffer, bits = result.bits, remaining = result.remaining;
            if (remaining < 8) buffer.push(bits);

            while (buffer.length + 1 < capacity) {
                buffer.push(0xec, 0x11);
            }
            if (buffer.length < capacity) {
                buffer.push(0xec);
            }
            return buffer;
        }

        _getErrorCorrectionCodeWords(poly, generatedPoly) {
            const that = this;
            const [GF_TABLE, GF_INVERSE_TABLE] = that._getGaloisFieldTable()
            let modulus = poly.slice(0);
            for (let i = 0; i < generatedPoly.length; ++i) modulus.push(0);
            for (let i = 0; i < poly.length;) {
                let quotient = GF_INVERSE_TABLE[modulus[i++]];
                if (quotient >= 0) {
                    for (let j = 0; j < generatedPoly.length; ++j) {
                        modulus[i + j] ^= GF_TABLE[(quotient + generatedPoly[j]) % 255];
                    }
                }
            }
            return modulus.slice(poly.length);
        }

        _augmentEccCodeWords(poly, blocksCount, generatedPoly) {
            const that = this;
            let subsizes = [];
            let subsize = (poly.length / blocksCount) | 0,
                subsize0 = 0;
            let pivot = blocksCount - (poly.length % blocksCount);
            for (let i = 0; i < pivot; ++i) {
                subsizes.push(subsize0);
                subsize0 += subsize;
            }
            for (let i = pivot; i < blocksCount; ++i) {
                subsizes.push(subsize0);
                subsize0 += subsize + 1;
            }
            subsizes.push(subsize0);

            let eccs = [];
            for (let i = 0; i < blocksCount; ++i) {
                eccs.push(
                    that._getErrorCorrectionCodeWords(poly.slice(subsizes[i], subsizes[i + 1]), generatedPoly)
                );
            }

            let result = [];
            let itemsperblock = (poly.length / blocksCount) | 0;
            for (let i = 0; i < itemsperblock; ++i) {
                for (let j = 0; j < blocksCount; ++j) {
                    result.push(poly[subsizes[j] + i]);
                }
            }
            for (let j = pivot; j < blocksCount; ++j) {
                result.push(poly[subsizes[j + 1] - 1]);
            }
            for (let i = 0; i < generatedPoly.length; ++i) {
                for (let j = 0; j < blocksCount; ++j) {
                    result.push(eccs[j][i]);
                }
            }
            return result;
        }

        _polyMulty(polyA, p, polyB, q) {
            let modulus = polyA << q;
            for (let i = p - 1; i >= 0; --i) {
                if ((modulus >> (q + i)) & 1) modulus ^= polyB << i;
            }
            return (polyA << q) | modulus;
        }

        _fillMatrix(matrix, reserved, y, x, h, w, bits) {
            for (let i = 0; i < h; ++i) {
                for (let j = 0; j < w; ++j) {
                    matrix[y + i][x + j] = (bits[i] >> j) & 1;
                    reserved[y + i][x + j] = 1;
                }
            }

            return { matrix, reserved };
        }

        _generateMatrix(version) {
            const that = this;
            let val = this._getValuesTable()[version];
            let size = that._getCodeSize(version);
            let result;
            let matrix = [],
                reserved = [];
            for (let i = 0; i < size; ++i) {
                matrix.push([]);
                reserved.push([]);
            }

            //Finder patterns
            result =
                that._fillMatrix(matrix, reserved, 0, 0, 9, 9, [0x7f, 0x41, 0x5d, 0x5d, 0x5d, 0x41, 0x17f, 0x00, 0x40]);
            matrix = result.matrix, reserved = result.reserved;
            result =
                that._fillMatrix(matrix, reserved, size - 8, 0, 8, 9, [0x100, 0x7f, 0x41, 0x5d, 0x5d, 0x5d, 0x41, 0x7f]);
            matrix = result.matrix, reserved = result.reserved;
            result =
                that._fillMatrix(matrix, reserved, 0, size - 8, 9, 8, [0xfe, 0x82, 0xba, 0xba, 0xba, 0x82, 0xfe, 0x00, 0x00]);
            matrix = result.matrix, reserved = result.reserved;
            //Timing patterns  
            for (let i = 9; i < size - 8; ++i) {
                matrix[6][i] = matrix[i][6] = ~i & 1;
                reserved[6][i] = reserved[i][6] = 1;
            }

            // alignment patterns
            let aligns = val[2];
            for (let i = 0; i < aligns.length; ++i) {
                let minj = i === 0 || i === aligns.length - 1 ? 1 : 0,
                    maxj = i === 0 ? aligns.length - 1 : aligns.length;
                for (let j = minj; j < maxj; ++j) {
                    result =
                        that._fillMatrix(matrix, reserved, aligns[i], aligns[j], 5, 5, [0x1f, 0x11, 0x15, 0x11, 0x1f]);
                    matrix = result.matrix, reserved = result.reserved;
                }
            }

            // version information
            if (version > 6) {
                let code = that._polyMulty(version, 6, 0x1f25, 12);
                let k = 0;
                for (let i = 0; i < 6; ++i) {
                    for (let j = 0; j < 3; ++j) {
                        matrix[i][size - 11 + j] = matrix[size - 11 + j][i] = (code >> k++) & 1;
                        reserved[i][size - 11 + j] = reserved[size - 11 + j][i] = 1;
                    }
                }
            }
            return { matrix, reserved };
        }

        _putData(matrix, reserved, buffer) {
            let k = 0;
            let dir = -1;
            for (let i = matrix.length - 1; i >= 0; i -= 2) {
                if (i === 6) --i;
                let jj = dir < 0 ? matrix.length - 1 : 0;
                for (let j = 0; j < matrix.length; ++j) {
                    for (let ii = i; ii > i - 2; --ii) {
                        if (!reserved[jj][ii]) {
                            matrix[jj][ii] = (buffer[k >> 3] >> (~k & 7)) & 1;
                            ++k;
                        }
                    }
                    jj += dir;
                }
                dir = -dir;
            }
            return matrix;
        }

        _maskData(matrix, reserved, mask) {
            const that = this;
            let maskFunc = that._getDataMaskingFunctions()[mask];
            var n = matrix.length;
            for (var i = 0; i < n; ++i) {
                for (var j = 0; j < n; ++j) {
                    if (!reserved[i][j]) matrix[i][j] ^= maskFunc(i, j);
                }
            }
            return matrix;
        }

        _formatData(matrix, reserved, errorLevel, mask) {
            const that = this;
            let len = matrix.length;
            let code = that._polyMulty((errorLevel << 3) | mask, 5, 0x537, 10) ^ 0x5412;
            for (let i = 0; i < 15; ++i) {
                let rows = [0, 1, 2, 3, 4, 5, 7, 8, len - 7, len - 6, len - 5, len - 4, len - 3, len - 2, len - 1,
                ][i];
                let columns = [len - 1, len - 2, len - 3, len - 4, len - 5, len - 6, len - 7, len - 8, 7, 5, 4, 3, 2, 1, 0,
                ][i];
                matrix[rows][8] = matrix[8][columns] = (code >> i) & 1;
            }
            return matrix;
        }

        _scoreGroup(groups) {
            let score = 0;
            for (let i = 0; i < groups.length; ++i) {
                if (groups[i] >= 5) score += 3 + (groups[i] - 5);
            }
            for (let i = 5; i < groups.length; i += 2) {
                let p = groups[i];
                if (
                    groups[i - 1] === p &&
                    groups[i - 2] === 3 * p &&
                    groups[i - 3] === p &&
                    groups[i - 4] === p &&
                    (groups[i - 5] >= 4 * p || groups[i + 1] >= 4 * p)
                ) {
                    score += 40;
                }
            }
            return score;
        }

        _scoreMatrix(matrix) {
            const that = this;
            let score = 0,
                blackCount = 0;
            for (let i = 0; i < matrix.length; ++i) {
                let row = matrix[i];
                let groups;

                groups = [0];
                for (let j = 0; j < matrix.length;) {
                    let k;
                    for (k = 0; j < matrix.length && row[j]; ++k) ++j;
                    groups.push(k);
                    for (k = 0; j < matrix.length && !row[j]; ++k) ++j;
                    groups.push(k);
                }
                score += that._scoreGroup(groups);

                groups = [0];
                for (let j = 0; j < matrix.length;) {
                    let k;
                    for (k = 0; j < matrix.length && matrix[j][i]; ++k) ++j;
                    groups.push(k);
                    for (k = 0; j < matrix.length && !matrix[j][i]; ++k) ++j;
                    groups.push(k);
                }
                score += that._scoreGroup(groups);

                let nextrow = matrix[i + 1] || [];
                blackCount += row[0];
                for (let j = 1; j < matrix.length; ++j) {
                    let p = row[j];
                    blackCount += p;
                    if (row[j - 1] === p && nextrow[j] === p && nextrow[j - 1] === p) {
                        score += 3;
                    }
                }
            }

            score += 10 * ((Math.abs(blackCount / matrix.length / matrix.length - 0.5) / 0.05) | 0);
            return score;
        }

        _getQRCode(data, errorCorrectionLevel) {
            const that = this;
            let version;
            for (version = 1; version <= 40; ++version) {
                if (data.length <= that._getDataLength(version, errorCorrectionLevel)) break;
            }
            let mask;
            let val = that._getValuesTable()[version];
            let buffer = that._EncodeData(data, version, that._getDataBits(version, errorCorrectionLevel) >> 3);
            buffer = that._augmentEccCodeWords(buffer, val[1][errorCorrectionLevel], that._getGaloisFieldPoly()[val[0][errorCorrectionLevel]]);
            let result = this._generateMatrix(version);
            let matrix = result.matrix;
            let reserved = result.reserved;
            matrix = that._putData(matrix, reserved, buffer);

            //Select best mask
            let test_matrix = [...matrix];
            test_matrix = that._maskData(test_matrix, reserved, 0);
            test_matrix = that._formatData(test_matrix, reserved, errorCorrectionLevel, 0);
            let bestmask = 0;
            let bestscore = that._scoreMatrix(test_matrix);
            test_matrix = that._maskData(test_matrix, reserved, 0);
            for (mask = 1; mask < 8; ++mask) {
                test_matrix = that._maskData(test_matrix, reserved, mask);
                test_matrix = that._formatData(test_matrix, reserved, errorCorrectionLevel, mask);
                let score = that._scoreMatrix(test_matrix);
                if (bestscore > score) {
                    bestscore = score;
                    bestmask = mask;
                }
                test_matrix = that._maskData(test_matrix, reserved, mask);
            }
            mask = bestmask;

            matrix = that._maskData(matrix, reserved, mask);
            matrix = that._formatData(matrix, reserved, errorCorrectionLevel, mask);
            return matrix;
        }

        _embedImage(x, y, image, container) {
            const that = this;
            if (that.renderAs === 'canvas') {
                const ctx = container.getContext('2d');
                let img = new Image;
                img.src = image;
                img.onload = function () {
                    ctx.drawImage(img, x, y, that.imageWidth, that.imageHeight);
                };
            }
            else if (that.renderAs === 'svg') {
                let svgimg = document.createElementNS('http://www.w3.org/2000/svg', 'image');
                svgimg.setAttributeNS(null, 'height', that.imageHeight);
                svgimg.setAttributeNS(null, 'width', that.imageWidth);
                svgimg.setAttributeNS('http://www.w3.org/1999/xlink', 'href', image);
                svgimg.setAttributeNS(null, 'x', x);
                svgimg.setAttributeNS(null, 'y', y);
                svgimg.setAttributeNS(null, 'visibility', 'visible');
                container.append(svgimg);
            }
        }

        isValid(isQRcode = false) {
            const that = this;
            const type = that.type;
            const val = that.value;

            let charactersRegex = /[^@!(一-龠)(ぁ-ゔ)(ァ-ヴー)\d0-9A-Z \$\%\*\+\-\.\/\:\=\?\^\{\|\}\~]/gm,
                patternValidity = true,
                lengthValidity = true,
                illegalChars = [];
            if (!isQRcode) {
                switch (type) {
                    case 'pharmacode': {
                        charactersRegex = /[^\d]/gm;
                        lengthValidity = val.length >= 1 && val.length <= 6;
                        patternValidity = +val >= 3 && +val <= 131070;
                        break;
                    }
                    case 'codabar': {
                        charactersRegex = /[^ABCD\d\$-]/gm;
                        patternValidity = /^[A-D]\d+[A-D]$/gm.test(val);
                        break;
                    }
                    case 'code128a': {
                        charactersRegex = /[^\x20-\x5F]/gm;
                        break;
                    }
                    case 'code128b': {
                        charactersRegex = /[^\x20-\x7F]/gm;
                        break;
                    }
                    case 'code128c': {
                        charactersRegex = /[^\d]/gm;
                        break;
                    }
                    case 'msi':
                    case 'msi10':
                    case 'msi11':
                    case 'msi1010':
                    case 'msi1110': {
                        charactersRegex = /[^\d]/gm;
                        break;
                    }
                    case 'ean13': {
                        charactersRegex = /[^\d]/gm;
                        lengthValidity = val.length === 13 || val.length === 12;
                        break;
                    }
                    case 'ean8': {
                        charactersRegex = /[^\d]/gm;
                        lengthValidity = val.length === 7 || val.length === 8;
                        break;
                    }
                    case 'code39': {
                        charactersRegex = /[^\w\*.]/gm;
                        patternValidity = /^\*\*$/gm.test(val);
                        break;
                    }
                    case 'code93': {
                        charactersRegex = /[^\w\*.\-\* \$+\/%]/gm;
                        patternValidity = /^\*\*$/gm.test(val);
                        break;
                    }
                }
            }

            illegalChars = val.match(charactersRegex);
            if (!patternValidity || illegalChars || !lengthValidity) {
                this.host.dispatchEvent(new CustomEvent("invalid", {
                    detail: {
                        value: val,
                        invalidCharacters: illegalChars,
                        patternValidity: patternValidity,
                        lengthValidity: lengthValidity
                    }
                }));
                return false;
            }
            return true;
        }

        /**
         * Refreshes the UI Component.
         */
        refresh() {
            const that = this;
            that._generateCode(that.renderAs);
        }

        _generateCode(renderAs, hidden = false) {
            const that = this;

            that.isValid(true);
            let level = { 'L': 1, 'M': 0, 'H': 2, 'Q': 3 }[that.errorLevel]
            let matrix = that._getQRCode(that.value, level);
            const qrCodeWidth = matrix.length * that.squareWidth;
            const qrCodeHeight =
                that.squareWidth * matrix.length +
                that.displayLabel *
                (that.labelMarginTop + that.labelMarginBottom + that.labelFontSize);
            let y = 0, container;

            if (renderAs === 'svg') {
                container = document.createElementNS(
                    'http://www.w3.org/2000/svg',
                    'svg'
                );
                container.setAttribute('width', qrCodeWidth);
                container.setAttribute('height', qrCodeHeight);
                container.setAttributeNS(
                    'http://www.w3.org/2000/xmlns/',
                    'xmlns:svg',
                    'http://www.w3.org/2000/svg'
                );
                container.style.backgroundColor = that.backgroundColor;
            }
            else if (renderAs === 'canvas') {
                container = document.createElement('canvas');
                container.setAttribute('width', qrCodeWidth);
                container.setAttribute('height', qrCodeHeight);
                let ctx = container.getContext('2d');
                ctx.fillStyle = that.backgroundColor;
                ctx.fillRect(0, 0, qrCodeWidth, qrCodeHeight);
            }
            if (hidden) {
                container.style.display = 'none';
            }

            container.classList.add('jqx-qrcode');
            that.host.firstChild.appendChild(container);
            if (that.displayLabel && that.labelPosition === 'top') {
                y += that.labelMarginTop + that.labelFontSize;
                renderAs === 'svg'
                    ? that._drawTextSVG(qrCodeWidth / 2, y, container)
                    : that._drawTextCanvas(qrCodeWidth / 2, y, container);
                y += that.labelMarginBottom;
            }

            for (let row = 0; row < matrix.length; row++) {
                for (let col = 0; col < matrix[row].length; col++) {
                    if (matrix[row][col] === 1) {
                        renderAs === 'svg'
                            ? that._drawStepSVG(that.lineColor, 1, col * that.squareWidth, row * that.squareWidth + y, container)
                            : that._drawStepCanvas(that.lineColor, 1, col * that.squareWidth, row * that.squareWidth + y, container);

                    }
                }
            }

            if (that.displayLabel && that.labelPosition === 'bottom') {
                y += that.squareWidth * matrix.length + that.labelMarginTop + that.labelFontSize;
                renderAs === 'svg'
                    ? that._drawTextSVG(qrCodeWidth / 2, y, container)
                    : that._drawTextCanvas(qrCodeWidth / 2, y, container);
            }

            if (that.embedImage) {
                const imageX = (qrCodeWidth - that.imageWidth) / 2;
                let imageY;
                if (that.displayLabel && that.labelPosition === 'top') {
                    imageY = (that.squareWidth * matrix.length - that.imageHeight) / 2 + that.labelFontSize + that.labelMarginTop; + that.labelMarginBottom
                }
                else {
                    imageY = (that.squareWidth * matrix.length - that.imageHeight) / 2;
                }
                that._embedImage(imageX, imageY, that.embedImage, container);
            }

            //Removes previous container
            if (that.host.firstChild.children.length === 2) {
                if (that.host.firstChild.children[1].style.display !== 'none') {
                    that.host.firstChild.removeChild(that.host.firstChild.children[0]);
                }
            }
        }


        /**
         * Draws the label text in SVG
         */
        _drawTextSVG(x, y, svg_container) {
            const that = this;

            let textElem = document.createElementNS(
                'http://www.w3.org/2000/svg',
                'text'
            );
            textElem.setAttribute('x', x);
            textElem.setAttribute('y', y);
            textElem.setAttribute('text-anchor', 'middle');
            textElem.classList.add('jqx-barcode-label');
            textElem.style.fill = that.labelColor;
            textElem.style.fontFamily = that.labelFont;
            textElem.style.fontSize = that.labelFontSize + 'px';
            textElem.textContent = that.value;
            svg_container.appendChild(textElem);
        }

        /**
         * Draws the label text in Canvas
         */
        _drawTextCanvas(x, y, canvas) {
            const that = this;
            let ctx = canvas.getContext('2d');
            ctx.font = `${that.labelFontSize}px ${that.labelFont}`;
            ctx.fillStyle = that.labelColor;
            ctx.textAlign = 'center';
            ctx.fillText(that.value, x, y);
        }

        /**
         * Draws a single unit bar in svg
         */
        _drawStepSVG(color, opacity, x, y, svg_container) {
            const that = this;
            if (that.squareWidth) {
                that.lineWidth = that.squareWidth;
                that.lineHeight = that.squareWidth;
            }
            let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rect.setAttribute('x', x);
            rect.setAttribute('y', y);
            rect.setAttribute('width', that.lineWidth);
            rect.setAttribute('height', that.lineHeight);
            rect.setAttribute('fill-opacity', opacity);
            rect.style.fill = color;
            svg_container.appendChild(rect);
        }

        /**
         * Draws a single unit bar in canvas
         */
        _drawStepCanvas(color, opacity, x, y, canvas) {
            const that = this;
            if (that.squareWidth) {
                that.lineWidth = that.squareWidth;
                that.lineHeight = that.squareWidth;
            }
            let ctx = canvas.getContext('2d');
            ctx.beginPath();
            ctx.globalAlpha = opacity;
            ctx.strokeStyle = color;
            ctx.fillStyle = color;
            ctx.rect(x, y, that.lineWidth, that.lineHeight);
            ctx.fill();
        }

        /**
         * Gets the Base64 String of the barcode
         *
         * @param {String} format Sets the dataURL format of the string. Allowed values are 'svg', 'png', 'jpg'
         */
        getDataURL(format) {
            const that = this;
            if (format === 'svg') {
                if (that.renderAs !== 'svg') {
                    that._generateCode('svg', true);
                }
                let svg = that.host.querySelector('svg');
                let data = new XMLSerializer().serializeToString(svg);
                let svgBlob = new Blob([data], {
                    type: 'image/svg+xml;charset=utf-8',
                });
                const url = URL.createObjectURL(svgBlob);
                return url;
            }
            else if (format === 'png' || format === 'jpg') {
                let file_format = format === 'png' ? 'png' : 'jpeg';
                if (that.renderAs !== 'canvas') {
                    that._generateCode('canvas', true);
                }
                let canvas = that.host.querySelector('canvas');
                const url = canvas.toDataURL(`image/${file_format}`);
                return url;
            }
        }

        /**
         * Gets the Base64 String of the barcode asynchronously
         *
         * @param {String} format Sets the dataURL format of the string. Allowed values are 'svg', 'png', 'jpg'
         */
        getDataURLAsync(format) {
            const that = this;
            return new Promise((resolve, reject) => {
                let url = that.getDataURL(format);
                if (url) {
                    resolve(url);
                }
                else {
                    reject();
                }
            });
        }

        /**
         * Export the barcode to a file
         *
         * @param {String} format Sets the export format of the barcode. Allowed values are 'svg', 'png', 'jpg'
         * @param {String} fileName Sets the name of the exported file
         */
        export(format = 'png', fileName = 'barcode') {
            const that = this;
            that.getDataURLAsync(format).then((url) => {
                let a = document.createElement('a');

                a.setAttribute('download', `${fileName}.${format}`);
                a.setAttribute('href', url);
                a.setAttribute('target', '_blank');

                a.click();
            });
        }
    }
})();






/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _jqxcore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7944);
/* harmony import */ var _jqxcore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jqxcore__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jqxdata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2142);
/* harmony import */ var _jqxdata__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jqxdata__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _jqxdata_export__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(471);
/* harmony import */ var _jqxdata_export__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_jqxdata_export__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _jqxexport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7749);
/* harmony import */ var _jqxexport__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_jqxexport__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _jqxbarcode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7204);
/* harmony import */ var _jqxbarcode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_jqxbarcode__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _jqxqrcode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6752);
/* harmony import */ var _jqxqrcode__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_jqxqrcode__WEBPACK_IMPORTED_MODULE_5__);






})();

/******/ })()
;