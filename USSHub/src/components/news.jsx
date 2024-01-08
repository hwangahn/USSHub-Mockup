import NavBar from "./navbar"

export default function News() {
    return (
        <>
            <NavBar />
            <div id="content" style={{ width: "100%", height: "100%" }}>
                <img src="news.png" style={{width: "99%", display: "block", marginLeft: "auto", marginRight: "auto"}} />
            </div>
        </>
    )
}