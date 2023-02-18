import Sdata from "./Sdata"
import Card from "./Cards";

const Amazon = () => {
    return (
        <Card
            key={Sdata[7].id}
            imgsrc={Sdata[7].imgsrc}
            sname={Sdata[7].sname}
            title={Sdata[7].title}
            link={Sdata[7].link}
        />
    )
}

export default Amazon;