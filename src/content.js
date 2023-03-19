import './index.css';

function Con(props){
    return(
        <>
        <div className="pp1">
        
        <div id="g1" className="container">
            <div >
                <iframe width="420" height="300" src={props.srk} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true"></iframe>        
            </div>
            <div className="con t1">
                <div>
                    Created by <b>{props.instructor}</b>
                    <br/>
                    Duration : {props.duration}
                </div>
            </div>
        </div>
        
        </div>
        </>
    )
}


export default function Content(props){
    return(
        <>
        <div className="container">
        <div>
            <h2>
                {props.title}
            </h2>
        </div>
        <div>
            {props.description}
        </div>
        </div>
        <center>
        <div id="g1">
        <Con srk={props.sr} instructor={props.instructor} duration={props.duration}/>
        </div>
        <h4>## Practice is more important For this Tutorials ##</h4>
        </center>
        </>
    )
}

/*

<div id="g1">
        <Con srk={props.sr2} instructor={props.instructor2} duration={props.duration2}/>
        </div>
        <div id="g1">
        <Con srk={props.sr3} instructor={props.instructor3} duration={props.duration3}/>
</div>

*/