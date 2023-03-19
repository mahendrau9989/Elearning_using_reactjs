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
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import htmlbook from './books/html_tutorial.pdf';
import cssbook from './books/css.pdf';
import aibook from './books/ai.pdf';
import cbook from './books/c.pdf';
import cppbook from './books/cpp.pdf';
import dlbook from './books/dl.pdf';
import dsabook from './books/dsa.pdf';
import javabook from './books/java.pdf';
import javascriptbook from './books/javascript.pdf';
import mlbook from './books/ml.pdf';
import mysqlbook from './books/mysql.pdf';
import mongodbbook from './books/mongodb.pdf';
import pythonbook from './books/python.pdf';
import rubybook from './books/ruby.pdf';
import reactbook from './books/react.pdf';
import expressbook from './books/express.pdf';
import ccbook from './books/cc.pdf';

function Pdfs(props) {
    const [open, setOpen] = useState(false);
  
    return (
      <div id="k1">
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          click Here To Download
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text">
            <a href={props.book}>Download</a>
          </div>
        </Collapse>
      </div>
    );
  }
  



function Webdevelopment(){
    return(
        <>
        <div id="p1" class="container">
            <div>
                <h2 id="h11">Web development</h2>
            </div>
            <div id="web_dev1">
                <Book s1={htmlbook} lin="Html" courseimg={html} coursename="HTML" />
                <Book s1={cssbook} lin="css" courseimg={css} coursename="CSS" />
                <Book s1={javascriptbook} lin="javascript" courseimg={javascript} coursename="JAVASCRIPT" />
                <Book s1={reactbook} lin="react" courseimg={react} coursename="ReactJS" />
                <Book s1={expressbook} lin="express" courseimg={express} coursename="ExpressJS" />
                <Book s1={mongodbbook} lin="mongo" courseimg={mongodb} coursename="MongoDB" />
                <Book s1={mysqlbook} lin="mysql" courseimg={mysql} coursename="Mysql" />
            </div>
        </div>
        </>
    )
}
function Programming(){
    return(
        <>
        <div id="p2" class="container">
            <div>
                <h2 id="h11">Programming</h2>
            </div>
            <div id="web_dev1">
                <Book s1={pythonbook} lin="python" courseimg={logo} coursename="Python" />
                <Book s1={javabook} lin="java" courseimg={java} coursename="JAVA" />
                <Book s1={cbook} lin="c" courseimg={c} coursename="C programming" />
                <Book s1={cppbook} lin="cpp" courseimg={cpp} coursename="C++ programming" />
                <Book s1={dsabook} lin="dsa" courseimg={dsa} coursename="DSA" />
                <Book s1={rubybook} lin="ruby" courseimg={ruby} coursename="RUBY" />
                <Book s1={ccbook} lin="competitive_coding" courseimg={cc} coursename="Competitve programming" />
            </div>
        </div>
        </>
    )
}
function Artificial(){
    return(
        <>
        <div id="p3" class="container">
            <div>
                <h2 id="h11">Artificial Intelligence</h2>
            </div>
            <div id="web_dev1">
                <Book s1={mlbook} lin="ml" courseimg={ml} coursename="Machine Learning" />
                <Book s1={dlbook} lin="dl" courseimg={dl} coursename="Deep Learning" />
                <Book s1={aibook} lin="ai" courseimg={ai} coursename="Artificial Intelligence" />
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
            <Pdfs book={props.s1}/>
        </div>
        </>
    )
}

function Books(){
    return(
        <>
        <Webdevelopment/>
        <Programming/>
        <Artificial/>
        </>
    )
}

export default Books;