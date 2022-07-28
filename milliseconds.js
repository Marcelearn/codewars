
function milliseconds(stunde, minute, secunde){
    const h = m *60;
    const s = 1000;
    const m = s * 60;
    return (h*stunde) + (m * minute) + (secunde * s);
}
console.log(milliseconds(01, 02, 1)) 
