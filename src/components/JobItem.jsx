import "../styles/JobItem.css";

export function JobItem({
    company,
    logo,
    isNew, 
    feature,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools
}){
    return <div className="joBox">
                <img src={logo}></img>
                <p>{company}</p>
            </div>
}
export default JobItem;