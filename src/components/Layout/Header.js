import { Fragment } from "react";
//using Fragment
//include local image
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
const Header = (props) =>{
return(
    <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <button>Cart</button>
        </header>
        <div className={classes['main-image']}>
            {/* include local image */}
            <img src={mealsImage} alt="A table full delicious food"/>
        </div>
    </Fragment>
)
}

export default Header;
