function slider2LabelFormatFunction(value) {
    if (value.year() === 2018 && value.month() === 5 && value.day() === 17) {
        return '<div id="birthday">' + value.toString('MMM d, yyyy') + '<br/>★Peter\'s birthday★</div>';
    }

    return value.toString('MMM d, yyyy');
}