import { useState } from "react"
import { assets } from "../../assets/assets"
import HomeComponent from "../HomeComponent"
import styles from "./Home.module.css"

const Home = () => {
	// State to track if shatter is clicked
	const [isShatterClicked, setIsShatterClicked] = useState(false)

	// Function to handle click on shatter
	const handleShatterClick = () => {
		setIsShatterClicked(true)
	}
	return (
		<div className={styles.container}>
			<div className={styles.topBanner}>
				<div className={styles.topBannerImg1}>
					<img
						src={assets.bannerText}
						alt=""
					/>
					<img
						src={assets.sourLmli}
						alt=""
					/>
				</div>
			</div>

			<div className={styles.whiteBanner}>
				<div className={styles.whiteBannerImg1}>
					<img
						src={assets.bgWaveWhite}
						alt=""
					/>
				</div>
				<div className={styles.whiteBannerContent}>
					<h2>
						A Sweet and Sour Trip <br /> Down Memory Lane!
					</h2>
					<div className={styles.whiteBannerContentimg}>
						<img
							src={assets.sourFruit}
							alt=""
						/>
					</div>
				</div>
				<div className={styles.line1}>
					<img
						src={assets.line1}
						alt=""
					/>
				</div>
			</div>

			<div className={styles.yellowBanner}>
				<div className={styles.yellowBannerImg1}>
					<img
						src={assets.bgWaveYellow}
						alt=""
					/>
				</div>
				<div className={styles.yellowBannerContent}>
					<div className={styles.manogBoxImg}>
						<img
							src={assets.mangoBox}
							alt=""
						/>
					</div>
					<h2>
						Mango Magic <br />
						in Every Katli!
					</h2>
					<div className={styles.manogkid}>
						<img
							src={assets.mangoKid}
							alt=""
						/>
					</div>
				</div>

				<div className={styles.line2}>
					<img
						src={assets.line2}
						alt=""
					/>
				</div>
			</div>

			<div className={styles.purpleBanner}>
				<div className={styles.purpleBannerImg1}>
					<img
						src={assets.bgWavePurpule}
						alt=""
					/>
				</div>
				<div className={styles.purpleBannerContent}>
					<div className={styles.purpleBannerContentleft}>
						<h2>
							Jamun Flavor, <br /> Anytime Craving Savior!
						</h2>
						<div className={styles.jamun}>
							<img
								src={assets.jamun}
								alt=""
							/>
						</div>
					</div>
					<div className={styles.lollipop}>
						<img
							src={assets.lollipop}
							alt=""
						/>
					</div>
				</div>
				<div className={styles.line3}>
					<img
						src={assets.line3}
						alt=""
					/>
				</div>
			</div>

			<div className={styles.pinkBanner}>
				<div className={styles.pinkBannerImg1}>
					<img
						src={assets.bgWavePink}
						alt=""
					/>
				</div>
				<div className={styles.pinkBannerContent}>
					<div className={styles.candy1}>
						<img
							src={assets.candies2}
							alt=""
						/>
					</div>
					<div className={styles.pinkBannerContentRight}>
						<div className={styles.mixfruits1}>
							<img
								src={assets.mixfruits1}
								alt=""
							/>
						</div>
						<h2>
							Sweet, Tangy, <br /> and Totally Fun!
						</h2>
					</div>
				</div>
				<div className={styles.line4}>
					<img
						src={assets.line4}
						alt=""
					/>
				</div>
			</div>

			<div className={styles.greenBanner}>
				<div className={styles.greenBannerImg1}>
					<img
						src={assets.bgWaveLightgreen}
						alt=""
					/>
				</div>
				<div className={styles.greenBannerContent}>
					<div className={styles.mixFruit2}>
						<img
							src={assets.mixfruits2}
							alt=""
						/>
					</div>
					<h2>
						Assorted Flavors,
						<br /> Double the Fun!
					</h2>
					<div className={styles.candies2}>
						<img
							src={assets.candies1}
							alt=""
						/>
					</div>
				</div>
			</div>

			{/* <div className={styles.shatter}>
				<div className={styles.shatterImg}>
					<img
						src={assets.shatter}
						alt=""
					/>
					<div className={styles.roof}>
						<img
							src={assets.roof}
							alt=""
						/>
					</div>
				</div>
			</div>

			<HomeComponent /> */}
			<div className={styles.shatterContainer}>
				<div
					className={`${styles.shatter} ${
						isShatterClicked ? styles.shatterClicked : ""
					}`}
					onClick={handleShatterClick}
				>
					<div className={styles.shatterImg}>
						<img
							src={assets.shatter}
							alt=""
						/>
					</div>
				</div>
				<div className={styles.roof}>
					<img
						src={assets.roof}
						alt=""
					/>
				</div>
				{/* This content will be revealed when shatter is clicked */}
				{isShatterClicked && (
					<div className={styles.homeComponent}>
						<HomeComponent />
					</div>
				)}
			</div>
		</div>
	)
}

export default Home
