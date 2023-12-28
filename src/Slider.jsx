import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Component } from "react";
import './Slider.css'
export default class Slider extends Component {
    constructor() {
        super();
        this.state = {
            prevSlide : 3,
            currentSlide : 4,
        }

    }

   
      

    nextSlideFunctionRight () {
        if(this.state.currentSlide !== this.state.prevSlide) {
            this.setState({
                prevSlide : this.state.currentSlide, 
                currentSlide : this.state.currentSlide + 1,
                
            })

            if(this.state.currentSlide === 17) {
                this.setState({
                    prevSlide : this.state.currentSlide, 
                    currentSlide : 1,
               
            })
            
            }
        }

    }

    prevSlideFunctionLeft () {
        const totalPhotos = 17
        if(this.state.currentSlide !== this.state.prevSlide) {
            //let current = this.state.prevSlide
            this.setState({
                prevSlide : this.state.currentSlide, 
                currentSlide : this.state.currentSlide - 1,
            })

            if(this.state.currentSlide === 1) {
                this.setState({
                    prevSlide : this.state.currentSlide,
                    currentSlide : totalPhotos,
                })
            }
        }
       
    }
    render() {
        return (
        <div className="container">   
            <button className="arrow-left-button" onClick={() => this.prevSlideFunctionLeft()}>
                <FontAwesomeIcon icon={faArrowLeft} className="arrow-left-icon" style={{fontSize:50}}/>
            </button>
            <img src={`./photos/${this.state.currentSlide}.jpg`} alt="" />
            <button className="arrow-right-button" onClick={() => this.nextSlideFunctionRight()}>
                <FontAwesomeIcon icon={faArrowRight} className="arrow-right-icon" style={{fontSize:50}}/>
            </button> 
        </div>)
    }
}