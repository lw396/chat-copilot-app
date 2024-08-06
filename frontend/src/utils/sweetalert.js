import Swal from "sweetalert2";

import logo from "@assets/images/logo-universal.png";

export const Warn = (title, text) => {
  return Swal.fire({
    title: title,
    text: text,
    width: 350,
    padding: "0 0 1em 0",
    imageUrl: logo,
    imageWidth: 50,
    imageHeight: 50,
    confirmButtonText: "确定",
    confirmButtonColor: "#3085d6",
    showCancelButton: true,
    cancelButtonText: "取消",
    cancelButtonColor: "#d33",
    customClass: {
      title: "text-sm pt-1",
      actions: "mt-2.5",
      confirmButton: "text-sm px-10 py-1 rounded-md",
      cancelButton: "text-sm px-10 py-1 rounded-md",
    },
  });
};
