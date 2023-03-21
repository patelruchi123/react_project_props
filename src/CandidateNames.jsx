const CandidateNames=(props)=>{
    console.log("props",props);
    return (<ul>
        {
        props.CandidateNames.map((CandidateName)=>{
            return <li key={CandidateName}>{CandidateName}

            </li>;
        }
        )
    }
       </ul> );
};
export default CandidateNames;