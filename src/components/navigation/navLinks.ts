import { NavigateFunction } from "react-router-dom";
import {
  Bolt,
  Cloud,
  Dashboard,
  DevicesOther,
  Light,
  MeetingRoom,
  Security,
  SvgIconComponent,
  Thermostat,
  Videocam,
} from "@mui/icons-material";

export interface ViewLink {
  id: number;
  name: string;
  url: string;
  Icon: SvgIconComponent;
  comment?: string;
  clickHandler: (navigate: NavigateFunction) => void;
}

const viewLinks: ViewLink[] = [
  {
    id: 1,
    name: "Overview",
    url: "/overview",
    Icon: Dashboard,
    clickHandler: (navigate: NavigateFunction) => navigate("/overview"),
  },
  {
    id: 2,
    name: "Lights",
    url: "/lights",
    Icon: Light,
    clickHandler: (navigate: NavigateFunction) => navigate("/lights"),
  },
  {
    id: 3,
    name: "Doors & Windows",
    url: "/doors",
    Icon: MeetingRoom,
    clickHandler: (navigate: NavigateFunction) => navigate("/doors"),
  },
  {
    id: 4,
    name: "Temperature",
    url: "/temp",
    Icon: Thermostat,
    clickHandler: (navigate: NavigateFunction) => navigate("/temp"),
  },
  {
    id: 5,
    name: "Weather",
    url: "/weather",
    Icon: Cloud,
    clickHandler: (navigate: NavigateFunction) => navigate("/weather"),
  },
  {
    id: 6,
    name: "Security",
    url: "/security",
    Icon: Security,
    clickHandler: (navigate: NavigateFunction) => navigate("/security"),
  },
  {
    id: 7,
    name: "Cameras",
    url: "/cameras",
    Icon: Videocam,
    clickHandler: (navigate: NavigateFunction) => navigate("/cameras"),
  },
  {
    id: 8,
    name: "Energy",
    url: "/power",
    Icon: Bolt,
    clickHandler: (navigate: NavigateFunction) => navigate("/power"),
  },
  {
    id: 9,
    name: "Gadgets",
    url: "/gadgets",
    Icon: DevicesOther,
    clickHandler: (navigate: NavigateFunction) => navigate("/gadgets"),
  },
];

export default viewLinks;
