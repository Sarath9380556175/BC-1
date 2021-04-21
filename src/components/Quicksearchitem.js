import React from 'react';
import  '../styles/Home.css';
import {withRouter} from 'react-router-dom';
import {motion,AnimateSharedLayout,AnimatePresence} from 'framer-motion';
class QuicksearchItem extends React.Component{

    quicksearch=(mealtypeId)=>{
        
        this.props.history.push(`/Dishes/?restaurant=${mealtypeId}`)
    }
    render()
    {
        const {items}=this.props;
        return(
  <div className="one rounded"  data-toggle="tooltip" title={items.content} data-placement="bottom" onClick={()=>this.quicksearch(items.badge)}>
      <div style={{display: "inline-block",width: "45%"}}>
          <img src={items.image} width="129px" height="149px" alt="notfound" className="rounded-circle"/>
      </div>
<AnimateSharedLayout>
      <div style={{display: "inline-block",width: "45%",verticalAlign: "top"}} className="ml-3">
          <motion.div className="badge badge-dark rounded-circle  ml-3">{items.badge}</motion.div>
          <motion.div className="burger">{items.name}</motion.div>
          <motion.div className="two">{items.content}</motion.div>

      </motion.div>
</AnimateSharedLayout>

  </div>


        )
    }
}

export default  withRouter(QuicksearchItem);
