import NavBar from "./navbar"

export default function Outline() {
    return (
        <>
            <NavBar />
            <div id="content" style={{ width: "100%", height: "100%", backgroundColor: "#E9EBEB" }}>
                <img src="outline.png" style={{width: "99%", display: "block", marginLeft: "auto", marginRight: "auto"}} />
            </div>
        </>
    )
}