import { toast } from 'react-toastify';

export const autofocusAll = () => {
  const els = document.getElementsByClassName('autofocus')

  Array.prototype.forEach.call(els, (el) => {
    el.focus();
  });
}

export const snakeCaseToTitleCase = (str) => {
	return str.split('_').map(function(w) {
		return w[0].toUpperCase() + w.substr(1).toLowerCase();
	}).join(' ');
}

export const notifySuccess = (message) => {
  toast.success(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

export const notifyError = (message) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

export const renderTime = (time) => {
  if (!time) {
    return "";
  }
  const m = new Date(time);
  return m.getFullYear() +"/"+ (m.getMonth()+1) +"/"+ m.getDate() + " " + m.getHours() + ":" + m.getMinutes() + ":" + m.getSeconds();
}

export const objToQueryString = (obj, prefix) => {
  var str = [],
    p;
  for (p in obj) {
    if (obj.hasOwnProperty(p)) {
      var k = prefix ? prefix + "[" + p + "]" : p,
        v = obj[p];
      str.push((v !== null && typeof v === "object") ?
        objToQueryString(v, k) :
        encodeURIComponent(k) + "=" + encodeURIComponent(v));
    }
  }
  return str.join("&");
}
