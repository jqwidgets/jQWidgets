<template>
    <JqxDataTable ref="myDataTable"
                  :width="getWidth" :source="dataAdapter" :columns="columns"
                  :rowDetails="true" :pageable="true" :sortable="true"
                  :pageSize="3" :initRowDetails="initRowDetails">
    </JqxDataTable>
</template>

<script>
    import JqxDataTable from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdatatable.vue";
    import JqxTabs from "jqwidgets-scripts/jqwidgets-vue/vue_jqxtabs.vue";

    export default {
        components: {
            JqxDataTable
        },
        data: function () {
            return {
                getWidth: '90%',
                dataAdapter: new jqx.dataAdapter(this.source),
                columns: [
                    { text: 'First Name', dataField: 'firstname', width: 200 },
                    { text: 'Last Name', dataField: 'lastname', width: 200 },
                    { text: 'Title', dataField: 'title', width: 200 },
                    { text: 'City', dataField: 'city', width: 100 },
                    { text: 'Country', dataField: 'country' }
                ]
            }
        },
        beforeCreate: function () {

            const generateData = () => {
                let data = new Array();
                let firstNames = ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven', 'Michael', 'Robert', 'Laura', 'Anne'];
                let lastNames = ['Davolio', 'Fuller', 'Leverling', 'Peacock', 'Buchanan', 'Suyama', 'King', 'Callahan', 'Dodsworth'];
                let titles = ['Sales Representative', 'Vice President, Sales', 'Sales Representative', 'Sales Representative', 'Sales Manager', 'Sales Representative', 'Sales Representative', 'Inside Sales Coordinator', 'Sales Representative'];
                let titleofcourtesy = ['Ms.', 'Dr.', 'Ms.', 'Mrs.', 'Mr.', 'Mr.', 'Mr.', 'Ms.', 'Ms.'];
                let birthdate = ['08-Dec-48', '19-Feb-52', '30-Aug-63', '19-Sep-37', '04-Mar-55', '02-Jul-63', '29-May-60', '09-Jan-58', '27-Jan-66'];
                let hiredate = ['01-May-92', '14-Aug-92', '01-Apr-92', '03-May-93', '17-Oct-93', '17-Oct-93', '02-Jan-94', '05-Mar-94', '15-Nov-94'];
                let address = ['507 - 20th Ave. E. Apt. 2A', '908 W. Capital Way', '722 Moss Bay Blvd.', '4110 Old Redmond Rd.', '14 Garrett Hill', 'Coventry House', 'Miner Rd.', 'Edgeham Hollow', 'Winchester Way', '4726 - 11th Ave. N.E.', '7 Houndstooth Rd.'];
                let city = ['Seattle', 'Tacoma', 'Kirkland', 'Redmond', 'London', 'London', 'London', 'Seattle', 'London'];
                let postalcode = ['98122', '98401', '98033', '98052', 'SW1 8JR', 'EC2 7JR', 'RG1 9SP', '98105', 'WG2 7LT'];
                let country = ['USA', 'USA', 'USA', 'USA', 'UK', 'UK', 'UK', 'USA', 'UK'];
                let homephone = ['(206) 555-9857', '(206) 555-9482', '(206) 555-3412', '(206) 555-8122', '(71) 555-4848', '(71) 555-7773', '(71) 555-5598', '(206) 555-1189', '(71) 555-4444'];
                let notes = ['Education includes a BA in psychology from Colorado State University in 1970.  She also completed "The Art of the Cold Call".  Nancy is a member of Toastmasters International.',
                    'Andrew received his BTS commercial in 1974 and a Ph.D. in international marketing from the University of Dallas in 1981.  He is fluent in French and Italian and reads German.  He joined the company as a sales representative, was promoted to sales manager in January 1992 and to vice president of sales in March 1993.  Andrew is a member of the Sales Management Roundtable, the Seattle Chamber of Commerce, and the Pacific Rim Importers Association.',
                    'Janet has a BS degree in chemistry from Boston College (1984).  She has also completed a certificate program in food retailing management.  Janet was hired as a sales associate in 1991 and promoted to sales representative in February 1992.',
                    'Margaret holds a BA in English literature from Concordia College (1958) and an MA from the American Institute of Culinary Arts (1966).  She was assigned to the London office temporarily from July through November 1992.',
                    'Steven Buchanan graduated from St. Andrews University, Scotland, with a BSC degree in 1976.  Upon joining the company as a sales representative in 1992, he spent 6 months in an orientation program at the Seattle office and then returned to his permanent post in London.  He was promoted to sales manager in March 1993.  Mr. Buchanan has completed the courses "Successful Telemarketing" and "International Sales Management",  He is fluent in French.',
                    'Michael is a graduate of Sussex University (MA, economics, 1983) and the University of California at Los Angeles (MBA, marketing, 1986).  He has also taken the courses "Multi-Cultural Selling" and "Time Management for the Sales Professional".  He is fluent in Japanese and can read and write French, Portuguese, and Spanish.',
                    'Robert King served in the Peace Corps and traveled extensively before completing his degree in English at the University of Michigan in 1992, the year he joined the company.  After completing a course entitled "Selling in Europe", he was transferred to the London office in March 1993.',
                    'Laura received a BA in psychology from the University of Washington.  She has also completed a course in business French.  She reads and writes French.',
                    'Anne has a BA degree in English from St. Lawrence College.  She is fluent in French and German.'];
                let k = 0;
                for (let i = 0; i < firstNames.length; i++) {
                    let row = {};
                    row['firstname'] = firstNames[k];
                    row['lastname'] = lastNames[k];
                    row['title'] = titles[k];
                    row['titleofcourtesy'] = titleofcourtesy[k];
                    row['birthdate'] = birthdate[k];
                    row['hiredate'] = hiredate[k];
                    row['address'] = address[k];
                    row['city'] = city[k];
                    row['postalcode'] = postalcode[k];
                    row['country'] = country[k];
                    row['homephone'] = homephone[k];
                    row['notes'] = notes[k];
                    data[i] = row;
                    k++;
                }

                return data;
            };

            this.source = {
                localData: generateData(),
                dataType: 'array'
            };
        },
        mounted: function () {
            this.$refs.myDataTable.showDetails(0);
        },
        methods: {
            initRowDetails: function (id, row, element, rowInfo) {
                // update the details height.
                rowInfo.detailsHeight = 200;

                let container = document.createElement('div');
                container.style.margin = '10px';
                container.innerHTML = '<ul style="margin-left: 30px;"><li class="title">Title</li><li>Notes</li></ul><div class="information"></div><div class="notes"></div>';
                element[0].appendChild(container);

                let tabsdiv = element[0].children[0];

                if (tabsdiv !== null) {
                    let information = tabsdiv.getElementsByClassName('information');
                    let notes = tabsdiv.getElementsByClassName('notes');
                    let title = tabsdiv.getElementsByClassName('title');

                    title[0].innerHTML = row.firstname;

                    let container = document.createElement('div');
                    container.style.margin = '5px';
                    information[0].appendChild(container);

                    let photocolumn = document.createElement('div');
                    let leftcolumn = document.createElement('div');
                    let rightcolumn = document.createElement('div');

                    photocolumn.style.cssText = 'float: left; width: 15%';
                    leftcolumn.style.cssText = 'float: left; width: 45%';
                    rightcolumn.style.cssText = 'float: left; width: 40%';

                    container.appendChild(photocolumn);
                    container.appendChild(leftcolumn);
                    container.appendChild(rightcolumn);

                    let image = document.createElement('div');
                    image.style.marginTop = '10px';

                    let photo = document.createElement('div');
                    photo.style.margin = '10px';
                    photo.className = 'jqx-rc-all';
                    photo.innerHTML = '<b>Photo:</b>';

                    let img = document.createElement('img');
                    img.height = 60;
                    img.style.marginLeft = '10px';
                    img.src = '../../../images/' + row.firstname.toLowerCase() + '.png';

                    image.appendChild(photo);
                    image.appendChild(img);
                    photocolumn.appendChild(image);

                    let firstname = '<div style="margin: 10px;"><b>First Name:</b> ' + row.firstname + '</div>';
                    let lastname = '<div style="margin: 10px;"><b>Last Name:</b> ' + row.lastname + '</div>';
                    title = '<div style="margin: 10px;"><b>Title:</b> ' + row.title + '</div>';
                    let address = '<div style="margin: 10px;"><b>Address:</b> ' + row.address + '</div>';

                    leftcolumn.insertAdjacentHTML('beforeend', firstname);
                    leftcolumn.insertAdjacentHTML('beforeend', lastname);
                    leftcolumn.insertAdjacentHTML('beforeend', title);
                    leftcolumn.insertAdjacentHTML('beforeend', address);

                    let postalcode = '<div style="margin: 10px;"><b>Postal Code:</b> ' + row.postalcode + '</div>';
                    let city = '<div style="margin: 10px;"><b>City:</b> ' + row.city + '</div>';
                    let phone = '<div style="margin: 10px;"><b>Phone:</b> ' + row.homephone + '</div>';
                    let hiredate = '<div style="margin: 10px;"><b>Hire Date:</b> ' + row.hiredate + '</div>';

                    rightcolumn.insertAdjacentHTML('beforeend', postalcode);
                    rightcolumn.insertAdjacentHTML('beforeend', city);
                    rightcolumn.insertAdjacentHTML('beforeend', phone);
                    rightcolumn.insertAdjacentHTML('beforeend', hiredate);

                    let notesContainer = document.createElement('div');
                    notesContainer.style.cssText = 'white-space: normal; margin: 5px;';
                    notesContainer.innerHTML = '<span>' + row.notes + '</span>';

                    notes[0].appendChild(notesContainer);

                    tabsdiv.className = 'vueTabs';

                    jqwidgets.createInstance('.vueTabs', 'jqxTabs', { width: 820, height: 170 })
                }
            }
        }
    };
</script>

<style>
</style>