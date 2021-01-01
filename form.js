
const list = [
  { text: "e~^", code: "\u0506", name: 'German e sound with high tone' },
  { text: "e~_", code: "\u050a", name: 'German e sound with low tone' },
  { text: "e~", code: "\u0501", name: 'German e sound' },
  { text: "(e~^)", code: "\u0507", name: 'German e sound with high tone and stress' },
  { text: "(e~_)", code: "\u050b", name: 'German e sound with low tone and stress' },
  { text: "(e~)", code: "\u0503", name: 'German e sound with stress' },
  { text: "i+^", code: "\u03d4", name: 'Short i with high tone' },
  { text: "i+_", code: "\u03d8", name: 'Short i with low tone' },
  { text: "i+", code: "\u03d0", name: 'Short i' },
  { text: "(i+^)", code: "\u03d5", name: 'Short i with high tone and stress' },
  { text: "(i+_)", code: "\u03d9", name: 'Short i with low tone and stress' },
  { text: "(i+)", code: "\u03d2", name: 'Short i with stress' },
  { text: "e+^", code: "\u0454", name: 'Short e with high tone' },
  { text: "e+_", code: "\u0458", name: 'Short e with low tone' },
  { text: "e+", code: "\u0450", name: 'Short e' },
  { text: "(e+^)", code: "\u0455", name: 'Short e with high tone and stress' },
  { text: "(e+_)", code: "\u0459", name: 'Short e with low tone and stress' },
  { text: "(e+)", code: "\u0452", name: 'Short e with stress' },
  { text: "a+^", code: "\u03b4", name: 'Short a with high tone' },
  { text: "a+_", code: "\u03b8", name: 'Short a with low tone' },
  { text: "a+", code: "\u03b0", name: 'Short a' },
  { text: "(a+^)", code: "\u03b5", name: 'Short i with high tone and stress' },
  { text: "(a+_)", code: "\u03b9", name: 'Short i with low tone and stress' },
  { text: "(a+)", code: "\u03b2", name: 'Short i with stress' },
  { text: "u+^", code: "\u04a4", name: 'Short u with high tone' },
  { text: "u+_", code: "\u04a8", name: 'Short u with low tone' },
  { text: "u+", code: "\u04a0", name: 'Short u' },
  { text: "(u+^)", code: "\u04a5", name: 'Short u with high tone and stress' },
  { text: "(u+_)", code: "\u04a9", name: 'Short u with low tone and stress' },
  { text: "(u+)", code: "\u04a2", name: 'Short u with stress' },
  { text: "o+^", code: "\u04c4", name: 'Short o with high tone' },
  { text: "o+_", code: "\u04c8", name: 'Short o with low tone' },
  { text: "o+", code: "\u04c0", name: 'Short o' },
  { text: "(o+^)", code: "\u04c5", name: 'Short o with high tone and stress' },
  { text: "(o+_)", code: "\u04c9", name: 'Short o with low tone and stress' },
  { text: "(o+)", code: "\u04c2", name: 'Short o stress' },
  { text: "i~^", code: "\u0434", name: 'German i with high tone' },
  { text: "i~_", code: "\u0438", name: 'German i with low tone' },
  { text: "i~", code: "\u0430", name: 'German i' },
  { text: "(i~^)", code: "\u0435", name: 'German i with high tone and stress' },
  { text: "(i~_)", code: "\u0439", name: 'German i with low tone and stress' },
  { text: "(i~)", code: "\u0432", name: 'German i with stress' },
  { text: "u~^", code: "\u0506", name: 'German u with high tone' },
  { text: "u~_", code: "\u050a", name: 'German u with low tone' },
  { text: "u~", code: "\u0501", name: 'German u' },
  { text: "(u~^)", code: "\u0507", name: 'German u with high tone and stress' },
  { text: "(u~_)", code: "\u050b", name: 'German u with low tone and stress' },
  { text: "(u~)", code: "\u0503", name: 'German u with stress' },
  { text: "o~^", code: "\u0394", name: 'German o with high tone' },
  { text: "o~_", code: "\u0398", name: 'German o with low tone' },
  { text: "o~", code: "\u0390", name: 'German o' },
  { text: "(o~^)", code: "\u0395", name: 'German o with high tone and stress' },
  { text: "(o~_)", code: "\u0399", name: 'German o with low tone and stress' },
  { text: "(o~)", code: "\u0392", name: 'German o with stress' },
  { text: "i^", code: "\u0474", name: 'I sound with high tone' },
  { text: "i_", code: "\u0478", name: 'I sound with low tone' },
  { text: "i", code: "\u0470", name: 'I sound' },
  { text: "(i^)", code: "\u0475", name: 'I sound with high tone and stress' },
  { text: "(i_)", code: "\u0479", name: 'I sound with low tone and stress' },
  { text: "(i)", code: "\u0472", name: 'I sound with stress' },
  { text: "e^", code: "\u0414", name: 'E sound with high tone' },
  { text: "e_", code: "\u0418", name: 'E sound with low tone' },
  { text: "e", code: "\u0410", name: 'E sound' },
  { text: "(e^)", code: "\u0415", name: 'E sound with high tone and stress' },
  { text: "(e_)", code: "\u0419", name: 'E sound with low tone and stress' },
  { text: "(e)", code: "\u0412", name: 'E sound with stress' },
  { text: "a^", code: "\u0504", name: 'A sound with high tone' },
  { text: "a_", code: "\u0508", name: 'A sound with low tone' },
  { text: "a", code: "\u0500", name: 'A sound' },
  { text: "(a^)", code: "\u0505", name: 'A sound with high tone and stress' },
  { text: "(a_)", code: "\u0509", name: 'A sound with low tone and stress' },
  { text: "(a)", code: "\u0502", name: 'A sound with stress' },
  { text: "o^", code: "\u04e4", name: 'O sound with high tone' },
  { text: "o_", code: "\u04e8", name: 'O sound with low tone' },
  { text: "o", code: "\u04e0", name: 'O sound' },
  { text: "(o^)", code: "\u04e5", name: 'O sound with high tone and stress' },
  { text: "(o_)", code: "\u04e9", name: 'O sound with low tone and stress' },
  { text: "(o)", code: "\u04e2", name: 'O sound with stress' },
  { text: "u^", code: "\u03f4", name: 'U sound with high tone' },
  { text: "u_", code: "\u03f8", name: 'U sound with low tone' },
  { text: "u", code: "\u03f0", name: 'U sound with stress' },
  { text: "(u^)", code: "\u03f5", name: 'U sound with high tone and stress' },
  { text: "(u_)", code: "\u03f9", name: 'U sound with low tone and stress' },
  { text: "(u)", code: "\u03f2", name: 'U sound with stress' },
  { text: "m+", code: "\u0102", name: 'M sound with nasal quality' },
  { text: "m", code: "\u0100", name: 'M sound' },
  { text: "n+", code: "\u0142", name: 'Indian n sound' },
  { text: "n", code: "\u0140", name: 'N sound' },
  { text: "q", code: "\u0160", name: 'Ng sound' },
  { text: "g?", code: "\u0138", name: 'Implosive g sound' },
  { text: "g", code: "\u0130", name: 'G sound' },
  { text: "'", code: "\u01b0", name: 'Lack of sound, glottal stop' },
  { text: "\"", code: "\u01b2", name: 'Arabic voiced pharyngeal fricative' },
  { text: "d!", code: "\u006c", name: 'Ejective d sound' },
  { text: "d?", code: "\u0068", name: 'Implosive d sound' },
  { text: "d*", code: "\u0064", name: 'Click d sound' },
  { text: "d+", code: "\u0062", name: 'Indian d sound' },
  { text: "d", code: "\u0060", name: 'D sound' },
  { text: "b?", code: "\u0048", name: 'Implosive b sound' },
  { text: "b!", code: "\u004c", name: 'Ejective b sound' },
  { text: "b", code: "\u0040", name: 'B sound' },
  { text: "p!", code: "\u0038", name: 'Ejective p sound' },
  { text: "p*", code: "\u0034", name: 'Click p sound' },
  { text: "p", code: "\u0030", name: 'P sound' },
  { text: "t+", code: "\u00d2", name: 'Indian t sound' },
  { text: "t!", code: "\u00dc", name: 'Ejective t sound' },
  { text: "t~", code: "\u00d1", name: 'Arabic t sound' },
  { text: "t*", code: "\u00d4", name: 'Click t sound' },
  { text: "t", code: "\u00d0", name: 'T sound' },
  { text: "k!", code: "\u0058", name: 'Ejective k sound' },
  { text: "k*", code: "\u0054", name: 'Click k sound' },
  { text: "k+", code: "\u0052", name: 'Arabic Q sound' },
  { text: "k", code: "\u0050", name: 'K sound' },
  { text: "h~", code: "\u0122", name: 'Arabic voiced h sound' },
  { text: "h+", code: "\u0121", name: 'Hebrew harsh h sound' },
  { text: "h", code: "\u0120", name: 'H sound' },
  { text: "j+", code: "\u0152", name: 'Zulu dl sound' },
  { text: "j", code: "\u0150", name: 'J sound' },
  { text: "s+", code: "\u0072", name: 'Indian s sound' },
  { text: "s~", code: "\u0071", name: 'Arabic s sound' },
  { text: "s", code: "\u0070", name: 'S sound' },
  { text: "f+", code: "\u00c2", name: 'Labial f sound' },
  { text: "f~", code: "\u00c1", name: 'Navajo l sound' },
  { text: "f", code: "\u00c0", name: 'f sound' },
  { text: "v+", code: "\u00f2", name: 'Labial v sound' },
  { text: "v~", code: "\u00f1", name: 'Other v sound' },
  { text: "v", code: "\u00f0", name: 'V sound' },
  { text: "z", code: "\u0090", name: 'Z sound' },
  { text: "c+~", code: "\u00b2", name: 'Arabic voiced th sound' },
  { text: "c+", code: "\u00b0", name: 'Voiced th sound' },
  { text: "c", code: "\u0080", name: 'Unvoiced th sound' },
  { text: "l+", code: "\u0172", name: 'Indian l sound' },
  { text: "l*", code: "\u0174", name: 'Click l sound' },
  { text: "l~", code: "\u0171", name: 'Arabic l sound' },
  { text: "l", code: "\u0170", name: 'L sound' },
  { text: "r~", code: "\u01a2", name: 'French r sound' },
  { text: "r+", code: "\u00e2", name: 'Indian r sound' },
  { text: "r!", code: "\u00e0", name: 'Single rolling r sound' },
  { text: "r", code: "\u01a0", name: 'English r sound' },
  { text: "x~", code: "\u0191", name: 'Chinese sh sound' },
  { text: "x+", code: "\u0192", name: 'Indian sh sound' },
  { text: "x", code: "\u0190", name: 'Sh sound' },
  { text: "w", code: "\u0110", name: 'W sound' },
  { text: "y", code: "\u0180", name: 'Y sound' },
  { text: " ", code: "\u0020", name: 'Hanakana Space' },
  { text: ".", code: "\u0021", name: 'Hanakana Period' },
  { text: ",", code: "\u0024", name: 'Hanakana comma' },
  { text: "(", code: "\u0023", name: 'Hanakana opening parenthesis' },
  { text: ")", code: "\u002b", name: 'Hanakana closing parenthesis' },
  { text: "[", code: "\u0026", name: 'Hanakana opening bracket' },
  { text: "]", code: "\u0027", name: 'Hanakana closing bracket' },
  { text: "|", code: "\u0025", name: 'Hanakana pipe' },
  { text: "@", code: "\u0028", name: 'Hanakana at sign' },
  { text: "/", code: "\u0029", name: 'Hanakana forward slash' },
  { text: "\\", code: "\u002a", name: 'Hanakana backward slash' },
  { text: ":", code: "\u0022", name: 'Hanakana colon' }
]

const look = {}
list.forEach(({ text }) => {
  look[text] = '^' + text.replace(/[\(\)\*\!\?\^\+\_\.\[\]\|\\\/]/g, _ => `\\${_}`)
})

const form = text => {
  let remaining = text
  let output = []
  a:
  while (remaining.length) {
    for (let node of list) {
      const pattern = look[node.text]
      const regex = new RegExp(pattern)
      const match = remaining.match(regex)
      if (match) {
        const val = node.code
        output.push(val)
        remaining = remaining.substr(match[0].length)
        continue a
      }
    }
    throw new Error(`${remaining}:${text}`)
  }
  return output.join('')
}

form.list = list

if (typeof module != 'undefined') {
  module.exports = form
}
