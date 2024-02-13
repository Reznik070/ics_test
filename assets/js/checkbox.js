function selectOnlyThis(id) {
    for (var i = 1;i <= 2; i++)
    {
        document.getElementById("Check" + i).checked = false;
    }
    document.getElementById(id).checked = true;
}