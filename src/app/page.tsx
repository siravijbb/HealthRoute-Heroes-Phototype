"use client";

import Image from "next/image";
import * as React from "react";
import { Button } from "@mui/base/Button";
import { TextField } from "@mui/material";
import CustomizedInputBase from "@/app/component/searchbar";
import FolderList from "@/app/component/nearHospitallist";
import Appointments from "@/app/component/Appointments";
import BottomNavigation from "@/app/component/Footer";

export default function Home() {
  return (
    <main className="w-full  bg-blue-400 mx-auto">
      <div className="h-screen">
        <div className="pt-2 text-2xl">
          <h1 className="text-center">ยินดีต้อนรับคุณ คนไทย</h1>
        </div>
        <div className="flex justify-center  ">
          <CustomizedInputBase />
        </div>
        <h2 className="text-center text-xl">รพ. ที่ใกล้สุด</h2>
        <div className="flex justify-center ">
          <FolderList />
        </div>
        <h2 className="text-center text-xl">นัดหมายต่อไป</h2>
        <div className="flex justify-center ">
          <Appointments />
        </div>
      </div>

    </main>
  );
}
