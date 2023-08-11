<template>
    <div v-bind:id="id">
        <slot></slot>
    </div>
</template>

<script>
	import { onUpdated, onMounted } from 'vue';
    import '../jqwidgets/jqxcore.js';
    import '../jqwidgets/jqxbuttons.js';
    import '../jqwidgets/jqxfileupload.js';

    export default {
        props: {
            autoUpload: {
                default: false,
                type: Boolean
            },
            accept: String,
            browseTemplate: String,
            cancelTemplate: String,
            disabled: {
                default: false,
                type: Boolean
            },
            fileInputName: String,
            height: [Number, String],
            localization: Object,
            multipleFilesUpload: {
                default: true,
                type: Boolean
            },
            renderFiles: Function,
            rtl: {
                default: false,
                type: Boolean
            },
            theme: String,
            uploadUrl: String,
            uploadTemplate: String,
            width: [Number, String],
            autoCreate: {
                default: true,
                type: Boolean
            }
        },
        emits: ["remove","select","uploadStart","uploadEnd"],
        setup(props, context) {
			const id = "jqxFileUpload" + JQXLite.generateID();
			const componentSelector = '#' + id;
            function createComponent(options) {
                if (!props.autoCreate) __createComponent__(options)
                else console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" property to "false".');
            }
            function setOptions (options) {
                JQXLite(componentSelector).jqxFileUpload(options);
            }
            function getOptions() {
                const usedProps = Object.keys(__manageProps__());
                const resultToReturn = {};
                for (let i = 0; i < usedProps.length; i++) {
                    resultToReturn[usedProps[i]] = JQXLite(componentSelector).jqxFileUpload(usedProps[i]);
                }
                return resultToReturn;
            }
            function browse() {
                JQXLite(componentSelector).jqxFileUpload('browse');  
            }
            function cancelFile(fileIndex) {
                JQXLite(componentSelector).jqxFileUpload('cancelFile', fileIndex);  
            }
            function cancelAll() {
                JQXLite(componentSelector).jqxFileUpload('cancelAll');  
            }
            function destroy() {
                JQXLite(componentSelector).jqxFileUpload('destroy');  
            }
            function render() {
                JQXLite(componentSelector).jqxFileUpload('render');  
            }
            function refresh() {
                JQXLite(componentSelector).jqxFileUpload('refresh');  
            }
            function uploadFile(fileIndex) {
                JQXLite(componentSelector).jqxFileUpload('uploadFile', fileIndex);  
            }
            function uploadAll() {
                JQXLite(componentSelector).jqxFileUpload('uploadAll');  
            }
            function _autoUpload (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxFileUpload('autoUpload', arg)
                } else {
                    return JQXLite(componentSelector).jqxFileUpload('autoUpload');
                }
            }
            function _accept (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxFileUpload('accept', arg)
                } else {
                    return JQXLite(componentSelector).jqxFileUpload('accept');
                }
            }
            function _browseTemplate (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxFileUpload('browseTemplate', arg)
                } else {
                    return JQXLite(componentSelector).jqxFileUpload('browseTemplate');
                }
            }
            function _cancelTemplate (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxFileUpload('cancelTemplate', arg)
                } else {
                    return JQXLite(componentSelector).jqxFileUpload('cancelTemplate');
                }
            }
            function _disabled (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxFileUpload('disabled', arg)
                } else {
                    return JQXLite(componentSelector).jqxFileUpload('disabled');
                }
            }
            function _fileInputName (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxFileUpload('fileInputName', arg)
                } else {
                    return JQXLite(componentSelector).jqxFileUpload('fileInputName');
                }
            }
            function _height (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxFileUpload('height', arg)
                } else {
                    return JQXLite(componentSelector).jqxFileUpload('height');
                }
            }
            function _localization (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxFileUpload('localization', arg)
                } else {
                    return JQXLite(componentSelector).jqxFileUpload('localization');
                }
            }
            function _multipleFilesUpload (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxFileUpload('multipleFilesUpload', arg)
                } else {
                    return JQXLite(componentSelector).jqxFileUpload('multipleFilesUpload');
                }
            }
            function _renderFiles (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxFileUpload('renderFiles', arg)
                } else {
                    return JQXLite(componentSelector).jqxFileUpload('renderFiles');
                }
            }
            function _rtl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxFileUpload('rtl', arg)
                } else {
                    return JQXLite(componentSelector).jqxFileUpload('rtl');
                }
            }
            function _theme (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxFileUpload('theme', arg)
                } else {
                    return JQXLite(componentSelector).jqxFileUpload('theme');
                }
            }
            function _uploadUrl (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxFileUpload('uploadUrl', arg)
                } else {
                    return JQXLite(componentSelector).jqxFileUpload('uploadUrl');
                }
            }
            function _uploadTemplate (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxFileUpload('uploadTemplate', arg)
                } else {
                    return JQXLite(componentSelector).jqxFileUpload('uploadTemplate');
                }
            }
            function _width (arg) {
                if (arg !== undefined) {
                    JQXLite(componentSelector).jqxFileUpload('width', arg)
                } else {
                    return JQXLite(componentSelector).jqxFileUpload('width');
                }
            }
            function __createComponent__ (options) {
                let widgetOptions;
                options ? widgetOptions = options : widgetOptions = __manageProps__();
                JQXLite(componentSelector).jqxFileUpload(widgetOptions);
                __wireEvents__();
            }
            function __manageProps__() {
                const widgetProps = ['autoUpload','accept','browseTemplate','cancelTemplate','disabled','fileInputName','height','localization','multipleFilesUpload','renderFiles','rtl','theme','uploadUrl','uploadTemplate','width'];
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
                 get autoUpload() {
                     return _autoUpload();
                 },
                 set autoUpload(newValue) {
                     _autoUpload(newValue);
                 },
                 get accept() {
                     return _accept();
                 },
                 set accept(newValue) {
                     _accept(newValue);
                 },
                 get browseTemplate() {
                     return _browseTemplate();
                 },
                 set browseTemplate(newValue) {
                     _browseTemplate(newValue);
                 },
                 get cancelTemplate() {
                     return _cancelTemplate();
                 },
                 set cancelTemplate(newValue) {
                     _cancelTemplate(newValue);
                 },
                 get disabled() {
                     return _disabled();
                 },
                 set disabled(newValue) {
                     _disabled(newValue);
                 },
                 get fileInputName() {
                     return _fileInputName();
                 },
                 set fileInputName(newValue) {
                     _fileInputName(newValue);
                 },
                 get height() {
                     return _height();
                 },
                 set height(newValue) {
                     _height(newValue);
                 },
                 get localization() {
                     return _localization();
                 },
                 set localization(newValue) {
                     _localization(newValue);
                 },
                 get multipleFilesUpload() {
                     return _multipleFilesUpload();
                 },
                 set multipleFilesUpload(newValue) {
                     _multipleFilesUpload(newValue);
                 },
                 get renderFiles() {
                     return _renderFiles();
                 },
                 set renderFiles(newValue) {
                     _renderFiles(newValue);
                 },
                 get rtl() {
                     return _rtl();
                 },
                 set rtl(newValue) {
                     _rtl(newValue);
                 },
                 get theme() {
                     return _theme();
                 },
                 set theme(newValue) {
                     _theme(newValue);
                 },
                 get uploadUrl() {
                     return _uploadUrl();
                 },
                 set uploadUrl(newValue) {
                     _uploadUrl(newValue);
                 },
                 get uploadTemplate() {
                     return _uploadTemplate();
                 },
                 set uploadTemplate(newValue) {
                     _uploadTemplate(newValue);
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

                JQXLite(componentSelector).on('remove', function (event) { that.emit('remove', event); });
                JQXLite(componentSelector).on('select', function (event) { that.emit('select', event); });
                JQXLite(componentSelector).on('uploadStart', function (event) { that.emit('uploadStart', event); });
                JQXLite(componentSelector).on('uploadEnd', function (event) { that.emit('uploadEnd', event); });
            }

			onMounted(() => {
				if (props.autoCreate) __createComponent__();
			})
			onUpdated(() => {
				const widgetOptions = __manageProps__();
				JQXLite(componentSelector).jqxFileUpload(widgetOptions);
			})
			return {id, componentSelector, browse,cancelFile,cancelAll,destroy,render,refresh,uploadFile,uploadAll, setOptions, options, getOptions, createComponent};
        },
    }
</script>
