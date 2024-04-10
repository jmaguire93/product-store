export default function roundToTwoDecimals(num: number) {
  return Math.round((num + Number.EPSILON) * 100) / 100
}
