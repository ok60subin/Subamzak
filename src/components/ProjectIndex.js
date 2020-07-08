import React, { useState } from 'react';
import Nav from './Nav';
import { Link } from 'gatsby';
export default function ProjectIndex({ fullMenu }) {
  const [headerOpen, toggleHeader] = useState(false);
  return (
    <div>
    <div className="row project">
                <div className="col-5 col-12-medium">
                  <h2 className="Title">Grade</h2>
                  <ul>
                    <li><Link to="/First"><h4>1st 새내긔~</h4> </Link></li>
                    <li><Link to="/Second"><h4>2nd 헌내긔~</h4> </Link></li>
                    <li><Link to="/Third"><h4>3rd 고인물~</h4> </Link></li>
                    <li><Link to="/Fourth"><h4>4th ㅎ...</h4> </Link></li>
                  </ul>

                </div>
                <div className="col-5 col-12-medium">
                  {/* <h2 className="Title">Field</h2>
                  <ul>
                    <li><Link to="/Mechanical"><h4>Mechanical 기계공 짠맛</h4> </Link></li>
                    <li><Link to="/Electronic"><h4>Electonic 전자공 쓴맛</h4> </Link></li>
                    <li><Link to="/Computer"><h4>Computer 컴공맛 착향료</h4> </Link></li>
                  </ul> */}
                </div>

                                
                {/* <Link to="/All" className="button primary small korean"> 다 보러가기 ★  </Link> */}

         </div>
         <hr/>
         </div>
  );
}
