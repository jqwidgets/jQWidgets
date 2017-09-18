var getLocalization = function (culture) {
    var localization = null;
    switch (culture) {
        case "bg":
            localization =
            {
                buttoneditstring: "Редактирай",
                menuaddremoveitemstring: "Добави/Изтрий",
                menuadditemstring: "Добави",
                menuremoveitemstring: "Изтрий избраната",
                menuexpandcollapsestring: "Показване/Скриване",
                menuexpandstring: "Покажи",
                menucollapsestring: "Скрий",
                menuexportstring: "Експорт",
                menuredrawheaderstring: "Пречертай хедъра",
                menuopenclosestring: "Отвори/Затвори",
                menuopenstring: "Отвори",
                menuclosestring: "Затвори",
                menufilteringstring: "Филтриране",
                filterby: "Филтрирай по",
                menuaddfilterstring: "Добави филтър",
                menuremovefilterstring: "Премахни филтъра",
                avatarchoisestring: "Смени аватара",
                edititemstring: "Едитирай ...",
                editheadlinestring: "Заглавие",
                editcopystring: "Текст",
                editfooterstring: "Футър",
                editstatusstring: "Статус",
                removeitemstring: "Изтрий елемента",
                removeitemconfirmationstring: "Искате ли наистина да изтриете елемента?",
                buttonsavestring: "Запамети",
                buttonadditemstring: "Добави елемента",
                buttonconfirmstring: "Потвърди",
                buttondeclinestring: "Откажи",
                filterbyavatar: "Аватар",
                filterbyheadline: "Заглавие",
                filterbycopytext: "Съдържание",
                filterbystatus: "Статус",
                filterbytaggs: "Тагове",
                newitem: "Нов елемент"
            }
            break;
        case "de":
            localization =
            {
                buttoneditstring: "Editieren",
                menuaddremoveitemstring: "Hinzufügen / Entfernen",
                menuadditemstring: "Artikel hinzufügen",
                menuremoveitemstring: "Ausgewählte entfernen",
                menuexpandcollapsestring: "Erweitern / Reduzieren",
                menuexpandstring: "Erweitern",
                menucollapsestring: "Reduzieren",
                menuexportstring: "Export Kanban",
                menuredrawheaderstring: "Neuzeichnen",
                menuopenclosestring: "Öffnen / Schließen",
                menuopenstring: "Öffnen",
                menuclosestring: "Schließen",
                menufilteringstring: "Filterung",
                menuaddfilterstring: "Filter hinzufügen",
                filterby: "Filtering",
                menuremovefilterstring: "Filter aufheben",
                avatarchoisestring: "Wählen Sie ein paar neue Avatar für",
                edititemstring: "Artikel editieren",
                editheadlinestring: "Überschrift",
                editcopystring: "Copytext",
                editfooterstring: "Footer-tags",
                editstatusstring: "Status",
                removeitemstring: "Artikel entfernen",
                removeitemconfirmationstring: "Wollen Sie wirklich, um ausgewählte Element zu entfernen?",
                buttonsavestring: "Sparen",
                buttonadditemstring: "Artikel hinzufügen",
                buttonconfirmstring: "Bestätigen",
                buttondeclinestring: "Rückgang",
                filterbyavatar: "Avatar",
                filterbyheadline: "Headline",
                filterbycopytext: "Copy",
                filterbystatus: "Status",
                filterbytaggs: "Taggs",
                newitem: "New item"
            }
            break;
        default:
            localization =
                {
                    buttoneditstring: "Edit",
                    menuaddremoveitemstring: "Add/Remove",
                    menuadditemstring: "Add item",
                    menuremoveitemstring: "Remove selected",
                    menuexpandcollapsestring: "Expand/Collapse",
                    menuexpandstring: "Expand",
                    menucollapsestring: "Collapse",
                    menuexportstring: "Export Kanban",
                    menuredrawheaderstring: "Redraw header",
                    menuopenclosestring: "Open/Close",
                    menuopenstring: "Open",
                    menuclosestring: "Close",
                    menufilteringstring: "Filtering",
                    filterby: "Filtering",
                    menuaddfilterstring: "Add filter",
                    menuremovefilterstring: "Remove filter",
                    avatarchoisestring: "Choose some new avatar for",
                    edititemstring: "Edit item",
                    editheadlinestring: "Headline",
                    editcopystring: "Copytext",
                    editfooterstring: "Footer tags",
                    editstatusstring: "Status",
                    removeitemstring: "Remove item",
                    removeitemconfirmationstring: "Do you realy want to remove selected item?",
                    buttonsavestring: "Save",
                    buttonadditemstring: "Add item",
                    buttonconfirmstring: "Confirm",
                    buttondeclinestring: "Decline",
                    filterbyavatar: "Avatar",
                    filterbyheadline: "Headline",
                    filterbycopytext: "Copy",
                    filterbystatus: "Status",
                    filterbytaggs: "Taggs",
                    newitem: "New item",
                    newitemalerttoomanytasks: "Cant add this item : too many tasks in this stage!"
                }
            break;
    }
    return localization;
}