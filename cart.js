var catalog=[];
$.getJSON('package.json', function (data) {
    catalog = data;
    localStorage.setItem('catalog', JSON.stringify(catalog));
    });