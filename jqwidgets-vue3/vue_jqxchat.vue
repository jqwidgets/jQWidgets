<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
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
        emits: ["messageSent","responseStart","responseDelta","messageReceived","responseEnd","error","open","close","stop","create"],
        setup(props, context) {
			const id = "jqxChat" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxChat(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxChat(usedProps[i]);
                }
                return resultToReturn;
            }
            function sendMessage(text) {
                JQXLite(componentSelector).jqxChat('sendMessage', text);  
            }
            function stop() {
                JQXLite(componentSelector).jqxChat('stop');  
            }
            function addMessage(role, content) {
                JQXLite(componentSelector).jqxChat('addMessage', role, content);  
            }
            function appendDelta(delta) {
                JQXLite(componentSelector).jqxChat('appendDelta', delta);  
            }
            function getMessages() {
                return JQXLite(componentSelector).jqxChat('getMessages');  
            }
            function clearConversation() {
                JQXLite(componentSelector).jqxChat('clearConversation');  
            }
            function focus() {
                JQXLite(componentSelector).jqxChat('focus');  
            }
            function openPopup() {
                JQXLite(componentSelector).jqxChat('openPopup');  
            }
            function closePopup() {
                JQXLite(componentSelector).jqxChat('closePopup');  
            }
            function toggle() {
                JQXLite(componentSelector).jqxChat('toggle');  
            }
            function val(value) {
                if (value !== undefined) {
                    JQXLite(componentSelector).jqxChat('val',  value)
                } else {
                    return JQXLite(componentSelector).jqxChat('val');
                }
            }
            function render() {
                JQXLite(componentSelector).jqxChat('render');  
            }
            function refresh() {
                JQXLite(componentSelector).jqxChat('refresh');  
            }
            function destroy() {
                JQXLite(componentSelector).jqxChat('destroy');  
            }
            function _accentColor (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChat('accentColor', arg)
                } else {
                    return JQXLite(componentSelector).jqxChat('accentColor');
                }
            }
            function _apiKey (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChat('apiKey', arg)
                } else {
                    return JQXLite(componentSelector).jqxChat('apiKey');
                }
            }
            function _botAvatar (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChat('botAvatar', arg)
                } else {
                    return JQXLite(componentSelector).jqxChat('botAvatar');
                }
            }
            function _botName (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChat('botName', arg)
                } else {
                    return JQXLite(componentSelector).jqxChat('botName');
                }
            }
            function _colorScheme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChat('colorScheme', arg)
                } else {
                    return JQXLite(componentSelector).jqxChat('colorScheme');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChat('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxChat('disabled');
                }
            }
            function _enableClear (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChat('enableClear', arg)
                } else {
                    return JQXLite(componentSelector).jqxChat('enableClear');
                }
            }
            function _enableCopyCode (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChat('enableCopyCode', arg)
                } else {
                    return JQXLite(componentSelector).jqxChat('enableCopyCode');
                }
            }
            function _enableStop (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChat('enableStop', arg)
                } else {
                    return JQXLite(componentSelector).jqxChat('enableStop');
                }
            }
            function _headers (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChat('headers', arg)
                } else {
                    return JQXLite(componentSelector).jqxChat('headers');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChat('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxChat('height');
                }
            }
            function _launcherIcon (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChat('launcherIcon', arg)
                } else {
                    return JQXLite(componentSelector).jqxChat('launcherIcon');
                }
            }
            function _launcherPosition (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChat('launcherPosition', arg)
                } else {
                    return JQXLite(componentSelector).jqxChat('launcherPosition');
                }
            }
            function _maxTokens (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChat('maxTokens', arg)
                } else {
                    return JQXLite(componentSelector).jqxChat('maxTokens');
                }
            }
            function _messages (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChat('messages', arg)
                } else {
                    return JQXLite(componentSelector).jqxChat('messages');
                }
            }
            function _mode (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChat('mode', arg)
                } else {
                    return JQXLite(componentSelector).jqxChat('mode');
                }
            }
            function _model (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChat('model', arg)
                } else {
                    return JQXLite(componentSelector).jqxChat('model');
                }
            }
            function _open (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChat('open', arg)
                } else {
                    return JQXLite(componentSelector).jqxChat('open');
                }
            }
            function _placeHolder (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChat('placeHolder', arg)
                } else {
                    return JQXLite(componentSelector).jqxChat('placeHolder');
                }
            }
            function _provider (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChat('provider', arg)
                } else {
                    return JQXLite(componentSelector).jqxChat('provider');
                }
            }
            function _proxyUrl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChat('proxyUrl', arg)
                } else {
                    return JQXLite(componentSelector).jqxChat('proxyUrl');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChat('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxChat('rtl');
                }
            }
            function _sendButtonIcon (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChat('sendButtonIcon', arg)
                } else {
                    return JQXLite(componentSelector).jqxChat('sendButtonIcon');
                }
            }
            function _sendButtonLabel (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChat('sendButtonLabel', arg)
                } else {
                    return JQXLite(componentSelector).jqxChat('sendButtonLabel');
                }
            }
            function _sendRequest (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChat('sendRequest', arg)
                } else {
                    return JQXLite(componentSelector).jqxChat('sendRequest');
                }
            }
            function _showAvatars (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChat('showAvatars', arg)
                } else {
                    return JQXLite(componentSelector).jqxChat('showAvatars');
                }
            }
            function _showHeader (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChat('showHeader', arg)
                } else {
                    return JQXLite(componentSelector).jqxChat('showHeader');
                }
            }
            function _showHeaderAvatar (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChat('showHeaderAvatar', arg)
                } else {
                    return JQXLite(componentSelector).jqxChat('showHeaderAvatar');
                }
            }
            function _showTimestamps (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChat('showTimestamps', arg)
                } else {
                    return JQXLite(componentSelector).jqxChat('showTimestamps');
                }
            }
            function _starterPrompts (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChat('starterPrompts', arg)
                } else {
                    return JQXLite(componentSelector).jqxChat('starterPrompts');
                }
            }
            function _statusText (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChat('statusText', arg)
                } else {
                    return JQXLite(componentSelector).jqxChat('statusText');
                }
            }
            function _stream (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChat('stream', arg)
                } else {
                    return JQXLite(componentSelector).jqxChat('stream');
                }
            }
            function _subtitle (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChat('subtitle', arg)
                } else {
                    return JQXLite(componentSelector).jqxChat('subtitle');
                }
            }
            function _system (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChat('system', arg)
                } else {
                    return JQXLite(componentSelector).jqxChat('system');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChat('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxChat('theme');
                }
            }
            function _title (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChat('title', arg)
                } else {
                    return JQXLite(componentSelector).jqxChat('title');
                }
            }
            function _typingIndicator (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChat('typingIndicator', arg)
                } else {
                    return JQXLite(componentSelector).jqxChat('typingIndicator');
                }
            }
            function _userAvatar (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChat('userAvatar', arg)
                } else {
                    return JQXLite(componentSelector).jqxChat('userAvatar');
                }
            }
            function _userName (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChat('userName', arg)
                } else {
                    return JQXLite(componentSelector).jqxChat('userName');
                }
            }
            function _welcomeMessage (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChat('welcomeMessage', arg)
                } else {
                    return JQXLite(componentSelector).jqxChat('welcomeMessage');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxChat('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxChat('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxChat(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['accentColor','apiKey','botAvatar','botName','colorScheme','disabled','enableClear','enableCopyCode','enableStop','headers','height','launcherIcon','launcherPosition','maxTokens','messages','mode','model','open','placeHolder','provider','proxyUrl','rtl','sendButtonIcon','sendButtonLabel','sendRequest','showAvatars','showHeader','showHeaderAvatar','showTimestamps','starterPrompts','statusText','stream','subtitle','system','theme','title','typingIndicator','userAvatar','userName','welcomeMessage','width'];
                const componentProps = props;
                let options = {};

                for (let prop in componentProps) {
                    if (widgetProps.indexOf(prop) !== -1 && componentProps[prop] !== undefined) {
                        options[prop] = componentProps[prop];
                    }
                }
                return options;
            }
            const options = {
                 get accentColor() {
                     return _accentColor();
                 },
                 set accentColor(newValue) {
                     _accentColor(newValue);
                 },
                 get apiKey() {
                     return _apiKey();
                 },
                 set apiKey(newValue) {
                     _apiKey(newValue);
                 },
                 get botAvatar() {
                     return _botAvatar();
                 },
                 set botAvatar(newValue) {
                     _botAvatar(newValue);
                 },
                 get botName() {
                     return _botName();
                 },
                 set botName(newValue) {
                     _botName(newValue);
                 },
                 get colorScheme() {
                     return _colorScheme();
                 },
                 set colorScheme(newValue) {
                     _colorScheme(newValue);
                 },
                 get disabled() {
                     return _disabled();
                 },
                 set disabled(newValue) {
                     _disabled(newValue);
                 },
                 get enableClear() {
                     return _enableClear();
                 },
                 set enableClear(newValue) {
                     _enableClear(newValue);
                 },
                 get enableCopyCode() {
                     return _enableCopyCode();
                 },
                 set enableCopyCode(newValue) {
                     _enableCopyCode(newValue);
                 },
                 get enableStop() {
                     return _enableStop();
                 },
                 set enableStop(newValue) {
                     _enableStop(newValue);
                 },
                 get headers() {
                     return _headers();
                 },
                 set headers(newValue) {
                     _headers(newValue);
                 },
                 get height() {
                     return _height();
                 },
                 set height(newValue) {
                     _height(newValue);
                 },
                 get launcherIcon() {
                     return _launcherIcon();
                 },
                 set launcherIcon(newValue) {
                     _launcherIcon(newValue);
                 },
                 get launcherPosition() {
                     return _launcherPosition();
                 },
                 set launcherPosition(newValue) {
                     _launcherPosition(newValue);
                 },
                 get maxTokens() {
                     return _maxTokens();
                 },
                 set maxTokens(newValue) {
                     _maxTokens(newValue);
                 },
                 get messages() {
                     return _messages();
                 },
                 set messages(newValue) {
                     _messages(newValue);
                 },
                 get mode() {
                     return _mode();
                 },
                 set mode(newValue) {
                     _mode(newValue);
                 },
                 get model() {
                     return _model();
                 },
                 set model(newValue) {
                     _model(newValue);
                 },
                 get open() {
                     return _open();
                 },
                 set open(newValue) {
                     _open(newValue);
                 },
                 get placeHolder() {
                     return _placeHolder();
                 },
                 set placeHolder(newValue) {
                     _placeHolder(newValue);
                 },
                 get provider() {
                     return _provider();
                 },
                 set provider(newValue) {
                     _provider(newValue);
                 },
                 get proxyUrl() {
                     return _proxyUrl();
                 },
                 set proxyUrl(newValue) {
                     _proxyUrl(newValue);
                 },
                 get rtl() {
                     return _rtl();
                 },
                 set rtl(newValue) {
                     _rtl(newValue);
                 },
                 get sendButtonIcon() {
                     return _sendButtonIcon();
                 },
                 set sendButtonIcon(newValue) {
                     _sendButtonIcon(newValue);
                 },
                 get sendButtonLabel() {
                     return _sendButtonLabel();
                 },
                 set sendButtonLabel(newValue) {
                     _sendButtonLabel(newValue);
                 },
                 get sendRequest() {
                     return _sendRequest();
                 },
                 set sendRequest(newValue) {
                     _sendRequest(newValue);
                 },
                 get showAvatars() {
                     return _showAvatars();
                 },
                 set showAvatars(newValue) {
                     _showAvatars(newValue);
                 },
                 get showHeader() {
                     return _showHeader();
                 },
                 set showHeader(newValue) {
                     _showHeader(newValue);
                 },
                 get showHeaderAvatar() {
                     return _showHeaderAvatar();
                 },
                 set showHeaderAvatar(newValue) {
                     _showHeaderAvatar(newValue);
                 },
                 get showTimestamps() {
                     return _showTimestamps();
                 },
                 set showTimestamps(newValue) {
                     _showTimestamps(newValue);
                 },
                 get starterPrompts() {
                     return _starterPrompts();
                 },
                 set starterPrompts(newValue) {
                     _starterPrompts(newValue);
                 },
                 get statusText() {
                     return _statusText();
                 },
                 set statusText(newValue) {
                     _statusText(newValue);
                 },
                 get stream() {
                     return _stream();
                 },
                 set stream(newValue) {
                     _stream(newValue);
                 },
                 get subtitle() {
                     return _subtitle();
                 },
                 set subtitle(newValue) {
                     _subtitle(newValue);
                 },
                 get system() {
                     return _system();
                 },
                 set system(newValue) {
                     _system(newValue);
                 },
                 get theme() {
                     return _theme();
                 },
                 set theme(newValue) {
                     _theme(newValue);
                 },
                 get title() {
                     return _title();
                 },
                 set title(newValue) {
                     _title(newValue);
                 },
                 get typingIndicator() {
                     return _typingIndicator();
                 },
                 set typingIndicator(newValue) {
                     _typingIndicator(newValue);
                 },
                 get userAvatar() {
                     return _userAvatar();
                 },
                 set userAvatar(newValue) {
                     _userAvatar(newValue);
                 },
                 get userName() {
                     return _userName();
                 },
                 set userName(newValue) {
                     _userName(newValue);
                 },
                 get welcomeMessage() {
                     return _welcomeMessage();
                 },
                 set welcomeMessage(newValue) {
                     _welcomeMessage(newValue);
                 },
                 get width() {
                     return _width();
                 },
                 set width(newValue) {
                     _width(newValue);
                 },
            }
            function __wireEvents__() {
                const that = context;

                JQXLite(componentSelector).on('messageSent', function (event) { that.emit('messageSent', event); });
                JQXLite(componentSelector).on('responseStart', function (event) { that.emit('responseStart', event); });
                JQXLite(componentSelector).on('responseDelta', function (event) { that.emit('responseDelta', event); });
                JQXLite(componentSelector).on('messageReceived', function (event) { that.emit('messageReceived', event); });
                JQXLite(componentSelector).on('responseEnd', function (event) { that.emit('responseEnd', event); });
                JQXLite(componentSelector).on('error', function (event) { that.emit('error', event); });
                JQXLite(componentSelector).on('open', function (event) { that.emit('open', event); });
                JQXLite(componentSelector).on('close', function (event) { that.emit('close', event); });
                JQXLite(componentSelector).on('stop', function (event) { that.emit('stop', event); });
                JQXLite(componentSelector).on('create', function (event) { that.emit('create', event); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxChat(widgetOptions);
			})
			return {id, componentSelector, sendMessage,stop,addMessage,appendDelta,getMessages,clearConversation,focus,openPopup,closePopup,toggle,val,render,refresh,destroy, setOptions, options, getOptions, createComponent};
        },
    }
</script>
