import React from 'react'

const Sresult = (props) => {
    const img = `https://source.unsplash.com/1000x600/?${props.value}`
    return (
        <div>
            <img src={img} alt="" style={{ objectFit: "contain" }} />
        </div>
    )
}

export default Sresult