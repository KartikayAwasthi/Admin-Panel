import toast from "react-hot-toast";

export const showSuccess = (message = "Success!") => {
  toast.success(message, {
    duration: 3000,
    position: "top-right",
  });
};

export const showError = (message = "Something went wrong") => {
  toast.error(message, {
    duration: 3000,
    position: "top-right",
  });
};

export const showLoading = (message = "Loading...") => {
  return toast.loading(message, {
    position: "top-right",
  });
};

export const dismissToast = (id) => {
  toast.dismiss(id);
};
