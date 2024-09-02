"use client";

import * as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';
import HistoryIcon from '@mui/icons-material/History';
export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState('home');

  useEffect(() => {
    const path = window.location.pathname;
    switch (path) {
      case '/':
        setValue(0);
        setCurrentPage('home');
        break;
      case '/consult':
        setValue(1);
        setCurrentPage('consult');
        break;
      case '/appointments':
        setValue(2);
        setCurrentPage('appointments');
        break;
      case '/history':
        setValue(3);
        setCurrentPage('history');
        break;
      case '/setting':
        setValue(4);
        setCurrentPage('setting');
        break;
    }
  }, []);

  return (
    <Box>

      <BottomNavigation
        showLabels
        value={value}
      >

          <BottomNavigationAction href="/" label="หน้าหลัก" icon={<RestoreIcon />} />
          <BottomNavigationAction href="/consult" label="ปรึกษา" icon={<FavoriteIcon />} />
          <BottomNavigationAction href="/appointments" label="นัดหมาย" icon={<AddIcon />} />
          <BottomNavigationAction href="/history" label="ประวัติ" icon={<HistoryIcon />} />
          <BottomNavigationAction href="/setting" label="ต้งค่า" icon={<MenuIcon />} />
      </BottomNavigation>
      <Box>
        {currentPage === 'home'}
        {currentPage === 'consult'}
        {currentPage === 'appointments'}
        {currentPage === 'history'}
        {currentPage === 'setting'}

      </Box>
    </Box>
  );
}