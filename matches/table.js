//table schema data can be stored anywhere and requested as a resource file in json format
//table can be used as a utility
//Demonstrates html elements as well as literal values can be loaded dynamically
var tableSchemaData = [
    {
        "Club": "<img alt='Real Madrid' src='../assets/club-logos/realMadrid.png' width='24px' height='24px' /> Real Madrid", "MP": 10, "W": 7, "D": 1, "L": 2,
        "GF": 1, "GA": 8, "GD": 8, "Pts": 8, "Last 5": " <div class='flex-wrapper'>" +
            "<span class='match-won-symbol'> &#x2714;</span>" +
            "<span class='match-won-symbol'> &#x2714;</span>" +
            "<span class='match-won-symbol'> &#x2714;</span>" +
            "<span class='match-lost-symbol'> &#x2613;</span>" +
            "<span class='match-won-symbol'> &#x2714;</span></div>"
    },
    {
        "Club": "<img alt='Barcelona' src='../assets/club-logos/barcelona.png' width='24px' height='24px' /> Barcelona", "MP": 10, "W": 6, "D": 0, "L": 4,
        "GF": 1, "GA": 7, "GD": 10, "Pts": 7, "Last 5": " <div class='flex-wrapper'>" +
            "<span class='match-won-symbol'> &#x2714;</span>" +
            "<span class='match-lost-symbol'> &#x2613;</span>" +
            "<span class='match-won-symbol'> &#x2714;</span>" +
            "<span class='match-won-symbol'> &#x2714;</span>" +
            "<span class='match-won-symbol'> &#x2714;</span></div>"
    },
    {
        "Club": "<img alt='Juventus' src='../assets/club-logos/juventus.png' width='24px' height='24px' /> Juventus", "MP": 10, "W": 5, "D": 1, "L": 4,
        "GF": 1, "GA": 6, "GD": 7, "Pts": 7, "Last 5": " <div class='flex-wrapper'>" +
            "<span class='match-won-symbol'> &#x2714;</span>" +
            "<span class='match-lost-symbol'> &#x2613;</span>" +
            "<span class='match-won-symbol'> &#x2714;</span>" +
            "<span class='match-won-symbol'> &#x2714;</span>" +
            "<span class='match-won-symbol'> &#x2714;</span></div>"
    },
    {
        "Club": "<img alt='Bayern Munich' src='../assets/club-logos/bayernmunich.png' width='24px' height='24px' /> Bayern Munich", "MP": 10, "W": 5, "D": 2, "L": 3,
        "GF": 7, "GA": 7, "GD": 8, "Pts": 6, "Last 5": " <div class='flex-wrapper'>" +
            "<span class='match-won-symbol'> &#x2714;</span>" +
            "<span class='match-won-symbol'> &#x2714;</span>" +
            "<span class='match-lost-symbol'> &#x2613;</span>" +
            "<span class='match-won-symbol'> &#x2714;</span>" +
            "<span class='match-won-symbol'> &#x2714;</span></div>"
    },
    {
        "Club": "<img alt='Chelsea' src='../assets/club-logos/chelsea.png' width='24px' height='24px' /> Chelsea", "MP": 10, "W": 4, "D": 1, "L": 5,
        "GF": 1, "GA": 8, "GD": 8, "Pts": 8, "Last 5": " <div class='flex-wrapper'>" +
            "<span class='match-won-symbol'> &#x2714;</span>" +
            "<span class='match-won-symbol'> &#x2714;</span>" +
            "<span class='match-won-symbol'> &#x2714;</span>" +
            "<span class='match-lost-symbol'> &#x2613;</span>" +
            "<span class='match-won-symbol'> &#x2714;</span></div>"
    },
    {
        "Club": "<img alt='Dortmund' src='../assets/club-logos/dortmund.png' width='24px' height='24px' /> Dortmund", "MP": 10, "W": 3, "D": 0, "L": 7,
        "GF": 7, "GA": 1, "GD": 1, "Pts": 1, "Last 5": " <div class='flex-wrapper'>" +
            "<span class='match-won-symbol'> &#x2714;</span>" +
            "<span class='match-won-symbol'> &#x2714;</span>" +
            "<span class='match-won-symbol'> &#x2714;</span>" +
            "<span class='match-lost-symbol'> &#x2613;</span>" +
            "<span class='match-won-symbol'> &#x2714;</span></div>"
    }
];

// Builds the HTML Table out of myList.
function buildHtmlTable(selector) {
    var columns = addAllColumnHeaders(tableSchemaData, selector);
    for (var i = 0; i < tableSchemaData.length; i++) {
        var row$ = $('<tr/>');
        for (var colIndex = 0; colIndex < columns.length; colIndex++) {
            var cellValue = tableSchemaData[i][columns[colIndex]];
            if (cellValue == null) cellValue = "";
            row$.append($('<td/>').html(cellValue));
        }
        $(selector).append(row$);
    }
    $(selector).prepend('<button id="btnExport" onclick="fnExcelReport();" class="exportButton"> EXPORT </button>');
}

// Adds a header row to the table and returns the set of columns.
function addAllColumnHeaders(tableSchemaData, selector) {
    var columnSet = [];
    var headerTr$ = $('<tr/>');

    for (var i = 0; i < tableSchemaData.length; i++) {
        var rowHash = tableSchemaData[i];
        for (var key in rowHash) {
            if ($.inArray(key, columnSet) == -1) {
                columnSet.push(key);
                headerTr$.append($('<th/>').html(key));
            }
        }
    }
    $(selector).append(headerTr$);
    return columnSet;
}

function fnExcelReport() {
    let tab_text = "<table border='2px'><tr bgcolor='#82ad4a'>"; //Create new table to push inside excel
    let j = 0;
    tab = document.getElementById('clubStandings'); // id of table
    for (j = 0; j < tab.rows.length; j++) {
        tab_text = tab_text + tab.rows[j].innerHTML + "</tr>";
    }
    tab_text = tab_text + "</table>";
    tab_text = tab_text.replace(/<A[^>]*>|<\/A>/g, ""); //ignore external links from table
    tab_text = tab_text.replace(/<img[^>]*>/gi, ""); // ignore images from table
    tab_text = tab_text.replace(/<input[^>]*>|<\/input>/gi, ""); // ignore input tags

    sa = window.open('data:application/vnd.ms-excel,' + encodeURIComponent(tab_text));
    return (sa);
}