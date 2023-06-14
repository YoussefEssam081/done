
import React from "react";

export default function CINEMATIC() {
    return (

        <div>

            <div>
                <div className="CINEMATIC--ICON--TITTLE">
                    <img className="CINEMATIC--ICON" src="images/download.png" />
                    <h1 className="CINEMATIC--TITTLE"> CINEMATIC </h1>
                </div>

                <div class="NEW-DAWN">
                    <div class="NEW-DAWN--IMAGE">

                        <img src="images/22181458_10159645852615556_5203229333322693582_o.jpg" alt="First Image" />

                    </div>
                    <div class="NEW-DAWN--TEXT">
                        <h1>A NEW DAWN</h1>
                        <p> Day breaks over a landscape consecrated by blood and steel. A battle begins as a new dawn rises.</p>
                    </div>

                </div>
            </div>


            <div className="CINEMATIC--SHORT--STORY">

                <div className="CINEMATIC--SHORT--STORY--ALLTEXT">
                    <h3 className="SHORT-STORY">SHORT STORY</h3>
                    <h1 className=" WHISPERING">THE WHISPERING</h1>
                    <h1 className="DOODAD">DOODAD</h1>
                    <p className="GRAHAM-MCNEILL">BY GRAHAM MCNEILL</p>
                    <p className="glade">Let me tell you about my glade.</p>

                    <a> <button className="READ--STORY--BTN">READ STORY</button> </a>
                </div>
            </div>

        </div>
    )
}