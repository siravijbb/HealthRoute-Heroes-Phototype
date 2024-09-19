"use client";

import Image from "next/image";
import * as React from "react";
import { Button } from "@mui/base/Button";
import { TextField } from "@mui/material";
import HomeSeach from "@/app/component/searchbar";
import NearHospitalList from "@/app/component/nearHospitalList";
import Appointments from "@/app/component/Appointments";
import BottomNavigation from "@/app/component/Footer";
import Paper from "@mui/material/Paper";

export default function Home() {
  return (

    <main className="w-100svh h-full  bg-blue-400 mx-auto pb-20">
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
        <div className="flex justify-center ">
          <Appointments />
        </div>
        <div className="flex justify-center ">
        <Paper sx={{
          m: "10px",
          p: "2px 4px",
          alignItems: "center",
          width: 400,
          bgcolor: 'background.paper',
        }}>        <div className="mx-auto text-center">
          <p>สีหมายถึงสภาพการจราจรหรือปริมาณผู้ป่วยใน รพ.</p>
          <div className=" mx-auto  text-center w-fit ">
            <div
              className="items-center content-center justify-center justify-self-center object-center snap-center flex">
              <svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 0 24 24" width="35"
                   fill="black">
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
              </svg>
              <p className="inline my-auto"> สภาพปริมาณผู้ป่วยในโรงพยาบาล</p>
            </div>
            <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 0 24 24" width="35">
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"
                  fill="black" />
              </svg>
              <p className="inline my-auto"> สภาพปริมาณการจราจรจากจุดที่อยู่</p>

            </div>

          </div>
        </div>
    </Paper>
        </div>
      </div>
    </main>
  )
  ;
}
