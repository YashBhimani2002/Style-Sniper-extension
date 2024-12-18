/******/ (() => { // webpackBootstrap
/*!********************************!*\
  !*** ./src/content/content.js ***!
  \********************************/
var body = document.getElementsByTagName("body")[0]; // Use the first <body> element directly

body.onmouseover = function (e) {
  chrome.storage.local.get('toggleStatus', function (response) {
    // Check if toggleStatus is defined and true
    if (!response || !response.toggleStatus) {
      e.stopPropagation();
      e.preventDefault();
      return; // Stop further execution if toggleStatus is undefined or false
    }

    // Get the element under the cursor
    var element = document.elementFromPoint(e.clientX, e.clientY);
    if (!element || element.tagName === "HTML") {
      return; // Ignore the <html> element or undefined targets
    }

    // Apply a blue border to the element
    element.style.border = "1px solid blue";

    // Add an onmouseout listener to remove the border
    element.onmouseout = function () {
      this.style.border = "0px";
    };
  });
};
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsSUFBTUEsSUFBSSxHQUFHQyxRQUFRLENBQUNDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRXZERixJQUFJLENBQUNHLFdBQVcsR0FBRyxVQUFVQyxDQUFDLEVBQUU7RUFDNUJDLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDQyxLQUFLLENBQUNDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsVUFBQ0MsUUFBUSxFQUFLO0lBQ25EO0lBQ0EsSUFBSSxDQUFDQSxRQUFRLElBQUksQ0FBQ0EsUUFBUSxDQUFDQyxZQUFZLEVBQUU7TUFDckNOLENBQUMsQ0FBQ08sZUFBZSxDQUFDLENBQUM7TUFDbkJQLENBQUMsQ0FBQ1EsY0FBYyxDQUFDLENBQUM7TUFDbEIsT0FBTyxDQUFDO0lBQ1o7O0lBRUE7SUFDQSxJQUFNQyxPQUFPLEdBQUdaLFFBQVEsQ0FBQ2EsZ0JBQWdCLENBQUNWLENBQUMsQ0FBQ1csT0FBTyxFQUFFWCxDQUFDLENBQUNZLE9BQU8sQ0FBQztJQUMvRCxJQUFJLENBQUNILE9BQU8sSUFBSUEsT0FBTyxDQUFDSSxPQUFPLEtBQUssTUFBTSxFQUFFO01BQ3hDLE9BQU8sQ0FBQztJQUNaOztJQUVBO0lBQ0FKLE9BQU8sQ0FBQ0ssS0FBSyxDQUFDQyxNQUFNLEdBQUcsZ0JBQWdCOztJQUV2QztJQUNBTixPQUFPLENBQUNPLFVBQVUsR0FBRyxZQUFZO01BQzdCLElBQUksQ0FBQ0YsS0FBSyxDQUFDQyxNQUFNLEdBQUcsS0FBSztJQUM3QixDQUFDO0VBQ0wsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQvY29udGVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdOyAvLyBVc2UgdGhlIGZpcnN0IDxib2R5PiBlbGVtZW50IGRpcmVjdGx5XHJcblxyXG5ib2R5Lm9ubW91c2VvdmVyID0gZnVuY3Rpb24gKGUpIHtcclxuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCgndG9nZ2xlU3RhdHVzJywgKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgdG9nZ2xlU3RhdHVzIGlzIGRlZmluZWQgYW5kIHRydWVcclxuICAgICAgICBpZiAoIXJlc3BvbnNlIHx8ICFyZXNwb25zZS50b2dnbGVTdGF0dXMpIHtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICByZXR1cm47IC8vIFN0b3AgZnVydGhlciBleGVjdXRpb24gaWYgdG9nZ2xlU3RhdHVzIGlzIHVuZGVmaW5lZCBvciBmYWxzZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gR2V0IHRoZSBlbGVtZW50IHVuZGVyIHRoZSBjdXJzb3JcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChlLmNsaWVudFgsIGUuY2xpZW50WSk7XHJcbiAgICAgICAgaWYgKCFlbGVtZW50IHx8IGVsZW1lbnQudGFnTmFtZSA9PT0gXCJIVE1MXCIpIHtcclxuICAgICAgICAgICAgcmV0dXJuOyAvLyBJZ25vcmUgdGhlIDxodG1sPiBlbGVtZW50IG9yIHVuZGVmaW5lZCB0YXJnZXRzXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBBcHBseSBhIGJsdWUgYm9yZGVyIHRvIHRoZSBlbGVtZW50XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCBibHVlXCI7XHJcblxyXG4gICAgICAgIC8vIEFkZCBhbiBvbm1vdXNlb3V0IGxpc3RlbmVyIHRvIHJlbW92ZSB0aGUgYm9yZGVyXHJcbiAgICAgICAgZWxlbWVudC5vbm1vdXNlb3V0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0eWxlLmJvcmRlciA9IFwiMHB4XCI7XHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiYm9keSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJvbm1vdXNlb3ZlciIsImUiLCJjaHJvbWUiLCJzdG9yYWdlIiwibG9jYWwiLCJnZXQiLCJyZXNwb25zZSIsInRvZ2dsZVN0YXR1cyIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0IiwiZWxlbWVudCIsImVsZW1lbnRGcm9tUG9pbnQiLCJjbGllbnRYIiwiY2xpZW50WSIsInRhZ05hbWUiLCJzdHlsZSIsImJvcmRlciIsIm9ubW91c2VvdXQiXSwic291cmNlUm9vdCI6IiJ9