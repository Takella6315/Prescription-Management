import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import MedicationIcon from '@mui/icons-material/Medication';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SchoolIcon from '@mui/icons-material/School';


const mainListItems = [
  { text: 'Prescribed Medication', icon: <MedicationIcon/>, link: "/dashboard" },
  { text: 'Schedule for Medication', icon: <CalendarMonthIcon /> , link: "/dashboard/schedule"},
  { text: 'Learn more with AI! ', icon: <SchoolIcon/>, link: "/dashboard/learn-ai" },
]

const secondaryListItems = [
  { text: 'Settings', icon: <SettingsRoundedIcon />, link: "/dashboard/settings" },
  { text: 'About', icon: <InfoRoundedIcon />, link: "/dashboard/about" },
  { text: 'Feedback', icon: <HelpRoundedIcon />, link: "/dashboard/feedback" },
];

export default function MenuContent() {
  return (
    <Stack sx={{ flexGrow: 1, px: 3, justifyContent: 'space-between' }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block', color: 'text.primary' }}>
            <ListItemButton href={item.link} selected={index === 0} sx={{ my: 1}}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List dense>
        {secondaryListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block', color: 'text.primary' }}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText sx={{ color: 'text.primary' }} primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
