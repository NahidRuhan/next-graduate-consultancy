"use client";

import Image from "next/image";
import React from "react";
import { useEffect } from "react";
import popup from "../../public/assets/home/popup.jpg"
import Link from "next/link";

const Modal = () => {
  useEffect(() => {
    const modal = document.getElementById("my_modal_3");
    if (modal) {
      modal.showModal();
    }
  }, []);
  return (
    <div>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <Image src={popup}></Image>

  </div>
</dialog>
    </div>
  );
};

export default Modal;
