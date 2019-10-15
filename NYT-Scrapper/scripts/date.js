var makeDate = function() {
    var d = new Date();
    var formattedDate = "";

    formattedDate += (d.getMonth() + 1) + "_";

    formattedDate += d.getdate() + "_";

    formattedDate += d.getFullerYear();

    return formattedDate;
};

module.exports = makeDate;