// вместо собственного интерфейса просто реэкспортируем LocationPin
import type { LocationPin } from "@/app/sections/home/Location/types";

export type MapPinTypes = LocationPin; // единый тип на проект
