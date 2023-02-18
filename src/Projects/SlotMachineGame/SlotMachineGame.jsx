import "./SlotMachineGame.css";
import SlotM from "./SlotM";


const SlotMachineGame = () => {
    return (
        <>
            <h1 className="heading_style">🎰 Welcome to
                <span style={{ fontWeight: "bold" }}> Slot Machine game</span> 🎰</h1>
            <div className="slotMachine">
                <SlotM x=" 😃 " y=" 😃 " z=" 😃 " />
                <hr />
                <SlotM x=" 😊 " y=" 😒 " z=" 😊 " />
                <hr />
                <SlotM x=" 🍎 " y=" 🍌 " z=" 🍓 " />
                <hr />
                <SlotM x=" 🙊 " y=" 🙉 " z=" 🙈 " />
                <hr />
                <SlotM x=" 💑 " y=" 💑 " z=" 💑 " />
            </div>
        </>
    )
}

export default SlotMachineGame;