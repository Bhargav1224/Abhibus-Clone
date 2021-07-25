import styled from "styled-components";
import { useHistory } from "react-router";
import React, { useContext, useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import ClearIcon from "@material-ui/icons/Clear";
import style from "./Passenger.module.css";
import { Timer } from "./Timer";

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
  /* height: 750px; */
  width: 22%;
  margin-right: 3%;
  margin-top: -9%;
  border: 1px solid rgb(206, 202, 202);
  float: right;
  background-color: rgb(239,239,239);
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
  display: flex;
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
  &:disabled{
	  background-color:grey;
	  color:red;
  }
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
const Stripe = styled.div`
margin-left:30%;
margin-top: 30%;
`
const Striped = styled(StripeCheckout)`
width: 150px;
height: 50px;
margin: 10%;
background-color:rgb(125, 197, 238);
`

const init = {
  email: "",
  phone_number: "",
  emergency_no: "",
  name: "",
  age: "",
  gender: ""
};

export const Passenger = init => {
  const history = useHistory();
  const [data, setData] = useState(init);
  const { email, phone_number, emergency_no, name, age, gender } = data;
  const [julyCpn, setJulyCpn] = React.useState(false);
  const [otherCpn, setOtherCpn] = React.useState(false);
  const [code, setCode] = React.useState("");

  // console.log(otherCpn);

  const [passdata, setPassData] = useState([]);

  const handleChange = e => {
    let { name, value } = e.target;

    setData({ ...data, [name]: value });
  };

  const details = localStorage.getItem("details");
  let value = JSON.parse(details);
  //   console.log(value);
  //   var new_total;
  if (julyCpn === true) {
    var total = value.total - 0.1 * value.total;
    console.log(total);

    // 	  const obj = { ...value, total: Number(new_total) };
    //   console.log(obj);
    //   localStorage.setItem("details", JSON.stringify(obj));
  }
  if (otherCpn === true) {
    var total = value.total - 0.05 * value.total;
    console.log(total);
  }

  const handleRemoveCpn = () => {
    if (julyCpn === true) {
      setJulyCpn(false);
    } else if (otherCpn === true) {
      setOtherCpn(false);
    }
    var new_total = value?.total;
    console.log(new_total);
    const obj = { ...value, final_total:value.total };
    console.log(obj);
    localStorage.setItem("details", JSON.stringify(obj));
  };
  let handleCoupon = () => {
    if (code === "ABN7") {
      var total = value.total - 0.07 * value.total;
      console.log(total);
    }
    const obj = { ...value, final_total: total };
    console.log(obj);
    localStorage.setItem("details", JSON.stringify(obj));
  };
  const obj = { ...value, final_total: total };
  console.log(obj);
  localStorage.setItem("details", JSON.stringify(obj));
  //
  async function handleToken(token) {
    const response = await axios.post("https://aroul303.herokuapp.com/payment", { token, details });
    const status = response.data.token.id;
    const rate = response.data.details.plan;
    history.push("/");
    if (status) {
      // setispay(true);
      toast(`Successfully completed ${rate} subscription`, { type: "success" });
      // history.push("/")
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }

  const handlePassengerdetails = () => {
    const payload = {
      email,
      mobile: phone_number,
      emergency_Contact: emergency_no,
      name,
      age,
      gender: gender
    };

    return axios
      .post("http://localhost:8000/passengers", payload)
      .then(res => {
        setPassData(res.data);
      })
      .catch(er => {
        console.log(er);
      });
  };

  return (
    <div>
      <Heading>Passenger Details</Heading>
      <LoginBox>
        <Para>Login (to avail better offers and services)</Para>
        <Logindetails>
          <Input placeholder="Enter Mobile Number" />
          <SendOtp>Send OTP</SendOtp>
          <Para>or</Para>
          <a href="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Fauth%2Fgoogle%2Fcallback&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&client_id=557229965892-qma0eslieva1g3nt9dqhg2mrj51htqe6.apps.googleusercontent.com&flowName=GeneralOAuthFlow">
            <Fbook src="https://static.abhibus.com/img/search/facebook_short.png" />
          </a>
          <a href="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Fauth%2Fgoogle%2Fcallback&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&client_id=557229965892-qma0eslieva1g3nt9dqhg2mrj51htqe6.apps.googleusercontent.com&flowName=GeneralOAuthFlow">
            <Google src="https://static.abhibus.com/img/search/google_short.png" />
          </a>
        </Logindetails>
      </LoginBox>
      <DetailsBox>
        <div className={style.Timer}>
          <div>
            <Timer />
          </div>
          <div>Minutes to Just Bus It</div>
        </div>
        <div className={style.OnWards}>
          <div>Onward</div>
          <div>
            <div>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/bus-3916885-3244687.png"
                alt=""
                srcset=""
              />
            </div>
            <div className={style.busDetail}>
              <h5>{value.busname}</h5>
              <p>Sleeper/Seater</p>
              <p>Seats {value.seatSelected.join(", ")}</p>
              <p>{value.date}</p>
            </div>
          </div>
        </div>
        <div>
          <div className={style.travelDetails}>
            <div className={style.boldtext}><li>{value.from}</li> </div>
            <div>{value.boarding}</div>
            <div>{value.date}</div>
            <div style={{marginTop:"40px"}} className={style.boldtext}><li>{value.to}</li> </div>
            <div>{value.droping}</div>
            <div>2021-07-27 </div>
          </div>
        </div>
		<div style={{border: "1px solid rgb(190, 189, 189)"}}>
			<div className={style.fareDetails}>Fare Details</div>
			<div>
				<div>Total Fare</div>
				<div>₹ {value.total}</div>
			</div>
			<div>
				<div>Service Charge</div>
				<div>₹ 16.20</div>
			</div>
		</div>
		<div className={style.payable}>
			<div>Net Payable</div>
			<div>₹ {value.final_total?value.final_total+16.20:value.total}</div>
		</div>
      </DetailsBox>
      <br />
      <LoginBox>
        <Para>Enter Contact details ( Your booking details will be sent to your email address and contact no. )</Para>
        <Logindetails>
          <Input name="email" onChange={handleChange} value={email} type="email" placeholder="Enter Your mailID" />

          <Input type="text" onChange={handleChange} name="phone_number" value={phone_number} placeholder="Mobile No" />
          <Input
            type="text"
            onChange={handleChange}
            name="emergency_no"
            value={emergency_no}
            placeholder="Emergency Contact Mobile No"
          />
        </Logindetails>
      </LoginBox>
      <br />
      <LoginBox>
        <Para>Enter passenger details Please review passenger details before making the booking</Para>
        <Logindetails>
          <Input type="text" onChange={handleChange} name="name" value={name} placeholder="Enter Full Name" />
          <Input type="number" name="age" onChange={handleChange} value={age} placeholder="Enter Age" />
          <Select name="gender" onChange={handleChange}>
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
          <Checkbox
		    disabled={otherCpn==true}
            type="checkbox"
            checked={julyCpn === true}
            onChange={e => {
              setJulyCpn(e.target.checked);
            }}
          />
          This July get upto 500/- discount : Use coupon JUL10 ,get Upto RS.500/- instant discount
          {julyCpn === true && (
            <div>
              <ClearIcon onClick={handleRemoveCpn} />
            </div>
          )}
        </Para>
        <Para>
          <Checkbox
		  disabled={julyCpn==true}
            checked={otherCpn === true}
            type="checkbox"
            onChange={e => {
              setOtherCpn(e.target.checked);
            }}
          />
          Save Maximum 250/- on pay with rewards : Use coupon OTH5 ,get 5% instant off
          {otherCpn === true && (
            <div>
              <ClearIcon onClick={handleRemoveCpn} />
            </div>
          )}
        </Para>
        <Logindetails>
          <CouponCode
            placeholder="Coupon Code"
            value={julyCpn === true ? "JUL10" : otherCpn === true ? "OTH5" : code}
            onChange={e => {
              setCode(e.target.value);
					  }}
					  disabled={julyCpn === true|| otherCpn === true}
          />
          <Apply onClick={handleCoupon}>Apply</Apply>
        </Logindetails>
      </LoginBox>
      <br />
      <LoginBox>
        <Para>Travel Insurance</Para>
        <Para>Secure your Trip with Travel Insurance for just ₹ 10 per person</Para>
        <Para>
          <Checkbox type="checkbox" />
          Yes I accepted the{" "}
          <a href="https://www.abhibus.com/insterms/TATA_AIG" style={{ color: "red", textDecoration: "none" }}>
            terms and conditions
          </a>
        </Para>
        <Para>
          <Checkbox type="checkbox" />
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
                  <img width="25px" src="https://static.abhibus.com/img/MobiKwik.png" alt="" srcset="" />
                </div>
                <div>MobiKwik</div>
              </div>
              <div>Rs. 100 Instant Discount</div>
            </div>
            <div className={style.phonepe}>
              <img src="https://static.abhibus.com/img/app/icons/phonepe/pp-logo-n.png" alt="" srcset="" />
            </div>
            <div className={style.phonepe}>
              <img src="https://static.abhibus.com/img/gpay/gpay-color-48.png" alt="" srcset="" />
            </div>
            <div className={style.phonepe}>
              <h3>UPI</h3>
            </div>
            <div className={style.phonepe}>
              <h3>Wallets</h3>
            </div>
            <div className={style.phonepe}>
              <img src="https://static.abhibus.com/img/olapostpaid.png" alt="" srcset="" />
            </div>
            <div className={style.phonepe}>
              <h3>Credit Cards</h3>
            </div>
            <div className={style.phonepe}>
              <h3>Debit Cards</h3>
            </div>
            <div className={style.phonepe}>
              <h3>Net Banking</h3>
            </div>
            <div className={style.phonepe}>
              <img src="https://static.abhibus.com/img/ap-logo-n.png" alt="" srcset="" />
            </div>
            <div className={style.phonepe}>
              <h3>Cash Cards</h3>
            </div>
          </div>

          <div className={style.paymentRight}>
            <br />
            <br />
            <Stripe onClick={handlePassengerdetails}>
              <Striped
                stripeKey="pk_test_51J2c5MSJXP7UJEsaX09X6zs7lMCN3XUj3PYnH67gO15T98UKO3njq0h54A4GMrp28KRX9J0nGgs5nKB0ddJVownD00w9wRgoZa"
                token={handleToken}
                price={value.total}
                label="Make Payment"
                className="redButton"
              />
            </Stripe>
          </div>
        </div>
      </PaymentBox>
    </div>
  );
};
