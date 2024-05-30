import { Col, Container, Row } from "react-bootstrap"
import { BsBinoculars } from "react-icons/bs";
import { FaBox } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import './Feature.css'
import FeatureItem from "../FeatureItem/FeatureItem";
import FeatureItemm from "../FeatureItem/FeatureItemm";
import FeatureItemmm from "../FeatureItem/featureItemmm";
import { useState } from "react";

function Feature(){
    const [url,setUrl]=useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq354QSypR69JSAYKUtNzJtE9RBiWnwF3mOc4aFRjWRFhq4q8I2LT50eYpvQZYH_CfUQ4&usqp=CAU')

    const featureItems=[
        {
            id:1,
            part:[<BsBinoculars
            style={{ fontSize:'20px',color:'#388da8',borderRadius:'20px',marginRight:'10px',boxShadow:'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;;',width:'41px',height:'42px'
                ,display:'flex',flexShrink:'0',backgroundColor:'#fff',justifyContent:'center',alignItems:'center',padding:'6px'
            }} />,
            <FeatureItem />,
            url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq354QSypR69JSAYKUtNzJtE9RBiWnwF3mOc4aFRjWRFhq4q8I2LT50eYpvQZYH_CfUQ4&usqp=CAU'
        ]
},
        {
            id:2,
            part:[<FaBox
            style={{ fontSize:'20px',color:'#388da8',borderRadius:'20px',marginRight:'10px',boxShadow:'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;;',width:'41px',height:'42px'
                ,display:'flex',flexShrink:'0',backgroundColor:'#fff',justifyContent:'center',alignItems:'center',padding:'6px'
            }} />,
            <FeatureItemm />,
            url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbbERCZozL18uHmQmsVzyGPGiu7x5e59X1BpcROw5QaDXO4dAYzBnvjUcF0In1KyEHQh0&usqp=CAU'
             
        ],
        },
        {
            id:3,
            part:[<MdOutlineWbSunny
            style={{ fontSize:'25px',color:'#388da8',borderRadius:'20px',marginRight:'10px',boxShadow:'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;;',width:'30px',height:'30px'
                ,display:'flex',flexShrink:'0',backgroundColor:'#fff',justifyContent:'center',alignItems:'center',padding:'2px'
            }} />,
            <FeatureItemmm />,
            url='https://366e203a.rocketcdn.me/wp-content/uploads/2020/06/Businesswomen.jpg'
        ],
        }
    ]
    const ShowPicture=()=>{
        let one = document.getElementById('one');
        if (one.style.display == "none") {
          one.style.display = "block"
        } else {
          one.style.display = "none"
        }
        let Two=document.getElementById("two");
        if (Two.style.display == "none") {
            Two.style.display = "block"
          } else {
            Two.style.display = "none"
          }
          let Three=document.getElementById("three");
          if (Three.style.display == "none") {
              Three.style.display = "block"
            } else {
              Three.style.display = "none"
            }
    }
    return(
        <>
        <h5 style={{display:'block',margin:'auto',fontSize:'30px',textAlign:'center',padding:'15px',position:'relative'}} className="header-feature">Features</h5>
        <span style={{display:'block',margin:'auto',textAlign:'center',color:'#666',padding:'25px'}}>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</span>
        <Container>
            <Row>
                <Col style={{margin:'59px 0px'}}>
                   {
                      featureItems.map((featureItem) => (
                        <div
                        style={{display:'flex',flexDirection:'row',margin:'25px 0px'}}
                         key={featureItem.id}
                         onClick={ShowPicture}>
                            {featureItem.part}
                        </div>))
                   }
                </Col>
                <Col>
                   <img id="one" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq354QSypR69JSAYKUtNzJtE9RBiWnwF3mOc4aFRjWRFhq4q8I2LT50eYpvQZYH_CfUQ4&usqp=CAU"/> 
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default Feature