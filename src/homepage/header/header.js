import React, {Component} from 'react';
import styles from '../header/header.module.css';
import FirstHeader from './FirstHeader/FirstHeader';
import SecondHeader from './Secondheader/SecondHeader';
import MobileMenu from './Mobilemenu/Mobilemenu'


class header extends Component {
  state={
    showNav: true,
    showMobileMenu: false
  }
  componentDidMount(){
    document.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
   } 
  handleScroll = e => {
      this.setState({showNav: (window.scrollY < 50)})
      
  }
  removeMobileMenuEventHandler (){
    this.setState({showMobileMenu: false})
  }
  showMobileMenuEventHandler (){
    this.setState((prevState)=>{
      return {showMobileMenu: !this.state.showMobileMenu}
    })
  }

  render(){ 
  return (
     <div className={styles.Header}>
       <div>
           { this.state.showNav ?
             <FirstHeader onScroll={this.handleScroll} clicked={()=>this.showMobileMenuEventHandler()}/>
            : null}

           <SecondHeader showLogo={!this.state.showNav}/>
           {  this.state.showMobileMenu ?
             <MobileMenu clicked={()=>this.removeMobileMenuEventHandler()}/> : null}
       </div>
     </div>
    
  )
}
} 


export default header;