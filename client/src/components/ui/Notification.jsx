import * as React from 'react';
import Badge from '@mui/material/Badge';
import Notificacion from "../../assets/icons-dash/10.png";

export default function SimpleBadge() {
  return (
    <Badge badgeContent={1} style={{color: '#fff'}}>
      <img src={Notificacion} className='icon-noti' />
    </Badge>
  );
}