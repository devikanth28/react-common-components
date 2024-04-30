import{_ as e}from"./extends-64d70faf.js";import{a as t,b as n,_ as r}from"./slicedToArray-234eb55e.js";import{a as l,_ as a}from"./toConsumableArray-1e6b09df.js";import{_ as o}from"./unsupportedIterableToArray-26c08a6b.js";import{_ as u,a as i}from"./defineProperty-475080e2.js";import{a as s,b as c,c as d,d as f,e as m,_ as v}from"./createClass-2eab1421.js";import{a as p}from"./Typeahead-1d4401bd.js";import E from"react";import{s as h,R as g,v as y}from"./StackedImages-fef8acf7.js";var F=s((function e(t,n,r){c(this,e),this.id=n,this.htmlElementType=t,this.label=r}));function b(e,t,n){return t=f(t),m(e,I()?Reflect.construct(t,n||[],f(e).constructor):t.apply(e,n))}function I(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(I=function(){return!!e})()}var T=function(e){function t(e,n){var r;return c(this,t),r=b(this,t,["FORM",e,n]),u(r,"htmlGroups",[]),u(r,"submitDisabled",!1),u(r,"atleastOneFieldRequired",!1),r}return d(t,F),s(t)}();function O(e,t,n){return t=f(t),m(e,S()?Reflect.construct(t,n||[],f(e).constructor):t.apply(e,n))}function S(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(S=function(){return!!e})()}var D=function(e){function t(e,n){var r;return c(this,t),r=O(this,t,["ELEMENTGROUP",e,n]),u(r,"groups",[]),u(r,"groupElements",[]),r}return d(t,F),s(t)}();var R=["key"];function A(e,t,n){return t=f(t),m(e,C()?Reflect.construct(t,n||[],f(e).constructor):t.apply(e,n))}function C(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(C=function(){return!!e})()}var k=function(f,m,b){var I=function(I){function O(e){var s;return c(this,O),s=A(this,O,[e]),u(s,"subscribe",(function(e){var t=e.type,n=e.payload;if(!s.state.observers[t]){var r=s.state.observers;r[t]=n,s.setState({observers:r})}})),u(s,"subscribeAll",(function(e){Object.entries(e).map((function(e){var t=r(e,2),n=t[0],l=t[1];s.subscribe({type:n,payload:l})}))})),u(s,"unSubscribe",(function(e){Object.entries(s.state.observers).forEach((function(t){var n=r(t,2),l=n[0];if(n[1]==e||e===l){var a=s.state.observers;a.key;var o=v(a,R);s.setState({observers:o})}}))})),u(s,"unSubscribeAll",(function(e){e.map((function(e){s.unSubscribe(e)}))})),u(s,"notify",(function(e){var t=e.type,n=e.payload;Object.entries(s.state.observers).forEach((function(e){var l=r(e,2),a=l[0],o=l[1];"ALL"!==a&&a!==t||o({type:t,payload:n})}))})),u(s,"clearObservables",(function(){s.setState({observers:{}})})),u(s,"getObservers",(function(){return s.state.observers})),u(s,"createElement",(function(e,t,n){var r=null;switch(e){case"FORM":r=new T(n,t);break;case"ELEMENTGROUP":r=new D(n,t);break;default:r=new F(e,t,n)}return r})),u(s,"createForm",(function(e,t){return s.createElement("FORM",e,t)})),u(s,"createGroup",(function(e,t){return s.createElement("ELEMENTGROUP",e,t)})),u(s,"createOption",(function(e,t,n,r){return{htmlElementType:"OPTION",id:e,displayValue:t,value:n,selected:r}})),u(s,"createReactSelectOption",(function(e,t,n){return{htmlElementType:"OPTION",id:n,displayValue:e,value:t,disabled:arguments.length>3&&void 0!==arguments[3]&&arguments[3]}})),u(s,"addForm",(function(e){s.getForm(e.id)||s.setDefaultValuesToForm(e)})),u(s,"validateAndSetErrorMessagesInForm",(function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],l=arguments.length>3&&void 0!==arguments[3]&&arguments[3];s.traverseForm((function(a,o,u,i){if(s.isEqual(a,e)&&(i=!0),i){if(!t&&1==a.hidden||!n&&1==a.readOnly||!l&&1==a.disabled)return[i=!1];var c=y(a,a.value,"blur"),d=r(c,2);d[0];var f=d[1];a.message=f}return[i]}))})),u(s,"getFormErrorConfigurations",(function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],l=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a={submitDisabled:null,atleastOneFieldRequired:null,errorMessages:{}};return s.traverseForm((function(o,u,i,c){if(s.isEqual(o,e)&&(c=!0),"FORM"==o.htmlElementType&&s.isEqual(o,e)&&(a.submitDisabled=o.submitDisabled,a.atleastOneFieldRequired=o.atleastOneFieldRequired),c){if(0==t&&1==o.hidden||0==n&&1==o.readOnly||0==l&&1==o.disabled)return[c=!1];if("BUTTON"===o.htmlElementType||!s.checkIfHtmlElement(o))return[c];var d=y(o,o.value,"blur",null,s),f=r(d,2);f[0];var m=f[1];a.errorMessages[o.id]=m}return[c]}),"READ"),s.processFormDataAndCheckIfFormIsValid(a.submitDisabled,a.atleastOneFieldRequired,a.errorMessages)})),u(s,"collectValuesForSubmit",(function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],l={};return s.traverseForm((function(a,o,u,i){if(s.isEqual(a,e)&&(i=!0),1==i){if(!t&&1==a.hidden||!n&&1==a.readOnly||!r&&1==a.disabled)return[i=!1];"DATALIST"==a.htmlElementType&&a.considerInputText?l[a.id]=a.value&&a.value.length?a.value:a.inputText:"BUTTON"!==a.htmlElementType&&s.checkIfHtmlElement(a)&&(l[a.id]=a.value)}return[i]}),"READ"),l})),u(s,"validateAndCollectValuesForSubmit",(function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],l=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=s.getFormErrorConfigurations(e,t,n,l),o=r(a,2),u=o[0],i=o[1];return 1==u?(alert("Please Enter Atleast One Field"),null):1==i?(s.validateAndSetErrorMessagesInForm(e,t,n,l),null):s.collectValuesForSubmit(e,t,n,l)})),u(s,"collectSpecificFieldValues",(function(e,t){var n={};return s.traverseForm((function(e,r,l){s.checkIfHtmlElement(e)&&t&&-1!=t.indexOf(e.id)&&(n[e.id]=e.value)}),"READ"),n})),u(s,"processFormDataAndCheckIfFormIsValid",(function(e,t,n){var r=0,l=0;Object.values(n).map((function(e){e?l++:r++}));var a=!1,o=!1;return r<1&&t?a=!0:l>0&&!t&&(o=!0),[a,o]})),u(s,"addForms",(function(e){e.map((function(e){s.addForm(e)}))})),u(s,"addElementAnyWhere",(function(e,t,n,r){s.traverseForm(s.domManipulation,r,n,t,e)})),u(s,"updateDataFromServer",(function(e,t,n,r){s.updateSingleKeyValueIntoField(n,r,t,e)})),u(s,"domManipulation",(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t[0],l=t[1],a=t[2],o=t[3],u=t[4],i=t[5];if(r.id!==u)return!1;var s=!1;if(l.map((function(e){e.id!==(null==i?void 0:i.id)||"INSERT_BEFORE"!==o&&"INSERT_AFTER"!==o&&"ADD"!==o||(s=!0)})),!s)switch(o){case"INSERT_BEFORE":l.splice(a,0,i);break;case"INSERT_AFTER":l.splice(a+1,0,i);break;case"UPDATE":l.splice(a,1,i);break;case"DELETE":l.splice(a,1);break;case"ADD":l.push(i);break;default:return!1}})),u(s,"clear",(function(){s.traverseForm((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t[0],l=t[1];t[2],s.checkIfElementIsForm(r)&&l.splice(0,l.length)}))})),u(s,"getForm",(function(e){return s.getHtmlElement(e)})),u(s,"size",(function(){return s.state.forms.length})),u(s,"isEmpty",(function(){return 0===s.state.forms.length})),u(s,"removeElement",(function(e){s.traverseForm((function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var l=n[0],a=n[1],o=n[2];l.id===e&&a.splice(o,1)}))})),u(s,"removeForm",(function(e){s.removeElement(e)})),u(s,"removeGroup",(function(e){s.removeElement(e)})),u(s,"hideForm",(function(e){s.hideElement(e)})),u(s,"hideGroup",(function(e){s.hideElement(e)})),u(s,"hideElement",(function(e){s.updateSingleKeyValueIntoField("hidden",!0,e)})),u(s,"clearErrorMessageForField",(function(e){s.updateSingleKeyValueIntoField("message",null,e)})),u(s,"isEqual",(function(e,t){return!e||e.id===t})),u(s,"checkIfSameForm",(function(e,t){return"FORM"!==e.elementType||e.id===t})),u(s,"getHtmlElementValue",(function(e){var t=s.getHtmlElement(e);return t&&"DATALIST"==t.htmlElementType?t?t.value?t.value:t.inputText:null:t?t.value:null})),u(s,"getHtmlElementProperty",(function(e,t){return s.getHtmlElement(e)[t]})),u(s,"getHtmlElement",(function(e){var t={};return s.traverseForm((function(n,r,l){s.isEqual(n,e)&&(t.htmlElement=n)}),"READ"),t.htmlElement})),u(s,"setDefaultValuesToForm",(function(e){s.traverseForm((function(t,n,r){if("CHECKBOX"===t.htmlElementType){var l=[],a=t.switchType;t.values&&t.values.map((function(e){e.selected&&(a?t.value=e.value:l.push(e.value))})),l.length>0&&(t.value=l)}else if("RADIO"===t.htmlElementType||"SELECT"==t.htmlElementType){var o=null;t.values||(t.values=[]),t.values.map((function(e){e.selected&&(o=e.value)})),t.value=o}else if(e.submitDisabled&&"BUTTON"===t.htmlElementType&&t.submit)t.disabled=!0;else if("DATALIST"==t.htmlElementType){var u,i;if(t.value||(t.value=[]),t.values||(t.values=[]),null===(u=t.value)||void 0===u||!u.length)null===(i=t.values)||void 0===i||i.map((function(e){var n=e.value;e.selected&&(t.value=[n])}))}else"DATERANGE"==t.htmlElementType?t.value=[t.startDate,t.endDate]:t.defaultValue&&(t.value=t.defaultValue);if("ELEMENTGROUP"==t.htmlElementType&&1==t.cloneable){var c=s.addUniqueId(t,0,"");n[r]=c}}),"IS_DEFAULT_CONFIGURED",e)})),u(s,"contains",(function(e){return!!s.getHtmlElement(e)})),u(s,"traverseForm",(function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),l=1;l<t;l++)n[l-1]=arguments[l];var o=n||[],u=r(o,2),i=u[0],c=u[1],d=[],f=s.stateRefCopy.current;d="IS_DEFAULT_CONFIGURED"===i?[].concat(a(f),[c]):a(f);for(var m=0;m<d.length;m++){var v,p=d[m];if(o=e.apply(void 0,[p,d,m].concat(a(o)))||[],p.htmlGroups)(v=s).traverseGroups.apply(v,[p.htmlGroups,e].concat(a(o)))}s.stateRefCopy.current=d,"READ"!=i&&s.setState((function(e){return e.forms,{forms:s.stateRefCopy.current}}))})),u(s,"traverseGroups",(function(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),l=2;l<n;l++)r[l-2]=arguments[l];for(var o=r||[],u=0;u<e.length;u++){var i,c=e[u],d=[].concat(o);d=t.apply(void 0,[c,e,u].concat(a(d)))||[];for(var f=0;f<(null==c||null===(m=c.groupElements)||void 0===m?void 0:m.length);f++){var m,v=c.groupElements[f];t.apply(void 0,[v,c.groupElements,f].concat(a(d)))}if(c.groups)(i=s).traverseGroups.apply(i,[c.groups,t].concat(a(d)))}})),u(s,"getForms",(function(){return a(s.state.forms)})),u(s,"getSubmitButton",(function(e){var t={};return s.traverseForm((function(n,r,l){if(!s.checkIfSameForm(n,e))return!0;"BUTTON"===n.htmlElementType&&n.submit&&(t.submitButton=n)}),"READ"),t.submitButton})),u(s,"checkIfElementIsForm",(function(e){return"FORM"==e.htmlElementType})),u(s,"checkIfElementIsGroup",(function(e){return"ELEMENTGROUP"==e.htmlElementType})),u(s,"checkIfHtmlElement",(function(e){return"FORM"!==e.htmlElementType&&"ELEMENTGROUP"!==e.htmlElementType})),u(s,"resetForm",(function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],l=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];s.traverseForm((function(o,u,i,c){if(s.isEqual(o,e)&&(c=!0),c){if(1==o.disabled&&!n||1==o.readOnly&&!l||1==o.hidden&&!a)return[c=!1];if(o.defaultValue?o.value=o.defaultValue:o.value="",1==t){var d=y(o,o.value,"blur",null,s),f=r(d,2);f[0];var m=f[1];o.message=m}else o.message=null}return[c]}))})),u(s,"sendRequest",(function(e,t){return p(e,t)})),u(s,"deepEqualFiles",(function(e,t){return e.size===t.size&&e.type===t.type&&e.name===t.name&&e.lastModified===t.lastModified&&e.lastModifiedDate===t.lastModifiedDate})),u(s,"deepEqual",(function(e,t){var n=Object.keys,r=i(e),l=i(t);return e instanceof File&&t instanceof File?s.deepEqualFiles(e,t):e&&t&&"object"===r&&r===l?n(e).length===n(t).length&&n(e).every((function(n){return s.deepEqual(e[n],t[n])})):e===t})),u(s,"isFormUntouched",(function(e){return s.traverseForm((function(e,t,n){e.value!==e.defaultValue&&function(e){throw new TypeError('"'+e+'" is read-only')}("isFormUntouched")}),"READ"),!0})),u(s,"updateSpecificValues",(function(e,t){s.traverseForm((function(n,r,l){if(!s.checkIfSameForm(n,t))return!0;Object.keys(e).includes(n.id)&&(n.value=e[n.id])}))})),u(s,"updateKeyValuesToAllFields",(function(e,t,n){s.traverseForm((function(r,l,a,o){return s.checkIfSameForm(r,n)&&(o=!0),o&&(r[e]=t),[o]}))})),u(s,"updateSingleKeyValueIntoField",(function(e,t,n,l){s.traverseForm((function(a,o,u){if(a.id===n){if(0==l||"value"!=e)return void(a[e]=t);var i=y(a,t,"blur",null,s),c=r(i,2),d=c[0],f=c[1];d&&("DATALIST"==a.htmlElementType&&s.updateSingleKeyValueIntoField("inputText",null,n,!1),a[e]=t),a.message=f}}))})),u(s,"disableElement",(function(e){s.updateSingleKeyValueIntoField("disabled",!0,e)})),u(s,"enableElement",(function(e){s.updateSingleKeyValueIntoField("disabled",!1,e)})),u(s,"updateValue",(function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];s.updateSingleKeyValueIntoField("value",e,t,n)})),u(s,"updateErrorMessage",(function(e,t){s.updateSingleKeyValueIntoField("message",e,t)})),u(s,"showElement",(function(e){s.updateSingleKeyValueIntoField("hidden",!1,e)})),u(s,"validateImageServerDetails",(function(e,t,n){var r=e.imageServerUrl,l=e.clientId,a=e.accessToken;return e.logicalName,r&&l&&a&&t&&n?r+"/upload?token="+a+"&clientId="+l+"&imageType="+t+"&vertical="+n:null})),u(s,"uploadToImageServer",(function(e,t,n,r){var l=s.validateImageServerDetails(t,n,r),a=s.getHtmlElement(e),o=s.getHtmlElementValue(e),u=new FormData;if(a){if(!o)return Promise.reject("No FileData Available");for(var i=0;i<(null==o?void 0:o.length);i++)u.append("files",o[i],o[i].name);if(e&&s.getHtmlElement(e)&&null!=l){return h(g.POST,l,null,{"Content-Type":"multipart/formData"},u)}return Promise.reject("Provide required details")}return Promise.reject("No Element Available with the given id")})),u(s,"getDisplayValueForOptionValue",(function(e,t){var n=null;return s.traverseForm((function(r,l,a){if(r.id===e){var o=r.values;o&&o.map((function(e){e.value==t&&(n=e.displayValue)}))}}),"READ"),n})),u(s,"removeFile",(function(e,t){s.traverseForm((function(n,r,l){if(n.id===e&&n.value.length>0){var o=a(n.value);o=o.filter((function(e){return e.name!=t})),n.value=o,y(n,o,"change",null,s)}}))})),u(s,"addToGroup",(function(e,t){s.traverseForm((function(n,r,l){n.id===e&&(s.checkIfElementIsGroup(t)&&n.groups.push(t),s.checkIfHtmlElement(t)&&n.groupElements.push(t))}))})),u(s,"cloneElement",(function(e,t){var n=s.getHighestIndexAndElementCopy(e),l=r(n,2),a=l[0],o=l[1],u=a.split("_"),i=u.pop();u.push(Number(i)+1),u=u.join("_");var c=s.removeUniqueId(o),d=s.eraseProperties(c,t||["value","message"]);return s.addUniqueId(d,-1,u)})),u(s,"eraseProperties",(function(e,t){return s.cloneJSON(e,(function(e,n,r){return t&&t.includes(e)?(n[e]=null,[!0]):[!1]}))})),u(s,"cloneState",(function(e){return s.cloneJSON(e,(function(e,t,n){return[!1]}))})),u(s,"cloneJSON",(function(e,r){if(null==e||"object"!==i(e)||e instanceof File||e instanceof Date)return e instanceof File?new File([e],e.name,{type:e.type}):e;for(var u=arguments.length,c=new Array(u>2?u-2:0),d=2;d<u;d++)c[d-2]=arguments[d];if(e instanceof Array){for(var f=[],m=0;m<e.length;++m){var v,p=(v=s).cloneJSON.apply(v,[e[m],r].concat(c));(!p||"object"!=i(p)||0!=Object.keys(p).length||p instanceof File||p instanceof Date)&&(f[m]=p)}return f}var E,h={};for(var g in e){var y,F=r.apply(void 0,[g,h,e].concat(c)),b=t(E=F)||l(E)||o(E)||n(),I=b[0],T=b.slice(1);I||(h[g]=(y=s).cloneJSON.apply(y,[e[g],r].concat(a(T))))}return h})),u(s,"addUniqueId",(function(e,t,n){return s.cloneJSON(e,(function(e,r,l,a){var o=a;if(1==l.clonedCopy)return[!0,o];if(1==l.cloneable&&o++,"clonedCopy"==e)return r.clonedCopy=0!=t,[!0,o];if("id"==e){a++;for(var u="".concat(l[e]).concat(n),i=0;i<o;i++)u+="_0";return r[e]=u,r.originalId=l[e],0==t&&(r.clonedCopy=!1),[!0,o]}return[!1,o]}),t)})),u(s,"getHighestIndexAndElementCopy",(function(e){var t=null,n=-1,l=null;return s.traverseForm((function(a,o,u){var i=s.extractAutoGeneratedCurrentId(a.id),c=r(i,1)[0];a.id.includes(e)&&!isNaN(c)&&Number(n)<Number(c)&&(l=a.id.replace(a.originalId,""),n=c),e.includes(null==a?void 0:a.originalId)&&0==a.clonedCopy&&(t=a)}),"READ"),[l,t]})),u(s,"extractAutoGeneratedCurrentId",(function(e){return e.split("_").splice(-1)})),u(s,"isRelativeElement",(function(e,t){return s.getHtmlElement(t).originalId==e})),u(s,"removeUniqueId",(function(e){return s.cloneJSON(e,(function(e,t,n){return"id"==e&&n.originalId?(t[e]=n.originalId,[!0]):[!1]}))})),u(s,"createReferenceId",(function(e,t){return t+e.id.replace(e.originalId,"")})),u(s,"getDefaultId",(function(e){var t=null;return s.traverseForm((function(n,r,l){return n.id.includes(e)&&0==n.clonedCopy&&(t=n.id),[!1]}),"READ"),t})),u(s,"collectClonedData",(function(e){var t={},n=s.getHtmlElement(e);return s.recursiveCollectClonedData(t,n),t})),u(s,"checkIfGroupIsCloneable",(function(e){return e.cloneable})),u(s,"checkIfGroupContainsCloneables",(function(e){return e&&e.groups&&1==e.groups[0].cloneable})),u(s,"addOptions",(function(e,t,n){if(n)s.updateSingleKeyValueIntoField("values",t,e);else{var r=s.getHtmlElementProperty(e,"values");null!=r?s.updateSingleKeyValueIntoField("values",[].concat(a(r),a(t)),e):s.updateSingleKeyValueIntoField("values",t,e)}})),u(s,"recursiveCollectClonedData",(function(e,t){var n=t.id,r=t.value,l=t.htmlElementType,a=t.originalId;if(s.checkIfHtmlElement(t))"BUTTON"!==l&&(e[a||n]=r);else if(s.checkIfGroupContainsCloneables(t)){var o,u,i=[];e[a||n]=i,null===(o=t.groups)||void 0===o||o.map((function(e){s.recursiveCollectClonedData(i,e)})),null===(u=t.groupElements)||void 0===u||u.map((function(t){s.recursiveCollectClonedData(e,t)}))}else{var c,d,f=1==t.cloneable?{}:e;null===(c=t.groups)||void 0===c||c.map((function(e){s.recursiveCollectClonedData(f,e)})),null===(d=t.groupElements)||void 0===d||d.map((function(e){s.recursiveCollectClonedData(f,e)})),Array.isArray(e)&&1==t.cloneable?e.push(f):e[a||n]=f}})),u(s,"customRef",(function(e){return document.getElementById(e)})),u(s,"setLoader",(function(e,t){s.updateSingleKeyValueIntoField("isLoading",t,e)})),u(s,"addOption",(function(e,t){s.traverseForm((function(n,r,l){n.id===e&&(t.selected&&(n.value?n.value.push(t.value):n.value=[t.value]),null!=n.values?n.values.push(t):n.values=[t])}))})),s.state={forms:[],initialLoad:!1,moduleName:m,user:b,observers:{}},s.setState=s.setState.bind(s),s.stateRefCopy=E.createRef(),s.initialLoad=E.createRef(),s.initialLoad.current=!1,s.stateRefCopy.current=[],s}return d(O,I),s(O,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return E.createElement(E.Fragment,null,E.createElement(f,e({helpers:this},this.props,{formData:this.state.forms,initialLoad:this.initialLoad})))}}])}(E.Component);return I};export{D as E,T as F,F as H,k as w};
//# sourceMappingURL=WithFormHoc-55969727.js.map