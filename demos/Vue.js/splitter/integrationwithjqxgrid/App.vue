<template>
    <JqxSplitter
        @expanded="expanded($event)"
        :height="400" :width="850"
        :panels="[{ min: 150, size: 330 }, { min: 250 }]">
        <div>
            <JqxGrid ref="myGrid"
                @rowselect="rowselect($event)"
                :height="'100%'" :width="'100%'"
                :source="dataAdapter"
                :columnsresize="true"
                :columns="columns">
            </JqxGrid>
        </div>
        <div>
            <form>
                <table style="margin-top: 20px; width: 100%;">
                    <tr>
                        <td style="text-align: right;">Company Name:</td>
                        <td style="text-align: left;"><JqxInput ref="CompanyName" :height="23"></JqxInput></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Contact Name:</td>
                        <td style="text-align: left;"><JqxInput  ref="ContactName" :height="23"></JqxInput> </td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Contact Title:</td>
                        <td style="text-align: left;"><JqxInput ref="ContactTitle" :height="23"></JqxInput></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">City:</td>
                        <td style="text-align: left;"><JqxInput ref="City" :height="23"></JqxInput></td>
                    </tr>
                    <tr>
                        <td style="text-align: right;">Country:</td>
                        <td style="text-align: left;"><JqxInput ref="Country" :height="23"></JqxInput></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td style="padding-left: 35px; text-align: left;">
                            <JqxButton ref="Save" @click="saveClick()" :width="70" :height="23">Save</JqxButton>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    </JqxSplitter>

</template>

<script>
    import JqxSplitter from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxsplitter.vue';
    import JqxGrid from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue';
    import JqxInput from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxinput.vue';
    import JqxButton from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue';

    export default {
        components: {
            JqxSplitter,
            JqxGrid,
            JqxInput,
            JqxButton
        },
        beforeCreate: function () {
            const data =  '[{ "CompanyName": "Alfreds Futterkiste", "ContactName": "Maria Anders", "ContactTitle": "Sales Representative", "Address": "Obere Str. 57", "City": "Berlin", "Country": "Germany" }, { "CompanyName": "Ana Trujillo Emparedados y helados", "ContactName": "Ana Trujillo", "ContactTitle": "Owner", "Address": "Avda. de la Constitucin 2222", "City": "Mxico D.F.", "Country": "Mexico" }, { "CompanyName": "Antonio Moreno Taquera", "ContactName": "Antonio Moreno", "ContactTitle": "Owner", "Address": "Mataderos 2312", "City": "Mxico D.F.", "Country": "Mexico" }, { "CompanyName": "Around the Horn", "ContactName": "Thomas Hardy", "ContactTitle": "Sales Representative", "Address": "120 Hanover Sq.", "City": "London", "Country": "UK" }, { "CompanyName": "Berglunds snabbkp", "ContactName": "Christina Berglund", "ContactTitle": "Order Administrator", "Address": "Berguvsvgen 8", "City": "Lule", "Country": "Sweden" }, { "CompanyName": "Blauer See Delikatessen", "ContactName": "Hanna Moos", "ContactTitle": "Sales Representative", "Address": "Forsterstr. 57", "City": "Mannheim", "Country": "Germany" }, { "CompanyName": "Blondesddsl pre et fils", "ContactName": "Frdrique Citeaux", "ContactTitle": "Marketing Manager", "Address": "24, place Klber", "City": "Strasbourg", "Country": "France" }, { "CompanyName": "Blido Comidas preparadas", "ContactName": "Martn Sommer", "ContactTitle": "Owner", "Address": "C\/ Araquil, 67", "City": "Madrid", "Country": "Spain" }, { "CompanyName": "Bon app\'", "ContactName": "Laurence Lebihan", "ContactTitle": "Owner", "Address": "12, rue des Bouchers", "City": "Marseille", "Country": "France" }, { "CompanyName": "Bottom-Dollar Markets", "ContactName": "Elizabeth Lincoln", "ContactTitle": "Accounting Manager", "Address": "23 Tsawassen Blvd.", "City": "Tsawassen", "Country": "Canada" }, { "CompanyName": "B\'s Beverages", "ContactName": "Victoria Ashworth", "ContactTitle": "Sales Representative", "Address": "Fauntleroy Circus", "City": "London", "Country": "UK" }, { "CompanyName": "Cactus Comidas para llevar", "ContactName": "Patricio Simpson", "ContactTitle": "Sales Agent", "Address": "Cerrito 333", "City": "Buenos Aires", "Country": "Argentina" }, { "CompanyName": "Centro comercial Moctezuma", "ContactName": "Francisco Chang", "ContactTitle": "Marketing Manager", "Address": "Sierras de Granada 9993", "City": "Mxico D.F.", "Country": "Mexico" }, { "CompanyName": "Chop-suey Chinese", "ContactName": "Yang Wang", "ContactTitle": "Owner", "Address": "Hauptstr. 29", "City": "Bern", "Country": "Switzerland" }, { "CompanyName": "Comrcio Mineiro", "ContactName": "Pedro Afonso", "ContactTitle": "Sales Associate", "Address": "Av. dos Lusadas, 23", "City": "Sao Paulo", "Country": "Brazil" }, { "CompanyName": "Consolidated Holdings", "ContactName": "Elizabeth Brown", "ContactTitle": "Sales Representative", "Address": "Berkeley Gardens 12 Brewery", "City": "London", "Country": "UK" }, { "CompanyName": "Drachenblut Delikatessen", "ContactName": "Sven Ottlieb", "ContactTitle": "Order Administrator", "Address": "Walserweg 21", "City": "Aachen", "Country": "Germany" }, { "CompanyName": "Du monde entier", "ContactName": "Janine Labrune", "ContactTitle": "Owner", "Address": "67, rue des Cinquante Otages", "City": "Nantes", "Country": "France" }, { "CompanyName": "Eastern Connection", "ContactName": "Ann Devon", "ContactTitle": "Sales Agent", "Address": "35 King George", "City": "London", "Country": "UK" }, { "CompanyName": "Ernst Handel", "ContactName": "Roland Mendel", "ContactTitle": "Sales Manager", "Address": "Kirchgasse 6", "City": "Graz", "Country": "Austria"}]';

            const source =
                {
                    datatype: 'json',
                    datafields: [
                        { name: 'CompanyName', type: 'string' },
                        { name: 'ContactName', type: 'string' },
                        { name: 'ContactTitle', type: 'string' },
                        { name: 'Address', type: 'string' },
                        { name: 'City', type: 'string' },
                        { name: 'Country', type: 'string' }
                    ],
                    localdata: data,
                    updaterow: (rowid, rowdata, commit) => {
                        commit(true);
                    }
                };

            this.dataAdapter = new jqx.dataAdapter(source);

            this.columns =
                [
                    { text: 'Company Name', datafield: 'CompanyName', width: 250 },
                    { text: 'Contact Name', datafield: 'ContactName', width: 150 },
                    { text: 'Contact Title', datafield: 'ContactTitle', width: 180 },
                    { text: 'City', datafield: 'City', width: 120 },
                    { text: 'Country', datafield: 'Country' }
                ]   
        },
        methods: {
            rowselect: function (event) { 
                const row = event.args.row;
                // update inputs.
                this.$refs.CompanyName.val(row.CompanyName);
                this.$refs.ContactName.val(row.ContactName);
                this.$refs.ContactTitle.val(row.ContactTitle);
                this.$refs.City.val(row.City);
                this.$refs.Country.val(row.Country);
            },
            saveClick: function () {
                const row = this.$refs.myGrid.getselectedrowindex();
                const rowid = this.$refs.myGrid.getrowid(row);
                const data = {
                    CompanyName: this.$refs.CompanyName.val(),
                    ContactName: this.$refs.ContactName.val(),
                    ContactTitle: this.$refs.ContactTitle.val(),
                    City: this.$refs.City.val(),
                    Country: this.$refs.Country.val()
                };
                this.$refs.myGrid.updaterow(rowid, data);
            },
            expanded: function () {
                this.$refs.myGrid.refresh();
            }
        }
    }
</script>