import DateReserve from "@/components/DateReserve";
import { TextField } from "@mui/material";
import FormControl from '@mui/material/FormControl';

export default function Booking() {
  return (
    <main className="w-full flex flex-col items-center space-y-4">
        <h1 className="text-4xl font-semibold m-5 text-black">Venue Booking</h1>
      <FormControl>
        <div className="text-gray-500 m-2">Reserve Date and the Venue</div>
        <DateReserve />
        <TextField variant="standard" className="h-6" name="Name-Lastname" label="Name-LastName" placeholder="Name-Lastname"/>
        <div className="h-5"></div>
        <TextField variant="standard" className="h-6" name="Contact-Number" label="Contact-Number" placeholder="Contact-Number"/>
        <button type="submit">Book Venue</button>
      </FormControl> 
    </main>
  );
}