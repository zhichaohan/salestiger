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
