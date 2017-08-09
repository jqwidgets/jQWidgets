function getDemoTheme() {
    var theme = 'light';
    if (window.localStorage["Theme"]) {
        var selectedIndex = parseInt(window.localStorage["Theme"].substring(1));
        var mobilethemes = [
            { label: 'iOS', group: 'Themes', value: 'mobile' },
            { label: 'Android', group: 'Themes', value: 'android' },
            { label: 'Windows Phone', group: 'Themes', value: 'win8' },
            { label: 'Blackberry', group: 'Themes', value: 'blackberry' }
        ];

        var themes = [
            { label: 'Light', group: 'Themes', value: 'light' },
            { label: 'Dark', group: 'Themes', value: 'dark' },
            { label: 'Arctic', group: 'Themes', value: 'arctic' },
            { label: 'Web', group: 'Themes', value: 'web' },
            { label: 'Bootstrap', group: 'Themes', value: 'bootstrap' },
            { label: 'Metro', group: 'Themes', value: 'metro' },
            { label: 'Metro Dark', group: 'Themes', value: 'metrodark' },
            { label: 'Office', group: 'Themes', value: 'office' },
            { label: 'Orange', group: 'Themes', value: 'orange' },
            { label: 'Fresh', group: 'Themes', value: 'fresh' },
            { label: 'Energy Blue', group: 'Themes', value: 'energyblue' },
            { label: 'Dark Blue', group: 'Themes', value: 'darkblue' },
            { label: 'Black', group: 'Themes', value: 'black' },
            { label: 'Shiny Black', group: 'Themes', value: 'shinyblack' },
            { label: 'Classic', group: 'Themes', value: 'classic' },
            { label: 'Summer', group: 'Themes', value: 'summer' },
            { label: 'High Contrast', group: 'Themes', value: 'highcontrast' },
            { label: 'Lightness', group: 'UI Compatible', value: 'ui-lightness' },
            { label: 'Darkness', group: 'UI Compatible', value: 'ui-darkness' },
            { label: 'Smoothness', group: 'UI Compatible', value: 'ui-smoothness' },
            { label: 'Start', group: 'UI Compatible', value: 'ui-start' },
            { label: 'Redmond', group: 'UI Compatible', value: 'ui-redmond' },
            { label: 'Sunny', group: 'UI Compatible', value: 'ui-sunny' },
            { label: 'Overcast', group: 'UI Compatible', value: 'ui-overcast' },
            { label: 'Le Frog', group: 'UI Compatible', value: 'ui-le-frog' }
        ];

        theme = themes[selectedIndex].value;
    }

    var url = "../jqwidgets/styles/jqx." + theme + '.css';
    if (window.location.href.toString().indexOf("angularjs") >= 0) {
        var loc = window.location.href.toString();
        if (loc.indexOf('button') >= 0 ||
        (loc.indexOf('treegrid') == -1 && loc.indexOf('grid') >= 0) ||
        loc.indexOf('dropdownlist') >= 0 ||
        loc.indexOf('combobox') >= 0 ||
        loc.indexOf('datatable') >= 0 ||
        loc.indexOf('listbox') >= 0 ||
        loc.indexOf('tabs') >= 0 ||
        (loc.indexOf('listmenu') == -1 && loc.indexOf('menu') >= 0) ||
        loc.indexOf('calendar') >= 0 ||
        loc.indexOf('datetimeinput') >= 0 ||
        (loc.indexOf('chart') >= 0 && loc.indexOf('bulletchart') == -1)) {
            url = "../../jqwidgets/styles/jqx." + theme + '.css';
        }
    }
    if(window.location.href.toString().indexOf("typescript") >= 0)
    {
        url = "../../../jqwidgets/styles/jqx." + theme + '.css';
    }
   if(window.location.href.toString().indexOf("angularjs2") >= 0)
    {
        url = "../jqwidgets/styles/jqx." + theme + '.css';
    }
    if (document.createStyleSheet != undefined) {
        var hasStyle = false;
        $.each(document.styleSheets, function (index, value) {
            if (value.href != undefined && value.href.indexOf(theme) != -1) {
                hasStyle = true;
                return false;
            }
        });
        if (!hasStyle) {
            document.createStyleSheet(url);
        }
    }
    else {
        var hasStyle = false;
        if (document.styleSheets) {
            $.each(document.styleSheets, function (index, value) {
                if (value.href != undefined && value.href.indexOf(theme) != -1) {
                    hasStyle = true;
                    return false;
                }
            });
        }
        if (!hasStyle) {
            var link = $('<link rel="stylesheet" href="' + url + '" media="screen" />');
            link[0].onload = function () {
                if ($.jqx && $.jqx.ready) {
                    $.jqx.ready();
                };
            }
            $(document).find('head').append(link);
        }
    }
    $.jqx = $.jqx || {};
    $.jqx.theme = theme;
    return theme;
};
var theme = '';
try
{
    if ($) {
        $(document).ready(function () {
            $(".example-description").css('margin-bottom', 15);
        });
        theme = getDemoTheme();
        if (window.location.toString().indexOf('file://') >= 0) {
            var loc = window.location.toString();
            var addMessage = false;
            if (loc.indexOf('grid') >= 0 || loc.indexOf('chart') >= 0 || loc.indexOf('tree') >= 0 || loc.indexOf('list') >= 0 || loc.indexOf('combobox') >= 0 || loc.indexOf('php') >= 0 || loc.indexOf('adapter') >= 0 || loc.indexOf('datatable') >= 0 || loc.indexOf('ajax') >= 0) {
                addMessage = true;
            }

            if (addMessage) {
                $(document).ready(function () {
                    setTimeout(function () {
                        $(document.body).prepend($('<div style="font-size: 12px; font-family: Verdana;">Note: To run a sample that includes data binding, you must open it via "http://..." protocol since Ajax makes http requests.</div><br/>'));
                    }
                    , 50);
                });
            }
        }
    }
    else {
        $(document).ready(function () {
            theme = getDemoTheme();
        });
    }
}
catch (error) {
    var er = error;
}