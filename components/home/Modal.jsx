"use client";

import Image from "next/image";
import React from "react";
import { useEffect } from "react";
import namrata from "../../public/assets/ielts/ielts.jpg"
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
    <Image src={namrata}></Image>
    <div className="flex justify-center py-5">
            <Link href='https://forms.gle/Zv4BY5SQtBacjwWX6' target="_blank"><button className="btn max-w-max mx-auto bg-logoRed text-white">
              Enroll Now
            </button></Link>
            
          </div>
  </div>
</dialog>
    </div>
  );
};

export default Modal;
