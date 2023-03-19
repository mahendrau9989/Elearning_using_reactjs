import React from 'react';
//import ReactDOM from 'react-dom/client';
import logo from './images/python.png';
import html from './images/html.png';
import css from './images/css.png';
import javascript from './images/javascript.png';
import react from './images/reactjs.png';
import java from './images/java.png';
import ai from './images/AI.png';
import dl from './images/deeplearning.jpg';
import ml from './images/machinelearning.jpeg';
import mongodb from './images/mongodb.png';
import express from './images/expressjs.png';
import dsa from './images/dsa.png';
import mysql from './images/mysql.png';
import ruby from './images/ruby.png';
import c from './images/c.png';
import cpp from './images/cpp.png';
import cc from './images/cc.png';
import './index.css';
function Webdevelopment(){
    return(
        <>
        <div class="container" id="wpa">
            <div>
                <h2 id="h11">Web development</h2>
            </div>
            <div id="web_dev">
                <Book lin="Html" courseimg={html} coursename="HTML" />
                <Book lin="css" courseimg={css} coursename="CSS" />
                <Book lin="javascript" courseimg={javascript} coursename="JAVASCRIPT" />
                <Book lin="react" courseimg={react} coursename="ReactJS" />
                <Book lin="express" courseimg={express} coursename="ExpressJS" />
                <Book lin="mongo" courseimg={mongodb} coursename="MongoDB" />
                <Book lin="mysql" courseimg={mysql} coursename="Mysql" />
            </div>
        </div>
        </>
    )
}
function Programming(){
    return(
        <>
        <div class="container" id="wpa">
            <div>
                <h2 id="h11">Programming</h2>
            </div>
            <div id="web_dev">
                <Book lin="python" courseimg={logo} coursename="Python" />
                <Book lin="java" courseimg={java} coursename="JAVA" />
                <Book lin="c" courseimg={c} coursename="C programming" />
                <Book lin="cpp" courseimg={cpp} coursename="C++ programming" />
                <Book lin="dsa" courseimg={dsa} coursename="DSA" />
                <Book lin="ruby" courseimg={ruby} coursename="RUBY" />
                <Book lin="competitive_coding" courseimg={cc} coursename="Competitve programming" />
            </div>
        </div>
        </>
    )
}
function Artificial(){
    return(
        <>
        <div class="container" id="wpa">
            <div>
                <h2 id="h11">Artificial Intelligence</h2>
            </div>
            <div id="web_dev">
                <Book lin="ml" courseimg={ml} coursename="Machine Learning" />
                <Book lin="dl" courseimg={dl} coursename="Deep Learning" />
                <Book lin="ai" courseimg={ai} coursename="Artificial Intelligence" />
            </div>
        </div>
        </>
    )
}




function Book(props){
    return(
        <>
        <div id="i1">
            <a href={props.lin}><p id="a1"><img src={props.courseimg} width="80px" height="80px" alt=""/></p></a>
            <p id="a1">{props.coursename}</p>
        </div>
        </>
    )
}

function Books(){
    return(
        <>
        <div>
            <Webdevelopment/>
            <Programming/>
            <Artificial/>
        </div>
        </>
    )
}

export default Books;