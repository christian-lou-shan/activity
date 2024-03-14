import { left } from "./info.js";
import { right } from "./img.js";
import { middle } from "./card.js";

const data ={
    title    :"Tony Stark one of the Advengers",
    para     :"Iron Man is the superhero persona of Anthony Edward Tony Stark, a businessman and engineer who runs the weapons manufacturer Stark Industries. When Stark is captured in a war zone and sustains a serious heart wound, he builds his iconic Iron Man armor out of scrap and escapes his captors. As a superhero, his armor suits grant him superhuman strength, flight, energy projection, and other abilities. The character was used to explore political themes, and early Iron Man stories were set in the Cold War. Later stories explored other themes, such as civil unrest, technological advancement, corporate espionage, alcoholism, and governmental authority.",
    button   :"Contact",
    myimage  :"./tony.png"

}

const {title, para, button,myimage} = data
let sectionOne = document.getElementById("sectionOne")
sectionOne.append(left(title, para, button,myimage))
sectionOne.append(right(myimage))


const  data2 = {
    title2   :"PROJECT COMPLETE",
    paras2    :"loremsdfbsdfabadbadbadbadbadbadbadbb",
    images2   :"pixel.jpg",
    images3   :"img3.jpg",
    images4   :"img4.jpg",
}


const {title2, paras2, images2, images3,images4} = data2
let sectionTwo = document.getElementById("sectionTwo")
sectionTwo.append(middle(title2, paras2,images2, images3, images4))


