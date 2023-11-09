import "../new/new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadRoundedIcon from "@mui/icons-material/DriveFolderUploadRounded";
function New() {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="New_top">
          <h1 className="New_top_title">Add new user</h1>
        </div>
        <div className="New_bottom">
          <div className="New_bottom_left">
            <img
              src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              alt="Image here"
            />
          </div>
          <div className="New_bottom_right">
            <form>
              <div className="FormInput">
                <label htmlFor="file">
                  Image:{" "}
                  <DriveFolderUploadRoundedIcon className="image_upload_icon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <div className="FormInput">
                <label>Username</label>
                <input type="text" placeholder="john_doe" />
              </div>
              <div className="FormInput">
                <label>Name and Surname</label>
                <input type="text" placeholder="John Doe" />
              </div>
              <div className="FormInput">
                <label>Email</label>
                <input type="Email" placeholder="john_doe@gmail.com" />
              </div>
              <div className="FormInput">
                <label>Phone</label>
                <input type="text" placeholder="+123 456 78" />
              </div>
              <div className="FormInput">
                <label>Password</label>
                <input type="password" />
              </div>
              <div className="FormInput">
                <label>Address</label>
                <input type="text" placeholder="Elotn st.216 NewYork" />
              </div>
              <div className="FormInput">
                <label>country</label>
                <input type="text" placeholder="USA" />
              </div>
              <button>send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;
