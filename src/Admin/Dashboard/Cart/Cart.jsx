import "./Cart.css";
import { ArrowForward } from "@material-ui/icons";

export default function Cart() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">50</span>
        </div>
        <span className="featuredSub">Upload Foto</span>
        <span className="featuredMoneyRate"> <ArrowForward/> </span>
      </div>
      <div className="featuredItem">
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">1000</span>
        </div>
        <span className="featuredSub">Total Unduhan</span>
        <span className="featuredMoneyRate"> <ArrowForward/> </span>

      </div>
      <div className="featuredItem">
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">50</span>
        </div>
        <span className="featuredSub">Share Link</span>
        <span className="featuredMoneyRate"> <ArrowForward/> </span>

      </div>
      <div className="featuredItem">
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">50</span>
        </div>
        <span className="featuredSub">Share Link</span>
        <span className="featuredMoneyRate"> <ArrowForward/> </span>

      </div>
    </div>
  );
}
