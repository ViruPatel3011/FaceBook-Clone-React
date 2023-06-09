import React from 'react'
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LogoutIcon from '@mui/icons-material/Logout';



function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarRow src="https://cdn.pixabay.com/photo/2023/04/04/10/21/fashion-7898973__340.jpg" title="Viral Patel"/>
      <SidebarRow Icon={LocalHospitalIcon} title="Covid-19 Information Center"/>
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
      <SidebarRow Icon={PeopleIcon} title="Friends"/>
      <SidebarRow Icon={ChatIcon} title="Messenger"/>
      <SidebarRow Icon={StorefrontIcon} title="MarketPlace"/>
      <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
      <SidebarRow Icon={ExpandMoreIcon} title="MarketPlace"/>
      <hr />
      <SidebarRow Icon={LogoutIcon} title="LogOut"/>
    
    </div>
  )
}

export default Sidebar
