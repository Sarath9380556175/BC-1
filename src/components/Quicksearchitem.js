import React from 'react';
import  '../styles/Home.css';
import {withRouter} from 'react-router-dom';
import {motion,AnimateSharedLayout,AnimatePresence} from 'framer-motion';
import {easings} from 'react-animation

const mystyles={
    animation:`pop-in ${easings.easeOutExpo} 5000ms forwards`
   
}

class QuicksearchItem extends React.Component{

    quicksearch=(mealtypeId)=>{
        
        this.props.history.push(`/Dishes/?restaurant=${mealtypeId}`)
    }
    render()
    {
        const {items}=this.props;
        return(
  <motion.div className="one rounded"  data-toggle="tooltip" title={items.content} data-placement="bottom" onClick={()=>this.quicksearch(items.badge)} animate={{rotate:360}}>
      <div style={{display: "inline-block",width: "45%"}}>
          <img src={items.image} width="129px" height="149px" alt="notfound" className="rounded-circle"/>
      </div>

      <div style={{display: "inline-block",width: "45%",verticalAlign: "top"}} className="ml-3">
          <div style={mystyles} className="badge badge-dark rounded-circle  ml-3">{items.badge}</div>
          <div style={mystyles} className="burger">{items.name}</div>
          <div style={mystyles} className="two">{items.content}</div>

      </motion.div>


  </div>


        )
    }
}

export default  withRouter(QuicksearchItem);
