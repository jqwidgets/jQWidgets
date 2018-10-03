<template>
    <JqxListMenu :enableScrolling="false"
                 :showHeader="true"
                 :showBackButton="true"
                 :showFilter="false"
                 :width="'50%'">
        <ul data-role="listmenu">
            <li>
                OSI
                <ul data-role="listmenu">
                    <li>
                        Application Layer
                        <ol data-role="listmenu">
                            <li>SIP</li>
                            <li>DNS</li>
                            <li>FTP</li>
                            <li>RTP</li>
                            <li>DHCP</li>
                        </ol>
                    </li>
                    <li>
                        Presentation Layer
                        <ol data-role="listmenu">
                            <li>SSL</li>
                            <li>TLS</li>
                        </ol>
                    </li>
                    <li>
                        Session Layer
                        <ol data-role="listmenu">
                            <li>NetBIOS</li>
                            <li>SPDY</li>
                        </ol>
                    </li>
                    <li>
                        Transport Layer
                        <ol data-role="listmenu">
                            <li>TCP</li>
                            <li>UDP</li>
                            <li>SCTP</li>
                        </ol>
                    </li>
                    <li>
                        Network Layer
                        <ol data-role="listmenu">
                            <li>IP</li>
                            <li>ARP</li>
                            <li>ICMP</li>
                        </ol>
                    </li>
                    <li>
                        Data Link Layer
                        <ol data-role="listmenu">
                            <li>ATM</li>
                            <li>SDLS</li>
                            <li>LLC</li>
                        </ol>
                    </li>
                    <li>
                        Physical Layer
                        <ol data-role="listmenu">
                            <li>EIA/TIA-232</li>
                            <li>ITU-T V-Series</li>
                            <li>DSL</li>
                        </ol>
                    </li>
                </ul>
            </li>
            <li>
                TCP/IP
                <ul data-role="listmenu">
                    <li>
                        Application layer
                        <ol data-role="listmenu">
                            <li>DHCP</li>
                            <li>DNS</li>
                            <li>FTP</li>
                            <li>HTTP</li>
                            <li>IMAP</li>
                            <li>LDAP</li>
                            <li>XMPP</li>
                            <li>SSH</li>
                            <li>RIP</li>
                        </ol>
                    </li>
                    <li>
                        Transport layer
                        <ol data-role="listmenu">
                            <li>TCP</li>
                            <li>UDP</li>
                            <li>SCTP</li>
                        </ol>
                    </li>
                    <li>
                        Internet layer
                        <ol data-role="listmenu">
                            <li>IP</li>
                            <li>ICMP</li>
                            <li>ECN</li>
                        </ol>
                    </li>
                    <li>
                        Link layer
                        <ol data-role="listmenu">
                            <li>ARP</li>
                            <li>NDP</li>
                            <li>DSL</li>
                        </ol>
                    </li>
                </ul>
            </li>
        </ul>
    </JqxListMenu>
</template>
<script>
    import JqxListMenu from "jqwidgets-scripts/jqwidgets-vue/vue_jqxlistmenu.vue";

    export default {
        components: {
            JqxListMenu
        }
    }
</script>

<style>
</style>
