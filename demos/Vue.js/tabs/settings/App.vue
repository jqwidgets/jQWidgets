<template>
    <div>
        <JqxTabs ref="myTabs" style="float: left;"
            :width="getWidth" :hight="220">
            <ul style='margin-left: 30px;'>
                <li>Node.js</li>
                <li>JavaServer Pages</li>
                <li>Active Server Pages</li>
            </ul>
            <div>
                Node.js is an event-driven I/O server-side JavaScript environment based on V8. It is intended for writing scalable network programs such as web servers.
                It was created by Ryan Dahl in 2009, and its growth is sponsored by Joyent, which employs Dahl.
                Similar environments written in other programming languages include Twisted for Python, Perl Object Environment for Perl, libevent for C and EventMachine for Ruby.
                Unlike most JavaScript, it is not executed in a web browser, but is instead a form of server-side JavaScript. Node.js implements some CommonJS specifications.
                Node.js includes a REPL environment for interactive testing.
            </div>
            <div>
                JavaServer Pages (JSP) is a Java technology that helps software developers serve dynamically generated web pages based on HTML, XML, or other document types.
                Released in 1999 as Sun's answer to ASP and PHP,:citation needed JSP was designed to address the perception that the Java programming environment didn't provide developers with enough support for the Web.
                To deploy and run, a compatible web server with servlet container is required. The Java Servlet and the JavaServer Pages (JSP) specifications from Sun Microsystems and the JCP
                (Java Community Process) must both be met by the container.
            </div>
            <div>
                ASP.NET is a web application framework developed and marketed by Microsoft to allow programmers to build dynamic web sites, web applications and web services.
                It was first released in January 2002 with version 1.0 of the .NET Framework, and is the successor to Microsoft's Active Server Pages (ASP) technology.
                ASP.NET is built on the Common Language Runtime (CLR), allowing programmers to write ASP.NET code using any supported .NET language.
                The ASP.NET SOAP extension framework allows ASP.NET components to process SOAP messages.
            </div>
        </JqxTabs>

        <div style="margin-left: 20px; float: left;">
            <JqxButton :width="100" ref="Add"        @click="Add()">Add</JqxButton>
            <JqxButton :width="100" ref="Remove"     @click="Remove()">Remove</JqxButton>
            <JqxButton :width="100" ref="Disable"    @click="Disable()">Disable</JqxButton>
            <JqxButton :width="100" ref="Enable"     @click="Enable()">Enable</JqxButton>
            <JqxButton :width="100" ref="EnableAll"  @click="EnableAll()">Enable All</JqxButton>
            <JqxButton :width="100" ref="DisableAll" @click="DisableAll()">Disable All</JqxButton>
        </div>
    </div>
</template>

<script>
    import JqxTabs from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtabs.vue';
    import JqxButton from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue';

    export default {
        components: {
            JqxTabs,
            JqxButton
        },     
        data: function () {
            return {
                getWidth: '90%'
            }
        },
        methods: {
            Add: function () {
                this.$refs.myTabs.addLast('Sample title', 'Sample content');
                this.$refs.myTabs.ensureVisible(-1);
            },
            Remove: function () {
                const selectedItem = this.$refs.myTabs.selectedItem;
                const disabledItems = this.$refs.myTabs.getDisabledTabsCount();
                const items = this.$refs.myTabs.length();
                if (items > disabledItems + 1) {
                    this.$refs.myTabs.removeAt(selectedItem);
                }
            },
            Disable: function () {
                const selectedItem = this.$refs.myTabs.selectedItem;
                this.$refs.myTabs.disableAt(selectedItem);
            },
            Enable: function () {
                const selectedItem = this.$refs.myTabs.selectedItem;
                this.$refs.myTabs.enableAt(selectedItem);
            },
            EnableAll: function () {
                this.$refs.myTabs.enable();
            },
            DisableAll: function () {
                this.$refs.myTabs.disable();
            }
        }
    }
</script>

<style>
    .jqx-button {
        margin-top: 10px;
    }
    .jqx-button:first-of-type {
        margin-top: 0px;
    }
</style>