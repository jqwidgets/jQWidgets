<template>
    <JqxTabs ref="myTabs"  @tabclick="tabClick($event)"
        :width="getWidth" :height="250" :showCloseButtons="true">
        <ul style="margin-left: 30px;" ref="unorderedList">
            <li>Node.js</li>
            <li>Active Server Pages</li>
            <li canselect='false' hasclosebutton='false'>Add New Tab</li>
        </ul>
        <div>
            Node.js is an event-driven I/O server-side JavaScript environment based on V8. It
            is intended for writing scalable network programs such as web servers. It was created
            by Ryan Dahl in 2009, and its growth is sponsored by Joyent, which employs Dahl.
            Similar environments written in other programming languages include Twisted for
            Python, Perl Object Environment for Perl, libevent for C and EventMachine for Ruby.
            Unlike most JavaScript, it is not executed in a web browser, but is instead a form
            of server-side JavaScript. Node.js implements some CommonJS specifications. Node.js
            includes a REPL environment for interactive testing.
        </div>
        <div>
            ASP.NET is a web application framework developed and marketed by Microsoft to allow
            programmers to build dynamic web sites, web applications and web services. It was
            first released in January 2002 with version 1.0 of the .NET Framework, and is the
            successor to Microsoft's Active Server Pages (ASP) technology. ASP.NET is built
            on the Common Language Runtime (CLR), allowing programmers to write ASP.NET code
            using any supported .NET language. The ASP.NET SOAP extension framework allows ASP.NET
            components to process SOAP messages.
        </div>
        <div></div>
    </JqxTabs>
</template>

<script>
    import JqxTabs from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtabs.vue';

    export default {
        components: {
            JqxTabs
        },     
        data: function () {
            return {
                getWidth: '90%',
                index: 0
            }
        },
        methods: {
            tabClick: function (event) {
                const childrenLength = this.$refs.unorderedList.children.length;
                if (event.args.item == childrenLength - 1) {
                    this.$refs.myTabs.addAt(event.args.item, 'Sample title ' + this.index, 'Sample content number: ' + this.index);
                    this.index++;
                }
            }
        }
    }
</script>