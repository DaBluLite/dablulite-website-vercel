export function $e(funcArray: Array<(...vars: any) => void>, ...vars: any[]) {
    funcArray.forEach(e => e(vars));
}

export function hslToHex(h: number, s: number, l: number) {
    h /= 360;
    s /= 100;
    l /= 100;
    let r: any, g: any, b: any;
    if (s === 0) {
        r = g = b = l; // achromatic
    } else {
        const hue2rgb = (p: number, q: number, t: number) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    const toHex = (x: number) => {
        const hex = Math.round(x * 255).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

export function rgbToHex(r: number, g: number, b: number) {
    const toHex = (x: number) => {
        const hex = Math.round(x * 255).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

export function colorToHex(color: string) {
    var colorType = "hex";
    if (color.includes("hsl")) {
        colorType = "hsl";
    } else if (color.includes("rgb")) {
        colorType = "rgb";
    }
    color = color.replaceAll(",", "").replace(/.+?\(/, "").replace(")", "").replaceAll(/[ \t]+\/[ \t]+/g, " ").replaceAll("%", "").replaceAll("/", "");
    if (colorType === "hsl") {
        color = hslToHex(Number(color.split(" ")[0]), Number(color.split(" ")[1]), Number(color.split(" ")[2]));
    }
    if (colorType === "rgb") {
        color = rgbToHex(Number(color.split(" ")[0]), Number(color.split(" ")[1]), Number(color.split(" ")[2]));
    }
    return color.replace("#", "");
}