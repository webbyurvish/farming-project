import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import dayjs from "dayjs";
import {
  LocalizationProvider,
  DesktopDateTimePicker,
  MobileDateTimePicker,
} from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Book a session Now</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Send a request for Mentorship session
          </Typography>
          <div>
            <label
              htmlFor="firstname"
              className="block text-sm font-medium text-gray-700 undefined"
            >
              Topic
            </label>
            <div className="flex flex-col items-start">
              <input
                type="text"
                name="firstname"
                required
                onChange={(event) => {
                  setFirstName(event.target.value);
                }}
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="bio"
              className="block text-sm font-medium text-gray-700 undefined"
            >
              What you Expect From Mentor
            </label>
            <div className="flex flex-col items-start">
              <textarea
                type="text"
                name="bio"
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
                required
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              ></textarea>
            </div>
          </div>
          <MobileDateTimePicker
            label="Select date and time"
            value={selectedDate}
            onChange={handleDateChange}
            renderInput={(props) => <TextField {...props} />}
          />
          {/* <MobileDateTimePicker defaultValue={dayjs("2022-04-17T15:30")} /> */}
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
