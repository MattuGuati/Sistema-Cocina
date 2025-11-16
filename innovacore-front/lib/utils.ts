import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// Debug logging for environment variable
if (typeof window !== 'undefined') {
  console.log('BASE_URL:', BASE_URL);
  console.log('process.env.NEXT_PUBLIC_BASE_URL:', process.env.NEXT_PUBLIC_BASE_URL);
}
