import React from 'react'
import { AppBar,Toolbar,IconButton,Badge,Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import {Link,useLocation} from 'react-router-dom'



import logo from '../../assets/logo.jpg'
import useStyles from './styles'


const Navbar=({totalItems})=> {
    const classes=useStyles()
    const location=useLocation()
    
    return (
        <>
           <AppBar position="fixed" className={classes.appBar} color="inherit">
               <Toolbar>
                   <Typography component={Link} to="/cart" variant="h6" className={classes.title} color="inherit">
                       <imag src={logo} alt="myEDairy.js" height="30px" className={classes.image}/>
                        myEDairy.js
                   </Typography>
                   <div className={classes.grow}/>
                   {location.pathname==="/" &&(
                   <div className={classes.button}>
                       <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                           <Badge badgeContent={totalItems} color="primary">
                               <ShoppingCart/>
                           </Badge>
                       </IconButton>

                   </div>)}
               </Toolbar>

           </AppBar>
        </>
    )
}

export default Navbar