
import React , { Component } from "react";

import { Line } from "react-chartjs-2";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel
} from "reactstrap";

// core components
import MypageNavbar from "components/Navbars/MypageNavbar.js";
import Footer from "components/Footer/Footer.js";
import 'pure-react-carousel/dist/react-carousel.es.css';
import bigChartData from "variables/charts.js";
import { Link } from "react-router-dom";

const carouselItems = [
  {
    src: require("assets/img/gucci2.jpg"),
    altText: "Slide 1",
    caption: "2018 프리폴 컬렉션"
  },
  {
    src: require("assets/img/gucci3.jpg"),
    altText: "Slide 2",
    caption: "cryptoberry는 정품만 취급합니다"
  },
  {
    src: require("assets/img/gucci.jpg"),
    altText: "Slide 3",
    caption: "정품이 아닐시 1000% 보상"
  }
];

let ps = null;



class Mypage extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("Product-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("Product-page");
  }

  constructor(props){
  super(props);
    
  this.state={
    value:0,min:0,counter:0
  };
  this.handleClickPlus=this.handleClickPlus.bind(this);
  this.handleClickMinus=this.handleClickMinus.bind(this);
  this.handleOnChange=this.handleOnChange.bind(this);
  
}
handleClickPlus(){
  this.setState({
    value:this.state.value+1
  });
}

handleClickMinus(){
  if(this.state.value <=0) return;
  this.setState({
    value:this.state.value-1
  });
}

handleOnChange(e) {
  
  // e.target.value 숫자만 있는지 확인
  this.setState({
    value: e.target.value
  });
}

  selectChange(e){
    this.setState({
      selectedValue: e.target.value
    })
  }
  render() {
    return (

      <>
       
      
  
       <MypageNavbar />

           <img
              alt="..."
              className="path"
              src={require("assets/img/blob.png")}
            />

            <img
              alt="..."
              className="shapes circle"
              src={require("assets/img/cercuri.png")}
            />
       
       <div className="container">
           
       </div>


         

             
          <Footer />
        
        
      </>
    );
  }
}

export default Mypage;
