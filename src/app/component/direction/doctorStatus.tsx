"use client";


import Paper from "@mui/material/Paper";
import * as React from "react";

export default function DoctorStatus()  {
  return (
<div className="flex justify-center ">
  <Paper sx={{
    m: "10px",
    p: "2px 4px",
    alignItems: "center",
    width: 400,
    bgcolor: 'background.paper',
  }}>
    <div className="mx-auto text-center">
      <p className="font-bold">ความหมายสัญลักษณ์</p>
      <div className=" mx-auto  text-center w-fit ">
        <div
          className="items-center content-center justify-center justify-self-center object-center snap-center flex">
          <svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 0 24 24" width="35" fill="red">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z" />
          </svg>
          <p className="inline my-auto"> ไม่สามารถให้คำปรึกษาได้</p>
        </div>
        <div className="flex">
          <svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 0 24 24" width="35" fill="orange">
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
          <p className="inline my-auto"> มีข้อความใหม่</p>

        </div>
        <div className="flex">
          <svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 0 24 24" width="35"
               fill="green">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
          </svg>
          <p className="inline my-auto"> พร้อมให้คำปรึกษา</p>

        </div>

      </div>
    </div>
  </Paper>
</div>

)
;
}