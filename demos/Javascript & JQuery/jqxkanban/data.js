var kanbanSource = [
                    { id: 1, status: "new", text: "Honey Maid Cheesecake", tags: "Honey, Maid, Cheesecake", color: "green" },
                    { id: 2, status: "work", text: "PHILADELPHIA Classic Cheesecake", tags: "Classic, Cheesecake", color: "red" },
                    { id: 5, status: "work", text: "Chocolate Cookie Cheesecake", tags: "Chocolate, Cookie", color: "green" },
                    { id: 3, status: "test", text: "Coconut-Lime Cheesecake", tags: "Coconut, Lime, Cheesecake", color: "green" },
                    { id: 4, status: "done", text: "Caramel Macchiato Cheesecake", tags: "Caramel, Macchiato", color: "green" }
];

var kanbanSource2 = [
                    { id: 11, status: "new", text: "Add labels to a pie chart 1", image: "http://www.joomlaworks.net/images/demos/galleries/abstract/7.jpg", tags: "webix,chart", color: "gold" },
                    { id: 12, status: "work", text: "Create design of the app 1", tags: "webix,chart", color: "orange", image: "http://www.joomlaworks.net/images/demos/galleries/abstract/7.jpg", comments: [{ text: "Comment 1" }, { text: "Comment 2" }] },
                    { id: 13, status: "test", text: "Test the new feature 1", tags: "webix,chart", color: "moccasin", image: "http://www.joomlaworks.net/images/demos/galleries/abstract/7.jpg", votes: 1, personId: 2 },
                    { id: 14, status: "done", text: "Add a new feature 1", tags: "webix,chart", color: "chocolate", image: "http://www.joomlaworks.net/images/demos/galleries/abstract/7.jpg", $css: "critical" }
];

var kanbanSource3 = [
                    { id: 11, status: "new", text: "Add labels", image: "http://www.joomlaworks.net/images/demos/galleries/abstract/7.jpg", tags: "webix,chart", color: "gold" },
                    { id: 12, status: "work", text: "Create design", tags: "chart", color: "orange", image: "http://www.joomlaworks.net/images/demos/galleries/abstract/7.jpg", comments: [{ text: "Comment 1" }, { text: "Comment 2" }] },
                    { id: 13, status: "test", text: "Test", tags: "chart", color: "moccasin", image: "http://www.joomlaworks.net/images/demos/galleries/abstract/7.jpg", votes: 1, personId: 2 },
                    { id: 14, status: "test", text: "Add feature", tags: "chart", color: "chocolate", image: "http://www.joomlaworks.net/images/demos/galleries/abstract/7.jpg", $css: "critical" }
];

var kanbanSource4 = [
        { id: 21, status: "new", text: "Add chart 2", image: "http://www.joomlaworks.net/images/demos/galleries/abstract/7.jpg", tags: "webix", color: "gold" },
        { id: 22, status: "new", text: "Create app 2", tags: "webix", color: "orange", image: "http://www.joomlaworks.net/images/demos/galleries/abstract/7.jpg", comments: [{ text: "Comment 1" }, { text: "Comment 2" }] },
        { id: 23, status: "new", text: "Test feature", tags: "chart", color: "moccasin", image: "http://www.joomlaworks.net/images/demos/galleries/abstract/7.jpg", votes: 1, personId: 2 },
        { id: 24, status: "new", text: "Add a new", tags: "chart", color: "chocolate", image: "http://www.joomlaworks.net/images/demos/galleries/abstract/7.jpg", $css: "critical" }
];

var kanbanSourceEditable = [
                    { id: 0, status: "new", text: "Honey Maid", tags: "Cheesecake", color: "green" },
                    { id: 1, status: "work", text: "PHILADELPHIA Classic", tags: "Cheesecake", color: "red" },
                    { id: 2, status: "work", text: "Chocolate Cookie", tags: "Cookie", color: "green" },
                    { id: 3, status: "test", text: "Coconut-Lime", tags: "Cheesecake", color: "green" },
                    { id: 4, status: "done", text: "Caramel Macchiato", tags: "Macchiato", color: "green" }
];

/* var kanbanColumns = [
         { title: "Backlog", content: { status: "new" } },
         { title: "In Progress", content: { status: "work" } },
         { title: "Testing", content: { status: "test" } },
         { title: "Done", content: { status: "done" } }
 ];*/

var kanbanColumns = [
        { text: "Backlog", dataField: "new", access: "none", maxItems: 5 },
        { text: "In Progress", dataField: "work", access: "none", maxItems: 5 },
        { text: "Testing", dataField: "test", access: "none", maxItems: 5 },
        { text: "Done", dataField: "done", access: "none", maxItems: 5 }
];

var template1 = "<div class='jqx-kanban-item' id='kanban-item_0' style='height:60px;'>"
                    + "<div class='jqx-kanban-item-status jqx-kanban-handle' style='float:left; width:5%; height:100%; border-radius: 0px;'> </div>"
                    + "<div style='float:right; width:92%; padding:1%;'>"
                            + "<div class='jqx-kanban-item-header'></div>"
                            + "<div class='jqx-kanban-item-footer' style='margin-left:-3px;'></div>"
                    + "</div>"
                    + "<div style='clear:both;'></div>"
            + "</div>";

var template2 = "<div class='jqx-kanban-item' id='kanban-item_0'>"
                                + "<div class='jqx-kanban-item-status jqx-kanban-handle'></div>"
                                + "<div class='jqx-kanban-item-header'></div>"
                                + "<div class='jqx-kanban-item-footer'></div>"
                        + "</div>";