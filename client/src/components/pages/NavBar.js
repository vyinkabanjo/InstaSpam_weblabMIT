import React from "react";
import OutlookIcon from "../../public/icons/Outlook_Icon.svg";
import HomeIcon from "../../public/icons/Home Icon.png";
import ProfileIcon from "../../public/icons/Profile Icon.png";
import { get } from "../../utilities";
import { post } from "../../utilities";
import * as chrono from "chrono-node";

import "../../utilities.css";
import "./NavBar.css";

const TEST_CONTENT =
  '<html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="Generator" content="Microsoft Word 15 (filtered medium)"><style><!--@font-face{font-family:"Cambria Math"}@font-face{font-family:Calibri}p.MsoNormal, li.MsoNormal, div.MsoNormal{margin:0in;margin-bottom:.0001pt;font-size:12.0pt;font-family:"Calibri",sans-serif}a:link, span.MsoHyperlink{color:#0563C1;text-decoration:underline}a:visited, span.MsoHyperlinkFollowed{color:#954F72;text-decoration:underline}p.msonormal0, li.msonormal0, div.msonormal0{margin-right:0in;margin-left:0in;font-size:11.0pt;font-family:"Calibri",sans-serif}p.paragraph, li.paragraph, div.paragraph{margin-right:0in;margin-left:0in;font-size:11.0pt;font-family:"Calibri",sans-serif}span.EmailStyle19{font-family:"Calibri",sans-serif;color:windowtext}span.normaltextrun{}span.eop{}span.spellingerror{}span.EmailStyle23{font-family:"Calibri",sans-serif;color:windowtext}.MsoChpDefault{font-size:10.0pt}@page WordSection1{margin:1.0in 1.0in 1.0in 1.0in}div.WordSection1{}--></style></head><body lang="EN-US" link="#0563C1" vlink="#954F72"><div class="WordSection1"><p class="paragraph" style="margin:0in; margin-bottom:.0001pt; vertical-align:baseline"><span class="normaltextrun"><span style="color:black">Dear </span>Victory,<span style="color:black">&nbsp;</span></span><span class="eop"><span style="color:black">&nbsp;</span></span></p><p class="paragraph" style="margin:0in; margin-bottom:.0001pt; vertical-align:baseline; font-variant-caps:normal; orphans:auto; text-align:start; widows:auto; font-kerning:none; word-spacing:0px"><span class="eop"><span style="color:black">&nbsp;</span></span></p><p class="paragraph" style="margin:0in; margin-bottom:.0001pt; vertical-align:baseline; font-variant-caps:normal; orphans:auto; text-align:start; widows:auto; font-kerning:none; word-spacing:0px"><span class="normaltextrun"><span style="color:black">Congratulations! Your submission for the MLK-Inspired Art and Performance Contest,&nbsp;</span><i>That Black Woman</i><span style="color:black">, is the 2023 winner in the category of “The </span>Present<span style="color:black">”.&nbsp;</span></span><span class="eop"><span style="color:black">&nbsp;</span></span></p><p class="paragraph" style="margin:0in; margin-bottom:.0001pt; vertical-align:baseline; font-variant-caps:normal; orphans:auto; text-align:start; widows:auto; font-kerning:none; word-spacing:0px"><span class="eop"><span style="color:black">&nbsp;</span></span></p><p class="paragraph" style="margin:0in; margin-bottom:.0001pt; vertical-align:baseline; font-variant-caps:normal; orphans:auto; text-align:start; widows:auto; font-kerning:none; word-spacing:0px"><span class="normaltextrun"><span style="color:black">Your work will be displayed in Lobby 10 during the week of February 6-10</span></span><span class="normaltextrun"><sup><span style="font-size:8.5pt; color:black">th</span></sup><span style="color:black">.&nbsp;</span></span><span class="eop"><span style="color:black">&nbsp;</span></span></p><p class="paragraph" style="margin:0in; margin-bottom:.0001pt; vertical-align:baseline; font-variant-caps:normal; orphans:auto; text-align:start; widows:auto; font-kerning:none; word-spacing:0px"><span class="eop"><span style="color:black">&nbsp;</span></span></p><p class="paragraph" style="margin:0in; margin-bottom:.0001pt; vertical-align:baseline; font-variant-caps:normal; orphans:auto; text-align:start; widows:auto; font-kerning:none; word-spacing:0px"><span class="normaltextrun">Since your submission is spoken word, we plan to print the poem on a large poster to display it, but include a QR code to your spoken word performance of it<span style="color:black">. You can have </span>the poster<span style="color:black"> at the end of the week, of course. Let us know if that works for you.&nbsp;</span></span><span class="eop"><span style="color:black">&nbsp;</span></span></p><p class="paragraph" style="margin:0in; margin-bottom:.0001pt; vertical-align:baseline; font-variant-caps:normal; orphans:auto; text-align:start; widows:auto; font-kerning:none; word-spacing:0px"><span class="eop"><span style="color:black">&nbsp;</span></span></p><p class="paragraph" style="margin:0in; margin-bottom:.0001pt; vertical-align:baseline; font-variant-caps:normal; orphans:auto; text-align:start; widows:auto; font-kerning:none; word-spacing:0px"><span class="normaltextrun"><span style="color:black">Also, we will be printing a poster to accompany the winners with a description of each piece of art. Do you want to use the existing summary (that you submitted on the form), or would you prefer to make any edits?</span></span><span class="eop"><span style="color:black">&nbsp;</span></span></p><p class="paragraph" style="margin:0in; margin-bottom:.0001pt; vertical-align:baseline; font-variant-caps:normal; orphans:auto; text-align:start; widows:auto; font-kerning:none; word-spacing:0px"><span class="eop"><span style="color:black">&nbsp;</span></span></p><p class="paragraph" style="margin:0in; margin-bottom:.0001pt; vertical-align:baseline; font-variant-caps:normal; orphans:auto; text-align:start; widows:auto; font-kerning:none; word-spacing:0px"><span class="normaltextrun"><span style="color:black">Lastly, this contest includes a prize! We will process a payment. If you have been paid via direct deposit by MIT in the past, it will be automatically direct deposited. If you do not have an on-campus job or haven\'t been paid by MIT in the past, please send us the address you would like the check mailed to.&nbsp;</span></span><span class="eop"><span style="color:black">&nbsp;</span></span></p><p class="paragraph" style="margin:0in; margin-bottom:.0001pt; vertical-align:baseline; font-variant-caps:normal; orphans:auto; text-align:start; widows:auto; font-kerning:none; word-spacing:0px"><span class="eop"><span style="color:black">&nbsp;</span></span></p><p class="paragraph" style="margin:0in; margin-bottom:.0001pt; vertical-align:baseline; font-variant-caps:normal; orphans:auto; text-align:start; widows:auto; font-kerning:none; word-spacing:0px"><span class="normaltextrun"><span style="color:black">Thank you for your submission, the committee was delighted to review your wonderful work. Congratulations again!</span></span><span class="eop"><span style="color:black">&nbsp;</span></span></p><p class="paragraph" style="margin:0in; margin-bottom:.0001pt; vertical-align:baseline; font-variant-caps:normal; orphans:auto; text-align:start; widows:auto; font-kerning:none; word-spacing:0px"><span class="eop"><span style="color:black">&nbsp;</span></span></p><p class="paragraph" style="margin:0in; margin-bottom:.0001pt; vertical-align:baseline; font-variant-caps:normal; orphans:auto; text-align:start; widows:auto; font-kerning:none; word-spacing:0px"><span class="normaltextrun"><span style="color:black">All the best,&nbsp;</span></span><span class="eop"><span style="color:black">&nbsp;</span></span></p><p class="paragraph" style="margin:0in; margin-bottom:.0001pt; vertical-align:baseline; font-variant-caps:normal; orphans:auto; text-align:start; widows:auto; font-kerning:none; word-spacing:0px"><span class="eop"><span style="color:black">&nbsp;</span></span></p><p class="paragraph" style="margin:0in; margin-bottom:.0001pt; vertical-align:baseline; font-variant-caps:normal; orphans:auto; text-align:start; widows:auto; font-kerning:none; word-spacing:0px"><span class="normaltextrun"><span style="color:black">Nyasha Toyloy, Polina&nbsp;</span></span><span class="spellingerror"><span style="color:black">Vulf</span></span><span class="normaltextrun"><span style="color:black">, Sophia Hasenfus</span></span><span class="eop"><span style="color:black">&nbsp;</span></span></p><p class="paragraph" style="margin:0in; margin-bottom:.0001pt; vertical-align:baseline; font-variant-caps:normal; orphans:auto; text-align:start; widows:auto; font-kerning:none; word-spacing:0px"><span class="normaltextrun"><span style="color:black">MLK Art Exhibition sub-committee</span></span><span class="eop"><span style="color:black">&nbsp;</span></span></p><p class="MsoNormal"><span style="font-size:11.0pt">&nbsp;</span></p></div></body></html>';
/**
 * NavBar is the component on the main website page responsible for navigating between pages.
 *
 * Proptypes
 * @param {string} user_id user id of the client
 */
const writetoDB = () => {
  post("/api/emails");
};

const parseDateTime = () => {
  const result = chrono.parseDate(TEST_CONTENT);
  console.log(result);
  // return result;
};

const NavBar = (props) => {
  return (
    <nav className="NavBar-container">
      <div className="u-flexColumn NavBar-headers">
        <span className="NavBar-headerItem u-flex-alignCenter">
          <img src={OutlookIcon} alt="Outlook Icon" className="NavBar-icon" />
          <p>Outlook</p>
        </span>

        <span className="NavBar-headerItem u-flex-alignCenter">
          <img src={HomeIcon} alt="Home Icon" className="NavBar-icon" />
          <p>Home</p>
        </span>

        <span className="NavBar-headerItem u-flex-alignCenter">
          <img src={ProfileIcon} alt="Profile Icon" className="NavBar-icon" />
          <p>Profile</p>
        </span>
        {/* code to create button that sends data to database */}
        <button onClick={writetoDB}>Send to DB</button>
      </div>
    </nav>
  );
};

export default NavBar;
