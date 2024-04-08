import CustomImage from "./CustomImage" 

export default function HeroSection(){
    return (
        <div className="section hero">
            <div className="col">
            <h1 className="title">What Are We About</h1>
            <p className="info">FlavourBoys is a place where you can please your soul and tummy with delicious food recipes of all cuisine and our service is absolutely free. So start exploring now</p>
            <button className="btn">explore now</button>
            </div>
            <div className="col gallery">
            <CustomImage pt={"70%"}/> 
            <CustomImage pt={"70%"}/> 
            <CustomImage pt={"70%"}/> 
            <CustomImage pt={"70%"}/> 
            <CustomImage pt={"70%"}/> 
            <CustomImage pt={"70%"}/> 
            <CustomImage pt={"70%"}/> 
            <CustomImage pt={"70%"}/> 
            <CustomImage pt={"70%"}/> 
            </div>
             </div>
    )
}