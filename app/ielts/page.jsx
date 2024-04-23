import React from "react";
import namrata from "../../public/assets/ielts/ielts.jpg";
import Image from "next/image";
import Link from "next/link";
const page = () => {
  return (
    <div className="space-y-14">
    <div className="text-center h-96 flex flex-col justify-center gap-10 bg-logoRed text-white">
        <h1 className="font-bold text-5xl">Online IELTS Preparation Course</h1>
        <p className="text-lg">Speaking | Listening | Reading | Writing</p>
      </div>
      <div className="mx-3 lg:mx-auto lg:max-w-4xl xl:max-w-7xl 2xl:max-w-7xl py-10 space-y-14">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="basis-1/2">
          <Image className="w-3/4 mx-auto" src={namrata} alt="namrata" />
        </div>
        <div className="space-y-7 flex flex-col justify-center">
          <h1 className="text-3xl">IELTS Preparation [Online]</h1>
          <p className="text-lg text-[#5a5a5a] flex gap-5 font-bold"><span className="text-[#5a5a5a] line-through">৳ 8,000</span>৳ 2,000</p>
          <ul className="list-disc text-base pl-5">
            <li>Zoom Class</li>
            <li>1.5 hr/class</li>
            <li>30 Classes</li>
          </ul>
          <div>
            <Link href='https://forms.gle/Zv4BY5SQtBacjwWX6' target="_blank"><button className="btn max-w-max mx-auto bg-logoRed text-white">
              Enroll Now
            </button></Link>
            
          </div>
        </div>
      </div>
      <div className="text-center space-y-5">
        <h1 className="text-4xl">Online IELTS Preparation Course</h1>
        <p className="text-sm">A complete course for IELTS preparation</p>
      </div>
      <div className="space-y-5 text-[#666]">
        <h1 className=" pl-5">কোর্সটিতে যা যা থাকছেঃ </h1>
        <ul className="list-disc pl-10">
            <li>Foundation Classes- 5 classes</li>
            <li>Reading Module- 8 classes</li>
            <li>Writing Module- 8 classes</li>
            <li>Listening Module- 5 classes</li>
            <li>Speaking module- 4 classes</li>
            <li>5 Online Mock Tests</li>
            <li>Speaking Pre-Mock Tests</li>
            <li>e-books, pdf lessons, slides</li>
            <li>IELTS Writing এর Task-2 এর সকল ধরনের topic এর brainstorming</li>
            <li>Best guidelines to achieve 7 in IELTS Exam</li>
        </ul>
      </div>
      <div className="space-y-5 text-[#666]">
        <h1 className="pl-5">কোর্সটি কাদের জন্যঃ </h1>
        <ul className="list-disc pl-10">
            <li>যারা দেশের বাইরে পড়তে যেতে চান</li>
            <li>যারা দেশের বাইরে migrate করতে চান</li>
            <li>যারা দেশে খুব ভালো Company গুলোতে কাজ করতে চান</li>
            <li>যারা নিজের ইংরেজী Skill যাচাই করতে IELTS পরীক্ষা দিতে চান</li>
        </ul>
      </div>
      </div>

    </div>
  );
};

export default page;