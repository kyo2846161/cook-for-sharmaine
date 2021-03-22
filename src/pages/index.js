// import * as React from "react"
import React, {useEffect, useState} from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Greetings from "../components/Greetings"
import Header from "../components/header"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight, faCoffee } from "@fortawesome/free-solid-svg-icons"
import ButtonChooseMeal from "../components/ButtonChooseMeal"

function useDelayUnmount(isMounted, delayTime) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (isMounted && !shouldRender) {
      setShouldRender(true);
    } else if (!isMounted && shouldRender) {
      timeoutId = setTimeout(() => setShouldRender(false), delayTime);
    }
    return () => clearTimeout(timeoutId);
  }, [isMounted, delayTime, shouldRender]);
  return shouldRender;
}

const IndexPage = () =>{
  const [currentPage, setCurrentPage] = useState("landing");
  const [prevPage, setPrevPage] = useState("none");
  const [isMounted, setIsMounted] = useState(true);
  const [pageHomeMount, setPageHomeMount] = useState(false);
  const [pageLandingMount, setPageLandingMount] = useState(true);
  const [pageIngredientsMount, setPageIngredientsMount] = useState(false);

  const shouldRenderChild = useDelayUnmount(isMounted, 350);
  const shouldRenderPageHome = useDelayUnmount(pageHomeMount, 350);
  const shouldRenderPageLanding = useDelayUnmount(pageLandingMount, 350);
  const shouldRenderPageIngredients = useDelayUnmount(pageIngredientsMount, 350);
  const mountedStyle = { animation: "inAnimation 350ms ease-in forwards", opacity: 0 };
  const unmountedStyle = { animation: "outAnimation 350ms ease-out forwards", opacity: 0 };
  const handleToggleClicked = (event) => {
    const {name, value} = event.target
    switch(currentPage){ // to fade out
      case "landing":
        setPageLandingMount(false);
        break;
      case "home":
        setPageHomeMount(false);
        break;
      case "ingredients":
        setPageIngredientsMount(false);
        break;
    }
    // setPageHomeMount(!pageHomeMount);
    let timeout_forOnce;
    timeout_forOnce = setTimeout(() => {
      switch(value){ // to fade in
        case "landing":
          setPageLandingMount(true);
          break;
        case "home":
          setPageHomeMount(true);
          break;
        case "ingredients":
          setPageIngredientsMount(true);
          break;        
      }
      setPrevPage(currentPage);
      setCurrentPage(value);
    }, 350);
    return () => clearTimeout(timeout_forOnce);
  };
  const timeout_landing = setTimeout(() => {
    setPageLandingMount(false);
    setPageHomeMount(true);
    setCurrentPage("home");
  },3000)
  return (
    <>
    {/* <Header /> */}
    <main>
      {shouldRenderPageLanding && (
        <div className="pageLanding bg-primary" style={pageLandingMount ? mountedStyle : unmountedStyle}>
          <StaticImage
              src="../images/logo_white.png"
              height={38}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Feed Sharmaine Everyday"
          />
        </div>
      )}
      
      {shouldRenderPageHome && (
        <div style={pageHomeMount ? mountedStyle : unmountedStyle}>
          <Header back={prevPage} />
          <div className="headerPadding">
            {/* <button className="btn btn_chooseMeal btn-1" value="ingredients" onClick={handleToggleClicked}>
              <div className="row align-items-center">
                <div className="col">
                  <span className="en">breakfast</span>
                  <span className="cn">做早餐</span>
                </div>
                <div className="col-auto">
                  <FontAwesomeIcon icon={faChevronRight} />
                </div>
              </div>
            </button> */}
            <ButtonChooseMeal btnCSS="btn-1" value="breakfast" click={handleToggleClicked} enTxt="breakfast" cnTxt="做早餐" />
            <ButtonChooseMeal btnCSS="btn-2" value="lunch" click={handleToggleClicked} enTxt="lunch" cnTxt="做午餐" />
            <ButtonChooseMeal btnCSS="btn-3" value="dinner" click={handleToggleClicked} enTxt="dinner" cnTxt="做晚餐" />
            <ButtonChooseMeal btnCSS="btn-4" value="random" click={handleToggleClicked} enTxt="anything" cnTxt="隨便來個食譜" />
            {/* <button className="btn btn_chooseMeal btn-2" value="ingredients" onClick={handleToggleClicked}><span>做午餐</span></button>
            <button className="btn btn_chooseMeal btn-3" value="ingredients" onClick={handleToggleClicked}><span>做午餐</span></button>
            <button className="btn btn_chooseMeal btn-4" value="ingredients" onClick={handleToggleClicked}><span>隨便來個食譜</span></button> */}
          </div>
        </div>
      )}

      {shouldRenderPageIngredients && (
        <div style={pageIngredientsMount ? mountedStyle : unmountedStyle}>
          <h1 >Ingredients</h1>
          <button value="home" onClick={handleToggleClicked}>go home</button>
        </div>
      )}
    </main>
    </>
  );
}

// class IndexPage2 extends React.Component {
//   constructor(){
//     super();
    
//     const date = new Date();
//     const hours = date.getHours();
//     const check_current_moment = hours <= 6 ?  "凌晨" : hours >=7 && hours <12? "早上" : hours === 12? "中午" : hours >=13 && hours < 19 ? "下午" : "晚上";
//     let greeting_txt ="", greeting_img = ""
//     switch(check_current_moment){
//         case "凌晨":
//           greeting_txt = "凌晨了\n\n不打擾您享受個人時光";
//           greeting_img = "meal_aftermeal";
//             break;
//         case "早上":
//           greeting_txt = "早安\n今天也會是元氣滿滿的一天！";
//           greeting_img = "meal_breakfast";
//             break;
//         case "中午":
//           greeting_txt = "午安\n開個冷氣唄";
//           greeting_img = "meal_lunch";
//             break;
//         case "下午":
//           greeting_txt = "下午好\n來杯咖啡？";
//           greeting_img = "meal_teatime";
//             break;
//         case "晚上":
//           greeting_txt = "晚安親愛的\n\n今天辛苦了，\n好好休息唄";
//           greeting_img = "meal_dinner";
//             break;
//         default:
//           greeting_txt = "你好，\n交個朋友吧";
//           greeting_img = "meal_teatime";
//           break;
//     }

//     this.state = {
//       current_moment: check_current_moment,
//       greeting_txt : greeting_txt,
//       greeting_img : greeting_img,
//       currentPage: "home",
//       nextPage: "",
//       homePage: false,
//       ingredientsPage: false,
//       recipePage: false,
//     };
//     console.log(this.state)

//     this.handleClick = this.handleClick.bind(this)
//     this.handlePageSwitching = this.handlePageSwitching.bind(this)
//   }

//   componentDidMount(){
//     this.setState({homePage: true})
//   }
  
//   handleClick(event){
//     const e = event.target;
//     const {name, value} = e;
//     this.setState({[name] : value})
//   }

//   handlePageSwitching(event) {
//     const [name, value] = event;
    
//   }

//   render(){
//     const currentPage = this.state.currentPage;
//     console.log(this.state.homePage)
//     // const pageContent = currentPage === "home" ? <Greetings data={this.state} size="full" /> : currentPage === "ingredients" ? "ingredients page" : null



//     const transitionOptions = {
//       transitionName: "fade",
//       transitionEnterTimeout: 500,
//       transitionLeaveTimeout: 500
//     }

//     let theChild = undefined;
//     if (this.state.currentPage === 'one') {
//         theChild = <Greetings data={this.state} />;
//     } else {
//         theChild = "123123";
//     } 

//     return(
//       <div className="page_home">
//         <Layout>
//           <SEO title="Home" />

//           <button name="currentPage" value="ingredients" onClick={this.handlePageSwitching}>change state</button>
//           {/* <Greetings data={this.state} size="full" /> */}
//           <Link to="/ingredients/" state={{type : `breakfast`}}>做早餐</Link>
//         </Layout>
//       </div>
//     )
//   }  
// }

// const IndexPage = () => (
//   <Layout>
//     <Greetings />
//     123
//     <SEO title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <StaticImage
//       src="../images/gatsby-astronaut.png"
//       width={300}
//       quality={95}
//       formats={["AUTO", "WEBP", "AVIF"]}
//       alt="A Gatsby astronaut"
//       style={{ marginBottom: `1.45rem` }}
//     />
//     <p>
//       <Link to="/page-2/">Go to page 2</Link> <br />
//       <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
//     </p>
//   </Layout>
// )

export default IndexPage
