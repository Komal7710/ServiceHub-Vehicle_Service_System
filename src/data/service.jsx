import { MdOutlineOilBarrel } from "react-icons/md";
import { MdLocalCarWash } from "react-icons/md";
import { MdCarRepair } from "react-icons/md";
import { MdBatteryChargingFull } from "react-icons/md";
import { GiTyre } from "react-icons/gi";
import { MdOutlineSevereCold } from "react-icons/md";

const services = [
  {
    title: "Oil Change",
    description: "Keep your engine healthy with regular oil change.",
    icon: <MdOutlineOilBarrel />,
  },
  {
    title: "Car Wash",
    description: "Complete car cleaning & Polishing",
    icon: <MdLocalCarWash />,
  },
  {
    title: "Engine Repair",
    description: "Expert reapir and diagnostics for smooth performance",
    icon: <MdCarRepair />,
  },
  {
    title: "Tire Service",
    description: "Wheel alignment balancing and tire replacement",
    icon: <GiTyre/>,
  },
  {
    title: "Battery Service",
    description: "Battery check-up and replacement at best price",
    icon: <MdBatteryChargingFull/>,
  },
  {
    title: "AC Repair",
    description: "AC gas filling and complete AC maintenance",
    icon: <MdOutlineSevereCold/>,
  },
];

export default services