export default function Model({data}){

    return(
        <>
            <div className="model">
                <div>
                    
                    <h2>{data.heading}</h2>
                </div>
                <div className="d-flex">
                    {
                       data.data && data.data.map((item)=>{
                            return (
                                <div>
                                    <h3>{item.heading}</h3>
                                    {
                                        item.data.map((i)=>{
                                            return(
                                                
                                                <>
                                                    <h5>{i.head}</h5>
                                                    <p>{i.para}</p>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}