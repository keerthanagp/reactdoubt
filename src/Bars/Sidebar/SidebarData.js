import SpeedIcon from '@mui/icons-material/Speed';
import SettingsIcon from '@mui/icons-material/Settings';
import HandymanIcon from '@mui/icons-material/Handyman';
import FolderIcon from '@mui/icons-material/Folder';
import BarChartIcon from '@mui/icons-material/BarChart';
import TableChartIcon from '@mui/icons-material/TableChart';

export const SidebarData=[
    { 
        id:"1",
        icons: <SpeedIcon/>,
        title:'Dashboard',
        url:'/Dashboard'
    },
    {   
        id:'2',
        icons: <SettingsIcon/>,
        title:'Components', 
        url:'/Components'
    },
    {   
        id:'3',
        icons: <HandymanIcon/>,
        title:'Utilities',
        url:'/Utilities'
    },
    {   
        id:'4',
        icons: <FolderIcon/>,
        title:'Pages',
        url:'/Pages'
    },
    {   
        id:'5',
        icons: <BarChartIcon/>,
        title:'Charts',    
        url:'/Charts'
    },
    {   
        id:'6',
        icons: <TableChartIcon/>,
        title:'Tables',
        url:'/Tables'
    }
]