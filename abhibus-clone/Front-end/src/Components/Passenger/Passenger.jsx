import React from "react";
import styled from "styled-components";
import style from "./Passenger.module.css";
import { useHistory } from "react-router";

const Heading = styled.h1`
  font-size: 36px;
  margin-left: 3%;
  font-family: "" Open Sans ", Arial, Helvetica, sans-serif";
  color: rgb(34, 34, 34);
  font-weight: 600;
  text-size-adjust: 100%;
`;
const LoginBox = styled.div`
  height: 150px;
  width: 65%;
  margin-left: 3%;
  border: 1px solid rgb(206, 202, 202);
  box-shadow: rgba(32, 33, 36, 0.18) 0px 1px 6px 0px;
`;
const DetailsBox = styled.div`
  height: 750px;
  width: 22%;
  margin-right: 3%;
  margin-top: -9%;
  border: 1px solid rgb(206, 202, 202);
  float: right;
`;
const Logindetails = styled.div`
  height: 70px;
  width: 95%;
  display: flex;

  margin-left: 3%;
  margin-top: 1%;
  /* border: 1px solid rgb(206, 202, 202); */
`;
const Para = styled.p`
  font-size: 15px;
  margin-left: 3%;
  font-family: "" Open Sans ", Arial, Helvetica, sans-serif";
  color: rgb(80, 80, 80);
  font-weight: 600;
  text-size-adjust: 100%;
`;
const Input = styled.input`
  height: 40px;
  width: 250px;
  border: 1px solid rgb(206, 202, 202);
  margin-left: 3%;
  margin-top: 1%;
`;
const SendOtp = styled.button`
  height: 44px;
  width: 150px;
  border: 1px solid rgb(196, 0, 0);
  cursor: pointer;
  margin-left: 3%;
  margin-top: 1%;
  background-color: rgb(215, 77, 66);
  color: rgb(255, 255, 255);
  text-size-adjust: 100%;
`;
const Fbook = styled.img`
  height: 44px;
  width: 150px;
  border: 1px solid rgb(206, 202, 202);
  cursor: pointer;
  margin-left: 3%;
  margin-top: 3%;
`;
const Google = styled.img`
  height: 44px;
  width: 150px;
  border: 1px solid rgb(206, 202, 202);
  cursor: pointer;
  margin-left: 5%;
  margin-top: 3%;
`;
const Select = styled.select`
  height: 40px;
  width: 250px;
  border: 1px solid rgb(206, 202, 202);
  margin-left: 3%;
  margin-top: 1%;
  text-size-adjust: 100%;
`;
const CouponCode = styled.input`
  height: 40px;
  width: 250px;
  border: 1px dashed rgb(215, 77, 66);
  margin-left: 3%;
  margin-top: 1%;
  text-size-adjust: 100%;
`;

const Apply = styled.button`
  height: 44px;
  width: 150px;
  border: 1px solid rgb(196, 0, 0);
  cursor: pointer;
  margin-left: 3%;
  margin-top: 1%;
  background-color: rgb(196, 0, 0);
  color: rgb(255, 255, 255);
  text-size-adjust: 100%;
`;

const Checkbox = styled.input`
  height: 15px;
  width: 15px;
`;

const PaymentBox = styled.div`
  height: 650px;
  width: 65%;
  margin-left: 3%;
  border: 1px solid rgb(206, 202, 202);
  box-shadow: rgba(32, 33, 36, 0.18) 0px 1px 6px 0px;
`;

const Headpayment = styled.p`
  color: rgb(71, 71, 71);
  font-size: 14px;
  text-size-adjust: 100%;
  margin-left: 3%;
  font-weight: 600;
`;


export const Passenger = () => {
  const history = useHistory();

	const details = localStorage.getItem("details");
	let value = JSON.parse(details);
	console.log(value);

	return (
		<div>
			<Heading>Passenger Details</Heading>
			<LoginBox>
				<Para>Login (to avail better offers and services)</Para>
				<Logindetails>
					<Input placeholder="Enter Mobile Number"></Input>
					<SendOtp>Send OTP</SendOtp>
					<Para>or</Para>
					<a href="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Fauth%2Fgoogle%2Fcallback&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&client_id=557229965892-qma0eslieva1g3nt9dqhg2mrj51htqe6.apps.googleusercontent.com&flowName=GeneralOAuthFlow">
						<Fbook src="https://static.abhibus.com/img/search/facebook_short.png"></Fbook>
					</a>
					<a href="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Fauth%2Fgoogle%2Fcallback&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&client_id=557229965892-qma0eslieva1g3nt9dqhg2mrj51htqe6.apps.googleusercontent.com&flowName=GeneralOAuthFlow">
						<Google src="https://static.abhibus.com/img/search/google_short.png"></Google>
					</a>
				</Logindetails>
			</LoginBox>
			<DetailsBox></DetailsBox>
			<br />
			<LoginBox>
				<Para>
					Enter Contact details ( Your booking details will be sent to your
					email address and contact no. )
				</Para>
				<Logindetails>
					<Input placeholder="Enter Your mailID"></Input>
					<Input placeholder="Mobile No"></Input>
					<Input placeholder="Emergency Contact Mobile No"></Input>
				</Logindetails>
			</LoginBox>
			<br />
			<LoginBox>
				<Para>
					Enter passenger details Please review passenger details before making
					the booking
				</Para>
				<Logindetails>
					<Input placeholder="Enter Full Name"></Input>
					<Input placeholder="Enter Age"></Input>
					<Select name="gender">
						<option value="Select Gender">Select Gender</option>
						<option value="Male">Male</option>
						<option value="Fe-male">Fe-male</option>
						<option value="Others">Others</option>
					</Select>
				</Logindetails>
			</LoginBox>
			<br />
			<LoginBox>
				<Para>
					<Checkbox type="checkbox"></Checkbox>
					This July get upto 500/- Assured Cashback : Use coupon AbhiSafe ,get
					Upto RS.500/- Assured Cashback
				</Para>
				<Para>
					<Checkbox type="checkbox"></Checkbox>
					Save Minimum 250/- on pay with rewards : Use coupon PWR250 ,get Upto
					RS.250/- Assured Cashback
				</Para>
				<Logindetails>
					<CouponCode placeholder="Coupon Code"></CouponCode>
					<Apply>Apply</Apply>
				</Logindetails>
			</LoginBox>
			<br />
			<LoginBox>
				<Para>Travel Insurance</Para>
				<Para>
					Secure your Trip with Travel Insurance for just ₹ 10 per person
				</Para>
				<Para>
					<Checkbox type="checkbox"></Checkbox>
					Yes I accepted the{" "}
					<a
						href="https://www.abhibus.com/insterms/TATA_AIG"
						style={{ color: "red", textDecoration: "none" }}
					>
						terms and conditions
					</a>
				</Para>
				<Para>
					<Checkbox type="checkbox"></Checkbox>
					No
				</Para>
			</LoginBox>
			<br />
			<PaymentBox>
        <Headpayment>
          <div>Make Payment</div>
        </Headpayment>
        <div style={{ display: "flex" }}>
          <div className={style.paymentBodyLEFT}>
            <div className={style.MobikwikBody}>
              <div>
                <div>
                  <img
                    width="25px"
                    src="https://static.abhibus.com/img/MobiKwik.png"
                    alt=""
                    srcset=""
                  />
                </div>
                <div>MobiKwik</div>
              </div>
              <div>Rs. 100 Instant Discount</div>
            </div>
            <div className={style.phonepe}>
              <img
                src="https://static.abhibus.com/img/app/icons/phonepe/pp-logo-n.png"
                alt=""
                srcset=""
              />
            </div>
            <div className={style.phonepe}>
              <img
                src="https://static.abhibus.com/img/gpay/gpay-color-48.png"
                alt=""
                srcset=""
              />
            </div>
            <div className={style.phonepe}>
              <h3>
                UPI
              </h3>
            </div>
            <div className={style.phonepe}>
              <h3>
                Wallets
              </h3>
            </div>
            <div className={style.phonepe}>
              <img
                src="https://static.abhibus.com/img/olapostpaid.png"
                alt=""
                srcset=""
              />
            </div>
            <div className={style.phonepe}>
              <h3>
                Credit Cards
              </h3>
            </div>
            <div className={style.phonepe}>
              <h3>
                Debit Cards
              </h3>
            </div>
            <div className={style.phonepe}>
              <h3>
                Net Banking
              </h3>
            </div>
            <div className={style.phonepe}>
              <img
                src="https://static.abhibus.com/img/ap-logo-n.png"
                alt=""
                srcset=""
              />
            </div>
            <div className={style.phonepe}>
              <h3>
                Cash Cards
              </h3>
            </div>
          </div>

          <div className={style.paymentRight}>
              <div>
                  <div><input type="radio" name="" id="" /></div>
                  <div>MobiKwik</div>
              </div>
          </div>
        </div>
      </PaymentBox>
		</div>
	);
};
