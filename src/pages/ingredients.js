import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Greetings from "../components/Greetings"

class Ingredients extends React.Component {
  constructor(){
    super();
    this.state = {
      current_moment: "",
      greeting_txt : "",
      greeting_img : "",
    };
    
    const date = new Date();
    const hours = date.getHours();
    const check_current_moment = hours <= 6 ?  "凌晨" : hours >=7 && hours <12? "早上" : hours === 12? "中午" : hours >=13 && hours < 19 ? "下午" : "晚上";
    this.state.current_moment = check_current_moment;
    switch(check_current_moment){
        case "凌晨":
          this.state.greeting_txt = "凌晨了，\n不打擾您享受個人時光";
          this.state.greeting_img = "meal_aftermeal";
            break;
        case "早上":
          this.state.greeting_txt = "早安，\n今天也會是元氣滿滿的一天！";
          this.state.greeting_img = "meal_breakfast";
            break;
        case "中午":
          this.state.greeting_txt = "午安，\n開個冷氣唄";
          this.state.greeting_img = "meal_lunch";
            break;
        case "下午":
          this.state.greeting_txt = "下午好，\n來杯咖啡？";
          this.state.greeting_img = "meal_teatime";
            break;
        case "晚上":
          this.state.greeting_txt = "晚安親愛的，\n今天辛苦了，\n好好休息唄";
          this.state.greeting_img = "meal_dinner";
        
            break;
        default:
          this.state.greeting_txt = "你好，\n交個朋友吧";
          this.state.greeting_img = "meal_teatime";
          break;
    }
    
  }

  componentDidMount(){

  }

  render(){

    
    return(
      <div className="page_ingredients">
        <Layout>
          <SEO title="Ingredients" />
          <Greetings data={this.state} size="full" />
          page 2
          {/* <Link to="/ingredients/" state={{type : `breakfast`}}>做早餐</Link> */}
        </Layout>
      </div>
    )
  }  
}


export default Ingredients
