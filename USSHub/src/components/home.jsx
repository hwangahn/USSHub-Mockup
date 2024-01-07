import NavBar from "./navbar"

export default function Home() {
    return (
        <>
            <NavBar />
            <div id="content" style={{ width: "100%", height: "100%", backgroundColor: "#E9EBEB" }}>
                <img src="home.png" style={{width: "99%", display: "block", marginLeft: "auto", marginRight: "auto"}} />
            </div>
        </>
    )
}