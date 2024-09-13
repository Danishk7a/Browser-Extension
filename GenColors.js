function generateColorPalette(baseColor, numColors = 5, variationType = 'analogous') {
    // Convert hex to HSL
    const hexToHSL = (hex) => {
      let r = parseInt(hex.slice(1, 3), 16) / 255;
      let g = parseInt(hex.slice(3, 5), 16) / 255;
      let b = parseInt(hex.slice(5, 7), 16) / 255;
  
      let max = Math.max(r, g, b), min = Math.min(r, g, b);
      let h, s, l = (max + min) / 2;
  
      if (max === min) {
        h = s = 0; // achromatic
      } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r: h = (g - b) / d + (g < b ? 6 : 0); break;
          case g: h = (b - r) / d + 2; break;
          case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
      }
  
      return [h * 360, s * 100, l * 100];
    };
  
    // Convert HSL to hex
    const hslToHex = (h, s, l) => {
      l /= 100;
      const a = s * Math.min(l, 1 - l) / 100;
      const f = n => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');
      };
      return `#${f(0)}${f(8)}${f(4)}`;
    };
  
    // Generate palette
    const [h, s, l] = hexToHSL(baseColor);
    let palette = [baseColor];
  
    for (let i = 1; i < numColors; i++) {
      let newH, newS, newL;
  
      switch (variationType) {
        case 'analogous':
          newH = (h + i * 30) % 360;
          newS = s;
          newL = l;
          break;
        case 'monochromatic':
          newH = h;
          newS = s;
          newL = Math.max(0, Math.min(100, l + i * 10 - 20));
          break;
        case 'triad':
          newH = (h + i * 120) % 360;
          newS = s;
          newL = l;
          break;
        case 'complementary':
          newH = (h + i * 180) % 360;
          newS = s;
          newL = l;
          break;
        default:
          throw new Error('Invalid variation type');
      }
  
      palette.push(hslToHex(newH, newS, newL));
    }
  
    return palette;
  }
  
  // Example usage
  console.log(generateColorPalette('#3498db')); // Default: analogous
  console.log(generateColorPalette('#3498db', 5, 'monochromatic'));
  console.log(generateColorPalette('#3498db', 3, 'triad'));
  console.log(generateColorPalette('#3498db', 2, 'complementary'));


const getDataBuffer = ()=>{
  
}