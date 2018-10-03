 <template>
    <JqxDocking :orientation='"horizontal"' :width="getWidth" :mode='"docked"'>
        <div>
            <div id="window1" style="height: 220px;">
                <div>
                    Date and Time
                </div>
                <div style="overflow: hidden;">
                    <JqxCalendar :width="180" :height="180" style="float: left; margin-right: 10px;">
                    </JqxCalendar>
                    <h3 style="text-align: center; color: #787878;">Sunny</h3>
                    <div style="float: left; margin-left: 30px; text-align: center;">
                        <img src="../../../images/sun-icon.png" alt="Sunny" />
                    </div>
                    <div style="text-align: left; margin-left: 5px; margin-top: 10px; font-size: 10px; float: right; margin-right: 20px;">
                        Mo: 23 &deg;C<br />
                        To 25 &deg;C<br />
                        We: 27 &deg;C
                    </div>
                </div>
            </div>
            <div id="window2" style="height: 220px">
                <div>
                    News
                </div>
                <div style="overflow: hidden;">
                    <JqxTabs :width="400" :height="181" :selectedItem='1'>
                        <ul style="margin-left: 30px">
                            <li>World</li>
                            <li>Local</li>
                            <li>Sports</li>
                        </ul>
                        <div>
                            <div style="padding: 3px; margin: 10px; width: 150px; height: 84px; float: left;">
                                <img src="../../../images/news_ie6.jpg" alt="IE6" title="IE6" />
                            </div>
                            <span style="font-size: 11px;">
                                Microsoft is set to get a little more pushy ensuring
                                you have an up-to-date browser and will automatically update Internet Explorer...
                                <span style="font-size: 8px;">(BBC)</span>
                            </span>
                        </div>
                        <div>
                            <div style="padding: 3px; margin: 10px; width: 144px; height: 81px; float: left;">
                                <img src="../../../images/local.jpg" alt="Tennis" title="Tennis" />
                            </div>
                            <span style="font-size: 11px;">
                                The High Court has dismissed a challenge to laws that
                                require immigrant spouses to be able to speak English in order to live in the UK...
                                <span style="font-size: 8px;">(BBC)</span>
                            </span>
                        </div>
                        <div>
                            <div style="padding: 3px; margin: 10px; width: 130px; height: 73px; float: left;">
                                <img src="../../../images/tennis.jpg" alt="Tennis" title="Tennis" />
                            </div>
                            <span style="font-size: 11px;">
                                British number one Elena Baltacha says Judy Murray is
                                a "fantastic" appointment as Great Britain's new Fed Cup captain... <span style="font-size: 8px;">(BBC)</span>
                            </span>
                        </div>
                    </JqxTabs>
                </div>
            </div>
        </div>
        <div>
            <div id="window3" style="height: 220px">
                <div>
                    Zodiac
                </div>
                <div style="overflow: hidden;">
                    <JqxPanel :width="400" :height="180">
                        <div style="padding-right: 20px;">
                            <div style="padding: 3px; width: 150px; height: 110px; float: left; margin: 10px;">
                                <img src="../../../images/leo.jpg" alt="Leo" title="Leo" />
                            </div>
                            <h3 style="text-align: center; color: #787878;">Leo</h3>
                            <span style="font-size: 11px">
                                Individuals born under the zodiac sign of Leo are very
                                good looking and have a healthy physique, with a broad forehead. Leo are very intelligent,
                                extremely courageous, love their freedom and live by their own rules. Indulgence
                                and extravagance is like second nature to them and they love to...
                            </span>
                        </div>
                    </JqxPanel>
                </div>
            </div>
            <div id="window4" style="height: 220px;">
                <div>
                    E-mail
                </div>
                <div style="overflow: hidden;">
                    <JqxListBox :width="400" :height="181" :source="source">
                    </JqxListBox>
                </div>
            </div>
        </div>
    </JqxDocking>
</template>

<script>
    import JqxDocking from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdocking.vue";
    import JqxCalendar from "jqwidgets-scripts/jqwidgets-vue/vue_jqxcalendar.vue";
    import JqxTabs from "jqwidgets-scripts/jqwidgets-vue/vue_jqxtabs.vue";
    import JqxPanel from "jqwidgets-scripts/jqwidgets-vue/vue_jqxpanel.vue";
    import JqxListBox from "jqwidgets-scripts/jqwidgets-vue/vue_jqxlistbox.vue";

    export default {
        components: {
            JqxDocking,
            JqxCalendar,
            JqxTabs,
            JqxPanel,
            JqxListBox
        },
        data: function () {
            return {
                getWidth: '90%',
                source: [
                    'JavaScript Certification - Welcome to our network',
                    'Business Challenges via Web take a part',
                    'jQWidgets better web, less time. Take a tour',
                    'Facebook - you have 7 new notifications',
                    'Twitter - John Doe is following you. Look at his profile',
                    'New videos, take a look at YouTube.com'
                ]
            }
        }
    };
</script>

<style>
</style>