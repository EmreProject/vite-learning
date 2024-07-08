import uc from '/images/uc.jpg';
import dort from "@images/dort.jpg"
import { Person } from './mymodule';
import "@styles/style2.css";
import {Life} from "/js/mymodule2"

import parse from "parse-svg-path"
import abs from "abs-svg-path"
import normalize from "normalize-svg-path"


var segments = normalize(abs(parse('M0 0L10 10 l   5 20A10 10 0 0 0 20 20Z')))

console.log(segments);

const per1=new Person("emre",25,12345);
per1.info(12345);

console.log(Life);

document.addEventListener("DOMContentLoaded",function(){

    const imgElement = document.getElementById('by-js');
    imgElement.src = uc;

    const imgElement2 = document.getElementById('by-js-absolute');
    imgElement2.src = dort;

})