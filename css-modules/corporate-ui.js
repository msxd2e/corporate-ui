const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `<dom-module id="corporate-ui"><template><style>
/*!
 * Corporate UI
 * Maintained and Developed by IXCC : corporate-ui.slack.com
 */
@import url("https://static.scania.com/resources/logotype/scania/logotype-stylesheet/scania-logotype.css");
@import url("https://static.scania.com/resources/fonts/scania-sans/scania-fonts.css");
@import url("https://static.scania.com/resources/fonts/font-awesome/font-awesome.css");
@import url("https://static.scania.com/resources/icons/scania/icons.css");
@import "../node_modules/corporate-ui/css-modules/core.css";
.css_compiled_at:before {
  content: "Wed May 30 2018 12:59:10 GMT+0200 (W. Europe Daylight Time)";
}

/*# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcnBvcmF0ZS11aS5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7WUFTWTtZQUdBO1lBSUE7WUFDQTtZQU9BO0FBbEJaLGdCQUFnQjtFQUFTLFNBQVMsNkRBQVQiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcclxuICogQ29ycG9yYXRlIFVJXHJcbiAqIE1haW50YWluZWQgYW5kIERldmVsb3BlZCBieSBJWENDIDogY29ycG9yYXRlLXVpLnNsYWNrLmNvbVxyXG4gKi9cclxuXHJcbiAvL0luc2VydCBDb21waWxlIERhdGVcclxuLmNzc19jb21waWxlZF9hdDpiZWZvcmUge2NvbnRlbnQ6IFwiYG5ldyBEYXRlKClgXCI7fVxyXG5cclxuLy8gSW1wb3J0IExvZ290eXBlXHJcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9zdGF0aWMuc2NhbmlhLmNvbS9yZXNvdXJjZXMvbG9nb3R5cGUvc2NhbmlhL2xvZ290eXBlLXN0eWxlc2hlZXQvc2NhbmlhLWxvZ290eXBlLmNzc1wiKTtcclxuXHJcbi8vIEltcG9ydCBGb250c1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL3NjYW5pYS1zYW5zL3NjYW5pYS1mb250cy5jc3NcIik7XHJcbi8vQGltcG9ydCB1cmwoXCIvY3NzL2ZvbnRzLmNzc1wiKTtcclxuXHJcbi8vIEltcG9ydCBJY29uc1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ZvbnRzL2ZvbnQtYXdlc29tZS9mb250LWF3ZXNvbWUuY3NzXCIpO1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vc3RhdGljLnNjYW5pYS5jb20vcmVzb3VyY2VzL2ljb25zL3NjYW5pYS9pY29ucy5jc3NcIik7XHJcbi8vQGltcG9ydCB1cmwoXCIvY3NzL2ljb25zLmNzc1wiKTtcclxuXHJcbi8vIEBpbXBvcnQgdXJsKFwiYnJhbmRzLmNzc1wiKTsgIFRISVMgT05FIElTIE5PVCBJTiBVU0UgcmF0aGVyIHRoYW4gdGhpcyBvbmU6IC9yZXNvdXJjZXMvYnJhbmRzL2pzL2FwcGx5LWJyYW5kLmpzXHJcbi8vVE9ETyBtYXlhNWo6IEluY2x1ZGUgdGhpcyBoZXJlPz8/XHJcbi8vQGltcG9ydCB1cmwoXCJodHRwczovL3N0YXRpYy5zY2FuaWEuY29tL3ZlbmRvcnMvZnJhbWV3b3Jrcy9ib290c3RyYXAvMy4yLjAvZGlzdC9jc3MvYm9vdHN0cmFwLW9yZy5jc3NcIik7XHJcbi8vIEJvb3RzdHJhcCByZWxhdGVkIHN0dWZmXHJcbkBpbXBvcnQgdXJsKFwiY29yZS5jc3NcIik7XHJcbiJdLCJmaWxlIjoiY29ycG9yYXRlLXVpLmNzcyJ9 */

</style></template></dom-module>`;

document.head.appendChild($_documentContainer.content);

/**
@license Apache 2.0
Copyright (c) 2017 Horacio "LostInBrittany" Gonzalez for the style module encapsulation of CSS files
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
@demo demo/index.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
;