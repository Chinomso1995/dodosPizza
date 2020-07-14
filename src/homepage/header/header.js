import React, {Component} from 'react';
import styles from '../header/header.module.css';
import FirstHeader from './FirstHeader/FirstHeader'
import SecondHeader from './Secondheader/SecondHeader'


class header extends Component {
  state={
    showNav: true
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
  render(){ 
  return (
     <div className={styles.Header}>
       <div>
           { this.state.showNav ?
             <FirstHeader onScroll={this.handleScroll}/>
            : null}

           <SecondHeader showLogo={!this.state.showNav}/>
       </div>
     </div>
    
  )
}
} 


export default header;