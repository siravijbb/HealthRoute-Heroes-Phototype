"use client";

import Image from "next/image";
import * as React from "react";
import { Button } from "@mui/base/Button";
import { TextField } from "@mui/material";
import HomeSeach from "@/app/component/searchbar";
import NearHospitalList from "@/app/component/consult/lastestDoctor";
import Appointments from "@/app/component/Appointments";
import BottomNavigation from "@/app/component/Footer";
import Paper from "@mui/material/Paper";
import DoctorStatus from "@/app/component/direction/doctorStatus";

export default function Home() {
  return (
    <main className="w-100svh h-full  bg-blue-400 mx-auto">
      <div className="h-screen bg-blue-400">

        <div className="pt-2 md:pt-6 ">
          <DoctorStatus />

          <h1 className="text-center text-2xl">สอบถามจากรายการล่าสุด</h1>
        </div>
        <div className="flex justify-center ">
          <NearHospitalList />
        </div>
        <div className="flex justify-center ">

          <small className="-my-2 text-center mx-auto text-gray-600">* มีค่าใช่จ่าย</small>
        </div>

        <h2 className="text-center text-xl my-2">หรือ</h2>
        <div className="flex justify-center ">
          <button className="p-4 rounded-lg bg-gray-100 hover:bg-gray-300">ปรึกษาท่านอื่น</button>
        </div>
        <div className="flex justify-center ">

          <small className="-mb-2 text-center mx-auto text-gray-600">* มีค่าใช่จ่าย</small>
        </div>
      </div>

    </main>
  );
}
