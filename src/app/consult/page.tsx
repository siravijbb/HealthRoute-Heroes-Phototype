"use client";

import Image from "next/image";
import * as React from "react";
import { Button } from "@mui/base/Button";
import { TextField } from "@mui/material";
import HomeSeach from "@/app/component/searchbar";
import NearHospitalList from "@/app/component/nearHospitalList";
import Appointments from "@/app/component/Appointments";
import BottomNavigation from "@/app/component/Footer";

export default function Home() {
  return (
    <main className="w-100svh h-full  bg-blue-400 mx-auto">
      <div className="h-screen bg-blue-400">
        <div className="pt-2 md:pt-6 text-2xl">
          <h1 className="text-center">ยินดีต้อนรับคุณ คนไทย</h1>
        </div>
        <div className="flex justify-center  ">
          <HomeSeach />
        </div>
        <h2 className="text-center text-xl">รพ. ที่ใกล้สุด</h2>
        <div className="flex justify-center ">
          <NearHospitalList />
        </div>
        <h2 className="text-center text-xl">นัดหมายต่อไป</h2>
        <div className="flex justify-center pb-20">
          <Appointments />
        </div>
      </div>

    </main>
  );
}
