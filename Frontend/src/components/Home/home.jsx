import { useState } from "react";
import "../Home/Home.css";
import logo from "../assets/react.svg";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

function Home() {
  const navigate = useNavigate();
  const [isDialogOpen, setDialogOpen] = useState(false);

  // Specific location (latitude, longitude) - Paris coordinates for this example
  const specificLocation = [14.077232, 121.149712]; // Paris, France

  // Function to open the dialog
  const handleAddRoute = () => {
    setDialogOpen(true);
  };

  // Function to close the dialog
  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="parent-container">
        <div className="dashboard">
          <div className="logo">
            <img src={logo} alt="Logo" />
            <h2>Welcome Admin</h2>
          </div>
          <h3>Dashboard</h3>
          <Button variant="contained" onClick={handleAddRoute}>
            Add Route
          </Button>
          <Button variant="contained">Update Route</Button>
          <Button variant="contained">Delete Route</Button>
          <Button variant="contained">Statistics</Button>

          <Button variant="contained" className="view-map-button">
            View Map
          </Button>

          <Button
            variant="contained"
            onClick={handleLogout}
            className="logout-button"
          >
            Logout
          </Button>
        </div>

        <div className="right-panel">
          {/* Leaflet Map showing only the specific location */}
          <MapContainer
            center={specificLocation} // Set map center to the specific location (Paris)
            zoom={100}
            style={{ height: "400px", width: "50%" }}
            dragging={false} // Disable map dragging
            doubleClickZoom={false} // Disable zooming with double click
            zoomControl={false} // Disable zoom control
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={specificLocation}>
              <Popup>Welcome to FAITH.</Popup>
            </Marker>
          </MapContainer>
        </div>

        {/* Material UI Dialog for adding route */}
        <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
          <DialogTitle>Add New Route</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please enter the details for the new route you want to add.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="route-name"
              label="Route Name"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              margin="dense"
              id="route-description"
              label="Route Description"
              type="text"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button onClick={handleCloseDialog}>Add Route</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}

export default Home;
