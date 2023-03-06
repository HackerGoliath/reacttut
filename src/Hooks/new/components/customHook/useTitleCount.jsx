import { useEffect } from "react";

const useTitleCount = (count) => {
    useEffect(() => {
        console.log("Hello Custom Hook");
        if (count >= 1) {
            document.title = `Chats (${count})`
        }
        else {
            document.title = `Chat`
        }
    }, [count])
}

export default useTitleCount;