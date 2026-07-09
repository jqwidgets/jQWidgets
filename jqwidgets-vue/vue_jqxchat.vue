<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
    import '../jqwidgets/jqxcore.js';

    export default {
        props: {
            accentColor: String,
            apiKey: String,
            botAvatar: String,
            botName: String,
            colorScheme: String,
            disabled: {
                default: false,
                type: Boolean
            },
            enableClear: {
                default: true,
                type: Boolean
            },
            enableCopyCode: {
                default: true,
                type: Boolean
            },
            enableStop: {
                default: true,
                type: Boolean
            },
            headers: Object,
            height: [Number, String],
            launcherIcon: String,
            launcherPosition: String,
            maxTokens: Number,
            messages: Array,
            mode: String,
            model: String,
            open: {
                default: false,
                type: Boolean
            },
            placeHolder: String,
            provider: String,
            proxyUrl: String,
            rtl: {
                default: false,
                type: Boolean
            },
            sendButtonIcon: {
                default: true,
                type: Boolean
            },
            sendButtonLabel: String,
            sendRequest: Any,
            showAvatars: {
                default: true,
                type: Boolean
            },
            showHeader: {
                default: true,
                type: Boolean
            },
            showHeaderAvatar: {
                default: true,
                type: Boolean
            },
            showTimestamps: {
                default: true,
                type: Boolean
            },
            starterPrompts: Array,
            statusText: String,
            stream: {
                default: true,
                type: Boolean
            },
            subtitle: String,
            system: String,
            theme: String,
            title: String,
            typingIndicator: {
                default: true,
                type: Boolean
            },
            userAvatar: String,
            userName: String,
            welcomeMessage: String,
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        created: function () {
            this.id = 'jqxChat' + JQXLite.generateID();
            this.componentSelector = '#' + this.id;
        },
        mounted: function () {
            if (this.autoCreate) this.__createComponent__();
        },
        methods: {
            createComponent: function (options) {
                if (!this.autoCreate) this.__createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            },
            setOptions: function (options) {
                JQXLite(this.componentSelector).jqxChat(options);
            },
            getOptions: function () {
                const usedProps = Object.keys(this.__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(this.componentSelector).jqxChat(usedProps[i]);
                }
                return resultToReturn;
            },
            sendMessage: function(text) {
                JQXLite(this.componentSelector).jqxChat('sendMessage', text);  
            },
            stop: function() {
                JQXLite(this.componentSelector).jqxChat('stop');  
            },
            addMessage: function(role, content) {
                JQXLite(this.componentSelector).jqxChat('addMessage', role, content);  
            },
            appendDelta: function(delta) {
                JQXLite(this.componentSelector).jqxChat('appendDelta', delta);  
            },
            getMessages: function() {
                return JQXLite(this.componentSelector).jqxChat('getMessages');  
            },
            clearConversation: function() {
                JQXLite(this.componentSelector).jqxChat('clearConversation');  
            },
            focus: function() {
                JQXLite(this.componentSelector).jqxChat('focus');  
            },
            openPopup: function() {
                JQXLite(this.componentSelector).jqxChat('openPopup');  
            },
            closePopup: function() {
                JQXLite(this.componentSelector).jqxChat('closePopup');  
            },
            toggle: function() {
                JQXLite(this.componentSelector).jqxChat('toggle');  
            },
            val: function(value) {
                if (value !== undefined) {
                    JQXLite(this.componentSelector).jqxChat('val',  value)
                } else {
                    return JQXLite(this.componentSelector).jqxChat('val');
                }
            },
            render: function() {
                JQXLite(this.componentSelector).jqxChat('render');  
            },
            refresh: function() {
                JQXLite(this.componentSelector).jqxChat('refresh');  
            },
            destroy: function() {
                JQXLite(this.componentSelector).jqxChat('destroy');  
            },
            _accentColor: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChat('accentColor', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChat('accentColor');
                }
            },
            _apiKey: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChat('apiKey', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChat('apiKey');
                }
            },
            _botAvatar: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChat('botAvatar', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChat('botAvatar');
                }
            },
            _botName: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChat('botName', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChat('botName');
                }
            },
            _colorScheme: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChat('colorScheme', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChat('colorScheme');
                }
            },
            _disabled: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChat('disabled', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChat('disabled');
                }
            },
            _enableClear: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChat('enableClear', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChat('enableClear');
                }
            },
            _enableCopyCode: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChat('enableCopyCode', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChat('enableCopyCode');
                }
            },
            _enableStop: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChat('enableStop', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChat('enableStop');
                }
            },
            _headers: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChat('headers', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChat('headers');
                }
            },
            _height: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChat('height', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChat('height');
                }
            },
            _launcherIcon: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChat('launcherIcon', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChat('launcherIcon');
                }
            },
            _launcherPosition: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChat('launcherPosition', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChat('launcherPosition');
                }
            },
            _maxTokens: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChat('maxTokens', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChat('maxTokens');
                }
            },
            _messages: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChat('messages', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChat('messages');
                }
            },
            _mode: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChat('mode', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChat('mode');
                }
            },
            _model: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChat('model', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChat('model');
                }
            },
            _open: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChat('open', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChat('open');
                }
            },
            _placeHolder: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChat('placeHolder', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChat('placeHolder');
                }
            },
            _provider: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChat('provider', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChat('provider');
                }
            },
            _proxyUrl: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChat('proxyUrl', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChat('proxyUrl');
                }
            },
            _rtl: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChat('rtl', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChat('rtl');
                }
            },
            _sendButtonIcon: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChat('sendButtonIcon', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChat('sendButtonIcon');
                }
            },
            _sendButtonLabel: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChat('sendButtonLabel', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChat('sendButtonLabel');
                }
            },
            _sendRequest: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChat('sendRequest', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChat('sendRequest');
                }
            },
            _showAvatars: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChat('showAvatars', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChat('showAvatars');
                }
            },
            _showHeader: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChat('showHeader', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChat('showHeader');
                }
            },
            _showHeaderAvatar: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChat('showHeaderAvatar', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChat('showHeaderAvatar');
                }
            },
            _showTimestamps: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChat('showTimestamps', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChat('showTimestamps');
                }
            },
            _starterPrompts: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChat('starterPrompts', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChat('starterPrompts');
                }
            },
            _statusText: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChat('statusText', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChat('statusText');
                }
            },
            _stream: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChat('stream', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChat('stream');
                }
            },
            _subtitle: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChat('subtitle', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChat('subtitle');
                }
            },
            _system: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChat('system', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChat('system');
                }
            },
            _theme: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChat('theme', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChat('theme');
                }
            },
            _title: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChat('title', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChat('title');
                }
            },
            _typingIndicator: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChat('typingIndicator', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChat('typingIndicator');
                }
            },
            _userAvatar: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChat('userAvatar', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChat('userAvatar');
                }
            },
            _userName: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChat('userName', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChat('userName');
                }
            },
            _welcomeMessage: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChat('welcomeMessage', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChat('welcomeMessage');
                }
            },
            _width: function(arg) {
                if (arg !== undefined) {
                    JQXLite(this.componentSelector).jqxChat('width', arg)
                } else {
                    return JQXLite(this.componentSelector).jqxChat('width');
                }
            },
            __createComponent__: function (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = this.__manageProps__();
                JQXLite(this.componentSelector).jqxChat(widgetOptions);
                this.__extendProps__();
                this.__wireEvents__();
            },
            __manageProps__: function () {
                const widgetProps = ['accentColor','apiKey','botAvatar','botName','colorScheme','disabled','enableClear','enableCopyCode','enableStop','headers','height','launcherIcon','launcherPosition','maxTokens','messages','mode','model','open','placeHolder','provider','proxyUrl','rtl','sendButtonIcon','sendButtonLabel','sendRequest','showAvatars','showHeader','showHeaderAvatar','showTimestamps','starterPrompts','statusText','stream','subtitle','system','theme','title','typingIndicator','userAvatar','userName','welcomeMessage','width'];
                const componentProps = this.$options.propsData;
                let options = {};

                for (let prop in componentProps) {
                    if (widgetProps.indexOf(prop) !== -1) {
                        options[prop] = componentProps[prop];
                    }
                }
                return options;
            },
            __extendProps__: function () {
                const that = this;

                Object.defineProperty(that, 'accentColor', {
                    get: function() {
                        return that._accentColor();
                    },
                    set: function(newValue) {
                        that._accentColor(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'apiKey', {
                    get: function() {
                        return that._apiKey();
                    },
                    set: function(newValue) {
                        that._apiKey(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'botAvatar', {
                    get: function() {
                        return that._botAvatar();
                    },
                    set: function(newValue) {
                        that._botAvatar(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'botName', {
                    get: function() {
                        return that._botName();
                    },
                    set: function(newValue) {
                        that._botName(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'colorScheme', {
                    get: function() {
                        return that._colorScheme();
                    },
                    set: function(newValue) {
                        that._colorScheme(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'disabled', {
                    get: function() {
                        return that._disabled();
                    },
                    set: function(newValue) {
                        that._disabled(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'enableClear', {
                    get: function() {
                        return that._enableClear();
                    },
                    set: function(newValue) {
                        that._enableClear(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'enableCopyCode', {
                    get: function() {
                        return that._enableCopyCode();
                    },
                    set: function(newValue) {
                        that._enableCopyCode(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'enableStop', {
                    get: function() {
                        return that._enableStop();
                    },
                    set: function(newValue) {
                        that._enableStop(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'headers', {
                    get: function() {
                        return that._headers();
                    },
                    set: function(newValue) {
                        that._headers(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'height', {
                    get: function() {
                        return that._height();
                    },
                    set: function(newValue) {
                        that._height(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'launcherIcon', {
                    get: function() {
                        return that._launcherIcon();
                    },
                    set: function(newValue) {
                        that._launcherIcon(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'launcherPosition', {
                    get: function() {
                        return that._launcherPosition();
                    },
                    set: function(newValue) {
                        that._launcherPosition(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'maxTokens', {
                    get: function() {
                        return that._maxTokens();
                    },
                    set: function(newValue) {
                        that._maxTokens(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'messages', {
                    get: function() {
                        return that._messages();
                    },
                    set: function(newValue) {
                        that._messages(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'mode', {
                    get: function() {
                        return that._mode();
                    },
                    set: function(newValue) {
                        that._mode(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'model', {
                    get: function() {
                        return that._model();
                    },
                    set: function(newValue) {
                        that._model(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'open', {
                    get: function() {
                        return that._open();
                    },
                    set: function(newValue) {
                        that._open(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'placeHolder', {
                    get: function() {
                        return that._placeHolder();
                    },
                    set: function(newValue) {
                        that._placeHolder(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'provider', {
                    get: function() {
                        return that._provider();
                    },
                    set: function(newValue) {
                        that._provider(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'proxyUrl', {
                    get: function() {
                        return that._proxyUrl();
                    },
                    set: function(newValue) {
                        that._proxyUrl(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'rtl', {
                    get: function() {
                        return that._rtl();
                    },
                    set: function(newValue) {
                        that._rtl(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'sendButtonIcon', {
                    get: function() {
                        return that._sendButtonIcon();
                    },
                    set: function(newValue) {
                        that._sendButtonIcon(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'sendButtonLabel', {
                    get: function() {
                        return that._sendButtonLabel();
                    },
                    set: function(newValue) {
                        that._sendButtonLabel(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'sendRequest', {
                    get: function() {
                        return that._sendRequest();
                    },
                    set: function(newValue) {
                        that._sendRequest(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'showAvatars', {
                    get: function() {
                        return that._showAvatars();
                    },
                    set: function(newValue) {
                        that._showAvatars(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'showHeader', {
                    get: function() {
                        return that._showHeader();
                    },
                    set: function(newValue) {
                        that._showHeader(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'showHeaderAvatar', {
                    get: function() {
                        return that._showHeaderAvatar();
                    },
                    set: function(newValue) {
                        that._showHeaderAvatar(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'showTimestamps', {
                    get: function() {
                        return that._showTimestamps();
                    },
                    set: function(newValue) {
                        that._showTimestamps(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'starterPrompts', {
                    get: function() {
                        return that._starterPrompts();
                    },
                    set: function(newValue) {
                        that._starterPrompts(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'statusText', {
                    get: function() {
                        return that._statusText();
                    },
                    set: function(newValue) {
                        that._statusText(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'stream', {
                    get: function() {
                        return that._stream();
                    },
                    set: function(newValue) {
                        that._stream(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'subtitle', {
                    get: function() {
                        return that._subtitle();
                    },
                    set: function(newValue) {
                        that._subtitle(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'system', {
                    get: function() {
                        return that._system();
                    },
                    set: function(newValue) {
                        that._system(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'theme', {
                    get: function() {
                        return that._theme();
                    },
                    set: function(newValue) {
                        that._theme(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'title', {
                    get: function() {
                        return that._title();
                    },
                    set: function(newValue) {
                        that._title(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'typingIndicator', {
                    get: function() {
                        return that._typingIndicator();
                    },
                    set: function(newValue) {
                        that._typingIndicator(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'userAvatar', {
                    get: function() {
                        return that._userAvatar();
                    },
                    set: function(newValue) {
                        that._userAvatar(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'userName', {
                    get: function() {
                        return that._userName();
                    },
                    set: function(newValue) {
                        that._userName(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'welcomeMessage', {
                    get: function() {
                        return that._welcomeMessage();
                    },
                    set: function(newValue) {
                        that._welcomeMessage(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(that, 'width', {
                    get: function() {
                        return that._width();
                    },
                    set: function(newValue) {
                        that._width(newValue);
                    },
                    enumerable: true,
                    configurable: true
                });
            },
            __wireEvents__: function () {
                const that = this;

                JQXLite(this.componentSelector).on('messageSent', function (event) { that.$emit('messageSent', event); });
                JQXLite(this.componentSelector).on('responseStart', function (event) { that.$emit('responseStart', event); });
                JQXLite(this.componentSelector).on('responseDelta', function (event) { that.$emit('responseDelta', event); });
                JQXLite(this.componentSelector).on('messageReceived', function (event) { that.$emit('messageReceived', event); });
                JQXLite(this.componentSelector).on('responseEnd', function (event) { that.$emit('responseEnd', event); });
                JQXLite(this.componentSelector).on('error', function (event) { that.$emit('error', event); });
                JQXLite(this.componentSelector).on('open', function (event) { that.$emit('open', event); });
                JQXLite(this.componentSelector).on('close', function (event) { that.$emit('close', event); });
                JQXLite(this.componentSelector).on('stop', function (event) { that.$emit('stop', event); });
                JQXLite(this.componentSelector).on('create', function (event) { that.$emit('create', event); });
            }
        }
    }
</script>
