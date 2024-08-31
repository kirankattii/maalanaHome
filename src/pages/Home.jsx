import React, { useState, useEffect } from "react"
import MediaHome from "../components/MediaHome/MediaHome"
import DesktopHome from "../components/DesktopHome/Home" // Renamed to avoid conflict

const Home = () => {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 450)

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 450)
		}

		window.addEventListener("resize", handleResize)
		// Cleanup event listener on component unmount
		return () => window.removeEventListener("resize", handleResize)
	}, [])

	return <div>{isMobile ? <MediaHome /> : <DesktopHome />}</div>
}

export default Home
