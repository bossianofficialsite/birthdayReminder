import React from "react";

// Images
import img1 from "./image/image1.jpg";
import img2 from "./image/image2.jpg";
import img3 from "./image/image3.jpg";
import img4 from "./image/image4.jpg";
import img5 from "./image/image5.jpg";


const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const leadingZero = (data) => {
    let dateCount = String(data).split("").length;
    if(dateCount <= 1) {
        data = String(data).padStart(2, 0);
    }

    return data;
}

const d = new Date();
const currentMonth = d.getUTCMonth();
const currentDate = `${monthNames[currentMonth]} ${leadingZero(d.getDate())}, 1995`;

const birthdays = [
  {
    id: 1,
    img: img1,
    name: "Bertie Yates",
    birthday: "December 01, 1997",
  },
  {
    id: 2,
    img: img2,
    name: "Apple Smith",
    birthday: "December 05, 1998",
  },
  {
    id: 3,
    img: img3,
    name: "Micheal Scott",
    birthday: "September 20, 1994",
  },
  {
    id: 4,
    img: img4,
    name: "Mark Hunt",
    birthday: currentDate,
  },
  {
    id: 5,
    img: img5,
    name: "Steven Johnson",
    birthday: "August 01, 1992",
  }
];

export default birthdays;