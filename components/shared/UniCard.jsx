
const UniCard = ({uni}) => {
    const {name,website,application_fee,location,intake_months,img} = uni
    return (
        <div>

            <div className="flex border p-5 gap-5 max-w-7xl shadow-xl mx-auto h-60 items-center">
                <div className="w-1/4"><img src={img} alt="" /></div>
                <div>
                <h2 className="card-title">{name}</h2>
                <a className="underline" href={`https://${website}`} target="_blank" rel="noopener noreferrer">
          {website}
        </a>
    <p>Application fee: {application_fee}</p>
    <p>Location: {location}</p>
    <p>Intake: {intake_months}</p>
                </div>
            </div>
            
        </div>
    );
};

export default UniCard;