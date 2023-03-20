import { Box, Toolbar } from "@mui/material";
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar";
const drawerWitdh = 280;

export const JournalLayout = ({ children }) => {
	return (
	  <Box sx={{ display: 'flex' }}>
  
		  <NavBar drawerWitdh={ drawerWitdh } />
  
		  <SideBar drawerWitdh={ drawerWitdh } />
  
		  <Box 
			  component='main'
			  sx={{ flexGrow: 1, p: 3 }}
		  >
			  <Toolbar />
  
			  { children }
			  
		  </Box>
	  </Box>
	)
  }