document.addEventListener("DOMContentLoaded", function () {
    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: "#navbarSupportedContent"
    });
});
const datetimeElement = document.getElementById("dateTime");
      const now = new Date();
      datetimeElement.innerText = now.toLocaleString();