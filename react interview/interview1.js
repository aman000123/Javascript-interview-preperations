

const [clickedButtonIndex, setClickedButtonIndex] = useState(0);

const handleButtonClick = (index) => {
    setClickedButtonIndex(index);
};


{
    [...Array(5).keys()].map((_, index) => (
        <button
            key={index}
            className={index === clickedButtonIndex ? `${styles.clicked}` : ''}
            onClick={() => handleButtonClick(index)}
        >
            10:00 AM-12:00 AM
        </button>
    ))
}

//jis button pr click karenge use bg black hoga

// [...Array(5).keys()]: This part creates an array with 5 elements [0, 1, 2, 3, 4]. It uses the spread operator (...) to spread the array and the Array(5).keys() function to generate an iterator for the keys of the array.


//package-lockjson --- library jo install kiya hai usak version manage --ye change nhi hota bcz version maintin karta ha

//package== package details

//index.html == browser read karta ha

//<div id="root"></div>  root ko target karta ha browser

//src folder ke index.js  se target karta ha  id root ko

//app.js ko run karta hai index.js

//intercepter---bich me interruption karna axious ka intercepter karta

//data ja raha to request

//intercepter bich me  req karte hain uske bich me check karta hai


//data a raha to response