import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-light">
      <div className="container-fluid  border-top mt-5 pt-5 text-muted px-3 px-lg-3 m-0 ">
        <div className="row justify-content-around">
          {/* Column 1: Logo aur Social Media (Badi Column) */}
          <div className="col-md-2 mb-4">
            <img
              src="media/image/logo.png"
              style={{ width: "152px" }}
              alt="Zerodha Logo"
              className="mb-3 img-fluid"
            />
            <p className="" style={{ fontSize: "14px" }}>
              © 2010 - 2026, Zerodha Broking Ltd. All rights reserved.
            </p>
            <div className="fs-4 mt-3">
              {/* Social Icons - Inme aria-label zaroori hai error hatane ke liye */}
              <Link
                to={"https://x.com/zerodha"}
                target="_black"className="text-black text-muted me-3 link-primary text-decoration-none"
                aria-label="Twitter"
              >
                <i className="fa fa-twitter-square"></i>
              </Link>
              <Link
                to={"https://www.facebook.com/zerodha.social/"}
                target="_blank"className="text-black text-muted link-primary  me-3 text-decoration-none"
                aria-label="Facebook"
              >
                <i className="fa fa-facebook-square"></i>
              </Link>
              <Link
                to={"https://www.instagram.com/zerodhaonline/?hl=en"}
                target="_blank"className="text-black text-muted link-primary  me-3 text-decoration-none"
                aria-label="Instagram"
              >
                <i className="fa fa-instagram"></i>
              </Link>
              <Link
                to={"https://www.linkedin.com/company/zerodha/?originalSubdomain=in"}
                target="_blank"className="text-black text-muted link-primary  text-decoration-none"
                aria-label="LinkedIn"
              >
                <i className="fa fa-linkedin-square"></i>
              </Link>
            </div>
            <hr />
            <div className="fs-4 mt-3">
              <Link
                to={"https://t.me/zerodhain"}
                target="_blank"className="text-black text-muted link-primary  me-3 text-decoration-none"
                aria-label="Telegram"
              >
                <i className="fa fa-telegram" aria-hidden="true"></i>
              </Link>
              <Link
                to={"https://wa.me/+919964452020"}
                target="_blank"className="text-black text-muted link-primary  me-3 text-decoration-none"
                aria-label="Whatsapp"
              >
                <i className="fa fa-whatsapp" aria-hidden="true"></i>
              </Link>
              <Link
                to={"https://www.youtube.com/channel/UC59YUBhNLMkS2Q8NBWBGHAA"}
                target="_blank"className="text-black text-muted link-primary me-3  text-decoration-none"
                aria-label="Youtube"
              >
                <i className="fa fa-youtube" aria-hidden="true"></i>
              </Link>
              <Link
                to={"https://github.com/zerodha"}
                target="_blank"className="text-black text-muted link-primary  text-decoration-none"
                aria-label="github"
              >
                <i className="fa fa-github" aria-hidden="true"></i>
              </Link>
            </div>
          </div>

          {/* Column 2: Account */}
          <div className="col-md-2 mb-4">
            <h5 className="text-black mb-3">Account</h5>
            <ul className="list-unstyled" style={{ fontSize: "14px" }}>
              <li>
                <a
                  href="#!"
                  className="text-decoration-none text-muted link-primary fw-medium"
                  style={{ lineHeight: "2.4" }}
                >
                  Open demat account
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-decoration-none text-muted link-primary fw-medium"
                  style={{ lineHeight: "2.4" }}
                >
                  Minor account
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-decoration-none text-muted link-primary fw-medium"
                  style={{ lineHeight: "2.4" }}
                >
                  NRI demate account{" "}
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-decoration-none text-muted link-primary fw-medium"
                  style={{ lineHeight: "2.4" }}
                >
                  Commodity{" "}
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-decoration-none text-muted link-primary fw-medium"
                  style={{ lineHeight: "2.4" }}
                >
                  Dematerialisation{" "}
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-decoration-none text-muted link-primary fw-medium"
                  style={{ lineHeight: "2.4" }}
                >
                  Fund transfer{" "}
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-decoration-none text-muted link-primary fw-medium"
                  style={{ lineHeight: "2.4" }}
                >
                  MTF
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-decoration-none text-muted link-primary fw-medium"
                  style={{ lineHeight: "2.4" }}
                >
                  Referral program
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="col-md-2 mb-4">
            <h5 className="text-black mb-3">Support</h5>
            <ul className="list-unstyled" style={{ fontSize: "14px" }}>
              <li>
                <a
                  href="#!"
                  className="text-decoration-none text-muted link-primary fw-medium link-primary fw-medium link-primary fw-medium"
                  style={{ lineHeight: "2.4" }}
                >
                  Contact us
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-decoration-none text-muted link-primary fw-medium link-primary fw-medium link-primary fw-medium"
                  style={{ lineHeight: "2.4" }}
                >
                  Support portal
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-decoration-none text-muted link-primary fw-medium link-primary fw-medium link-primary fw-medium"
                  style={{ lineHeight: "2.4" }}
                >
                  How to file a complaint?
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-decoration-none text-muted link-primary fw-medium link-primary fw-medium link-primary fw-medium"
                  style={{ lineHeight: "2.4" }}
                >
                  Status of your complaints{" "}
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-decoration-none text-muted link-primary fw-medium link-primary fw-medium link-primary fw-medium"
                  style={{ lineHeight: "2.4" }}
                >
                  Bulletin{" "}
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-decoration-none text-muted link-primary fw-medium link-primary fw-medium link-primary fw-medium"
                  style={{ lineHeight: "2.4" }}
                >
                  Circular{" "}
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-decoration-none text-muted link-primary fw-medium link-primary fw-medium link-primary fw-medium"
                  style={{ lineHeight: "2.4" }}
                >
                  Z-Connect blog
                </a>
              </li>
              <li>
                <a
                  href="#!!"
                  className="text-decoration-none text-muted link-primary fw-medium link-primary fw-medium link-primary fw-medium"
                  style={{ lineHeight: "2.4" }}
                >
                  Download{" "}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div className="col-md-2 mb-4">
            <h5 className="text-black mb-3">Company</h5>
            <ul className="list-unstyled" style={{ fontSize: "14px" }}>
              <li>
                <a
                  href="#!"
                  className="text-decoration-none text-muted link-primary fw-medium link-primary fw-medium"
                  style={{ lineHeight: "2.4" }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-decoration-none text-muted link-primary fw-medium link-primary fw-medium"
                  style={{ lineHeight: "2.4" }}
                >
                  Philosphy
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-decoration-none text-muted link-primary fw-medium link-primary fw-medium"
                  style={{ lineHeight: "2.4" }}
                >
                  Press & media
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-decoration-none text-muted link-primary fw-medium link-primary fw-medium"
                  style={{ lineHeight: "2.4" }}
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-decoration-none text-muted link-primary fw-medium link-primary fw-medium"
                  style={{ lineHeight: "2.4" }}
                >
                  Zerodha Cares (CSR)
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-decoration-none text-muted link-primary fw-medium link-primary fw-medium"
                  style={{ lineHeight: "2.4" }}
                >
                  Zerodha.tech
                </a>
              </li>
              <li>
                <a
                  href="#!!"
                  className="text-decoration-none text-muted link-primary fw-medium link-primary fw-medium"
                  style={{ lineHeight: "2.4" }}
                >
                  Open source
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Quick Link */}
          <div className="col-md-2 mb-4">
            <h5 className="text-black mb-3">Quick Link</h5>
            <ul className="list-unstyled" style={{ fontSize: "14px" }}>
              <li>
                <a
                  href="#!"
                  className="text-decoration-none text-muted link-primary fw-medium"
                  style={{ lineHeight: "2.4" }}
                >
                  Upcoming IPOs
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-decoration-none text-muted link-primary fw-medium"
                  style={{ lineHeight: "2.4" }}
                >
                  Brokerage charges
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-decoration-none text-muted link-primary fw-medium"
                  style={{ lineHeight: "2.4" }}
                >
                  Market holidays
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-decoration-none text-muted link-primary fw-medium"
                  style={{ lineHeight: "2.4" }}
                >
                  Economic calendar
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-decoration-none text-muted link-primary fw-medium"
                  style={{ lineHeight: "2.4" }}
                >
                  Calculators
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-decoration-none text-muted link-primary fw-medium"
                  style={{ lineHeight: "2.4" }}
                >
                  Markets
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className="text-decoration-none text-muted link-primary fw-medium"
                  style={{ lineHeight: "2.4" }}
                >
                  Sectors
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p style={{ fontSize: "11px" }} className="text-muted">
          Zerodha Broking Ltd.: Member of NSE, BSE &amp; MCX SEBI Registration
          no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
          Broking Ltd. SEBI Registration no.: IN-DP-431-2019 Registered Address:
          Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp.
          Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078,
          Karnataka, India. For any complaints pertaining to securities broking
          please write to
          {" "}
          <a href="#!" className="text-decoration-none">
            complaints@zerodha.com
          </a>
          , for DP related to{" "}
          <a href="#!" className="text-decoration-none">
            dp@zerodha.com.
          </a>{" "}
          Please ensure you carefully read the Risk Disclosure Document as
          prescribed by SEBI | ICF
        </p>
        <p style={{ fontSize: "11px" }} className="text-muted">
          Procedure to file a complaint on{" "}
          <a href="#!" className="text-decoration-none">
            SEBI SCORES:
          </a>{" "}
          Register on SCORES portal. Mandatory details for filing complaints on
          SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
          Effective Communication, Speedy redressal of the grievances
        </p>
        <a
          href="#!"
          style={{ fontSize: "12px" }}
          className="text-decoration-none"
        >
          Smart Online Dispute Resolution
        </a>
        &nbsp;
        <a
          href="#!"
          style={{ fontSize: "12px" }}
          className="text-decoration-none"
        >
          Grievances Redressal Mechanism
        </a>
        <p style={{ fontSize: "11px" }} className="text-muted">
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.
        </p>
        <p style={{ fontSize: "11px" }} className="text-muted">
          Attention investors: 1 &#41; Stock brokers can accept securities as
          margins from clients only by way of pledge in the depository system
          w.e.f September 01, 2020. 2 &#41; Update your e-mail and phone number
          with your stock broker / depository participant and receive OTP
          directly from depository on your e-mail and/or mobile number to create
          pledge. 3 &#41; Check your securities / MF / bonds in the consolidated
          account statement issued by NSDL/CDSL every month.
        </p>
        <p style={{ fontSize: "11px" }} className="text-muted">
          India's largest broker based on networth as per NSE.{" "}
          <a href="#!" className="text-decoration-none">
            NSE broker factsheet
          </a>
        </p>
        <p style={{ fontSize: "11px" }} className="text-muted">
          "Prevent unauthorised transactions in your account. Update your mobile
          numbers/email IDs with your stock brokers. Receive information of your
          transactions directly from Exchange on your mobile/email at the end of
          the day. Issued in the interest of investors. KYC is one time exercise
          while dealing in securities markets - once KYC is done through a SEBI
          registered intermediary &#40; broker, DP, Mutual Fund etc. &#41;, you
          need not undergo the same process again when you approach another
          intermediary." Dear Investor, if you are subscribing to an IPO, there
          is no need to issue a cheque. Please write the Bank account number and
          sign the IPO application form to authorize your bank to make payment
          in case of allotment. In case of non allotment the funds will remain
          in your bank account. As a business we don't give stock tips, and have
          not authorized anyone to trade on behalf of others. If you find anyone
          claiming to be part of Zerodha and offering such services, please{" "}
          <a href="#!" className="text-decoration-none">
            create a ticket here.
          </a>
        </p>
        <p style={{ fontSize: "11px" }} className="text-muted">
          Customers availing insurance advisory services offered by Ditto
          &#40;Tacterial Consulting Private Limited | IRDAI Registered Corporate
          Agent &#40; Composite &#41; License No CA0738&#41; will not have
          access to the exchange investor grievance redressal forum, SEBI
          SCORES/ODR, or arbitration mechanism for such products.
        </p>

        {/* Footer last anchor section */}
        <div className="sub-footer">
          <div className="container pb-4">
            <ul className="footer-links">
              <li>
                <a rel="nofollow" href="#!" >
                  NSE
                </a>
              </li>
              <li>
                <a rel="nofollow" href="#!">
                  BSE
                </a>
              </li>
              <li>
                <a rel="nofollow" href="#!">
                  MCX
                </a>
              </li>
              <li>
                <a rel="nofollow" href="#!">
                  Terms-conditions
                </a>
              </li>
              <li>
                <a rel="nofollow" href="#!">
                  Policies& procedures
                </a>
              </li>
              <li>
                <a rel="nofollow" href="#!">
                  Privacay policy
                </a>
              </li>
              <li>
                <a rel="nofollow" href="#!">
                  Disclosure
                </a>
              </li>
              <li>
                <a rel="nofollow" href="#!">
                  For investor's attention
                </a>
              </li>
              <li>
                <a rel="nofollow" href="#!">
                  Investor charter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
