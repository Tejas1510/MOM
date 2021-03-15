import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css'
import { NavLink } from 'react-router-dom'
import './style.css'
function Footer1() {
    return (
        <div>
            
<footer className="page-footer middleColor  font-small unique-color-dark" style={{position:'fixed',
   left: '0',
   bottom: '0',
   width:'100%',
   textAlign:'center'}}>

  <div className="footer-copyright text-center py-3 copyrightColor white">
    Copyright © 2021 Meet Digest
  </div>

</footer>
</div>
        
    )
}

export default Footer1
