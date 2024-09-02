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
                  <p className="ml-2 block text-clip ">รพ.บางประกอก 9</p>
                  <div className="flex relative">
                      <p className="ml-2 block text-clip  text-center">3 กม.</p>
                      <div className="flex -my-2 pt-0.5 absolute right-0">
                          <svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 0 24 24" width="35"
                               fill="#00CC00">
                              <path d="M0 0h24v24H0z" fill="none" />
                              <path
                                d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 0 24 24" width="35">
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
                  <p className="ml-2 block text-clip ">รพ.มจธ</p>
                  <div className="flex relative">
                      <p className="ml-2 block text-clip  text-center">0 กม.</p>
                      <div className="flex -my-2 pt-0.5 absolute right-0">
                          <svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 0 24 24" width="35"
                               fill="#00CC00">
                              <path d="M0 0h24v24H0z" fill="none" />
                              <path
                                d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 0 24 24" width="35">
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
                  <p className="ml-2 block text-clip ">รพ.IMH</p>
                  <div className="flex relative">
                      <p className="ml-2 block text-clip  text-center">2 กม.</p>
                      <div className="flex -my-2 pt-0.5 absolute right-0">
                          <svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 0 24 24" width="35"
                               fill="#00CC00">
                              <path d="M0 0h24v24H0z" fill="none" />
                              <path
                                d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 0 24 24" width="35">
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
                          <svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 0 24 24" width="35" className="hidden"
                               fill="#00CC00">
                              <path d="M0 0h24v24H0z" fill="none" />
                              <path
                                d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 0 24 24" width="35" className="hidden">
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
                          <svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 0 24 24" width="35" className="hidden"
                               fill="#00CC00">
                              <path d="M0 0h24v24H0z" fill="none" />
                              <path
                                d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" height="35" viewBox="0 0 24 24" width="35" className="hidden">
                              <path d="M0 0h24v24H0z" fill="none" />
                              <path
                                d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"
                                fill="red"  />
                          </svg>

                      </div>
                  </div>
              </div>

          </ol>
      </Paper>
    )
      ;
}