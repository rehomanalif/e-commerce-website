function showTab(tabName) {
    var tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(function (tab) {
        tab.classList.remove('show');
    });

    var buttons = document.querySelectorAll('.tabs button');
    buttons.forEach(function (button) {
        button.classList.remove('active');
    });

    document.getElementById(tabName + '-page').classList.add('show');
    document.getElementById(tabName + '-tab').classList.add('active');
}
