import React from "react";
import styles from "./Login.module.css";

export const Login = () => {
	return (
		<div>
			<div className={styles.container}>
				<div className={styles.mini}>
					<p>Login/Signup with OTP</p>
				</div>

				<div className={styles.imagediv}>
					<div className={styles.imagediv2}>
						<img
							src="https://static.abhibus.com/img/icons/left-img.png"
							alt="mobile.png"
						/>
					</div>
				</div>
				<div className={styles.loginbox}>
					<input type="text" placeholder="Enter Your Mobile Number" />
					<br />
					<label>
						<input type="checkbox" name="" id="" />
						Get First Ride FREE
					</label>
					<br />
					<button className={styles.loginbtn}>Login/Signup with OTP</button>
					<br />
					<p className={styles.or}>or login with</p>
					<br />
					<div>
						<a href="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Fauth%2Fgoogle%2Fcallback&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&client_id=557229965892-qma0eslieva1g3nt9dqhg2mrj51htqe6.apps.googleusercontent.com&flowName=GeneralOAuthFlow">
							<img
								className={styles.icon1}
								src="https://static.abhibus.com/img/search/facebook_short.png"
								alt="fbook"
							></img>
						</a>
						<a href="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Fauth%2Fgoogle%2Fcallback&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&client_id=557229965892-qma0eslieva1g3nt9dqhg2mrj51htqe6.apps.googleusercontent.com&flowName=GeneralOAuthFlow">
							<img
								className={styles.icon2}
								src="https://static.abhibus.com/img/search/google_short.png"
								alt="google"
							></img>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
