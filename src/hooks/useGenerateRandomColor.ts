import { useState } from "react";

export const useGenerateRandomColor = (initialColor?: string) => {
    const [color, setColor] = useState(initialColor ?? "#FFFFFF");

    const generateColor = () => {
        const newColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");

        setColor(newColor);
        return newColor;
    }

    const resetColor = () => {
        setColor("#FFFFFF");
    }

    return { color, generateColor, resetColor };
}