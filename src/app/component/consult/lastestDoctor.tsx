"use client";


// src/app/component/nearHospitallist.tsx
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Paper from "@mui/material/Paper";
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn';
import { DoNotDisturb } from "@mui/icons-material";

export default function NearHospitalList() {
    return (
      <Paper sx={{
          m: "10px",
          p: "2px 4px",
          alignItems: "center",
          width: 400,
          bgcolor: 'background.paper',
      }}>
          <ol className="bg-white py-2 text-black border border-1 hover:bg-gray-200 ">
              <div className="grid grid-cols-2 w-full">
                  <p className="ml-2 block text-clip ">นพ.สยาม แยมส้ม</p>
                  <div className="flex relative">
                      <div className="flex -my-2 pt-0.5 absolute right-4 ">
                          <svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 0 24 24" width="35" fill="red">
                              <path d="M0 0h24v24H0V0z" fill="none" />
                              <path
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z" />
                          </svg>
                      </div>
                  </div>
              </div>

          </ol>
          <ol className="bg-white py-2 text-black border border-1 hover:bg-gray-200 ">
              <div className="grid grid-cols-2 w-full">
                  <p className="ml-2 block text-clip ">นพ.ไกลมากกก</p>
                  <div className="flex relative">
                      <div className="flex -my-2 pt-0.5 absolute right-4 ">
                          <svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 0 24 24" width="35" fill="orange">
                              <path d="M0 0h24v24H0z" fill="none" />
                              <path
                                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                          </svg>
                      </div>
                  </div>
              </div>

          </ol>
          <ol className="bg-white py-2 text-black border border-1 hover:bg-gray-200 ">
              <div className="grid grid-cols-2 w-full">
                  <p className="ml-2 block text-clip ">นพ.หมอที่สุดใน</p>
                  <div className="flex relative">
                      <div className="flex -my-2 pt-0.5 absolute right-4 ">
                          <svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 0 24 24" width="35"
                               fill="green">
                              <path d="M0 0h24v24H0z" fill="none" />
                              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                          </svg>
                      </div>
                  </div>
              </div>

          </ol>

          <ol className="bg-white py-2 text-black border border-1 hover:bg-gray-200 ">
              <div className="grid grid-cols-2 w-full">
                  <p className="ml-2 block text-clip "></p>
                  <div className="flex relative">
                      <p className="ml-2 block text-clip  text-center">&nbsp;</p>
                      <div className="flex -my-2 pt-0.5 absolute right-0">
                          <svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 0 24 24" width="35"
                               className="hidden"
                               fill="#00CC00">
                              <path d="M0 0h24v24H0z" fill="none" />
                              <path
                                d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 0 24 24" width="35"
                               className="hidden">
                              <path d="M0 0h24v24H0z" fill="none" />
                              <path
                                d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"
                                fill="red" />
                          </svg>

                      </div>
                  </div>
              </div>

          </ol>
          <ol className="bg-white py-2 text-black border border-1 hover:bg-gray-200 ">
              <div className="grid grid-cols-2 w-full">
                  <p className="ml-2 block text-clip "></p>
                  <div className="flex relative">
                      <p className="ml-2 block text-clip  text-center">&nbsp;</p>
                      <div className="flex -my-2 pt-0.5 absolute right-0">
                          <svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 0 24 24" width="35"
                               className="hidden"
                               fill="#00CC00">
                              <path d="M0 0h24v24H0z" fill="none" />
                              <path
                                d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 0 24 24" width="35"
                               className="hidden">
                              <path d="M0 0h24v24H0z" fill="none" />
                              <path
                                d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"
                                fill="red" />
                          </svg>

                      </div>
                  </div>
              </div>

          </ol>
      </Paper>
    )
      ;
}