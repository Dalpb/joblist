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
    tools,
    requirements,
    updateRequirements,
    data,
    updateJobList
}){

    function selectRequirement(require){
        const italReadyExits = requirements.includes(require);
        if(!italReadyExits){
            //update requirements
            updateRequirements([...requirements,require]);

            //search for jobs with that require
        }
        //if exist, just return
    }



    return (<div className="joBox">
                <div>
                <img src={logo} alt={`${company}_logo`}></img>
                    <div>
                        <div className="company_styles">
                            {company}
                        </div>
                        <p>{position}</p>
                        <ul>
                            <li>{postedAt}</li>
                            <li>{contract}</li>
                            <li>{location}</li> 
                        </ul>
                    </div>
                </div>
                <div className="requirements">
                    <div>{role}</div>
                    <div>{level}</div>
                    {
                        languages.map((language,index) => <div key={`${index}-lan`}>{language}</div>)
                    }
                    {tools.map((tool,index) => <div key={`${index}-tool`}>{tool}</div>)}
                </div>
            </div>);
}
export default JobItem;