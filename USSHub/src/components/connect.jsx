import NavBar from "./navbar"

export default function Connect() {
    return (
        <>
            <NavBar />
            <div id="content" style={{ width: "100%", height: "100%", backgroundColor: "#E9EBEB" }}>
                <img src="connect.png" style={{width: "99%", display: "block", marginLeft: "auto", marginRight: "auto"}} />
            </div>
        </>
    )
}