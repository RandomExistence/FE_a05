'use client'
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs }  from "@mui/x-date-pickers/AdapterDayjs";
import { Select , MenuItem } from "@mui/material";

export default function DateReserve() {
  return (
    <div className="bg-blue-100 rounded-lg space-x-5 space-y-2 w-fit px-10 py-5 flex flex-row justify-center">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker className="bg-white"/>
      </LocalizationProvider>
      <Select variant="standard" name="venue" id="venue" className="h-[2em] w-[200px]">
        <MenuItem role="option" value="Bloom" selected>The Bloom Pavilion</MenuItem>
        <MenuItem role="option" value="Spark">Spark Space</MenuItem>
        <MenuItem role="option" value="GrandTable">The Grand Table</MenuItem>
      </Select>
    </div>
  );
}