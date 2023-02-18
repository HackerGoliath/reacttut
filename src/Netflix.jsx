import Sdata from "./Sdata"
import Card from "./Cards";

const Netflix = () => {
    return (
        <Card
            key={Sdata[1].id}
            imgsrc={Sdata[1].imgsrc}
            sname={Sdata[1].sname}
            title={Sdata[1].title}
            link={Sdata[1].link}
        />
    )
}

export default Netflix;